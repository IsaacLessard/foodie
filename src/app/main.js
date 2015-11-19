$(document).ready(function(){


// Food Journal and Functions
DIARY = JSON.parse(localStorage.getItem('diary'));
//downloads saved local storage to repopulate diary
console.log(DIARY);

//functions for working with local storage
function setDiary(){
  DIARY = JSON.parse(localStorage.getItem('diary'));
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
    ingredients: $ingredients,
    symptoms
  });
  saveDiary();
  setDiary();
  console.log(JSON.parse(localStorage.getItem('diary')));
}

function addSickness(){
  var $symptoms = document.getElementById('sickName').value.split(',');
  var $length = DIARY.length - 1;
  DIARY[$length].symptoms = $symptoms;
  saveDiary();
  setDiary();
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

console.log(DIARY.length);
//creates table to equate correlation
function tableFor(food, sick){
  var table=[0,0,0,0];
  for(i=0;i<DIARY.length;i++){
    //checks journal for specific entry
    var index=0;
    if(DIARY[i].ingredients.indexOf(food) !== -1){
      index+=1;
    }
    if(DIARY[i].symptoms.indexOf(sick) !== -1){
      index+=2;
    }
    table[index] +=1;
  }
  return table;
}
  console.log(tableFor("cheese", "headache", DIARY));



  var corDisplay = document.getElementById('corDisplay');

  // function addCorrelation(){
  //   for()
  //   var $corItem = document.createElement('li')
  // }





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
