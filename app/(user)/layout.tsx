import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import UserNavbar from "./_components/UserNavbar";
import { Button } from "react-day-picker";
import { logoutUser } from "@/server-action/user";
import Link from "next/link";
import UnauthorizePage from "./_components/UnauthorizePage";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  if (!session?.user) redirect("/login");
  if (session?.user.role !== "user") {
    return <UnauthorizePage />;
  }
  console.log("session: ", session);
  return (
    <>
      <div className="w-full h-screen flex flex-col ">
        <UserNavbar />
        {children}
      </div>
    </>
  );
};

export default layout;
