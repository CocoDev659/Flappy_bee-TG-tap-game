import ChevronRight from "./svgs/ChevronRight"

interface SettingCardProps {
  title: string
  text?: string
  className?: string
}

const SettingCard: React.FC<SettingCardProps> = ({
  title,
  text,
  className,
}) => {
  return (
    <div
      className={`flex bg-[#272a2f] border border-[#272a2f] hover:border-[#8b8e93] h-16 py-2.5 px-3 select-none transition-all rounded-[20px] items-center justify-center cursor-pointer group ${
        className ?? ""
      }`}
    >
      <div className="flex flex-col flex-auto pr-1">
        <p className="font-bold leading-[1]">{title}</p>
        {text ? (
          <span className="text-[#8b8e93] text-sm leading-[1] mt-1.5">
            {text}
          </span>
        ) : null}
      </div>
      <ChevronRight className="w-6 h-6 text-[#4e4f50] group-hover:text-white transition-all" />
    </div>
  )
}

export default SettingCard
