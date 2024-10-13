"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { logoutUser } from "@/server-action/user";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <Card className="w-[90%]">
        <CardHeader>Profile</CardHeader>
        <CardContent>
          <Button onClick={() => logoutUser()}>LogOut</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
