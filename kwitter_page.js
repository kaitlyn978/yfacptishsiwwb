//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCCQG_5kE2SUH3ZrvBAJA0N0yhiGxsa21E",
      authDomain: "kwitter-c68cb.firebaseapp.com",
      databaseURL: "https://kwitter-c68cb-default-rtdb.firebaseio.com",
      projectId: "kwitter-c68cb",
      storageBucket: "kwitter-c68cb.appspot.com",
      messagingSenderId: "624807016023",
      appId: "1:624807016023:web:15954cd20fd4b43ae89512"
    }
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });
document.getElementById("msg").value=" ";
      
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}