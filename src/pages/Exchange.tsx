import Card from "../components/Card"
import Header from "../components/Home/Header"
import ClickerPanel from "../components/Home/ClickerPanel"
import Earning from "../components/Home/Earning"
import EarningProgress from "../components/Home/EarningProgress"
import Statistics from "../components/Home/Statistics"

const Exchange = () => {
  return (
    <main className="flex flex-col">
      <Header />
      <Card className="mt-3 min-h-[calc(100vh-62px)] pt-5 px-4 pb-[70px]">
        <Statistics />
        <Earning />
        <EarningProgress />
        <ClickerPanel />
      </Card>
    </main>
  )
}

export default Exchange
