import React from "react";
import BookingForm from "../_components/BookingForm";

const page = () => {
  const resourceList = ["Guest house room 1", "Guest house room 2", "Guest house room 3"];
  return <BookingForm resourceList={resourceList} />;
};

export default page;
