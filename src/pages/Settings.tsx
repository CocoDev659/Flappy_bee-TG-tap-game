import { useState } from "react"
import SwitchButton from "../components/SwitchButton"
import SettingCard from "../components/SettingCard"

const Settings = () => {
  const [feedbackChecked, setFeedbackChecked] = useState(false)
  const [animationChecked, setAnimationChecked] = useState(false)

  return (
    <main>
      <div className="pt-5 px-4 pb-[70px]">
        <h2 className="text-[32px] font-bold leading-[43px] mb-3 text-center">
          Settings
        </h2>
        <SettingCard title="Select language" text="English" />
        <SettingCard title="Choose exchange" text="Bybit" className="mt-1.5" />
        <SwitchButton
          checked={feedbackChecked}
          setChecked={setFeedbackChecked}
          className="mt-3 px-4"
        >
          Haptic Feedback
        </SwitchButton>
        <SwitchButton
          checked={animationChecked}
          setChecked={setAnimationChecked}
          className="mt-3 px-4"
        >
          Coins animation
        </SwitchButton>
      </div>
    </main>
  )
}

export default Settings
