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
		introMaxHeight: "80%",				//maksimalna velikost prostora za navodila
		maxListSize: 100, 						//max. dolžina seznama
		scrollbars: true,
		showLabels: false,
		zoom: {
			controls: true,
			scale: 1,
		},
		actionDelay: 200,						//parameter za časovni zamik med izvajanjem ukazov
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: {				//omejitev števila ukazov
			basic: 0,
			easy: 7,
			medium: 9,
			hard: 0,
		},
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: {
				basic: false,
				easy: false,
				medium:false,
				hard: true,
			},
			generatedBlocks: {
				robot: {
					shared: ["south", "north", "west"],
					easy: [],
					medium: [],
					hard: [],
				},
			},
			standardBlocks: {
				includeAll: {
					basic: false,
					easy: false,
					medium: false,
					hard: true,
				},
				wholeCategories: {
					basic: [],
					easy: [],
					medium: [],
					hard: [],
				},
				singleBlocks: {
					basic: [],
					easy: ["controls_repeat"],
					medium: ["controls_repeat"],
					hard: [],
				},
				excludedBlocks: {
					basic: [],
					easy: [],
					medium: [],
					hard: [], //ignorira ker je includeAll: true
				},
			},
			variables:{
				basic: [],
				easy: [],
				medium: [],
				hard: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: {
				basic: '',
				easy: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Xg}J;wHYAL.@VMIWt-N;" deletable="false" movable="false" editable="false" x="0" y="0"></block><additional>{}</additional></xml>',
				medium: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Xg}J;wHYAL.@VMIWt-N;" deletable="false" movable="false" editable="false" x="0" y="0"></block><additional>{}</additional></xml>',
				hard: '',
			},
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: {				//funkcija za preverjanje uspešnosti rešitve
			basic: robotEndConditions.checkReachGreenArea,
			easy: function(context, lastTurn) {
						var solved1 = false, solved2 = false;
						var err1, err2;
						try{robotEndConditions.checkPickedAllCollectibles(context, lastTurn);}
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
			medium: robotEndConditions.checkMarblesInHoles,
			hard: robotEndConditions.checkMarkersPainted,
		},
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 8, offsetX: -14, zOrder: 8},
			tile: { num: 1, img: "tile.png", side: 60, zOrder: 0 },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			//pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			//hole: { num: 5, img: "hole.png", side: 60, category: "hole", isHole: true, zOrder: 2 },
			//marble: { num: 6, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 6 },
			//marker: { num: 7, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 5 },
			//paint: { num: 8, img: "paint.png", side: 60, category: "paint", isPaint: true, zOrder: 4 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		basic: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2],
					[2, 1, 1, 1, 1, 1, 3, 2],
					[2, 2, 1, 1, 1, 2, 2, 2],
				],
				initItems: [
					{ row: 1, col: 1, dir: 0, type: "green_robot" },
				],
			},
		],
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2],
					[2, 3, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 2, col: 13, dir: 2, type: "green_robot" },
				],
			},
		],
		medium: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2],
					[2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
					[2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
					[2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
					[2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
					[2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
					[2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
					[2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
					[2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
					[2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2],
					[2, 3, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 11, col: 13, dir: 2, type: "green_robot" },
				],
			},
		],
		hard: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 0, dir: 0, type: "green_robot" },
					{ row: 0, col: 1, type: "marker" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["easy", "medium"], null, true);
//initWrapper(initTask, null, null, true);
