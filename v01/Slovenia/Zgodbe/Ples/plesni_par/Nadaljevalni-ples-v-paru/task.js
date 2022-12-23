function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hasGravity: false,
      hideSaveOrLoad: false,
      nbRobots: 2,
      cellSide: cellSide,
      actionDelay: 200,
      backgroundColor: "#fdffbd",
      itemTypes: {
         plesalka:  { img: "plesalka.png", side: cellSide, nbStates: 9, isObstacle: false, isFig1: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalka1: { img: "plesalka.png", side: cellSide, nbStates: 9, isObstacle: false, isFig1: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalka2: { img: "plesalka.png", side: cellSide, nbStates: 9, isObstacle: false, isFig1: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalec:  { img: "plesalec.png", side: cellSide, nbStates: 9, isObstacle: false, isFig2: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         red:       { num: 3, img: "red.png",    side: cellSide, color: "red",    category: "paint" },
         blue:      { num: 4, img: "blue.png",   side: cellSide, color: "blue",   category: "paint" },
         yellow:    { num: 2, img: "yellow.png", side: cellSide, color: "yellow", category: "paint" },
         orange:    { num: 5, img: "orange.png", side: cellSide, color: "orange", category: "paint" }
      },
      maxInstructions: {
         easy: 15,
         medium: 31,
         hard: 31
      },
      includeBlocks: {
          groupByCategory: false,
          generatedBlocks: {
              robot: {
                  easy: ["west", "east", "north", "south", "pickFigure1", "dropFigure1", "onFigure1", "orangeCell"],
                  medium: ["west", "east", "north", "south", "danceMove", "pickFigure2", "dropFigure2", "onFigure2", "redCell", "orangeCell"],
                  hard: ["west", "east", "north", "south", "danceMove", "danceJump", "pickFigure1", "dropFigure1", "onFigure1", "redCell", "orangeCell", "blueCell"],
              }
          },
          standardBlocks: {
              includeAll: false,
              wholeCategories: [],
              singleBlocks: ["controls_repeat_ext", "controls_if"]
          }
      },
	  ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkFiguresReachEndAreas
   };



    subTask.data = {
        easy: [
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 5],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 2]
                ],
                initItems: [
                    { row: 2, col: 0, dir: 0, type: "plesalka" },
                    { row: 0, col: 0, dir: 0, type: "plesalec" },
                ]
            },
        ],
        medium: [
            {
                tiles: [
                    [1, 1, 3, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 3, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [5, 1, 1, 1, 1, 1, 2]
                ],
                initItems: [
                    { row: 0, col: 6, dir: 2, type: "plesalec" },
                    { row: 0, col: 0, dir: 0, type: "plesalka" },
                ]
            },
        ],
        hard: [
            {
                tiles: [
                    [1, 1, 4, 1, 4, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 5],
                    [1, 1, 1, 1, 1, 1, 3],
                    [1, 1, 5, 1, 5, 1, 2]
                ],
                initItems: [
                    { row: 0, col: 5, dir: 1, type: "plesalka2" },
                    { row: 0, col: 3, dir: 1, type: "plesalka1" },
                    { row: 0, col: 1, dir: 1, type: "plesalka"  },
                    { row: 0, col: 0, dir: 0, type: "plesalec"  },
                ]
            },
        ]
    };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
