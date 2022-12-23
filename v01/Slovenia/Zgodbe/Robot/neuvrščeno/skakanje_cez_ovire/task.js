function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hasGravity: true,
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
         obstacle: { num: 2, img: "ozadje.png", side: cellSide, category: "obstacle", isObstacle: true },
         obstacle2: { num: 3, img: "ozadje_2.png", side: cellSide, category: "obstacle", isObstacle: true },
         green: { num: 4, img: "green.png", side: cellSide, color: "vert", category: "green" },
         itemX: { num: 6, img: "X.png", img2: "X2.png", side: cellSide, category: "observable", observed: false },
         platform: { num: 8, img: "lava.png", side: cellSide, category: "platform", isObstacle: true }
      },
      maxInstructions: {
         easy: 0,
         medium: 0,
         hard: 0
      },
      includeBlocks: {
          groupByCategory: false,
          generatedBlocks: {
              robot: {
                  easy: ["east", "north", "south", "itemObserve", "onObservableItem"],
                  medium: ["east", "north", "south", "jump", "jumpRight", "jumpLeft"],
                  hard: ["east", "north", "south", "jump", "jumpRight", "jumpLeft"],
              },
          },
          standardBlocks: {
              includeAll: false,
              wholeCategories: [],
              singleBlocks: ["controls_repeat", "controls_if"]
          }
      },
	  ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkObservedAllItems
   };



    subTask.data = {
        easy: [
            {
                tiles: [
                    [3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 3, 3, 2, 2, 2, 2],
                    [1, 1, 6, 1, 1, 1, 3, 3, 3, 1, 3, 2, 2, 2, 2, 2],
                    [3, 2, 2, 2, 2, 2, 3, 3, 3, 1, 1, 1, 1, 1, 4, 2],
                    [3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2]
                ],
                initItems: [
                    { row: 1, col: 0, dir: 0, type: "green_robot" }
                ]
            }
        ],
        medium: [
            {
                tiles: [
                    [2, 2, 3, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                    [2, 2, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 1, 2, 2],
                    [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                    [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                    [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                    [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                    [2, 2, 1, 3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                    [2, 2, 1, 3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                    [2, 2, 1, 3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                    [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                    [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
                    [2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 4, 2],
                    [2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
                ],
                initItems: [
                    { row: 11, col: 1, dir: 0, type: "green_robot" }
                ]
            }
        ],
        hard: [
            {
                tiles: [
                    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 4, 2],
                    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                    [2, 8, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
                    [2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2],
                    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
                ],
                initItems: [
                    { row: 11, col: 1, dir: 0, type: "green_robot" }
                ]
            }
        ]
    };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
