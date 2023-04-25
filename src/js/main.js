const server = require('http').createServer();
const io = require('socket.io')(server);
server.listen(3000, () => { console.log('now listening on:http://localhost:3000'); });
