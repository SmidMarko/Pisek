function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         tabornik: { img: "tabornik.png", category: "robot", side: 80, nbStates: 9, offsetX: 0 },
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "cilj.png", side: cellSide, color: "vert" },
         pill1: { num: 4, img: "krogla_snezak.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1, isTransportable: true },
         pill2: { num: 5, img: "metla.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1, isTransportable: true },
         pill3: { num: 6, img: "roka.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1, isTransportable: true },
         pill4: { num: 7, img: "klobuk.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1, isTransportable: true },
         pill5: { num: 8, img: "obraz.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1, isTransportable: true }
         
      },
      maxInstructions: {
		  easy: 15,
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
			      [2, 2, 2, 2, 2, 2, 2, 2],
               [2, 1, 1, 1, 4, 1, 5, 2],
				   [2, 1, 1, 1, 1, 1, 1, 2],
				   [2, 1, 1, 1, 1, 1, 6, 2],
				   [2, 1, 1, 1, 1, 1, 1, 2],
				   [2, 1, 1, 1, 1, 1, 7, 2],
				   [2, 1, 1, 1, 8, 1, 1, 2],
				   [2, 2, 2, 2, 2, 2, 2, 2]
				],
            initItems: [
                  { row: 1, col: 2, dir: 0, type: "tabornik" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
			       [2, 2, 2, 2, 2, 2, 2, 2],
			       [2, 1, 1, 1, 5, 1, 1, 2],
			       [2, 1, 4, 2, 2, 2, 6, 2],
			       [2, 1, 8, 2, 2, 2, 6, 2],
			       [2, 1, 1, 2, 2, 2, 1, 2],
			       [2, 1, 8, 1, 1, 1, 1, 2],
			       [2, 1, 1, 1, 1, 1, 1, 2],
			       [2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 5, col: 6, dir: 2, type: "tabornik" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
			       [2, 2, 2, 2, 2, 2, 2, 2],
			       [2, 1, 1, 1, 1, 1, 1, 2],
			       [2, 1, 1, 1, 1, 7, 8, 2],
			       [2, 1, 1, 1, 6, 1, 1, 2],
			       [2, 1, 1, 5, 8, 1, 1, 2],
			       [2, 1, 8, 1, 1, 1, 1, 2],
			       [2, 8, 4, 1, 1, 1, 1, 2],
			       [2, 2, 2, 2, 2, 2, 2, 2]
               ],
            initItems: [
                  { row: 1, col: 6, dir: 1, type: "tabornik" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   