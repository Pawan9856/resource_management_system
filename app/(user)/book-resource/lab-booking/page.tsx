import React from "react";
import BookingForm from "../_components/BookingForm";

const page = () => {
  const resourceList = ["CP-1", "CP-2", "CP-3", "CMLBDA"];
  return <BookingForm resourceList={resourceList} />;
};

export default page;