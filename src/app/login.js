$(document).ready(function(){

  function setLogin(){
    var $username = document.getElementById('username').value;
    var $password = document.getElementById('password').value;
    var $user = {
      username: $username,
      password: $password
    }
    localStorage.setItem('user',JSON.stringify($user));
  }
  
  var userSet = document.getElementById('signUpButton');
  userSet.addEventListener('click',setLogin);

});
