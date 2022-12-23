function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         pisek: { img: "gosenica.png", side: 60, nbStates: 9, offsetX: 0, offsetY: 10,  isObstacle: true, offsetX: 0, category: "robot", team: 0, zOrder: 2},
         hole: { num: 2, img: "gnezdo1.png", side: 40, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 8 },
         seed: { num: 3, img: "hrana1.png", side: 40, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1, offsetX: 8 },
		 hole1: { num: 4, img: "gnezdo2.png", side: 40, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 8 },
         seed1: { num: 5, img: "hrana2.png", side: 40, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1, offsetX: 8},
		 hole2: { num: 6, img: "gnezdo3.png", side: 40, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 8 },
         seed2: { num: 7, img: "hrana3.png", side: 40, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1, offsetX: 8},
		 hole3: { num: 8, img: "gnezdo6.png", side: 40, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 8 },
         seed3: { num: 9, img: "hrana6.png", side: 40, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1, offsetX: 8},
      },
      maxInstructions: { easy: 6, medium: 40, hard: 12 },
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
                   [1, 3, 1, 1, 1, 1, 1, 2]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "pisek" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 3, 1, 1, 1, 2],
                   [1, 1, 1, 5, 1, 1, 1, 1, 4],
                   [1, 1, 7, 1, 1, 1, 1, 1, 6],
                   [1, 9, 1, 1, 1, 1, 1, 1, 8]
               ],
            initItems: [
                  { row: 0, col: 1, dir: 0, type: "pisek"}
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [3, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                   [5, 1, 1, 1, 1, 1, 1, 1, 1, 4],
                   [7, 1, 1, 1, 1, 1, 1, 1, 1, 6],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 2, dir: 0, type:"pisek"}
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
