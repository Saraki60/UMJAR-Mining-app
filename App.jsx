import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

// Import logo daga public folder
import logo from "./public/file_00000000681c71f4b7e5470f479fc72b.png";

// Bottom Navigation Component
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
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      background: "black",
      color: "gold",
      display: "flex",
      justifyContent: "space-around",
      padding: "10px 0",
      fontWeight: "bold"
    }}>
      {navItems.map(item => (
        <Link key={item.path} to={item.path}
          style={{ color: location.pathname === item.path ? "yellow" : "gold" }}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

const App = () => {
  const [email, setEmail] = useState("ummujaafarcampany@gmail.com");
  const [balance, setBalance] = useState(158);
  const [timer, setTimer] = useState(23*3600 + 52*60 + 21); // 23:52:21 in seconds

  // Countdown timer for Mining
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  };

  return (
    <Router>
      <div style={{ paddingBottom: "60px", textAlign: "center", fontFamily: "sans-serif" }}>
        {/* Logo */}
        <img src={logo} alt="UMJAR Logo" style={{ width: "150px", marginTop: "20px" }} />

        {/* Balance */}
        <h2 style={{ color: "gold", marginTop: "20px" }}>{balance} UMJ</h2>
        <p style={{ color: "limegreen" }}>{email}</p>

        {/* Auth Buttons */}
        <div style={{ margin: "20px 0" }}>
          <button style={{ margin: "5px", padding: "10px 20px", background: "gold", border: "none", fontWeight: "bold" }}>SIGN UP</button>
          <button style={{ margin: "5px", padding: "10px 20px", background: "gold", border: "none", fontWeight: "bold" }}>LOGIN</button>
          <button style={{ margin: "5px", padding: "10px 20px", background: "gold", border: "none", fontWeight: "bold" }}>LOGOUT</button>
        </div>

        {/* Mining Button */}
        <div style={{ margin: "30px 0" }}>
          <button style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "black",
            color: "gold",
            fontSize: "20px",
            fontWeight: "bold",
            border: "2px solid gold"
          }}>MINING</button>
          <p style={{ marginTop: "10px", fontSize: "18px", color: "gold" }}>{formatTime(timer)}</p>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />

        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/markets" element={<div>Markets Page</div>} />
          <Route path="/mining" element={<div>Mining Page</div>} />
          <Route path="/wallet" element={<div>Wallet Page</div>} />
          <Route path="/profile" element={<div>Profile Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
