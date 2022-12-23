function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14, zOrder: 2},
         green_dragon: { img: "green_dragon.png", category: "robot", side: 80, nbStates: 9, offsetX: -14, zOrder: 2},
         pisek: { img: "pisek.png", category: "robot", side: 80, nbStates: 9, offsetX: -14, zOrder: 2},
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true, zOrder: 0 },
         green: { num: 3, img: "green.png", side: cellSide, color: "vert", zOrder: 0 }, 
		 hole: { num: 7, img: "hole.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 8, img: "marble.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
         pill: { num: 9, img: "pill.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
         pill1: { num: 10, img: "pill1.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
         pill2: { num: 11, img: "pill2.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
		 marker: { num: 4, img: "marker.png", side: cellSide, category: "paint", isObstacle: false, isMarker: true, hasColor: true, color: "marker", zOrder: 0},
         paint: { img: "paint2.png", side: cellSide, category: "paint", isPaint: true, isObstacle: false, hasColor: true, color: "gris", zOrder: 1 }	 
	  },
      maxInstructions: 25,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {     
			robot: ["north", "south", "east", "west"]
		 },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
				easy: [],
				medium: ["controls_repeat"],
				hard: ["controls_repeat"]
			}
         }
      },
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkPickedAllCollectibles
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 10, 1, 1, 1],
                   [1, 1, 9, 11, 9, 1, 1],
                   [1, 1, 1, 10, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
	  medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 9, 10, 11, 1, 1],
                   [1, 1, 11, 9, 10, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_dragon" }
               ]
         }
	  ],
	  hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 9, 10, 11, 1, 1],
                   [1, 1, 10, 11, 9, 1, 1],
                   [1, 1, 11, 9, 10, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "pisek" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   