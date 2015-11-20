$(document).ready(function(){


    // IN THIS CODE, ALL SINGLE LETTERS REPRESENT A COUNTER/INDEX

    var $historyLayout = document.getElementById('historyDisplay');
var $diary = JSON.parse(localStorage.getItem('diary'));

    //console.log($diary);
    //console.log($diary.length);
    var $count = 10;

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



    function entryFound(){
        setDiary();
        $diary = JSON.parse(localStorage.getItem('diary'));
        var $entryItem = document.createElement('li');
        var $name = $diary[i].name;
        var $ingred = "";
        var $sicks = "";
        for(l=0;l<$diary[i].ingredients.length;l++){
          if(l< ($diary[i].ingredients.length - 1)){
          $ingred += ($diary[i].ingredients[l]+ ", ");
        } else {
          $ingred += $diary[i].ingredients[l];
        }
        }
        for(b=0;b<$diary[i].symptoms.length;b++){
          if(b< ($diary[i].symptoms.length - 1)){
          $sicks += ($diary[i].symptoms[b]+ ", ");
        } else {
          $sicks += $diary[i].symptoms[b];
        }
        $entryItem.innerHTML = "<div class='journalItem'><h3>Entry "+ i +"</h3><h2>"+$name+"</h2><p>"+$ingred+"</p>"+"<h3>Symptoms</h3><p>"+$sicks+"</p>";
        $historyLayout.appendChild($entryItem);
        }

      }

    //console.log($diary.length);

    //shows all entries of diary. For demonstration purposes, no limit is placed on how much is displayed
    function displayDiary(){
      clearHistory();
      $diary = JSON.parse(localStorage.getItem('diary'));
      //console.log("display called", $diary);
      if($diary.length > 0){
        //console.log($diary)
        for(i=0;i<$diary.length;i++){

          entryFound();
          }
      } else if($diary.length < 1){
        var $nullWord = document.createElement('li');
        $nullWord.innerHTML = "<h3>You have no entries. Click on 'ENTRY' to create one!</h3>"
        $historyLayout.appendChild($nullWord);
        }
      }

      var historySearchBtn = document.getElementById('historySearchBtn');
      historySearchBtn.addEventListener('click', historySearch);

      var displayHistoryBtn = document.getElementById('histShow');
      displayHistoryBtn.addEventListener('click', displayDiary);


      // searches diary for food name
      function historySearch(){
        clearHistory();
        var searchDiaryItem = document.getElementById('historySearchField').value;
        for(i=0;i<$diary.length;i++){
          if ($diary[i].name == searchDiaryItem){
            entryFound();
          }
        }
        if ($historyLayout.innerHTML === ""){
          var $nullWord = document.createElement('li');
          $nullWord.innerHTML = "<h3>No entries found.</h3>"
          $historyLayout.appendChild($nullWord);
        }
      }

      //displays and hides content in correlation to chosen item

      $('.entry').addClass('display');

      $('#entry').click(function(){
         //console.log("clicked!");
        $('.entry').addClass('display');
        $('.recipes').removeClass('display');
        $('.diary').removeClass('display');
        $('#entryMade').html('');
      });

      $('#recipes').click(function(){
        //console.log("clicked!");
        $('.recipes').addClass('display');
        $('.entry').removeClass('display');
        $('.diary').removeClass('display');
      });

      $('#diary').click(function(){
        //console.log("clicked!");
        $('.diary').addClass('display');
        $('.recipes').removeClass('display');
        $('.entry').removeClass('display');
      });


});
