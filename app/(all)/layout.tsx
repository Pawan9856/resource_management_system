import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import UserNavbar from "../(user)/_components/UserNavbar";
import AdminNavbar from "../(admin)/_components/AdminNavbar";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  if (!session?.user) redirect("/login");
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        {session?.user.role === "admin" ? <AdminNavbar /> : <UserNavbar />}
        {children}
      </div>
    </>
  );
};

export default layout;