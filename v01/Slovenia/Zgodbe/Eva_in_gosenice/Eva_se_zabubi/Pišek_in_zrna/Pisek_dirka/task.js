function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", category: "robot", side: 60, nbStates: 9, offsetX: 0 },
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "green.png", side: 45, offsetX: 8, color: "vert" }, 
		 hole: { num: 7, img: "hole.png", side: 45, offsetX: 8, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 8, img: "marble.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
         pill: { num: 9, img: "pill.png", side: 45, offsetX: 8, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
	  },
      maxInstructions: 25,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {     
			robot: ["east", "west", "north", "south" /*"onTransportable", "onHole"*/]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["loops"],
            singleBlocks: []
         }
      },
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkPickedAllCollectibles  //robotEndConditions.checkReachGreenArea 
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 9, 1, 9, 1, 9, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 9, 1, 9, 1, 9, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 9, 1, 9, 1, 9, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
	  medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 9, 1, 9, 1, 1],
                   [1, 1, 9, 1, 9, 1, 9, 1],
                   [1, 1, 1, 9, 1, 9, 1, 1],
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
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 9, 1, 1, 1, 9, 1, 1, 1, 9, 1],
                   [1, 1, 9, 1, 1, 1, 9, 1, 1, 1, 9, 1, 1, 1],
                   [1, 9, 9, 9, 1, 9, 9, 9, 1, 9, 9, 9, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   