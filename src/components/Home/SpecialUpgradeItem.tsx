import { SMALL_COIN_IMAGE } from "../../constants/image"
import Lock from "../svgs/Lock"

interface SpecialUpgradeItemProps {
  image: string
  title: string
  desc: string
  lvl: number
  profitPerHour: number
  reward: number
  onClick?: any
  disabled?: boolean
  bg?: string
  className?: string
}

const SpecialUpgradeItem: React.FC<SpecialUpgradeItemProps> = ({
  image,
  title,
  desc,
  lvl,
  reward,
  disabled,
  onClick,
  profitPerHour,
  bg,
  className,
}) => {
  return (
    <div
      className={`relative rounded-[20px] flex-[0_0_calc(50%-12px)] text-xs mb-3 mx-1.5 max-w-[calc(50%-12px)] min-h-[224px] ${
        className ?? ""
      }`}
    >
      <div
        className={`flex flex-col h-full justify-between overflow-hidden w-full`}
      >
        <div
          className="absolute top-0 left-0 bottom-0 right-0 rounded-[20px] w-full h-full z-[1]"
          style={{ background: bg }}
        ></div>
        <div className="h-6 mt-3 mx-3 relative z-[2]"></div>
        <div className="flex justify-center h-[76px] my-1.5 mx-auto w-full relative z-[2]">
          <img src={image} alt="image" className="max-h-full max-w-full" />
        </div>
        <div className="text-[11px] font-bold px-3 text-center relative z-[2]">
          {title}
        </div>
        <div className="flex-auto relative z-[2]" />
        <div className="text-[#fff6] text-[10px] leading-[14px] mt-1 text-center relative z-[2]">
          {desc}
        </div>
        <div className="flex h-[14px] justify-center mt-1.5 items-center relative z-[2]">
          <span className="text-[#fff6] text-[9px] text-right">
            Profit per hour
          </span>
          <img
            src={SMALL_COIN_IMAGE}
            alt="coin"
            className="ml-1.5 w-3.5 h-3.5 min-w-3.5 -mr-0.5 grayscale"
          />
          <span className="ml-1.5 text-[#fff6] font-bold">
            +{profitPerHour.toLocaleString("en-US")}
          </span>
        </div>
        <div className="border-t border-[#ffffff1a] flex h-12 mt-3 mx-4 items-center justify-between py-3 relative z-[2]">
          <div className="text-xs font-bold min-w-10 pr-1.5 whitespace-nowrap text-[#fff6]">
            lvl {lvl}
          </div>
          <div className="bg-[#ffffff1a] flex-[0_0_1px] h-6 mr-3 w-px" />
          <div className="flex-auto flex items-center">
            <img
              src={SMALL_COIN_IMAGE}
              alt="coin"
              className="w-5 h-5 min-w-5"
            />
            <span className="ml-1.5 font-bold">
              {reward.toLocaleString("en-US")}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialUpgradeItem
