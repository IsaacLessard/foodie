
// Food Journal and Functions
var DIARY = [];

//add to journal
function addEntry(){
  var $name = document.getElementById('foodName').value;
  var $ingredients = document.getElementById('ingredients').value.split(',');
  var $time = document.getElementById('eatTime')
  DIARY.push({
    name: $name,
    ingredients: $ingredients,
    time: $time
  });
  console.log(DIARY);
}

var foodSubmit = document.getElementById('foodSubmit');
foodSubmit.addEventListener('click',addEntry);

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
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

//test
// addEntry(true,['cheese','sandwich','tomato']);
// console.log(tableFor('cheese',DIARY))



//test print journal
console.log(DIARY);
  console.log(phi([76,9,4,1]))
