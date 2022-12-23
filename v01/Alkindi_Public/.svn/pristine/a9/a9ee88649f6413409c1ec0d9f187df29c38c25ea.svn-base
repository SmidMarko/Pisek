function initTask() {
   var state = null;
   var level;
   var answer = null;
   var letters = null;
   var data = {
      easy: {
         nbRows: 3,
         nbCols: 6,
         nbColors: 2,
         cellSide: 50,
         secret: "2U3VGT",
         secretFormat: [10, 26, 10, 26, 26, 26],
         colStart: 0,
         rowStart: 1,
         maxProduct: 26 * 26 * 10
      },
      medium: {
         nbRows: 3,
         nbCols: 15,
         nbColors: 3,
         cellSide: 40,
         secret: "A00PC0011010111",
         secretFormat: [26, 2, 2, 26, 26, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
         colStart: 0,
         rowStart: 1,
         maxProduct: 26 * 16
      },
      hard: {
         nbRows: 3,
         nbCols: 10,
         nbColors: 3,
         cellSide: 50,
         secret: "2U73P1D74H",
         secretFormat: [10, 26, 10, 10, 26, 10, 26, 10, 10, 26],
         colStart: 0,
         rowStart: 1,
         maxProduct: 10 * 10 * 10 * 10
      }
   };
   var colors = ["#FFFF70", "#0000D0", "#FF4040"];
   var selectedColor = 0;

   var paper;
   var cells;
   var colorBoxes = [];

   var gridParams = {
      xPad: 8,
      yPad: 8,
      lineAttr: {
         stroke: "#555555",
         "stroke-width": 1
      },
      borderAttr: {
         stroke: "#555555",
         "stroke-width": 5
      }
   };

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
         $(".nbColors").html(data[level].nbColors);
         initPaper();
      }
   };

   task.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      for (var iRow = 0; iRow < data[level].nbRows; iRow++) {
         for (var iCol = 0; iCol < data[level].nbCols; iCol++) {
            updateCell(iRow, iCol);
         }
      }
      clickBox(0);
   };

   task.getAnswerObject = function() {
      return answer;
   };

   task.getDefaultAnswerObject = function() {
      var answer = {};
      for(var level in data) {
         answer[level] = Beav.Matrix.make(data[level].nbRows, data[level].nbCols, -1);
      }
      return answer;
   };

   task.unload = function(callback) {
      callback();
   };

   var initPaper = function() {
      if(paper) {
         paper.remove();
         paper = null;
         cells = null;
         colorBoxes = [];
      }

      var paperWidth = data[level].nbCols * data[level].cellSide + 2 * gridParams.xPad;
      var paperHeight = data[level].nbRows * data[level].cellSide + 2 * gridParams.yPad + 100;

      paper = Raphael("anim", paperWidth, paperHeight);
      var gridWidth = data[level].nbCols * data[level].cellSide;
      var gridHeight = data[level].nbRows * data[level].cellSide;
      paper.rect(gridParams.xPad, gridParams.yPad, gridWidth, gridHeight).attr(gridParams.borderAttr);
      cells = [];
      for (var iRow = 0; iRow < data[level].nbRows; iRow++) {
         cells[iRow] = [];
         for (var iCol = 0; iCol < data[level].nbCols; iCol++) {
            var xPos = iCol * data[level].cellSide + gridParams.xPad;
            var yPos = iRow * data[level].cellSide + gridParams.yPad; 
            var cell = paper.rect(xPos, yPos, data[level].cellSide, data[level].cellSide).attr(gridParams.lineAttr);
            setClickCell(cell, iRow, iCol);
            cells[iRow][iCol] = cell;
         }
      }

      var nbLetters = data[level].secret.length;
      var textYPos =  data[level].rowStart * data[level].cellSide + data[level].cellSide / 2 + gridParams.yPad;
      letters = [];
      for (var iLetter = 0; iLetter < nbLetters; iLetter++) {
         var col = data[level].colStart + iLetter;
         var letter = paper.text((col + 0.5) * data[level].cellSide + gridParams.xPad, textYPos, data[level].secret.charAt(iLetter)).attr({"font-size":"22px"});
         letters[iLetter] = letter;
         setClickCell(letter, data[level].rowStart, col);
      }

      
      function setClickBox(box, iColor) {
         box.click(function() {
            clickBox(iColor)
         });
      }

      function setClickCell(cell, iRow, iCol) {
         cell.click(function() {
            clickCell(iRow, iCol);
         });
      }

      var startX = gridParams.xPad + (gridWidth / 2) - (data[level].nbColors / 2) * 70 + 10;
      for (var iRow = 0; iRow < data[level].nbColors; iRow++) {
         colorBoxes[iRow] = paper.rect(startX + 70 * iRow, gridHeight + 50, 50, 50).attr({"fill": colors[iRow]});
         setClickBox(colorBoxes[iRow], iRow);
      }
      clickBox(1);
   };


   var clickBox = function(iColor) {
      for (var iRow = 0; iRow < colorBoxes.length; iRow++) {
         colorBoxes[iRow].attr({"stroke-width": 1});
      }
      colorBoxes[iColor].attr({"stroke-width": 5});
      selectedColor = iColor;
   }

   var clickCell = function(iRow, iCol) {
      if ((answer[level][iRow][iCol] == selectedColor) || (selectedColor == -1)) {
         answer[level][iRow][iCol] = -1;
      } else {
         answer[level][iRow][iCol] = selectedColor;
      }
      updateCell(iRow, iCol);
   };

   var updateCell = function(iRow, iCol) {
      var numAnswer = answer[level][iRow][iCol];
      var textColor = "black";
      var color = "white";
      if (numAnswer != -1) {
         var color = colors[numAnswer];
         if (numAnswer == 1) {
            textColor = "white";
         }
      }
      cells[iRow][iCol].attr({fill: color});
      if (iRow == 1) {
         letters[iCol].attr({stroke: textColor, fill:textColor});
      }
   }

   var resetGrid = function() {
      selectedColor = -1;
      for (var iRow = 0; iRow < data[level].nbRows; iRow++) {
         for (var iCol = 0; iCol < data[level].nbCols; iCol++) {
            clickCell(iRow, iCol);
         }
      }
      clickBox(0);
   };

   var drawLetter = function(xPos, yPos, letter) {
      xPos += data[level].cellSide / 2;
      yPos += data[level].cellSide / 2;
      var text = paper.text(xPos, yPos, letter).attr({'font-size': '20px'});
      return [text];
   };

   var getResultAndMessage = function(answer, level) {
      var nbCols = data[level].nbCols;
      var nbRows = data[level].nbRows;
      var nbColors = data[level].nbColors;
      var seen = [];
      var colorStartPos = [];
      var colorProduct = [];
      for (var iColor = 0; iColor < nbColors; iColor++) {
         colorStartPos[iColor] = null;
         colorProduct[iColor] = 1;
      }
      for (var iRow = 0; iRow < nbRows; iRow++) {
         seen[iRow] = [];
         for (var iCol = 0; iCol < nbCols; iCol++) {
            seen[iRow][iCol] = false;
            var cellColor = answer[level][iRow][iCol];
            if (cellColor != -1) {
               colorStartPos[cellColor] = {row: iRow, col: iCol};
            }
         }
      }
      var nbColorsSeen = 0;
      for (var iColor = 0; iColor < nbColors; iColor++) {
         if (colorStartPos[iColor] != null) {
            nbColorsSeen++;
         }
      }
      if (nbColorsSeen != nbColors) {
         return {
            result: "error",
            message: "Vous n'avez pas utilisé toutes les couleurs."
         }
      }
      var delta = [{row: -1, col: 0}, {row: 1, col: 0}, {row: 0, col: -1}, {row:0, col: 1}];
      var nbSeen = 0;
      function fill(iColor, iRow, iCol) {
         if ((iRow < 0) || (iRow >= nbRows) || (iCol < 0) || (iCol >= nbCols)) {
            return;
         }
         if (seen[iRow][iCol]) {
            return;
         }
         if (answer[level][iRow][iCol] != iColor) {
            return;
         }
         seen[iRow][iCol] = true;
         if (iRow == data[level].rowStart) {
            var iLetter = iCol - data[level].colStart;
            if ((iLetter >= 0) && (iLetter < data[level].secret.length)) {
               nbSeen++;
               colorProduct[iColor] *= data[level].secretFormat[iLetter];
            }
         }
         for (var iDir = 0; iDir < delta.length; iDir++) {
            fill(iColor, iRow + delta[iDir].row, iCol + delta[iDir].col);
         }
      }
      for (var iColor = 0; iColor < nbColors; iColor++) {
         fill(iColor, colorStartPos[iColor].row, colorStartPos[iColor].col);
      }
      for (var iRow = 0; iRow < nbRows; iRow++) {
         for (var iCol = 0; iCol < nbCols; iCol++) {
            var cellColor = answer[level][iRow][iCol];
            if ((cellColor != -1) && (!seen[iRow][iCol])) {
               return {
                  result: "error",
                  message: "Chaque couleur doit former un seul morceau."
               }
            }
         }
      }
      if (nbSeen < data[level].secret.length) {
         return {
            result: "error",
            message: "Toutes les lettres n'ont pas été distribuées"
         }
      }
      for (var iColor = 0; iColor < nbColors; iColor++) {
         if (colorProduct[iColor] > data[level].maxProduct) {
            return {
               result: "error",
               message: "L'un des morceaux au moins contient trop d'information."
            }
         }
      }
      return {
         result: "optimal",
         message: ""
      };
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
}
initTask();
