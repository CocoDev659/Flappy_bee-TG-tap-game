import RankCard from "../components/League/RankCard"

const League = () => {
  return (
    <main className="flex flex-auto flex-col">
      <div className="flex-auto pt-5 px-4 pb-[70px]">
        <div className="">
          {Array(20)
            .fill("0")
            .map((_, i) => (
              <RankCard name="h" coin={30000} rank={i + 1} level={0} />
            ))}
        </div>
        <RankCard
          name="mine"
          coin={100}
          rank={10000}
          level={0}
          className="sticky top-[70px]"
        />
      </div>
    </main>
  )
}

export default League
