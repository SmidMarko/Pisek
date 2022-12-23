function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
                  green_robot: { img: "green_robot.png", category: "robot", side: 60, nbStates: 9, offsetX: 0 },
		 hole: { num: 7, img: "hole.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 8, img: "marble.png", side: 60, category: "marble", isObstacle: false, isTransportable: true, zOrder: 0, offsetY: 12, offsetX: 0},
	  },
      maxInstructions: 25,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {     
			robot: {
				easy: ["east", "west", "north", "south", "pickTransportable", "dropTransportable", "onTransportable"],
				medium: ["east", "west", "north", "south", "pickTransportable", "dropTransportable","onHole"]
			}
		 },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["loops", "logic"],
            singleBlocks: []
         }
      },
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkMarblesInHoles //robotEndConditions.checkPickedAllCollectibles  
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 8, 7, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 8, 7, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 8, 7, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 8, 7, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 9, col: 0, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 8, 7, 1, 1, 1, 1],
                   [1, 1, 1, 8, 7, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 8, 7, 1],
                   [1, 1, 1, 1, 8, 7, 1, 1, 1, 1],
                   [1, 8, 7, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 8, 7, 1, 1],
                   [1, 1, 1, 8, 7, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 9, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ],
	  medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 8, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 7, 1, 8, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 7, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 8, 1, 1],
                   [1, 1, 8, 1, 1, 1, 1, 7, 1, 1],
                   [1, 1, 7, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 8, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 7, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 9, col: 0, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 8, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 7, 8, 1, 1],
                   [1, 1, 1, 8, 1, 1, 1, 7, 1, 1],
                   [1, 1, 1, 7, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 8, 1, 1, 1, 1, 1, 8, 1, 1],
                   [1, 7, 1, 1, 8, 1, 1, 7, 8, 1],
                   [1, 1, 1, 1, 7, 1, 1, 1, 7, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 9, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium"], null, true);
   