const WebSocketServer = require('ws').Server,
      express   = require('express'),
      http      = require('http')

let app = express() 
let port = process.env.PORT || 3000

let server = http.createServer(app)
let serverOnPort = server.listen(port)

let wss = new WebSocketServer({ server: serverOnPort })
wss.on('connection', ws => {
  console.log('new socket connected')
  ws.send('Hello From Server!')
})

