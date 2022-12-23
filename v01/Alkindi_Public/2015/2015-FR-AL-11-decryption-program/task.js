function initTask () {
   var data = {
      easy: {
         plaintext: "ceciestletextedorigine",
         encryption:  "def chiffrer(lettre):\n    if lettre == 'a':\n        return 'c'\n    if lettre == 'b':\n        return 'a'\n    if lettre == 'c':\n        return 'b'\n    if lettre not in 'abc':\n        return lettre\n\ndef chiffrerTexte(texte):\n    resultat=''\n    for lettre in texte:\n        resultat+=chifrer(lettre)\n    return resultat\n\n",
        /* 'def encrypt(text):\n  esult = ""\n  for c in text:\n    rank = rankInAlphabet(c)\n    encryptedRank = (rank + 10) % 26\n    result += letterFromRank(encryptedRank)\n  return result', */
      },
      medium: {
         plaintext: "mabc def ghi jkl mno pqr stu vwx yz",
         encryption: "def chiffrer(lettre):\n    rang = RangDansAlphabet(lettre)\n    if rang < 16:\n        nouveauRang = rang + 10\n        return lettreDeRang(nouveauRang) \n    else:\n        nouveaRang= rang - 16\n        return lettreDeRang(nouveauRang)\n\ndef chiffrerTexte(texte):\n    resultat=''\n    for lettre in texte:\n        resultat+=chifrer(lettre)\n    return resultat\n\n",
       /*


"def encrypt(text):\n  result = ''\n  for c in text:\n    if isLetter(c):\n      rank = rankInAlphabet(c)\n      encryptedRank = (rank + 10) % 26\n      result += letterFromRank(encryptedRank)\n    else:\n      result += c\n  return result",*/
      },
      hard: {
         plaintext: "habc def ghi jkl mno pqr stu vwx yz",
         encryption: "def chiffrerTexte(texte):\n    permutation=[3,2,0,1]       # 0->3 1->2 2->0 2->1 \n    n=len(texte)                # longueur du texte\n    residue= n % 4              # reste de n a la division par 4\n    texte+='x'*(4-residue) # on rajoute des 'x' a la fin du texte\n    i=0\n    resultat=''\n    while i + 4 <= n:\n        resultat+=texte[i+permutation[0]]\n        resultat+=texte[i+permutation[1]] \n        resultat+=texte[i+permutation[2]] \n        resultat+=texte[i+permutation[3]] \n        i=i+4\n    return chiffre\n\n",
    /*def encrypt(text):\n  result = ""\n  for c in text:\n    if isLetter(c):\n      rank = rankInAlphabet(c)\n      encryptedRank = (rank + 10) % 26\n      result += letterFromRank(encryptedRank)\n    else:\n      result += c\n  return result',
    */
      }
   };
   var answer = null;
   var state = null;
   var level = null;
   var useWorker = !!window.Worker && window.location.href.substr(0, 4) == "http";
   var worker = null;
   var pythonPrefix = "\ndef isLetter(c):\n   t = ord(c)\n   return (ord('a') <= t and t <= ord('z')) or (ord('A') <= t and t <= ord('Z'))\ndef rankInAlphabet(c):\n   return ord(c) - ord('a')\ndef letterFromRank(r):\n   return chr(r + ord('a'))\n";
   var levels = ["easy", "medium", "hard"];
   var codeMirrorEncryption = null;
   var codeMirrorDecryption = null;

   task.load = function(views, callback) {
      codeMirrorEncryption = new CodeMirror.fromTextArea($("#encryption_program").get(0), {
        mode:  "python"
      });
      codeMirrorDecryption = new CodeMirror.fromTextArea($("#decryption_program").get(0), {
        mode:  "python"
      });
      initHandlers();
      displayHelper.setupLevels();

      displayHelper.hideValidateButton = true;
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
         $("#plaintext").val(data[level].plaintext);
         codeMirrorEncryption.setValue(data[level].encryption);
         codeMirrorDecryption.setValue("");
         getCiphertext(level, function(output) {
            $("#ciphertext").val(output);
         });
      }
   };

   task.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      codeMirrorDecryption.setValue(answer[level]);
      codeMirrorDecryption.focus();
      $("#output").val("");
   };

   task.getAnswerObject = function() {
      answer[level] = codeMirrorDecryption.getValue();
      return answer;
   };

   task.getDefaultAnswerObject = function() {
      var defaultProgram = "def dechifrer(lettre):\n    # Retournez le texte déchiffré\n\ndef dechiffrerTexte(texte):\n    resultat=''\n    for lettre in texte:\n        resultat+=dechiffrer(lettre)\n    return resultat\n\n";
      return {
         easy: defaultProgram,
         medium: defaultProgram,
         hard: defaultProgram
      };
   };

   task.unload = function(callback) {
      stopExecution();
      callback();
   };

   var initHandlers = function() {
      $("#execute").click(clickExecute);
   };
   
   var clickExecute = function() {
      stopExecution();
      answer[level] = codeMirrorDecryption.getValue();
      getResultAndMessage(answer[level], level, function(resultAndMessage) {
         if(resultAndMessage.output) {
            $("#output").val(resultAndMessage.output);
         }
         if(resultAndMessage.result == "correct") {
            platform.validate("done");
         }
         else {
            displayHelper.validate("stay");
         }
      });
   };
   
   var codeProcessDecryption = function(programText, ciphertext) {
      return programText + "\n" + pythonPrefix + "\nprint dechiffrerTexte(\"" + ciphertext + "\")";
   };
   
   var codeProcessEncryption = function(programText, level) {
      return programText + "\n" + pythonPrefix + "\nprint chiffrerTexte(\"" + data[level].plaintext + "\")";
   };
   
   var getCiphertext = function(level, callback) {
      runPython(codeProcessEncryption(data[level].encryption, level), function(result) {
         callback($.trim(result.output));
      });
   };
   
   var getResultAndMessage = function(programText, level, callback) {
      getCiphertext(level, function(ciphertext) {
         runPython(codeProcessDecryption(programText, ciphertext), function(result) {
            if(result.output) {
               if($.trim(result.output) == $.trim(data[level].plaintext)) {
                  callback({
                     result: "correct",
                     output: result.output
                  });
               }
               else {
                  callback({
                     result: "wrong",
                     message: "Le texte retourné par votre programme est différent du texte d'origine.",
                     output: result.output
                  });
               }
            }
            else {
               callback({
                  result: "error",
                  message: result.error
               });
            }
         });
      })
   };
   
   var runPython = function(programText, callback) {
      var inputText = "";
      if(!useWorker) {
         _runPython(programText, inputText, callback);
         return;
      }
      
      stopExecution();
      if(!worker) {
         worker = new Worker("worker.js");
      }
      worker.onmessage = function(event) {
         callback(event.data);
      };
      worker.postMessage({
         programText: programText,
         inputText: inputText
      });
   };
   
   var stopExecution = function() {
      if(worker) {
         worker.terminate();
         worker = null;
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
      
      var processLevel = function(currentLevelIndex) {
         if(currentLevelIndex >= levels.length) {
            task.reloadStateObject(oldState, false);
            if (!gradedLevel) {
               displayHelper.sendBestScore(callback, scores, messages);
            } else {
               callback(scores[gradedLevel], messages[gradedLevel]);
            }
            return;
         }
         var curLevel = levels[currentLevelIndex];
         state.level = curLevel;
         task.reloadStateObject(state, false);
         getResultAndMessage(answer[curLevel], curLevel, function(resultAndMessage) {
            if (resultAndMessage.result == "correct") {
               scores[curLevel] = maxScores[curLevel];
               messages[curLevel] = "Bravo ! Vous avez réussi.";
            }
            else {
               scores[curLevel] = taskParams.noScore;
               messages[curLevel] = resultAndMessage.message;
            }
            processLevel(currentLevelIndex + 1);
         });
      };
      processLevel(0);
   };
}

initTask();
