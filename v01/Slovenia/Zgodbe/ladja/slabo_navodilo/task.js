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
			  easy: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="3ws6{-#TsV/FiDOH],@w" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat" id="B?;|v01~xlCuK[~gr3VT"><field name="TIMES">5</field><statement name="DO"><block type="forward" id="xkJ|M##.2~;nDxx-)/KM"></block></statement><next><block type="left" id="On|c8A.J|c+`7-HwMi1)"><next><block type="controls_repeat" id="`(iWl{6u5i(8GNTWkm=S"><field name="TIMES">3</field><statement name="DO"><block type="forward" id="vei}@_Z)K70m06fQwAZW"></block></statement></block></next></block></next></block></next></block></xml>',
			  medium: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="3ws6{-#TsV/FiDOH],@w" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_for" id="9(qZMT,s|wi;B7FzSbTs"><field name="VAR">i</field><value name="FROM"><shadow type="math_number" id="{r9o{+y,QY)I!HW]uTmk"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number" id="Wfuhj.Ns,;)x0z)k4J!z"><field name="NUM">3</field></shadow></value><value name="BY"><shadow type="math_number" id=",Pf7/#wUW)E5f}Y56C}H"><field name="NUM">1</field></shadow></value><statement name="DO"><block type="left" id="@`D;TX/=:v1QJ4(S]!P7"><next><block type="forward" id="I_pYEZt-t:C06r_5fuk2"><next><block type="right" id="Z0M_5aFnD7A:PRpwWK!n"><next><block type="controls_for" id="82[_o}]nz/0}Z7!8x1}A"><field name="VAR">j</field><value name="FROM"><shadow type="math_number" id="8!48RFMz@;R7[j8w@2;."><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number" id="xV1PXq{xIjhZEC!G-l,A"><field name="NUM">10</field></shadow><block type="variables_get" id="fYfF*6vzfz1hYH_304z["><field name="VAR">i</field></block></value><value name="BY"><shadow type="math_number" id="P(fyOxmnJhSS{gCgj!zD"><field name="NUM">1</field></shadow></value><statement name="DO"><block type="forward" id="lp0~~jH_V9MRLVssvb7*"></block></statement></block></next></block></next></block></next></block></statement></block></next></block></xml>',
			  hard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="y*Z_r(MHKf=oXm*2{.]?" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_whileUntil" id="z9|ACVR{/V@IjsTM2jam"><field name="MODE">UNTIL</field><value name="BOOL"><block type="logic_compare" id="NCs+/`se.kA;=PUP!U~i"><field name="OP">EQ</field><value name="A"><block type="col" id="cc?_}!lFnA](`,7J]6l{"></block></value><value name="B"><block type="math_number" id="3jliy}4eHDb:+(uf/_xK"><field name="NUM">3</field></block></value></block></value><statement name="DO"><block type="forward" id="lPWh2I.*S_j8au_tKX.`"></block></statement><next><block type="left" id=":eIohXl@CvX#HUSq!CZ8"><next><block type="controls_whileUntil" id="|JRHg_v=|x#6nz,,K{.2"><field name="MODE">UNTIL</field><value name="BOOL"><block type="logic_compare" id="N`aeXjv|3[La_bwwZfo7"><field name="OP">EQ</field><value name="A"><block type="col" id="1:fNgaM~s3_R7D/YKx0u"></block></value><value name="B"><block type="math_number" id="LSkJt2B,mvv.oE/JO5i-"><field name="NUM">3</field></block></value></block></value><statement name="DO"><block type="forward" id="Hnua8qMlj_h{lEI@PpfK"></block></statement></block></next></block></next></block></next></block></xml>' 
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
		 medium: 15, 
		 hard: 17
	  },
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {     
			robot: {
				easy: ["forward", "left", "right", "row", "col"],
				medium: ["forward", "left", "right"],
				hard: ["forward", "left", "right","row","col"]
			}
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {
				easy: [],
				medium: ["math","variables"],
				hard: ["math","variables", "logic"]
			},
            singleBlocks: {
				easy: ["controls_if_else","controls_if", "controls_repeat","logic_compare", "math_number"],
				medium: [ "controls_for","controls_repeat","logic_compare","controls_if"],
				hard: ["controls_whileUntil","controls_repeat"]
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
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 19, col: 7, dir: 3, type: "green_robot" }
               ]
         }
      ],
	   medium: [
         {
             tiles: [
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 19, col: 7, dir: 3, type: "green_robot" }
               ]
         }
      ],
	  hard: [
         {
             tiles: [
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 19, col: 7, dir: 3, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   