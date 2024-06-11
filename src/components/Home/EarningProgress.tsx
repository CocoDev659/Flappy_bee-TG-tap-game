import { Link } from "react-router-dom"
import ChevronRight from "../svgs/ChevronRight"

const EarningProgress = () => {
  return (
    <Link to={"/league"} className="-mt-3 w-full">
      <div className="flex items-center justify-between px-0.5">
        <div>
          <span className="flex items-center font-bold text-xs">
            Silver
            <ChevronRight className="w-3 h-3 text-white" />
          </span>
        </div>
        <div>
          <span className="text-[#8b8e93] text-xs">Level</span>
          <span className="font-bold text-xs">&nbsp;2/10</span>
        </div>
      </div>
      <div className="bg-[#272a2f] border-2 border-[#2c3032] rounded-[10px] h-4 mt-1.5 w-full">
        <div
          className="bg-[linear-gradient(90deg,#82f88e,#d885ff_53%,#5960ff)] rounded-[37px] h-3"
          style={{ width: "90%" }}
        ></div>
      </div>
    </Link>
  )
}

export default EarningProgress
