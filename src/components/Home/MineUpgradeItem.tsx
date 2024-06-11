import { SMALL_COIN_IMAGE } from "../../constants/image"
import Lock from "../svgs/Lock"

interface MineUpgradeItemProps {
  image: string
  title: string
  lvl: number
  profitPerHour: number
  onClick?: any
  disabled?: boolean
  className?: string
}

const MineUpgradeItem: React.FC<MineUpgradeItemProps> = ({
  image,
  title,
  lvl,
  disabled,
  onClick,
  profitPerHour,
  className,
}) => {
  return (
    <div
      data-disabled={disabled}
      className={`flex flex-col flex-[0_0_calc(50%-12px)] bg-[#272a2f] rounded-[20px] text-xs justify-between mb-3 mx-1.5 max-w-[calc(50%-12px)] cursor-pointer data-[disabled=true]:cursor-not-allowed data-[disabled=true]:pointer-events-none ${
        className ?? ""
      }`}
      onClick={onClick}
    >
      <div className="flex mx-3 py-2">
        <div
          data-disabled={disabled === true}
          className="flex flex-[0_0_60px] justify-center items-center -ml-1 mr-2 w-[60px] h-[60px] relative data-[disabled=true]:before:absolute data-[disabled=true]:before:bg-[#34383fcc] data-[disabled=true]:before:content-[''] data-[disabled=true]:before:-top-1 data-[disabled=true]:before:-left-1 data-[disabled=true]:before:w-[68px] data-[disabled=true]:before:h-[68px] data-[disabled=true]:before:overflow-hidden data-[disabled=true]:before:rounded-full data-[disabled=true]:before:z-[2]"
        >
          <img src={image} alt="image" className="max-w-full max-h-full" />
          {disabled ? (
            <div className="h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]">
              <Lock className="text-white" />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col justify-between flex-auto pt-0.5">
          <div className="max-h-9 text-ellipsis">{title}</div>
          <div className="flex flex-col justify-end items-start mt-1">
            <p className="text-[10px] text-[#8b8e93]">Profit per hour</p>
            <div className="flex items-center">
              <img
                src={SMALL_COIN_IMAGE}
                alt="coin"
                className="w-3.5 h-3.5 min-w-3.5 -mr-0.5 grayscale"
              />
              <span className="ml-1.5 text-[#fff6] font-bold">
                +{profitPerHour}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t border-[#34383f] py-2 px-3">
        <div className="flex items-center font-bold pr-1.5 whitespace-nowrap min-w-10 text-[#8b8e93]">
          lvl {lvl}
        </div>
        <div className="bg-[#34383f] flex-[0_0_1px] h-6 mr-3 w-px" />
        <div className="flex items-center flex-auto">
          <img src={SMALL_COIN_IMAGE} alt="coin" className="w-5 h-5 min-w-5" />
          <span className="ml-1.5 font-bold">10K</span>
        </div>
      </div>
    </div>
  )
}

export default MineUpgradeItem
