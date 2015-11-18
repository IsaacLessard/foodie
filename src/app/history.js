$(document).ready(function(){
  var $historyLayout = document.getElementById('historyDisplay');

  var $diary = JSON.parse(localStorage.getItem('diary'));
  console.log($diary);
  var $count = 10;

  console.log($diary[0].name)

  var $historyDisplay = document.getElementById('historyDisplay');

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
});
