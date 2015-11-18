$(document).ready(function(){

  $('#logIn').click(function(){
    console.log("clicked!");
    $('.logIn').addClass('display');
    $('.signUp').removeClass('display');
  });


  $('#signUp').click(function(){
    console.log("clicked!");
    $('.signUp').addClass('display');
    $('.logIn').removeClass('display');
  });

  $('.entry').addClass('display');

  $('#entry').click(function(){
     console.log("clicked!");
    $('.entry').addClass('display');
    $('.recipes').removeClass('display');
    $('.diary').removeClass('display');
  });

  $('#recipes').click(function(){
    console.log("clicked!");
    $('.recipes').addClass('display');
    $('.entry').removeClass('display');
    $('.diary').removeClass('display');
  });

  $('#diary').click(function(){
    console.log("clicked!");
    $('.diary').addClass('display');
    $('.recipes').removeClass('display');
    $('.entry').removeClass('display');
  });

});
