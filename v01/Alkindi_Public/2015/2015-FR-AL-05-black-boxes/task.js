function initTask() {
   var alphabetSize = 26;
   var alphabetBaseCode = 'A'.charCodeAt(0);
   function getShiftTransform(amount) {
      return function(text) {
         var result = "";
         for (var iChar = 0; iChar < text.length; iChar++) {
            var rank = ((text.charCodeAt(iChar) - alphabetBaseCode + amount) % alphabetSize + alphabetSize) % alphabetSize;
            result += String.fromCharCode(rank + alphabetBaseCode);
         }
         return result;
      };
   }
   function getVigenereTransform(key) {
      return function(text) {
         var result = "";
         for (var iChar = 0; iChar < text.length; iChar++) {
            var rank = ((text.charCodeAt(iChar) - alphabetBaseCode + key[iChar % key.length]) % alphabetSize + alphabetSize) % alphabetSize;
            result += String.fromCharCode(rank + alphabetBaseCode);
         }
         return result;
      };
   }
   function getVigenerePair(key) {
      var invKey = [];
      for(var iNum in key) {
         invKey.push(-key[iNum]);
      }
      return [getVigenereTransform(key), getVigenereTransform(invKey)];
   }

   var data = {
      easy: {
         transforms: {
            circle: {
               symbol: "circle1",
               functions: getVigenerePair([1, 7, 2, 9])
            },
            square: {
               symbol: "square1",
               functions: getVigenerePair([3, 1, 4, 1, 5])
            }
         },
         machines: [{
            owner: "B",
            position: {
               xPos: 433,
               yPos: 360
            },
            transforms: [
               "circle"
            ]
         }, {
            owner: "B",
            position: {
               xPos: 433,
               yPos: 200
            },
            transforms: [
               "square"
            ]
         }, {
            owner: "A",
            position: {
               xPos: 7,
               yPos: 260
            },
            transforms: [
               "circle",
               "square"
            ]
         }, {
            owner: "public",
            position: {
               xPos: 220,
               yPos: 50
            },
            transforms: []
         }]
      },
      medium: {
         transforms: {
            circle: {
               symbol: "circle1",
               functions: getVigenerePair([2, 7, 1, 8, 2, 8])
            },
            triangle: {
               symbol: "triangle1",
               functions: getVigenerePair([5, 7, 7, 2, 1, 5])
            },
            diamond: {
               symbol: "diamond1",
               functions: getVigenerePair([4, 7, 3, 1])
            }
         },
         machines: [{
            owner: "A",
            position: {
               xPos: 7,
               yPos: 200
            },
            transforms: [
               "circle",
               "triangle"
            ]
         }, {
            owner: "A",
            position: {
               xPos: 7,
               yPos: 360
            },
            transforms: [
               "triangle",
               "diamond"
            ]
         }, {
            owner: "B",
            position: {
               xPos: 433,
               yPos: 200
            },
            transforms: [
               "circle"
            ]
         }, {
            owner: "B",
            position: {
               xPos: 433,
               yPos: 360
            },
            transforms: [
               "diamond"
            ]
         }, {
            owner: "public",
            position: {
               xPos: 220,
               yPos: 50
            },
            transforms: []
         }]
      },
      hard: {
         transforms: {
            circle: {
               symbol: "circle1",
               functions: getVigenerePair([14, 9, 3, 1])
            },
            triangle: {
               symbol: "triangle1",
               functions: [
                  getShiftTransform(2),
                  getShiftTransform(-2)
               ]
            },
            diamond: {
               symbol: "diamond1",
               functions: getVigenerePair([20, 6, 2, 1, 7])
            },
            square: {
               symbol: "square1",
               functions: getVigenerePair([9, 1, 2, 9, 25])
            }
         },
         machines: [{
            owner: "A",
            position: {
               xPos: 7,
               yPos: 200
            },
            transforms: [
               "circle"
            ]
         }, {
            owner: "A",
            position: {
               xPos: 7,
               yPos: 360
            },
            transforms: [
               "square",
               "diamond"
            ]
         }, {
            owner: "B",
            position: {
               xPos: 433,
               yPos: 200
            },
            transforms: [
               "triangle",
               "circle"
            ]
         }, {
            owner: "B",
            position: {
               xPos: 433,
               yPos: 360
            },
            transforms: [
               "diamond"
            ]
         }, {
            owner: "public",
            position: {
               xPos: 220,
               yPos: 50
            },
            transforms: []
         }]
      }
   };
   var originalText = "COUCOU";
   var answer = null;
   var state = null;
   var level = null;
   var publicMachine = null;

   var paper;
   var paperParams = {
      width: 760,
      height: 500,
      borderAttr: {
         "stroke-width": 3
      },
      titleAttr: {
         "font-size": 24
      },
      titleOffsetY: 20,
      targetAttr: {
         width: 100,
         height: 40,
         "stroke-dasharray": ". "
      },
      stickerBackAttr: {
         width: 100,
         height: 40,
         fill: "#eee675"
      },
      stickerTextAttr: {
         "font-size": 22
      },
      stickerSnap: 10
   };
   var machineParams = {
      bodyAttr: {
         width: 120,
         height: 100,
         fill: "#cbcbcb"
      },
      slotAttr: {
         width: 100,
         height: 40,
         "stroke-dasharray": ". "
      },
      slotOffsetY: 40,
      leverStickAttr: {
         width: 5,
         height: 30
      },
      leverHeadAttr: {
         r: 12,
         fill: "gray"
      },
      leverAngle: 45,
      arrowOffsetX: 20,
      arrowOffsetY: 20,
      arrowWidth: 30,
      arrowAttr: {
         stroke: "black",
         "stroke-width": 4,
         "arrow-end": "classic-wide-long"
      }
   };
   var symbolParams = {
      size: 30,
      offsetY: 16,
      circle1: {
         type: "circle",
         attr: {
            fill: "#FFA0A0"
         }
      },
      diamond1: {
         type: "diamond",
         attr: {
            fill: "#A0A0FF"
         }
      },
      square1: {
         type: "rect",
         attr: {
            fill: "#FFFFA0"
         }
      },
      triangle1: {
         type: "triangleUp",
         attr: {
            fill: "#CCFFCC"
         }
      },
      triangle2: {
         type: "triangleDown",
         attr: {
            fill: "#CCFFCC"
         }
      },

      spaceX: 6
   };
   var tagParams = {
      spaceX: 2,
      size: 24,
      offsetY: 25
   };
   var simulation;
   var areas = {
      A: {
         top: 2,
         bottom: 480,
         left: 2,
         right: 330 + 2
      },
      B: {
         top: 2,
         bottom: 480,
         left: 430 - 2,
         right: 760 - 2
      }
   };
   var ownerTargets = {
      A: {
         xPos: 10,//(areas.A.right + areas.A.left) / 2 - paperParams.targetAttr.width / 2,
         yPos: 60
      }
         /*,
      B: {
         xPos: 650,//(areas.B.right + areas.B.left) / 2 - paperParams.targetAttr.width / 2,
         yPos: 60
      }*/
   };
   var ownerTitles = {
      A: "Alice",
      B: "Bernard"
   };
   var sticketSet;
   var stickerPosition;
   var stickerTextElement;
   var currentText;
   var slots;
   var levers;
   var animTime = 400;
   var tagCounters;
   var tagElements = {};
   var oldIE;

   task.load = function(views, callback) {
      var myNav = navigator.userAgent.toLowerCase();
      oldIE = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
      if(oldIE && oldIE <= 9) {
         animTime = 0;
      }
      
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
      return {
         level: "easy"
      };
   };

   task.getStateObject = function() {
      state.level = level;
      return state;
   };

   task.reloadStateObject = function(stateObj, display) {
      state = stateObj;
      level = state.level;

      if (display) {
         initPaper();
         setFeedback();
      }
   };

   task.reloadAnswerObject = function(answerObj) {
      stopExecution();
      answer = answerObj;
      updateStickerText(applyAllMachines(originalText, answer[level].transforms, level).text);
      moveSticker(answer[level].position);
      initDrag();
      setFeedback();
      reloadTagCount();
      drawTags(stickerPosition);
   };

   task.getAnswerObject = function() {
      return answer;
   };

   task.getDefaultAnswerObject = function() {
      return {
         easy: {
            transforms: [
               // [machineIndex, dirIndex]
            ],
            position: {
               xPos: ownerTargets.A.xPos,
               yPos: ownerTargets.A.yPos
            }
         },
         medium: {
            transforms: [
               // [machineIndex, dirIndex]
            ],
            position: {
               xPos: ownerTargets.A.xPos,
               yPos: ownerTargets.A.yPos
            }
         },
         hard: {
            transforms: [
               // [machineIndex, dirIndex]
            ],
            position: {
               xPos: ownerTargets.A.xPos,
               yPos: ownerTargets.A.yPos
            }
         }
      };
   };

   task.unload = function(callback) {
      stopExecution();
      callback();
   };

   var initPaper = function() {
      if (paper) {
         paper.remove();
      }
      paper = new Raphael("anim", paperParams.width, paperParams.height);
      slots = [];
      initTitles();
      initBorders();
      initTargets();
      initMachines();
      initSticker();
      initDrag();
   };

   var initTitles = function() {
      for (var owner in ownerTitles) {
         var xPos = (areas[owner].left + areas[owner].right) / 2;
         var yPos = areas[owner].top + paperParams.titleOffsetY;
         paper.text(xPos, yPos, ownerTitles[owner]).attr(paperParams.titleAttr);
      }
   };

   var initBorders = function() {
      for (var owner in areas) {
         var rect = areas[owner];
         paper.rect(rect.left, rect.top, rect.right - rect.left, rect.bottom - rect.top).attr(paperParams.borderAttr);
      }
   };

   var initTargets = function() {
      for (var owner in ownerTargets) {
         var position = ownerTargets[owner];
         paper.rect(position.xPos, position.yPos).attr(paperParams.targetAttr);
         slots.push({
            type: "target",
            owner: owner,
            position: {
               xPos: position.xPos,
               yPos: position.yPos
            },
            size: {
               width: paperParams.targetAttr.width,
               height: paperParams.targetAttr.height
            }
         });
      }
   };

   var initMachines = function() {
      levers = {};
      for (var iMachine in data[level].machines) {
         drawMachine(iMachine);
      }
   };

   var drawMachine = function(iMachine) {
      var machine = data[level].machines[iMachine];
      // Machine body.
      var bodyLeft = machine.position.xPos + machineParams.slotAttr.width;
      var bodyTop = machine.position.yPos;
      var machineBody = paper.rect(bodyLeft, bodyTop).attr(machineParams.bodyAttr);

      // Slots
      var slotY = machine.position.yPos + machineParams.slotOffsetY;
      paper.rect(machine.position.xPos, slotY).attr(machineParams.slotAttr);
      paper.rect(machine.position.xPos + machineParams.bodyAttr.width + machineParams.slotAttr.width, slotY).attr(machineParams.slotAttr);
      slots.push({
         type: "machine",
         machineIndex: iMachine,
         dirIndex: 0,
         owner: machine.owner,
         position: {
            xPos: machine.position.xPos,
            yPos: slotY
         },
         size: {
            width: machineParams.slotAttr.width,
            height: machineParams.slotAttr.height
         }
      });
      slots.push({
         type: "machine",
         machineIndex: iMachine,
         dirIndex: 1,
         owner: machine.owner,
         position: {
            xPos: machine.position.xPos + machineParams.bodyAttr.width + machineParams.slotAttr.width,
            yPos: slotY
         },
         size: {
            width: machineParams.slotAttr.width,
            height: machineParams.slotAttr.height
         }
      });

      var centerX = machine.position.xPos + machineParams.slotAttr.width + machineParams.bodyAttr.width / 2;

      // Arrows
      paper.path(["M", centerX - machineParams.arrowOffsetX, bodyTop - machineParams.arrowOffsetY, "H", centerX - machineParams.arrowOffsetX - machineParams.arrowWidth]).attr(machineParams.arrowAttr);
      paper.path(["M", centerX + machineParams.arrowOffsetX, bodyTop - machineParams.arrowOffsetY, "H", centerX + machineParams.arrowOffsetX + machineParams.arrowWidth]).attr(machineParams.arrowAttr);
      // Signs on top of arrows
      if (machine.owner != "public") {
         paper.text(centerX - machineParams.arrowOffsetX - machineParams.arrowWidth / 2, bodyTop - machineParams.arrowOffsetY - 22, "-").attr({"font-size": "30"});
         paper.text(centerX + machineParams.arrowOffsetX + machineParams.arrowWidth / 2, bodyTop - machineParams.arrowOffsetY - 20, "+").attr({"font-size": "30"});
      }

      // Lever
      var leverTop = machine.position.yPos - machineParams.leverStickAttr.height;
      var leverStick = paper.rect(centerX - machineParams.leverStickAttr.width / 2, leverTop).attr(machineParams.leverStickAttr).toBack();
      var leverHead = paper.circle(centerX, leverTop).attr(machineParams.leverHeadAttr);
      levers[iMachine] = paper.set();
      levers[iMachine].push(leverStick, leverHead);

      // Symbols
      if(machine.owner == "public") {
         publicMachine = machineBody;
         machineBody.attr({"fill": "#A0FFA0"});
         paper.text(centerX, slotY, "Zone\npublique").attr({
            "font-size": 22
         });
      }
      else {
         var symbolsWidth = machine.transforms.length * symbolParams.size + (machine.transforms.length - 1) * symbolParams.spaceX;
         var symbolsLeft = centerX - symbolsWidth / 2;
         for (var iSymbol = 0; iSymbol < machine.transforms.length; iSymbol++) {
            var symbolName = data[level].transforms[machine.transforms[iSymbol]].symbol;
            drawSymbol(symbolName, symbolsLeft + iSymbol * (symbolParams.size + symbolParams.spaceX), bodyTop + symbolParams.offsetY);
         }
      }

      // Overlay
      var bottom = bodyTop + machineParams.bodyAttr.height;
      var height = bottom - leverTop;
      var overlay = paper.rect(bodyLeft, leverTop, machineParams.bodyAttr.width, height).attr({
         fill: "red",
         opacity: 0
      });
      overlay.toFront();
      overlay.mousedown(function() {
         clickMachine(iMachine);
      });
   };

   var drawSymbol = function(name, xPos, yPos, size) {
      var symbol = symbolParams[name];
      var element;
      if(size === undefined) {
         size = symbolParams.size;
      }
      var halfSize = Math.ceil(size / 2);
      switch (symbol.type) {
         case "circle":
            element = paper.circle(xPos + size / 2, yPos + size / 2, size / 2);
            break;
         case "rect":
            element = paper.rect(xPos, yPos, size, size);
            break;
         case "diamond":
            element = paper.path(["M ", xPos + halfSize, yPos,
               "L", xPos + size, yPos + halfSize,
               "L", xPos + halfSize, yPos + size,
               "L", xPos, yPos + halfSize,
               "L", xPos + halfSize, yPos]);
            break;
         case "triangleUp":
            element = paper.path(["M ", xPos + halfSize, yPos, "L", xPos + size, yPos + size, "L", xPos, yPos + size, "L", xPos + halfSize, yPos]);
            break;
         case "triangleDown":
            element = paper.path(["M ", xPos + halfSize, yPos + size, "L", xPos + size, yPos, "L", xPos, yPos, "L", xPos + halfSize, yPos + size]);
            break;
         default:
            return;
      }
      return element.attr(symbol.attr);
   };

   var stickerToFront = function() {
      stickerSet.toFront();
      stickerTextElement.toFront();
   };

   var stickerToBack = function() {
      stickerSet.toBack();
      for(var tag in tagElements) {
         tagElements[tag].text.toBack();
         tagElements[tag].symbol.toBack();
      }
   };

   var clickMachine = function(iMachine) {
      var machine = data[level].machines[iMachine];
      var slot = positionToSlot(stickerPosition);
      if (!slot || slot.machineIndex === undefined || slot.machineIndex !== iMachine) {
         setFeedback("Poser le message dans la case de gauche ou de droite afin d'utiliser cette machine.");
         return;
      }
      if (simulation && simulation.isPlaying()) {
         return;
      }
      if(machine.owner == "public" && currentText == originalText) {
         publicMachine.attr({"fill": "#FF0000"});
         DelayedExec.setTimeout("blackBoxPublicRed", function() {
            publicMachine.attr({"fill": "#A0FFA0"});
         }, 1000);
         setFeedback("Le message n'est pas chiffré et ne peut pas traverser la zone publique.");
         return;
      }
      setFeedback();
      stickerSet.undrag();
      stickerToBack();
      var machineCenterX = machine.position.xPos + machineParams.slotAttr.width + machineParams.bodyAttr.width / 2;
      var finalX, middleX, leverTargetAngle;
      if (slot.dirIndex === 0) {
         finalX = stickerPosition.xPos + (machineParams.bodyAttr.width + machineParams.slotAttr.width);
         middleX = stickerPosition.xPos + machineParams.slotAttr.width;
         leverTargetAngle = machineParams.leverAngle;
      } else {
         finalX = stickerPosition.xPos - (machineParams.bodyAttr.width + machineParams.slotAttr.width);
         middleX = stickerPosition.xPos - machineParams.slotAttr.width;
         leverTargetAngle = -machineParams.leverAngle;
      }

      var animateStickerX = function(params, duration, callback) {
         return stickerSet.animate({
            transform: ["T", params, stickerPosition.yPos]
         }, duration, callback);
      };
      var transformSticker = function(params, duration, callback) {
         updateStickerText(applyMachine(currentText, iMachine, slot.dirIndex, level));
         applyMachineCounters(iMachine, slot.dirIndex);
         drawTags({
            xPos: middleX,
            yPos: stickerPosition.yPos
         });
         callback();
      };
      var animateLever = function(params, duration, callback) {
         return levers[iMachine].animate({
            transform: ["R", params, machineCenterX, machine.position.yPos]
         }, duration, callback);
      };
      var animateFinish = function(params, duration, callback) {
         moveSticker({
            xPos: finalX,
            yPos: stickerPosition.yPos
         });
         updateAnswerPosition();
         answer[level].transforms.push([iMachine, slot.dirIndex]);
         stickerToFront();
         if(slot.owner === "B" && currentText == originalText) {
            platform.validate("done");
         }
         initDrag();
         callback();
      };

      simulation = new Simulation();
      var step = new SimulationStep();

      step.addEntry({
         name: "move1",
         action: {
            onExec: animateStickerX,
            duration: animTime / 2,
            params: middleX
         }
      });
      step.addEntry({
         name: "lever1",
         action: {
            onExec: animateLever,
            duration: animTime / 2,
            params: leverTargetAngle
         }
      });
      simulation.addStep(step);

      simulation.addStepWithEntry({
         name: "trans",
         action: {
            onExec: transformSticker
         }
      });

      step = new SimulationStep();
      step.addEntry({
         name: "move2",
         action: {
            onExec: animateStickerX,
            duration: animTime / 2,
            params: finalX
         }
      });
      step.addEntry({
         name: "lever2",
         action: {
            onExec: animateLever,
            duration: animTime / 2,
            params: 0
         }
      });
      simulation.addStep(step);

      simulation.addStepWithEntry({
         name: "finish",
         action: {
            onExec: animateFinish
         }
      });
      simulation.setAutoPlay(true);
      simulation.play();
   };

   var initSticker = function() {
      var background = paper.rect().attr(paperParams.stickerBackAttr);
      stickerTextElement = paper.text(0, 0, originalText).attr(paperParams.stickerTextAttr);
      stickerTextElement.attr({
         x: paperParams.stickerBackAttr.width / 2,
         y: paperParams.stickerBackAttr.height / 2
      });
      stickerTextElement[0].style.cursor = "default";
      stickerSet = paper.set();
      stickerSet.push(stickerTextElement, background);
      stickerPosition = {
         xPos: 0,
         yPos: 0
      };
   };

   var initDrag = function() {
      stickerSet.undrag();
      stickerSet.drag(onDragMove, onDragStart, onDragEnd);
   };

   var onDragStart = function() {
      stickerToFront();
      stickerSet.originalPosition = {
         xPos: stickerPosition.xPos,
         yPos: stickerPosition.yPos
      };
      stickerSet.originalOwner = positionToOwner(stickerPosition);
      setFeedback();
   };

   var onDragMove = function(dx, dy) {
      if (isNaN(dx) || isNaN(dy)) {
         return;
      }
      var newX = stickerSet.originalPosition.xPos + dx;
      var newY = stickerSet.originalPosition.yPos + dy;
      newX = Math.max(newX, areas[stickerSet.originalOwner].left);
      newX = Math.min(newX, areas[stickerSet.originalOwner].right - paperParams.stickerBackAttr.width);
      newY = Math.max(newY, areas[stickerSet.originalOwner].top);
      newY = Math.min(newY, areas[stickerSet.originalOwner].bottom - paperParams.stickerBackAttr.height);
      
      var slot = positionToSlot({
         xPos: newX,
         yPos: newY
      }, paperParams.stickerSnap);
      if (slot) {
         newX = slot.position.xPos;
         newY = slot.position.yPos;
      }
      moveSticker({
         xPos: newX,
         yPos: newY
      });
   };

   var onDragEnd = function() {
      var previousOwner = positionToOwner(stickerSet.originalPosition);
      var newOwner = positionToOwner(stickerPosition);
      var exposed = (originalText == currentText);
      var slot = rectToSlot({
         left: stickerPosition.xPos,
         top: stickerPosition.yPos,
         bottom: stickerPosition.yPos + paperParams.stickerBackAttr.height,
         right: stickerPosition.xPos + paperParams.stickerBackAttr.width
      });
      /*
      FIXME
      * This bug is hidden by the fact that dragging has been restricted to current owner area in onDragMove. *
      
      The following condition doesn't catch the following case:
      The sticker is dragged (exposed) from area A to area B, and dropped on area B
      while not snapped to a slot (i.e. it overlaps with a slot but not closely enough to snap to it).
      In such a case, newOwner could be undefined because the sticker may be partially outside,
      and yet slot is defined, because rectToSlot uses a weaker condition than positionToOwner.
      To fix, decide which test should be used and be consistent.
      */
      if (newOwner && newOwner !== previousOwner) {
         setFeedback("Vous devez passer par la zone publique.");
         moveSticker(stickerSet.originalPosition);
         return;
      }
      if (!slot) {
         moveSticker(stickerSet.originalPosition);
         return;
      }
      moveSticker(slot.position);
      updateAnswerPosition();
   };

   var updateAnswerPosition = function() {
      answer[level].position = {
         xPos: stickerPosition.xPos,
         yPos: stickerPosition.yPos
      };
   };

   var updateStickerText = function(text) {
      currentText = text;
      stickerTextElement.attr("text", text);
   };

   var moveSticker = function(position) {
      stickerSet.transform(["T", position.xPos, position.yPos]);
      stickerPosition = {
         xPos: position.xPos,
         yPos: position.yPos
      };
   };

   var positionInRect = function(position, rect) {
      return position.xPos < rect.right && position.xPos >= rect.left && position.yPos < rect.bottom && position.yPos >= rect.top;
   };
   
   var reloadTagCount = function() {
      tagCounters = {};
      for(var transform in data[level].transforms) {
         tagCounters[transform] = 0;
      }
      for(var iAnswer = 0; iAnswer < answer[level].transforms.length; iAnswer++) {
         var machineIndex = answer[level].transforms[iAnswer][0];
         var dirIndex = answer[level].transforms[iAnswer][1];
         applyMachineCounters(machineIndex, dirIndex);
      }
   };
   
   var applyMachineCounters = function(machineIndex, dirIndex) {
      for(var iTransform in data[level].machines[machineIndex].transforms) {
         var transformName = data[level].machines[machineIndex].transforms[iTransform];
         if(dirIndex === 0) {
            tagCounters[transformName]++;
         }
         else {
            tagCounters[transformName]--;
         }
      }
   };
   
   var drawTags = function(stickerPosition) {
      var tag, element;
      if(tagElements) {
         for(tag in tagElements) {
            for(element in tagElements[tag]) {
               stickerSet.exclude(tagElements[tag][element]);
               tagElements[tag][element].remove();
            }
         }
      }
      var paperTrans = ["T", stickerPosition.xPos, stickerPosition.yPos];
      tagElements = {};
      var tagSet = paper.set();
      var numTags = 0;
      for(tag in tagCounters) {
         if(tagCounters[tag] > 0) {
            numTags++;
         }
      }
      var iTag = 0;
      for(tag in tagCounters) {
         var count = tagCounters[tag];
         if(count === 0) {
            continue;
         }
         var xPos = iTag * (tagParams.size + tagParams.spaceX);
         var yPos = - tagParams.offsetY;
         var symbolName = data[level].transforms[tag].symbol;
         tagElements[tag] = {};
         tagElements[tag].text = paper.text(xPos + tagParams.size / 2, yPos + tagParams.size / 2 + 2, count).attr({"font-size": 16}).transform(paperTrans).toBack();
         tagElements[tag].symbol = drawSymbol(symbolName, xPos, yPos, tagParams.size).transform(paperTrans).toBack();
         tagElements[tag].text[0].style.cursor = "default";
         stickerSet.push(tagElements[tag].symbol);
         stickerSet.push(tagElements[tag].text);
         iTag++;
      }
   };
   
   var applyMachine = function(text, machineIndex, dirIndex, level) {
      for(var iTransform in data[level].machines[machineIndex].transforms) {
         var transformName = data[level].machines[machineIndex].transforms[iTransform];
         text = data[level].transforms[transformName].functions[dirIndex](text);
      }
      return text;
   };

   var applyAllMachines = function(text, transforms, level) {
      var currentText = text;
      var currentOwner = "A";
      for (var iTransform = 0; iTransform < transforms.length; iTransform++) {
         var machineIndex = transforms[iTransform][0];
         var dirIndex = transforms[iTransform][1];
         var machine = data[level].machines[machineIndex];
         if (currentText == text) {
            if(machine.owner == "public") {
               return {
                  result: "error"
               };
            }
            if(machine.owner !== currentOwner) {
               return {
                  result: "error"
               };
            }
         }
         currentText = applyMachine(currentText, machineIndex, dirIndex, level);
         if(machine.owner == "public") {
            if(dirIndex == "0") {
               currentOwner = "B";
            }
            else {
               currentOwner = "A";
            }
         }
         else {
            currentOwner = machine.owner;
         }
      }
      return {
         result: "ok",
         text: currentText,
         owner: currentOwner
      };
   };

   var positionToOwner = function(position) {
      for (var owner in areas) {
         if (positionInRect(position, areas[owner])) {
            return owner;
         }
      }
      return null;
   };

   var positionToSlot = function(position, snap) {
      if (snap === undefined) {
         snap = 0;
      }
      for (var iSlot = 0; iSlot < slots.length; iSlot++) {
         var slotX = slots[iSlot].position.xPos;
         var slotY = slots[iSlot].position.yPos;
         if (checkSnap(position.xPos, position.yPos, slotX, slotY, snap)) {
            return slots[iSlot];
         }
      }
      return null;
   };

   var checkSnap = function(xPos1, yPos1, xPos2, yPos2, snap) {
      return Math.abs(xPos1 - xPos2) <= snap && Math.abs(yPos1 - yPos2) <= snap;
   };

   var rectToSlot = function(rect) {
      for (var iSlot = 0; iSlot < slots.length; iSlot++) {
         var slot = slots[iSlot];
         var slotRect = {
            left: slot.position.xPos,
            top: slot.position.yPos,
            bottom: slot.position.yPos + slot.size.height,
            right: slot.position.xPos + slot.size.width
         };
         if(rectIntersectRect(rect, slotRect)) {
            return slot;
         }
      }
      return null;
   };

   var rectIntersectRect = function(rect1, rect2) {
      var tempRect;
      if(rect1.left > rect2.left) {
         tempRect = rect1;
         rect1 = rect2;
         rect2 = tempRect;
      }
      if(rect1.right < rect2.left) {
         return false;
      }
      if(rect1.top > rect2.top) {
         tempRect = rect1;
         rect1 = rect2;
         rect2 = tempRect;
      }
      if(rect1.bottom < rect2.top) {
         return false;
      }
      return true;
   };

   var setFeedback = function(text) {
      if (!text) {
         text = "";
      }
      $("#feedback").text(text);
   };

   var getResultAndMessage = function(answer, level) {
      var textAndOwner = applyAllMachines(originalText, answer[level].transforms, level);

      // Was the sticker exposed?
      if (textAndOwner.result == "error") {
         return {
            result: "error",
            message: "Le message non chiffré ne peut pas transiter la zone publique."
         };
      }
      // Is the sticker not on B's area?
      if (positionToOwner(answer[level].position) != "B") {
         return {
            result: "wrong",
            message: "Le message n'est pas arrivé à destination."
         };
      }
      // Is the sticker not plaintext?
      if (textAndOwner.text !== originalText) {
         return {
            result: "wrong",
            message: "Le message n'est pas chiffré."
         };
      }
      // Was the sticker brought to B's podium directly from A?
      if (textAndOwner.owner !== "B") {
         return {
            result: "error",
            message: "Le message non chiffré ne peut pas transiter la zone publique."
         };
      }
      // Sticker was decrypted on B's side.
      return {
         result: "correct",
         count: answer[level].transforms.length
      };
   };

   var stopExecution = function() {
      if (simulation) {
         simulation.stop();
      }
      DelayedExec.stopAll();
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
         if (resultAndMessage.result == "correct") {
            scores[curLevel] = maxScores[curLevel];
            messages[curLevel] = "Bravo ! Vous avez réussi.";
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
