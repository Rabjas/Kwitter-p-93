
const firebaseConfig = {
      apiKey: "AIzaSyAxCDL71GD8KAL7eHKmQUwFiGqG3rebv90",
      authDomain: "kwitter-d361c.firebaseapp.com",
      databaseURL: "https://kwitter-d361c-default-rtdb.firebaseio.com",
      projectId: "kwitter-d361c",
      storageBucket: "kwitter-d361c.appspot.com",
      messagingSenderId: "444581790467",
      appId: "1:444581790467:web:2974bf91d324f46cb3df36"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"addingRoomName"
          });
          localStorage.setItem("room_name",room_name);
          window.location("kwitter_page.html");
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //Start code
       console.log("Room Name - "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      
       
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}