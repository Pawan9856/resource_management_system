import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserNavbar from "./_components/(user)/UserNavbar";
import { Card, CardContent } from "@/components/ui/card";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  if (!session?.user) redirect("/login");
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
