"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "./Profile";
import BookResource from "./BookResource";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
  const router = useRouter();
  return (
    <>
      <h1>hi</h1>
    </>
  );
};

export default UserDashboard;
