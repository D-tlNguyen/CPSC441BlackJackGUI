const firebase = require("firebase-admin")
const functions = require('firebase-functions');
firebase.initializeApp(functions.config().firebase)

// web stuff
const app = require('express')()
const server = require('http').Server(app)
const gui = require('socket.io')(server)

// fn library
const display = msg => gui.emit('broadcast', msg)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
    const data = req.query.data
    switch(data) {
        case 'ok\n': break

        default:
            console.log('Received: ' + data)
            display(data)
    }
    res.send(data)
})

exports.app = functions.https.onRequest(app)