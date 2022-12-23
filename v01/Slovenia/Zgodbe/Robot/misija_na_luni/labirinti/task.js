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
         green: { num: 9, img: "green.png", side: cellSide, color: "vert", category: "green" },
         marker: { num: 4, img: "marker.png", side: cellSide, category: "paint", isObstacle: false, isMarker: true, hasColor: true, color: "marker", zOrder: 0}
      },
      maxInstructions: {
		  easy: 10,
		  medium: 6,
		  hard: 14
	  },
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {     
			robot: {
				easy: ["forward", "greenCell", "left", "markedCell"],
				medium: ["forward", "greenCell", "right", "markedCell"],
				hard:["forward", "greenCell", "left", "right","markedCell"]
			},
		 },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {
               easy: ["loops", "logic"],
               medium: ["loops", "logic"],
               hard: ["variables","math","loops", "logic"]
            },
            singleBlocks: []
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkReachGreenArea //robotEndConditions.checkMarblesInHoles 
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [3, 3, 2, 4, 1, 1, 1, 1, 4, 2, 9, 1, 1, 4, 2],
                   [3, 2, 2, 1, 2, 2, 4, 1, 1, 1, 1, 4, 2, 1, 2],
                   [2, 2, 2, 1, 2, 2, 4, 1, 1, 1, 1, 1, 1, 4, 2],
                   [2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2],
                   [2, 2, 2, 4, 1, 1, 1, 1, 1, 1, 1, 4, 2, 3, 3],
                   [2, 1, 1, 1, 1, 1, 1, 1, 4, 2, 2, 2, 2, 3, 3],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]
               ],
            initItems: [
                  { row: 6, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 4, 1, 4, 2, 2, 2, 2, 9, 1, 1, 1, 1, 4, 2],
                   [2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
                   [2, 1, 2, 1, 2, 4, 4, 2, 3, 3, 3, 3, 2, 1, 2],
                   [2, 4, 1, 1, 1, 1, 4, 2, 3, 3, 3, 3, 2, 1, 2],
                   [2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2],
                   [2, 1, 1, 4, 2, 4, 1, 1, 1, 1, 1, 1, 1, 4, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 6, col: 1, dir: 0, type: "green_robot" }
               ]
         },
	 ],
		 medium: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3],
                   [2, 2, 2, 4, 1, 1, 1, 1, 4, 2, 2, 2, 2, 2, 2],
                   [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2],
                   [2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
                   [3, 3, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2],
                   [3, 3, 2, 2, 2, 4, 1, 1, 1, 1, 1, 4, 2, 2, 2],
                   [3, 3, 3, 3, 2, 4, 1, 1, 4, 2, 2, 9, 2, 3, 3],
                   [3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3]
               ],
            initItems: [
                  { row: 2, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
                   [2, 1, 1, 1, 1, 4, 2, 2, 4, 1, 1, 1, 4, 2, 3],
                   [2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 3],
                   [2, 4, 1, 1, 1, 1, 1, 1, 1, 4, 2, 2, 1, 2, 3],
                   [2, 1, 4, 4, 2, 1, 2, 2, 4, 4, 2, 2, 1, 2, 2],
                   [2, 1, 4, 1, 1, 4, 2, 2, 2, 2, 2, 4, 1, 9, 2],
                   [2, 4, 1, 4, 2, 2, 2, 3, 3, 3, 2, 4, 4, 2, 2],
                   [2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         },
	  ],
		 hard: [
         {
            tiles: [
                   [3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
                   [3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 4, 1, 1, 9, 2],
                   [3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2],
                   [2, 2, 2, 4, 1, 1, 1, 1, 1, 1, 4, 2, 3, 3, 3],
                   [2, 1, 1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
                   [2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
               ],
            initItems: [
                  { row: 4, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [3, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2],
                   [3, 3, 3, 3, 2, 2, 4, 1, 1, 1, 9, 2],
                   [3, 3, 3, 2, 2, 4, 4, 2, 2, 2, 2, 2],
                   [3, 3, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 3],
                   [2, 2, 4, 4, 2, 2, 2, 3, 2, 2, 3, 3],
                   [2, 1, 4, 2, 2, 3, 3, 3, 3, 3, 3, 3],
                   [2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3]
               ],
            initItems: [
                  { row: 6, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
                   [2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 4, 9, 2, 2],
                   [3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2],
                   [3, 3, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 4, 1, 1, 1, 4, 2, 2, 2, 2, 3],
                   [2, 2, 2, 4, 1, 4, 2, 2, 2, 2, 2, 2, 2, 3, 3],
                   [2, 1, 1, 4, 2, 2, 2, 3, 3, 3, 2, 2, 3, 3, 3],
                   [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3]
               ],
            initItems: [
                  { row: 6, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   