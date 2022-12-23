function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      topMargin: 300,
      backgroundColor: "#A5D2FF",
      borderColor: "#111111",
      showLabels: true,
      itemTypes: {
		 tile: { num: 1, img: "tile.png", side: cellSide, isObstacle: false, zOrder: 0 },
         green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
         obstacle: { num: 2, img: "ozadje.png", side: cellSide, category: "obstacle", isObstacle: true },
         obstacle2: { num: 3, img: "ozadje_2.png", side: cellSide, category: "obstacle", isObstacle: true },
         green: { num: 4, img: "green.png", side: cellSide, color: "vert", category: "green" }
      },
      maxInstructions: 5,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {     
			robot: ["forward", "left", "right"/*, "pickTransportable", "dropTransportable", "onTransportable", "onHole"*/]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"]
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkReachGreenArea //robotEndConditions.checkMarblesInHoles 
   };

   subTask.data = {
      easy: [
         {
            tiles: [
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 4, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 8, col: 3, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, null, null, true);
   