function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: - 8,  offsetY: 10, zOrder: 0},
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true, zOrder: 0 },
         green: { num: 3, img: "green.png", side: cellSide, color: "vert", zOrder: 0 }, 
		 hole: { num: 7, img: "hole.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 8, img: "marble.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
         pill: { num: 9, img: "pill.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
		 marker: { num: 4, img: "marker.png", side: cellSide, category: "paint", isObstacle: false, isMarker: true, hasColor: true, color: "marker", zOrder: 0},
         paint: { img: "paint2.png", side: cellSide, category: "paint", isPaint: true, isObstacle: false, hasColor: true, color: "gris", zOrder: 1 }	 
	  },
      maxInstructions: 25,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {     
			robot: {
				easy: ["north", "south", "east", "west"],
				medium: ["north", "south", "east", "west"],
				hard: ["north", "south", "east", "west"]
			}
		 },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {},
            singleBlocks: []
         }
      },
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: {
		  easy: robotEndConditions.checkPickedAllCollectibles,  
		  medium: robotEndConditions.checkPickedAllCollectibles,
		  hard: robotEndConditions.checkPickedAllCollectibles
	  }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 9, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 3, col: 3, dir: 0, type: "green_robot" }
               ]
         }
      ],
	  medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 9, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 9, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 1, type: "green_robot" }
               ]
         }
	  ],
	  hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 9],
                   [1, 9, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 9, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 9, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 5, dir: 1, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   