$(document).ready(function(){

  var $historyLayout = document.getElementById('historyDisplay');
  var $diary = JSON.parse(localStorage.getItem('diary'));
  console.log($diary);
  console.log($diary.length);
  var $count = 10;

  console.log($diary[0].name)

  var $historyDisplay = document.getElementById('historyDisplay');

  function clearHistory(){
    $historyLayout.innerHTML = "";
  }

  function displayDiary(){
      clearHistory();
      if($diary.length > 0){
        for(i=0;i<$count && i<$diary.length;i++){
          var $entryItem = document.createElement('li');
          var $name = $diary[i].name;
          var $ingred = "";
          for(l=0;l<$diary[i].ingredients.length;l++){
            $ingred += ($diary[i].ingredients[l]+ ", ");
          }
          $entryItem.innerHTML = "<div class='journalItem'><h2>"+$name+"</h2><p>"+$ingred+"</p>"
          console.log($name);
          console.log($ingred);
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
});
