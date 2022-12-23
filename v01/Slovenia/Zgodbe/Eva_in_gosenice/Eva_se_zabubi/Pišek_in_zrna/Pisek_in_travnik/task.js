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
      maxInstructions: 25,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {     
			robot: ["east", "west", "north", "south", "markedCell"/*"pickTransportable", "dropTransportable", "onTransportable", "onHole"*/]
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
      checkEndCondition: robotEndConditions.checkPickedAllCollectibles //robotEndConditions.checkMarblesInHoles 
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 9, 1, 1, 1, 1],
                   [1, 1, 9, 1, 1, 1, 1, 1],
                   [1, 1, 4, 4, 1, 1, 4, 1],
                   [1, 1, 9, 9, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 9, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 3, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 9, 1],
                   [1, 1, 1, 1, 1, 1, 9, 1],
                   [1, 1, 1, 4, 1, 4, 4, 1],
                   [1, 1, 1, 9, 1, 9, 1, 1],
                   [1, 1, 1, 9, 1, 1, 9, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 3, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 9, 1],
                   [1, 1, 1, 1, 9, 1, 9, 1],
                   [1, 1, 9, 1, 4, 1, 4, 1],
                   [1, 1, 1, 1, 9, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 9, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 3, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
   