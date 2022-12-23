function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_dragon.png", side: 80, nbStates: 9, isObstacle: true, offsetX: - 7, category: "robot", team: 0, zOrder: 2 },
         pill: { num: 2, img: "pill.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
      },
      maxInstructions: {
         easy: 8,
         medium: 15,
         hard: 20
      },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "north", "west", "south"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"]
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkPickedAllCollectibles
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 8, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1],
                   [1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1],
                   [1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1],
                   [1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1]
               ],
            initItems: [
                  { row: 6, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
