import React, { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    if(!socket) {
      return;
    }
    //@ts-expect-error

    const message = inputRef.current.value;
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    setSocket(ws);

    // for now just alreting the message on scree 
    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Message' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
