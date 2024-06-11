import { Link } from "react-router-dom"
import Earning from "../components/Home/Earning"
import TaskCard from "../components/TaskCard"
import { BOOSTER_IMAGE } from "../constants/image"

const Boost = () => {
  return (
    <main>
      <div className="pt-5 px-4 pb-[70px]">
        <div className="text-[#8b8e93] text-center">Your balance</div>
        <Earning />
        <Link
          to={"/"}
          rel="noopener noreferrer"
          target="_blank"
          className="text-[#ffd337] mb-2 text-center block"
        >
          How a boost works
        </Link>
        <h4 className="font-bold mt-8 mb-5">Free daily boosters</h4>
        <TaskCard
          title="Full energy"
          text="6/6 available"
          hideArrow
          image={"/images/energy.svg"}
          className="mb-1.5"
        />
        <TaskCard
          title="Turbo"
          text="Coming soon"
          disabled
          hideArrow
          image={BOOSTER_IMAGE}
        />
        <h4 className="font-bold mt-8 mb-5">Boosters</h4>
        <TaskCard
          title="Multitap"
          level={3}
          coin={4000}
          image={"/images/boost_multitap.png"}
          className="mb-1.5"
        />
        <TaskCard
          title="Energy limit"
          level={2}
          coin={2000}
          image={"/images/boost_energy.png"}
        />
      </div>
    </main>
  )
}

export default Boost
