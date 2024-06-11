import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Exchange from "./pages/Exchange"
import Mine from "./pages/Mine"
import Friends from "./pages/Friends"
import Earn from "./pages/Earn"
import Airdrop from "./pages/Airdrop"
import Boost from "./pages/Boost"
import Settings from "./pages/Settings"
import League from "./pages/League"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Exchange />} />
          <Route path="/mine" element={<Mine />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/boost" element={<Boost />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/league" element={<League />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export default App
