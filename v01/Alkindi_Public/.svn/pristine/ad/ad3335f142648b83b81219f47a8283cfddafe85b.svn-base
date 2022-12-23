function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         // These must correspond to the fields of taskStrings.headerInfo.
         encrypted: "UQNJUA",
         //encrypted: "QBAEUR",
         answerHash:  39930613
      },
      medium: {
         encrypted: "KGVARUDMI",
         answerHash:  13450937
      },
      hard: {
         //encrypted: "KZWGVLZUZRGDNORPX,XIHXCIWFJ!S.ND.FCWBFPWJEU",
         encrypted: "  .'JUCYHYV?MDBK,QPGNA!TXSMTKSEA",
         answerHash:  45102981
      }
   };
   var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
       "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
      ",", "'", "!", "?", ".", " "];

   var noRotations = [0, 0, 0, 0, 0];
   var sampleRotation = [-1, 0, 0, 0, 1];
   var encodedParams = { arrows: true, header: false, footer: true };

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
      displayHelper.hideValidateButton = false;
      level = curLevel;
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
      displayGrid("#alphabet", alphabet, { arrows: false, header: true, footer: false }, noRotations);
      displayGrid("#encoded", data[level].encrypted, encodedParams, answer.rotations);
       displayGrid("#example1", "EXEMPLE", { arrows: false, header: false, footer: true }, sampleRotation);
      displayGrid("#example2", "EXEMPLE", { arrows: false, header: false, footer: true }, noRotations);
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      return {
         rotations: [0, 0, 0, 0, 0]
      }
   };

   subTask.unloadLevel = function(callback) {
      removeHandlers();
      callback();
   };

   function computeDigits(letters, rotations) {
      var digits = [[], [], [], [], []];
      for (var iLetter = 0; iLetter < letters.length; iLetter++) {
         var remainder;
         for (var iAlpha = 0; iAlpha < alphabet.length; iAlpha++) {
            if (alphabet[iAlpha] == letters[iLetter]) {
               remainder = iAlpha;
               break;
            }
         }
         for (var iDigit = 0; iDigit < 5; iDigit++) {
            var digit = remainder % 2;
            remainder = (remainder - digit) / 2;
            var col = (iLetter + rotations[iDigit] + letters.length) % letters.length;
            digits[iDigit][col] = digit;
         }
      }
      return digits;
   }

   function decode(letters, rotations) {
      var digits = computeDigits(letters, rotations);
      var decodedLetters = [];
      for (var iLetter = 0; iLetter < letters.length; iLetter++) {
         var pow = 1;
         var newLetter = 0;
         for (var iDigit = 0; iDigit < 5; iDigit++) {
            if (digits[iDigit][iLetter] == 1) {
               newLetter += pow;
            }
            pow *= 2;
         }
         decodedLetters.push(alphabet[newLetter]);
      }
      return decodedLetters;
   }

   function displayGrid(id, letters, params, rotations) {
       var rows = ["", "", "", "", "", ""];
       $(id).html("");
       var digits;
       var decodedLetters;
       digits = computeDigits(letters, rotations);
       decodedLetters = decode(letters, rotations)

       for (var iLetter = 0; iLetter < letters.length; iLetter++) {
          var letter = letters[iLetter];
          rows[0] += "<td><div class='letter'>" + letter + "</div></td>";
          rows[6] += "<td><div class='letter'>" + decodedLetters[iLetter] + "</div></td>";
          var remainder = iLetter;
          for (var iDigit = 0; iDigit < 5; iDigit++) {
             var digit = digits[iDigit][iLetter];
             rows[5 - iDigit] += "<td><div class='digit_" + digit + "'>&nbsp;</div></td>";
          }
       }
       for (var iRow = 0; iRow < 7; iRow++) {
          if ((iRow == 0) && !params.header) {
             continue;
          }
          if ((iRow == 6) && !params.footer) {
             continue;
          }
          var leftArrow = "";
          var rightArrow = "";
          if (params.arrows) {
             if ((iRow == 0) || (iRow == 6)) {
                leftArrow = "<td class='noBorder'></td>";
                rightArrow = "<td class='noBorder'></td>";
             } else {
                leftArrow = "<td class='noBorder'><div class='arrow_left' id='left_" + (6 - iRow) + "'>&larr;</div></td>";
                rightArrow = "<td class='noBorder'><div class='arrow_right' id='right_" + (6 - iRow) + "'>&rarr;</div></td>";
             }
          }
          $(id).append("<tr>" + leftArrow + rows[iRow % 7] + rightArrow + "</tr>");
       }
       function addClick(iRow, side) {
          $("#" + side + "_" + iRow).click(function() {
             var delta = 1;
             if (side == "left") {
                delta = -1;
             }
             answer.rotations[iRow - 1] = (answer.rotations[iRow - 1] + letters.length + delta) % letters.length;
             displayGrid("#encoded", data[level].encrypted, encodedParams, answer.rotations);
          });
       }
       if (params.arrows) {
          for (var iRow = 1; iRow < 6; iRow++) {
             addClick(iRow, "left");
             addClick(iRow, "right");
          }
       }
   }

   function removeHandlers() {
      for (var iRow = 1; iRow < 6; iRow++) {
         $("#left_" + iRow).off("click");
         $("#right_" + iRow).off("click");
      }
   }

   function hashString(string) {
      var value = 0;
      for(var iLetter = 0; iLetter < string.length; iLetter++) {
         var code = string.charCodeAt(iLetter);
         value += (code * 58349) % 57298363;
         value = (value * 15013) % 57298363;
      }
      return value;
   }

   function getResultAndMessage() {
      var output = decode(data[level].encrypted, answer.rotations).join("");
      var userHash = hashString(output);
      //alert(userHash);
      if(userHash == data[level].answerHash) {
         return {
            successRate: 1,
            message: taskStrings.success
         };
      }
      return {
         successRate: 0,
         message: taskStrings.error
      };
   }

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
