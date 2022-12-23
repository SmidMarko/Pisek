function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno okno
		hideControls: {					//gumbi na urejevalniku
			restart: false,
			saveOrLoad: false,			//gumba za shranjevanje in nalaganje kode ukazov
			loadBestAnswer: false,
			speedSlider: false,
			backToFirst: false,
			nextStep: false,
			goToEnd: false,
		},
		introMaxHeight: "33%",				//maksimalna velikost prostora za navodila
		maxListSize: 100, 						//max. dolžina seznama
		scrollbars: true,
		zoom: {
			controls: true,
			scale: 1,
		},
		actionDelay: 200,						//parameter za časovni zamik med izvajanjem ukazov
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: 7,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: false,
			generatedBlocks: {
				robot: ["forward", "right","greenCell","withdrawableInFront","pickWithdrawable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_whileUntil"],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="kcgo}1B2[k_@pJL#M_ft" deletable="false" movable="false" editable="false" x="0" y="0"></block><block type="greenCell" id="~6D-rXEV`D:HV#VXfHJJ" x="144" y="29"></block><block type="forward" id=".0vT;tj963qKCPd4yT{A" x="13" y="64"></block><block type="controls_whileUntil" id="@1ku;[khiZb9@N;Tsh(q" x="56" y="106"><field name="MODE">UNTIL</field></block><block type="right" id="6+R8UAs?w*-!8.~:-CZx" x="235" y="136"></block><block type="withdrawableInFront" id="sa4[:_qqzMRnJo1U3#eH" x="52" y="188"></block><block type="controls_whileUntil" id="UsML|FiD,KLPEP]?@[JU" x="189" y="185"><field name="MODE">WHILE</field></block><block type="pickWithdrawable" id="yzs|ql(O_vlt]Y!V2~)?" x="62" y="230"></block></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: function(context, lastTurn) {
						var solved1 = false, solved2 = false;
						var err1, err2;
						try{robotEndConditions.checkPickedAllWithdrawables(context, lastTurn);}
						catch(err){
							solved1 = context.success;
							err1 = err;
						}
						try{robotEndConditions.checkReachGreenArea(context, lastTurn);}
						catch(err){
							solved2 = context.success;
							err2 = err;
						}						
						context.success = (solved1 && solved2);
						throw(err1.concat("\n", err2));
			},
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 8, offsetX: -14, zOrder: 8},
			tile: { num: 1, img: "tile.png", side: 60, zOrder: 0 },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			hole: { num: 5, img: "hole.png", side: 60, category: "hole", isHole: true, zOrder: 2 },
			marble: { num: 6, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 6 },
			marker: { num: 9, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 5 },
			paint: { num: 8, img: "tile.png", side: 60, category: "paint", isPaint: true, zOrder: 4 },
			trash: { num: 7, img: "trash.png", side: 60, category: "withdrawable", isWithdrawable: true, zOrder: 5 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
		 {
			tiles: [
				   [1, 1, 1, 1, 1, 1, 1, 1],
				   [1, 1, 7, 7, 7, 7, 1, 1],
				   [1, 1, 1, 1, 1, 7, 7, 1],
				   [1, 1, 7, 1, 1, 1, 7, 1],
				   [1, 1, 7, 1, 1, 1, 7, 1],
				   [1, 1, 7, 7, 7, 7, 7, 1],
				   [1, 1, 1, 1, 1, 1, 1, 1],
			   ],
			initItems: [
				  { row: 1, col: 1, dir: 0, type: "green_robot" },
				  { row: 3, col: 2, type: "green" },
			   ]
		 },
		 {
			tiles: [
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 7, 7, 7, 7, 7, 1, 1],
				[1, 1, 1, 1, 7, 1, 1, 1, 7, 7, 1],
				[1, 7, 1, 1, 1, 1, 1, 1, 1, 7, 1],
				[1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   ],
			initItems: [
				  { row: 2, col: 1, dir: 1, type: "green_robot" },
				  { row: 2, col: 4, type: "green" },
			   ]
		 },
		 {
			tiles: [
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 7, 7, 7, 1, 1, 1, 1, 7, 7, 7, 1, 1, 1],
				[1, 7, 7, 1, 7, 7, 1, 1, 7, 7, 1, 7, 1, 1, 1],
				[1, 7, 1, 1, 1, 7, 1, 7, 7, 1, 1, 7, 7, 7, 1],
				[1, 7, 7, 7, 1, 7, 7, 7, 1, 1, 1, 1, 1, 7, 1],
				[1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 1],
				[1, 1, 7, 7, 1, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			   ],
			initItems: [
				  { row: 6, col: 1, dir: 0, type: "green_robot" },
				  { row: 6, col: 5, type: "green" },
			   ]
		 },
		 {
			tiles: [
				   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				   [1, 7, 7, 7, 1, 7, 7, 7, 7, 1, 1, 1, 7, 7, 7, 1],
				   [1, 7, 1, 7, 1, 7, 1, 1, 7, 7, 1, 7, 7, 1, 7, 1],
				   [1, 7, 1, 7, 1, 7, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1],
				   [1, 1, 1, 7, 1, 7, 7, 1, 1, 7, 7, 1, 7, 7, 7, 1],
				   [1, 1, 1, 7, 7, 1, 7, 1, 1, 1, 7, 7, 7, 1, 1, 1],
				   [1, 1, 1, 1, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
			   ],
			initItems: [
				  { row: 4, col: 1, dir: 3, type: "green_robot" },
				  { row: 2, col: 11, type: "green" },
			   ]
		 },
		 {
			tiles: [
				   [1, 1, 1, 1, 1, 1, 1, 1],
				   [1, 7, 7, 7, 7, 7, 1, 1],
				   [1, 7, 1, 1, 1, 7, 7, 1],
				   [1, 7, 1, 7, 1, 1, 7, 1],
				   [1, 7, 1, 7, 7, 7, 7, 1],
				   [1, 7, 1, 1, 1, 1, 1, 1],
				   [1, 7, 1, 7, 7, 7, 1, 1],
				   [1, 7, 7, 7, 1, 7, 7, 1],
				   [1, 1, 1, 1, 1, 1, 7, 1],
				   [1, 1, 7, 7, 7, 1, 7, 1],
				   [1, 1, 7, 1, 7, 7, 7, 1],
				   [1, 1, 1, 1, 1, 1, 1, 1],
			   ],
			initItems: [
				  { row: 10, col: 1, dir: 0, type: "green_robot" },
				  { row: 3, col: 3, type: "green" },
			   ]
		 },
	  ]
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
