
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
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function updateLike(message_id){
console.log("Clicked On Like Button"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updatedLikes=Number(likes)+1;
console.log(updatedLikes);

firebase.database().ref(room_name).child(message_id).update({
      like:updatedLikes
});
}



















