import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-4 gap-10">
      <Link href="/dashboard/book-resource/lt-booking">
        <Card>
          <CardHeader>LT booking</CardHeader>
          <CardContent></CardContent>
        </Card>
      </Link>
      <Card>
        <CardHeader>LAB</CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card>
        <CardHeader>SAC</CardHeader>
        <CardContent></CardContent>
      </Card>
      <Card>
        <CardHeader>Guest House</CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default page;
