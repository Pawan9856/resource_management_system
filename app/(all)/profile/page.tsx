import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import ProfileForm from "./_components/ProfileForm";
import { SessionProvider } from "next-auth/react";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <Card className="w-[90%]">
        <CardHeader>Profile</CardHeader>
        <CardContent>
          <SessionProvider>
            <ProfileForm />
          </SessionProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
