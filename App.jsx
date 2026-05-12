// src/App.jsx
import React, { useState } from 'react';

// Import duk components dinka
import Home from './Home.jsx';
import Deposit from './Deposit.jsx';
import Profile from './Profile.jsx';
import Referral from './Referral.jsx';
import Wallet from './Wallet.jsx';
import Withdraw from './Withdraw.jsx';

export default function App() {
  const [page, setPage] = useState('home');

  // Simple navigation function
  const renderPage = () => {
    switch(page) {
      case 'home':
        return <Home />;
      case 'deposit':
        return <Deposit />;
      case 'profile':
        return <Profile />;
      case 'referral':
        return <Referral />;
      case 'wallet':
        return <Wallet />;
      case 'withdraw':
        return <Withdraw />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Navigation Buttons */}
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('deposit')}>Deposit</button>
        <button onClick={() => setPage('profile')}>Profile</button>
        <button onClick={() => setPage('referral')}>Referral</button>
        <button onClick={() => setPage('wallet')}>Wallet</button>
        <button onClick={() => setPage('withdraw')}>Withdraw</button>
      </nav>

      {/* Render current page */}
      {renderPage()}
    </div>
  );
}
