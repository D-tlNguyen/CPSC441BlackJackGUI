const firebase = require("firebase-admin")
const functions = require('firebase-functions');
var firebaseConfig = {
    apiKey: "AIzaSyCBiKiEPMduJwkBj0oJnh_bG-6MC8h63BM",
    authDomain: "cpsc441blackjack.firebaseapp.com",
    databaseURL: "https://cpsc441blackjack.firebaseio.com",
    projectId: "cpsc441blackjack",
    storageBucket: "cpsc441blackjack.appspot.com",
    messagingSenderId: "512358114097",
    appId: "1:512358114097:web:bf291b067f43f99d62c610",
    credential: firebase.credential.cert(require('./cpsc441blackjack-firebase-adminsdk-lndyt-e3828a7724.json'))
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// web stuff
const app = require('express')()

// fn library
const display = data => firebase.firestore().collection('GUI').doc('GUI').set({data})

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
    console.log("WHERE")
    res.send(data)
})

exports.app = functions.https.onRequest(app)