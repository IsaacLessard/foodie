$(document).ready(function(){


// Food Journal and Functions
var DIARY = [];

//downloads saved local storage to repopulate diary
setDiary();


//functions for working with local storage
function setDiary(){
  var DIARY = JSON.parse(localStorage.getItem('diary'));
}

function saveDiary(){
  localStorage.setItem('diary',JSON.stringify(DIARY));
}

//add to diary
function addEntry(){
  var $name = document.getElementById('foodName').value;
  var $ingredients = document.getElementById('ingredients').value.split(',');
  DIARY.push({
    name: $name,
    ingredients: $ingredients
  });
  saveDiary();
  console.log(JSON.parse(localStorage.getItem('diary')));
}

function addSickness(){
  var $symptoms = document.getElementById('sickName').value.split(',');
  var $length = DIARY.length - 1;
  DIARY[$length].symptoms = $symptoms;
  saveDiary();
  console.log(localStorage.getItem('diary'));
}

//event listeners for form submission
var foodSubmit = document.getElementById('foodSubmit');
foodSubmit.addEventListener('click', addEntry);
var symSubmit = document.getElementById('sickSubmit');
symSubmit.addEventListener('click', addSickness);

//correlation algorithm
function correlation(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) *
              (table[1] + table[3]) * (table[0] + table[2]));
}

//checks journal for specific entry
function hasFood(name, entry){
  return entry.foods.indexOf(name) !== -1;
}

function hasSymptom(sick, entry){
    return entry.symptoms.indexOf(sick) !== -1;
}

//creates table to equate correlation
function tableFor(food, sick, diary){
  var table=[0,0,0,0];
  for(var i=0;i<diary.length;i++){
    var entry = diary[i], index=0;
    if(hasFood(food,entry)){
      index+=1;
    }
    if(hasSymptom(sick,entry)){
      index+=2;
    }
    table[index] +=1;
  }
  return table;
}
//
// function displayCorrelations({
//   for(n=0;n<DIARY.length;n++){
//     var corList = document.getElementById('')
//   }
// })


//test
//addEntry(true,['cheese','sandwich','tomato']);
// console.log(tableFor('cheese',DIARY))

// function saveData(){
//   for(j=0;j<DIARY.length;j++){
//   localStorage.setItem("diary"+j,JSON.stringify(DIARY[j]))
// }
// }




//test print journal
// console.log(DIARY);
//   console.log(correlation([76,9,4,1]))


});
