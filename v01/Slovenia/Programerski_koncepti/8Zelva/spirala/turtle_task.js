function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            easy: {turtle: ["moveamount", "turnleftamount", "turnrightamount"]},
            medium: {turtle: ["moveamount", "movebackamount", "turnleftamount",  "turnrightamount", "peneither"]},
            hard: {turtle: ["moveamount", "turnleftamount",  "turnrightamount", "peneither"]},
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables"],
            singleBlocks: {
                easy: ["controls_repeat_ext", "math_number"],
                medium: ["controls_repeat_ext", "math_number", "math_arithmetic"],
                hard: ["controls_repeat_ext", "math_number", "math_arithmetic"],
            }
         }
      },
      overlayFileName: "sand.png",
      turtleStepSize: 5,
      maxInstructions: {easy: 8, medium: 24, hard: 24},
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
          drawSolution : function(turtle) {turtle.move(2); turtle.turn(120); turtle.move(2); turtle.turn(120); turtle.move(2)},
         }],
         medium: [{
             drawSolution : function(turtle) {turtle.stop_painting(); turtle.move(-1); turtle.start_painting(); turtle.move(3); turtle.turn(120); turtle.move(2); turtle.turn(130); turtle.move(1); turtle.turn(140)},
         }],
         hard: [{
             drawSolution : function(turtle) {turtle.stop_painting(); turtle.move(1); turtle.start_painting(); turtle.move(0.1); turtle.turn(90); turtle.move(0.2); turtle.turn(90); turtle.move(0.3); turtle.turn(90); turtle.move(0.4); turtle.turn(90); turtle.move(0.5); turtle.turn(90); turtle.move(0.6); turtle.turn(90); turtle.move(0.7); turtle.turn(90); turtle.move(0.8); turtle.turn(90); turtle.move(0.9); turtle.turn(90); turtle.move(1.0); turtle.turn(90); turtle.move(1.1); turtle.turn(90); turtle.move(1.2); turtle.turn(90); turtle.move(1.3); turtle.turn(90); turtle.move(1.4); turtle.turn(90); turtle.move(1.5); turtle.turn(90); turtle.move(1.6); turtle.turn(90); turtle.move(1.7); turtle.turn(90); turtle.move(1.8); turtle.turn(90); turtle.move(1.9); turtle.turn(90); turtle.move(2.0); turtle.turn(90);},
         }],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
