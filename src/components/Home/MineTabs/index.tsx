import { useState } from "react"
import UpgradeBuyModal from "../UpgradeBuyModal"
import MarketsTab from "./MarketsTab"
import TeamTab from "./TeamTab"
import LegalTab from "./LegalTab"
import SpecialTab from "./SpecialTab"

const MineTabs = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [buyModalOpen, setBuyModalOpen] = useState(false)

  return (
    <div>
      <div className="flex justify-between p-1 sticky top-1 z-20 h-[50px] bg-[#272a2f] border border-[#1c1f24] rounded-[10px] shadow-[0_0_4px_4px_#1c1f2433]">
        <button
          data-active={activeTab === 0}
          className="flex justify-center items-center flex-auto rounded-[6px] text-sm font-bold data-[active=true]:bg-[#1c1f24]"
          onClick={() => setActiveTab(0)}
        >
          Markets
        </button>
        <button
          data-active={activeTab === 1}
          className="flex justify-center items-center flex-auto rounded-[6px] text-sm font-bold data-[active=true]:bg-[#1c1f24]"
          onClick={() => setActiveTab(1)}
        >
          PR&Team
        </button>
        <button
          data-active={activeTab === 2}
          className="flex justify-center items-center flex-auto rounded-[6px] text-sm font-bold data-[active=true]:bg-[#1c1f24]"
          onClick={() => setActiveTab(2)}
        >
          Legal
        </button>
        <button
          data-active={activeTab === 3}
          className="flex justify-center items-center flex-auto rounded-[6px] text-sm font-bold data-[active=true]:bg-[#1c1f24]"
          onClick={() => setActiveTab(3)}
        >
          Specials
        </button>
      </div>
      <div className="mt-5 relative">
        {activeTab === 0 ? (
          <MarketsTab />
        ) : activeTab === 1 ? (
          <TeamTab />
        ) : activeTab === 2 ? (
          <LegalTab />
        ) : (
          <SpecialTab />
        )}
      </div>
      <UpgradeBuyModal
        image={"/images/eth_pairs.webp"}
        title="BTC pairs"
        desc="Trading pairs involving Bitcoin and another cryptocurrency"
        profit={43}
        reward={276}
        isOpen={buyModalOpen}
        close={() => setBuyModalOpen(false)}
      />
    </div>
  )
}

export default MineTabs
