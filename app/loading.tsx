import React from "react";
import { FaSpinner } from "react-icons/fa6";

const loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <FaSpinner className="animate-spin w-10 h-10 text-muted-foreground" />
    </div>
  );
};

export default loading;