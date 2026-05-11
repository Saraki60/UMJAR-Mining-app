import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

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
      borderTop: "1px solid gold",
      fontWeight: "bold"
    }}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            color: location.pathname === item.path ? "gold" : "white",
            textDecoration: "none"
          }}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

// Home Page
const HomePage = ({ balance, setBalance }) => {
  const handleMining = () => {
    const mined = (Math.random() * 0.9 + 0.1).toFixed(2);
    setBalance(prev => (parseFloat(prev) + parseFloat(mined)).toFixed(2));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", color: "gold" }}>
      {/* Logo */}
      <img
        src="/logo.png"
        alt="UMJAR Logo"
        style={{ width: "120px", height: "120px", marginBottom: "20px" }}
      />

      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>UMJAR Coin</h1>
      <p>Your professional crypto exchange & investment platform</p>

      <p style={{ marginTop: "20px", fontSize: "24px" }}>
        Your UMJAR Balance: {balance} ₳
      </p>

      <div
        onClick={handleMining}
        style={{
          margin: "40px auto",
          padding: "20px",
          maxWidth: "300px",
          border: "2px solid gold",
          borderRadius: "15px",
          cursor: "pointer"
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Live Mining</h2>
        <p>Click here to mine UMJAR coins!</p>
      </div>
    </div>
  );
};

// Other Pages
const MarketsPage = () => (
  <div style={{ color: "gold", padding: "20px", textAlign: "center" }}>
    <h1>Markets Page</h1>
    <p>View crypto markets here.</p>
  </div>
);

const MiningPage = ({ balance }) => (
  <div style={{ color: "gold", padding: "20px", textAlign: "center" }}>
    <h1>Mining Page</h1>
    <p>Current balance: {balance} ₳</p>
  </div>
);

const WalletPage = ({ balance }) => (
  <div style={{ color: "gold", padding: "20px", textAlign: "center" }}>
    <h1>Wallet Page</h1>
    <p>Your balance: {balance} ₳</p>
  </div>
);

const ProfilePage = () => (
  <div style={{ color: "gold", padding: "20px", textAlign: "center" }}>
    <h1>Profile Page</h1>
    <p>Edit your profile here.</p>
  </div>
);

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
