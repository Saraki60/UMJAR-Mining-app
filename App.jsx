import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

// Bottom Navigation
const BottomNav = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Markets", path: "/markets" },
    { name: "Mining", path: "/mining" },
    { name: "Wallet", path: "/wallet" },
    { name: "Profile", path: "/profile" },
  ];
  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, width: "100%",
      background: "black", color: "gold", display: "flex",
      justifyContent: "space-around", padding: "10px 0", borderTop: "1px solid gold",
      fontWeight: "bold"
    }}>
      {navItems.map(item => (
        <Link key={item.path} to={item.path}
          style={{ color: location.pathname === item.path ? "gold" : "white", textDecoration: "none" }}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

// Home Page
const HomePage = ({ balance, setBalance }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour countdown

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMining = () => {
    const mined = (Math.random() * 0.9 + 0.1).toFixed(2);
    setBalance(prev => (parseFloat(prev) + parseFloat(mined)).toFixed(2));
  };

  const handleSignUp = () => { alert(`Sign Up: ${email}`); setLoggedIn(true); };
  const handleLogin = () => { alert(`Login: ${email}`); setLoggedIn(true); };
  const handleLogout = () => { alert("Logout"); setLoggedIn(false); setEmail(""); setPassword(""); };

  // Format countdown
  const hours = String(Math.floor(timeLeft / 3600)).padStart(2,"0");
  const minutes = String(Math.floor((timeLeft % 3600)/60)).padStart(2,"0");
  const seconds = String(timeLeft % 60).padStart(2,"0");

  return (
    <div style={{ textAlign: "center", padding: "20px", color: "gold" }}>
      <img src="/logo.png" alt="UMJAR Logo" style={{ width: "120px", height: "120px", marginBottom: "20px" }} />
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>UMJAR Coin</h1>
      <p>Your professional crypto exchange & investment platform</p>

      <p style={{ marginTop: "20px", fontSize: "24px" }}>Total Balance: {balance} UMJ</p>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          style={{ padding:"10px", margin:"5px", borderRadius:"5px", width:"250px"}}/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
          style={{ padding:"10px", margin:"5px", borderRadius:"5px", width:"250px"}}/>
      </div>

      <div style={{ marginBottom:"20px" }}>
        {!loggedIn && <button onClick={handleSignUp} style={{ padding:"10px 20px", margin:"5px", background:"gold", border:"none", borderRadius:"5px", fontWeight:"bold" }}>SIGN UP</button>}
        {!loggedIn && <button onClick={handleLogin} style={{ padding:"10px 20px", margin:"5px", background:"gold", border:"none", borderRadius:"5px", fontWeight:"bold" }}>LOGIN</button>}
        {loggedIn && <button onClick={handleLogout} style={{ padding:"10px 20px", margin:"5px", background:"gold", border:"none", borderRadius:"5px", fontWeight:"bold" }}>LOGOUT</button>}
      </div>

      <div onClick={handleMining} style={{
        margin:"40px auto", padding:"20px", maxWidth:"200px",
        border:"2px solid gold", borderRadius:"50%", cursor:"pointer"
      }}>
        <h2 style={{ fontSize:"24px", fontWeight:"bold" }}>MINING</h2>
      </div>

      <p style={{ marginTop:"20px", fontSize:"20px" }}>Time Left: {hours}:{minutes}:{seconds}</p>
    </div>
  );
};

// Other Pages
const MarketsPage = () => <div style={{ color: "gold", padding: "20px", textAlign: "center" }}><h1>Markets Page</h1><p>View crypto markets here.</p></div>;
const MiningPage = ({ balance }) => <div style={{ color: "gold", padding: "20px", textAlign: "center" }}><h1>Mining Page</h1><p>Current balance: {balance} UMJ</p></div>;
const WalletPage = ({ balance }) => <div style={{ color: "gold", padding: "20px", textAlign: "center" }}><h1>Wallet Page</h1><p>Your balance: {balance} UMJ</p></div>;
const ProfilePage = () => <div style={{ color: "gold", padding: "20px", textAlign: "center" }}><h1>Profile Page</h1><p>Edit your profile here.</p></div>;

// Main App
export default function App() {
  const [balance, setBalance] = useState(0);

  return (
    <Router>
      <div style={{ background: "black", minHeight: "100vh", paddingBottom: "60px" }}>
        <Routes>
          <Route path="/" element={<HomePage balance={balance} setBalance={setBalance} />} />
          <Route path="/markets" element={<MarketsPage />} />
          <Route path="/mining" element={<MiningPage balance={balance} />} />
          <Route path="/wallet" element={<WalletPage balance={balance} />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}
