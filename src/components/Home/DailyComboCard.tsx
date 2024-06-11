interface DailyComboCardProps {
  className?: string
}

const DailyComboCard: React.FC<DailyComboCardProps> = ({ className }) => {
  return (
    <div
      className={`relative h-28 mx-1.5 flex flex-auto items-center cursor-pointer justify-center before:absolute before:content-[''] before:bg-[linear-gradient(180deg,#4146ff,#272a2f)] before:rounded-2xl before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:-left-px before:-top-px before:z-[1] ${
        className ?? ""
      }`}
    >
      <div className="flex flex-col justify-center items-center rounded-2xl bg-[#272a2f] w-full h-full relative select-none z-[2]">
        <div className="bg-[#ffffff0d] rounded-xl h-[calc(100%-32px)] m-4 relative w-[calc(100%-32px)]">
          <div className="absolute rounded-xl bottom-0 h-[calc(100%+20px)] overflow-hidden w-full">
            <img
              src={"/images/daily_combo.png"}
              alt="combo"
              className="absolute -bottom-2.5 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyComboCard
