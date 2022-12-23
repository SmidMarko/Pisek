function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
		 tile: { num: 1, img: "tile.png", side: cellSide, isObstacle: false, zOrder: 0 },
         green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14,  zOrder: 1},
         obstacle: { num: 2, img: "ozadje.png", side: cellSide, category: "obstacle", isObstacle: true },
         obstacle2: { num: 3, img: "ozadje_2.png", side: cellSide, category: "obstacle", isObstacle: true },
         green: { num: 9, img: "green.png", side: cellSide, color: "vert" }, 
		 hole: { num: 7, img: "hole.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 8, img: "marble.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 }, 
         marker: { num: 4, img: "marker.png", side: cellSide, category: "paint", isObstacle: false, isMarker: true, hasColor: true, color: "marker", zOrder: 0}
      },
      maxInstructions: {
		  easy: 5,
		  hard: 12
	  },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {     
			robot: {
				easy: ["east", "west", "north", "south",  "markedCell"/*, "pickTransportable", "dropTransportable", "onTransportable", "onHole"*/],
				hard: ["east", "west", "north", "south", "pickTransportable", "dropTransportable", "onTransportable", "onHole"]
			}
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat", "controls_if"]
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: true,
      checkEndCondition: {
		  easy: robotEndConditions.checkReachGreenArea, //robotEndConditions.checkMarblesInHoles 
		  hard: robotEndConditions.checkMarblesInHoles,
	  }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2],
                   [3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 9, 2],
                   [3, 3, 2, 2, 2, 1, 1, 4, 2, 2, 2, 2],
                   [2, 2, 2, 1, 1, 4, 2, 2, 2, 3, 3, 3],
                   [2, 1, 1, 4, 2, 2, 2, 2, 3, 3, 3, 3],
                   [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3]
               ],
            initItems: [
                  { row: 4, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2],
                   [3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 9, 2],
                   [2, 3, 3, 3, 2, 1, 1, 1, 1, 4, 2, 2],
                   [2, 2, 3, 2, 1, 4, 2, 2, 2, 2, 2, 3],
                   [2, 1, 1, 1, 4, 2, 2, 2, 3, 3, 3, 3],
                   [2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]
               ],
            initItems: [
                  { row: 4, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1],
                   [1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1],
                   [1, 1, 1, 8, 1, 8, 1, 1, 8, 1, 8, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 4, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 7, 1, 7, 1, 1, 1, 1, 7, 1],
                   [1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 7, 7, 1, 1, 1],
                   [1, 1, 1, 8, 8, 8, 1, 8, 8, 1, 8, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 4, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "hard"], null, true);
   