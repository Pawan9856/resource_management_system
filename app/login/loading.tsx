import React from "react";
import { ImSpinner9 } from "react-icons/im";

const loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ImSpinner9 className="animate-spin w-20 h-20" />
    </div>
  );
};

export default loading;
