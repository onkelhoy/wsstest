const WebSocketServer = require('ws').Server,
      express   = require('express'),
      http      = require('http'),
      helmet    = require('helmet')

let app = express() 
app.use(helmet())
let port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello Henry')
})

let server = http.createServer(app)
let serverOnPort = server.listen(port, u => console.log('up and running'))

let wss = new WebSocketServer({ server: serverOnPort })
wss.on('connection', ws => {
  console.log('new socket connected')
  ws.send('Hello From Server!')
})

