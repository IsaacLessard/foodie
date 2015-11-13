
// Food Journal and Functions
var JOURNAL = [];

//add to journal
function addEntry(reaction, foods){
  JOURNAL.push({
    allergy: reaction,
    foods: foods
  });
}

//equates correlation of sickness to food item
function phi(table){
  return(table[3]*table[0]-table[2]*table[1])/
    Math.sqrt((table[2]+table[1])*
              (table[0]+table[1])*
              (table[1]+table[3])*
              (table[0]+table[2])
            );
}

//checks journal for specific entry
function hasFood(food, entry){
  return entry.foods.indexOf(food) !== -1;
}

//creates table to equate correlation
function tableFor(food, journal){
  var table=[0,0,0,0];
  for(var i=0;i<journal.length;i++){
    var entry = journal[i], index=0;
    if(hasFood(food,entry)){
      index+=1;
    }
    if(food.allergy){
      index+=2;
    }
    table[index] +=1;
  }
  return table;
}

//test
addEntry(true,['cheese','sandwich','tomato']);
console.log(tableFor('cheese',JOURNAL))


//index.html Buttons
function createEntry(){
  var foods = document.getElementByID('newEntryFoods').value;
  var sick = document.getElementByID('sick').value;
  addEntry(sick, foods);
}

//test print journal
console.log(JOURNAL);
for(var key in JOURNAL){
  console.log(tableFor('cheese',JOURNAL))
}

document.body.appendChild
