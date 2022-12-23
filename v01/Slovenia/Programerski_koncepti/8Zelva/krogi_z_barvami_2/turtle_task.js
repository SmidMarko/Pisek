function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            easy: {turtle: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount", "peneither", "colourvalue"]},
            medium: {turtle: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount", "peneither", "colourvalue"]},
            hard: {turtle: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount", "peneither", "colourvalue"]},
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat_ext", "math_number"]
         }
      },
      overlayFileName: "sand.png",
      turtleStepSize: 0.1,
      maxInstructions: {easy: 0, medium: 0, hard: 0},
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
            for (var i = 3; i < len; i += 1) {
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
              var colourIsSet = 0;
              for (i = 0; i < 360; i++) {
                  turtle.turn(1);
                  turtle.move(1);
                  if (i%9 === 0 && colourIsSet == 0) {
                      turtle.set_colour("#3333ff");
                      colourIsSet = 1;
                  }
                  else if (i%9 === 0 && colourIsSet == 1) {
                      turtle.set_colour("#f00000");
                      colourIsSet = 0;
                  }
              }
          },
         }],
         medium: [{

             drawSolution : function(turtle) {
                 turtle.stop_painting();
                 turtle.move(-120);
                 turtle.start_painting();
                 var colourIsSet = 0;
                 for (i = 0; i < 180; i++) {
                     turtle.move(1);
                     if (i%6 === 0 && colourIsSet == 0) {
                         turtle.set_colour("#33ff33");
                         colourIsSet = 1;
                     }
                     else if (i%6 === 0 && colourIsSet == 1) {
                         turtle.set_colour("#f00000");
                         colourIsSet = 0;
                     }
                 }
                 for (i = 0; i < 180; i++) {
                     turtle.turn(1);
                     turtle.move(1);
                     if (i%6 === 0 && colourIsSet == 0) {
                         turtle.set_colour("#33ff33");
                         colourIsSet = 1;
                     }
                     else if (i%6 === 0 && colourIsSet == 1) {
                         turtle.set_colour("#f00000");
                         colourIsSet = 0;
                     }
                 }
             },
         }],
         hard: [{
             drawSolution : function(turtle) {
                 turtle.set_colour("#ffff33");
                 for (i = 0; i < 360; i++) {
                     turtle.turn(1);
                     turtle.move(1);
                 }
                 turtle.set_colour("#ff6600");
                 for (k = 0; k < 18; k++) {
                     turtle.stop_painting();
                     for (i = 0; i < 20; i++) {
                         turtle.turn(1);
                         turtle.move(1);
                     }
                     turtle.start_painting();
                     turtle.turn(-90);
                     turtle.move(30);
                     turtle.move(-30);
                     turtle.turn(90);
                 }
             },
         }],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
