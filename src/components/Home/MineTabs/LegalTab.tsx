import Data from "../../../constants/data.json"
import MineUpgradeItem from "../MineUpgradeItem"

const LegalTab = () => {
  return (
    <div className="flex flex-wrap justify-start -mx-1.5">
      {Data.mine.legal.map((item) => (
        <MineUpgradeItem
          key={item.title}
          image={item.image}
          lvl={1}
          title={item.title}
          profitPerHour={950}
          onClick={() => {}}
        />
      ))}
    </div>
  )
}

export default LegalTab
