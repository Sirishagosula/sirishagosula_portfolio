
  const firebaseConfig = {
    apiKey: "AIzaSyAMpj48fWy3d5Nm5lYSurZgXwx20VwOiDo",
    authDomain: "abcd-ea298.firebaseapp.com",
    databaseURL: "https://abcd-ea298-default-rtdb.firebaseio.com",
    projectId: "abcd-ea298",
    storageBucket: "abcd-ea298.appspot.com",
    messagingSenderId: "579558277404",
    appId: "1:579558277404:web:98eb26fa2d42d715c93ad9",
    measurementId: "G-EC2PB36DJR"
  }; //   copy your firebase config informations
  
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };