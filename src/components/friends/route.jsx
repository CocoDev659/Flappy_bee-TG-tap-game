import React from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Friends from ".";

const FriendsRoute = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] bg-black">
      <Header />
      <Friends />
      <Footer />
    </div>
  );
};

export default FriendsRoute;
