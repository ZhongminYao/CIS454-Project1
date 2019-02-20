var dbElement = document.getElementById('submitButton');
dbElement.addEventListener('click', authPayment);

var config = {
                  apiKey: "AIzaSyAmEbdMxefi-2wt7u8_hrFHLixM_RCLmwE",
                  authDomain: "cis-454.firebaseapp.com",
                  databaseURL: "https://cis-454.firebaseio.com",
                  projectId: "cis-454",
                  storageBucket: "cis-454.appspot.com",
                  messagingSenderId: "737490005392"
                };

                firebase.initializeApp(config);

var db = firebase.firestore();

var Name = document.getElementById('cname');
var CNumber = document.getElementById('ccnum');
var Year = Number(document.getElementById('expyear').value);
var Code = document.getElementById('cvv');
var Card = document.getElementById('fname');
var CYear = new Date().getFullYear();
var regex = /[0-9]{16}/;
var regex2 = /[0-9]{3}/;
var bookKey = window.location.hash.substr(1);

function authPayment(){
  var Name = document.getElementById('cname');
  var CNumber = document.getElementById('ccnum');
  var Year = Number(document.getElementById('expyear').value);
  var Code = document.getElementById('cvv');
  var Card = document.getElementById('fname');
  var CYear = new Date().getFullYear();
  if (Card.value && Name.value && (CNumber.value).match(regex) && (Code.value).match(regex2)) {
    if(CYear <= Year){
      db.collection('Textbooks').doc(bookKey).update({
        Status: 'Sold'
      });
      setTimeout(function(){window.location.href = "./buy.html";}, 500);
    }else{
      window.alert('Expired Date');
    }
  } else {
    window.alert('Invalid Card');
  }
}
