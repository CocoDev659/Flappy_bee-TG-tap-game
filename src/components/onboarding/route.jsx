import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Onboarding from ".";

const MineRoute = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] bg-black">
      <Header />
      <Onboarding />
      <Footer />
    </div>
  );
};

export default MineRoute;
