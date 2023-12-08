const firebaseConfig = {
  apiKey: "AIzaSyA9zTNjSj2iHn_O5uLhgHvV6b-O3Kx0Y6w",
  authDomain: "forms-eclub.firebaseapp.com",
  databaseURL: "https://forms-eclub-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "forms-eclub",
  storageBucket: "forms-eclub.appspot.com",
  messagingSenderId: "202554628434",
  appId: "1:202554628434:web:f0fdb5f416ccf25aaf428b",
  measurementId: "G-LQKJTBK12C"};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference database
var newWorkshopForm = firebase.database().ref("Forms-eclub");

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
  var workshopForm = newWorkshopForm.push();

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