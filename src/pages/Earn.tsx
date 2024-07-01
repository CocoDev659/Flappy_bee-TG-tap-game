import TaskCard from "../components/TaskCard"
import Blur from "../components/svgs/Blur"

const Earn = () => {
  return (
    <main className="pt-5 px-4 pb-[70px]">
      <div className="relative my-6 mx-auto w-[106px] h-[106px]">
        <div className="absolute w-[275px] h-[275px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
          <Blur />
        </div>
        {/* <img src={SMALL_COIN_IMAGE} className="relative z-[2]" /> */}
        <img src={"/images/icons/coinReward.png"} className="relative z-[2]" />
      </div>
      <h2 className="text-[32px] font-bold leading-[44px] mb-3 mt-11 text-center">
        Earn more coins
      </h2>
      <h4 className="font-bold mt-8 mb-5">FlappyBee Youtube</h4>
      <TaskCard
        image={"/images/youtube.webp"}
        title="New academy video"
        coin={100000}
        className="mb-1.5"
      />
      <TaskCard
        image={"/images/youtube.webp"}
        title="Easy start guide"
        coin={10000}
      />
      <h4 className="font-bold mt-8 mb-5">Daily Tasks</h4>
      <TaskCard
        image={"/images/calendar.webp"}
        title="Daily reward"
        coin={6649000}
      />
      <h4 className="font-bold mt-8 mb-5">Tasks list</h4>
      <TaskCard
        image={"/images/telegram.webp"}
        title="Join our TG channel"
        coin={5000}
        className="mb-1.5"
      />
      <TaskCard
        image={"/images/x.svg"}
        title="Follow our X account"
        coin={5000}
        className="mb-1.5"
      />
      <TaskCard
        image={"/images/icons/Bee-01.png"}
        title="Choose your exchange"
        coin={5000}
        className="mb-1.5"
      />
      <TaskCard
        image={"/images/chats.webp"}
        title="Invite 3 friends"
        coin={25000}
      />
    </main>
  )
}

export default Earn
