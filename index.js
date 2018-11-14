//Number of attempts to login
var attempt = 3;

//Main function to validate login on click
function validate(){
  //Stores the components username and password in variables
  //and gets their value
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  //Checks if the user/password is equal as the ones established
    if (username === "ProgrammingGod" && password === "safepassword"){
      alert (`Logging ${username} in...`);
      window.location.href = "success.html"; // Redirecting to other page.
      return false;
    }
    else{
  //Decrements left attempts by one
      attempt --;
      alert(`WARNING! You have left ${attempt} attempts left.`);
  // Disable component fields after 3 attempts
    if (attempt === 0){
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      alert('You lost all attempts. Please try again later.')
      return false;
    }
  }
}
