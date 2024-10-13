import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import UnauthorizePage from "./_components/UnauthorizePage";
import AdminNavbar from "./_components/AdminNavbar";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  if (!session?.user) redirect("/login");
  if (session?.user.role !== "admin") {
    return <UnauthorizePage />;
  }
  console.log("session: ", session);
  return (
    <>
      <div className="w-full h-screen flex flex-col ">
        <AdminNavbar />
        {children}
      </div>
    </>
  );
};

export default layout;
