import React from "react";
import Exchange from ".";
import Header from "../layout/header";
import Footer from "../layout/footer";

const ExchangeRoute = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] bg-black">
      <Header />
      <Exchange />
      <Footer />
    </div>
  );
};

export default ExchangeRoute;
