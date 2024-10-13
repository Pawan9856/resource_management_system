"use server";

import dbConnect from "@/lib/dbConnect";
import { Request } from "@/model/requestModel";
import { RequestModelType } from "@/types/model-type";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export const createRequest = async ({
  date,
  startTime,
  endTime,
  resourceName,
  description,
  createdBy,
}: {
  date: Date;
  startTime: string;
  endTime: string;
  resourceName: string;
  description: string;
  createdBy: string;
}) => {
  if (!ObjectId.isValid(createdBy)) throw new Error("Invalid user id");
  const userId = new ObjectId(createdBy);
  const request = {
    date,
    startTime,
    endTime,
    description,
    resourceName,
    createdBy: userId,
    status: "pending",
  };
  console.log("request: ", request);
  await dbConnect();
  await Request.create(request);
};

export const getAllRequests = async () => {
  await dbConnect();
  const requests = await Request.find({}).populate("createdBy").lean();
  return JSON.parse(JSON.stringify(requests));
};

export const getRequestsByUser = async (userId: string) => {
  if (!ObjectId.isValid(userId)) throw new Error("You are not Login");
  const userIdObject = new ObjectId(userId);
  await dbConnect();
  const requests = await Request.find({ createdBy: userIdObject });
  return JSON.parse(JSON.stringify(requests));
};

export const deleteRequest = async (id: mongoose.Schema.Types.ObjectId) => {
  try {
    await dbConnect();
    await Request.deleteOne({ _id: id });
    return {
      success: true,
      message: "booking Request deleted successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: String(error),
    };
  }
};
