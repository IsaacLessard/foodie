$(document).ready(function(){

  // IN THIS CODE, ALL SINGLE LETTERS REPRESENT A COUNTER/INDEX


  //LOG IN AND SIGN UP CLICK EVENTS
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

  $('#aboutBtn').click(function(){
    console.log("clicked!");
    $('.aboutContainer').toggleClass('display');
  });

  $('#aboutBtn2').click(function(){
    console.log("clicked!");
    $('.aboutContainer').addClass('display');
  });

  $('#signUp').click(function(){
    console.log("clicked!");
    $('.signUp').toggleClass('display');
    $('.logIn').removeClass('display');
  });


  // saves log in data as a new user
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
    //switches to log in
    $('.logIn').addClass('display');
    $('.signUp').removeClass('display');
  }

  //click event for signing up
  var userSet = document.getElementById('signUpButton');
  userSet.addEventListener('click',setLogin);

  // logs user in if correct data is presented
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
     window.location.href = "foodie.html";
   } else {
     console.log("Not logged in");
     var $notLogged = document.createElement('h3');
     $notLogged.innerText = "Did not recognize username or password";
     var $notLaylout = document.getElementById('appendNotLog');
     $notLaylout.appendChild($notLogged);
   }
  }

  //click event
  var logUserIn = document.getElementById('logInButton');
  logUserIn.addEventListener('click',logIn);

});
