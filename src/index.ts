import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });

// event handler
// wss.on('connection', function(socket) {
//     console.log("user connected");
//     setInterval(() => {
//         socket.send("chirag is a pro coder");
//     }, 2000);
    
//     socket.on('message', (e) => {
//         console.log(e.toString());
//     })
// });




// ping pong or echo application
wss.on('connection', (socket) => {
    console.log('user connected');


    socket.on('message', (e) => {
        if(e.toString() === 'ping') {
            socket.send('pong');
        } else {
            socket.send('you are not sending ping');
        }
    })
});