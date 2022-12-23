function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
		  tile: { num: 1, img: "tile.png", side: cellSide, isObstacle: false, zOrder: 0 },
         green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 8, offsetX: -14, zOrder: 3},
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "green.png", side: cellSide, color: "vert" },
         paint: { img: "paint.png", side: cellSide, isPaint: true, isObstacle: false, category: "paint", zOrder: 2 }
      },
      maxInstructions: 25,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            robot: ["north", "south","west", "east", "obstacleNorth", "obstacleSouth","obstacleEast","obstacleWest","paint", "paintNorth", "paintSouth","paintWest","paintEast","greenCell"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["loops","logic"],
            singleBlocks: []
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkReachGreenArea
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 2],
                   [2, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2],
                   [2, 3, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],   
               ],
            initItems: [
                  { row: 2, col: 11, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 1, 1, 1, 1, 1, 2, 2],
                   [2, 1, 2, 2, 2, 1, 1, 2],
                   [2, 1, 2, 1, 2, 2, 1, 2],
                   [2, 1, 2, 1, 2, 2, 1, 2],
                   [2, 1, 2, 1, 1, 1, 1, 2],
                   [2, 1, 2, 2, 2, 2, 2, 2],
                   [2, 1, 2, 1, 1, 1, 2, 2],
                   [2, 1, 1, 1, 2, 1, 1, 2],
                   [2, 2, 2, 2, 2, 2, 1, 2],
                   [2, 2, 1, 1, 1, 2, 1, 2],
                   [2, 2, 1, 2, 1, 1, 1, 2],
                   [2, 3, 1, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2],   
               ],
            initItems: [
                  { row: 3, col: 3, dir: 1, type: "green_robot" }
               ]
         },
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 3, 1, 1, 1, 1, 2, 2],
                   [2, 2, 2, 2, 2, 1, 1, 2],
                   [2, 1, 1, 1, 2, 2, 1, 2],
                   [2, 2, 2, 1, 2, 2, 1, 2],
                   [2, 2, 2, 1, 1, 1, 1, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 3, col: 1, dir: 0, type: "green_robot" }
               ]
         },
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2],
                   [2, 1, 1, 1, 2, 2],
                   [2, 1, 2, 1, 1, 2],
                   [2, 1, 2, 2, 1, 2],
                   [2, 1, 2, 2, 1, 2],
                   [2, 1, 2, 1, 1, 2],
                   [2, 1, 2, 1, 2, 2],
                   [2, 1, 2, 2, 2, 2],
                   [2, 1, 1, 3, 2, 2],
                   [2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 6, col: 3, dir: 3, type: "green_robot" }
               ]
         },
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 3, 2, 1, 1, 1, 2, 2],
                   [2, 1, 2, 1, 2, 1, 1, 2],
                   [2, 1, 1, 1, 2, 2, 1, 2],
                   [2, 2, 2, 2, 2, 1, 1, 2],
                   [2, 1, 2, 1, 1, 1, 2, 2],
                   [2, 1, 2, 1, 2, 2, 2, 2],
                   [2, 1, 2, 1, 1, 2, 2, 2],
                   [2, 1, 2, 2, 1, 1, 2, 2],
                   [2, 1, 2, 2, 2, 1, 1, 2],
                   [2, 1, 2, 2, 2, 2, 1, 2],
                   [2, 1, 1, 2, 1, 1, 1, 2],
                   [2, 2, 1, 1, 1, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2],   
               ],
            initItems: [
                  { row: 5, col: 1, dir: 1, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, null, null, true);
   