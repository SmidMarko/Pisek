function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         tabornik: { img: "tabornik.png", category: "robot", side: 80, nbStates: 9, offsetX: -15 },
         obstacle: { num: 2, img: "grm.png", side: cellSide, isObstacle: false, zOrder: 1 },
         green: { num: 3, img: "cilj.png", side: cellSide, color: "vert" },
         pill1: { num: 4, img: "zvezda.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 0 }
      },
      maxInstructions: {
		  easy: 5,
		  medium: 4,
		  hard: 13,
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
               [4,4],
               [1,4]
				],
            initItems: [
                  { row: 1, col: 0, dir: 0, type: "tabornik" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
               [4,4],
               [1,4]
				],
            initItems: [
                  { row: 1, col: 0, dir: 0, type: "tabornik" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                [4,4,4],
                [4,4,4],
                [1,4,4]
               ],
            initItems: [
                  { row: 2, col: 0, dir: 0, type: "tabornik" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   