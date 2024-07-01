import { Link, useLocation } from "react-router-dom";
import Bybit from "./svgs/Bybit";
import Pickaxe from "./svgs/Pickaxe";
import Users from "./svgs/Users";
import Coins from "./svgs/Coins";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center z-10 w-full px-4">
      <nav className="flex justify-between items-center w-full max-w-3xl p-1 bg-[#272a2f] border border-[#1c1f24] rounded-[20px] shadow-[0_0_4px_4px_#1c1f2433]">
        <Link
          to={"/"}
          data-active={pathname === "/"}
          className="flex flex-col flex-auto items-center rounded-2xl text-[#8b8e93] h-14 p-[5px] hover:text-white transition-all data-[active=true]:bg-[#1c1f24] data-[active=true]:text-white"
        >
          <div className="w-7 h-7 mb-[5px] flex justify-center items-center">
            {/* <Bybit />
             */}
            <img
              src={"/images/icons/cursorClickon.png"}
              alt="hamster"
              className=""
              width={"18px"}
            />
          </div>
          <span className="text-[10px]">Tap</span>
        </Link>
        <Link
          to={"/mine"}
          data-active={pathname === "/mine"}
          className="flex flex-col flex-auto items-center rounded-2xl text-[#8b8e93] h-14 p-[5px] hover:text-white transition-all data-[active=true]:bg-[#1c1f24] data-[active=true]:text-white"
        >
          <div className="w-7 h-7 mb-[5px] flex justify-center items-center">
            <Pickaxe />
          </div>
          <span className="text-[10px]">Mine</span>
        </Link>
        <Link
          to={"/friends"}
          data-active={pathname === "/friends"}
          className="flex flex-col flex-auto items-center rounded-2xl text-[#8b8e93] h-14 p-[5px] hover:text-white transition-all data-[active=true]:bg-[#1c1f24] data-[active=true]:text-white"
        >
          <div className="w-7 h-7 mb-[5px] flex justify-center items-center">
            {/* <Users /> */}
            <img
              src={"/images/icons/Share.png"}
              alt="hamster"
              className=""
              width={"23px"}
            />
          </div>
          <span className="text-[10px]">Friends</span>
        </Link>
        <Link
          to={"/earn"}
          data-active={pathname === "/earn"}
          className="flex flex-col flex-auto items-center rounded-2xl text-[#8b8e93] h-14 p-[5px] hover:text-white transition-all data-[active=true]:bg-[#1c1f24] data-[active=true]:text-white"
        >
          <div className="w-7 h-7 mb-[5px] flex justify-center items-center">
            {/* <Coins /> */}
            <img
              src={"/images/icons/coinReward.png"}
              alt="hamster"
              className=""
            />
          </div>
          <span className="text-[10px]">Earn</span>
        </Link>
        <Link
          to={"/airdrop"}
          data-active={pathname === "/airdrop"}
          className="flex flex-col flex-auto items-center rounded-2xl text-[#8b8e93] h-14 p-[5px] hover:text-white transition-all data-[active=true]:bg-[#1c1f24] data-[active=true]:text-white"
        >
          <div className="w-7 h-7 mb-[5px] flex justify-center items-center">
            {/* <img src={'/images/hamster_coin.webp'} alt="hamster" className="" /> */}
            <img src={"/images/icons/Airdrop.png"} alt="hamster" className="" />
          </div>
          <span className="text-[10px]">Airdrop</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
