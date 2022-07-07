const firebaseConfig = {
    apiKey: "AIzaSyD0C2w-8uJRHPYMtZNicFOOVRXQT_dLki0",
    authDomain: "chatinbox2006.firebaseapp.com",
    databaseURL: "https://chatinbox2006-default-rtdb.firebaseio.com",
    projectId: "chatinbox2006",
    storageBucket: "chatinbox2006.appspot.com",
    messagingSenderId: "36028406612",
    appId: "1:36028406612:web:86824e9b43f655a65546c1",
    measurementId: "G-T3P8QB3H6T"
};

firebase.initializeApp(firebaseConfig);

var signupDB = firebase.database().ref("SenderMessage");

document.getElementById("signup").addEventListener("submit", submitform);

function submitform(e) {
    e.preventDefault();

    var message = getElementVal("inputs");

    saveMessage(message);

    console.log(message);

    // alert(
    //     "Your all data is valid and information is getting stored in firebase database"
    // );
}

const saveMessage = (inputs) => {
    var newSignup = signupDB.push();
    newSignup.set({
        message: inputs
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

// __OVER__________________________________________

var tags = 0;

function header() {
    tags = String(document.getElementById("inputs").value);
    document.getElementById("tags").innerHTML = tags;
}