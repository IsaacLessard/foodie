$(document).ready(function(){



  var listArray = [];
  for(k=0;k<listArray.length;k++){
    var source = document.createElement('li');
    source.innerText = myArray[k];
    document.body.appendChild(source);
  }

  function search(){
    console.log("search");
    var $searchTerm = document.getElementById('recipeSearch').value;
    var $url = "http://www.recipepuppy.com/api?q="+$searchTerm;
    var request = $.ajax({
      method: "GET",
      url: $url,
      dataType: "json",
      success: function(data){
        console.log(data);
        for (j=0;j<data.results.length;j++){
          var $source = document.createElement('li');
          var $title = data.results[j].title;
          var $href = data.results[j].href;
          var $thumbnail = data.results[j].thumbnail;
          var $ingredients = data.results[j].ingredients;
          $source.innerHTML = "<div class='recipeShow'><h2>"
          +$title+"</h2><a href='" 
          + $href + "'>View Recipe</a>"
          + "<img src='"+$thumbnail+"'>"
          + "<p>"+$ingredients+"</p>"
          + "</div>";
          console.log($title);
          document.body.appendChild($source);
        }
      }
    })
  }

  var recipeSearch = document.getElementById('recipeSearchButton');
  recipeSearch.addEventListener('click',search);





});
