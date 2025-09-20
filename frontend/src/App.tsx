import React, { useEffect } from 'react';
import './App.css'

function App() {
  function sendMessage() {

  }

  useEffect(() => {
    
  }, []);
  return (
    <div>
      <input type="text" placeholder='Message' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
