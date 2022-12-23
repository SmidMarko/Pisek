function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         nWheels: 2,
         hash: 24219890
      },
      medium: {
         nWheels: 7,
         hash: 51918649
      },
      hard: {
         nWheels: 13,
         hash: 25255869
      }
   };
   var letters = [ "A", "B", "C", "D", "E", "F", 
                  "G", "H", "I", "J", "K", "L", 
                  "M", "N", "O", "P", "Q", "R", 
                  "S", "T", "U", "V", "W", "X", 
                  "Y", "Z"]; //, "_", "'"];
   var nLetters = letters.length;
   var nWheels;
   var maxWheelLength;
   var cipher = "";
   var encipheredText = "";
   var nbClicks = 0;

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      nWheels = data[level].nWheels;
      encipheredText = taskStrings.text[level].toUpperCase();
      maxWheelLength = Math.ceil(nLetters/nWheels);
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      if(!answer) {
         return;
      }
   };

   subTask.resetDisplay = function() {
      $("#enciphered").html(encipheredText);
      initWheels();
      $("#deciphered").html(decipher());
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = [];
      for (var iLetter = 0; iLetter < nLetters; iLetter++) {
         defaultAnswer.push(0);
      }
      return defaultAnswer;
   };

   subTask.unloadLevel = function(callback) {
      callback();
   };

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };

   function hashLetters(text) {
      var value = 0;
      for(var iLetter = 0; iLetter < text.length; iLetter++) {
         var code = text[iLetter].charCodeAt(0);
         value += (code * 58349) % 57298363;
         value = (value * 15013) % 57298363;
      }
      // console.log(value);
      return value;
   }

   function getResultAndMessage() {
      var success = true;
      var hash = hashLetters(decipher());
      if (hash == data[level].hash) {
         return {
            successRate: 1,
            message: taskStrings.success
         };
      } else {
         return {
            successRate: 0,
            message: taskStrings.error
         };
      }
   }
   
   function getWheelLength(iWheel) {
      var remainingLetters = nLetters - iWheel * maxWheelLength;
      return Math.min(remainingLetters, maxWheelLength);
   }

   function initWheels() {
      $("#wheels").empty();
      for(var iWheel = 0; iWheel < nWheels; iWheel++){
         var wheelLength = getWheelLength(iWheel);
         var firstLetter = iWheel * maxWheelLength;
         addWheel(firstLetter, wheelLength, iWheel);
      }
      resetWheelEvents();
      centerWheels();
   };
   
   function resetWheelEvents() {
      $('.arrow').off('click');
      $('.arrow').click(roll);
      $('.cell').off('mousedown');
      $('.cell').mousedown(function() {
         if (nbClicks < 4) {
            displayHelper.showPopupMessage(taskStrings.clickOnArrows, "blanket");
         }
      });
   }
   
   function decipher() {
      var decipheredText = "";
      for(var iLetter = 0; iLetter < encipheredText.length; iLetter++) {
         var letter = encipheredText[iLetter];
         if($.inArray(letter,letters) > -1){
            var letterIndex = letter.charCodeAt(0) - 65;
            var wheel = Math.floor(letterIndex/maxWheelLength);
            var wheelLength = getWheelLength(wheel);
            var firstLetter = wheel * maxWheelLength;
            var decipheredLetterIndex = firstLetter + (letterIndex - firstLetter + answer[wheel]) % wheelLength;
            decipheredText += letters[decipheredLetterIndex];;
         } else{
            decipheredText += letter;
         }
      }
      return decipheredText;
   };

   function addWheel(firstLetter,length,index) {
      var shift = (answer[index]) ? answer[index] : 0;
      var wheel = drawWheel(firstLetter,length,index,shift);
      $('#wheels').append(wheel);
   };

   function drawWheel(firstLetter,length,index,shift) {
      var table = "<table id=table_"+index+"><tr>";
      for(var iRow = 0; iRow < 2; iRow++){
         for(var iCol = 0; iCol < length+2; iCol++){
            if(iRow == 0 && iCol == 0){
               table += '<th class="noBorder"></th>';
            }else if(iRow == 0 && iCol == length+1){
               table += '<th class="noBorder"></th></tr>';
            }else if(iRow == 0){
               table += "<th>"+letters[firstLetter+iCol-1]+"</th>";
            }else if(iRow == 1 && iCol == 0){
               table += '<td class="arrowCell"><div class="arrow" data_dir="left" data_id="'+index+'">&larr;</div></td>';
            }else if(iRow == 1 && iCol == length+1){
               table += '<td class="arrowCell"><div class="arrow" data_dir="right" data_id="'+index+'">&rarr;</div></td></tr></table>';
            }else{
               table += "<td><div class='cell'>"+letters[firstLetter+(iCol-1+shift)%length]+"</div></td>";
            }
         }
      }
      return table;
   };

   function centerWheels() {
      if(level == "easy"){
         var shift = (770 - 15*30 - 2*10)/2;
         $("#table_0, #table_1").css("margin-left",shift); 
      }else if(level == "medium"){
         var shift1 = (770 - 18*30 - 6*10)/2;
         var shift2 = (770 - 4*30 -2*10)/2;
         $("#table_0, #table_3").css("margin-left",shift1);
         $("#table_6").css("margin-left",shift2); 
      }else{
         var shift1 = (770 - 20*30 - 10*10)/2;
         var shift2 = (770 - 12*30 -6*10)/2;
         $("#table_0, #table_5").css("margin-left",shift1);
         $("#table_10").css("margin-left",shift2); 
      }
   };

   function roll() {
      nbClicks++;
      var wheel = $(this).attr("data_id");
      var dir = $(this).attr("data_dir");
      var wheelLength = getWheelLength(wheel);
      var shift = wheelLength-1;
      if (dir == "left") {
         shift = 1;
      }
      var firstLetter = wheel * maxWheelLength;
      answer[wheel] = (answer[wheel] + shift) % wheelLength;
      var newWheel = drawWheel(firstLetter, wheelLength, wheel, answer[wheel]);
      $("#table_"+wheel).replaceWith(newWheel);
      resetWheelEvents();
      centerWheels();
      $("#deciphered").html(decipher());
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
