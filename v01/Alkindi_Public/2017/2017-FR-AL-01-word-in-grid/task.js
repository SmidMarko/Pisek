function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         topRow: [
            ['D', 'A', 'O', 'F', 'O', 'N', 'J', 'H'],
            ['L', 'W', 'M', 'F', 'H', 'G', 'J', 'H'],
            ['A', 'H', 'B', 'M', 'D', 'W', 'I', 'O'],
            ['R', 'W', 'Z', 'X', 'J', 'Y', 'Z', 'N']
         ],
         rows: 8,
         startRow: 4,
         multiSelect: false,
         targetHashes : [47830732, 18609082, 26654606, 9769125]
      },
      medium: {
         topRow: [
             ['E', 'A', 'Q', 'Y', 'C', 'N', 'K', 'F', 'N', 'Y', 'C', 'A', 'V', 'J', 'K', 'F'],
             ['H', 'W', 'N', 'Y', 'C', 'H', 'V', 'P', 'D', 'J', 'X', 'S', 'Y', 'Y', 'W', 'Y', 'P'],
             ['G', 'Q', 'J', 'Y', 'C', 'H', 'D', 'Z', 'D', 'U', 'P', 'E', 'O', 'Y', 'J']
         ],
         rows: 16,
         multiSelect: false,
         startRow: 5,
         targetHashes: [4461130, 12529531, 55966782]
      },
      hard: {
         topRow: [
             ['D', 'E', 'S', 'H', 'G', 'J', 'U', 'X', 'A', 'D', 'D', 'I', 'I', 'X', 'P', 'Z', 'S'],
             ['J', 'E', 'O', 'V', 'Z', 'S', 'C', 'H', 'S', 'Y', 'U', 'U', 'W', 'R', 'X', 'Z', 'S']
         ],
         rows: 16,
         multiSelect: true,
         targetHashes: [27722711, 39813093]
      }
   };

   var rows;
   var cols;
   var mainInstance;
   var virtualTable;
   var instance;

   var alphabetSize = 26;
   var asciiBase = "A".charCodeAt(0);

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
      level = curLevel;
      initTable();
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
      showFeedback(null);
      mainInstance = new VisualInstance({
         element: $("#mainDiv"),
         name: "mainGrid",
         virtualTable: virtualTable,
         interactive: true,
         onClick: onClick
      });
      refreshVisuals();

      var example1 = new VisualInstance({
         element: $("#example1Div"),
         name: "exampleGrid",
         virtualTable: [
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", "O", "U", "R", " "],
            [" ", " ", " ", "C", " ", " ", " ", "S"],
            [" ", "O", "N", " ", " ", " ", " ", " "],
            ["C", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "]
         ]
      });
      var example2 = new VisualInstance({
         element: $("#example2Div"),
         name: "exampleGrid",
         virtualTable: [
            ["Y", " ", " ", " ", " ", " ", " ", " "],
            ["Z", " ", " ", " ", "O", "U", "R", " "],
            ["A", " ", " ", "C", " ", " ", " ", "S"],
            ["B", "O", "N", " ", " ", " ", " ", " "],
            ["C", " ", " ", " ", " ", " ", " ", " "],
            ["D", " ", " ", " ", " ", " ", " ", " "],
            ["E", " ", " ", " ", " ", " ", " ", " "],
            ["F", " ", " ", " ", " ", " ", " ", " "]
         ]
      });
      var example3 = new VisualInstance({
         element: $("#example3Div"),
         name: "exampleGrid",
         virtualTable: [
            ["Y", "L", "K", "A", "N", "T", "Q", "Q"],
            ["Z", "M", "L", "B", "O", "U", "R", "R"],
            ["A", "N", "M", "C", "P", "V", "S", "S"],
            ["B", "O", "N", "D", "Q", "W", "T", "T"],
            ["C", "P", "O", "E", "R", "X", "U", "U"],
            ["D", "Q", "P", "F", "S", "Y", "V", "V"],
            ["E", "R", "Q", "G", "T", "Z", "W", "W"],
            ["F", "S", "R", "H", "U", "A", "X", "X"]
         ]
      });
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var table = Beav.Matrix.make(rows, cols, false);
      if(data[level].startRow !== undefined) {
         table[data[level].startRow][0] = true;
      }
      return table;
   };

   subTask.unloadLevel = function(callback) {
      callback();
   };

   function initTable() {
      instance = (parseInt(subTask.taskParams.randomSeed)) % data[level].topRow.length;
      var topRow = data[level].topRow[instance];
      rows = data[level].rows;
      cols = topRow.length;
      virtualTable = Beav.Matrix.init(rows, cols, function(row, col) {
         var char = topRow[col];
         var newCode = (char.charCodeAt(0) - asciiBase + row) % alphabetSize + asciiBase;
         return String.fromCharCode(newCode);
      });
   }

   function VisualInstance(settings) {
      var letterClass = settings.name + "Letter";
      var rows = settings.virtualTable.length;
      var cols = settings.virtualTable[0].length;

      this.init = function() {
         var html = "<table class=\"grid " + settings.name + "\">";
         
         for(var row = 0; row < rows; row++) {
            html += "<tr>";
            for(var col = 0; col < cols; col++) {
               html += "<td class=\"" + letterClass + "\" id=\"" + posToLetterID(letterClass, row, col) + "\">";
               html += settings.virtualTable[row][col];
               html += "</td>";
            }
            html += "</tr>";
         }

         html += "</table>";
         settings.element.html(html);

         if(settings.interactive) {
            $("." + letterClass).mousedown(this.onMouseDown);
         }
      };

      this.onMouseDown = function(event) {
         var position = letterIDToPos(this.id);
         settings.onClick(position.row, position.col);
      };

      this.setSelected = function(row, col, isSelected) {
         this.setClassState(row, col, "selected", isSelected);
      };

      this.setHighlighted = function(row, col, isHighlighted) {
         this.setClassState(row, col, "highlighted", isHighlighted);
      };

      this.setClassState = function(row, col, className, state) {
         var id = posToLetterID(letterClass, row, col);
         $("#" + id).toggleClass(className, state);
      };

      this.init();
   }

   function posToLetterID(baseName, row, col) {
      return baseName + "_" + row + "_" + col;
   }

   function letterIDToPos(id) {
      var parts = id.split("_");
      return {
         row: parseInt(parts[1]),
         col: parseInt(parts[2])
      };
   }

   function onClick(row, col) {
      showFeedback(null);
      if(data[level].startRow !== undefined && col === 0) {
         showFeedback(taskStrings.fixedFirstCol);
         return;
      }
      var otherRow;
      var otherCol;

      if(answer[row][col]) {
         answer[row][col] = false;
         
         // When only one selection per column is allowed,
         // deselecting means that everything to the right is cleared.
         if(!data[level].multiSelect) {
            for(otherRow = 0; otherRow < rows; otherRow++) {
               for(otherCol = col + 1; otherCol < cols; otherCol++) {
                  answer[otherRow][otherCol] = false;
               }
            }
         }
      }
      else {
         if(canSelect(row, col)) {
            answer[row][col] = true;
            // Enforce only one selection per column.
            for(otherRow = 0; otherRow < rows; otherRow++) {
               if(otherRow !== row) {
                  answer[otherRow][col] = false;
               }
            }
            if(!data[level].multiSelect) {
               // Everything to the right is kept only if still valid.
               // Note we go column by column, because each column depends
               // on the previous one.
               for(otherCol = col + 1; otherCol < cols; otherCol++) {
                  for(otherRow = 0; otherRow < rows; otherRow++) {
                     if(!needsHighlight(otherRow, otherCol)) {
                        answer[otherRow][otherCol] = false;
                     }
                  }
               }
            }
         }
         else {
            showFeedback(taskStrings.badCell);
         }
      }

      refreshVisuals();
   }

   function canSelect(row, col) {
      if(data[level].multiSelect) {
         return true;
      }
      if(col === 0) {
         return true;
      }
      return needsHighlight(row, col);
   }

   function needsHighlight(row, col) {
      var cols = [col - 1];
      if (data[level].multiSelect) {
         cols.push(col + 1);
      }
      for(dRow = -1; dRow <= 1; dRow++) {
         var newRow = row + dRow;
         for (var iCol = 0; iCol < cols.length; iCol++) {
            var newCol = cols[iCol];
            if(inRange(newRow, newCol) && answer[newRow][newCol]) {
               return true;
            }
         }
      }
      return false;
   }

   function refreshVisuals() {
      for(var row = 0; row < rows; row++) {
         for(var col = 0; col < cols; col++) {
            mainInstance.setSelected(row, col, answer[row][col]);
            mainInstance.setHighlighted(row, col, needsHighlight(row, col));
         }
      }
   }

   function inRange(row, col) {
      return row >= 0 && row < rows && col >= 0 && col < cols;
   }

   function isAnswerEmpty() {
      for(var row = 0; row < rows; row++) {
         for(var col = 0; col < cols; col++) {
            if(answer[row][col]) {
               return false;
            }
         }
      }
      return true;
   }

   function answerHasEmptyColumn() {
      for(var col = 0; col < cols; col++) {
         var empty = true;
         for(var row = 0; row < rows; row++) {
            if(answer[row][col]) {
               empty = false;
               break;
            }
         }
         if(empty) {
            return true;
         }
      }
      return false;
   }

   function answerHasMultiSelection() {
      for(var col = 0; col < cols; col++) {
         var count = 0;
         for(var row = 0; row < rows; row++) {
            if(answer[row][col]) {
               count++;
               if(count > 1) {
                  return true;
               }
            }
         }
      }
      return false;
   }

   function answerHasUnhighlightedSelection() {
      for(var row = 0; row < rows; row++) {
         for(var col = 1; col < cols; col++) {
            if(answer[row][col] && !needsHighlight(row, col)) {
               return true;
            }
         }
      }
      return false;
   }

   function getUserLetters() {
      var result = [];
      for(var col = 0; col < cols; col++) {
         for(var row = 0; row < rows; row++) {
            if(answer[row][col]) {
               result.push(virtualTable[row][col]);
               break;
            }
         }
      }
      return result;
   }

   function hashLetters(array) {
      var value = 0;
      for(var iLetter = 0; iLetter < array.length; iLetter++) {
         var code = array[iLetter].charCodeAt(0);
         value += (code * 58349) % 57298363;
         value = (value * 15013) % 57298363;
      }
      return value;
   }

   function showFeedback(string) {
      if(string === null || string === undefined || string === "") {
         string = "&nbsp;";
      }
      $("#feedback").html(string);
   }

   function getResultAndMessage() {
      if(isAnswerEmpty()) {
         return {
            successRate: 0,
            message: taskStrings.empty
         };
      }
      if(answerHasEmptyColumn()) {
         return {
            successRate: 0,
            message: taskStrings.missing
         };
      }
      if(answerHasMultiSelection()) {
         return {
            successRate: 0,
            message: taskStrings.tooMany
         };
      }
      if(answerHasUnhighlightedSelection()) {
         return {
            successRate: 0,
            message: taskStrings.invalid
         };
      }
      var userHash = hashLetters(getUserLetters());
      //alert(userHash);
      if(userHash !== data[level].targetHashes[instance]) {
         return {
            successRate: 0,
            message: taskStrings.wrong
         };
      }
      return {
            successRate: 1,
            message: taskStrings.success
         };
   }

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
