const Earning = () => {
  return (
    <div className="my-5 flex items-center justify-center select-none">
      <img
        src={"/public/images/icons/coins01.png"}
        alt="coin"
        className="w-[60px] h-[60px] min-w-[60px] mr-1.5"
      />
      <span className="text-[40px] font-bold">
        {(22654).toLocaleString("en-US")}
      </span>
    </div>
  );
};

export default Earning;
