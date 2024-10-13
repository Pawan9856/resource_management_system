import mongoose from "mongoose";
export type UserModelType = {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
};

export type RequestModelType = {
  _id: mongoose.Schema.Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
  description: string;
  resourceName: string;
  createdBy: mongoose.Schema.Types.ObjectId;
  status: "pending" | "accepted" | "rejected";
};


export type RequestType = Omit<RequestModelType, "createdBy"> & {
  createdBy: UserModelType;
};
