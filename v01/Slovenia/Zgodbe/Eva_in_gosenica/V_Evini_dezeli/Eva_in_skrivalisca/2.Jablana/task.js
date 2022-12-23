function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "gosenica.png", category: "robot", side: 60, nbStates: 9, offsetX: 0, offsetY: 10 },
		 hole: { num: 2, img: "gnezdo1.png", side: 45, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 8, offsetY: 0 },
         marble: { num: 3, img: "hrana1.png", side: 30, category: "marble", isObstacle: false, isTransportable: true, zOrder: 0, offsetY: 0, offsetX: 15},
		 hole2: { num: 4, img: "gnezdo2.png", side: 45, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 8, offsetY: 0 },
         marble2: { num: 5, img: "hrana2.png", side: 30, category: "marble", isObstacle: false, isTransportable: true, zOrder: 0, offsetY: 0, offsetX: 15},
      },
      maxInstructions: 12,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "north", "south", "pickTransportable", "dropTransportable"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"]
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
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 7, dir: 0, type: "green_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 3, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 2, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 7, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
