import { SMALL_COIN_IMAGE } from "../../constants/image"
import Modal from "../Modal"

interface UpgradeBuyModalProps {
  isOpen: boolean
  close: any
  image: string
  title: string
  desc: string
  profit: number
  reward: number
}

const UpgradeBuyModal: React.FC<UpgradeBuyModalProps> = ({
  isOpen,
  image,
  title,
  desc,
  profit,
  reward,
  close,
}) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="flex mb-4">
        <img src={image} alt="image" className="w-[115px] h-[115px]" />
      </div>
      <h2 className="text-[28px] font-semibold leading-8 mb-3">{title}</h2>
      <div className="max-w-full px-3 text-sm leading-4 mb-3">{desc}</div>
      <div className="flex flex-col items-center mb-5">
        <span className="text-xs leading-[14px] mb-1">Profit per hour</span>
        <div className="flex items-center">
          <img
            src={SMALL_COIN_IMAGE}
            alt="coin"
            className="w-[18px] h-[18px] min-w-[18px] -mr-0.5"
          />
          <span className="ml-1.5 text-xs font-bold">
            +{profit.toLocaleString("en-US")}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <img src={SMALL_COIN_IMAGE} alt="coin" className="w-7 h-7" />
        <span className="ml-1.5 text-2xl font-bold">
          +{reward.toLocaleString("en-US")}
        </span>
      </div>
      <button className="mt-6 bg-[#5a60ff] rounded-[20px] text-xl font-bold h-20 px-3 w-full">
        Go ahead
      </button>
    </Modal>
  )
}

export default UpgradeBuyModal
