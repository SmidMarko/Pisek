var animationFeatures = function(selector) {
   // Internal parameters
   var borderSize = 2;
   var movingTime = 300;
   var speedFactor = 2;
   var cellSize = 30;
   var nbLines;
   var nbColumns;
   var margin = 10;
   var animTime = 300;
   var animDelay = 600;

   var robot;
   var posRobot = [];
   var origPosRobot = [];   

   var cellContent = [];
   var origCellContent = [];
   var objects = [];
   var nbBonus = 0;

   var animRobot = function(timeAnim, timeDelay) {
      var x =  margin + posRobot[1] * cellSize;
      var y = margin + posRobot[0] * cellSize;
      var anim = Raphael.animation({'x' : x, 'y' : y }, timeAnim);
      robot.animate(anim.delay(timeDelay));
   };

   var animBox = function(box, newLine, newCol, timeAnim, timeDelay) {
      var x =  margin + newCol * cellSize;
      var y = margin + newLine * cellSize;
      var anim = Raphael.animation({'x' : x, 'y' : y }, timeAnim);
      box.animate(anim.delay(timeDelay));
   };

   return {

      initGrid : function(args, cb) {
         nbLines = parseInt(args[0]);
         nbColumns = parseInt(args[1]);
         posRobot[0] = parseInt(args[2]);
         posRobot[1] = parseInt(args[3]);
         origPosRobot[0] = posRobot[0];
         origPosRobot[1] = posRobot[1];
         for(var iLine = 0; iLine < nbLines; iLine++) {
            cellContent[iLine] = [];
            origCellContent[iLine] = [];
            for(var iCol = 0; iCol < nbColumns; iCol++) { 
               cellContent[iLine][iCol] = 0;
               origCellContent[iLine][iCol] = 0;
            }
         }
         cb();
      },

      setItem: function(args, cb, item) {
         var iLine = parseInt(args[0]);
         var iCol = parseInt(args[1]);
         origCellContent[iLine][iCol] = item;
         cellContent[iLine][iCol] = item;
         cb();
      },
      
      setBox: function(args, cb) {
         this.setItem(args, cb, 1);
      },

      setBonus: function(args, cb) {
         this.setItem(args, cb, 2);
      },
      
      getInput: function() {
         // TODO
      },

      stop: function (cb) {
         posRobot[0] = origPosRobot[0];
         posRobot[1] = origPosRobot[1];
         robot.attr({x :  margin + posRobot[1] * cellSize, y : margin + posRobot[0] * cellSize});
         for(var iLine = 0; iLine < nbLines; iLine++) {
            for(var iCol = 0; iCol < nbColumns; iCol++) {
               if ((cellContent[iLine][iCol] != 0) && (objects[iLine][iCol] != null)) {
                  objects[iLine][iCol].remove();
               }
               cellContent[iLine][iCol] = origCellContent[iLine][iCol];
            }
         }
         for(var iLine = 0; iLine < nbLines; iLine++) {
            for(var iCol = 0; iCol < nbColumns; iCol++) {
               if (cellContent[iLine][iCol] == 1) {
                  objects[iLine][iCol] = paper.rect(margin + iCol * cellSize, margin + iLine * cellSize, cellSize, cellSize)
                     .attr({'fill' : '#808080'});
               }
               else if (cellContent[iLine][iCol] == 2) {
                   objects[iLine][iCol] = paper.circle(margin + iCol * cellSize + cellSize/2, margin + iLine * cellSize+ cellSize/2, 8)
                     .attr({ "stroke": "red", "stroke-width": '4' });  
               }
            }
         }
         cb();
      },
      
      startSimu: function(args, cb) {
         $(selector + " .simuShow").html("");
         $(selector + " .simuMsg").html("");

         paper = Raphael($(selector + " .simuShow")[0],(nbColumns + 2) * cellSize + 2 * margin, nbLines * cellSize + 2 * margin);

         //Quadrillage
         for(var iLine = 0; iLine < nbLines; iLine++) {
            objects[iLine] = [];
            for(var iCol = 0; iCol < nbColumns; iCol++) {
               objects[iLine][iCol] = null;
               var rect = paper.rect(margin + iCol * cellSize, margin + iLine * cellSize, cellSize, cellSize);
               var fill = 'white';
               rect.attr({'stroke': 'black', 'fill': fill});
            }
         }
         var robotImg = $("#robot").attr("src");
         robot = paper.image(robotImg,margin + posRobot[1]*cellSize, margin + posRobot[0] * cellSize, cellSize, cellSize);
         robot.attr({'fill' : 'red'});
         this.stop(cb);
      },
      
      displayMsg: function(args, cb) {
         $(selector + " .simuMsg").html(args[0]);
         cb();
      },

      removeBonus: function(bonus, timeDelay) {
         setTimeout(function() {
            bonus.remove();
         }, timeDelay);
      },

      move: function(args, cb) {
         var dL = parseInt(args[0]);
         var dC = parseInt(args[1]);
         var dep = parseInt(args[2]);
         var timeStep = animTime / dep;
         var box = null;
         var boxStartL;
         var boxEndL;
         var boxEndC;
         var boxEndTime;
         for(var i = 0; i < dep; i++) {
            var nL = posRobot[0] + dL;
            var nC = posRobot[1] + dC;
            if(nL < 0 || nL >= nbLines || nC < 0 || nC >= nbColumns) {
               break;
            }
            if (cellContent[nL][nC] == 2) {
               nbBonus++;
               this.removeBonus(objects[nL][nC], (i + 1) * timeStep);
               cellContent[nL][nC] = 0;
            } else if(cellContent[nL][nC] == 1) {
               n2L = nL+dL;
               n2C = nC+dC;
               if(n2L < 0 || n2L >= nbLines || n2C < 0 || n2C >= nbColumns || cellContent[n2L][n2C] != 0)
                  break;
               if (box == null) {
                  box = objects[nL][nC];
                  boxStartTime = i * timeStep;
               }
               boxEndL = n2L;
               boxEndC = n2C;
               boxEndTime = (i + 1) * timeStep;
               cellContent[n2L][n2C] = cellContent[nL][nC];
               objects[n2L][n2C] = objects[nL][nC];
               cellContent[nL][nC] = 0;
            }
            posRobot[0] = nL;
            posRobot[1] = nC;
         }
         animRobot(animTime, 0);
         if (box != null) {
            animBox(box, boxEndL, boxEndC, boxEndTime - boxStartTime, boxStartTime);
         }
         setTimeout(cb, (dep+1)*timeStep);
      }
   }
};

