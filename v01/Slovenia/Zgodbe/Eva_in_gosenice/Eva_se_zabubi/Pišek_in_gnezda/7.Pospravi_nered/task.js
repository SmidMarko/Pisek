function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "pisek.png", side: 60, nbStates: 9, isObstacle: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         hole: { num: 2, img: "hole.png",  side: 45, offsetX: 8, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 3, img: "seed.png", side: 45, offsetX: 8, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 }
      },
      maxInstructions: {
		  easy: 8,
		  medium: 12,
		  hard: 12
	  },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "north", "south", "pickTransportable", "dropTransportable", "onTransportable", "onHole"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat", "controls_if"]
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkMarblesInHoles
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 3, 1, 1, 1, 1, 1, 2]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ],
      medium: [
         {
           tiles: [
                   [1, 1, 1, 1, 3, 1, 1, 1, 2],
                   [1, 1, 1, 3, 1, 1, 1, 1, 2],
                   [1, 1, 3, 1, 1, 1, 1, 1, 2],
                   [1, 3, 1, 1, 1, 1, 1, 1, 2],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot"}
               ]
         }
      ],
      hard: [
         {
           tiles: [
                   [3, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [3, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [3, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 2, dir: 0, type:"green_robot"}
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
