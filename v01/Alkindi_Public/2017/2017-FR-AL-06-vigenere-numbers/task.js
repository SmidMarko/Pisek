function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
            cipherRows: [
		// [[1, 17, 20, 14, 19, 10]] // CRYPTO pour l'exemple
[[-1, 17, 14, 3, 11, -2, 3, 23], [8, 13, 18, 13], [-1], [9, -5], [14, 6, 20, 24, 2, 12, 7, -2], [-2, 19], [23, 9, 13]]
               ],
          targetHash : 45625,
          fixedKeyLength: 3
      },
      medium: {
            cipherRows: [
[[14, -3, 24, 13, -1, 24], [-3], [18, 2], [-2, -1, 9, 11], [18, 15, 7], [22, 21, 27, 9, 18, 1]]
               ],
          targetHash: 6282
      },
      hard: {
            cipherRows: [
[[-1, 22, 10, 27, -5], [22, 10, 19, 15], [2, 21, 14, 5, 9, 2], [-3, 22], [4, 6, 21, -3], [2, 1], [11, 2, 20, 26]]
               ],
          targetHash: 14607
      }
   };

   var cipherRows;
   var alphabetSize = 26;
   var maxKeyLength = 10;
   var minKeyLength = 1;
   var firstLetter = "A";
   var firstLetterCode = firstLetter.charCodeAt(0);
   
   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
      level = curLevel;
      cipherRows = data[level].cipherRows;
      cipherLengthNoSpaces = getCipherLength(cipherRows, false);
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
   };

   subTask.resetDisplay = function () {
      initHTML();
      refreshKey();
      refreshDecryptionDisplay();
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var length = 1;
      
      if(data[level].fixedKeyLength) {
         length = data[level].fixedKeyLength;
      }
      return {
         key: Beav.Array.make(length, 0),
         locked: Beav.Array.make(length, false)
      };
   };

   subTask.unloadLevel = function(callback) {
      callback();
   };

   function initHandlers() {
      $(".operator").unbind();
      $(".keyLengthButton").unbind();
      $(".keyLock").unbind();
      $(".operator").mousedown(clickOperator);
      $(".keyLengthButton").mousedown(clickLength);
      $(".keyLock").mousedown(clickLock);
   }

   function clickLock(event) {
      var index = parseInt(event.target.id.split("_")[1]);
      answer.locked[index] = !answer.locked[index];
      refreshLocks();
   }

   function clickOperator(event) {
      var idParts = event.target.id.split("_");
      var operator = idParts[0];
      var keyIndex = parseInt(idParts[1]);
      var keyNumber = answer.key[keyIndex];
      if(operator == "plus") {
         keyNumber++;
      }
      else {
         keyNumber--;
      }

      if(keyNumber > alphabetSize / 2) {
         keyNumber = - alphabetSize / 2;
      }
      else if(keyNumber < - alphabetSize / 2) {
         keyNumber = alphabetSize / 2;
      }
      answer.key[keyIndex] = keyNumber;
      $("#keyNumber_" + keyIndex).text(keyNumber);
      refreshDecryptionDisplay();
   }

   function clickLength(event) {
      var id = event.target.id;
      if(id == "keyAdd") {
         if(answer.key.length === maxKeyLength || answer.key.length === cipherLengthNoSpaces) {
            return;
         }
         answer.key.push(0);
         answer.locked.push(false);
      }
      else {
         if(answer.key.length == minKeyLength) {
            return;
         }
         answer.key.pop();
         answer.locked.pop();
      }
      refreshKey();
      refreshDecryptionDisplay();
   }

   function initHTML() {
      var bigRowsHTML = "";
      var globalLetterIndex = 0;
      var globalWordIndex = 0;
      for(var bigRow = 0; bigRow < cipherRows.length; bigRow++) {
         var cipherHTML = "<tr>";
         var numHTML = "<tr>";
         var interHTML = "<tr>";
         var plainHTML = "<tr>";
         for(var iWord = 0; iWord < cipherRows[bigRow].length; iWord++) {
            var word = cipherRows[bigRow][iWord];
            for(var iChar = 0; iChar < word.length; iChar++) {
               cipherHTML += "<td class='letterCell'>";
               cipherHTML += "<div id='cipher_" + globalLetterIndex + "' class='letter cipher'>" + word[iChar] + "</div>";
               cipherHTML += "</td>";
               numHTML += "<td class='numCell keyHighlight' id='cipherNumCell_" + globalLetterIndex + "'>";
               numHTML += "<div id='cipherNum_" + globalLetterIndex + "' class='cipherNum'>+5</div>";
               numHTML += "</td>";
               interHTML += "<td class='letterCell'>";
               interHTML += "<div id='inter_" + globalLetterIndex + "' class='letter plain'>B</div>";
               interHTML += "</td>";
               if(data[level].selectedWord === globalWordIndex) {
                  if(iChar === 0) {
                     plainHTML += "<td class='letterCell selection selectionLeft'>";
                  }
                  else if(iChar === word.length - 1) {
                     plainHTML += "<td class='letterCell selection selectionRight'>";
                  }
                  else {
                     plainHTML += "<td class='letterCell selection'>";
                  }
               }
               else {
                  plainHTML += "<td class='letterCell'>";
               }
               
               plainHTML += "<div id='plain_" + globalLetterIndex + "' class='letter plain'>B</div>";
               plainHTML += "</td>";
               globalLetterIndex++;
            }
            if(iWord < cipherRows[bigRow].length - 1) {
               cipherHTML += "<td class='wordSpaceCell'><div class='cipher'>&nbsp;</div></td>";
               numHTML += "<td class='wordSpaceCell keyHighlight'></td>";
               interHTML += "<td class='wordSpaceCell'><div class='cipher'>&nbsp;</div></td>";
               plainHTML += "<td class='wordSpaceCell'><div class='cipher'>&nbsp;</div></td>";
            }
            globalWordIndex++;
         }
         cipherHTML += "</tr>";
         numHTML += "</tr>";
         interHTML += "</tr>";
         plainHTML += "</tr>";
         bigRowsHTML += "<tr><td><table id='bigRow_" + bigRow + "' class='bigRow'>";
         bigRowsHTML += cipherHTML + numHTML + interHTML + plainHTML;
         bigRowsHTML += "</table></td></tr>";
      }
      $("#bigRowContainer").html(bigRowsHTML);      
   }

   function refreshKey() {
      var keyTableHTML = "";
      var operatorPlusHTML = "<tr>";
      var operatorMinusHTML = "<tr>";
      var keyRowHTML = "<tr>";
      var locksHTML = "<tr>";
      for(var index = 0; index < answer.key.length; index++) {
         operatorPlusHTML += "<td class='keyCell keyOperator'><input type='button' value='+' id='plus_" + index + "' class='operator operatorPlus'/></td>";
         operatorMinusHTML += "<td class='keyCell keyOperator'><input type='button' value='-' id='minus_" + index + "' class='operator operatorMinus'/></td>";
         keyRowHTML += "<td class='keyCell keyNumber' id='keyNumber_" + index + "'>" + answer.key[index] + "</td>";
         locksHTML += "<td class='keyCell keyLockCell'><img class='keyLock' id='keyLock_" + index + "' src='" + $("#unlock_img").attr("src") +"'/></td>";
      }
      operatorPlusHTML += "<td></td><td></td></tr>";
      operatorMinusHTML += "<td></td><td></td></tr>";
      locksHTML += "<td></td><td></td></tr>";
      keyRowHTML += "</tr>";
      keyTableHTML = operatorPlusHTML + keyRowHTML + operatorMinusHTML + locksHTML;
      $("#keyTable").html(keyTableHTML);
      $("#keyLength").text(answer.key.length);
      initHandlers();
      refreshLocks();
   }

   function refreshLocks() {
      for(var index = 0; index < answer.key.length; index++) {
         var lockElement = $("#keyLock_" + index);
         var plusElement = $("#plus_" + index);
         var minusElement = $("#minus_" + index);
         plusElement.attr("disabled", answer.locked[index]);
         minusElement.attr("disabled", answer.locked[index]);
         if(answer.locked[index]) {
            lockElement.attr("src", $("#lock_img").attr("src"));
         }
         else {
            lockElement.attr("src", $("#unlock_img").attr("src"));
         }
      }
      for(var iChar = 0; iChar < cipherLengthNoSpaces; iChar++) {
         $("#plain_" + iChar).toggleClass("lockedLetter", answer.locked[iChar % answer.key.length]);
      }
   }

   function keyDigitToDisplayStr(key) {
      if(key >= 0) {
         return "+" + key;
      }
      return key;
   }

   function isPlainCharValid(char) {
      var code = String(char).charCodeAt(0);
      return code >= firstLetterCode && code < firstLetterCode + alphabetSize;
   }

   function plainCharToDisplayStr(char) {
      if(isPlainCharValid(char)) {
         return char;
      }
      return "#";
   }

   function plainCharToInterStr(char) {
      return String(char).charCodeAt(0) - firstLetterCode + 1;
   }

   function refreshDecryptionDisplay() {
      var invalidChars = 0;
      var plainText = getDecryption(cipherRows, false);
      for(var iChar = 0; iChar < plainText.length; iChar++) {
         var keyIndex = iChar % answer.key.length;
         var plainChar = plainText.charAt(iChar);
         if (!isPlainCharValid(plainChar)) {
            invalidChars++;
         }
         $("#inter_" + iChar).text(plainCharToInterStr(plainChar));
         $("#plain_" + iChar).text(plainCharToDisplayStr(plainChar));
         $("#plain_" + iChar).toggleClass("invalidLetter", !isPlainCharValid(plainChar));
         $("#cipherNum_" + iChar).text(keyDigitToDisplayStr(answer.key[keyIndex]));

         var isFirstKeyChar = (keyIndex === 0);
         var isLastKeyChar = (keyIndex === answer.key.length - 1);
         $("#cipherNumCell_" + iChar).toggleClass("keyHighlightLeft", isFirstKeyChar);
         if (iChar == plainText.length - 1) {
            $("#cipherNumCell_" + iChar).toggleClass("keyHighlightRight", isLastKeyChar);
         }
         var parts = ["inter", "plain", "cipher"];
         for (var iPart = 0; iPart < parts.length; iPart++) {
            var part = parts[iPart];
               $("#" + part + "_" + iChar).parent().toggleClass("keyLetterCellLeft", isFirstKeyChar);
            if (iChar == plainText.length - 1) {
               $("#" + part + "_" + iChar).parent().toggleClass("keyLetterCellRight", isLastKeyChar);
            }
         }
      }
      if (invalidChars > 0) {
         $("#feedback").html("<div style='text-align:center;color:red;font-weight:bold'>" + taskStrings.invalidChars(invalidChars) + "</div>");
      } else {
         $("#feedback").html("");
      }
   }

   function getCipherLength(rows, withSpaces) {
      var length = 0;
      for (var iRow = 0; iRow < rows.length; iRow++) {
         var row = rows[iRow];
         for (var iWord = 0; iWord < row.length; iWord++) {
            var word = row[iWord];
            if ((iWord != 0) && withSpaces) {
               length++;
            }
            length += word.length;
         }
      }
      return length;
   }

   function getDecryption(rows, withSpaces) {
      var result = "";
      var keyIndex = 0;
      for (var iRow = 0; iRow < rows.length; iRow++) {
         var row = rows[iRow];
         for (var iWord = 0; iWord < row.length; iWord++) {
            var word = row[iWord];
            if ((iWord != 0) && withSpaces) {
               result += " ";
            }
            for (var iLetter = 0; iLetter < word.length; iLetter++) {
               var newCharCode = word[iLetter] + answer.key[keyIndex] + firstLetterCode - 1;
               result += String.fromCharCode(newCharCode);
               keyIndex = (keyIndex + 1) % answer.key.length;
            }
         }
      }
      return result;
   }

   function getResultAndMessage() {
      var decryption = getDecryption(cipherRows, true);
      var decryptionNoSpaces = getDecryption(cipherRows, false);
      var success;
      var message;
      if(data[level].selectedWord) {
         var word = decryption.split(" ")[data[level].selectedWord];
         if(hashString(word) === data[level].targetHash) {
            success = 1;
            message = taskStrings.success;
         }
         else {
            success = 0;
            message = taskStrings.errorWord;
         }
      }
      else {
         var userHash = hashString(decryptionNoSpaces);
         //alert(userHash);
         if(userHash == data[level].targetHash) {
            success = 1;
            message = taskStrings.success;
         }
         else {
            success = 0;
            message = taskStrings.errorText;
         }
      }
      return {
         successRate: success,
         message: message
      };
   }

   function hashString(text) {
      var value = 0;
      for(var iLetter = 0; iLetter < text.length; iLetter++) {
         var code = text.charCodeAt(iLetter);
         value += code;
         value = (value * 19) % 79197;
      }
      return value;
   }

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
