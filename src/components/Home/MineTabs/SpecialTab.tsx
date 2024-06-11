import SpecialUpgradeItem from "../SpecialUpgradeItem"
import Data from "../../../constants/data.json"
import { useState } from "react"

const MyTab = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#ff5f1b,#faa019_65%,#121212)] flex items-center justify-center rounded-[20px] text-sm font-bold h-[224px] leading-[20px] mb-3 mx-2 p-8 text-center w-full">
      <p>Buy at least one special card to enter the “Special” club</p>
    </div>
  )
}

const NewTab = () => {
  return (
    <>
      {Data.mine.specials.new.map((item) => (
        <SpecialUpgradeItem
          key={item.title}
          desc={item.desc}
          title={item.title}
          lvl={0}
          profitPerHour={750}
          reward={3000}
          image={item.image}
          bg={item.bg}
        />
      ))}
    </>
  )
}

const MissedTab = () => {
  return (
    <>
      {Data.mine.specials.missed.map((item) => (
        <SpecialUpgradeItem
          key={item.title}
          desc={item.desc}
          title={item.title}
          lvl={0}
          profitPerHour={750}
          reward={3000}
          image={item.image}
          bg={item.bg}
        />
      ))}
    </>
  )
}

const SpecialTab = () => {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <div>
      <div className="flex items-center border-b border-[#272a2f]">
        <div
          data-actived={activeTab === 0}
          className="text-sm mr-4 py-2 px-0.5 transition-all hover:text-[#ffd337] cursor-pointer data-[actived=true]:text-[#ffd337] data-[actived=true]:border-[#ffd337] relative data-[actived=true]:before:absolute before:content-[''] data-[actived=true]:before:-bottom-px data-[actived=true]:before:h-px data-[actived=true]:before:bg-[#ffd337] data-[actived=true]:before:w-full data-[actived=true]:before:left-0"
          onClick={() => setActiveTab(0)}
        >
          My cards
        </div>
        <div
          data-actived={activeTab === 1}
          className="text-sm mr-4 py-2 px-0.5 transition-all hover:text-[#ffd337] cursor-pointer data-[actived=true]:text-[#ffd337] data-[actived=true]:border-[#ffd337] relative data-[actived=true]:before:absolute before:content-[''] data-[actived=true]:before:-bottom-px data-[actived=true]:before:h-px data-[actived=true]:before:bg-[#ffd337] data-[actived=true]:before:w-full data-[actived=true]:before:left-0"
          onClick={() => setActiveTab(1)}
        >
          New cards
        </div>
        <div
          data-actived={activeTab === 2}
          className="text-sm mr-4 py-2 px-0.5 transition-all hover:text-[#ffd337] cursor-pointer data-[actived=true]:text-[#ffd337] data-[actived=true]:border-[#ffd337] relative data-[actived=true]:before:absolute before:content-[''] data-[actived=true]:before:-bottom-px data-[actived=true]:before:h-px data-[actived=true]:before:bg-[#ffd337] data-[actived=true]:before:w-full data-[actived=true]:before:left-0"
          onClick={() => setActiveTab(2)}
        >
          Missed opportunities
        </div>
      </div>
      <div className="flex flex-wrap justify-start -mx-1.5 mt-5">
        {activeTab === 0 ? (
          <MyTab />
        ) : activeTab === 1 ? (
          <NewTab />
        ) : (
          <MissedTab />
        )}
      </div>
    </div>
  )
}

export default SpecialTab
