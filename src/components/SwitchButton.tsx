interface SwitchButtonProps {
  checked: boolean
  children: string
  setChecked: any
  className?: string
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  checked,
  children,
  setChecked,
  className,
}) => {
  return (
    <div
      className={`flex justify-between items-center ${className ?? ""}`}
      onClick={() => setChecked(!checked)}
    >
      <div className="font-bold">{children}</div>
      <div
        data-checked={checked}
        className="bg-[#8b8e93] rounded-full shadow-[inset_1px_1px_1px_#0000001a] cursor-pointer h-6 relative w-12 data-[checked=true]:bg-[#7277ff] transition-all before:absolute before:content-[''] before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:w-5 before:h-5 will-change-[left] data-[checked=true]:before:left-[26px] before:transition-all"
      ></div>
    </div>
  )
}

export default SwitchButton
