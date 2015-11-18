$(document).ready(function(){



  var $urlBase = "http://www.recipepuppy.com/api/?p=";
  var $pageIndex = 1;


  var increaseIndex = document.getElementById('next');
  next.addEventListener('click',function(){
      $pageIndex += 1;
      search();
  })

  var $recipeLayout = document.getElementById('displayRecipes');


  function search(pageIndex){
    var $searchTerm = "&q=" + document.getElementById('recipeSearch').value;
    var $urlTotal = $urlBase + $pageIndex + $searchTerm;
    console.log("search");
    var $url = $urlTotal;
    var request = $.ajax({
      method: "GET",
      url: $url,
      dataType: "json",
      success: function(data){
        console.log(data);
        console.log($urlTotal);
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
          $recipeLayout.appendChild($source);
          }
        }
      })
    }

    function clearSearch(){
      $recipeLayout.innerHTML = "";
    }

    function searchAll(){
      clearSearch();
      search();
    }

  var recipeSearch = document.getElementById('recipeSearchButton');
  recipeSearch.addEventListener('click',searchAll);





});
