import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Wallet from "./Wallet";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Profile from "./Profile";
import Referral from "./Referral";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/referral" element={<Referral />} />
      </Routes>
    </BrowserRouter>
  );
}
