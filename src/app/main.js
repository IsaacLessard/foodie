
// Food Journal and Functions
var DIARY = [];

//add to journal
function addEntry(reaction, foods){
  DIARY.push({
    allergy: reaction,
    foods: foods
  });
}
function phi(table){
  var correl = (table[3]*table[0]-table[2]*table[1])/
    Math.sqrt((table[2]+table[3])*(table[0]+table[1])*
              (table[1]+table[3])*(table[0]+table[2]))
              *100;
    return Math.round(correl);
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
console.log(tableFor('cheese',DIARY))


//test print journal
console.log(DIARY);
  console.log(phi([76,9,4,1]))
