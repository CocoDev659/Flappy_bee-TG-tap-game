interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-[#1c1f24] rounded-ss-[40px] rounded-se-[40px] border-t-2 border-[#f3ba2f] shadow-[0_-4px_64px_#fab82299] ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  )
}

export default Card
