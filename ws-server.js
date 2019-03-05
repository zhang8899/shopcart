
 const express = require('express');
 const http = require('http');
 const WebSocket = require('ws');
 
 const app = express();
 app.use(express.static(__dirname));

 const server = http.createServer(app);
 const wss = new WebSocket.Server({server});

 of = "/api/carts"
 wss.on('connection', function connection(ws) {
     console.log('链接成功！');
     ws.on('message', function incoming(data) {
         /**
         * 把消息发送到所有的客户端
         * wss.clients获取所有链接的客户端
         *           */
        wss.clients.forEach(function each(client) {
             client.send(require("./src/api/data.json"));
         });
     });
 });
 
 server.listen(8000, function listening() {
     console.log('服务器启动成功！');
 });
