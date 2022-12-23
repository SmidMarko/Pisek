function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
             easy: {turtle: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount", "peneither"]},
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables", "functions"],
            singleBlocks: {
                easy: ["controls_repeat_ext", "math_number", "math_arithmetic"],
            }
         }
      },
      overlayFileName: "sand.png",
      turtleStepSize: 0.1,
      coords : { x: 0, y: 150},
      maxInstructions: {easy: 0},
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
              for (var n = 60; n < 100; n=n+10) {
                  turtle.turn(-30);
                  turtle.move(n);
                  turtle.turn(-120);
                  turtle.move(n);
                  turtle.turn(-120);
                  turtle.stop_painting();
                  turtle.move(n/4);
                  turtle.turn(-60);
                  turtle.start_painting();
                  turtle.move(n/2);
                  turtle.turn(120);
                  turtle.move(n/2);
                  turtle.turn(60);
                  turtle.move(n);
                  turtle.turn(120);
                  turtle.move(n);
                  turtle.turn(120);
                  turtle.stop_painting();
                  turtle.move(n/4);
                  turtle.turn(60);
                  turtle.start_painting();
                  turtle.move(n/2);
                  turtle.turn(-120);
                  turtle.move(n/2);
                  turtle.stop_painting();
                  turtle.turn(-120);
                  turtle.move(3*n/4);
                  turtle.turn(90);
                  turtle.start_painting();
              }
          },
      }],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
   
