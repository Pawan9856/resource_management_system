"use server";

import dbConnect from "@/lib/dbConnect";
import { User } from "@/model/userModel";
import { hash } from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { UserModelType } from "@/types/model-type";
import mongoose from "mongoose";
import { Request } from "@/model/requestModel";

export const signUpUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    await dbConnect();

    const user = await User.findOne({ email });
    if (user) throw new Error("user already exists");

    const hashedPassword = await hash(password, 10);
    await User.create({ name, email, password: hashedPassword });
    console.log("user created");
    return {
      success: true,
      message: "User Signup Successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: String(error),
    };
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    await signIn("credentials", {
      email,
      password,
    });
    
  } catch (error) {
    const err = error as CredentialsSignin;
    return err.cause;
  }
};

export const logoutUser = async () => {
  await signOut();
};

export const getAllUser = async () => {
  try {
    await dbConnect();
    const res = await User.find({});
    return {
      success: true,
      data: JSON.parse(JSON.stringify(res)),
    };
  } catch (error) {
    return {
      success: false,
      message: String(error),
    };
  }
};
export const deleteUser = async (id: mongoose.Schema.Types.ObjectId) => {
  try {
    await dbConnect();
    await User.findByIdAndDelete(id);
    await Request.deleteMany({ createdBy: id });
    return {
      success: true,
      message: "user deleted successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: String(error),
    };
  }
};
