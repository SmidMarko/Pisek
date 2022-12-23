function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "tabornik_na_sankah.png", side: 80, nbStates: 5, isObstacle: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, category: "obstacle", isObstacle: true },
         green: { num: 3, img: "cilj.png", side: cellSide, color: "vert", category: "green" }
      },
      maxInstructions: 15,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "south"]
         },
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkReachGreenArea
   };
   
   subTask.data = {
      easy: [
         {
            tiles: [
              [2, 2, 1, 2, 2, 2, 2, 2],
              [2, 2, 1, 2, 2, 2, 2, 2],
              [2, 2, 1, 2, 2, 2, 2, 2],
              [2, 2, 1, 2, 2, 2, 2, 2],
              [2, 2, 3, 2, 2, 2, 2, 2]
           ],
            initItems: [
                  { row: 0, col: 2, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };
   
   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, null, null, true);
   