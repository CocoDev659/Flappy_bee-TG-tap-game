import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Mine from ".";

const MineRoute = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] bg-black">
      <Header />
      <Mine />
      <Footer />
    </div>
  );
};

export default MineRoute;
