
const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ 
  port: 8888
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      // console.log(111);
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        console.log(data);
        client.send(data);
      }
    });
  });
});