import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./components/onboarding/index.jsx";
import ExchangeRoute from "./components/exchange/route.jsx";
import MineRoute from "./components/mine/route.jsx";
import FriendsRoute from "./components/friends/route.jsx";
import EarnRoute from "./components/earn/route.jsx";

function App() {
  return (
    <div className="App">
      <div className="bg-black">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/exchange" element={<ExchangeRoute />} />
            <Route path="/mine" element={<MineRoute />} />
            <Route path="/friends" element={<FriendsRoute />} />
            <Route path="/earn" element={<EarnRoute />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
