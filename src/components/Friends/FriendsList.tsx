import Refresh from "../svgs/Refresh"

interface FriendsListProps {
  className?: string
}

const FriendsList: React.FC<FriendsListProps> = ({ className }) => {
  return (
    <div className={className ?? ""}>
      <div className="flex justify-between items-center mb-5">
        <span className="font-bold">List of your friends</span>
        <button className="text-white w-6 h-6">
          <Refresh />
        </button>
      </div>
      <div className="bg-[#272a2f] flex justify-center min-h-20 p-4 text-center rounded-[20px] items-center">
        <p className="text-[#4e4f50] font-bold">
          You haven't invited anyone yet
        </p>
      </div>
    </div>
  )
}

export default FriendsList
