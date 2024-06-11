import ChevronRight from "../svgs/ChevronRight"

interface WalletConnectCardProps {
  className?: string
}

const WalletConnectCard: React.FC<WalletConnectCardProps> = ({ className }) => {
  return (
    <div
      className={`flex bg-[linear-gradient(98deg,#35a6eb_3.58%,#309adb_101.32%)] h-16 pr-3 select-none transition-all rounded-[20px] items-center justify-center cursor-pointer ${
        className ?? ""
      }`}
    >
      <div className="flex items-center justify-center min-w-[72px] p-2 w-[72px] h-full">
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={"/images/wallet.webp"}
            alt="image"
            className="max-h-full max-w-full"
          />
        </div>
      </div>
      <div className="flex-auto my-1">Connect your TON wallet</div>
      <ChevronRight className="w-6 h-6 text-[#ffffff80] transition-all" />
    </div>
  )
}

export default WalletConnectCard
