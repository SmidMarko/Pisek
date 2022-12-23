function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hasGravity: false,
      hideSaveOrLoad: false,
      nbRobots: 2,
      cellSide: cellSide,
      actionDelay: 200,
       backgroundColor: "#b4fff0",
       borderColor: "#641eff",
      itemTypes: {
         plesalka:  { img: "plesalka.png", side: cellSide, nbStates: 9, isObstacle: false, isFig1: true, isFig2: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalka1: { img: "plesalka.png", side: cellSide, nbStates: 9, isObstacle: false, isFig1: true, isFig2: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalka2: { img: "plesalka.png", side: cellSide, nbStates: 9, isObstacle: false, isFig1: true, isFig2: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalec:  { img: "plesalec.png", side: cellSide, nbStates: 9, isObstacle: false, isFig2: true, isFig1: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalec1: { img: "plesalec.png", side: cellSide, nbStates: 9, isObstacle: false, isFig2: true, isFig1: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         plesalec2: { img: "plesalec.png", side: cellSide, nbStates: 9, isObstacle: false, isFig2: true, isFig1: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         red:       { num: 3, img: "red.png",    side: cellSide, color: "red",    category: "paint" },
         blue:      { num: 4, img: "blue.png",   side: cellSide, color: "blue",   category: "paint" },
         yellow:    { num: 2, img: "yellow.png", side: cellSide, color: "yellow", category: "paint" },
         orange:    { num: 5, img: "orange.png", side: cellSide, color: "orange", category: "paint" }
      },
      maxInstructions: {
         easy: 13,
         medium: 17,
         hard: 15
      },
      includeBlocks: {
          groupByCategory: false,
          generatedBlocks: {
              robot: {
                  easy:   [ "forward","turnAround","pickFigure1", "dropFigure1", "onFigure1", "orangeCell", "yellowCell", "changeFigure1", "changeFigure2"],
                  medium: [ "forward", "west", "east", "north", "south", "pickFigure1", "dropFigure1", "transportingFigure", "onFigure1", "orangeCell", "yellowCell", "changeFigure1", "changeFigure2"],
                  hard:   [ "west", "east", "north", "south", "pickFigure1", "dropFigure1", "transportingFigure", "onFigure1", "orangeCell", "yellowCell", "changeFigure1", "changeFigure2"],
              }
          },
          standardBlocks: {
              includeAll: false,
              wholeCategories: [],
              singleBlocks: {
                  easy: ["controls_whileUntil", "controls_if", "controls_repeat_ext"],
                  medium: ["controls_whileUntil", "controls_if", "controls_repeat_ext", "logic_operation"],
                  hard: ["controls_whileUntil", "controls_if", "controls_repeat_ext", "logic_operation"]
              },
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
                    [1, 1, 1, 5, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 2, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 5, 1, 1, 1]
                ],
                initItems: [
                    { row: 0, col: 1, dir: 2, type: "plesalka1" },
                    { row: 6, col: 5, dir: 0, type: "plesalka" },
                    { row: 0, col: 0, dir: 0, type: "plesalec1" },
                    { row: 6, col: 6, dir: 2, type: "plesalec" },
                ]
            },
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [5, 1, 1, 2, 1, 1, 5],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1]
                ],
                initItems: [
                    { row: 4, col: 0, dir: 1, type: "plesalka1" },
                    { row: 2, col: 6, dir: 3, type: "plesalka"  },
                    { row: 6, col: 0, dir: 3, type: "plesalec1" },
                    { row: 0, col: 6, dir: 1, type: "plesalec"  },
                ]
            },
        ],
        medium: [
            {
                tiles: [
                    [1, 1, 1, 5, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 5, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 2, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1]
                ],
                initItems: [
                    { row: 2, col: 4, dir: 0, type: "plesalka1" },
                    { row: 0, col: 2, dir: 2, type: "plesalka"  },
                    { row: 2, col: 6, dir: 2, type: "plesalec1" },
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
                    [1, 1, 1, 1, 1, 1, 2]
                ],
                initItems: [
                    { row: 4, col: 2, dir: 2, type: "plesalka2" },
                    { row: 2, col: 3, dir: 2, type: "plesalka1" },
                    { row: 0, col: 2, dir: 2, type: "plesalka"  },
                    { row: 4, col: 0, dir: 0, type: "plesalec2" },
                    { row: 2, col: 0, dir: 0, type: "plesalec1" },
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
