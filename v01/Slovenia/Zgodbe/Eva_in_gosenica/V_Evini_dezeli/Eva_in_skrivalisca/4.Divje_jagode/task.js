function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: true,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "gosenica.png", side: 60, nbStates: 9,offsetX: 0, offsetY: 10, isObstacle: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         hole: { num: 2, img: "gnezdo3.png", side: 40, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 10 },
         seed: { num: 3, img: "hrana3.png", side: 40, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1, offsetX: 8 },
		 hole1: { num: 4, img: "gnezdo2.png", side: 40, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 10 },
         seed1: { num: 5, img: "hrana2.png", side: 40, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1, offsetX: 8 },
		 hole2: { num: 6, img: "gnezdo1.png", side: 40, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 10 },
         seed2: { num: 7, img: "hrana1.png", side: 40, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1, offsetX: 8 },
		 hole3: { num: 8, img: "gnezdo6.png", side: 40, category: "hole", isObstacle: false, isHole: true, zOrder: 0, offsetX: 10 },
         seed3: { num: 9, img: "hrana6.png", side: 40, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1, offsetX: 8 },
		
		
		
		},
		startingExample: {
		  medium:{
			  blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="HPppz-{P~smMymd*0Cnh" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="east" id="RVDB|Pe1UW@?6r}VXM4U"><next><block type="east" id="_a?w0bo@o#j6?*Bd4C5b"><next><block type="controls_repeat_ext" id="ga{m,wHeqx1XgI1(;fB|"><value name="TIMES"><shadow type="math_number" id="L`G+Qaz3NMVq(Rd21zS="><field name="NUM">4</field></shadow></value><statement name="DO"><block type="pickTransportable" id="MNzqn+obE1e}0e-b+bVc"><next><block type="controls_repeat_ext" id="v~Y!++C8bQEDC{m(ld0i"><value name="TIMES"><shadow type="math_number" id="`#WNY*TD7Y59OzQEhZf;"><field name="NUM">5</field></shadow></value><statement name="DO"><block type="east" id="5;.G**wO#c#*8XPm7Ak8"></block></statement><next><block type="dropTransportable" id="8|oT~K2RT0:;SuAmnDyV"><next><block type="west" id="N_jY:7aRG6iLl*_/jG.V"></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>'}
		},
      maxInstructions: 15,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
            robot: ["east", "west", "north", "pickTransportable", "dropTransportable"]
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["controls_repeat"]
         }
      },
	  
      ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkMarblesInHoles
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 3, 2, 1, 5, 4, 1, 7, 6, 1, 9, 8, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 6, 1],
                   [1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
                   [1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 4, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
                   [1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1],
                   [1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1],
                   [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                   [1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 6, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
