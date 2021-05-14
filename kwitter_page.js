//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCnf2NYoT6nZxl2Z_aFDcV39JlkiEVYGLE",
    authDomain: "kwitter-592df.firebaseapp.com",
    databaseURL: "https://kwitter-592df-default-rtdb.firebaseio.com",
    projectId: "kwitter-592df",
    storageBucket: "kwitter-592df.appspot.com",
    messagingSenderId: "197479111250",
    appId: "1:197479111250:web:955c88b21feba35fed9d8b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}