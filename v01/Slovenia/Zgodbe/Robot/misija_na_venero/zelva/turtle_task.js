function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
			 turtle: {
				 easy: ["moveamountvalue", "turnleft", "turnright"],
				 medium: ["moveamountvalue", "turnleft", "turnright", "peneither"],
				 hard:  ["moveamountvalue", "turnleftamountvalue", "turnrightamountvalue", "peneither", "colourvalue"],
			 }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: []
         }
      },
      overlayFileName: "sand.png",
      turtleStepSize: 2,
      maxInstructions: {easy: 3, medium: 9, hard: 8},
      blocklyColourTheme: "bwinf",
      checkEndEveryTurn: false,
      checkEndCondition: function(context, lastTurn) {
         if (lastTurn) {
            var userImage = context.turtle.invisibleTurtle.drawingContext.getImageData(0, 0, 300, 300);
            var solutionImage = context.turtle.invisibleSolutionTurtle.drawingContext.getImageData(0, 0, 300, 300);
            var len = Math.min(userImage.data.length, solutionImage.data.length);
            var delta = 0;
            var fill = 0;
            var empty = 0;
            // Pixels are in RGBA format.  Only check the Alpha bytes.
            for (var i = 3; i < len; i += 4) {
               // Check the Alpha byte.
               if (Math.abs(userImage.data[i] - solutionImage.data[i]) > 127) {
                  delta++;
               }
               if (solutionImage.data[i] > 127)
                  fill++;
               else
                  empty++;
            }
            
            if (delta < Math.min(fill,empty) * 0.1) {
               context.success = true;
               throw(window.languageStrings.messages.paintingCorrect);
            }
            else {
               context.success = false;
               throw(window.languageStrings.messages.paintingWrong);
            }
         }
      },
      computeGrade: function(context, message) {
         var rate = 0;
         if (context.success) {
            rate = 1;
            if (context.nbMoves > 100) {
               rate /= 2;
               message += strings.moreThan100Moves;
            }
         }
         return {
            successRate: rate,
            message: message
         };
      }
   };

   subTask.data = {
      easy: [{
          drawSolution : function(turtle) {turtle.move(5); turtle.turn(90); turtle.move(5)},
         }],
		 medium: [{
          drawSolution : function(turtle) { turtle.stop_painting(); turtle.move(1); turtle.start_painting(); turtle.turn(90); turtle.move(1); turtle.stop_painting(); turtle.move(1); turtle.start_painting(); turtle.move(1) },
         }],
		 hard: [{
          drawSolution : function(turtle) { turtle.stop_painting(); turtle.move(1); turtle.start_painting(); turtle.move(1); turtle.set_colour("#f00000"); turtle.move(1); turtle.set_colour("#3333ff"); turtle.move(1) },
         }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   
