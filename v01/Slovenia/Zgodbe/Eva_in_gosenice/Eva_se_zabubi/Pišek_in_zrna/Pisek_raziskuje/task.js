function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", category: "robot", side: 60, nbStates: 9, offsetX: 0 },
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "green.png", side: cellSide, color: "vert" }, 
		 hole: { num: 7, img: "hole.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 8, img: "marble.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
         pill: { num: 9, img: "pill.png", side: 45, offsetX: 8, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
		 marker: { num: 4, img: "marker.png", side: 45, offsetX: 8, category: "paint", isObstacle: false, isMarker: true, hasColor: true, color: "marker", zOrder: 0}	 
	  },
      maxInstructions: {
		  easy: 7,
		  medium: 11,
		  hard: 15
	  },
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {     
			robot: {
				easy: ["right", "left", "forward", "markedCell"],
				medium: ["right", "left", "forward", "markedCell"],
				hard: ["right","left", "forward", "markedCell"]
			}
		 },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {
				easy: ["loops", "logic"],
				medium: ["loops", "logic", "variables"],
				hard: ["loops", "logic", "variables", "math"]
			},
            singleBlocks: []
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkPickedAllCollectibles // robotEndConditions.checkMarblesInHoles 
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 9, 9, 1, 1, 4, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 9, 1, 1],
                   [1, 1, 4, 9, 9, 1, 4, 9, 1, 1],
                   [1, 1, 1, 4, 9, 4, 9, 9, 1, 1],
                   [1, 1, 1, 1, 1, 9, 9, 9, 1, 1],
                   [1, 1, 9, 9, 1, 4, 1, 9, 1, 1],
                   [1, 1, 1, 4, 1, 9, 4, 9, 1, 1],
                   [1, 1, 4, 1, 9, 9, 1, 4, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 9, 1, 1, 1, 4, 4, 1],
                   [1, 1, 1, 9, 1, 1, 1, 9, 9, 1],
                   [1, 1, 1, 9, 1, 1, 1, 9, 9, 1],
                   [1, 1, 1, 9, 1, 1, 1, 1, 4, 1],
                   [1, 1, 1, 9, 1, 1, 1, 1, 1, 1],
                   [1, 1, 4, 9, 9, 9, 9, 9, 4, 1],
                   [1, 1, 4, 4, 1, 1, 1, 4, 4, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
	  medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 9, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 9, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 9, 1],
                   [1, 4, 9, 4, 1, 1, 1, 9, 4, 1],
                   [1, 9, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 4, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 5, col: 5, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 4, 9, 4, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 9, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 9, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 4, 9, 1, 9, 9, 4, 1],
				   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 5, col: 3, dir: 1, type: "green_robot" }
               ]
         }
	  ],
	  hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 9, 1],
                   [1, 1, 1, 1, 1, 1, 1, 4, 4, 1],
                   [1, 1, 1, 1, 1, 4, 9, 4, 1, 1],
                   [1, 1, 1, 1, 4, 4, 1, 1, 1, 1],
                   [1, 1, 1, 1, 9, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 9, 1, 1, 1, 1, 1],
                   [1, 1, 4, 9, 4, 1, 1, 1, 1, 1],
                   [1, 1, 4, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 9, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 9, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 9, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 9, 1],
                   [1, 1, 1, 1, 1, 4, 9, 9, 4, 1],
                   [1, 1, 1, 1, 4, 4, 1, 1, 1, 1],
                   [1, 1, 1, 4, 4, 1, 1, 1, 1, 1],
                   [1, 1, 4, 4, 1, 1, 1, 1, 1, 1],
                   [1, 1, 4, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 9, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   