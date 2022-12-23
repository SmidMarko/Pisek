function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
		 tile: { num: 1, img: "tile.png", side: cellSide, isObstacle: false, zOrder: 0 },
         green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14, zOrder: 1},
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "green.png", side: cellSide, color: "vert" }
      },
      maxInstructions: {
		  easy: 3,
		  medium: 4,
		  hard: 4,
	  },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "north", "west", "south"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
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
                   [1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 3, 1],
                   [1, 1, 1, 1, 1, 1],
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
	   medium: [
         {
            tiles: [
                  [1, 1, 1, 1, 1],
                   [1, 1, 2, 1, 1],
                   [1, 3, 2, 1, 1],
                   [1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1],
               ],
            initItems: [
                  { row: 2, col: 3, dir: 2, type: "green_robot" }
               ]
         }
      ],
	   hard: [
         {
            tiles: [
                  [1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1],
                   [1, 1, 2, 1, 1],
                   [1, 1, 3, 1, 1],
                   [1, 1, 1, 1, 1],
               ],
            initItems: [
                  { row: 1, col: 2, dir: 1, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   