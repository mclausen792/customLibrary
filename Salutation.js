var salutation = 'Greetings and Salutations '
var mySalutation = "";


function fullName() {
  var full = document.getElementById('fullname')
  full.innerHTML += mySalutation
}

function greeting(){
  var greet = document.getElementById('salutation')
  greet.innerHTML += salutation + mySalutation
}
