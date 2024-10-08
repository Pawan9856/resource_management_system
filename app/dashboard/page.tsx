import { auth } from "@/auth";
import React from "react";
import UserDashboard from "./_components/(user)/UserDashboard";
import AdminDashboard from "./_components/(admin)/AdminDashboard";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session?.user.role === "admin") {
    return <AdminDashboard />;
  }
  redirect("/dashboard/all-booking");
};

export default page;
