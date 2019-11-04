// web stuff
const app = require('express')()
const server = require('http').Server(app)
const gui = require('socket.io')(server)

// non web stuff
const {Socket} = require('net')
const javaServer = new Socket()

// constants
const WEB = 9100
const JAVA = 9000

// fn library
const display = msg => gui.emit('broadcast', msg)
const fetchGameState = () => javaServer.write(`<<GUI>>\n`)
// const fetchText = () => javaServer.write(`<<TXT>>\n`)

server.listen(WEB)

javaServer.connect(JAVA, '127.0.0.1', () => {
    // front end
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/index.html');
    });
  
  gui.on('connection', socket => {
      fetchGameState()
    //   fetchText()
      socket.on('disconnect', function() {
          console.log("disconnected")
      })
  })
    
})

javaServer.on('data', function(data) {
    switch(data) {
        case 'ok\n': break
        case 'destroy\n':
                javaServer.destroy() // kill client after server's response
                break

        default:
            console.log('Received: ' + data)
            display(data)
    }
})

javaServer.on('close', function() {
    display("close")
	console.log('Connection closed')
})