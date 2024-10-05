import { auth } from "@/auth";
import React from "react";
import UserDashboard from "./_components/UserDashboard";
import AdminDashboard from "./_components/AdminDashboard";

const page = async () => {
  const session = await auth();
  if (session?.user.role === "admin") return <AdminDashboard />;
  return <UserDashboard />;
};

export default page;
