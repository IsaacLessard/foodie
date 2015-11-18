$(document).ready(function(){
  var $historyLayout = document.getElementById('historyDisplay');

  var $diary = JSON.parse(localStorage.getItem('diary'));
  console.log($diary);
  var $count = 10;
  for(i=0;i<$count;i++){
    var $entryItem = document.createElement('li');
    // var $name = $diary[i].name;
    // var $ingred = $diary[i].ingredients;
    // console.log($name);
    // console.log($ingred);

  }
});
