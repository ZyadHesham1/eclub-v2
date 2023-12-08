
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD35Hr5-5ZzJ8nMIS1zffa2y3LJ28UDjt8",
    authDomain: "nexttrial-281a0.firebaseapp.com",
    databaseURL: "https://nexttrial-281a0-default-rtdb.firebaseio.com",
    projectId: "nexttrial-281a0",
    storageBucket: "nexttrial-281a0.appspot.com",
    messagingSenderId: "335724435184",
    appId: "1:335724435184:web:44837cc0196f73fef71435",
    measurementId: "G-0JDPMT55Y0"
  };

  // Initialize Firebase
  const App = initializeApp(firebaseConfig);
  const firebaseApp = firebase.initializeApp(firebaseConfig);

// reference database
var work = firebase.database().ref("nexttrail");

document.getElementById("workshopForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var Name = getElementVal("name");
  var Email = getElementVal("Email");
  var NuID = getElementVal("NuID");
  var Major = getElementVal("Major");
  var PhoneNumber = getElementVal("PhoneNumber");
  var School = getElementVal("School");
  var classLevel = getElementVal("classLevel");
  var Idea = getElementVal("StartupIdea");
  console.log(Name, Email, NuID);



  saveMessages(Name, Email, NuID, Major, PhoneNumber, School, classLevel, Idea);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 10000);

  //   reset the form
  document.getElementById("workshopForm").reset();
}

const saveMessages = (Name, Email, NuID, Major, PhoneNumber, School, classLevel, Idea) => {
  var workshopForm = work.push();

  workshopForm.set({
    name: Name,
    Email: Email,
    NuID: NuID,
    Major: Major,
    PhoneNumber: PhoneNumber,
    School: School,
    classLevel: classLevel,
    Idea: Idea,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};