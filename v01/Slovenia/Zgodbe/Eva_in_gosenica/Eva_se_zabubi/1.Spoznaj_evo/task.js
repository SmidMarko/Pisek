function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "gosenica.png", category: "robot", side: 60, nbStates: 9, offsetX: 0, offsetY: 10 },
		 hole: { num: 7, img: "gnezdo2.png", side: 45, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 8, offsetY: 0 },
         marble: { num: 8, img: "hrana2.png", side: 30, category: "marble", isObstacle: false, isTransportable: true, zOrder: 0, offsetY: 0, offsetX: 15},
      },
      maxInstructions: 25,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {     
			robot: ["east", "west", "north", "south", "pickTransportable", "dropTransportable"/*, "onTransportable", "onHole"*/]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: []
         }
      },
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [ ],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkMarblesInHoles //robotEndConditions.checkReachGreenArea 
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
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
   