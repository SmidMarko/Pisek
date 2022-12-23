function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
		 tile: { num: 1, img: "tile.png", side: cellSide, isObstacle: false, zOrder: 0 },
         green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
         obstacle: { num: 3, img: "ozadje.png", side: cellSide, category: "obstacle", isObstacle: true },
         obstacle2: { num: 2, img: "ozadje_2.png", side: cellSide, category: "obstacle", isObstacle: true },
         green: { num: 4, img: "green.png", side: cellSide, color: "vert", category: "green" },
         itemX: { num: 6, img: "X.png", img2: "X2.png", side: cellSide, category: "observable", observed: false }
      },
      maxInstructions: {
		  easy: 7,
		  medium: 9,
		  hard: 11,
	  },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "north", "south"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"]
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkReachGreenArea
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2],
                   [2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 4, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 2, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 4, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 11, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 4, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                   [2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 11, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   
