import { SMALL_COIN_IMAGE } from "../constants/image"
import ChevronRight from "./svgs/ChevronRight"

interface TaskCardProps {
  image: string
  title: string
  disabled?: boolean
  coin?: number
  level?: number
  hideArrow?: boolean
  text?: string
  className?: string
}

const TaskCard: React.FC<TaskCardProps> = ({
  image,
  title,
  coin,
  disabled,
  level,
  text,
  hideArrow,
  className,
}) => {
  return (
    <div
      data-disabled={disabled}
      className={`flex bg-[#272a2f] h-16 pr-3 select-none transition-all rounded-[20px] items-center justify-center cursor-pointer group data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 ${
        className ?? ""
      }`}
    >
      <div className="flex items-center justify-center min-w-[72px] p-2 w-[72px] h-full">
        <div className="flex items-center justify-center w-full h-full">
          <img src={image} alt="image" className="max-h-full max-w-full" />
        </div>
      </div>
      <div className="flex-auto pr-1">
        <div className="mb-1">{title}</div>
        <div className="flex text-sm items-center">
          {coin ? (
            <>
              <img src={SMALL_COIN_IMAGE} className="w-5 h-5 min-w-5 mr-1.5" />
              <span className="font-bold">+{coin.toLocaleString("en-US")}</span>
              {level ? (
                <span className="text-[#8b8e93]">&nbsp;• {level} lvl</span>
              ) : null}
            </>
          ) : null}
          {text ? <span className="text-[#8b8e93]">{text}</span> : null}
        </div>
      </div>
      {!hideArrow ? (
        <ChevronRight className="w-6 h-6 text-[#4e4f50] group-hover:text-white transition-all" />
      ) : null}
    </div>
  )
}

export default TaskCard
