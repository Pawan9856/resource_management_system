import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import dbConnect from "./lib/dbConnect";
import { User } from "./model/userModel";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;
        if (!email || !password)
          throw new CredentialsSignin({
            cause: "please provide both email and password",
          });

        //connect to db
        dbConnect();

        const user = await User.findOne({ email }).select("+password");

        if (!user) throw new CredentialsSignin({ cause: "user not found" });

        const isMatch = await compare(password, user.password);

        if (!isMatch)
          throw new CredentialsSignin({ cause: "invalid password" });

        return {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role as string; // Explicitly cast to string
      session.user.id = token.id as string;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
