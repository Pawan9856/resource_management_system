import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const page = () => {
  const BookResource = [
    { link: "/book-resource/lt-booking", name: "LT booking" },
    { link: "/book-resource/lab-booking", name: "LAB" },
    { link: "/book-resource/sac-booking", name: "SAC" },
    {
      link: "/book-resource/guest-house-booking",
      name: "Guest House",
    },
  ];
  return (
    <div className="w-full h-full flex justify-center ">
      <Card className="w-[90%] p-5 grid grid-cols-4 gap-5">
        {BookResource.map((resource, index) => (
          <Link
            href={resource.link}
            key={index}
            className="h-40 hover:scale-105 transition-all duration-300 ease-in-out rounded-lg"
          >
            <Card className="h-full w-full hover:bg-primary/90 transition-all duration-300 ease-in-out hover:text-secondary">
              <CardHeader>{resource.name}</CardHeader>
              <CardContent></CardContent>
            </Card>
          </Link>
        ))}
      </Card>
    </div>
  );
};

export default page;
