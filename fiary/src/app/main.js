$(document).ready(function(){


// IN THIS CODE, ALL SINGLE LETTERS REPRESENT A COUNTER/INDEX

// Food Journal and Functions
DIARY = JSON.parse(localStorage.getItem('diary'));
//downloads saved local storage to repopulate diary
//console.log(DIARY);

//functions for working with local storage

//pulls down local storage data to save to DIARY if needed
function setDiary(){
  DIARY = JSON.parse(localStorage.getItem('diary'));
}


// sets local storage item
function saveDiary(){
  localStorage.setItem('diary',JSON.stringify(DIARY));
}

//add to diary
function addEntry(){
  var $name = document.getElementById('foodName').value;
  var $ingredients = document.getElementById('ingredients').value.split(',');
  var $symptoms = document.getElementById('initialSick').value.split(',');
  DIARY.push({
    name: $name,
    ingredients: $ingredients,
    symptoms: $symptoms
  });
  saveDiary();
  setDiary();
  //console.log(JSON.parse(localStorage.getItem('diary')));
  var $entryMadeTell = document.createElement('div');
  var $entryMadeLayout = document.getElementById('entryMade');
  $entryMadeTell.innerHTML = "<h2>Entry "+ DIARY.length + " made</h2>";
  $entryMadeLayout.appendChild($entryMadeTell);
}

//adds symptom to most recent diary entry
function addSickness(){
  $symptoms = document.getElementById('sickName').value.split(',');
  var $length = DIARY.length - 1;
  DIARY[$length].symptoms = $symptoms;
  saveDiary();
  setDiary();
  //console.log(localStorage.getItem('diary'));
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

//console.log(DIARY.length);
//creates table to equate correlation
function tableFor(food, sick){
  var table=[1,1,1,1];
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
  //console.log(tableFor("cheese", "headache", DIARY));

  var symptomArray = [];
  //creates an array of all logged symptoms
  function gatherSymp(){
    var sickArray = [];

    // var match = false;
    for(n=0;n<DIARY.length;n++){
      for(m=0;m<DIARY[n].symptoms.length;m++){
        if(DIARY[n].symptoms[m] !== ""){
        sickArray.push(DIARY[n].symptoms[m]);
        }
      }
    }
    $.each(sickArray, function(p, unique){
        if($.inArray(unique, symptomArray) === -1) symptomArray.push(unique);
    });
    //console.log(symptomArray);
  }

  gatherSymp();

  var ingredArray = [];
  //creates an array of all logged ingredients
  function gatherIngred(){
    var foodArray = [];

    var match = false;
    for(n=0;n<DIARY.length;n++){
      for(m=0;m<DIARY[n].ingredients.length;m++){
        foodArray.push(DIARY[n].ingredients[m].trim());
      }
    }
    $.each(foodArray, function(p, unique){
        if($.inArray(unique, ingredArray) === -1) ingredArray.push(unique);
    });
    //console.log(ingredArray);
  }

  gatherIngred();

  // maps all correlations to food item, under a category of symptom
  var corMap = {};
  var cleanLine = [];
  var cleanArray = [];
  function corMapper() {
    for(t=0;t<symptomArray.length;t++){
      var tempArray = [];
      var tempString = "";
      for(j=0;j<ingredArray.length;j++){
        var tempCor = correlation(tableFor(ingredArray[j], symptomArray[t], DIARY));
        if(tempCor > 0.5){
          tempString = "High correlation"
        }
        else if (tempCor > 0){
          tempString = "Medium correlation"
        }
        else if (tempCor < 0){
          tempString = "Low correlation"
        }
        var stringCor = (ingredArray[j] + " has " + tempString);
        tempArray.push(stringCor);
      }
      var totalTemps = tempArray
      corMap[symptomArray[t]] = totalTemps;
    }
    //console.log(corMap);
    for(p=0;p<symptomArray.length;p++){
      var totalLine = "";
      var corName = symptomArray[p];
      for(k=0;k<corMap[corName].length;k++){
       totalLine += corMap[corName][k] + "<br>"
      }
      cleanLine.push(totalLine)
    }
    //console.log(cleanLine);
}


  // appends children to display correlations
  function displayCorrelations(){

    corMapper();
      var $corsLayout = document.getElementById('allCorrelations');
      for (h=0;h<symptomArray.length;h++){
        var $corDiv = document.createElement('div');
        var corName = symptomArray[h];
        $corDiv.innerHTML = "<h2>"+corName+"</h2><p>"+cleanLine[h]+"</p>";
        $corsLayout.appendChild($corDiv);
      }
    }

  displayCorrelations();

});
