function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         passwordLength: 3,
         rows: 12,
         useBottom: false,
         mustTryAll: false,
         instances: [ // TODO obfuscate?
            {widths: [4,1,3], heights: [4,7,2]},
            {widths: [3,1,4], heights: [4,1,7]},
            {widths: [4,2,3], heights: [2,7,4]},
            {widths: [2,4,1], heights: [4,7,3]},
            {widths: [4,3,1], heights: [7,4,2]},
            {widths: [2,3,1], heights: [4,7,6]},
            {widths: [3,4,1], heights: [5,2,1]},
            {widths: [3,2,1], heights: [3,5,2]},
            {widths: [4,2,3], heights: [5,1,3]},
            {widths: [1,4,3], heights: [5,6,3]}
         ]
      },
      medium: {
         passwordLength: 4,
         rows: 12,
         useBottom: true,
         mustTryAll: false,
         instances: [ // TODO obfuscate?
            {widths: [4,1,2,3], heights: [6,4,3,2]},
            {widths: [1,2,3,4], heights: [5,4,3,6]},
            {widths: [2,3,4,1], heights: [6,5,1,4]},
            {widths: [3,4,1,2], heights: [5,4,6,2]},
            {widths: [4,1,3,2], heights: [3,5,4,6]},
            {widths: [1,4,2,3], heights: [6,5,7,4]},
            {widths: [3,1,2,4], heights: [4,0,6,7]},
            {widths: [3,2,4,1], heights: [2,7,4,6]}
         ]
      },
      hard: {
         passwordLength: 4,
         rows: 12,
         useBottom: true,
         mustTryAll: true,
         instances: [ // TODO obfuscate?
            {widths: [3,2,2,3], heights: [4,6,7,5]},
            {widths: [3,2,2,3], heights: [5,0,2,6]},
            {widths: [3,2,2,3], heights: [5,0,2,7]},
            {widths: [3,2,2,3], heights: [5,0,3,7]},
            {widths: [3,2,2,3], heights: [5,0,4,7]},
            {widths: [3,2,2,3], heights: [5,1,2,6]},
            {widths: [3,2,2,3], heights: [5,1,2,7]},
            {widths: [3,2,2,3], heights: [5,1,3,6]},
            {widths: [3,2,2,3], heights: [5,1,4,6]},
            {widths: [3,2,2,3], heights: [5,2,3,7]},
            {widths: [3,2,2,3], heights: [5,2,4,6]},
            {widths: [3,2,2,3], heights: [5,2,6,7]},
            {widths: [3,2,2,3], heights: [5,2,7,6]},
            {widths: [3,2,2,3], heights: [5,3,4,6]}
         ]
      }
   };

   var generateOnClick = false;

   var paper;
   var paperWidth = 760;
   var paperHeight = 340;
   var keyboard;
   var instanceOffset = null;
   var passwordLength;
   var widths;
   var heights;
   var permutations;
   var totalWidth;
   var gridRows;
   var centerGridCols;
   var rows;
   var measureArray;

   var centerGrid;
   var rightGrid;
   var rightGridLabels;

   var bottomRowGap = 3;
   var destroyLimit = 1000;
   var keyboardTryCode = "~".charCodeAt(0);

   var paperParams = {
      emitter: {
         imageName: "emitter.png",
         width: 120,
         height: 260,
         leftPad: 0,
         topPad: 48
      },
      grid: {
         cellWidth: 22,
         cellHeight: 22,
         invisibleAttr: {
            "stroke-width": 0,
            stroke: "none",
            fill: "none"
         },
         emptyAttr: {
            "stroke-width": 1,
            stroke: "black",
            fill: "none"
         },
         fullAttr: {
            "stroke-width": 1,
            stroke: "black",
            fill: "#b97a57"
         },
         measureAttr: {
            "stroke-width": 1,
            stroke: "black",
            fill: "#7f7f7f"
         },
         textAttr: {
            "font-size": 48,
            "font-weight": "bold"
         }
      },
      centerGridOffset: {
         x: 160,
         y: 22
      },
      rightGridOffset: {
         x: 520,
         y: 22
      }
   };
   
   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
      displayHelper.hideValidateButton = true;
      displayHelper.hideRestartButton = true;
      level = curLevel;
      passwordLength = data[level].passwordLength;
      rows = data[level].rows;
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      if(!answer) {
         return;
      }
      instanceOffset = answer.instanceOffset;
      
      // Force user input to valid length.
      if(answer.input.length > passwordLength) {
         answer.input.splice(passwordLength);
      }

      initInstance();
   };

   subTask.resetDisplay = function() {
      $("#keysDiv").show();
      $("#newVault").hide();
      $("#destroyVault").show().prop("disabled", false);
      showFeedback(null);
      initPaper();
      initHandlers();

      if(generateOnClick) {
         $("#taskContent").off("click");
         $("#taskContent").on("click", function() {
            generateInstances([4,1,3]);
         });
      }
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      if(instanceOffset === null) {
         instanceOffset = 0;
      }
      else {
         instanceOffset++;
      }
      return {
         instanceOffset: instanceOffset,
         input: [],
         donePermutations: []
      };
   };

   subTask.unloadLevel = function(callback) {
      $("#destroyVault").off("click");
      $("#newVault").off("click");

      $("#keysDiv").stop(1, 1).removeClass("destroyProcess");
      $("#hatchet").stop(1, 1).removeClass("destroyProcess").hide();
      $("#destroyVault").stop(1, 1);
      $("#newVault").stop(1, 1);  
//      $(".destroyProcess").stop(1, 1);
      removeKeyboard();
      callback();
   };

   function initInstance() {
      var s = "" + subTask.taskParams.randomSeed;
      var instanceIndex = (parseInt(s.substring(0,5)) + instanceOffset) % data[level].instances.length;
      widths = data[level].instances[instanceIndex].widths;
      heights = data[level].instances[instanceIndex].heights;
      measureArray = getMeasure(heights, widths);
      permutations = getAllGoodPermutations(heights, widths, measureArray);
      permutations.sort();

      totalWidth = 0;
      for(var iDigit = 0; iDigit < widths.length; iDigit++) {
         totalWidth += widths[iDigit];
      }

      // Center grid has a column separating every pair of digits.
      centerGridCols = totalWidth + widths.length + 1;

      // Grids have an extra row for top and another for bottom if needed.
      gridRows = rows + 2;
   }

   function initHandlers() {
      $("#destroyVault").off("click");
      $("#destroyVault").on("click", clickDestroy);
      $("#newVault").on("click", clickNew);
   }

   function initPaper() {
      // Paper.
      paper = subTask.raphaelFactory.create("anim", "anim", paperWidth, paperHeight);
      $("#mainDiv").css({
         width: paperWidth,
         height: paperHeight
      });

      drawEmitter();
      drawCenterGrid();
      drawRightGrid();

      refreshCenterGrid();
      refreshRightGrid();
      
      // Keyboard.
      initKeys();

      refreshUserPassword();
   }

   function drawEmitter() {
      var params = paperParams.emitter;
      paper.image(params.imageName, params.leftPad, params.topPad, params.width, params.height);
   }

   function drawCenterGrid() {
      centerGrid = Beav.Matrix.init(gridRows, centerGridCols, function(row, col) {
         var xPos = col * paperParams.grid.cellWidth + paperParams.centerGridOffset.x;
         var yPos = row * paperParams.grid.cellHeight + paperParams.centerGridOffset.y;
         return paper.rect(xPos, yPos, paperParams.grid.cellWidth, paperParams.grid.cellHeight).attr(paperParams.grid.emptyAttr);
      });
   }

   function drawRightGrid() {
      rightGrid = Beav.Matrix.init(gridRows, totalWidth, function(row, col) {
         var xPos = col * paperParams.grid.cellWidth + paperParams.rightGridOffset.x;
         var yPos = row * paperParams.grid.cellHeight + paperParams.rightGridOffset.y;
         if ((row == 0) || (row == gridRows - 1)) {
            return paper.rect(0,0,0,0);
         }
         return paper.rect(xPos, yPos, paperParams.grid.cellWidth, paperParams.grid.cellHeight).attr(paperParams.grid.emptyAttr);
      });
      paper.text(paperParams.rightGridOffset.x + (totalWidth * paperParams.grid.cellWidth / 2), 15,
         "Épaisseur totale de métal\nsur chaque rangée").attr({"font-size": "14px", "font-weight": "bold"});
      rightGridLabels = [];
      for (var row = 1; row < gridRows - 1; row++) {
         var xPos = (totalWidth + 0.5) * paperParams.grid.cellWidth + paperParams.rightGridOffset.x;
         var yPos = (row + 0.5) * paperParams.grid.cellHeight + paperParams.rightGridOffset.y;
         rightGridLabels[row] = paper.text(xPos, yPos, "").attr({"font-size": "14px", "font-weight": "bold"});
      }
   }

   function refreshCenterGrid() {
      for(var row = 0; row < gridRows; row++) {
         for(var col = 0; col < centerGridCols; col++) {
            centerGrid[row][col].attr(paperParams.grid.invisibleAttr);
         }
      }

      // Fill top and bottom rows.
      var currentCol = 1;
      for(var iWidth = 0; iWidth < widths.length; iWidth++) {
         var width = widths[iWidth];
         for(var index = 0; index < width; index++) {
            centerGrid[0][index + currentCol].attr(paperParams.grid.fullAttr);

            if(data[level].useBottom) {
               centerGrid[gridRows - 1][index + currentCol].attr(paperParams.grid.fullAttr);
            }
         }
         currentCol += width + 1;
      }
   }

   function revealCenterGrid() {
      var displayHeights = heights;

      // Show a permutation the user hasn't guessed yet.
      if(data[level].mustTryAll) {
         for(var iPerm = 0; iPerm < permutations.length; iPerm++) {
            if(!isInArrayEq(answer.donePermutations, permutations[iPerm])) {
               displayHeights = permutations[iPerm];
               break;
            }
         }
      }

      var row;
      var col;
      for(row = 1; row <= rows; row++) {
         for(col = 0; col < centerGridCols; col++) {
            centerGrid[row][col].attr(paperParams.grid.emptyAttr);
         }
      }

      var currentCol = 1;
      for(var iWidth = 0; iWidth < widths.length; iWidth++) {
         var width = widths[iWidth];
         var height = displayHeights[iWidth];

         for(row = 0; row < rows; row++) {
            if(!data[level].useBottom && row >= height) {
               break;
            }
            if(data[level].useBottom && row >= height && row < height + bottomRowGap) {
               continue;
            }
            for(col = 0; col < width; col++) {
               centerGrid[row + 1][col + currentCol].attr(paperParams.grid.fullAttr);
            }
         }

         var textX = paperParams.centerGridOffset.x + (currentCol + width / 2) * paperParams.grid.cellWidth;
         var textY = paperParams.centerGridOffset.y + (gridRows / 2)* paperParams.grid.cellHeight;
         paper.text(textX, textY, height).attr(paperParams.grid.textAttr);

         currentCol += width + 1;
      }
   }

   function refreshRightGrid() {
      var col;
      for(col = 0; col < totalWidth; col++) {
         rightGrid[0][col].attr(paperParams.grid.measureAttr);

         if(data[level].useBottom) {
            rightGrid[gridRows - 1][col].attr(paperParams.grid.measureAttr);
         }
         else {
            rightGrid[gridRows - 1][col].attr(paperParams.grid.invisibleAttr);
         }
      }

      for(var row = 1; row < gridRows - 1; row++) {
         var measure = measureArray[row - 1];
         for(col = 0; col < totalWidth; col++) {
            if(col < totalWidth - measure) {
               rightGrid[row][col].attr(paperParams.grid.emptyAttr);
            }
            else {
               rightGrid[row][col].attr(paperParams.grid.measureAttr);
            }
         }
         var cx = (totalWidth + 0.5) * paperParams.grid.cellWidth + paperParams.rightGridOffset.x;
         rightGridLabels[row].attr({x: cx, text: measure});
      }
   }

   function getMeasure(heights, widths) {
      var result = [];
      for(var row = 0; row < rows; row++) {
         result.push(getRowMeasure(row, heights, widths));
      }
      return result;
   }

   function getRowMeasure(row, heights, widths) {
      var result = 0;
      for(var index = 0; index < heights.length; index++) {
         var height = heights[index];
         var width = widths[index];

         if(row < height) {
            result += width;
         }
         else if(data[level].useBottom && row >= height + bottomRowGap) {
            result += width;
         }
      }
      return result;
   }

   function initKeys() {
      $("#keysDiv").css({
         left: paperParams.centerGridOffset.x,
         top: paperParams.centerGridOffset.y + paperParams.grid.cellHeight - 1,
         width: centerGridCols * paperParams.grid.cellWidth,
         height: rows * paperParams.grid.cellHeight
      });

      createKeyboard();
   }

   function clickDestroy() {
      showFeedback(null);

      // Destroying must change the answer, otherwise the student would go to another
      // level and come back, and the instance wouldn't change.
      answer.instanceOffset++;
      instanceOffset++;
      answer.input = [];

      revealCenterGrid();
      
      // donePermutations must be emptied only after revealing the grid.
      // Revealing the grid relies on it to choose a password that the user hasn't tried.
      answer.donePermutations = [];

      var duration = 1500;
      $("#keysDiv").addClass('destroyProcess').delay(duration).fadeOut(0);
      $("#hatchet").show().addClass('destroyProcess').delay(duration).fadeOut(0);
      $("#destroyVault").unbind('click').prop("disabled", true).delay(duration).fadeOut(1);
      $("#newVault").delay(duration).fadeIn(1);
   }

   function clickNew() {
      $("#keysDiv").removeClass('destroyProcess');
      $("#hatchet").removeClass('destroyProcess');
      subTask.raphaelFactory.destroy("anim");
      subTask.unloadLevel(function() {
         initInstance();
         subTask.resetDisplay();
      });
   }

   function createKeyboard() {
      keyboard = new Keyboard(handleKey);

      var keys = [[0, 1, 2, 3], [4, 5, 6, 7], [keyboardTryCode, "backspace"]];
      var rows = [];
      for(var iRow = 0; iRow < keys.length; iRow++) {
         var row = [];
         for(var iCol = 0; iCol < keys[iRow].length; iCol++) {
            var key = keys[iRow][iCol];
            var keyCode;
            var buttonText;
            if(key === "backspace") {
               keyCode = Keyboard.BACKSPACE;
               buttonText = taskStrings.backspace;
            }
            else if(key === keyboardTryCode) {
               keyCode = keyboardTryCode;
               buttonText = taskStrings.openVault;
            }
            else {
               keyCode = String(key).charCodeAt(0);
               buttonText = key;
            }
            row.push({keyCode: keyCode, buttonText: buttonText});
         }
         rows.push(row);
      }

      keyboard.addMap($("#keyboard"), rows);
   }
   
   function handleKey(keyCode) {
      showFeedback(null);
      if(keyCode === Keyboard.BACKSPACE) {
         if(answer.input.length > 0) {
            answer.input.pop();
         }
      }
      else if(keyCode === keyboardTryCode) {
         clickTry();
      }
      else {
         if(answer.input.length < passwordLength) {
            answer.input.push(String.fromCharCode(keyCode));
         }
      }
      refreshUserPassword();
   }

   function clickTry() {
      updateUserPermutations();

      var resultAndMessage = getResultAndMessage();
      if(resultAndMessage.successRate === 1) {
         platform.validate("done");
      }
      else {
         displayHelper.validate("stay");
      }
   }

   function updateUserPermutations() {
      if(!data[level].mustTryAll) {
         return;
      }

      var userPassword = getUserPassword();

      // Ignore wrong passwords.
      if(!isInArrayEq(permutations, userPassword)) {
         return;
      }

      // Ignore tried permutations.
      if(isInArrayEq(answer.donePermutations, userPassword)) {
         return;
      }

      // Add permutation.
      answer.donePermutations.push(userPassword);
      answer.donePermutations.sort();
   }

   function refreshUserPassword() {
      var password = answer.input.join("");
      while(password.length < passwordLength) {
         password += "_";
      }
      $("#userPassword").text(password);
   }

   function showFeedback(string) {
      if(string === null || string === undefined || string === "") {
         string = "&nbsp;";
      }
      $("#feedback").html(string);
   }

   function removeKeyboard() {
      if(!keyboard) {
         return;
      }
      keyboard.remove();
   }

   function getUserPassword() {
      return $.map(answer.input, function(value) {
         return parseInt(value);
      });
   }

   function getAllGoodPermutations(heights, widths, measureArray) {
      var permutations = getAllPermutations(heights);
      var result = [];
      for(var iPerm = 0; iPerm < permutations.length; iPerm++) {
         var perm = permutations[iPerm];
         var permMeasureArray = getMeasure(perm, widths);
         if(Beav.Object.eq(permMeasureArray, measureArray)) {
            result.push(perm);
         }
      }
      return result;
   }

   function getAllPermutations(array) {
      if(array.length === 0) {
         return [[]];
      }
      var result = [];
      for(var index = 0; index < array.length; index++) {
         var prefix = [array[index]];
         var rest = array.slice();
         rest.splice(index, 1);
         var perms = getAllPermutations(rest);
         for(var iPerm = 0; iPerm < perms.length; iPerm++) {
            var perm = prefix.concat(perms[iPerm]);
            if(!isInArrayEq(result, perm)) {
               result.push(perm);
            }
         }
      }
      return result;
   }

   function isInArrayEq(array, element) {
      for(var index = 0; index < array.length; index++) {
         if(Beav.Object.eq(array[index], element)) {
            return true;
         }
      }
      return false;
   }

   function generateInstances(widths) {
      function measureToString(measureArray) {
         return measureArray.join(",");
      }

      function stringToMeasure(measureString) {
         return $.map(measureString.split(","), function(value) {
            return parseInt(value);
         });
      }

      var measureToInstances = {};
      var password = [];

      function verifyPassword() {
         // Make sure the digits are unique, and in medium/hard there should be
         // exactly one difference of 3 in all pairs.
         var numDiff = 0;
         for(var i = 0; i < password.length; i++) {
            for(var j = i + 1; j < password.length; j++) {
               if(password[i] === password[j]) {
                  return false;
               }
               if(Math.abs(password[i] - password[j]) === bottomRowGap)  {
                  numDiff++;
               }
            }
         }
         if(level !== "easy" && numDiff !== 1) {
            return false;
         }
         return true;
      }

      function addPassword() {
         if(!verifyPassword()) {
            return;
         }

         var measure = getMeasure(password, widths);
         var key = measureToString(measure);
         if(!measureToInstances[key]) {
            measureToInstances[key] = [];
         }
         measureToInstances[key].push(password.slice());
      }


      function recurse() {
         if(password.length === passwordLength) {
            addPassword();
            return;
         }
         for(var digit = 0; digit <= 7; digit++) {
            password.push(digit);
            recurse();
            password.pop();
         }
      }

      recurse();

      var allGoodInstances = [];

      for(var measureStr in measureToInstances) {
         var instances = measureToInstances[measureStr];

         if(data[level].mustTryAll && instances.length === 1) {
            continue;
         }

         var goodPermutations = getAllGoodPermutations(instances[0], widths, stringToMeasure(measureStr));
         goodPermutations.sort();
         instances.sort();
         if(Beav.Object.eq(goodPermutations, instances)) {
            allGoodInstances.push(instances[0]);
         }
         else {
            // Solutions are not permutations of one another.
         }
      }

      console.log("printing...");
      for(var index = 0; index < allGoodInstances.length; index++) {
         console.log("{widths: [" + widths + "], heights: [" + allGoodInstances[index] + "]},");
      }

      console.log("done");
   }


   function getResultAndMessage() {
      if(answer.input.length !== passwordLength) {
         return {
            successRate: 0,
            message: taskStrings.error
         };
      }

      var userPassword = getUserPassword();

      if(data[level].mustTryAll) {
         if(Beav.Object.eq(permutations, answer.donePermutations)) {
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

      else {
         if(Beav.Object.eq(measureArray, getMeasure(userPassword, widths))) {
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
   }

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
