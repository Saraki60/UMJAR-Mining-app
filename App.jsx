import React, { useState, useEffect } from "react";
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
      display: "flex",
      justifyContent: "space-around",
      background: "#222",
      padding: "12px 0",
      borderTop: "2px solid gold",
      fontWeight: "bold",
      color: "gold",
    }}>
      {navItems.map(item => (
        <Link 
          key={item.path} 
          to={item.path} 
          style={{
            textDecoration: "none",
            color: location.pathname === item.path ? "orange" : "gold",
            fontSize: "14px",
            transition: "0.3s"
          }}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

const App = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #111, #333)",
        color: "#fff",
        textAlign: "center",
        paddingBottom: "80px",
        fontFamily: "Arial, sans-serif"
      }}>
        {/* Logo */}
        <img 
          src={process.env.PUBLIC_URL + '/logo.png'} 
          alt="UMJAR Logo" 
          style={{ width: "160px", marginTop: "25px", borderRadius: "12px", boxShadow: "0 0 15px gold" }} 
        />

        {/* Balance Card */}
        <div style={{
          background: "#000",
          margin: "20px auto",
          padding: "20px",
          borderRadius: "15px",
          width: "90%",
          maxWidth: "350px",
          boxShadow: "0 0 20px #ffcc00"
        }}>
          <h1 style={{ fontSize: "32px", color: "gold", margin: "0" }}>158 UMJ</h1>
          <p style={{ margin: "5px 0", color: "#0f0" }}>ummujaafarcampany@gmail.com</p>
        </div>

        {/* Auth Buttons */}
        <div style={{ margin: "15px 0" }}>
          {["SIGN UP", "LOGIN", "LOGOUT"].map(text => (
            <button 
              key={text} 
              style={{
                margin: "5px",
                padding: "12px 25px",
                background: "gold",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseOver={e => e.target.style.background = "orange"}
              onMouseOut={e => e.target.style.background = "gold"}
            >
              {text}
            </button>
          ))}
        </div>

        {/* Mining Button */}
        <div style={{ margin: "40px 0" }}>
          <button style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            fontSize: "20px",
            fontWeight: "bold",
            background: "gold",
            border: "none",
            boxShadow: "0 0 25px #ffcc00",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onMouseOver={e => e.target.style.transform = "scale(1.1)"}
          onMouseOut={e => e.target.style.transform = "scale(1)"}
          >
            MINING
          </button>
          <p style={{ marginTop: "20px", fontSize: "18px" }}>
            {new Date(timer * 1000).toISOString().substr(11, 8)}
          </p>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />

        {/* Routes */}
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
