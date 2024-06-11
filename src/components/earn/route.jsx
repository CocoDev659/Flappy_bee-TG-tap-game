import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Earn from ".";

const EarnRoute = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] bg-black">
      <Header />
      <Earn />
      <Footer />
    </div>
  );
};

export default EarnRoute;
