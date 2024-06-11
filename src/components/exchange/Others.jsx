import React, { useState } from "react";
import MarketTab from "./tabs/MarketTab";
import AOS from "aos";
import "aos/dist/aos.css";

const Others = () => {
  const [active, setActive] = useState("market");
  const data = [
    {
      title: "Markets",
      active: "market",
    },
    {
      title: "PR & Team",
      active: "team",
    },
    {
      title: "Legal",
      active: "legal",
    },
    {
      title: "Special",
      active: "special",
    },
  ];
  const handleClick = (index) => {
    setActive(index);
  };

  const content = [
    { cont: <MarketTab /> },
    { cont: "special2" },
    { cont: "special3" },
    { cont: "special4" },
  ];
  const activeIndex = data.findIndex((item) => item.active === active);
  return (
    <div className="mt-2 h-[80vh] px-[20px] overflow-y-scroll">
      <div className="grid grid-cols-4 gap-2 z-[5000]">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(item.active)}
              className={`text-[10px] border flex items-center justify-center bg-black border-[#272A2F] rounded-md py-2 text-[#FEFEFE] px-2 ${
                active === item.active
                  ? "border-green-300 text-green-300"
                  : "border-[272A2F]"
              }`}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className="text-white mt-2 ">
        {content[activeIndex].cont}
      </div>
    </div>
  );
};
export default Others;
