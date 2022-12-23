function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
             easy: {turtle: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount", "peneither"]},
             medium: {turtle: ["moveamount", "movebackamount", "turnleftamount",  "turnrightamount", "peneither"]},
             hard: {turtle: ["moveamount", "movebackamount", "turnleftamount",  "turnrightamount", "peneither"]},
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables", "functions"],
            singleBlocks: {
                easy: ["controls_repeat_ext", "math_number", "math_arithmetic"],
                medium: ["controls_repeat_ext", "math_number", "math_arithmetic"],
                hard: ["controls_repeat_ext", "math_number", "math_arithmetic"],
            }
         }
      },
      overlayFileName: "sand.png",
      turtleStepSize: 0.1,
      coords : { x: 5, y: 160},
      maxInstructions: 47,
      blocklyColourTheme: "bwinf",
      checkEndEveryTurn: false,
      checkEndCondition: function(context, lastTurn) {
         if (lastTurn) {
            var userImage = context.turtle.invisibleTurtle.drawingContext.getImageData(0, 0, 390, 300);
            var solutionImage = context.turtle.invisibleSolutionTurtle.drawingContext.getImageData(0, 0, 390, 300);
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
             drawSolution : function(turtle) {
               for (var i = 60; i < 100; i+=10) {
                   for (var j = 0; j < 3; j++) {
                       turtle.move(i);
                       turtle.turn(-90);
                   }
                   turtle.stop_painting();
                   turtle.move(i/4);
                   turtle.turn(-90);
                   turtle.start_painting();
                   turtle.move(i/2);
                   turtle.turn(90);
                   turtle.move(i/2);
                   turtle.turn(90);
                   turtle.move(i/2);
                   for (var j = 0; j < 3; j++) {
                       turtle.move(i);
                       turtle.turn(90);
                   }
                   turtle.stop_painting();
                   turtle.move(i/4);
                   turtle.turn(90);
                   turtle.start_painting();
                   for (var j = 0; j < 3; j++) {
                       turtle.move(i/2);
                       turtle.turn(-90);
                   }
                   turtle.stop_painting();
                   turtle.move(3*i/4);
                   turtle.turn(90);
                   turtle.start_painting();
               }
             },
         }],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
   
