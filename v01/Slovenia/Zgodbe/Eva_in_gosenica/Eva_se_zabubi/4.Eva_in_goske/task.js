function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "gosenica.png", category: "robot", side: 60, nbStates: 9, offsetX: 0, offsetY: 10 },
		 
		 hole: { num: 7, img: "gnezdo1.png", side: 45, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 8, offsetY: 0 },
		 hole1: { num: 8, img: "gnezdo2.png", side: 45, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 8, offsetY: 0 },
		 hole2: { num: 9, img: "gnezdo6.png", side: 45, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 8, offsetY: 0 },
		 hole3: { num: 10, img: "gnezdo3.png", side: 45, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 8, offsetY: 0 },
		 hole4: { num: 11, img: "gnezdo4.png", side: 45, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 8, offsetY: 0 },
        
		 marble: { num: 12, img: "hrana1.png", side: 30, category: "marble", isObstacle: false, isTransportable: true, zOrder: 0, offsetY: 0, offsetX: 15},
		 marble1: { num: 13, img: "hrana2.png", side: 30, category: "marble", isObstacle: false, isTransportable: true, zOrder: 0, offsetY: 0, offsetX: 15},
		 marble2:{ num: 14, img: "hrana6.png", side: 30, category: "marble", isObstacle: false, isTransportable: true, zOrder: 0, offsetY: 0, offsetX: 15},
		 marble3:{ num: 15, img: "hrana3.png", side: 30, category: "marble", isObstacle: false, isTransportable: true, zOrder: 0, offsetY: 0, offsetX: 15},
		 marble4:{ num: 16, img: "hrana4.png", side: 30, category: "marble", isObstacle: false, isTransportable: true, zOrder: 0, offsetY: 0, offsetX: 15},
     
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
                   [1, 1, 1, 1, 1, 1, 1, 12, 7, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 15, 10, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 13, 8, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 14, 9, 1, 1, 1, 1, 1, 1],
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
                   [1, 1, 1, 1, 12, 7, 1, 1, 1, 1],
                   [1, 1, 1, 13, 8, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 14, 9, 1],
                   [1, 1, 1, 1, 15, 10, 1, 1, 1, 1],
                   [1, 13, 8, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 16, 11, 1, 1],
                   [1, 1, 1, 12, 7, 1, 1, 1, 1, 1],
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
                   [1, 1, 1, 13, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 8, 1, 15, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 10, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 16, 1, 1],
                   [1, 1, 12, 1, 1, 1, 1, 11, 1, 1],
                   [1, 1, 7, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 14, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 9, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 9, col: 0, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 15, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 10, 16, 1, 1],
                   [1, 1, 1, 13, 1, 1, 1, 11, 1, 1],
                   [1, 1, 1, 8, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 12, 1, 1, 1, 1, 1, 16, 1, 1],
                   [1, 7, 1, 1, 14, 1, 1, 11, 13, 1],
                   [1, 1, 1, 1, 9, 1, 1, 1, 8, 1],
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
   