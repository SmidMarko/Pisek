function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         pisek: { img: "gosenica.png", side: 60, nbStates: 9, isObstacle: true, category: "robot", team: 0, zOrder: -2, offsetX: 0, yOrder: -20,  },
         hole: { num: 2, img: "gnezdo4.png", side: 45, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 10 },
         seed: { num: 3, img: "hrana4.png", side: 45, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1, offsetX: 8}
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
            singleBlocks: []
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
                   [1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 3, 1, 1, 1, 2, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "pisek" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, null, null, true);
