import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex py-3 px-4 justify-between items-center">
      <div className="flex items-center">
        <div className="bg-[#1c1f24] rounded-xl flex mr-3 w-10 h-10 justify-center items-center">
          <img src={"/images/icons/Bee-01.png"} width={"30px"} />
        </div>
        <span className="text-sm font-bold text-white">User_Satoshi</span>
      </div>
      <Link
        to={"/settings"}
        className="flex items-center bg-[#272a2f] rounded-2xl h-10 py-1.5 px-2.5"
      >
        <div className="w-7 h-7 flex items-center justify-center mr-1.5">
          <img src={"/images/icons/Bee-01.png"} width={"30px"} />
        </div>
        <span className="text-white text-sm font-bold">Honesty</span>
      </Link>
    </header>
  );
};

export default Header;
