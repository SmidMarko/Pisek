function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "gasilski_avto.png", side: 80, nbStates: 9, isObstacle: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, category: "obstacle", isObstacle: true },
         green: { num: 3, img: "cilj.png", side: cellSide, color: "vert", category: "green" },
         cesta_navzgor: { num: 4, img: "cesta_navzgor.png", side: cellSide,  isObstacle: false },
         cesta_vodoravna: { num: 5, img: "cesta_vodoravna.png", side: cellSide,  isObstacle: false },
         marker: { num: 6, img: "rumena_hise.png", side: cellSide, category: "paint", isObstacle: false, isMarker: true, hasColor: true, color: "marker", zOrder: 0},
      },
      maxInstructions: 10,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {     
			robot: ["east", "west", "north", "south",  "markedCell"/*, "pickTransportable", "dropTransportable", "onTransportable", "onHole"*/]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat", "controls_if"]
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
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3, 2],
               [2, 2, 2, 2, 2, 5, 5, 5, 5, 6, 2, 2],
               [2, 2, 2, 2, 5, 6, 2, 2, 2, 2, 2, 2],
               [2, 5, 5, 5, 6, 2, 2, 2, 2, 2, 2, 2],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
           ],
            
            initItems: [
                  { row: 4, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
         tiles: [
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 3, 2],
            [2, 2, 2, 2, 2, 5, 5, 6, 2, 2, 2, 2],
            [2, 2, 2, 5, 5, 6, 2, 2, 2, 2, 2, 2],
            [2, 5, 5, 6, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
        ],
            initItems: [
                  { row: 4, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
   