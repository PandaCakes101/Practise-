const firebaseConfig = {
    apiKey: "AIzaSyCbbFfSIlf302iI-dPhECjrvBTyVPT7a_w",
    authDomain: "fir-social-2437e.firebaseapp.com",
    databaseURL: "https://fir-social-2437e-default-rtdb.firebaseio.com",
    projectId: "fir-social-2437e",
    storageBucket: "fir-social-2437e.appspot.com",
    messagingSenderId: "467197800838",
    appId: "1:467197800838:web:36a3c8b9578cdb5be47c07",
    measurementId: "G-SLQ67FFKEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS


function adduser() {

    user_name = document.getElementById("username").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}
