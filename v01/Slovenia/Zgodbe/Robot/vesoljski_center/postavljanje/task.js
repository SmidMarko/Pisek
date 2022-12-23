function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
		 tile: { num: 1, img: "tile.png", side: cellSide, isObstacle: false, zOrder: 0 },
         green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14, zOrder: 3},
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "green.png", side: cellSide, color: "vert" },
         pill1: { num: 4, img: "pill.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
         marker: { num: 9, img: "marker.png", side: cellSide, isMarker: true, category: "marker", isObstacle: false, hasColor: true, color: "marker", zOrder: 1 },
         paint: { img: "obstacle.png", side: cellSide, isPaint: true, isObstacle: true, category: "paint", zOrder: 2 }
      },
      maxInstructions: {
			easy: 3,
			medium: 6,
			hard: 11,
	  },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "north", "west", "south", "paint"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: []
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkMarkersPainted
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 9, 1, 1, 1, 1],
               ],
            initItems: [
                  { row: 0, col: 3, dir: 0, type: "green_robot" }
               ]
         }
      ],
	   medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 2, 9, 1, 1, 1],
                   [1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
               ],
            initItems: [
                  { row: 2, col: 3, dir: 0, type: "green_robot" }
               ]
         }
      ],
	   hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 9, 2, 2, 2, 2, 9, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
               ],
            initItems: [
                  { row: 2, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   