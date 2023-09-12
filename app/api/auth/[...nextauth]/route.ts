import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/util/database";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        loginEmail: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        loginPassword: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { loginEmail, loginPassword } = credentials;
        try {
          await connectDB();
          const user = await User.findOne({ email: loginEmail });
          console.log(user);
          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(
            loginPassword,
            user.password
          );

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
