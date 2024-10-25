import React from "react";
import BookingForm from "../_components/BookingForm";
import { SessionProvider } from "next-auth/react";

const page = () => {
  const resourceList = [
    "Guest house room 1",
    "Guest house room 2",
    "Guest house room 3",
  ];
  const label= "Guest House"
  return (
    <SessionProvider>
      <BookingForm resourceList={resourceList} label= {label}/>
    </SessionProvider>
  );
};

export default page;