var animationExampleCmds = [ 
   ["initGrid", "6", "8", "0", "0"], 
   ["setBox", "0", "1"], 
   ["setBox", "0", "3"], 
   ["setBox", "0", "4"], 
   ["setBox", "0", "5"], 
   ["setBox", "0", "6"], 
   ["setBox", "0", "7"], 
   ["setBox", "1", "0"], 
   ["setBox", "1", "3"], 
   ["setBox", "1", "5"], 
   ["setBox", "1", "7"], 
   ["setBox", "2", "2"], 
   ["setBox", "2", "4"], 
   ["setBox", "2", "6"], 
   ["setBox", "3", "0"], 
   ["setBox", "3", "1"], 
   ["setBox", "3", "3"], 
   ["setBox", "3", "5"], 
   ["setBox", "3", "6"], 
   ["setBox", "4", "1"], 
   ["setBox", "4", "4"], 
   ["setBox", "5", "2"], 
   ["setBox", "5", "3"], 
   ["setBox", "5", "5"], 
   ["setBox", "5", "6"], 
   ["setBonus", "2", "1"], 
   ["setBonus", "3", "2"], 
   ["setBonus", "0", "5"], 
   ["setBonus", "1", "6"], 
   ["startSimu"], 
   ["move", "1", "0", "1"], 
   ["move", "0", "1", "2"], 
   ["move", "-1", "0", "1"], 
   ["move", "0", "-1", "1"], 
   ["displayMsg", "Votre robot n'a obtenu aucun bonus"]
];
