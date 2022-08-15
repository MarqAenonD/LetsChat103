// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAYgztYW6ZpKbymCed5PyNy7i4o7cxFSzs",
      authDomain: "letschatweb-adba2.firebaseapp.com",
      databaseURL: "https://letschatweb-adba2-default-rtdb.firebaseio.com",
      projectId: "letschatweb-adba2",
      storageBucket: "letschatweb-adba2.appspot.com",
      messagingSenderId: "295209744683",
      appId: "1:295209744683:web:5d3577dbf1865bd56d6d6e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
       //Start code

       //End code
} });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}