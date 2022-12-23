function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14 },
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "green.png", side: cellSide, color: "vert" }
      },
      maxInstructions: {
		  easy: 10,
		  medium: 10,
		  hard: 20,
	  },
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            robot: ["east", "north", "south"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {
				easy: [],
				medium: ["loops"],
				hard: ["loops", "functions"],
			},
            singleBlocks: [],
         }
      },
      backgroundColor: "noire",
	  blocklyColourTheme: "bwinf",
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [ ],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkReachGreenArea
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 1, 1, 1, 1, 2, 2, 2, 2],
                   [2, 1, 1, 2, 2, 1, 1, 1, 1, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 3, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 2, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 1, 1, 2, 1, 1, 1, 2, 1, 3, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 5, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 3, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2],
                   [2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                   [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 1, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   