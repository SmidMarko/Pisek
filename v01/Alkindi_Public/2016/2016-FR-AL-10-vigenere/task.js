function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
          cipherRows: [["IDM","NLCYD","PDWCBSM","DLMN","TKSYCBRMLKSM"]],
          targetHash : 32622,
          fixedKeyLength: 4
      },
      medium: {
          cipherRows: [["KX","EDM","Y","QDPQJUYVR","RP","LZMVR","X","NS","NGA"]],
          targetHash: 24979,
      },
      hard: {
          cipherRows: [["MJYB", "QRYCZ", "PP", "LN", "FWYSQVRKWPIP", "DX"],
		       ["QAHW", "XOXSZRD", "QRYCZ", "BCEHYJ", "DH", "YJR"],
		       ["CPEI", "PO", "PP", "BRDZCRRK", "HO", "AVHDZHPRNQHE"]],
          targetHash: 74340,
          selectedWord: 9
      }
   };

   var cipherRows;
   var cipher;
   var cipherWithSpaces;
   var decryptedRows;
   var alphabetSize = 26;
   var maxKeyLength = 20;
   var minKeyLength = 1;
   var firstLetter = "A";
   
   subTask.loadLevel = function(curLevel) {
      level = curLevel;
      displayHelper.avatarType = "laptop";
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
      cipherRows = data[level].cipherRows;
      cipher = "";
      cipherWithSpaces = "";
      for(var row = 0; row < cipherRows.length; row++) {
         for(var iWord = 0; iWord < cipherRows[row].length; iWord++) {
            cipher += cipherRows[row][iWord];
            cipherWithSpaces += cipherRows[row][iWord];
            if(iWord < cipherRows[row].length - 1 || row < cipherRows.length - 1) {
               cipherWithSpaces += " ";
            }
         }
      }
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
      keyNumber = (keyNumber + alphabetSize) % alphabetSize;
      answer.key[keyIndex] = keyNumber;
      $("#keyNumber_" + keyIndex).text(keyNumber);
      refreshDecryptionDisplay();
   }

   function clickLength(event) {
      var id = event.target.id;
      if(id == "keyAdd") {
         if(answer.key.length === maxKeyLength || answer.key.length === cipher.length) {
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
         var plainHTML = "<tr>";
         for(var iWord = 0; iWord < cipherRows[bigRow].length; iWord++) {
            var word = cipherRows[bigRow][iWord];
            for(var iChar = 0; iChar < word.length; iChar++) {
               cipherHTML += "<td class='letterCell'>";
               cipherHTML += "<div id='cipher_" + globalLetterIndex + "' class='letter cipher'>" + cipher[globalLetterIndex] + "</div>";
               cipherHTML += "</td>";
               numHTML += "<td class='numCell keyHighlight' id='cipherNumCell_" + globalLetterIndex + "'>";
               numHTML += "<div id='cipherNum_" + globalLetterIndex + "' class='cipherNum'>+5</div>";
               numHTML += "</td>";
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
               plainHTML += "<td class='wordSpaceCell'></td>";
            }
            globalWordIndex++;
         }
         cipherHTML += "</tr>";
         numHTML += "</tr>";
         plainHTML += "</tr>";
         bigRowsHTML += "<tr><td><table id='bigRow_" + bigRow + "' class='bigRow'>";
         bigRowsHTML += cipherHTML + numHTML + plainHTML;
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
      for(var iChar = 0; iChar < cipher.length; iChar++) {
         $("#plain_" + iChar).toggleClass("lockedLetter", answer.locked[iChar % answer.key.length]);
      }
   }

   function refreshDecryptionDisplay() {
      var plainText = getDecryption(cipher);
      for(var iChar = 0; iChar < cipher.length; iChar++) {
         var keyIndex = iChar % answer.key.length;
         $("#plain_" + iChar).text(plainText[iChar]);
         $("#cipherNum_" + iChar).text("+" + answer.key[keyIndex]);

         var isFirstKeyChar = (keyIndex === 0);
         var isLastKeyChar = (keyIndex === answer.key.length - 1);
         $("#cipherNumCell_" + iChar).toggleClass("keyHighlightLeft", isFirstKeyChar);
         $("#cipherNumCell_" + iChar).toggleClass("keyHighlightRight", isLastKeyChar);
      }
   }

   function getDecryption(cipher) {
      var result = "";
      var keyIndex = 0;
      for(var iChar = 0; iChar < cipher.length; iChar++) {
         if(cipher[iChar] == " ") {
            result += " ";
            continue;
         }
         var charCode = cipher.charCodeAt(iChar);
         var letterNumber = charCode - firstLetter.charCodeAt(0);
         var newLetterNumber = (letterNumber + answer.key[keyIndex]) % alphabetSize;
         var newCharCode = newLetterNumber + firstLetter.charCodeAt(0);
         result += String.fromCharCode(newCharCode);
         keyIndex = (keyIndex + 1) % answer.key.length;
      }
      return result;
   }

   function getResultAndMessage() {
      var decryption = getDecryption(cipherWithSpaces);
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
         if(hashString(decryption) == data[level].targetHash) {
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
