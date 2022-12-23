function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14 },
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "green.png", side: cellSide, color: "vert" },
         pill1: { num: 4, img: "streha.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
         pill2: { num: 5, img: "pogon.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
         pill3: { num: 6, img: "kabina.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
         pill4: { num: 7, img: "volan.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
         pill5: { num: 8, img: "stol.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 }
      },
      maxInstructions: {
		  easy: 10,
		  medium: 10,
		  hard: 20,
	  },
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            robot: ["right", "left", "forward"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {
				easy: ["loops"],
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
      checkEndCondition: robotEndConditions.checkPickedAllCollectibles
   };

   subTask.data = {
      easy: [
         {
            tiles: [
			       [2, 1, 1, 1, 1, 1, 1, 1],
                   [2, 1, 1, 1, 4, 1, 5, 1],
				   [1, 1, 1, 1, 1, 1, 1, 1],
				   [2, 1, 1, 1, 1, 1, 6, 1],
				   [2, 1, 1, 1, 1, 1, 1, 1],
				   [2, 1, 1, 1, 1, 1, 7, 1],
				   [1, 1, 1, 1, 1, 1, 8, 1],
				   [2, 1, 1, 1, 1, 1, 1, 1]
				],
            initItems: [
                  { row: 1, col: 2, dir: 0, type: "green_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
			       [1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 4, 1, 5, 1, 6, 1],
			       [1, 1, 8, 2, 2, 1, 7, 1],
			       [1, 1, 1, 1, 2, 1, 1, 1],
			       [1, 1, 8, 1, 1, 2, 2, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 5, col: 4, dir: 2, type: "green_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
			       [1, 2, 2, 1, 2, 1, 1, 1],
			       [2, 1, 1, 1, 1, 1, 1, 1],
			       [2, 1, 1, 1, 1, 7, 8, 1],
			       [1, 1, 1, 1, 6, 1, 1, 1],
			       [1, 1, 1, 5, 8, 1, 1, 1],
			       [1, 1, 8, 1, 1, 1, 1, 1],
			       [1, 8, 4, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 2, 2, 2]
               ],
            initItems: [
                  { row: 1, col: 6, dir: 1, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   