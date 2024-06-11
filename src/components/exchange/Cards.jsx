import React from "react";
import CardProps from "../reuseable/CardProps";
import CardProps2 from "../reuseable/CardProps2";
import CardProps3 from "../reuseable/CardProps3";
import CoinCard from "../reuseable/CoinCard";

const Card = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-3 w-full items-center">
        <CardProps
          title={"Earn per tap"}
          img1={"/coin1.svg"}
          value="+ 1"
          style="text-[#FF7E5C] text-[10px]"
        />
        <CardProps2 title="Coins to level up" value="5k" />
        <CardProps3
          title="Profit per hour"
          img1="/coin1.svg"
          img2="/error.png"
          value="+150"
          style="text-[#1ED760] text-[10px]"
        />
      </div>
      <div className="w-full justify-center flex">
        <CoinCard image="/coin2.svg" value="5534" />
      </div>
    </div>
  );
};

export default Card;
