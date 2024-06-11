import FriendsList from "../components/Friends/FriendsList"
import InviteRewardCard from "../components/Friends/InviteRewardCard"
import Clipboard from "../components/svgs/Clipboard"
import User from "../components/svgs/User"
import { GIFT_IMAGE_1, GIFT_IMAGE_2 } from "../constants/image"

const Friends = () => {
  return (
    <main className="pt-5 px-4 mb-[66px] pb-[70px]">
      <h2 className="text-[32px] font-bold leading-[43px] mb-3 text-center">
        Invite Friends
      </h2>
      <p className="text-center mb-8">
        You and your friend will receive bonuses
      </p>
      <InviteRewardCard
        image={GIFT_IMAGE_1}
        title="Invite a friend"
        reward={5000}
        className="mb-1.5"
      />
      <InviteRewardCard
        image={GIFT_IMAGE_2}
        title="Invite a friend with Telegram Premium"
        reward={25000}
      />
      <button className="text-[#5a60ff] text-xl font-bold mt-5 text-center w-full mb-8">
        More bonuses
      </button>
      <FriendsList />
      <div className="fixed left-0 right-0 bottom-[70px] px-4 flex items-center">
        <button className="flex flex-auto justify-center items-center bg-[#5a60ff] rounded-2xl font-bold h-[60px]">
          Invite a friend <User className="w-6 h-6 ml-1.5" />
        </button>
        <button className="flex items-center justify-center bg-[#5a60ff] h-[60px] flex-[0_0_60px] rounded-2xl ml-1.5">
          <Clipboard className="w-8 h-8" />
        </button>
      </div>
    </main>
  )
}

export default Friends
