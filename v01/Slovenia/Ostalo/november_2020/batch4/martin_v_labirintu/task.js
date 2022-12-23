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
		maxInstructions: {				//omejitev števila ukazov
			basic: 20,
			easy: 30,
			medium: 75,
			hard: 100,
		},
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory:  true,
			generatedBlocks: {
				robot: {
					easy: ["forward","forwardAmount","left","right","numberUnder"],
				},
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: {
					basic: [],
					easy: ["functions","logic","variables"],
					medium: [],
					hard: [],
				},
				singleBlocks:  ["math_arithmetic","math_number"],
				excludedBlocks:  [],
			},
			variablesBlocks:{
				easy: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: {				//funkcija za preverjanje uspešnosti rešitve
			easy: robotEndConditions.checkReachGreenArea,
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
			marker: { num: 7, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 5 },
			paint: { num: 8, img: "paint.png", side: 60, category: "paint", isPaint: true, zOrder: 4 },
			0: { num: 100, side: 60, category: "number", value: 0, zOrder: 2 },
			1: { num: 101, side: 60, category: "number", value: 1, zOrder: 2 },
			2: { num: 102, side: 60, category: "number", value: 2, zOrder: 2 },
			3: { num: 103, side: 60, category: "number", value: 3, zOrder: 2 },
			4: { num: 104, side: 60, category: "number", value: 4, zOrder: 2 },
			5: { num: 105, side: 60, category: "number", value: 5, zOrder: 2 },
			6: { num: 106, side: 60, category: "number", value: 6, zOrder: 2 },
			7: { num: 107, side: 60, category: "number", value: 7, zOrder: 2 },
			8: { num: 108, side: 60, category: "number", value: 8, zOrder: 2 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 1, 1, 1, 1, 2],
					[2, 2, 2, 1, 2, 2, 1, 2],
					[2, 2, 2, 1, 3, 2, 1, 2],
					[2, 1, 2, 2, 2, 2, 1, 2],
					[2, 1, 1, 1, 1, 1, 1, 2],
					[2, 2, 2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 4, col: 1, dir: 1, type: "green_robot" },
					{ row: 5, col: 1, type: 5 },
				],
			},
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
					[2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2],
					[2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2],
					[2, 2, 2, 1, 2, 3, 2, 1, 2, 1, 2],
					[2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2],
					[2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 2],
					[2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2],
					[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 7, col: 1, dir: 1, type: "green_robot" },
					{ row: 8, col: 1, type: 8 },
				],
			},
			{
				tiles: [
					[2, 2, 2, 2, 2, 2],
					[2, 2, 2, 3, 1, 2],
					[2, 1, 2, 2, 1, 2],
					[2, 1, 1, 1, 1, 2],
					[2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 2, col: 1, dir: 1, type: "green_robot" },
					{ row: 3, col: 1, type: 3 },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
