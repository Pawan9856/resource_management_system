import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const layout = async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  if (!session?.user) redirect("/login");
  console.log("session: ",session);
  return <>{children}</>;
};

export default layout;
