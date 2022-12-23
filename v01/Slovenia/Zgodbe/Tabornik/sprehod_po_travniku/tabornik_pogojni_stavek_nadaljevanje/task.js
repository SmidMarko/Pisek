function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "tabornik.png", category: "robot", side: 80, nbStates: 9, offsetX: -14 },
         obstacle: { num: 2, img: "grm.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "cilj.png", side: cellSide, color: "vert" }, 
      },
      maxInstructions: 10,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {     
			robot: ["east", "south","west", "north", "obstacleEast", "gridEdgeAbove", "gridEdgeBelow"/*, "pickTransportable", "dropTransportable", "onTransportable", "onHole"*/]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat", "controls_if", "controls_if_else"]
         }
      },
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [ ],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkReachGreenArea //robotEndConditions.checkMarblesInHoles 
   };

   subTask.data = {
      easy: [
         {
            tiles: [
               [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1 ,2 , 1, 1, 3],
               [2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1 ,1 , 1, 2, 2],
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
               [1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1 ,2 , 2, 2, 2],
               [2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1 ,1 , 1, 1, 3],
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
   