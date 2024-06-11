import { SMALL_COIN_IMAGE } from "../../constants/image"

interface InviteRewardCardProps {
  image: string
  title: string
  reward: number
  className?: string
}

const InviteRewardCard: React.FC<InviteRewardCardProps> = ({
  image,
  title,
  reward,
  className,
}) => {
  return (
    <div
      className={`flex justify-between bg-[#272a2f] rounded-[20px] pt-3 px-3 pb-6 ${
        className ?? ""
      }`}
    >
      <div className="mr-3 w-[60px]">
        <img src={image} />
      </div>
      <div className="flex-auto">
        <div className="font-bold leading-5 mb-3 mt-1">{title}</div>
        <div className="flex items-center text-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ffd337]" />
          <img src={SMALL_COIN_IMAGE} className="w-5 h-5 ml-1.5" />
          <span className="text-[#ffd337] font-bold ml-1.5">
            +{reward.toLocaleString("en-US")}
          </span>
          <span>&nbsp;for you and your friend</span>
        </div>
      </div>
    </div>
  )
}

export default InviteRewardCard
