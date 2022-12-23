function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hasGravity: false,
      hideSaveOrLoad: false,
      nbRobots: 2,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         plesalka: { img: "plesalka.png",       side: cellSide, nbStates: 9, isObstacle: false, isFig1: true, isFig2: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         red:      { num: 3, img: "red.png",    side: cellSide, color: "red",    category: "paint" },
         yellow:   { num: 2, img: "yellow.png", side: cellSide, color: "yellow", category: "paint" },
      },
      maxInstructions: {
         easy: 12,
         medium: 20,
         hard: 25
      },
      includeBlocks: {
          groupByCategory: false,
          generatedBlocks: {
              robot: ["west", "east", "north", "south", "danceMove"],
          },
          standardBlocks: {
              includeAll: false,
              wholeCategories: [],
              singleBlocks: ["controls_repeat_ext"]
          }
      },
	  ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkDanceMoves
   };



    subTask.data = {
        easy: [
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 3],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 2]
                ],
                initItems: [
                    { row: 0, col: 0, dir: 0, type: "plesalka" },
                ]
            },
        ],
        medium: [
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 3],
                    [3, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 3],
                    [3, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 2]
                ],
                initItems: [
                    { row: 0, col: 0, dir: 0, type: "plesalka" },
                ]
            },
        ],
        hard: [
            {
                tiles: [
                    [1, 3, 1, 1, 1, 1, 3],
                    [1, 1, 3, 1, 1, 1, 1],
                    [1, 3, 1, 1, 1, 1, 3],
                    [1, 1, 3, 1, 1, 1, 1],
                    [1, 3, 1, 1, 1, 1, 3],
                    [1, 1, 1, 1, 1, 1, 2]
                ],
                initItems: [
                    { row: 0, col: 0, dir: 0, type: "plesalka" },
                ]
            },
        ]
    };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
