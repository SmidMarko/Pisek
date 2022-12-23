function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "pisek.png", side: 60, nbStates: 9, isObstacle: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         hole: { num: 2, img: "hole.png", side: 45, offsetX: 8, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 3, img: "seed.png", side: 45, offsetX: 8, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
      },
      maxInstructions: 22,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "north", "pickTransportable", "dropTransportable", "onTransportable", "onHole"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat", "controls_if"]
         },
      },
	  
		startingExample: {
		  easy:{
			  blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="@vwDXcyI-vy23T~vo.TT" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat_ext" id=".djM5B2}pS2,_Q*,.X,)"><value name="TIMES"><shadow type="math_number" id="](yXdw?F(t6@Q{L{ttFz"><field name="NUM">18</field></shadow></value><statement name="DO"><block type="controls_if" id="cb0@!8}GY~z{602h3E7d"><value name="IF0"><block type="onHole" id="``(61lS2Eh2C(I}k{6:w"></block></value><statement name="DO0"><block type="pickTransportable" id="b_58E[H~Br[@|`MIvF+E"></block></statement><next><block type="controls_if" id=",TI[#R+g6QhHJ?=0Nnaz"><value name="IF0"><block type="onTransportable" id="tlxg]9(FogA[-/,7sW7+"></block></value><statement name="DO0"><block type="dropTransportable" id="7-kZL`L9UlI/Xzjsms#x"></block></statement><next><block type="west" id="WSR(46mGZ7ZbQia98,~}"></block></next></block></next></block></statement></block></next></block></xml>'		  },
	  },
      additionalBlocksByLevel: {},
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: function(context, lastTurn) {
         var solved = true;
         for (var iRow = 0; iRow < context.tiles.length; iRow++) {
            var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
            for (var iCol = 0; iCol < row.length; iCol++) {
               var marbles = context.getItems(iRow, iCol, {category: "marble"});
               var holes = context.getItems(iRow, iCol, {category: "hole"});
               if (marbles.length != holes.length) {
                  solved = false;
               }
            }
         }
         if (solved) {
            context.success = true;
            throw("Bravo, pospravil si vsa zrna!");
         }
         if (lastTurn) {
            context.success = false;
            throw("Zrna so napačno pospravljena!");
         }
      },
      computeGrade: function(context, message) {
         var rate = 0;
         if (context.success) {
            rate = 1;
         }
         return {
            successRate: rate,
            message: message
         };
      }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 3, 1, 2, 3, 1, 1, 2, 1, 3, 2, 1, 1, 3, 2, 3, 2, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 0, dir: 0, type: "green_robot" },
               ]
         },
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 3, 1, 2, 3, 1, 1, 2, 1, 3, 2, 1, 1, 3, 2, 3, 2, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 0, dir: 0, type: "green_robot" },
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 3, 1, 1, 2, 1, 1, 1],
                   [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
                   [1, 1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1],
                   [1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 2, 1],
                   [1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
                   [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 2, 1, 1],
                   [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
               ],
            initItems: [
                  { row: 7, col: 0, dir: 0, type: "green_robot" },
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 1, 1, 1],
                   [1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
                   [1, 3, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 1, 1],
                   [1, 1, 1, 2, 1, 1, 1, 1, 3, 1, 1, 1, 1],
                   [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3, 1],
                   [1, 3, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1]
               ],
            initItems: [
                  { row: 7, col: 0, dir: 0, type: "green_robot" },
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
