
var firebase = require("firebase");

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyAirjqZJkv7DQd34kNqJBEzYPOqKh_Izhg",
    authDomain: "volta-65a31.firebaseapp.com",
    databaseURL: "https://volta-65a31.firebaseio.com",
    projectId: "volta-65a31",
    storageBucket: "volta-65a31.appspot.com",
    messagingSenderId: "644848488508"
};
firebase.initializeApp(config);

// Import Admin SDK
var admin = require("firebase-admin");

// Get a database reference to our posts
var db = admin.database();
var ref = db.ref("volta-65a31");


// Retrieve new posts as they are added to our database
ref.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  console.log("latitude: " + newPost.latitude);
  console.log("longitude: " + newPost.longitude);
  console.log("reportText: " + newPost.reportText);
});


//https://firebase.google.com/docs/database/admin/retrieve-data
