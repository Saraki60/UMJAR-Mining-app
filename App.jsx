import React, { useState } from "react";

export default function App() {

  const [page, setPage] = useState("home");
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");

  const deposit = () => {
    const num = parseFloat(amount);

    if (!isNaN(num) && num > 0) {
      setBalance(balance + num);
      setAmount("");
      alert("Deposit Successful");
    }
  };

  const withdraw = () => {
    const num = parseFloat(amount);

    if (!isNaN(num) && num > 0 && num <= balance) {
      setBalance(balance - num);
      setAmount("");
      alert("Withdraw Successful");
    } else {
      alert("Insufficient Balance");
    }
  };

  return (
    <div style={{
      padding: "20px",
      fontFamily: "Arial",
      textAlign: "center"
    }}>

      <h1>UMJAR COIN</h1>

      <div style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginBottom: "20px",
        flexWrap: "wrap"
      }}>

        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("wallet")}>Wallet</button>
        <button onClick={() => setPage("deposit")}>Deposit</button>
        <button onClick={() => setPage("withdraw")}>Withdraw</button>
        <button onClick={() => setPage("profile")}>Profile</button>

      </div>

      {page === "home" && (
        <div>
          <h2>Welcome to UMJAR Mining App</h2>
          <p>Start mining and earning coins.</p>
        </div>
      )}

      {page === "wallet" && (
        <div>
          <h2>Wallet Balance</h2>
          <h1>{balance} UMJAR</h1>
        </div>
      )}

      {page === "deposit" && (
        <div>
          <h2>Deposit Coins</h2>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <br /><br />

          <button onClick={deposit}>Deposit</button>
        </div>
      )}

      {page === "withdraw" && (
        <div>
          <h2>Withdraw Coins</h2>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <br /><br />

          <button onClick={withdraw}>Withdraw</button>
        </div>
      )}

      {page === "profile" && (
        <div>
          <h2>User Profile</h2>
          <p>Name: UMJAR User</p>
          <p>Status: Active</p>
        </div>
      )}

    </div>
  );
}
