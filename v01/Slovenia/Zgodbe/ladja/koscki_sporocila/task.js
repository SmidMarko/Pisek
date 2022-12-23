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
			  easy: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="3ws6{-#TsV/FiDOH],@w" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat" id="B?;|v01~xlCuK[~gr3VT"><field name="TIMES">4</field><statement name="DO"><block type="forward" id="xkJ|M##.2~;nDxx-)/KM"></block></statement><next><block type="controls_if" id="Vd)Sk|WeGICzq~C|qWTN"><value name="IF0"><block type="logic_compare" id="zr~IE_+7:#(`kCU3-7#|"><field name="OP">EQ</field><value name="A"><block type="row" id="qJG{{t.no7ZM8asb:T)g"></block></value><value name="B"><block type="math_number" id="mdx7WqdG,`QJrJaYM,bL"><field name="NUM">16</field></block></value></block></value><statement name="DO0"><block type="controls_repeat" id="`(iWl{6u5i(8GNTWkm=S"><field name="TIMES">3</field><statement name="DO"><block type="forward" id="vei}@_Z)K70m06fQwAZW"></block></statement></block></statement></block></next></block></next></block></xml>',
			  medium: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="3ws6{-#TsV/FiDOH],@w" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat" id="5Igyi},rE3h_Uy!hd|E)"><field name="TIMES">7</field><statement name="DO"><block type="forward" id="?u9nqf4n=)8;XX}a(jq1"></block></statement><next><block type="controls_if" id="!iOn{JK)!CFlH6RfnJAt"><value name="IF0"><block type="logic_compare" id="ePDqQ(=ExJa`Fk8da#}R"><field name="OP">EQ</field><value name="A"><block type="row" id=")a`g7Vys,,?NwDa4@FU+"></block></value><value name="B"><block type="math_number" id="QD(U/kaxec4=X-@tE_]c"><field name="NUM">14</field></block></value></block></value><statement name="DO0"><block type="left" id="OSEA;Qf0qv|bEe[QRAa."><next><block type="controls_repeat" id="h]*WJ|Oo8]rV}y=czPw("><field name="TIMES">5</field><statement name="DO"><block type="forward" id="Svyn@pvllz,xwxTPn+}p"></block></statement></block></next></block></statement></block></next></block></next></block></xml>',
			  hard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="y*Z_r(MHKf=oXm*2{.]?" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_whileUntil" id="_.rn{I;Ai{]IoK-]=FnF"><field name="MODE">WHILE</field><statement name="DO"><block type="left" id="iCuP6+0Q=J8e?:kmDR,/"><next><block type="forward" id="[ThuE5W6lhDHUcJRmuyh"><next><block type="right" id="Al/Q?@:l8i4E5rfGWnq)"><next><block type="controls_repeat" id="B~twZeLK8wwmzEeedEhh"><field name="TIMES">3</field><statement name="DO"><block type="forward" id="HpsZs(0HwoVoT6BoGsri"></block></statement></block></next></block></next></block></next></block></statement></block></next></block></xml>' 
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
				medium: ["forward", "left", "right"],
				hard: ["forward", "left", "right","row","col"]
			}
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {
				easy: [],
				medium: ["variables"],
				hard: []
			},
            singleBlocks: {
				easy: ["controls_if_else","controls_if", "controls_repeat","logic_compare", "math_number"],
				medium: [ "controls_repeat","logic_compare", "math_number", "controls_if"],
				hard: ["controls_whileUntil","controls_repeat","logic_compare", "math_number"]
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
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1],
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
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			       [1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
   