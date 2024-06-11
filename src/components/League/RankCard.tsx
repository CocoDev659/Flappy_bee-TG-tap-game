import { AVATAR_IMAGE, SMALL_COIN_IMAGE } from "../../constants/image"
import Bybit from "../svgs/Bybit"

interface RankCardProps {
  name: string
  coin: number
  rank: number
  level: number
  className?: string
}

const RankCard: React.FC<RankCardProps> = ({
  name,
  coin,
  rank,
  // level,
  className,
}) => {
  return (
    <div
      className={`flex bg-[#272a2f] h-16 px-3 select-none transition-all rounded-[20px] items-center justify-center cursor-pointer mb-1.5 ${
        className ?? ""
      }`}
    >
      <div className="flex items-center justify-center min-w-[50px] h-[50px] w-[50px] rounded-xl overflow-hidden">
        <div className="bg-[linear-gradient(133deg,#ffae50_5.47%,#994330_97.66%)]">
          <img
            src={AVATAR_IMAGE}
            alt="image"
            className="max-h-full max-w-full"
          />
        </div>
      </div>
      <div className="flex-auto pr-1 ml-2.5">
        <div className="flex items-start mb-2">
          <div className="flex items-center h-[18px] mr-1.5 min-w-[18px] w-[18px]">
            <Bybit />
          </div>
          <p className="text-sm max-h-7 overflow-hidden">{name}</p>
        </div>
        <div className="flex text-sm items-center">
          <img src={SMALL_COIN_IMAGE} className="w-5 h-5 min-w-5 mr-1.5" />
          <span className="font-bold text-[#8b8e93] text-sm">
            {coin.toLocaleString("en-US")}
          </span>
        </div>
      </div>
      <div className="text-[#8b8e93] flex-[0_0_48px] text-[26px] pl-3 text-right">
        {rank}
      </div>
    </div>
  )
}

export default RankCard
