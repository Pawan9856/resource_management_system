import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { ImLab } from "react-icons/im";
import { GiBlockHouse, GiVikingLonghouse } from "react-icons/gi";

const page = () => {
  const BookResource = [
    {
      link: "/book-resource/lt-booking",
      name: "LT booking",
      logo: <HiMiniBuildingLibrary className="w-20 h-20" />,
    },
    {
      link: "/book-resource/lab-booking",
      name: "LAB",
      logo: <ImLab className="w-20 h-20" />,
    },
    {
      link: "/book-resource/sac-booking",
      name: "SAC",
      logo: <GiBlockHouse className="w-20 h-20" />,
    },
    {
      link: "/book-resource/guest-house-booking",
      name: "Guest House",
      logo: <FaHouseChimneyUser className="w-20 h-20" />,
    },
  ];
  return (
    <div className="w-full h-full flex justify-center pb-5">
      <Card className="w-[90%] p-5 grid grid-cols-4 gap-5">
        {BookResource.map((resource, index) => (
          <Link
            href={resource.link}
            key={index}
            className="h-40 hover:scale-105 transition-all duration-300 ease-in-out rounded-lg"
          >
            <Card className="h-full w-full hover:bg-primary/90 transition-all duration-300 ease-in-out hover:text-secondary flex justify-center items-center p-5 flex-col ">
              <CardHeader>{resource.name}</CardHeader>
              <CardContent className="flex justify-center items-center">
                {resource?.logo}
              </CardContent>
            </Card>
          </Link>
        ))}
      </Card>
    </div>
  );
};

export default page;
