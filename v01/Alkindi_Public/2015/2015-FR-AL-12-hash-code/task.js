function initTask() {
   var state = null;
   var level;
   var answer = null;
   var data = {
      easy: {
         hashCode: 368,
         hashFunction: function(text) {
            var res = 0;
            for (var iLetter = 0; iLetter < text.length; iLetter++) {
               res += text.charCodeAt(iLetter) - "a".charCodeAt(0) + 1;
            }
            return res;
         }
      },
      medium: {
         hashCode: "HACHAGE",
         hashFunction: function(text) {
            var newText = text;
            if (newText.length % 2 == 1) {
               newText += "z";
            }
            var res = "";
            for (var iLetter = 0; iLetter < (newText.length / 2); iLetter++) {
               var code = newText.charCodeAt(iLetter * 2) - "a".charCodeAt(0) +
                  newText.charCodeAt(iLetter * 2 + 1) - "a".charCodeAt(0) + 1;
               code = code % 26;
               res += String.fromCharCode(code + "A".charCodeAt(0));
            }
            return res;
         }
      },
      hard: {
         hashCode: "12345",
         hashFunction: function(text) {
            var p2 = 1;
            var hash = "";
            for (var bit = 0; bit < 5; bit++) {
               var res = 0;
               for (var iLetter = 0; iLetter < text.length; iLetter++) {
                  var code = text.charCodeAt(iLetter) - "a".charCodeAt(0) + 1;
                  if (Math.floor(code / p2) % 2 == 1) {
                     res++;
                  }
               }
               p2 *= 2;
               hash = res + hash;
            }
            return hash;
         }
      }
   };

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
   };

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

      if (display) {
         if (answer) {
            $("#userText").val(answer[level]);
         }
         $("#refHash").html(data[level].hashCode);
         task.textChanged();
      }
   };

   task.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      if (answer) {
         $("#userText").val(answer[level]);
      }
      task.textChanged();
   };

   task.getAnswerObject = function() {
      return answer;
   };

   task.getDefaultAnswerObject = function() {
      var answer = {};
      for(var level in data) {
         answer[level] = "";
      }
      return answer;
   };

   task.unload = function(callback) {
      callback();
   };

   var initPaper = function() {
   };

   task.textChanged = function() {
      var text = $("#userText").val();
      if (answer) {
         answer[level] = text;
      }
      $("#userHash").html(getHashCode(level, text));
   };

   var getHashCode = function(level, text) {
      var newText = $.trim(text.toLowerCase());
      var res = 0;
      for (var iLetter = 0; iLetter < text.length; iLetter++) {
         var code = newText.charCodeAt(iLetter) - "a".charCodeAt(0);
         if ((code < 0) || (code >= 26)) {
            return "<span style='color:red'>Le mot de passe ne doit contenir que des lettres.</span>";
         }
      }
      return data[level].hashFunction(newText);
   };

   var getResultAndMessage = function(answer, level) {
      var hashCode = getHashCode(level, answer[level]);
      if (hashCode == data[level].hashCode) {
         if (level == "hard") {
            var length = $.trim(answer[level]).length;
            if (length == 6) {
               return {
                  result: "optimal",
                  message: ""
               };
            } else if (length <= 11) {
               score = 45 - length;
            } else {
               score = 33;
            }
            return {
               result: "partial",
               score: score,
               message: "C'est bien, mais il est possible d'utiliser moins de lettres"
            };
         } else {
            return {
               result: "optimal",
               message: ""
            };
         }
      } else {
         return {
            result: "error",
            message: "Le code de hachage n'est pas le bon."
         };
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
         } else if (resultAndMessage.result == "partial") {
            scores[curLevel] = resultAndMessage.score;
            messages[curLevel] = resultAndMessage.message;
         } else {
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
}
initTask();
