import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

// Assuming you have type definitions for connectDB and User (from MongoDB)
import { connectDB, User } from "@/util/database";
import { MongoClient } from "mongodb";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: "Github에서 발급받은 ID",
      clientSecret: "Github에서 발급받은 Secret",
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(
        credentials: Record<string, string>
      ): Promise<User | null> {
        if (!credentials || !credentials.email || !credentials.password) {
          // Handle missing credentials or invalid format
          return null;
        }

        let db = ((await connectDB) as MongoClient).db("forum");
        let user = await db.collection<User>("user_cred").findOne({
          email: credentials.email,
        });

        if (!user) {
          console.log("해당 이메일은 없음");
          return null;
        }

        const pwcheck = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!pwcheck) {
          console.log("비번틀림");
          return null;
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {
          name: user.name,
          email: user.email,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },

  adapter: MongoDBAdapter(connectDB),
  secret: "qwer1234",
};

export default NextAuth(authOptions);
