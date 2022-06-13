//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAkYqPSUnuvBR9o0esFy2OpH3TS8b4YTDU",
      authDomain: "kwitter-6eff3.firebaseapp.com",
      databaseURL: "https://kwitter-6eff3-default-rtdb.firebaseio.com",
      projectId: "kwitter-6eff3",
      storageBucket: "kwitter-6eff3.appspot.com",
      messagingSenderId: "81864546566",
      appId: "1:81864546566:web:3ae3ebe1c65818b3902687"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name, massage:msg, like:0
      });
      document.getElementById("msg").value="";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();