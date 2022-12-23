function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
		 tile: { num: 1, img: "tile.png", side: cellSide, isObstacle: false, zOrder: 0 },
         green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14, zOrder: 2},
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "green.png", side: cellSide, color: "vert" },
         pill1: { num: 4, img: "pill.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
		 hole: { num: 7, img: "hole.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 8, img: "marble.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 }
      },
      maxInstructions: {
		  easy: 6,
		  medium: 17,
		  hard: 18,
	  },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "north", "west", "south", "pickTransportable", "dropTransportable"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: []
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkMarblesInHoles 
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 8, 1, 7, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 2, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
	   medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 8, 1, 7, 1, 1],
                   [1, 1, 1, 7, 1, 8, 1, 1],
                   [1, 1, 1, 8, 1, 7, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 2, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
	   hard: [
        {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 7, 1, 1, 1],
                   [1, 1, 1, 8, 7, 8, 1, 1],
                   [1, 1, 1, 8, 1, 1, 7, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 2, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   