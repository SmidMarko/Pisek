function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      topMargin: 300,
      backgroundColor: "#A5D2FF",
      borderColor: "#111111",
      showLabels: true,
	  startingExample:{
		  blockly: {
			  easy: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="+:)=Ik1}tSK7nQg`bai-" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_whileUntil" id="M8{/Gt|5(#-?EdWvimUe"><field name="MODE">UNTIL</field><value name="BOOL"><block type="logic_compare" id="NUQ.?aZRP~+:lw~RxB?c"><field name="OP">EQ</field><value name="A"><block type="math_number" id="4aYxShxjitxN/mDD5XRz"><field name="NUM">4</field></block></value><value name="B"><block type="row" id="I-l_gBNctj3`,[poCGd_"></block></value></block></value><statement name="DO"><block type="forward" id="RpRuOx?N7aGp1-K#Sze-"></block></statement><next><block type="left" id="u*JCP(r=xpD9f.xJG1mt"><next><block type="controls_whileUntil" id="P=|`JbLaPVZCbe,MyrcM"><field name="MODE">UNTIL</field><value name="BOOL"><block type="logic_compare" id="uKFDC/xNr(L(.51?66c~"><field name="OP">EQ</field><value name="A"><block type="math_number" id="C?ri29)?]1o069C_uJ*a"><field name="NUM">5</field></block></value><value name="B"><block type="col" id="H85{8{;XqS49tforvW;w"></block></value></block></value><statement name="DO"><block type="forward" id="=8RK]8aKWNjLEj2bUKlj"></block></statement></block></next></block></next></block></next></block></xml>',
			  medium: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="+:)=Ik1}tSK7nQg`bai-" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_whileUntil" id="PCoylvMV1yka):`TpNo1"><field name="MODE">UNTIL</field><value name="BOOL"><block type="logic_compare" id="Y-lOuUt:{qHcQDLB26A|"><field name="OP">EQ</field><value name="A"><block type="math_number" id="r!zleMq*4d{A|?hoPL|X"><field name="NUM">3</field></block></value><value name="B"><block type="col" id="-LNqGkZOnJVV6mtPR49x"></block></value></block></value><statement name="DO"><block type="left" id="djY#+7a1v/.iPnPwsxfk"><next><block type="forward" id="T:,spBz1z6;6tYLF]XOt"><next><block type="forward" id="L;*,}|:)s+d_OD86fvhg"><next><block type="right" id="rd+A1rC)]~w8|c6;@:]h"><next><block type="forward" id="cXy[=NA@=8d}lxFal_2`"><next><block type="forward" id="ge{Fe0/KJoVRFZm3mKf!"></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></xml>',
			  hard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="y*Z_r(MHKf=oXm*2{.]?" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="forward" id="68eNp|Jc+~;4Oe4O`Ru)"><next><block type="forward" id="|wqL]8L5Xs+DRP:xXa#k"><next><block type="controls_repeat" id="Tp;_BiWrjPp6:z}_QJ-N"><field name="TIMES">4</field><statement name="DO"><block type="left" id="L!tMIb1O~2goZab-zWQE"><next><block type="forward" id="]X*+s5R4FZ;ua7_gk_jT"><next><block type="right" id="|ln;g9L69?g75IV|Cf_]"><next><block type="forward" id="XMlRnhJJ~4gmc=-Sm:7]"></block></next></block></next></block></next></block></statement><next><block type="left" id="7].JY[OVYJ~d,f2h:gV|"><next><block type="forward" id="vShQYGzPIrWc0Sc-b{;T"><next><block type="left" id=";1wsx}m]6i05Kd#mv0:q"><next><block type="forward" id="z@WH9rf6LCXgBOyhJ;vu"><next><block type="forward" id="m~DJ3BA?l]lkHB.q3[55"><next><block type="controls_repeat" id="cs*EQtMD2#evxhgB;7ko"><field name="TIMES">3</field><statement name="DO"><block type="left" id="5L9CVmj{1DdJ.4xY*2?G"><next><block type="forward" id="*G}vp#cQLu9ISBmj+YCA"><next><block type="left" id="p?R7ej-(W.9HJ5ZpF)9O"><next><block type="forward" id="Yc-tXMU9!1E*Sf`4IK=N"></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>' 
			  }
	  },
      itemTypes: {
		 tile: { num: 1, img: "tile.png", side: cellSide, isObstacle: false, zOrder: 0 },
         green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
         obstacle: { num: 2, img: "ozadje.png", side: cellSide, category: "obstacle", isObstacle: true },
         obstacle2: { num: 3, img: "ozadje_2.png", side: cellSide, category: "obstacle", isObstacle: true },
         green: { num: 4, img: "green.png", side: cellSide, color: "vert", category: "green" }
      },
      maxInstructions: {
		  easy: 11,
		 medium: 10, 
		 hard: 17
	  },
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {     
			robot: {
				easy: ["forward", "left", "right", "row", "col"],
				medium: ["forward", "left", "right", "row", "col"],
				hard: ["forward", "left", "right"]
			}
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
				easy: ["controls_whileUntil", "logic_compare", "math_number"],
				medium: ["controls_whileUntil", "logic_compare", "math_number"],
				hard: ["controls_repeat"]
			}
         }
      },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkReachGreenArea //robotEndConditions.checkMarblesInHoles 
   };

   subTask.data = {
      easy: [
         {
            tiles: [
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 4, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 8, col: 7, dir: 3, type: "green_robot" }
               ]
         }
      ],
	   medium: [
         {
            tiles: [
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 4, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 16, col: 6, dir: 3, type: "green_robot" }
               ]
         }
      ],
	  hard: [
         {
            tiles: [
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 4, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 17, col: 7, dir: 3, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   