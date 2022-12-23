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
      },
      maxInstructions: {
         easy: 5,
         medium: 6,
         hard: 12,
      },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "south"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"]
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkReachGreenArea
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [2, 4, 2, 2, 2, 2],
                   [2, 4, 2, 2, 2, 2],
                   [2, 4, 2, 2, 2, 2],
                   [2, 4, 2, 2, 2, 2],
                   [2, 4, 2, 2, 2, 2],
                   [2, 4, 2, 2, 2, 2],
                   [2, 4, 5, 5, 5, 3]
               ],
            initItems: [
                  { row: 0, col: 1, dir: 1, type: "green_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
               [5, 5, 5, 2, 2, 2, 2],
               [2, 2, 4, 2, 2, 2, 2],
               [2, 2, 4, 2, 2, 2, 2],
               [2, 2, 4, 5, 5, 2, 2],
               [2, 2, 2, 2, 4, 2, 2],
               [2, 2, 2, 2, 4, 2, 2],
               [2, 2, 2, 2, 4, 5, 5],
               [2, 2, 2, 2, 2, 2, 4],
               [2, 2, 2, 2, 2, 2, 4],
               [2, 2, 2, 2, 2, 2, 3]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
               [5, 5, 5, 5, 2, 2, 2, 2, 2, 2],
               [2, 2, 2, 4, 2, 2, 2, 2, 2, 2],
               [4, 5, 5, 4, 2, 2, 2, 2, 2, 2],
               [4, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [4, 5, 5, 5, 5, 5, 5, 2, 2, 2],
               [2, 2, 2, 2, 2, 2, 4, 2, 2, 2],
               [2, 2, 2, 5, 5, 5, 4, 2, 2, 2],
               [2, 2, 2, 4, 2, 2, 2, 2, 2, 2],
               [2, 2, 2, 4, 5, 5, 5, 5, 5, 5],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
               [2, 2, 2, 2, 2, 2, 5, 5, 5, 4],
               [2, 2, 2, 2, 2, 2, 4, 2, 2, 2],
               [2, 2, 2, 2, 2, 2, 4, 5, 5, 3],
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
