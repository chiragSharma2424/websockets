import { useEffect, useState } from 'react';
import './App.css';

// we know that wehever app component render the useEffect will run
// before anything we have to make connection between our frontend and websocket server

function App() {
  const [ws, setWs] = useState();
  function sendMessage() {
    ws.send('ping');
  }

  // this will create the connection and logs the data
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    setWs(ws);
    ws.onmessage = (e) => {
      console.log(e.data);
    }
  }, []);

  return (
    <div>
      <input  type="text" placeholder='Message' />
      <button>Send</button>
    </div>
  )
}

export default App;