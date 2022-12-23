function initTask () {
   var data = {
      easy: {
         alienNames: ["tru", "ndvai", "zrpudli", "ovccrn", "treei", "vllrsrpl", "opmqmciuui"],
         frenchNames: ["pomme", "voiture", "arrosoir", "pot", "bicyclette", "nuage", "ballon"],
         initState: [0, 1, 2, 3, 4, 5, 6],
         solutionHash: 115,
         labelStart: -125
      },
      medium: {
         alienNames: ["esqlzco", "ztlsgia", "ymcuusi", "dsimatq", "ymarqsi", "yztlcsi", "ystoatq", "gzqqzil"],
         frenchNames: ["couleur", "chiffon", "marrant", "bonheur", "portail", "chevron", "caution", "automne"],
         initState: [0, 1, 2, 3, 4, 5, 6, 7],
         solutionHash: 172,
         labelStart: -85
      },
      hard: {
         alienNames: ["couvak", "zjmavt", "esvodn", "vpiaey", "btvlai", "ijurns", "ratnox", "nultja"],
         frenchNames: ["actifs", "bileux", "jovial", "emploi", "fraude", "glapit", "humain", "tomber"],
         initState: [0, 1, 2, 3, 4, 5, 6, 7],
         solutionHash: 196,
         labelStart: -70
      }
   }
   var paper;
   var animWidth = 720;
   var animHeight = 520;
   var widthPlace = 300;
   var heightPlace = 60;
   var locks = [];
   var answer = null;

   task.load = function(views, callback) {
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.avatarType = "laptop";
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
      nbStickers = data[level].alienNames.length;

      if (display) {
         initPaper();
      }
   };

   task.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      dragAndDrop.removeAllObjects('french');
      dragAndDrop.insertObjects('french', 0, $.map(answerObj[level]["french"], function(iSticker) {
         return { ident : iSticker, elements: drawSticker(iSticker, "french") };
         }
      ));
      dragAndDrop.removeAllObjects('alien');
      dragAndDrop.insertObjects('alien', 0, $.map(answerObj[level]["alien"], function(iSticker) {
         return { ident : iSticker, elements: drawSticker(iSticker, "alien") };
         }
      ));
      for (var iLock = 0; iLock < answer[level].locked.length; iLock++) {
         updateLock(iLock);
      }
   };

   task.getAnswerObject = function() {
      answer[level].alien = dragAndDrop.getObjects('alien');
      answer[level].french = dragAndDrop.getObjects('french');
      return answer;
   };

   task.getDefaultAnswerObject = function() {
      var answer = {};
      for(var level in data) {
         answer[level] = {
            alien: data[level].initState.slice(0),
            french: data[level].initState.slice(0),
            locked: []
         };
      }
      return answer;
   };

   task.unload = function(callback) {
      callback();
   };

   var drawSticker = function(iSticker, type) {
      var margin = 5;
      var text = data[level][type + "Names"][iSticker];
      var rect1 = paper.rect(-widthPlace/2, -heightPlace/2, widthPlace, heightPlace).attr({fill: "#E0E0F8"});
      var rect2 = paper.rect(margin-widthPlace/2, margin-heightPlace/2, widthPlace-2*margin, heightPlace-2*margin).attr({fill: "white"});
      var sticker = [rect1, rect2];
      for (var iLetter = 0; iLetter < text.length; iLetter++) {
         var label = paper.text(data[level].labelStart + 28 * iLetter, 0, text[iLetter]);
         if (type == "alien") {
            label.attr({"font-family": "alien", "font-size": 40});
         } else {
            label.attr({"font-size": 30});
         }
         sticker.push(label);
      }
      return sticker;
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
            if (dstCont == null)
               return false;
            if (srcCont != dstCont) {
               return false;
            }
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
         }
      });

     var backgroundAlien = paper.rect(-widthPlace/2,-heightPlace/2,widthPlace,heightPlace).attr('fill', '#F2F2FF');
     var backgroundFrench = paper.rect(-widthPlace/2,-heightPlace/2,widthPlace,heightPlace).attr('fill', '#F2F2FF');

      dragAndDrop.addContainer({
         ident : 'alien',
         cx : 160,
         cy : 261,
         widthPlace : widthPlace,
         heightPlace : heightPlace,
         nbPlaces : nbStickers,
         direction : 'vertical',
         dropMode : 'replace',
         dragDisplayMode : 'marker',
         placeBackgroundArray : [ backgroundAlien ]
      });

      dragAndDrop.addContainer({
         ident : 'french',
         cx : 550,
         cy : 261,
         widthPlace : widthPlace,
         heightPlace : heightPlace,
         nbPlaces : nbStickers,
         direction : 'vertical',
         dropMode : 'replace',
         dragDisplayMode : 'marker',
         placeBackgroundArray : [ backgroundFrench ]
      });


      function setClickLock(lock, pos) {
         lock.click(function() {
            answer[level].locked[pos] = !answer[level].locked[pos];
            updateLock(pos);
         });
      };

      var side = 20;
      var yStart = 70;
      if (level != "easy") {
         yStart -= 30;
      }
      for (var pos = 0; pos < nbStickers; pos++) {
         var iSticker = data[level].initState[pos];
         dragAndDrop.insertObject('alien', iSticker, {ident : iSticker, elements : drawSticker(iSticker, "alien")} );
         dragAndDrop.insertObject('french', iSticker, {ident : iSticker, elements : drawSticker(iSticker, "french")} );
         locks[pos] = paper.rect(345, yStart + pos * heightPlace, side, side).attr({"stroke":"black", "fill":"white"});
         setClickLock(locks[pos], pos);
      }
      paper.text(355, yStart - 30, "Bloquer").attr({"font-size": 22});
   }

   var updateLock = function(pos) {
      if (answer[level].locked[pos]) {
         locks[pos].attr({"fill": "gray"});
      } else {
         locks[pos].attr({"fill": "white"});
      }
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
      if (Beav.Object.eq(answer[level], data[level].initState)) {
         return {
            result: "error",
            message: "Déplacez les étiquettes pour les mettre dans le bon ordre."
         }
      }
      var stickerPos = [];
      for (var iSticker = 0; iSticker < answer[level].french.length; iSticker++) {
         var iFrench = answer[level].french[iSticker];
         stickerPos[iFrench] = iSticker;
      }
      var reorderedAnswer = [];
      for (var iSticker = 0; iSticker < answer[level].french.length; iSticker++) {
         var posAlien = stickerPos[iSticker];
         reorderedAnswer[iSticker] = answer[level].alien[posAlien];
      }
      var hash = hashSequence(reorderedAnswer);
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
