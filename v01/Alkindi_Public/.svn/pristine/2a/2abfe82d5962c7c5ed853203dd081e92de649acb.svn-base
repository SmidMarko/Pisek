function initTask () {
   var data = {
      easy: {
         initState: [4, 1, 3, 0, 2],
         solutionHash: 51,
         widthPlace: 120,
         text: "La transposition est une méthode de chiffrement qui consiste à mélanger les mots du message",
         cx: 290,
         animWidth: 770
      },
      medium: {
          initState: [6, 2, 5, 4, 1, 3, 0, 7],
         solutionHash: 303,
         widthPlace: 90,
//	 text: "Alkindi est un savant arabe qui est ne a Bagdad en l an huit cent un" ,
	 text: "Une autre methode possible pour chiffrer un texte consiste a remplacer chaque lettre par une autre",
//         text: "apporté du nouveau monde par Colomb le cacao ne devient le dessert adoré par tous que trois siècles plus tard",
         cx: 290,
         animWidth: 770
      },
      hard: {
          initState: [9, 4, 1, 5, 3, 8, 6, 2, 0, 7],
         solutionHash: 662,
         widthPlace: 76,
         text: "deposez vos cles votre ordi et votre telephone éteint dans le coffre et attendez Alice et Bob qui sont partis acheter du lait du pain et du fromage avec Eve",
         cx: 290,
         animWidth: 770
      }
   }
   var paper;
   var animHeight = 140;
   var heightPlacePerLetter = 30;
   var fontSize = 12;
   var xMargin = 100;
   var selectedWord = 0;
   var nbWords = 0;
   var blockLength;
   var answer = null;

   task.load = function(views, callback) {
      displayHelper.avatarType = "laptop";
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.setupLevels();

      //displayHelper.hideValidateButton = true;
      //displayHelper.hideRestartButton = true;

      if (views.solutions) {
         $("#solution").show();
      }

      for (var level in data) {
         if (data[level].text.split(" ").length % data[level].initState.length != 0) {
            alert("level " + level + " has a length " + data[level].text.split(" ").length + " that is not a multiple of the block size");
         }
      }

      callback();
   }

   task.getDefaultStateObject = function() {
      return { level: "easy" };
   };

   task.getStateObject = function() {
      state.level = level;
      return state;
   };

   task.reloadStateObject = function(stateObj, display) {
      state = stateObj;
      level = state.level;
      blockLength = data[level].initState.length;
      nbWords = Math.floor(data[level].text.split(" ").length / blockLength);
      heightPlace = heightPlacePerLetter * nbWords;
      selectedWord = 0;

      if (display) {
         initPaper();
         $(".blockLength").html(blockLength);
      }
   };

   task.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      dragAndDrop.removeAllObjects('alien');
      dragAndDrop.insertObjects('alien', 0, $.map(answerObj[level], function(iSticker) {
         return { ident : iSticker, elements: drawSticker(iSticker, "alien") };
         }
      ));
      updateText();
   };

   task.getAnswerObject = function() {
      answer[level] = dragAndDrop.getObjects('alien');
      return answer;
   };

   task.getDefaultAnswerObject = function() {
      var answer = {};
      for(var level in data) {
         answer[level] = data[level].initState.slice(0);
      }
      return answer;
   };

   task.unload = function(callback) {
      callback();
   };

   var drawSticker = function(iSticker, type) {
      var margin = 0;
      var message = "";
      for (var iWord = 0; iWord < nbWords; iWord++) {
         if (iWord != 0) {
            message += "\n \n";
         }
         var letter = data[level].text.split(" ")[iWord * blockLength + iSticker];
         if (letter == " ") {
            letter = "\u00a0";
         }
         message += letter;
      }
      //var letter = data[level].text.charAt(selectedWord * blockLength + iSticker)
      var sticker = paper.text(0, 0, message.toUpperCase()).attr({"font-family":"courier-new"});
      //var sticker = paper.text(0, 0, letter);
      sticker.attr({"font-size": fontSize});
      var rect1 = paper.rect(-data[level].widthPlace/2, -heightPlace/2, data[level].widthPlace, heightPlace).attr({fill: "#E0E0F8"});
      var rect2 = paper.rect(margin-data[level].widthPlace/2, margin-heightPlace/2, data[level].widthPlace-2*margin, heightPlace-2*margin).attr({fill: "white"});
      return [rect1, rect2, sticker];
   }

   var initPaper = function() {
      $("#anim").width = data[level].animWidth;
      $("#anim").height = heightPlace + 10;
      if (paper != null) {
         paper.remove();
      }
      paper = Raphael('anim', data[level].animWidth, heightPlace + 10);
      //paper.canvas.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space","preserve");

      dragAndDrop = DragAndDropSystem({
         paper : paper,
         actionIfEjected: function(refElement, srcCont, srcPos) {
            var sequence = dragAndDrop.getObjects(srcCont);
            for (var iPos = 0; iPos < sequence.length; iPos++) {
               if (sequence[iPos] === null) {
                  return DragAndDropSystem.action(srcCont, iPos, "insert");
               }
            }
            return null;
         },
         drop: function(srcCont, srcPos, dstCont, dstPos, type) {
            updateText();
         },
         ejected: function(refElement, srcCont, srcPos) {
            updateText();
         }
      });

     var backgroundAlien = paper.rect(-data[level].widthPlace/2,-heightPlace/2,data[level].widthPlace,heightPlace).attr('fill', '#F2F2FF');

      dragAndDrop.addContainer({
         ident : 'alien',
         cx : data[level].cx + xMargin,
         cy : heightPlace / 2,
         widthPlace : data[level].widthPlace,
         heightPlace : heightPlace,
         nbPlaces : blockLength,
         direction : 'horizontal',
         dropMode : 'insertBefore',
         dragDisplayMode : 'preview',
         placeBackgroundArray : [ backgroundAlien ]
      });

      for (var pos = 0; pos < blockLength; pos++) {
         var iSticker = data[level].initState[pos];
         dragAndDrop.insertObject('alien', iSticker, {ident : iSticker, elements : drawSticker(iSticker, "alien")} );
         //paper.text(xMargin + 10 + pos * widthPlace, 120, data[level].text.charAt(pos)).attr({"font-size": 30});
      }
      //paper.text(40, 25, "Bloquer :").attr({"font-size": 20});
      updateText();
   }

   var updateText = function() {
      var sequence = dragAndDrop.getObjects("alien");
      var text = data[level].text;
      var outputText = "<table><tr><td>";
      var inputText = "<table><tr><td>";
      var outputLog = "";
      var row = 0;
      for (var iDigit = 0; iDigit < text.length; iDigit++) {
         if (iDigit % blockLength == 0) {
            inputText += "<tr><td>";
            outputText += "<tr><td class='word' id='row_" + row + "' onclick='task.selectWord(" + row + ")'>";
         }
         var posInBlock = iDigit % blockLength;
         var blockStart = iDigit - posInBlock;
         var newPosInBlock = sequence[posInBlock];
         outputText += text.charAt(blockStart + newPosInBlock);
         outputLog += text.charAt(blockStart + newPosInBlock);
         inputText += text.charAt(iDigit);
         if (iDigit % blockLength == blockLength - 1) {
            inputText += "</td></tr>";
            outputText += "</td></tr>";
            row++;
         }
      }
      $("#inputText").html(inputText);
      $("#outputText").html(outputText);
      $("#row_" + selectedWord).addClass("selected");
   };

   task.selectWord = function(iWord) {
      selectedWord = iWord;
      $(".selected").removeClass("selected");
      $("#row_" + selectedWord).addClass("selected");
      task.reloadAnswerObject(answer);
   };
  
   var hashSequence = function(sequence) {
      var primes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];
      var sum = 0;
      for (var iVal = 0; iVal < sequence.length; iVal++) {
         sum += sequence[iVal] * primes[iVal];
      }
      return sum;
   }

   var getResultAndMessage = function(answer, level) {
      if (Beav.Object.eq(answer[level], data[level].initState)) {
         return {
            result: "error",
            message: "Déplacez les étiquettes pour les mettre dans le bon ordre."
         }
      }
      var hash = hashSequence(answer[level]);
      if (hash == data[level].solutionHash) {
         return {
            result: "optimal",
            message: ""
         }
      } else {
         return {
            result: "error",
            message: "Vous avez au moins une erreur."
         }
      }
   };

   grader.gradeTask = function(strAnswer, token, callback) {
      task.getLevelGrade(strAnswer, token, callback, null);
   };

   task.getLevelGrade = function(strAnswer, token, callback, gradedLevel) {
      var answer = $.parseJSON(strAnswer);
      var taskParams = displayHelper.taskParams;
      var scores = {};
      var messages = {};
      var maxScores = displayHelper.getLevelsMaxScores();

      // clone the state to restore after grading.
      var oldState = $.extend({}, task.getStateObject());
      for (var curLevel in data) {
         state.level = curLevel;
         task.reloadStateObject(state, false);

         var resultAndMessage = getResultAndMessage(answer, curLevel);
         if (resultAndMessage.result == "optimal") {
            scores[curLevel] = maxScores[curLevel];
            messages[curLevel] = "Bravo ! Vous avez réussi.";
         }
         else {
            scores[curLevel] = taskParams.noScore;
            messages[curLevel] = resultAndMessage.message ;
         }
      }

      task.reloadStateObject(oldState, false);
      if (!gradedLevel) {
         displayHelper.sendBestScore(callback, scores, messages);
      } else {
         callback(scores[gradedLevel], messages[gradedLevel]);
      }
   };
};

initTask();
// initWrapper(initTask, ["easy", "medium", "hard"]);
//displayHelper.useFullWidth();
