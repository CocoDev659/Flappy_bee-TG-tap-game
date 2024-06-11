import { SMALL_COIN_IMAGE } from "../../constants/image"
import Info from "../svgs/Info"
import DailyComboCard from "./DailyComboCard"

const DailyMining = () => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-end mb-2">
        <span className="text-[#8b8e93] cursor-pointer text-xs">12:58:40</span>
        <button className="text-[#8b8e93] hover:text-white transition-all h-5 w-5 ml-1.5">
          <Info />
        </button>
      </div>
      <div className="flex justify-between items-center rounded-[10px] bg-[#272a2f] p-1.5 mb-3">
        <div className="text-sm font-bold leading-4 px-1.5">Daily combo</div>
        <div className="flex">
          <div className="w-3.5 h-3.5 rounded-full bg-[#4e4f50] mx-0.5 border-[#68696a] border-2" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#4e4f50] mx-0.5 border-[#68696a] border-2" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#4e4f50] mx-0.5 border-[#68696a] border-2" />
        </div>
        <button className="flex items-center bg-[linear-gradient(96deg,#5a60ff,#b65aff_99.09%)] hover:bg-[linear-gradient(96deg,#b65aff,#5a60ff_99.09%)] rounded-lg p-2 transition-all outline-none relative before:absolute before:content-[''] before:left-0 before:top-0 before:z-[2] before:rounded-lg before:h-full before:w-full before:border-2 before:border-[#ffffff1f] hover:before:border-[#ffffff4d] before:transition-all">
          <img
            src={SMALL_COIN_IMAGE}
            alt="coin"
            className="w-5 h-5 min-w-5 mr-1.5"
          />
          <span className="text-sm font-bold">
            +{(5000000).toLocaleString("en-US")}
          </span>
        </button>
      </div>
      <div className="flex items-center justify-center -mx-1.5">
        <DailyComboCard />
        <DailyComboCard />
        <DailyComboCard />
      </div>
    </div>
  )
}

export default DailyMining
