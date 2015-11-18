$(document).ready(function(){
  // $.get('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3')
  //   .done(function(data){
  //     localstorage.setItem('pupData', JSON.stringify(data));
  //     appendImagesToMain(data);
  //   })
  //   .fail(function(){
  //   console.log('Failed!');
  //   var offLineData = JSON.parse( localStorage.getItem('pupData') );
  //   appendImagesToMain(offLineData);
  // })
  //
  // appendImagesToMain = function(data){
  //   var $imageArea = $('#imageArea');
  //   for(i=0;i<data.results.length;i++){
  //     console.log(data.results[i].title);
  //     $imageArea.append('<img src="'+data.results[i].thumbnail+'">');
  //   }
  // }

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
