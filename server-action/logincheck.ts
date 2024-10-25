"use server";

import dbConnect from "@/lib/dbConnect";
import { User } from "@/model/userModel";
import { compare } from "bcryptjs";
import { CredentialsSignin } from "next-auth";

export const authLoginCheck = async (
  credentials: Partial<Record<"email" | "password", unknown>>
) => {
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

  if (!isMatch) throw new CredentialsSignin({ cause: "invalid password" });
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};
