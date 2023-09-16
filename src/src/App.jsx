import './App.css';
// import Navbar from './components/Navbar.jsx';
import Marketplace from './components/Marketplace.jsx';
import Profile from './components/Profile.jsx';
import SellNFT from './components/SellNFT.jsx';
import NFTPage from './components/NFTpage.jsx';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<Marketplace />}/>
          <Route path="/nftPage" element={<NFTPage />}/>        
          <Route path="/profile" element={<Profile />}/>
          <Route path="/sellNFT" element={<SellNFT />}/>             
        </Routes>
    </div>
  );
}

export default App;