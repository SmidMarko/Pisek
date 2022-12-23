function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hasGravity: false,
      hideSaveOrLoad: false,
      nbRobots: 2,
      cellSide: cellSide,
      actionDelay: 200,
      backgroundColor: "#e7e9ff",
      itemTypes: {
         plesalka: { img: "plesalka.png", side: cellSide, nbStates: 9, isObstacle: false, isFig1: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalec: { img: "plesalec.png", side: cellSide, nbStates: 9, isObstacle: false, isFig2: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         red:      { num: 3, img: "red.png",    side: cellSide, color: "red",    category: "paint" },
         blue:     { num: 4, img: "blue.png",   side: cellSide, color: "blue",   category: "paint" },
         yellow:   { num: 2, img: "yellow.png", side: cellSide, color: "yellow", category: "paint" },
      },
      maxInstructions: {
         easy: 10,
         medium: 26,
         hard: 24
      },
      includeBlocks: {
          groupByCategory: false,
          generatedBlocks: {
              robot: {
                  easy: ["west", "east", "north", "south", "pickFigure1", "dropFigure1", "onFigure1"],
                  medium: ["west", "east", "north", "south", "danceMove", "pickFigure1", "dropFigure1", "onFigure1", "redCell"],
                  hard: ["west", "east", "north", "south", "danceMove", "pickFigure2", "dropFigure2", "onFigure2", "redCell"],
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
      checkEndCondition: robotEndConditions.checkFiguresReachYellowArea
   };



    subTask.data = {
        easy: [
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 2]
                ],
                initItems: [
                    { row: 0, col: 6, dir: 1, type: "plesalka" },
                    { row: 0, col: 0, dir: 0, type: "plesalec" },
                ]
            },
        ],
        medium: [
            {
                tiles: [
                    [1, 1, 1, 3, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [3, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 2]
                ],
                initItems: [
                    { row: 5, col: 2, dir: 0, type: "plesalka" },
                    { row: 0, col: 0, dir: 0, type: "plesalec" },
                ]
            },
        ],
        hard: [
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 3],
                    [1, 3, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 3],
                    [1, 3, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 2]
                ],
                initItems: [
                    { row: 5, col: 4, dir: 0, type: "plesalec" },
                    { row: 0, col: 0, dir: 1, type: "plesalka" },
                ]
            },
        ]
    };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
