"use client";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "./context/userContext";

export const AuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      <UserProvider>{children}</UserProvider>
    </SessionProvider>
  );
};
