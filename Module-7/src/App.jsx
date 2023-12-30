import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import BitcoinRates from './components/BitcoinRates'
import { EmojiProvider } from './context/EmojiContext';

function App() {
  return (
    <BrowserRouter>
      <EmojiProvider>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/bitcoin-rates" element={<BitcoinRates />} />
        </Routes>
      </EmojiProvider>
    </BrowserRouter>
  );
}

export default App;
