function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         amountsTaken: [0, 0]
      },
      medium: {
          amountsTaken: [0, 0, 0]
      },
      hard: {
          amountsTaken: [15, 5, 20]
      }
   };

   var totalBars;
   var paper;
   var pet;
   var bars;
   var targetPet;
   var drinkButton;
   var retryButton;

   var barMax = 30;

   var dragOriginY;

   var paperParams = {
      width: 760,
      height: 500,
      drinkButtonX: 344,
      drinkButtonY: 2,
      drinkButtonWidth: 200,
      drinkButtonHeight: 50
   };

   var barParams = {
      width: 40,
      height: 460,
      xPos: 2,
      yPos: 2,
      xSpacing: 120,
      fillTopPad: 30,
      fillColors: ["#3f78ee", "#ffcf28", "#99c611"],
      emptyColors: ["#dadcf5", "#fff2c8", "#f0fbce"],
      borderAttr: {
         stroke: "black"
      },
      contentAttr: {
         "stroke-width": 0
      },
      markSmall: 8,
      markBig: 16,
      markBigJump: 5,
      markAttr: {}
   };

   var arrowParams = {
      path: [
         "M", 2, 0,
         "L", 30, 30,
         "v", -15,
         "h", 30,
         "v", -30,
         "h", -30,
         "v", -15,
         "z"
      ],
      width: 60,
      height: 50,
      attr: {
         fill: "white",
         stroke: "black"
      },
      textXOffset: 50,
      textAttr: {
         "font-size": 16,
         "text-anchor": "end"
      }
   };

   var petParams = {
      centerX: 500,
      targetCenterX: 700,
      baseY: 460,
      color: "#b97a57",
      bodyRadiusX: 60,
      bodyRadiusY: 30,
      headRadiusX: 25,
      headRadiusY: 15,
      legsWidth: 25,
      legsNormalHeight: 160,
      legsMinHeight: 80,
      legsMaxHeight: 220,
      neckWidth: 15,
      neckNormalHeight: 120,
      neckMinHeight: 20,
      neckMaxHeight: 160,
      spotsNormal: 0,
      spotsMin: 0,
      spotsMax: 10,
      spotColors: ["yellow", "lightblue", "lightgreen", "red", "white", "pink"],
      targetBorderWidth: 150,
      targetBorderHeight: 300
   };

   subTask.loadLevel = function(curLevel) {
      level = curLevel;
      displayHelper.avatarType = "laptop";
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
      totalBars = data[level].amountsTaken.length;
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      initPet();
   };

   subTask.resetDisplay = function () {
      initPaper();
      resetAmountsTaken();
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      return {
         amountsTaken: Beav.Array.make(totalBars, 0),
         clickedDrink: false
      };
   };

   subTask.unloadLevel = function(callback) {
      if(drinkButton) {
         drinkButton.remove();
      }
      callback();
   };

   function initPet() {
      pet = new Pet(amountsTakenToParams(data[level].amountsTaken));
      if(answer && answer.clickedDrink) {
         pet.updateParamsFromAnswer();
      }
   }

   function Pet(params) {
      this.setParams = function(params) {
         if(params === undefined || params === null) {
            params = {
               legs: 0,
               neck: 0,
               spots: 0
            };
         }
         this.params = params;
      };
      
      this.draw = function(centerX, baseY) {
         this.centerX = centerX;
         this.baseY = baseY;

         // Only used for initial drawing. Not relevant later.
         var centerY = baseY;

         // Head.
         this.head = paper.ellipse(centerX, centerY, petParams.headRadiusX, petParams.headRadiusY).attr("fill", petParams.color);

         // Neck.
         this.neck = paper.rect(centerX - petParams.headRadiusX * 0.7, centerY, petParams.neckWidth, petParams.neckNormalHeight).attr("fill", petParams.color).toBack();

         // Body.
         this.bodyCenterX = centerX - petParams.bodyRadiusX;
         this.bodyCenterY = centerY + petParams.neckNormalHeight;
         this.body = paper.ellipse(this.bodyCenterX, this.bodyCenterY, petParams.bodyRadiusX, petParams.bodyRadiusY).attr("fill", petParams.color);

         // Legs.
         this.legLeft = paper.rect(this.bodyCenterX - petParams.bodyRadiusX * 0.3 - petParams.legsWidth, this.bodyCenterY, petParams.legsWidth, petParams.legsNormalHeight).attr("fill", petParams.color).toBack();
         this.legRight = paper.rect(this.bodyCenterX + petParams.bodyRadiusX * 0.3, this.bodyCenterY, petParams.legsWidth, petParams.legsNormalHeight).attr("fill", petParams.color).toBack();

         this.updateDrawing();
      };

      this.updateDrawing = function() {
         var legLength = petParams.legsNormalHeight + 10 * this.params.legs;
         legLength = Math.min(petParams.legsMaxHeight, Math.max(petParams.legsMinHeight, legLength));

         var neckLength = petParams.neckNormalHeight + 10 * this.params.neck;
         neckLength = Math.min(petParams.neckMaxHeight, Math.max(petParams.neckMinHeight, neckLength));

         var legY = this.baseY - legLength;
         var neckY = legY - neckLength;
         this.bodyCenterY = legY;
         this.legLeft.attr({
            y: legY,
            height: legLength
         });
         this.legRight.attr({
            y: legY,
            height: legLength
         });
         this.body.attr({
            cy: legY
         });
         this.neck.attr({
            y: neckY,
            height: neckLength
         });
         this.head.attr({
            cy: neckY
         });

         this.drawSpots();
      };

      this.drawSpots = function() {
         if(this.spots) {
            this.spots.remove();
         }
         var spotsAmount =  petParams.spotsNormal + Math.abs(this.params.spots);
         spotsAmount = Math.min(petParams.spotsMax, Math.max(petParams.spotsMin, spotsAmount));

         paper.setStart();
         var randomGenerator = new RandomGenerator(0);
         for(var index = 0; index < spotsAmount; index++) {
            var centerX = this.bodyCenterX + randomGenerator.nextInt(-40, 40);
            var centerY = this.bodyCenterY + randomGenerator.nextInt(-10, 10);
            var color = petParams.spotColors[index % petParams.spotColors.length];
            var radius = randomGenerator.nextInt(5, 10);
            paper.circle(centerX, centerY, radius).attr("fill", color);
         }
         this.spots = paper.setFinish();
      };

      this.updateParamsFromAnswer = function() {
         var amountsTaken = Beav.Array.init(totalBars, function(index) {
            return data[level].amountsTaken[index] + answer.amountsTaken[index];
         });
         this.setParams(amountsTakenToParams(amountsTaken));
      };

      this.updateParamsFromData = function() {
         this.setParams(amountsTakenToParams(data[level].amountsTaken));
      };

      this.isHealthy = function() {
         for(var param in this.params) {
            if(this.params[param] !== 0) {
               return false;
            }
         }
         return true;
      };

      this.setParams(params);
   }

   function amountsTakenToParams(amountsTaken) {
      // TODO
      // The user's aim is to make the params returned here be all zero.
      // The amounts taken are multiplied by a coefficient and then added to the parameters,
      // e.g. if legs == 7, then the length of the legs will be (healthyLength + (7*coefficient)).
      // The parameters can be negative. The function updateDrawing takes care of limiting the resulting
      // values to the legal ranges.
      if(level == "easy") {
         return {
            legs: 0,
            neck: amountsTaken[0] - 12,
            spots: amountsTaken[1] - 17
         };
      }
      if(level == "medium") {
         return {
            legs: 2*amountsTaken[0] + 2*amountsTaken[2] - 20,
            neck: 2*amountsTaken[2] - 14,
            spots: amountsTaken[0] + amountsTaken[1] - 23
         };
      }
      if(level == "hard") {
         var results = {
             legs: (amountsTaken[0]-18) + 2*(amountsTaken[1]-6) - (amountsTaken[2]-24),
             neck: (amountsTaken[1]-6) - (amountsTaken[0]-18) + 2*(amountsTaken[2]-24),
             spots: (amountsTaken[2]-24) + 2*(amountsTaken[0]-18) - (amountsTaken[1]-6),
         };
         if ((results.legs == 0) && (results.neck == 0) && (results.spots == 0)) {
            return results;
         }
         return { legs: -8, neck: -41, spots : -10 };
      }
   }

   function initPaper() {
      paper = subTask.raphaelFactory.create("anim", "anim", paperParams.width, paperParams.height);
      pet.draw(petParams.centerX, petParams.baseY);
      paper.text(petParams.centerX - petParams.bodyRadiusX, petParams.baseY + 12, "Votre animal").attr({"font-size": "16px"});
      
      targetPet = new Pet({
         legs: 0,
         neck: 0,
         spots: 0
      });
      targetPet.draw(petParams.targetCenterX, petParams.baseY);
      paper.rect(petParams.targetCenterX - 2 * petParams.bodyRadiusX, petParams.baseY - petParams.targetBorderHeight, petParams.targetBorderWidth, petParams.targetBorderHeight);
      paper.text(petParams.targetCenterX - 2 * petParams.bodyRadiusX + petParams.targetBorderWidth / 2, petParams.baseY + 12, "Votre objectif").attr({"font-size": "16px"});

      bars = [];
      for(var iBar = 0; iBar < totalBars; iBar++) {
         bars.push(new Bar(iBar));
      }
      resetAmountsTaken();

      drinkButton = new Button(paper, paperParams.drinkButtonX, paperParams.drinkButtonY, paperParams.drinkButtonWidth, paperParams.drinkButtonHeight, taskStrings.drink);
      drinkButton.hide();
      //drinkButton.click(clickDrink);

      var barsTotalWidth = (totalBars - 1) * barParams.xSpacing + barParams.width + arrowParams.width;
      retryButton = new Button(paper, barParams.xPos + barsTotalWidth / 2 - paperParams.drinkButtonWidth / 2, paperParams.height / 2 - paperParams.drinkButtonHeight / 2, paperParams.drinkButtonWidth, paperParams.drinkButtonHeight, taskStrings.retry);
      var retryBackground = paper.rect(barParams.xPos - 1, barParams.yPos - 1, barsTotalWidth + 2, barParams.height + 2);
      retryBackground.attr({
         fill: "white",
         opacity: 0.7,
         stroke: "none"
      });
      retryButton.addElement("semitrans", retryBackground);
      retryButton.elements.shadow.toFront();
      retryButton.elements.rect.toFront();
      retryButton.elements.text.toFront();
      retryButton.elements.transLayer.toFront();
      retryButton.changeOverlay({
         x: barParams.xPos, 
         y: barParams.yPos, 
         width: barsTotalWidth, 
         height: barParams.height
      });
      retryButton.click(clickRetry);
      refreshDrinkStatus();
   }

   function Bar(iBar) {
      var xPos = barParams.xPos + barParams.xSpacing * iBar;
      var yPos = barParams.yPos;
      var width = barParams.width;
      var height = barParams.height;
      var rectMaxHeight = height - barParams.fillTopPad;
      var rectTop = yPos + barParams.fillTopPad;
      var arrowXPos = xPos + width;

      // Fill.
      this.fillRect = paper.rect(xPos, rectTop, width, rectMaxHeight).attr({
         fill: barParams.fillColors[iBar]
      }).attr(barParams.contentAttr);

      // Empty.
      this.emptyRect = paper.rect(xPos, rectTop, width, 0).attr({
         fill: barParams.emptyColors[iBar]
      }).attr(barParams.contentAttr);

      // Border
      paper.rect(xPos, yPos, width, height).attr(barParams.borderAttr);

      // Arrow.
      this.arrow = new Arrow(arrowXPos);

      // Drag.
      this.draggable = paper.rect(arrowXPos, yPos, arrowParams.width, arrowParams.height).attr({
         fill: "green",
         opacity: 0
      }).data("bar", iBar);
      this.draggable.drag(onArrowMove, onArrowStart, onArrowEnd);

      // Scale marks.
      for(var amountTaken = 0; amountTaken <= barMax; amountTaken++) {
         var markY = amountTakenToYPos(amountTaken);
         var markWidth = barParams.markSmall;
         if(amountTaken % barParams.markBigJump === 0) {
            markWidth = barParams.markBig;
         }
         paper.path(["M", xPos + width, markY, "h", - markWidth]).attr(barParams.markAttr);
      }

      this.setAmountTaken = function(amountTaken) {
         this.amountTaken = amountTaken;
         var rateTaken = amountTaken / barMax;
         this.emptyRect.attr({
            height: rectMaxHeight * rateTaken
         });
      };

      this.setArrow = function(amountTaken) {
         var yPos = amountTakenToYPos(amountTaken);
         this.arrow.setY(yPos);
         this.arrow.setText(amountTaken - data[level].amountsTaken[iBar]);
         this.draggable.attr({
            y: yPos - arrowParams.height / 2
         });
      };
   }

   function onArrowStart(startX, startY) {
      var iBar = this.data("bar");
      dragOriginY = this.attrs.y + arrowParams.height / 2;
   }

   function onArrowMove(dx, dy) {
      if(dy === undefined || dy === null || isNaN(dy)) {
         return;
      }
      var iBar = this.data("bar");
      var yPos = dragOriginY + dy;
      var amountTaken = yPosToAmountTaken(yPos);
      amountTaken = Math.max(amountTaken, data[level].amountsTaken[iBar]);
      bars[iBar].setArrow(amountTaken);
      answer.amountsTaken[iBar] = amountTaken - data[level].amountsTaken[iBar];
      resetAmountsTaken();
      answer.clickedDrink = true;
   }

   function onArrowEnd() {

   }

   function amountTakenToYPos(amountTaken) {
      return barParams.yPos + barParams.fillTopPad + (amountTaken / barMax) * (barParams.height - barParams.fillTopPad);
   }

   function yPosToAmountTaken(yPos) {
      if(yPos <= barParams.yPos + barParams.fillTopPad) {
         return 0;
      }
      if(yPos >= barParams.yPos + barParams.height) {
         return barMax;
      }
      return Math.round(((yPos - barParams.yPos - barParams.fillTopPad) / (barParams.height - barParams.fillTopPad)) * barMax);
   }

   function clickDrink() {
      if(answer.clickedDrink) {
         return;
      }
      answer.clickedDrink = true;
      resetAmountsTaken();
      refreshDrinkStatus();
   }

   function clickRetry() {
      if(!answer.clickedDrink) {
         return;
      }
      answer.clickedDrink = false;
      resetAmountsTaken();
      refreshDrinkStatus();
   }

   function refreshDrinkStatus() {
      /*
      if(answer.clickedDrink) {
         retryButton.show();
         drinkButton.disable();
      }
      else {
         retryButton.hide();
         drinkButton.enable();
      }
      */
      retryButton.hide();
   }

   function resetAmountsTaken() {
      for(var iBar = 0; iBar < totalBars; iBar++) {
         var amountTaken = data[level].amountsTaken[iBar];
         if(answer.clickedDrink) {
            amountTaken += answer.amountsTaken[iBar];
         }
         bars[iBar].setAmountTaken(amountTaken);
         bars[iBar].setArrow(data[level].amountsTaken[iBar] + answer.amountsTaken[iBar]);
      }
      if(answer.clickedDrink) {
         pet.updateParamsFromAnswer();
      }
      else {
         pet.updateParamsFromData();
      }
      pet.updateDrawing();
   }

   function Arrow(xPos) {
      this.path = paper.path(arrowParams.path).attr(arrowParams.attr);
      this.text = paper.text(xPos + arrowParams.textXOffset, 0, "").attr(arrowParams.textAttr);
      
      this.setY = function(yPos) {
         var path = Raphael.transformPath(arrowParams.path, ["T", xPos, yPos]);
         this.path.attr({
            path: path
         });
         this.text.attr({
            y: yPos
         });
      };
      this.setText = function(text) {
         this.text.attr("text", text);
      };
   }

   function getResultAndMessage() {
      if(answer.clickedDrink && pet.isHealthy()) {
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
