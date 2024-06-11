import { Link } from "react-router-dom"
import Bybit from "../svgs/Bybit"
import { AVATAR_IMAGE } from "../../constants/image"

const Header = () => {
  return (
    <header className="flex py-3 px-4 justify-between items-center">
      <div className="flex items-center">
        <div className="bg-[#1c1f24] rounded-xl mr-3 w-10 h-10">
          <img src={AVATAR_IMAGE} />
        </div>
        <span className="text-sm font-bold text-white">User (CEO)</span>
      </div>
      <Link
        to={"/settings"}
        className="flex items-center bg-[#272a2f] rounded-2xl h-10 py-1.5 px-2.5"
      >
        <div className="w-7 h-7 flex items-center justify-center mr-1.5">
          <Bybit />
        </div>
        <span className="text-white text-sm font-bold">Bybit</span>
      </Link>
    </header>
  )
}

export default Header
