function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         tabornik: { img: "tabornik.png", category: "robot", side: 80, nbStates: 9, offsetX: -15 },
         obstacle: { num: 2, img: "tropsko_drevo.png", side: cellSide, isObstacle: true },
         obstacl: { num: 5, img: "tropsko_drevo.png", side: cellSide, isObstacle: true },
         papiga: { num: 3, img: "papiga.png", side: cellSide, color: "vert" },
         green: { num: 6, img: "banana.png", side: cellSide, color: "vert" },
         pill1: { num: 4, img: "markacija.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 0 }
      },
      maxInstructions: {
		  easy: 5,
		  medium: 12,
		  hard: 15,
	  },
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            robot: ["right", "left", "forward"]
         },
      standardBlocks: {
         includeAll: false,
         wholeCategories: [],
         singleBlocks: ["controls_repeat"]
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
               [1, 4, 4, 4],
               [4, 2, 2, 4],
               [4, 2, 2, 4],
               [4, 4, 4, 4]
				],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "tabornik" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 2, 4, 4, 4, 2, 4, 4, 4, 2, 4, 4, 4, 2, 2],
               [2, 1, 4, 2, 4, 4, 4, 2, 4, 4, 4, 2, 4, 4, 3],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
				],
            initItems: [
                  { row: 2, col: 1, dir: 0, type: "tabornik" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
               [2, 2, 4, 4, 4, 2, 4, 4, 4, 2, 4, 4, 4, 2, 2],
               [2, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2],
               [2, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2],
               [2, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2],
               [2, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2],
               [2, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2],
               [2, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2],
               [2, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2],
               [2, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2],
               [2, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 2],
               [2, 1, 4, 2, 4, 4, 4, 2, 4, 4, 4, 2, 4, 4, 6],
               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 11, col: 1, dir: 0, type: "tabornik" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   