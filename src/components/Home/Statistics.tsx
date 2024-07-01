import Info from "../svgs/Info";

interface StatisticsProps {
  className?: string;
}

const Statistics: React.FC<StatisticsProps> = ({ className }) => {
  return (
    <div className={`flex space-x-1 justify-between ${className ?? ""}`}>
      <div className="flex flex-auto flex-col justify-center items-center rounded-[10px] min-h-[50px] bg-[#272a2f] select-none">
        <p className="text-[#ff9060] text-xs leading-[8px] mb-1 max-h-[14px] text-center">
          Earn per tap
        </p>
        <div className="flex items-center">
          <img
            src={"/public/images/icons/coinReward.png"}
            alt="coin"
            className="h-5 w-5 min-w-5"
          />
          <span className="ml-1.5 text-sm font-bold">+1</span>
        </div>
      </div>
      <div className="flex flex-auto flex-col justify-center items-center rounded-[10px] min-h-[50px] bg-[#272a2f] select-none">
        <p className="text-[#7277ff] text-xs leading-[8px] mb-1 max-h-[14px] text-center">
          Coins to level up
        </p>
        <span className="text-sm font-bold">25K</span>
      </div>
      <div className="flex flex-auto flex-col justify-center items-center rounded-[10px] min-h-[50px] bg-[#272a2f] select-none">
        <p className="text-[#82f88e] text-xs leading-[8px] mb-1 max-h-[14px] text-center">
          Profit per hour
        </p>
        <div className="flex items-center">
          <img
            src={"/public/images/icons/coinReward.png"}
            alt="coin"
            className="h-5 w-5 min-w-5"
          />
          <span className="ml-1.5 text-sm font-bold">+300</span>
          <button className="text-[#4e4f50] hover:text-[#8b8e93] transition-all h-5 w-5 ml-1.5">
            <Info />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
