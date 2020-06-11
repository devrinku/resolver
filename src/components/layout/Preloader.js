import React from "react";
import loader from "./30.gif";

const Preloader = () => {
  return (
    <div className="container text-center">
      <img src={loader} alt="" className="my-3" />
    </div>
  );
};

export default Preloader;
