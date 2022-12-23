function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_dragon.png", side: 80, nbStates: 9, isObstacle: true, offsetX: - 7, offsetY: 5, category: "robot", team: 0, zOrder: 2 },
         paint: { img: "paint2.png", side: cellSide, category: "paint", isPaint: true, isObstacle: false, hasColor: true, color: "gris", zOrder: 1 },
         marker: { num: 2, img: "marker.png", side: cellSide, category: "marker", isObstacle: false, isMarker: true, zOrder: 0 }
      },
      maxInstructions: {
         easy: 25,
         medium: 40,
         hard: 40
      },
      includeBlocks: {
         groupByCategory: {
            easy: true,
            medium: true,
            hard: true
         },
         generatedBlocks: {
            robot: {
               easy: ["east", "paint"],
               medium: ["east", "west", "north", "south", "paint"],
               hard: ["east", "west", "north", "south", "paint"]
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["functions", "variables", "math", "loops", "logic"],
            singleBlocks: {
               easy: ["controls_repeat_ext"],
               medium: ["controls_repeat_ext"],
               hard: ["controls_repeat_ext", "math_arithmetic", "math_number"]
            }
         },
         variables: {
            easy: [],
            medium: [],
            hard: []
         }
      },
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkMarkersPainted
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ],
      medium: [
				{
            tiles: [
				   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				   [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
				   [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
				   [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2],
				   [1, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2],
				   [1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
				   [1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
				   [1, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2],
				   [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2],
				   [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
				   [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
				   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]				   

               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         }
         
      ],
      hard: [
         {
            tiles: [
				   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				   [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
				   [1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
				   [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
				   [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
				   [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
				   [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1],
				   [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
				   [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1],
				   [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
				   [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
				   [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
				   [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]
               ],
            initItems: [
                  { row: 12, col: 0, dir: 0, type: "green_robot" }
               ]
         }
         
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
