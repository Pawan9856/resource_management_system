import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const BookResource = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          {/* <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-10 ">
          <Link href="dashboard/lt-booking">
            <Card>
              <CardContent>LT</CardContent>
            </Card>
          </Link>

          <Card>
            <CardContent>Play Ground</CardContent>
          </Card>
          <Card>
            <CardContent>SAC</CardContent>
          </Card>
          <Card>
            <CardContent>LAB</CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookResource;
