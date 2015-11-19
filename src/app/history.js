$(document).ready(function(){


  var $historyLayout = document.getElementById('historyDisplay');
  var $diary = JSON.parse(localStorage.getItem('diary'));

  console.log($diary);
  console.log($diary.length);
  var $count = 10;

  var $historyDisplay = document.getElementById('historyDisplay');

  function clearHistory(){
    $historyLayout.innerHTML = "";
  }

  function setDiary(){
    var DIARY = JSON.parse(localStorage.getItem('diary'));
  }
  //creates var DIARY if missing
  setDiary();

  function saveDiary(){
    localStorage.setItem('diary',JSON.stringify(DIARY));
  }



  // function entryFound(){
  //     var $entryItem = document.createElement('li');
  //     var $name = $diary[i].name;
  //     var $ingred = "";
  //     for(l=0;l<$diary[i].ingredients.length;l++){
  //       $ingred += ($diary[i].ingredients[l]+ ", ");
  //     }
  //     $entryItem.innerHTML = "<div class='journalItem'><h2>"+$name+"</h2><p>"+$ingred+"</p>"
  //     $historyDisplay.appendChild($entryItem);
  // }

  console.log($diary.length);

  function displayDiary(){
      clearHistory();
      if($diary.length > 0){
        for(i=$diary.length;i>=0;i= i - 1){
          var $entryItem = document.createElement('li');
          var $name = $diary[i].name;
          var $ingred = "";
          for(l=0;l<$diary[i].ingredients.length;l++){
            $ingred += ($diary[i].ingredients[l]+ ", ");
          }
          $entryItem.innerHTML = "<div class='journalItem'><h2>"+$name+"</h2><p>"+$ingred+"</p>"
          $historyDisplay.appendChild($entryItem);
          }
      } else {
        var $nullWord = document.createElement('li');
        $nullWord.innerHTML = "<h3>You have no entries. Click on 'ENTRY' to create one!</h3>"
        $historyDisplay.appendChild($nullWord);
      }
    }

    var allDiary = document.getElementById('diary');
    allDiary.addEventListener('click', displayDiary);

    var historySearchBtn = document.getElementById('historySearchBtn');
    historySearchBtn.addEventListener('click', historySearch);



    function historySearch(){
      clearHistory();
      var searchDiaryItem = document.getElementById('historySearchField').value;
      for(i=0;i<$diary.length;i++){
        if ($diary[i].name == searchDiaryItem){
          var $entryItem = document.createElement('li');
          var $name = $diary[i].name;
          var $ingred = "";
          for(l=0;l<$diary[i].ingredients.length;l++){
            $ingred += ($diary[i].ingredients[l]+ ", ");
          }
          $entryItem.innerHTML = "<div class='journalItem'><h2>"+$name+"</h2><p>"+$ingred+"</p>"
          $historyDisplay.appendChild($entryItem);
        }
        else if ($historyLayout.innerHTML === ""){
          var $nullWord = document.createElement('li');
          $nullWord.innerHTML = "<h3>No entries found.</h3>"
          $historyDisplay.appendChild($nullWord);
        }
      }
    }
});
