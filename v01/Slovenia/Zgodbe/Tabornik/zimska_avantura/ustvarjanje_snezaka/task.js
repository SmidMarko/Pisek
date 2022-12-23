function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "tabornik.png", side: 80, nbStates: 9, isObstacle: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         hole: { num: 2, img: "hole.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         mar: { num: 3, img: "krogla_snezak.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
         marble: { num: 4, img: "roka.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
         oci:  { num: 5, img: "oci.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
         hol: { num: 6, img: "drugi_del.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 }
      },
      maxInstructions: 15,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "north", "pickTransportable", "dropTransportable"]
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
                   [1, 1, 1, 1, 1, 1],
                   [2, 4, 1, 2, 4, 1],
                   [1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 1],
                   [1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
                   [1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 4, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1],
                   [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1],
                   [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1],
                   [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1],
                   [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
