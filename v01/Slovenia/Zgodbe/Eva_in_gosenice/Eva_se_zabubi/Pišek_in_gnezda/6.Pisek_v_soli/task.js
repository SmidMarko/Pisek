function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "pisek.png", side: 60, nbStates: 9, isObstacle: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         hole: { num: 2, img: "hole.png", side: 45, offsetX: 8, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 3, img: "seed.png", side: 45, offsetX: 8, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 }
      },
      maxInstructions: 15,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: {
               easy: ["east", "pickTransportable", "dropTransportable", "onHole"],
               medium: ["east", "west", "south", "pickTransportable", "dropTransportable", "onHole", "onTransportable"],
               hard: ["east", "west", "south", "pickTransportable", "dropTransportable", "onHole", "onTransportable"]
            }
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {
               easy: ["controls_whileUntil", "logic_negate", "controls_if"],
               medium: ["controls_repeat", "controls_whileUntil", "logic_negate","controls_if"],
               hard: ["controls_whileUntil", "logic_negate", "controls_repeat", "controls_if"]
            }
         }
      },
	  startingExample: {
		  easy:{
			  blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="CROZ00Q:=R?5PX!/`#tR" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="east" id="7ut{k7l0;4cmaaE94-AP"><next><block type="dropTransportable" id="-Ov[!yvp(Rvl=6{Dl,OS"><next><block type="controls_whileUntil" id="R-pVpq.Cgo+1;Jg{90(J"><field name="MODE">WHILE</field><statement name="DO"><block type="east" id="jRiG63luB}4zA6=irn~b"></block></statement><next><block type="pickTransportable" id="w;?ol=f,dZSpc[k+0R+i"></block></next></block></next></block></next></block></next></block></xml>'
		  },
	  },
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkMarblesInHoles
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 3, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         },
         {
            tiles: [
                   [1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 3, 1, 1, 2, 1, 1],
                   [1, 3, 1, 1, 2, 1, 1],
                   [1, 3, 1, 1, 2, 1, 1],
                   [1, 3, 1, 1, 2, 1, 1],
                   [1, 3, 1, 1, 2, 1, 1],
                   [1, 3, 1, 1, 2, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         },
         {
            tiles: [
                   [1, 3, 1, 1, 2, 1, 1],
                   [1, 3, 1, 1, 2, 1, 1],
                   [1, 3, 1, 1, 2, 1, 1],
                   [1, 3, 1, 1, 2, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 1, 1],
                   [1, 1, 1, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
                   [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
