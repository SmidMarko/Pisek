function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
          bank: ["red_1", "red_2", "yellow_1"],
          slots: 2,
          revealed: [
            [
		[1],
		[1]
            ],
            [
		[0],
		[1]
            ],
            [
		[0],
		[0]
            ],
            [
		[1],
		[0]
            ]
         ],
         userMachine: {
            cellWidth: 40,
            cellHeight: 40,
            cellSpacing: 20
         },
         targetMachine: {
            cellWidth: 40,
            cellHeight: 40,
            cellSpacing: 20
         },
         target: [[1, 1], [1, 0], [0, 0], [0, 1]]
      },
      medium: {
          bank: ["red_1", "red_2", "yellow_1", "blue_1", "blue_2"],
          slots: 3,
          revealed: [
            [
		[    0,       null],
		[    1,       null]
            ],
            [
		[    1,       null],
		[    1,       null]
            ],
            [
		[    0,       null],
		[    0,       null]
	    ],
            [
		[    0,       null],
		[    0,       null]
            ],
         ],
         userMachine: {
            cellWidth: 40,
            cellHeight: 40,
            cellSpacing: 20
         },
         targetMachine: {
             cellWidth: 30,
             cellHeight: 40,
             cellSpacing: 20
         },
         target: [[1, 0], [0, 0], [1, 1], [1, 1]]
      },
      hard: {
          bank: [ "red_1",  "red_2", "yellow_1", "blue_1", "blue_2"],
          slots: 5,
          revealed: [
            [
               [   1,    1, null, null],
               [null, null,    1,    1]
            ],
            [
               [   1,    1, null, null],
               [null, null,    1,    1]
            ],
            [
               [   0,    0, null, null],
               [null, null,    0,    0]
            ],
            [
               [   0,    0, null, null],
               [null, null,    0,    0]
            ],
         ],
         userMachine: {
            cellWidth: 40,
            cellHeight: 40,
            cellSpacing: 20
         },
         targetMachine: {
            cellWidth: 25,
            cellHeight: 40,
            cellSpacing: 20
         },
         target: [[1, 1], [1, 0], [0, 0], [0, 0]]
      }
   };
    
   var inputs = [[0, 1], [1, 1], [1, 0], [0, 0]];
   var paper;
   var paperWidth;
   var paperHeight;

   var userMachines;
   var targetMachines;

   var userCellWidth;
   var userCellHeight;
   var userMachineSize;
   var targetMachineSize;
   var totalResultHeight;

   var userLever;
   var targetLever;
   
   var simulationUser;
   var simulationTarget;
   var dragAndDrop;

   var needValidationUser;
   var needValidationTarget;
   var isTargetMachineFinished;
   var isUserMachineFinished;
   var isTargetMachineRunning;
   var isUserMachineRunning;
   var hasUserMachineChanged;
   
   var highlighter;
   var animTime = 200;

   var paperParams = {
      xPad: 30,
      yPad: 20,
      machineXSpacing: 90
   };

   var machineParams = {
      border: {
         padding: 5,
         attr: {
            stroke: "#aaaaaa"
         }
      },
      digitHeights: [0.25, 0.75],
      lineExtension: 8,
      lineAttr: {
         "stroke-width": 1,
         stroke: "black"
      },
      arrowAttr: {
         stroke: "black",
         "stroke-width": 2,
         "arrow-end": "classic-midium-long"
      },
      smallOperator: 8,
      inputOutputPadding: 20,
      activeAttr: {
         opacity: 1
      },
      inactiveAttr: {
         opacity: 0.4
      },
      digitAttr: {
         "font-size": 16
      },
      digitHighlightRectAttr: {
         fill: "#ff4444",
         stroke: "#880000",
         width: 14,
         height: 20
      },
      userSlotAttr: {
         stroke: "black",
         fill: "white",
         "fill-opacity": 0.4
      },
      userBoxBackgroundAttr: {
         fill: "white"
      },
      targetBoxBackgroundAttr: {
         fill: "gray"
      },
      targetSlotAttr: {
         stroke: "#333333",
         "stroke-width": 2,
         fill: "none",
         "stroke-dasharray": "."
      },
      targetMaskBoxExtension: 2,
      targetMaskAttr: {
         fill: "gray",
         stroke: "gray",
         r: 5
      },
      targetMaskDeactivateAttr: {
         fill: "#cccccc",
         stroke: "#cccccc"
      }
   };

   var bankParams = {
      xSpacing: 20,
      bottomPadding: 80,
      bottomTextPadding: 60
   };

   var leverParams = {
      topPadding: 80,
      bottomPadding: 80,
      width: 70,
      height: 70,
      borderAttr: {
         stroke: "black",
         fill: "#eeeeee"
      },
      handleRectAttr: {
         fill: "gray",
         width: 16,
         height: 35
      },
      handleCircleAttr: {
         fill: "#550000",
         r: 18
      }
   };

   var resultParams = {
      ySpacing: 20,
      textAttr: {
         "font-size": 20
      }
   };

   subTask.loadLevel = function(curLevel) {
      level = curLevel;
      displayHelper.avatarType = "laptop";
      displayHelper.hideValidateButton = true;
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
   };

   subTask.resetDisplay = function() {
      initButtons();
      initPaper();
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      return Beav.Array.make(data[level].slots, null);
   };

   subTask.unloadLevel = function(callback) {
      killAllSimulations();
      if(dragAndDrop) {
         dragAndDrop.disable();
      }
      callback();
   };

   function initButtons() {
      needValidationUser = false;
      needValidationTarget = false;
      isUserMachineFinished = false;
      isUserMachineRunning = false;
      isTargetMachineFinished = false;
      isTargetMachineRunning = false;
      $("#execute").unbind("click");
      $("#execute").click(clickValidate);
   }

   function initPaper() {
      userCellWidth = data[level].userMachine.cellWidth;
      userCellHeight = data[level].userMachine.cellHeight;

      userMachineSize = {
         width: data[level].slots * userCellWidth + (data[level].slots - 1) * data[level].userMachine.cellSpacing + 2 * machineParams.border.padding,
         height: userCellHeight + 2 * machineParams.border.padding
      };
      targetMachineSize = {
         width: data[level].slots * data[level].targetMachine.cellWidth + (data[level].slots - 1) * data[level].targetMachine.cellSpacing + 2 * machineParams.border.padding,
         height: data[level].targetMachine.cellHeight + 2 * machineParams.border.padding
      };
      totalResultHeight = data[level].target.length * userMachineSize.height + (data[level].target.length - 1) * resultParams.ySpacing;
      
      paperWidth = userMachineSize.width + targetMachineSize.width + paperParams.machineXSpacing + 2 * paperParams.xPad;
      paperHeight = userCellHeight + bankParams.bottomPadding + leverParams.topPadding + leverParams.bottomPadding + totalResultHeight + 2 * paperParams.yPad;
   
      var extraWidth = 0;
      if (level == "medium") {
         extraWidth = 50;
      }
      paper = subTask.raphaelFactory.create("anim", "anim", paperWidth + extraWidth, paperHeight);
      
      initDragAndDrop();
      initResults();
      initLevers();
   }

   function initDragAndDrop() {
      dragAndDrop = DragAndDropSystem({
         paper: paper,
         actionIfDropped: actionIfDropped,
         drop: onDrop
      });

      // Bank.
      var bankWidth = data[level].bank.length * userCellWidth + (data[level].bank.length - 1) * bankParams.xSpacing;
      var bankLeftX = (paperWidth - paperParams.xPad - userMachineSize.width / 2) - bankWidth / 2 + userCellWidth / 2;
      var bankCenterY = paperParams.yPad + userCellHeight / 2;
      for(var iBank = 0; iBank < data[level].bank.length; iBank++) {
         var curBankX = bankLeftX + iBank * (userCellWidth + data[level].userMachine.cellSpacing);
         dragAndDrop.addContainer({
            ident : data[level].bank[iBank],
            cx: curBankX,
            cy: bankCenterY,
            widthPlace: userCellWidth,
            heightPlace: userCellHeight,
            type : 'source',
            sourceElemArray: [drawBox(data[level].bank[iBank])]
         });
      }

      paper.text(paperParams.xPad + targetMachineSize.width / 2, bankCenterY + bankParams.bottomTextPadding, taskStrings.targetMachine).attr(resultParams.textAttr);
      paper.text(paperWidth - paperParams.xPad - userMachineSize.width / 2, bankCenterY + bankParams.bottomTextPadding, taskStrings.userMachine).attr(resultParams.textAttr);

      // User machine.
      var machine = drawMachine(true, paperWidth - paperParams.xPad - userMachineSize.width, bankCenterY + bankParams.bottomPadding);
      dragAndDrop.addContainer({
         ident: "user",
         cx: paperParams.xPad + userMachineSize.width / 2,
         cy: bankCenterY + bankParams.bottomPadding,
         widthPlace: userCellWidth,
         heightPlace: userCellHeight,
         nbPlaces: data[level].slots,
         dropMode: "replace",
         places: Beav.Array.init(data[level].slots, function(index) {
            var position = machine.slotCenters[index];
            return [position.x, position.y];
         }),
         placeBackgroundArray: []
      });
      
      for(var iElement = 0; iElement < answer.length; iElement++) {
         var element = null;
         if(!answer[iElement]) {
            continue;
         }
         dragAndDrop.insertObject("user", iElement, {
            ident: answer[iElement],
            elements: [drawBox(answer[iElement])]
         });
      }

      // Target machine.
      drawMachine(false, paperParams.xPad, bankCenterY + bankParams.bottomPadding);
   }

   function drawBox(operator, centerX, centerY) {
      if(centerX === null || centerX === undefined) {
         centerX = 0;
         centerY = 0;
      }
      paper.setStart();
      var rect = paper.rect(
         centerX - userCellWidth / 2,
         centerY - userCellHeight / 2,
         userCellWidth,
         userCellHeight
      );

      var topY = centerY - data[level].userMachine.cellHeight / 2;
      var leftX = centerX - data[level].userMachine.cellWidth / 2;
      var rightX = centerX + data[level].userMachine.cellWidth / 2;

      var arrow1Y = topY + machineParams.digitHeights[0] * data[level].userMachine.cellHeight;
      var arrow2Y = topY + machineParams.digitHeights[1] * data[level].userMachine.cellHeight;

      var midX1 = centerX - machineParams.smallOperator / 2;
      var midX2 = centerX + machineParams.smallOperator / 2;

      var splitX = (leftX + midX1) / 2; 

      switch(operator) {
         case "yellow_1":
            rect.attr("fill", "yellow");
            paper.path(["M", leftX, arrow1Y, "L", rightX, arrow2Y]).attr(machineParams.arrowAttr);
            paper.path(["M", leftX, arrow2Y, "L", rightX, arrow1Y]).attr(machineParams.arrowAttr);
            break;
         case "red_1":
            rect.attr("fill", "red");
            paper.path(["M", leftX, arrow1Y, "L", midX1, arrow1Y]).attr(machineParams.arrowAttr);
            paper.path(["M", midX2, arrow1Y, "L", rightX, arrow1Y]).attr(machineParams.arrowAttr);
            paper.path(["M", leftX, arrow2Y, "L", rightX, arrow2Y]).attr(machineParams.arrowAttr);
            paper.rect(midX1, arrow1Y - machineParams.smallOperator / 2, machineParams.smallOperator, machineParams.smallOperator).attr({
               fill: "yellow"
            });
            break;
         case "red_2":
            rect.attr("fill", "red");
            paper.path(["M", leftX, arrow2Y, "L", midX1, arrow2Y]).attr(machineParams.arrowAttr);
            paper.path(["M", midX2, arrow2Y, "L", rightX, arrow2Y]).attr(machineParams.arrowAttr);
            paper.path(["M", leftX, arrow1Y, "L", rightX, arrow1Y]).attr(machineParams.arrowAttr);
            paper.rect(midX1, arrow2Y - machineParams.smallOperator / 2, machineParams.smallOperator, machineParams.smallOperator).attr({
               fill: "yellow"
            });
            break;
         case "blue_1":
            rect.attr("fill", "#aaaaff");
            paper.path(["M", leftX, arrow1Y, "L", midX1, arrow1Y]).attr(machineParams.arrowAttr);
            paper.path(["M", midX2, arrow1Y, "L", rightX, arrow1Y]).attr(machineParams.arrowAttr);
            paper.path(["M", leftX, arrow2Y, "L", rightX, arrow2Y]).attr(machineParams.arrowAttr);
            paper.path(["M", splitX, arrow2Y, "L", midX1, arrow1Y]).attr(machineParams.arrowAttr);
            paper.path(["M", centerX, arrow1Y - machineParams.smallOperator / 2, "L", midX1, arrow1Y + machineParams.smallOperator / 2, "h", machineParams.smallOperator, "Z"]).attr({
               fill: "#22aa33"
            });
            break;
         case "blue_2":
            rect.attr("fill", "#aaaaff");
            paper.path(["M", leftX, arrow2Y, "L", midX1, arrow2Y]).attr(machineParams.arrowAttr);
            paper.path(["M", midX2, arrow2Y, "L", rightX, arrow2Y]).attr(machineParams.arrowAttr);
            paper.path(["M", leftX, arrow1Y, "L", rightX, arrow1Y]).attr(machineParams.arrowAttr);
            paper.path(["M", splitX, arrow1Y, "L", midX1, arrow2Y]).attr(machineParams.arrowAttr);
            paper.path(["M", centerX, arrow2Y - machineParams.smallOperator / 2, "L", midX1, arrow2Y + machineParams.smallOperator / 2, "h", machineParams.smallOperator, "Z"]).attr({
               fill: "#22aa33"
            });
            break;
         case "green_1":
            rect.attr("fill", "#aaffaa");
            paper.path(["M", leftX, arrow1Y, "L", midX1, arrow1Y]).attr(machineParams.arrowAttr);
            paper.path(["M", midX2, arrow1Y, "L", rightX, arrow1Y]).attr(machineParams.arrowAttr);
            paper.path(["M", leftX, arrow2Y, "L", rightX, arrow2Y]).attr(machineParams.arrowAttr);
            paper.path(["M", splitX, arrow2Y, "L", midX1, arrow1Y]).attr(machineParams.arrowAttr);
            paper.circle(centerX, arrow1Y, machineParams.smallOperator / 2).attr({
               fill: "#eeeeee"
            });
            break;
         case "green_2":
            rect.attr("fill", "#aaffaa");
            paper.path(["M", leftX, arrow2Y, "L", midX1, arrow2Y]).attr(machineParams.arrowAttr);
            paper.path(["M", midX2, arrow2Y, "L", rightX, arrow2Y]).attr(machineParams.arrowAttr);
            paper.path(["M", leftX, arrow1Y, "L", rightX, arrow1Y]).attr(machineParams.arrowAttr);
            paper.path(["M", splitX, arrow1Y, "L", midX1, arrow2Y]).attr(machineParams.arrowAttr);
            paper.circle(centerX, arrow2Y, machineParams.smallOperator / 2).attr({
               fill: "#eeeeee"
            });
            break;
      }


      return paper.setFinish();
   }

   function drawMachine(isUser, leftX, topY) {
      var size = userMachineSize;
      var machineDataParams = data[level].userMachine;
      var slotAttr = machineParams.userSlotAttr;
      if(!isUser) {
         size = targetMachineSize;
         machineDataParams = data[level].targetMachine;
         slotAttr = machineParams.targetSlotAttr;
      }

      var bitIndex;

      var machine = {};
      // The machine opacitySet is used for active/inactive attributes.
      // The totalSet includes everything and is used to show/hide the machine.
      // The difference in their contents is the box backgrounds.
      machine.totalSet = paper.set();
      machine.opacitySet = paper.set();

      // Border.
      var border = paper.rect(leftX, topY, size.width, size.height).attr(machineParams.border.attr);
      machine.totalSet.push(border);
      machine.opacitySet.push(border);

      // Two horizontal lines.
      for(bitIndex = 0; bitIndex < inputs[0].length; bitIndex++) {
         var centerY = topY + machineParams.border.padding + machineDataParams.cellHeight * machineParams.digitHeights[bitIndex];
         var line = paper.path(["M", leftX - machineParams.lineExtension, centerY, "h", size.width + 2 * machineParams.lineExtension]).attr(machineParams.lineAttr);
         machine.totalSet.push(line);
         machine.opacitySet.push(line);
      }

      // Centers of the box slots.
      machine.slotCenters = Beav.Array.init(data[level].slots, function(index) {
         return {
            x: leftX + machineParams.border.padding + index * (machineDataParams.cellWidth + machineDataParams.cellSpacing) + machineDataParams.cellWidth / 2,
            y: topY + machineParams.border.padding + machineDataParams.cellHeight / 2
         };
      });

      // Top left of the box slots.
      machine.slotPositions = Beav.Array.init(data[level].slots, function(index) {
         return {
            x: leftX + machineParams.border.padding + index * (machineDataParams.cellWidth + machineDataParams.cellSpacing),
            y: topY + machineParams.border.padding
         };
      });

      var iSlot, position;

      // Digit positions, including input and output, which are outside the machine.
      machine.digitPositions = Beav.Matrix.init(data[level].slots + 1, data[level].target[0].length, function(slot, bitIndex) {
         var centerX, centerY;

         // Input digits.
         if(slot === 0) {
            centerX = leftX - machineParams.inputOutputPadding; 
         }
         // Output digits.
         else if(slot === data[level].slots) {
            centerX = leftX + size.width + machineParams.inputOutputPadding;
         }
         // All others.
         else {
            centerX = machine.slotPositions[slot - 1].x + machineDataParams.cellWidth + machineDataParams.cellSpacing / 2;
         }

         centerY = topY + size.height * machineParams.digitHeights[bitIndex];
         return {
            x: centerX,
            y: centerY
         };
      });

      // Draw mask for target machine.
      if(!isUser) {
         machine.mask = paper.set();
         for(iSlot = 0; iSlot < data[level].slots; iSlot++) {
            // Box cover.
            position = machine.slotPositions[iSlot];
            var rect = paper.rect(position.x - machineParams.targetMaskBoxExtension, topY, machineDataParams.cellWidth + 2 * machineParams.targetMaskBoxExtension, size.height).attr(machineParams.targetMaskAttr);
            machine.mask.push(rect);
            machine.totalSet.push(rect);
            // Digit cover, except for those that should be revealed according to data.
            if(iSlot < data[level].slots - 1) {
               for(bitIndex = 0; bitIndex < inputs[0].length; bitIndex++) {
                  if(data[level].revealed[0][bitIndex][iSlot] !== null) {
                     continue;
                  }
                  // The digit cover overlaps with the slot covers, otherwise the rounded corners are visible where they shouldn't be.
                  rect = paper.rect(position.x + machineDataParams.cellWidth / 2, topY + bitIndex * size.height / 2, machineDataParams.cellSpacing + machineDataParams.cellWidth, size.height / 2).attr(machineParams.targetMaskAttr);
                  machine.mask.push(rect);
                  machine.totalSet.push(rect);
               }
            }
         }
      }

      // Draw box slots.
      for(iSlot = 0; iSlot < data[level].slots; iSlot++) {
         position = machine.slotPositions[iSlot];
         var slot = paper.rect(position.x, position.y, machineDataParams.cellWidth, machineDataParams.cellHeight).attr(slotAttr);
         machine.totalSet.push(slot);
         machine.opacitySet.push(slot);
      }

      machine.show = function() {
         machine.totalSet.show();
         machine.isShown = true;
      };

      machine.hide = function() {
         machine.totalSet.hide();
         machine.isShown = false;
      };

      return machine;
   }

   function eraseDigit(machine, slot, bitIndex) {
      if(!machine.digitElements) {
         machine.digitElements = {};
         machine.digitValues = {};
      }
      if(!machine.digitElements[slot]) {
         machine.digitElements[slot] = {};
         machine.digitValues[slot] = {};
      }
      var text = machine.digitElements[slot][bitIndex];
      if(text) {
         machine.totalSet.exclude(text);
         text.remove();
         machine.digitElements[slot][bitIndex] = null;
         machine.digitValues[slot][bitIndex] = null;
      }
      removeDigitHighlight(machine, slot, bitIndex);
   }

   function drawDigit(machine, slot, bitIndex, bitValue) {
      eraseDigit(machine, slot, bitIndex);
      if(bitValue === null || bitValue === undefined) {
         bitValue = "?";
      }
      var position = machine.digitPositions[slot][bitIndex];
      var text = paper.text(position.x, position.y, bitValue).attr(machineParams.digitAttr);
      machine.digitElements[slot][bitIndex] = text;
      machine.totalSet.push(text);
      machine.digitValues[slot][bitIndex] = bitValue;
   }

   function fillMachine(machine, operators) {
      if(machine.slots) {
         for(var slotIndex = 0; slotIndex < data[level].slots; slotIndex++) {
            var slot = machine.slots[slotIndex];
            if(slot) {
               machine.totalSet.exclude(slot);
               machine.opacitySet.exclude(slot);
               slot.remove();
            }
         }
      }
      machine.slots = Beav.Array.init(data[level].slots, function(index) {
         var center = machine.slotCenters[index];
         var box = drawBox(operators[index], center.x, center.y);
         machine.totalSet.push(box);
         machine.opacitySet.push(box);
         return box;
      });
   }

   function fillMachineBackgrounds(machine, isUser, operators) {
      if(machine.boxBackgrounds) {
         for(slotIndex = 0; slotIndex < data[level].slots; slotIndex++) {
            var boxBackground = machine.boxBackgrounds[slotIndex];
            if(boxBackground) {
               machine.totalSet.exclude(boxBackground);
               boxBackground.remove();
            }
         }
      }

      var machineDataParams = data[level].userMachine;
      var boxBackgroundAttr = machineParams.userBoxBackgroundAttr;
      if(!isUser) {
         machineDataParams = data[level].targetMachine;
         boxBackgroundAttr = machineParams.targetBoxBackgroundAttr;
      }

      // Box backgrounds are not added to opacitySet.
      // This ensures the two horizontal lines are not visible through boxes. 
      machine.boxBackgrounds = Beav.Array.init(data[level].slots, function(index) {
         // If this slot is supposed to be empty, we want the two lines to be visible. Otherwise, draw rect.
         if(isUser && !operators[index]) {
            return null;
         }
         var position = machine.slotPositions[index];
         var element = paper.rect(position.x, position.y, machineDataParams.cellWidth, machineDataParams.cellHeight).attr(boxBackgroundAttr);
         machine.totalSet.push(element);
         return element;
      });
   }

   function actionIfDropped(srcCont, srcPos, dstCont, dstPos, dropType) {
      return dstCont === null || dstCont === undefined || dstCont == "user";
   }

   function onDrop(srcContainerID, srcPos, dstContainerID, dstPos, dropType) {
      var oldAnswer = answer;
      answer = dragAndDrop.getObjects("user");
      for(var index = 0; index < answer.length; index++) {
         if(answer[index] !== oldAnswer[index]) {
            onAnswerChange();
            return;
         }
      }
   }

   function initResults() {
      userMachines = [];
      targetMachines = [];
      for(var index = 0; index < data[level].target.length; index++) {
         var topY = paperHeight - totalResultHeight + index * (userMachineSize.height + resultParams.ySpacing);

         var userMachine = drawMachine(true, paperWidth - paperParams.xPad - userMachineSize.width, topY);
         userMachines.push(userMachine);

         var targetMachine = drawMachine(false, paperParams.xPad, topY);
         targetMachines.push(targetMachine);

         for(var bitIndex = 0; bitIndex < inputs[index].length; bitIndex++) {
            // User input.
            drawDigit(userMachine, 0, bitIndex, inputs[index][bitIndex]);

            // Target input.
            drawDigit(targetMachine, 0, bitIndex, inputs[index][bitIndex]);
         }

         userMachine.hide();
         targetMachine.hide();
      }
   }

   function onAnswerChange() {
      hasUserMachineChanged = true;
      if(userLever.isActivated) {
         execute(true);
      }
   }

   function clickValidate() {
      // If the user machine changed, or was never activated, activate it and validate when finished. 
      if(hasUserMachineChanged || (!isUserMachineRunning && !isUserMachineFinished)) {
         needValidationUser = true;
         execute(true);
      }

      // If the user machine is currently running and was not changed, validate when done.
      if(!hasUserMachineChanged && isUserMachineRunning) {
         needValidationUser = true;
      }

      // If the user machine is done and was not changed, and the target is running, validate when done.
      if(isUserMachineFinished && !hasUserMachineChanged && isTargetMachineRunning) {
         needValidationTarget = true;
      }

      // If both machines are done, validate immediately.
      if(!hasUserMachineChanged && isUserMachineFinished && isTargetMachineFinished && !isUserMachineRunning) {
         var resultAndMessage = getResultAndMessage();
         if(resultAndMessage.successRate < 1) {
            displayHelper.validate("stay");
         }
         else {
            displayHelper.validate("done");
         }
      }

      // If the target machine was never activated, activate it and validate when finished.
      if(!isTargetMachineFinished && !isTargetMachineRunning) {
         // Don't validate twice.
         needValidationTarget = !needValidationUser;
         execute(false);
      }
   }

   function resetUserResults() {
      for(var index = 0; index < data[level].target.length; index++) {
         var userMachine = userMachines[index];
         fillMachineBackgrounds(userMachine, true, answer);
         fillMachine(userMachine, answer);
         setMachineState(userMachine, true, false);

         for(var slotIndex = 0; slotIndex < data[level].slots; slotIndex++) {
            for(var bitIndex = 0; bitIndex < inputs[index].length; bitIndex++) {
               eraseDigit(userMachine, slotIndex + 1, bitIndex);
               removeDigitHighlight(targetMachines[index], slotIndex + 1, bitIndex);
            }
         }
         userMachine.totalSet.hide();
      }
   }

   function resetTargetResults() {
      for(var index = 0; index < data[level].target.length; index++) {
         var targetMachine = targetMachines[index];
         setMachineState(targetMachine, false, false);

         for(var slotIndex = 0; slotIndex < data[level].slots - 1; slotIndex++) {
            for(var bitIndex = 0; bitIndex < inputs[index].length; bitIndex++) {
               eraseDigit(targetMachine, slotIndex + 1, bitIndex);
            }
         }
         targetMachine.totalSet.hide();
      }
   }

   function setMachineState(machine, isUser, activate) {
      var attr;
      if(activate) {
         attr = machineParams.activeAttr;
         maskAttr = machineParams.targetMaskAttr;
         machine.show();
      }
      else {
         attr = machineParams.inactiveAttr;
         maskAttr = machineParams.targetMaskDeactivateAttr;
      }
      machine.opacitySet.attr(attr);
      if(!isUser) {
         machine.mask.attr(maskAttr);
      }
   }

   function execute(isUser) {
      killSimulation(isUser);
      if(isUser) {
         resetUserResults();
      }
      else {
         resetTargetResults();
      }
      var simulation = subTask.simulationFactory.create("sim " + isUser);
      if(isUser) {
         isUserMachineRunning = true;
         isUserMachineFinished = false;
         hasUserMachineChanged = false;
         simulationUser = simulation;
      }
      else {
         isTargetMachineRunning = true;
         isTargetMachineFinished = false;
         simulationTarget = simulation;
      }
      simulate(simulation, isUser);
      simulation.setAutoPlay(true);
      simulation.play();
   }

   function simulate(simulation, isUser) {
      simulation.clear();

      var currentBits;
      var bitIndex;
      var success = true;

      var step;
      for(var targetIndex = 0; targetIndex < data[level].target.length; targetIndex++) {
         step = new SimulationStep();
         if(targetIndex > 0) {
            simulationEntryActivation(isUser, step, targetIndex - 1, false);
         }
         simulationEntryActivation(isUser, step, targetIndex, true);
         simulation.addStep(step);

         currentBits = inputs[targetIndex];

         for(var slotIndex = 0; slotIndex < data[level].slots; slotIndex++) {
            step = new SimulationStep();
            if(isUser) {
               currentBits = applyOperator(answer[slotIndex], currentBits);
            }
            else {
               // Output bits of target machine.
               if(slotIndex == data[level].slots - 1) {
                  currentBits = data[level].target[targetIndex];
               }
               // Revealed intermediate bits of target machine.
               else {
                  currentBits = [];
                  for(bitIndex = 0; bitIndex < data[level].target[targetIndex].length; bitIndex++) {
                     currentBits.push(data[level].revealed[targetIndex][bitIndex][slotIndex]);
                  }
               }
            }

            // Validate intermediate digits.
            if(isUser && slotIndex < data[level].slots - 1) {
               for(bitIndex = 0; bitIndex < data[level].target[targetIndex].length; bitIndex++) {
                  var revealedBit = data[level].revealed[targetIndex][bitIndex][slotIndex];
                  if(revealedBit !== null && revealedBit !== currentBits[bitIndex]) {
                     success = false;
                  }
               }
            }

            simulationEntryBits(isUser, step, targetIndex, slotIndex + 1, currentBits);
            simulation.addStep(step);
         }

         if(isUser && !Beav.Object.eq(currentBits, data[level].target[targetIndex])) {
            success = false;
         }
      }

      step = new SimulationStep();
      simulationEntryActivation(isUser, step, data[level].target.length - 1, false);
      simulation.addStep(step);
      
      simulationEntryValidation(simulation, success, isUser);

      if(success) {
         return {
            successRate: 1,
            message: taskStrings.success
         };
      }
      return {
         successRate: 0,
         message: taskStrings.wrong
      };
   }

   function simulationEntryBits(isUser, step, row, slot, bits) {
      step.addEntry({
         name: "row " + row + " slot " + slot + " user " + isUser,
         action: {
            onExec: simulationShowBits,
            params: {
               row: row,
               slot: slot,
               bits: $.extend([], bits),
               user: isUser
            },
            duration: animTime,
            useTimeout: true
         }
      });
   }

   function simulationEntryActivation(isUser, step, row, activate) {
      step.addEntry({
         name: "activate " + row + " user " + isUser,
         action: {
            onExec: simulationActivateRow,
            params: {
               row: row,
               activate: activate,
               user: isUser
            },
            duration: animTime,
            useTimeout: true
         }
      });
   }

   function simulationShowBits(params, callback) {
      var row = params.row;
      var slot = params.slot;
      var bits = params.bits;

      var machine = userMachines[row];
      if(!params.user) {
         machine = targetMachines[row];
      }

      for(var bitIndex = 0; bitIndex < bits.length; bitIndex++) {
         drawDigit(machine, slot, bitIndex, bits[bitIndex]);
         checkDigitAndHighlight(row, slot, bitIndex);
      }
   }

   function checkDigitAndHighlight(targetIndex, slotIndex, bitIndex) {
      var userMachine = userMachines[targetIndex];
      var targetMachine = targetMachines[targetIndex];
      var machines = [userMachine, targetMachine];

      // Both machines must be visible, and the specific bit must be shown.
      for(var iMachine in machines) {
         var machine = machines[iMachine];
         if(!machine.isShown || !machine.digitElements || !machine.digitElements[slotIndex] || !machine.digitElements[slotIndex][bitIndex]) {
            return;
         }
         // Check Raphael visibility.
         if(machine.digitElements[slotIndex][bitIndex].node.style.display === "none") {
            return;
         }
      }
      
      var userDigit = userMachine.digitValues[slotIndex][bitIndex];
      var targetDigit;

      // Output digits.
      if(slotIndex === data[level].slots) {
         targetDigit = data[level].target[targetIndex][bitIndex];
      }

      // Intermediate digits.
      else {
         targetDigit = data[level].revealed[targetIndex][bitIndex][slotIndex - 1];
      }

      removeDigitHighlight(userMachine, slotIndex, bitIndex);
      removeDigitHighlight(targetMachine, slotIndex, bitIndex);
      if(targetDigit !== null && targetDigit !== userDigit) {
         addDigitHighlight(userMachine, slotIndex, bitIndex);
         addDigitHighlight(targetMachine, slotIndex, bitIndex);
      }
   }

   function addDigitHighlight(machine, slotIndex, bitIndex) {
      var position = machine.digitPositions[slotIndex][bitIndex];
      var rect = paper.rect(
         position.x - machineParams.digitHighlightRectAttr.width / 2,
         position.y - machineParams.digitHighlightRectAttr.height / 2
      ).attr(machineParams.digitHighlightRectAttr).toBack();
      machine.digitHighlights[slotIndex][bitIndex] = rect;
      machine.totalSet.push(rect);
   }

   function removeDigitHighlight(machine, slotIndex, bitIndex) {
      if(!machine.digitHighlights) {
         machine.digitHighlights = {};
      }
      if(!machine.digitHighlights[slotIndex]) {
         machine.digitHighlights[slotIndex] = {};
      }
      var oldHighlight = machine.digitHighlights[slotIndex][bitIndex];
      if(oldHighlight) {
         machine.totalSet.exclude(oldHighlight);
         oldHighlight.remove();
         machine.digitHighlights[slotIndex][bitIndex] = null;
      }
   }

   function simulationActivateRow(params, callback) {
      if(params.user) {
         setMachineState(userMachines[params.row], true, params.activate);
      }
      else {
         setMachineState(targetMachines[params.row], false, params.activate);
      }
   }

   function simulationEntryValidation(simulation, success, isUser) {
      simulation.addStepWithEntry({
         name: "validate ",
         action: {
            onExec: simulationValidate,
            params: {
               success: success,
               isUser: isUser
            }
         }
      });
   }

   function simulationValidate(params, duration, callback) {
      if(params.isUser) {
         isUserMachineFinished = true;
         isUserMachineRunning = false;
      }
      else {
         isTargetMachineFinished = true;
         isTargetMachineRunning = false;
      }
      if((params.isUser && !needValidationUser) || (!params.isUser && !needValidationTarget)) {
         callback();
         return;
      }
      if(params.isUser) {
         needValidationUser = false;
      }
      else {
         needValidationTarget = false;
      }
      if(params.success) {
         platform.validate("done");
      }
      else {
         displayHelper.validate("stay");
      }
      callback();
   }

   function applyOperator(operator, bits) {
      switch(operator) {
         case "yellow_1":
            return [bits[1], bits[0]];
         case "red_1":
            return [1 - bits[0], bits[1]];
         case "red_2":
            return [bits[0], 1 - bits[1]];
         case "blue_1":
            return [bits[0] && bits[1], bits[1]];
         case "blue_2":
            return [bits[0], bits[0] && bits[1]];
         case "green_1":
            return [bits[0] ^ bits[1], bits[1]];
         case "green_2":
            return [bits[0], bits[0] ^ bits[1]];
      }
      return bits;
   }

   function stopExecution(isUser) {
      if(isUser && simulationUser) {
         simulationUser.stop();
      }
      if(!isUser && simulationTarget) {
         simulationTarget.stop();
      }
   }

   function killSimulation(isUser) {
      stopExecution(isUser);
      subTask.simulationFactory.destroy("sim " + isUser);
      if(isUser) {
         simulationUser = null;
      }
      else {
         simulationTarget = null;
      }
   }

   function killAllSimulations() {
      killSimulation(true);
      killSimulation(false);
   }

   function initLevers() {
      var centerY = paperHeight - totalResultHeight - leverParams.bottomPadding;
      var userCenterX = paperWidth - paperParams.xPad - userMachineSize.width / 2;
      var targetCenterX = paperParams.xPad + targetMachineSize.width / 2;
      userLever = new Lever(userCenterX, centerY, onUserLeverActivate);
      targetLever = new Lever(targetCenterX, centerY, onTargetLeverActivate);
   }

   function onUserLeverActivate() {
      execute(true);
   }

   function onTargetLeverActivate() {
      execute(false);
   }

   function Lever(centerX, centerY, onActivate, onDeactivate) {
      var self = this;
      var leftX = centerX - leverParams.width / 2;
      var topY = centerY - leverParams.height / 2;
      var bottomY = centerY + leverParams.height / 2;
      this.border = paper.rect(leftX, topY, leverParams.width, leverParams.height).attr(leverParams.borderAttr);
      this.handleRect = paper.rect().attr(leverParams.handleRectAttr);
      this.handleRect.attr({
         x: centerX - leverParams.handleRectAttr.width / 2
      });
      this.handleCircle = paper.circle().attr(leverParams.handleCircleAttr);
      this.handleCircle.attr({
         cx: centerX
      });
      this.overlay = paper.rect(leftX, topY - leverParams.handleCircleAttr.r, leverParams.width, leverParams.height + leverParams.handleCircleAttr.r * 2).attr({
         fill: "green",
         opacity: 0
      });
      this.isActivated = false;

      this.activate = function() {
         this.isActivated = true;
         this.handleCircle.attr({
            cy: bottomY
         });
         this.handleRect.attr({
            y: centerY
         });
         if(onActivate) {
            onActivate();
         }
      };

      this.deactivate = function() {
         this.isActivated = false;
         this.handleCircle.attr({
            cy: topY
         });
         this.handleRect.attr({
            y: centerY - leverParams.handleRectAttr.height
         });
         if(onDeactivate) {
            onDeactivate();
         }
      };

      this.overlay.click(function() {
         if(self.isActivated) {
            self.deactivate();
         }
         else {
            self.activate();
         }
      });

      this.deactivate();
   }

   function getResultAndMessage() {
      return simulate(new Simulation(), true);
   }

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
