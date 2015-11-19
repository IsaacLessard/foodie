$(document).ready(function(){

  $('#logIn').click(function(){
    console.log("clicked!");
    $('.logIn').toggleClass('display');
    $('.signUp').removeClass('display');
  });

  $('#logIn2').click(function(){
    console.log("clicked!");
    $('.logIn').addClass('display');
    $('.signUp').removeClass('display');
  });


  $('#signUp').click(function(){
    console.log("clicked!");
    $('.signUp').toggleClass('display');
    $('.logIn').removeClass('display');
  });

  function setLogin(){
    var $username = document.getElementById('username').value;
    var $password = document.getElementById('password').value;
    var $user = {
      username: $username,
      password: $password
    }
    localStorage.setItem('user',JSON.stringify($user));
    //creates new diary
    var DIARY = [];
    localStorage.setItem('diary',JSON.stringify(DIARY));
  }

  var userSet = document.getElementById('signUpButton');
  userSet.addEventListener('click',setLogin);

  function logIn(){
    var $login = JSON.parse(localStorage.getItem('user'));
    console.log($login);
   var $usernameInput = document.getElementById('logUsername').value;
   var $passwordInput = document.getElementById('logPassword').value;
   console.log($login.username);
   console.log($usernameInput);
   console.log($login.password);
   console.log($passwordInput);
   if (
     $usernameInput == $login.username && $passwordInput == $login.password
   ){
     console.log("Logged In!");
     window.location.href = "foodie.html";
   } else {
     console.log("Not logged in");
   }
  }

  var logUserIn = document.getElementById('logInButton');
  logUserIn.addEventListener('click',logIn);

});
