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
      coords : { x: 0, y: 150},
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
          drawSolution : function(turtle) {
              turtle.turn(-30);
              turtle.move(60);
              turtle.turn(-120);
              turtle.move(60);
              turtle.turn(-120);
              turtle.stop_painting();
              turtle.move(15);
              turtle.turn(-60);
              turtle.start_painting();
              turtle.move(30);
              turtle.turn(120);
              turtle.move(30);

          },
         }],
         medium: [{
             drawSolution : function(turtle) {
                turtle.turn(-30);
                turtle.move(60);
                turtle.turn(-120);
                turtle.move(60);
                turtle.turn(-120);
                turtle.stop_painting();
                turtle.move(15);
                turtle.turn(-60);
                turtle.start_painting();
                turtle.move(30);
                turtle.turn(120);
                turtle.move(30);
                turtle.turn(60);
                turtle.move(60);
                turtle.turn(120);
                turtle.move(60);
                turtle.turn(120);
                turtle.stop_painting();
                turtle.move(15);
                turtle.turn(60);
                turtle.start_painting();
                turtle.move(30);
                turtle.turn(-120);
                turtle.move(30);
                },
         }],
         hard: [{
             drawSolution : function(turtle) {
               for (var i = 0; i < 4; i++) {
                   turtle.turn(-30);
                   turtle.move(60);
                   turtle.turn(-120);
                   turtle.move(60);
                   turtle.turn(-120);
                   turtle.stop_painting();
                   turtle.move(15);
                   turtle.turn(-60);
                   turtle.start_painting();
                   turtle.move(30);
                   turtle.turn(120);
                   turtle.move(30);
                   turtle.turn(60);
                   turtle.move(60);
                   turtle.turn(120);
                   turtle.move(60);
                   turtle.turn(120);
                   turtle.stop_painting();
                   turtle.move(15);
                   turtle.turn(60);
                   turtle.start_painting();
                   turtle.move(30);
                   turtle.turn(-120);
                   turtle.move(30);
                   turtle.stop_painting();
                   turtle.turn(-120);
                   turtle.move(45);
                   turtle.turn(90);
                   turtle.start_painting();
               }
                },
         }],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
