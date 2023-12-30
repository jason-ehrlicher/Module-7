import { useState } from 'react'
import './App.css'
import BitcoinRates from './components/BitcoinRates'
import Emoji from './components/Emoji'
import { EmojiProvider } from './context/EmojiContext'


function App() {

  return (
    <EmojiProvider> {/* Wrapping components with EmojiProvider */}
      <div className="App">
        <Emoji /> {/* Emoji component to change and display the current mood */}
        <BitcoinRates /> {/* BitcoinRates component */}
      </div>
    </EmojiProvider>
  );
}

export default App
