function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            easy: {turtle: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount"]},
            medium: {turtle: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount", "peneither"]},
            hard: {turtle: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount", "peneither"]},
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat_ext", "math_number"]
         }
      },
      overlayFileName: "sand.png",
      turtleStepSize: 5,
      maxInstructions: {easy: 12, medium: 14, hard: 14},
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
          drawSolution : function(turtle) {turtle.turn(342); turtle.move(3); turtle.turn(144); turtle.move(3); turtle.turn(144); turtle.move(3); turtle.turn(144); turtle.move(3); turtle.turn(144); turtle.move(3); turtle.turn(144);},
         }],
         medium: [{
             drawSolution : function(turtle) {turtle.stop_painting(); turtle.move(-1); turtle.start_painting(); turtle.turn(306); turtle.move(2); turtle.turn(72); turtle.move(2); turtle.turn(72); turtle.move(2); turtle.turn(72); turtle.move(2); turtle.turn(72); turtle.move(2); turtle.turn(72);},
         }],
         hard: [{
             drawSolution : function(turtle) {turtle.stop_painting(); turtle.move(-1); turtle.turn(306); turtle.start_painting(); turtle.move(3); turtle.turn(108); turtle.move(3); turtle.turn(108); turtle.move(3); turtle.turn(108); turtle.move(3); turtle.turn(108); turtle.move(3); turtle.turn(108); turtle.move(3); turtle.turn(108); turtle.move(3); turtle.turn(108); turtle.move(3); turtle.turn(108); turtle.move(3); turtle.turn(108); turtle.move(3); turtle.turn(108);},
         }],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
