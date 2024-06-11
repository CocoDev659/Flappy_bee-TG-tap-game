import React, { useEffect } from "react";
import Card from "./Cards";
import Others from "./Others";


const Exchange = () => {
  // useEffect(() => {
  //   AOS.init({
  //     easing: "ease-in-out",
  //     duration: 700,
  //   });
  // }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center px-[20px]">
        <Card />
      </div>
      <Others />
    </div>
  );
};

export default Exchange;
