import React from "react";
import BookingForm from "../_components/BookingForm";

const page = () => {
  const resourceList = ["SAC", "OAT"];
  return <BookingForm resourceList={resourceList} />;
};

export default page;
