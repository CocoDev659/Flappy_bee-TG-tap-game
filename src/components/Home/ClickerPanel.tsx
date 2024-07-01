import { Link } from "react-router-dom";
import { BOOSTER_IMAGE } from "../../constants/image";
import Energy from "../svgs/Energy";
import { useState } from "react";

const ClickerPanel = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col mt-5 relative touch-none">
      <button
        className="flex bg-transparent h-[300px] w-full mx-auto"
        onClick={() => {
          let temp = count;
          temp++;
          setCount(temp);
        }}
      >
        <div className="mx-auto bg-[linear-gradient(180deg,#5a60ff,#3b40934f_49.53%,#1c1f24)] rounded-full h-[300px] p-[15px] w-[300px] relative before:absolute before:content-[''] before:border before:border-[rgba(90,96,255,.15)] before:rounded-full before:top-0 before:left-0 before:w-full before:h-full">
          <div className="flex justify-center items-center border border-[rgba(39,39,39,0)] rounded-full shadow-[0_0_15px_#304669] h-full w-full z-[3] bg-[#272a2f] relative before:absolute before:content-[''] before:bg-[radial-gradient(circle,#3763ff_0,#3763ff00_80%)] before:top-0 before:left-0 before:w-full before:h-full before:rounded-full">
            <img
              src={"/images/FlappyBee.png"}
              width={"70%"}
              alt="yuki"
              className="z-[2] select-none"
            />
          </div>
        </div>
      </button>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Energy className="w-[26px] h-[26px] mr-1.5" />
          <span className="font-bold">{count} / 1500</span>
        </div>
        <Link
          to={"/boost"}
          className="flex items-center hover:bg-[#191c20] transition-all h-10 pr-3 rounded-[10px]"
        >
          <img src={BOOSTER_IMAGE} alt="booster" className="w-12 h-12" />
          <span className="text-sm font-bold">Boost</span>
        </Link>
      </div>
    </div>
  );
};

export default ClickerPanel;
