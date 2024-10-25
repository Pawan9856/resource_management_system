import React from "react";
import BookingForm from "../_components/BookingForm";
import { SessionProvider } from "next-auth/react";

const page = () => {
  const resourceList = ["CP-1", "CP-2", "CP-3", "CMLBDA"];
  const label= "Lab"
  return (
    <SessionProvider>
      <BookingForm resourceList={resourceList} label={label} />
    </SessionProvider>
  );
};

export default page;