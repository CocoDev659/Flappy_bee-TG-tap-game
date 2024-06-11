import React from "react";

const MarketTab = () => {
  const data = [
    {
      title: "Top ten CMC Pairs ",
      content: "Profit per hours",
      image: "/coinmarketcap.svg",
      lvl: "lvl 1",
      image2: "/coin1.svg",
      value: "10K",
    },
    {
      title: "Top ten CMC Pairs ",
      content: "Profit per hours",
      image: "/coinmarketcap.svg",
      lvl: "lvl 2",
      image2: "/coin1.svg",
      value: "20K",
    },
    {
      title: "Top ten CMC Pairs ",
      content: "Profit per hours",
      image: "/coinmarketcap.svg",
      lvl: "lvl 3",
      image2: "/coin1.svg",
      value: "30K",
    },
    {
      title: "Top ten CMC Pairs ",
      content: "Profit per hours",
      image: "/coinmarketcap.svg",
      lvl: "lvl 4",
      image2: "/coin1.svg",
      value: "50K",
    },
    {
      title: "Top ten CMC Pairs ",
      content: "Profit per hours",
      image: "/coinmarketcap.svg",
      lvl: "lvl 5",
      image2: "/coin1.svg",
      value: "100K",
    },
    {
      title: "Top ten CMC Pairs ",
      content: "Profit per hours",
      image: "/coinmarketcap.svg",
      lvl: "lvl 6",
      image2: "/coin1.svg",
      value: "300K",
    },
  ];

  return (
    <div className="grid grid-cols-2 overflow-y-auto gap-2 w-full">
      {data.map((d, i) => {
        return (
          <div
            key={i}
            className="bg-[#131414] z-[5000] relative rounded-[8px] flex flex-col bg-gradient-to-r from-[] to-[#00FC87] border-t-[1px] overflow-hidden "
          >
            <div className='before:absolute before:inset-y-0 before:w-[0.8px] before:h-full before:content-[""] before:bg-gradient-to-b before:from-[#00FC87] before:to-transparent before:right-0'></div>
            <div className='before:absolute before:inset-0 before:w-[0.5px] before:h-full before:content-[""] before:bg-gradient-to-b before:from-[#00FC87] before:to-transparent'></div>
            <div className="flex px-[20px] items-start gap-1 py-4">
              <img width={40} height={40} src={d.image} alt="" />
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-bold">{d.title}</p>
                <p className="text-[8px]">{d.content}</p>
              </div>
            </div>
            <img
              className="w-full"
              width={40}
              height={3}
              src={"/Line 6.png"}
              alt=""
            />
            <div className="px-[12px] flex gap-4 items-center">
              <p>{d.lvl}</p>
              <img width={1} height={1} src={"/Line 7.png"} alt="" />
              <div className="flex items-center gap-2">
                <img width={20} height={20} src={d.image2} alt="" />
                <p>{d.value}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MarketTab;
