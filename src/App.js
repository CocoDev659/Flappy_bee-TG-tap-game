import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cards from './components/exchange/Exchange';
import MineRoute from './components/mine/MineRoute';
import FriendRoute from './components/friends/FriendRoute';
import EarnRoute from './components/earn/EarnRoute';
import Onboarding from './components/onboarding/Onboarding';

function App() {
  return (
    <div className="App">
      <div className='bg-black'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Onboarding />} />
            <Route path='/exchange' element={<Cards />} />
            <Route path='/mine' element={<MineRoute/>} />
            <Route path='/friends' element={<FriendRoute/>} />
            <Route path='/earn' element={<EarnRoute />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
