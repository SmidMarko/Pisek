function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hasGravity: false,
      hideSaveOrLoad: false,
      nbRobots: 2,
      cellSide: cellSide,
      actionDelay: 200,
      backgroundColor: "#ffd7e5",
      itemTypes: {
         plesalka:  { img: "plesalka.png", side: cellSide, nbStates: 9, isObstacle: false, isFig1: true, isFig2: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalka1: { img: "plesalka.png", side: cellSide, nbStates: 9, isObstacle: false, isFig1: true, isFig2: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalec:  { img: "plesalec.png", side: cellSide, nbStates: 9, isObstacle: false, isFig2: true, isFig1: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalec1: { img: "plesalec.png", side: cellSide, nbStates: 9, isObstacle: false, isFig2: true, isFig1: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalec2: { img: "plesalec.png", side: cellSide, nbStates: 9, isObstacle: false, isFig2: true, isFig1: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalec3: { img: "plesalec.png", side: cellSide, nbStates: 9, isObstacle: false, isFig2: true, isFig1: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         red:       { num: 3, img: "red.png",    side: cellSide, color: "red",    category: "paint" },
         blue:      { num: 4, img: "blue.png",   side: cellSide, color: "blue",   category: "paint" },
         yellow:    { num: 2, img: "yellow.png", side: cellSide, color: "yellow", category: "paint" },
         orange:    { num: 5, img: "orange.png", side: cellSide, color: "orange", category: "paint" }
      },
      maxInstructions: {
         easy: 11,
         medium: 18,
         hard: 25
      },
      includeBlocks: {
          groupByCategory: false,
          generatedBlocks: {
              robot: {
                  easy: [ "west", "east", "north", "south", "pickFigure2", "dropFigure2", "onFigure2", "orangeCell", "yellowCell"],
                  medium: ["west", "east", "north", "south", "pickFigure1", "dropFigure1", "onFigure1", "orangeCell", "yellowCell"],
                  hard: ["west", "east", "north", "south", "pickFigure2", "dropFigure2", "onFigure2", "orangeCell", "yellowCell"],
              }
          },
          standardBlocks: {
              includeAll: false,
              wholeCategories: [],
              singleBlocks: ["controls_whileUntil", "controls_if", "controls_repeat_ext"],
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
                    [1, 1, 1, 1, 1, 1, 5],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 2]
                ],
                initItems: [
                    { row: 0, col: 3, dir: 2, type: "plesalec" },
                    { row: 0, col: 0, dir: 0, type: "plesalka" },
                ]
            },
        ],
        medium: [
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 5],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 5, 1, 2]
                ],
                initItems: [
                    { row: 3, col: 3, dir: 3, type: "plesalka1" },
                    { row: 0, col: 2, dir: 1, type: "plesalka"  },
                    { row: 0, col: 0, dir: 0, type: "plesalec"  },
                ]
            },
        ],
        hard: [
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 5],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 5],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 5],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 5, 2]
                ],
                initItems: [
                    { row: 0, col: 2, dir: 2, type: "plesalec3" },
                    { row: 1, col: 0, dir: 0, type: "plesalec2" },
                    { row: 3, col: 0, dir: 0, type: "plesalec1" },
                    { row: 5, col: 0, dir: 0, type: "plesalec"  },
                    { row: 0, col: 0, dir: 0, type: "plesalka"  },
                ]
            },
        ]
    };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
