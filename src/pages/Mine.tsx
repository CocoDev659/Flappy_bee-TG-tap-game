import Card from "../components/Card"
import ClickerPanel from "../components/Home/ClickerPanel"
import DailyMining from "../components/Home/DailyMining"
import Earning from "../components/Home/Earning"
import MineTabs from "../components/Home/MineTabs"
import Statistics from "../components/Home/Statistics"

const Mine = () => {
  return (
    <main>
      <Card className="mt-3 min-h-[calc(100vh-62px)] pt-5 px-4 pb-[70px]">
        <Statistics />
        <Earning />
        <DailyMining />
        <MineTabs />
        <ClickerPanel />
      </Card>
    </main>
  )
}

export default Mine
