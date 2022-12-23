function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "gosenica.png", side: 60, nbStates: 9, isObstacle: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         hole: { num: 2, img: "gnezdo1.png", side: 45, offsetX: 8, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 3, img: "hrana1.png", side: 45, offsetX: 8, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
		 hole2: { num: 4, img: "gnezdo2.png", side: 45, offsetX: 8, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble2: { num: 5, img: "hrana2.png", side: 45, offsetX: 8, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
		 hole3: { num: 6, img: "gnezdo3.png", side: 45, offsetX: 8, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble3: { num: 7, img: "hrana3.png", side: 45, offsetX: 8, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
		 hole4: { num: 8, img: "gnezdo4.png", side: 45, offsetX: 8, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble4: { num: 9, img: "hrana4.png", side: 45, offsetX: 8, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
		 hole5: { num: 10, img: "gnezdo5.png", side: 45, offsetX: 8, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble5: { num: 11, img: "hrana5.png", side: 45, offsetX: 8, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
		 hole6: { num: 12, img: "gnezdo6.png", side: 45, offsetX: 8, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble7: { num: 13, img: "hrana6.png", side: 45, offsetX: 8, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
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
                   [1, 7, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         },
         {
            tiles: [
                   [1, 7, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1]
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
                   [1, 5, 1, 1, 4, 1, 1],
                   [1, 7, 1, 1, 6, 1, 1],
                   [1, 9, 1, 1, 8, 1, 1],
                   [1, 11, 1, 1, 10, 1, 1],
                   [1, 13, 1, 1, 12, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         },
         {
            tiles: [
                   [1, 3, 1, 1, 2, 1, 1],
                   [1, 5, 1, 1, 4, 1, 1],
                   [1, 7, 1, 1, 6, 1, 1],
                   [1, 9, 1, 1, 8, 1, 1],
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
                   [1, 1, 1, 1, 5, 1, 1, 1,4, 1, 1, 1, 1],
                   [1, 1, 1, 7, 1, 6, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 9, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1],
                   [1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1],
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
