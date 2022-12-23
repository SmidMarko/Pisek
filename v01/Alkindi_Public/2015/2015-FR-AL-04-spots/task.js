function initTask () {
   var data = {
      easy: {
         alienDigits: ["A", "B", "C", "D", "E", "F"],
         initState: [0, 1, 2, 3, 5, 4],
         solutionHash: 74,
         text: "Hier j'étais avec mes $A$ copines Chloé, Julie et Amina et mes $B$ copains Jules et Mohamed. En tout, nous étions donc $D$ (mes $C$ amis plus moi). Chloé a dû partir tôt, donc je n'étais plus qu'avec $E$ amis, avec $F$ fille de plus que de garçons en me comptant."
      },
      medium: {
         alienDigits: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
         initState: [0, 1, 7, 3, 4, 5, 6, 2, 8, 9],
         solutionHash: 537,
         text: "Allo Léa, tu as $A$ minute ? Tu sais qu'on a un week-end de $B$ jours le $C$$B$, $C$$D$ et $C$$E$ du mois prochain ? J'organise une soirée chez moi mercredi à partir de $C$$J$ heures. Nous sommes déjà $F$ filles et $G$ garçons soit $A$$H$ personnes en tout. Si $A$ fille se désiste on sera le même nombre de filles que de garçons, soit $A$$I$ en tout."
      },
      hard: {
         alienDigits: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
         initState: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
         solutionHash: 410,
         text: "Nous sommes le $D$$J$/$D$$I$/$I$$G$$G$$C$ et hier, Martin a fêté ses $F$ ans chez sa grand mère. Il est en effet né le $D$$A$/$D$$I$/$I$$G$$G$$D$. à $I$$A$h$B$$A$ exactement. Sa grand mère avait préparé un gâteau, mais il manquait $D$ bougie, elle n'en avait plus que $E$. Martin avait invité $E$ amis, $A$ filles et $J$ garçons. Couper le gâteau en $F$ parts égales pour ses amis et lui n'était pas trop difficile."
      }
   }
   var paper;
   var animWidth = 700;
   var animHeight = 140;
   var widthPlace = 60;
   var heightPlace = 60;
   var locks = [];
   var xMargin = 100;
   var nbStickers;
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
      nbStickers = data[level].alienDigits.length;

      if (display) {
         initPaper();
      }
	  
   };

   task.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      dragAndDrop.removeAllObjects('alien');
      dragAndDrop.insertObjects('alien', 0, $.map(answerObj[level].alien, function(iSticker) {
         return { ident : iSticker, elements: drawSticker(iSticker, "alien") };
         }
      ));
      for (var iLock = 0; iLock < answer[level].locked.length; iLock++) {
         updateLock(iLock);
      }  
      updateText();
	      
   };

   task.getAnswerObject = function() {
      answer[level].alien = dragAndDrop.getObjects('alien');
      return answer;
   };

   task.getDefaultAnswerObject = function() {
      var answer = {};
      for(var level in data) {
         answer[level] = {}
         answer[level].alien = data[level].initState.slice(0);
         answer[level].locked = [];
         for (var iPos = 0; iPos < data[level].initState.length; iPos++) {
            answer[level].locked.push(0);
         }
      }
      return answer;
   };

   task.unload = function(callback) {
      callback();
   };

   var drawSticker = function(iSticker, type) {
      var margin = 5;
      var sticker = paper.text(0, 0, data[level].alienDigits[iSticker]);
      sticker.attr({"font-family": "alien", "font-size": 40});
      var rect1 = paper.rect(-widthPlace/2, -heightPlace/2, widthPlace, heightPlace).attr({fill: "#E0E0F8"});
      var rect2 = paper.rect(margin-widthPlace/2, margin-heightPlace/2, widthPlace-2*margin, heightPlace-2*margin).attr({fill: "white"});
      return [rect1, rect2, sticker];
   }

   var initPaper = function() {
      $("#anim").width = animWidth;
      $("#anim").height = animHeight;
      if (paper != null) {
         paper.remove();
      }
      paper = Raphael('anim', animWidth, animHeight);

      dragAndDrop = DragAndDropSystem({
         paper : paper,
         canBeTaken: function(srcCont, srcPos) {
            return !answer[level].locked[srcPos];
         },
         actionIfDropped: function(srcCont, srcPos, dstCont, dstPos, type) {
            return !answer[level].locked[dstPos];
         },
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

     var backgroundAlien = paper.rect(-widthPlace/2,-heightPlace/2,widthPlace,heightPlace).attr('fill', '#F2F2FF');

      dragAndDrop.addContainer({
         ident : 'alien',
         cx : 280 + xMargin,
         cy : 70,
         widthPlace : widthPlace,
         heightPlace : heightPlace,
         nbPlaces : nbStickers,
         direction : 'horizontal',
         dropMode : 'replace',
         dragDisplayMode : 'marker',
         placeBackgroundArray : [ backgroundAlien ]
      });

      dragAndDrop.addContainer({
         ident : 'alien',
         cx : 280 + xMargin,
         cy : 70,
         widthPlace : widthPlace,
         heightPlace : heightPlace,
         nbPlaces : nbStickers,
         direction : 'horizontal',
         dropMode : 'replace',
         dragDisplayMode : 'marker',
         placeBackgroundArray : [ backgroundAlien ]
      });

      function setClickLock(pos) {
         locks[pos].click(function() {
            answer[level].locked[pos] = !answer[level].locked[pos];
            updateLock(pos);
            updateText();
         });
      };

      locks = [];
      var newMargin = xMargin;
      if (level == "easy") {
         newMargin += 2*widthPlace;
      }
      for (var pos = 0; pos < nbStickers; pos++) {
         var iSticker = data[level].initState[pos];
         dragAndDrop.insertObject('alien', iSticker, {ident : iSticker, elements : drawSticker(iSticker, "alien")} );
         var label = pos;
         if (level == "easy") {
            label = pos + 1;
         }
         paper.text(newMargin + 10 + pos * widthPlace, 120, label).attr({"font-size": 30});
         var side = 20;
         locks[pos] = paper.rect(newMargin + pos * widthPlace, 15, side, side).attr({"stroke":"black", "fill":"white"});
         setClickLock(pos);
      }
      paper.text(40, 25, "Bloquer :").attr({"font-size": 20});
      updateText();
   }

   function updateLock(pos) {
      if (answer[level].locked[pos]) {
         locks[pos].attr({"fill": "gray"});
      } else {
         locks[pos].attr({"fill": "white"});
      }
   }

   function replaceAll(find, replace, str) {
      return str.replace(new RegExp(find, 'g'), replace);
   }

   var updateText = function() {
      var sequence = dragAndDrop.getObjects("alien");
      var text = data[level].text;
      var invSequence = [];
      var invLocked = [];
      for (var iDigit = 0; iDigit < sequence.length; iDigit++) {
         var invDigit = iDigit;
         if (level == "easy") {
            invDigit++;
         }
         invSequence[sequence[iDigit]] = invDigit;
         if (answer == null) {
            invLocked.push(0);
         } else {
            invLocked[sequence[iDigit]] = answer[level].locked[iDigit];
         }
      }
      var pos = 0;
      var str = "";
      while (pos < text.length) {
         var letter1 = text.charAt(pos);
         var letter2 = "&nbsp;"
         var letterClass = "unlocked";
         if (letter1 == "$") {
            letter1 = text.charAt(pos + 1);
            var digit = letter1.charCodeAt(0) - 'A'.charCodeAt(0);
            letter1 = "<span class='alien'>" + data[level].alienDigits[digit] + "</span>";
            letter2 = "<span class='digit'>" + invSequence[digit] + "</span>";
            if (invLocked[digit]) {
               var tmp = letter1;
               letter1 = letter2;
               letter2 = tmp;
               letterClass = 'locked';
            }
            pos += 2;
         }
         str += "<span style='position:relative;top:20px;left:10px' class='" + letterClass + "'>" + letter2 + "</span>" + letter1;
         pos++;
      }
      $("#alienText").html("<div style='line-height:2.5em;text-align:left'>" + str + "</div>");
/*
      var newText = text;
      var alienText = text;
      for (var iDigit = 0; iDigit < data[level].alienDigits.length; iDigit++) {
         var alienDigit = data[level].alienDigits[sequence[iDigit]];
         var frenchDigit = iDigit;
         if (level == "easy") {
            frenchDigit += 1;
         }
         newText = replaceAll("\\$" + alienDigit + "\\$", "<span class='digit'>" + frenchDigit + "</span>", newText);
         alienText = replaceAll("\\$" + alienDigit + "\\$", "<span class='alien'>" + alienDigit + "</span>", alienText);
      }
      $("#alienText").html(alienText);
//      $("#newText").html(newText);*/
   }
  
   var hashSequence = function(sequence) {
      var primes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];
      var sum = 0;
      for (var iVal = 0; iVal < sequence.length; iVal++) {
         sum += sequence[iVal] * primes[iVal];
      }
      return sum;
   }

   var getResultAndMessage = function(answer, level) {
      if (Beav.Object.eq(answer[level].alien, data[level].initState)) {
         return {
            result: "error",
            message: "Déplacez les étiquettes pour les mettre dans le bon ordre."
         }
      }
      var hash = hashSequence(answer[level].alien);
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
            messages[curLevel] = resultAndMessage.message;
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
