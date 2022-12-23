function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         freeBucketNames: ["a", "b", "c"],
         constrainedBucketNames: ["d"],
         blackMarbleBucketsCount: 1 // Must be 1 or 2
      },
      medium: {
         freeBucketNames: ["a", "b", "c"],
         constrainedBucketNames: ["d", "e", "f"],
         blackMarbleBucketsCount: 2 // Must be 1 or 2
      },
      hard: {
         freeBucketNames: ["a", "b", "c", "d"],
         constrainedBucketNames: ["e", "f", "g"],
         blackMarbleBucketsCount: 2 // Must be 1 or 2
      }
   };

   var maxChars = 10;
   var maxDigit = 1;
   var yellowMaxBrute = 5;
   var blackMaxBrute = 1;
   var maxBucketContent = 10;
   var operators = {
      plus: "+",
      minus: "-"
   };

   var freeBucketNames;
   var constrainedBucketNames;
   var bucketIndexToName;
   var bucketNameToIndex;
   var totalBuckets;
   var totalFreeBuckets;
   var totalConstraints;
   var blackMarbleBucketsCount;
   var constraintFuncs;
   var currentConstraintIndex;
   
   var buckets;
   var virtualKeyboard;

   var bucketParams = {
      width: 90,
      height: 100,
      xPad: 2,
      yPad: 2,
      rectAttr: {
         "stroke-width": 1,
         r: 10
      },
      marbleAttr: {
         r: 12
      },
      yellowAttr: {
         fill: "yellow"
      },
      blackAttr: {
         fill: "black"
      },
      crossLineAttr: {
         stroke: "black",
         "stroke-width": 3
      }
   };

   subTask.loadLevel = function(curLevel) {
      level = curLevel;
      displayHelper.avatarType = "laptop";
      displayHelper.hideValidateButton = true;
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
      freeBucketNames = data[level].freeBucketNames;
      constrainedBucketNames = data[level].constrainedBucketNames;
      blackMarbleBucketsCount = data[level].blackMarbleBucketsCount;
      bucketIndexToName = freeBucketNames.concat(constrainedBucketNames);
      totalBuckets = bucketIndexToName.length;
      totalConstraints = constrainedBucketNames.length;
      totalFreeBuckets = freeBucketNames.length;
      bucketNameToIndex = {};
      for (var iBucket = 0; iBucket < totalBuckets; iBucket++) {
         bucketNameToIndex[bucketIndexToName[iBucket]] = iBucket;
      }
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
   };

   subTask.resetDisplay = function () {
      showFeedback(null);
      initHTML();
      initButtons();
      initPapers();
      showKeyboard(0);
      if(answer.alicePlays) {
         alicePlay(false);
      }
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      // The constraints are the strings the user inputs.
      // alicePlays is whether to show the corresponding results immediately when loading.
      if (level == "easy") {
         return {
            constraints: ["a+1"],
            alicePlays: true
         }
      }
      if (level == "medium") {
         return {
            constraints: ["a", "b", "c"],
            alicePlays: true
         }
      }
      if (level == "hard") {
         return {
            constraints: ["a", "b", "c"],
            alicePlays: true
         }
      }
      return {
         constraints: Beav.Array.make(constrainedBucketNames.length, ""),
         alicePlays: false
      };
   };

   subTask.unloadLevel = function(callback) {
      callback();
   };

   function initButtons() {
      $("#execute").unbind("click");
      $("#execute").click(clickExecute);
   }

   function initHTML() {
      // Buckets table.
      var yellowRowHTML = "<td class=\"rowDescription\">" + taskStrings.yellowRow + "</td>";
      var totalRowHTML = "<td class=\"rowDescription\">" + taskStrings.totalRow + "</td>";
      var bucketPapersHTML = "<td></td>";
      var bucketNamesHTML = "<td></td>";
      for (var iBucket = 0; iBucket < totalBuckets; iBucket++) {
         bucketPapersHTML += "<td class=\"bucket\"><div id=\"paper" + iBucket + "\"></div></td>";
         bucketNamesHTML += "<td class=\"bucketName\">" + bucketIndexToName[iBucket] + "</td>";
         yellowRowHTML += "<td class=\"yellowNumber\" id=\"yellowNumber" + iBucket + "\"></td>";
         totalRowHTML += "<td class=\"totalNumber\" id=\"totalNumber" + iBucket + "\"></td>";
      }
      $("#bucketPapers").html(bucketPapersHTML);
      $("#bucketNames").html(bucketNamesHTML);
      $("#yellowRow").html(yellowRowHTML);
      $("#totalRow").html(totalRowHTML);

      // Constraints table.
      var constraintHTML = "<tr><td></td><td id=\"resultText\" class=\"resultDescription\" colspan=\"2\">" + taskStrings.resultText + "</td></tr>";
      var iConstraint;
      for (iConstraint = 0; iConstraint < totalConstraints; iConstraint++) {
         constraintHTML += "<tr>";
         constraintHTML += "<td class=\"constraintContainer\" id=\"constraintContainer" + iConstraint + "\">" + taskStrings.constraintText + "<span id=\"constraintPrefix" + iConstraint + "\" class=\"constraintPrefix\">" + constrainedBucketNames[iConstraint] + " = </span> <div id=\"constraint" + iConstraint + "\" class=\"constraint\"></div></td>";
         constraintHTML += "<td class=\"keyboardContainer\" id=\"keyboardContainer" + iConstraint + "\"></td>";
         constraintHTML += "<td class=\"result resultText\" id=\"result" + iConstraint + "Text\">Avant :<br>Après :</td>";
         constraintHTML += "<td class=\"result resultNumber\" id=\"result" + iConstraint + "Number\">3 = 3<br>3 = 3</td>";
         constraintHTML += "</tr>";
      }
      $("#constraintTable").html(constraintHTML);

      // Click events.
      for (iConstraint = 0; iConstraint < totalConstraints; iConstraint++) {
         $("#constraintContainer" + iConstraint).unbind("click");
         $("#constraintContainer" + iConstraint).click(iConstraint, clickConstraint);
      }

      // Fill answer.
      for (iConstraint = 0; iConstraint < totalConstraints; iConstraint++) {
         $("#constraint" + iConstraint).text(answer.constraints[iConstraint]);
      }
   }

   function clickConstraint(event) {
      var constraintIndex = event.data;
      showKeyboard(constraintIndex);
   }

   function initPapers() {
      buckets = {};
      for (var iBucket = 0; iBucket < totalBuckets; iBucket++) {
         buckets[iBucket] = new Bucket(iBucket);
      }
   }

   function Bucket(bucketIndex) {
      this.paperID = "paper" + bucketIndex;
      this.paper = subTask.raphaelFactory.create(this.paperID, this.paperID, bucketParams.width, bucketParams.height);

      // Main rect.
      this.paper.rect(
         bucketParams.xPad,
         bucketParams.yPad,
         bucketParams.width - 2 * bucketParams.xPad,
         bucketParams.height - 2 * bucketParams.yPad
      ).attr(bucketParams.rectAttr);

      // Cover rect top.
      this.paper.rect(0, 0, bucketParams.width, bucketParams.rectAttr.r).attr({
         fill: "white",
         stroke: "white"
      });

      this.setMarbles = function (yellow, black) {
         if (this.marbles) {
            for (var iMarble in this.marbles) {
               this.marbles[iMarble].remove();
            }
         }
         this.marbles = [];
         var positions = [];
         var total = Math.max(yellow, yellow + black);
         var marbleRadius = bucketParams.marbleAttr.r;
         var bottomRowY = bucketParams.height - marbleRadius - bucketParams.yPad;
         var secondBottomRowY = bottomRowY - marbleRadius * 2;
         var secondBottomRowYIn = bottomRowY - marbleRadius * 1.8;
         var centerX = bucketParams.width / 2;
         if (total === 0) {
            return;
         }
         else if (total == 1) {
            positions.push([centerX, bottomRowY]);
         }
         else if (total == 2) {
            positions.push([centerX - marbleRadius, bottomRowY]);
            positions.push([centerX + marbleRadius, bottomRowY]);
         }
         else if (total == 3) {
            positions.push([centerX - marbleRadius, bottomRowY]);
            positions.push([centerX + marbleRadius, bottomRowY]);
            positions.push([centerX, secondBottomRowYIn]);
         }
         else if (total == 4) {
            positions.push([centerX - marbleRadius, bottomRowY]);
            positions.push([centerX + marbleRadius, bottomRowY]);
            positions.push([centerX - marbleRadius, secondBottomRowY]);
            positions.push([centerX + marbleRadius, secondBottomRowY]);
         }
         else if (total == 5) {
            positions.push([centerX - marbleRadius * 2, bottomRowY]);
            positions.push([centerX, bottomRowY]);
            positions.push([centerX + marbleRadius * 2, bottomRowY]);
            positions.push([centerX - marbleRadius, secondBottomRowYIn]);
            positions.push([centerX + marbleRadius, secondBottomRowYIn]);
         }
         else if (total == 6) {
            positions.push([centerX - marbleRadius * 2, bottomRowY]);
            positions.push([centerX, bottomRowY]);
            positions.push([centerX + marbleRadius * 2, bottomRowY]);
            positions.push([centerX - marbleRadius, secondBottomRowYIn]);
            positions.push([centerX + marbleRadius, secondBottomRowYIn]);
            positions.push([centerX, secondBottomRowYIn - 1.8 * marbleRadius]);
         }
         else if (total <= maxBucketContent) {
            var rowSize = 3;
            var currentX = centerX - marbleRadius * 2;
            var currentY = bottomRowY;
            var currentRowCount = 0;
            for (var iPos = 0; iPos < total; iPos++) {
               positions.push([currentX, currentY]);
               currentX += marbleRadius * 2;
               currentRowCount++;
               if (currentRowCount == rowSize) {
                  currentRowCount = 0;
                  currentX = centerX - marbleRadius * 2;
                  currentY -= marbleRadius * 2;
               }
            }
         }
         else {
            return;
         }
         for (var marbleIndex = 0; marbleIndex < total; marbleIndex++) {
            this.marbles.push(this.paper.circle(positions[marbleIndex][0], positions[marbleIndex][1]).attr(bucketParams.marbleAttr).attr(bucketParams.yellowAttr));
         }
         // If the number of black marbles is negative, it means we cross out some yellow ones.
         for (var blackMarbleIndex = 0; blackMarbleIndex < Math.abs(black); blackMarbleIndex++) {
            if(black > 0) {
               this.marbles[this.marbles.length - blackMarbleIndex - 1].attr(bucketParams.blackAttr);
            }
            else {
               var position = positions[this.marbles.length - blackMarbleIndex - 1];
               this.marbles.push(this.drawCross(position[0], position[1]));
            }
         }
      };

      this.drawCross = function(centerX, centerY) {
         this.paper.setStart();
         this.paper.path([
            "M",
            centerX - bucketParams.marbleAttr.r,
            centerY - bucketParams.marbleAttr.r,
            "L",
            centerX + bucketParams.marbleAttr.r,
            centerY + bucketParams.marbleAttr.r,
         ]).attr(bucketParams.crossLineAttr);
         this.paper.path([
            "M",
            centerX + bucketParams.marbleAttr.r,
            centerY - bucketParams.marbleAttr.r,
            "L",
            centerX - bucketParams.marbleAttr.r,
            centerY + bucketParams.marbleAttr.r,
         ]).attr(bucketParams.crossLineAttr);
         return this.paper.setFinish();
      };
   }

   function showKeyboard(constraintIndex) {
      showFeedback(null);
      $(".result").hide();
      $("#resultText").html("&nbsp;");
      $(".keyboardContainer").html("");
      constructKeyboard(constraintIndex);
      $(".keyboardContainer").show();
      $(".constraint").removeClass("containerSelected");
      $("#constraint" + constraintIndex).addClass("containerSelected");
   }

   function constructKeyboard(constraintIndex) {
      currentConstraintIndex = constraintIndex;
      if (virtualKeyboard) {
         virtualKeyboard.remove();
      }
      virtualKeyboard = new Keyboard(afterPressCallback);
      var inputElement = $("#constraint" + constraintIndex);
      virtualKeyboard.registerInputBox(inputElement, maxChars);
      var keysElement = $("#keyboardContainer" + constraintIndex);
      var keyRow1 = [];
      for (var iBucket = 0; iBucket < totalFreeBuckets; iBucket++) {
         keyRow1.push({
            keyCode: freeBucketNames[iBucket],
            buttonText: freeBucketNames[iBucket]
         });
      }
      keyRow1.push({
         keyCode: Keyboard.BACKSPACE,
         buttonText: taskStrings.backspace
      });
      var keyRow2 = [];
      keyRow2.push({
         keyCode: "-",
         buttonText: "-"
      });
      keyRow2.push({
         keyCode: "+",
         buttonText: "+"
      });
      for (var digit = 1; digit <= maxDigit; digit++) {
         keyRow2.push({
            keyCode: digit.toString(),
            buttonText: digit
         });
      }
      virtualKeyboard.addMap(keysElement, [keyRow1, keyRow2], true);
   }

   function afterPressCallback() {
      showFeedback(null);
      var element = $("#constraint" + currentConstraintIndex);
      var text = element.text();
      // Disallow multiple occurrences of the same bucket.
      if(text.length > 0 && getCharType(text[text.length - 1]) == "bucket") {
         var bucketName = text[text.length - 1];
         for(var iChar = 0; iChar < text.length - 1; iChar++) {
            if(text[iChar] === bucketName) {
               text = text.substring(0, text.length - 1);
               showFeedback(taskStrings.multipleBuckets);
               break;
            }
         }
      }
      // Replace current digit/bucket/operator instead of repeating.
      if (text.length > 1) {
         var type1 = getCharType(text[text.length - 1]);
         var type2 = getCharType(text[text.length - 2]);
         if (type1 === type2 || (type1 !== "operator" && type2 !== "operator")) {
            text = text.substring(0, text.length - 2) + text[text.length - 1];
         }
      }
      element.text(text);
      answer.alicePlays = false;
      answer.constraints[currentConstraintIndex] = text;
   }

   function showResults(yellowValues, blackValues) {
      $(".result").show();
      $(".resultDescription").text(taskStrings.resultText);
      $(".constraint").removeClass("containerSelected");
      $(".keyboardContainer").hide();

      var totalValues = Beav.Array.init(totalBuckets, function(index) {
         return yellowValues[index] + blackValues[index];
      });

      var iBucket;

      for (iBucket = 0; iBucket < totalBuckets; iBucket++) {
         $("#yellowNumber" + iBucket).text(yellowValues[iBucket]);
         $("#totalNumber" + iBucket).text(totalValues[iBucket]);
      }
      for (var iConstraint = 0; iConstraint < totalConstraints; iConstraint++) {
         var resultHTML = "";
         var constraintFunc = constraintFuncs[iConstraint];
         var yellowLeft = yellowValues[iConstraint + totalFreeBuckets];
         var yellowRight = constraintFunc(yellowValues);
         var totalLeft = totalValues[iConstraint + totalFreeBuckets];
         var totalRight = constraintFunc(totalValues);
         resultHTML += yellowLeft;
         resultHTML += " = ";
         resultHTML += yellowRight;
         var tickUrl = $("#green_tick_img").attr("src");
         var crossUrl = $("#red_cross_img").attr("src");
         if (yellowLeft === yellowRight) {
            resultHTML += " <img src='" + tickUrl + "' class='ticks'>";
         }
         else {
            resultHTML += " <img src='" + crossUrl + "' class='crosses'>";
         }
         resultHTML += "<br>";
         resultHTML += totalLeft;
         resultHTML += " = ";
         resultHTML += totalRight;
         if (totalLeft === totalRight) {
            resultHTML += " <img src='" + tickUrl + "' class='ticks'>";
         }
         else {
            resultHTML += " <img src='" + crossUrl + "' class='crosses'>";
         }
         
         $("#result" + iConstraint + "Number").html(resultHTML);
      }
      for (iBucket = 0; iBucket < totalBuckets; iBucket++) {
         buckets[iBucket].setMarbles(yellowValues[iBucket], blackValues[iBucket]);
      }
   }

   function getCharType(char) {
      for (var iBucket = 0; iBucket < totalFreeBuckets; iBucket++) {
         if (freeBucketNames[iBucket] === char) {
            return "bucket";
         }
      }
      for (var operator in operators) {
         if (operators[operator] === char) {
            return "operator";
         }
      }
      var num = parseInt(char);
      if (num !== null && num !== undefined && 1 <= num && num <= maxDigit) {
         return "number";
      }
      return null;
   }

   function validateSyntax(constraintString) {
      /*
       * A string is valid if it contains between 1 and maxChars characters,
       * and is an alternating sequence of symobl/operator that doesn't end in operator.
       */
      if (!constraintString || constraintString.length === 0) {
         return {
            valid: false,
            message: taskStrings.empty
         };
      }
      if (constraintString.length > maxChars) {
         return {
            valid: false,
            message: taskStrings.tooLong
         };
      }
      if (getCharType(constraintString[constraintString.length - 1]) == "operator") {
         return {
            valid: false,
            message: taskStrings.endWithOperator
         };
      }
      
      var lastWasOperator = false;
      for (var iChar = 0; iChar < constraintString.length; iChar++) {
         var char = constraintString[iChar];
         var type = getCharType(char);
         if (type === null) {
            return {
               valid: false,
               message: taskStrings.syntaxError
            };
         }
         if (type === "operator") {
            if (lastWasOperator) {
               return {
                  valid: false,
                  message: taskStrings.syntaxError
               };
            }
            lastWasOperator = true;
         }
         else {
            if (!lastWasOperator && iChar > 0) {
               return {
                  valid: false,
                  message: taskStrings.syntaxError
               };
            }
            lastWasOperator = false;
         }
      }
      return {
         valid: true
      };
   }

   function validateAllConstraints() {
      for (var iConstraint = 0; iConstraint < totalConstraints; iConstraint++) {
         var constraint = answer.constraints[iConstraint];
         var result = validateSyntax(constraint);
         if (!result.valid) {
            return result;
         }
      }
      return {
         valid: true
      };
   }

   function constraintToFunction(constraint) {
      // Return a function that can compute the result of substituting a,b,c,.. into the given string.

      var coefficients = Beav.Array.make(totalFreeBuckets + 1, 0);
      var sign = 1;
      for (var iChar = 0; iChar < constraint.length; iChar++) {
         var char = constraint[iChar];
         var type = getCharType(char);
         if (type == "operator") {
            if (char == operators.plus) {
               sign = 1;
            }
            else {
               sign = -1;
            }
         }
         else if (type == "number") {
            coefficients[totalFreeBuckets] += sign * parseInt(char);
         }
         else {
            coefficients[bucketNameToIndex[char]] += sign;
         }
      }
      var resultFunc = function (values) {
         var result = coefficients[totalFreeBuckets];
         for (var iVar = 0; iVar < totalFreeBuckets; iVar++) {
            result += values[iVar] * coefficients[iVar];
         }
         return result;
      };
      return resultFunc;
   }

   function calculateAllFuncs() {
      constraintFuncs = {};
      for (var iConstraint = 0; iConstraint < totalConstraints; iConstraint++) {
         constraintFuncs[iConstraint] = constraintToFunction(answer.constraints[iConstraint]);
      }
   }

   /*
    * Brute force for Alice. Return an object with the following fields:
    * yellowValues: array with Alice's chosen yellow bucket contents. Non-negative integers.
    * blackValues: array with Alice's chosen black bucket contents. Negative is possible, but the total
    *              (yellow + black) is in the valid range: 0,...,maxBucketContent.
    * aliceWins (boolean): true iff Alice wins with these values.
    * withoutBlack (boolean): true iff Alice wins without black marbles, i.e. the constraints were impossible.
    */
   function aliceBrute() {
      calculateAllFuncs();

      var iConstraint;
      var yellowValues = Beav.Array.make(totalBuckets, 0);
      var blackValues = Beav.Array.make(totalBuckets, 0);
      var arbitraryValidYellowValues = Beav.Array.make(totalBuckets, 0);

      // Check whether the current yellowValues of the free buckets
      // induce valid values for the constrained buckets.
      function checkYellowFreeValues() {
         for (iConstraint = 0; iConstraint < totalConstraints; iConstraint++) {
            var value = constraintFuncs[iConstraint](yellowValues);
            if (value < 0 || value > maxBucketContent) {
               return false;
            }
         }
         return true;
      }

      // Set the constrained buckets in yellowValues to the values
      // induced by the yellow values of the free buckets.
      function setYellowConstrainedValues() {
         for (iConstraint = 0; iConstraint < totalConstraints; iConstraint++) {
            var value = constraintFuncs[iConstraint](yellowValues);
            yellowValues[totalFreeBuckets + iConstraint] = value;
         }
         arbitraryValidYellowValues = $.extend([], yellowValues);
      }

      /*
       * Recursive function to go over all possible yellowValues of free buckets.
       * When a valid array of yellowValues is found, a function is called to check 
       * whether there is a combination of black marbles that can lead to Alice's win.
       * Return:
       * - 1 if Alice wins by including black marbles.
       * - 0 if Alice loses.
       * - (-1) if Alice wins because the constraints couldn't be satisfied with yellow marbles.
       */

      function recurseYellow(index) {
         if (index === totalFreeBuckets) {
            if(!checkYellowFreeValues()) {
               return -1;
            }
            setYellowConstrainedValues();
            return tryBlack();
         }

         // If none of the recursive calls indicate the constraints are possible,
         // we will return -1.
         var areConstraintsPossible = false;

         // Try in the following order: 2, 3, ...., yellowMaxBrute, 0, 1.
         // This is so 0s are less common.
         for (var yellowMarbles = 2; yellowMarbles <= yellowMaxBrute + 2; yellowMarbles++) {
            yellowValues[index] = yellowMarbles % (yellowMaxBrute + 1);
            var currentResult = recurseYellow(index + 1);
            if (currentResult === 1) {
               return currentResult;
            }
            if(currentResult !== -1) {
               areConstraintsPossible = true;
            }
         }
         if(!areConstraintsPossible) {
            return -1;
         }
         return 0;
      }

      // Check whether the current yellowValues and blackValues combined
      // satisfy all existing constraints.
      function checkTotalValues() {
         var allValues = Beav.Array.init(totalBuckets, function(index) {
            return yellowValues[index] + blackValues[index];
         });
         for (iConstraint = 0; iConstraint < totalConstraints; iConstraint++) {
            var newConstraintValue = constraintFuncs[iConstraint](allValues);
            var existingValue = allValues[totalFreeBuckets + iConstraint];
            if(newConstraintValue !== existingValue) {
               return false;
            }
         }
         return true;
      }

      // Called when there is a valid yellowValues array.
      // Tries to find a valid blackValues array for Alice to win.
      function tryBlack() {
         var iBucket;
         if(blackMarbleBucketsCount == 1) {
            // We only check free buckets. because if we only change 
            // constrained values, those constraints will fail.
            for(iBucket = 0; iBucket < totalFreeBuckets; iBucket++) {
               // Black marbles is at most blackMaxBrute.
               // When negative, the black marbles can only be -1, and only if yellow marbles exist.
               // Positive values are tested first.
               var negativeLimit = 0;
               if(yellowValues[iBucket] > 0) {
                  negativeLimit = -1;
               }
               for(var blackMarbles = blackMaxBrute; blackMarbles >= negativeLimit; blackMarbles--) {
                  if(blackMarbles === 0) {
                     continue;
                  }
                  blackValues[iBucket] = blackMarbles;
                  if(checkTotalValues()) {
                     return 1;
                  }
               }
               // This bucket didn't work, we reset it before trying the next.
               blackValues[iBucket] = 0;
            }
         }
         else {
            // Check two buckets. The leftmost must be a free bucket, as before.
            for(iBucket = 0; iBucket < totalFreeBuckets; iBucket++) {
               for(var jBucket = iBucket + 1; jBucket < totalBuckets; jBucket++) {
                  var negativeLimit1 = 0;
                  if(yellowValues[iBucket] > 0) {
                     negativeLimit1 = -1;
                  }
                  for(var blackMarbles1 = blackMaxBrute; blackMarbles1 >= negativeLimit1; blackMarbles1--) {
                     if(blackMarbles1 === 0) {
                        continue;
                     }
                     blackValues[iBucket] = blackMarbles1;
                     var negativeLimit2 = 0;
                     if(yellowValues[jBucket] > 0) {
                        negativeLimit2 = -1;
                     }
                     for(var blackMarbles2 = blackMaxBrute; blackMarbles2 >= - negativeLimit2; blackMarbles2--) {
                        // Note: blackMarbles2 can be 0.

                        blackValues[jBucket] = blackMarbles2;
                        if(checkTotalValues()) {
                           return 1;
                        }
                     }
                  }
                  blackValues[iBucket] = 0;
                  blackValues[jBucket] = 0;
               }
            }
         }
         return 0;
      }

      var recursionResult = recurseYellow(0);
      var aliceWins;
      var withoutBlack;
      if (recursionResult === -1) {
         aliceWins = true;
         withoutBlack = true;
      }
      else if(recursionResult === 0) {
         yellowValues = arbitraryValidYellowValues;
         blackValues[0] = 1;
         aliceWins = false;
         withoutBlack = false;
      }
      else {
         aliceWins = true;
         withoutBlack = false;
      }
      return {
         aliceWins: aliceWins,
         withoutBlack: withoutBlack,
         yellowValues: yellowValues,
         blackValues: blackValues
      };
   }

   function clickExecute() {
      answer.alicePlays = true;
      alicePlay(true);
   }

   function alicePlay(validate) {
      showFeedback(null);
      var resultAndMessage = getResultAndMessage();
      var aliceResult = resultAndMessage.aliceResult;
      if (!aliceResult) {
         if(validate) {
            displayHelper.validate("stay");
         }
         return;
      }
      showResults(aliceResult.yellowValues, aliceResult.blackValues);
      if(!validate) {
         return;
      }
      if (aliceResult.aliceWins) {
         platform.validate("done");
      }
      else {
         displayHelper.validate("stay");
      }
   }

   function showFeedback(string) {
      if(!string) {
         string = "";
      }
      $("#feedback").html(string);
   }

   function getResultAndMessage() {
      var syntaxValidation = validateAllConstraints();
      if(!syntaxValidation.valid) {
         return {
            successRate: 0,
            message: syntaxValidation.message,
            errorType: "syntax"
         };
      }
      var aliceResult = aliceBrute();
      if (aliceResult.aliceWins) {
         if (aliceResult.withoutBlack) {
            return {
               successRate: 0,
               message: taskStrings.aliceWinsWithoutBlack,
               aliceResult: aliceResult
            };
         }
         return {
            successRate: 0,
            message: taskStrings.aliceWinsWithBlack,
            aliceResult: aliceResult
         };
      }

      return {
         successRate: 1,
         message: taskStrings.success,
         aliceResult: aliceResult
      };
   }

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
