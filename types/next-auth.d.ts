// next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;  // Add role to user
    } & DefaultSession["user"];
  }

  interface User {
    role: string;  // Add role to User
  }
}
