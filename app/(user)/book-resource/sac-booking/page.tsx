import React from "react";
import BookingForm from "../_components/BookingForm";
import { SessionProvider } from "next-auth/react";

const page = () => {
  const resourceList = ["SAC", "OAT"];
  const label = "SAC";
  return (
    <SessionProvider>
      <BookingForm resourceList={resourceList} label={label} />
    </SessionProvider>
  );
};

export default page;
