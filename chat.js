// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBTelOH4m3AiiFSFDBtnHlH5ILGhRXY3nA",
    authDomain: "kwitterrrrr-6a7e4.firebaseapp.com",
    projectId: "kwitterrrrr-6a7e4",
    storageBucket: "kwitterrrrr-6a7e4.appspot.com",
    messagingSenderId: "155597665532",
    appId: "1:155597665532:web:8050cc48f3a8e2824a9379"
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



