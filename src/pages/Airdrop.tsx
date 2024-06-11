import WalletConnectCard from "../components/Airdrop/WalletConnectCard"
import Blur from "../components/svgs/Blur"

const Airdrop = () => {
  return (
    <main className="pt-5 px-4 pb-[70px]">
      <div className="relative my-6 mx-auto w-[106px] h-[106px]">
        <div className="absolute w-[275px] h-[275px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
          <Blur />
        </div>
        <img src={"/images/hamster_coin.webp"} className="relative z-[2]" />
      </div>
      <h2 className="text-[32px] font-bold leading-[44px] mb-3 mt-11 text-center">
        Airdrop tasks
      </h2>
      <div className="text-center mb-8">
        Listing is on its way. Tasks will appear below. Complete them to
        participate in the Airdrop
      </div>
      <h4 className="font-bold mb-5">Tasks list</h4>
      <WalletConnectCard />
    </main>
  )
}

export default Airdrop
