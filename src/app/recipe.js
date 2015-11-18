$(document).ready(function(){

  var listArray = [];
  for(k=0;k<listArray.length;k++){
    var source = document.createElement('li');
    source.innerText = myArray[k];
    document.body.appendChild(source);
  }

  function search(){
    var $searchTerm = document.getElementById('recipeSearch').value;
    var $url = "http://www.recipepuppy.com/api?q="+$searchTerm;
    var request = $.ajax({
      method: "GET",
      url: $url,
      dataType: "json",
      success: function(data){
        console.log(data);
      }
    })
  }

  var recipeSearch = document.getElementById('recipeSearchButton');
  recipeSearch.addEventListener('click',search);





});
