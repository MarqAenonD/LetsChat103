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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}

