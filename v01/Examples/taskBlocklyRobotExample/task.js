function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0 },
         paint: { img: "paint.png", side: cellSide, category: "paint", isObstacle: false, hasColor: true, color: "gris" },
         marker: { num: 2, img: "marker.png", side: cellSide, category: "paint", isObstacle: false, isMarker: true, hasColor: true, color: "marker" }
      },
      maxInstructions: 15,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "north", "south", "paint", "markedCell"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat", "controls_if"]
         },
         variables: ["test"]
      },
      additionalBlocksByLevel: {},
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: function(context, lastTurn) {
         if (lastTurn) {
            for (var iRow = 0; iRow < context.tiles.length; iRow++) {
               var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
               for (var iCol = 0; iCol < row.length; iCol++) {
                  var tile = row[iCol];
                  var paints = context.getItems(iRow, iCol, {color: "gris"});
                  if ((paints.length > 0) != (tile == 2)) {
                     context.success = false;
                     throw("Le robot n'a pas peint les cases exactement comme souhaité.");
                  }
               }
            }
            context.success = true;
            throw("Bravo, vous avez reproduit le motif !");
         }
      },
      computeGrade: function(context, message) {
         var rate = 0;
         if (context.success) {
            rate = 1;
         }
         return {
            successRate: rate,
            message: message
         };
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
                   [1, 1, 1, 2, 1, 1, 2, 1, 1, 1],
                   [1, 1, 2, 1, 1, 1, 1, 2, 1, 1],
                   [1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
                   [1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
                   [1, 2, 1, 1, 2, 2, 1, 1, 2, 1],
                   [1, 2, 1, 1, 2, 2, 1, 1, 2, 1],
                   [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 9, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, null, null, true);
   
