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
    credential: firebase.credential.cert({

  "type": "service_account",

  "project_id": "cpsc441blackjack",

  "private_key_id": "c9f7a1b043158f2a59ccdf34304a1897c4e7d2bd",

  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCqdCxuLOwDVO5/\nc9Uj3hwKVsrlGtMONlvNrGelWeQHcH35rCW1cnWHzvI00xBcuzQDueuo4/IhT4e2\ny/6M/19i1UtjpzuZJnft1VI9bzUeW6l1zrhPvEGK04NvymQcKTBQ3CrL7e5MPf/J\n3oyZB1QYc9TVTWRKYULz5BHKl9te4k3dP+NeWKn3PoUMx5bGu7uXSagDMXtg36wJ\n8OoqlAKgr45Qyuo+MSFxOovOp80m475r2BsMNf0SgX3nQfSDXQ61hLYTGfqGj/Xo\nPAa/YzJnRkM3z/k2T3IcETNi0QTt59AT4y1c1lx9235TIInlX0NxHMI5IQGjTIM3\nrJ3vQ6GnAgMBAAECggEAJWmPUPViLg8HtAjICPHYxLotGWEsXuu2dau4KhZTUwCx\nXcoXkr5XJqJZDhgfeMMMFR9LJsw1WnNazdfzfJ4WoRpAzFQp5CEJ5LVUMjDE/29O\nABIJ6VJgLmjjafeJxpaRyMWyTQVhrvFSwcurn3D4188gsVqlvx+e8uolr4pqN2Zn\nVZ8h7ng1FD6LzM/b+zH0X8PqcO2EbcZQpgg8JjKyCNfsqE3M4Awb2W9Fg6GpAy8E\n8Vt9wk+mduS9qBCaZczkIKA/U9+N8eNvhMOznu7ygBL7wFIjjQ5VOWfNhJ82N7BN\nw1Yy18wc2C1bcXJ5BWoo5fQnmFDVAvOQne0shxNruQKBgQDnNHW0sfYLPyBZS4kB\nA1Dj8DNAtM8XHWMJB/9YzEZc1t2wkMcA90Onz3aM/mgnHXsnaRcVffqyJABhwPLm\nB4CS7qa1sZ2+VGzXJbg4MT/zh4mGCLXGTOs4ASGPG13JNxAUt38KNw24GC4gStwu\nkY39GmPjk4IPDJ/uyIphUVqCLwKBgQC8u9eL/6ncOe0s187i4GIMqnRyoLj8NWn+\n7nVDDd0qtoUN/A3SKVu6ndtmNNxJJf+vANL+mbrkTgskYBKy7eGOkfD7lRbwL6gZ\nuoduOhcnXSTGKoD4NHzcoaiNn/xcit24rhIkxGZUUtgvQawqtUwGBwtZRvpkLm1f\nb1wj0j5SCQKBgAOQKWg5feM6e9MkeN4NIQgCQafzoWVnzIjtGKBTtZnkrdH0yTxY\nkzBY4CjYGt7Pc4Bt/C8Wm/B24ZKgGJ4262JYTzVpoVa3kl3WdPpYt/WW1yW7qKF/\nufhI/C1qbI2XTaYkFc8gfhOiO8O/o5kMITYPXA67zTtSJHzXllpdmJl9AoGAFho9\nfPS89MCH6ReA8ArtEKSprH7sCwVKW4ObkfW+r/DeFiwthi43wtwXxJluLtbXYaxM\nCWsBexk0rtbdebzoDGVE/oGQRSKfohu5HoyJB6Ad3WM+5VJoSQJZlfRlfoT4wFcK\nYunpPfjRvn8HZZ0DwTTz/EmWq0LQpjuJY9yMVdkCgYBMYK4fE+5NNoZlE+XjLTkp\n1okeznsJvJlvT4Tn+XtjGn8mznTVhI2AU2JngJCZydiIxoO36t6ygEsWf+uQTngR\n4t83qBdjZ1Wd0fsNGc0RkYMcaZEwYnjFBodDOvnxIPOmd+ngMsuUOeqcVv4XKEhI\nKt6KL7SOB/A7hzB2B9N5NA==\n-----END PRIVATE KEY-----\n",

  "client_email": "firebase-adminsdk-lndyt@cpsc441blackjack.iam.gserviceaccount.com",

  "client_id": "101591514510630100399",

  "auth_uri": "https://accounts.google.com/o/oauth2/auth",

  "token_uri": "https://oauth2.googleapis.com/token",

  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",

  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lndyt%40cpsc441blackjack.iam.gserviceaccount.com"

})
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
    const data = req.body.data
    switch(data) {
        case 'ok\n': break

        default:
            //console.log('Received: ' + data)
            display(data)
    }
    res.send(data)
})

exports.app = functions.https.onRequest(app)
