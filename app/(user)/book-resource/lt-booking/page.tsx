import React from "react";
import BookingForm from "../_components/BookingForm";

const page = () => {
  const resourceList = ["LT 1", "LT 2", "LT 3", "LT 4", "LT 5", "LT 6", "LT 7","LT 8","LT 9","LT 10"];
  return <BookingForm resourceList={resourceList} />;
};

export default page;
