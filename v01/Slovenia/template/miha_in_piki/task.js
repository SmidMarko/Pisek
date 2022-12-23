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
		maxInstructions: 17,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot:  ["north","west","east","south","changeRobot", "pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_repeat"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: robotEndConditions.checkReachGreenAreaMULTIROBOTspecific,
			  
		cellSide: 60,	
		numberOfRobots: 2,
		itemTypes: {
			Miha: { rank: 0, img: "miha.png", img2: "miha_in_piki.png", img_og: ["miha.png", "miha_in_piki.png"], category: "robot", side: 80, nbStates: 8, offsetX: -14, zOrder: 8},
			Piki: { rank: 1, img: "piki.png", category: "robot", isTransportable: true, side: 80, nbStates: 8, offsetX: -14, zOrder: 8},
			tile1: { num: 11, img: "tile.png", side: 60, zOrder: 0 },
			tile2: { num: 12, img: "tile1.png", side: 60, zOrder: 0 },
			obstacle: { num: 2, img: "obstacle1.png", side: 60, category: "obstacle", isObstacle: true, offsetX: 0,  zOrder: 8 },
			obstacle2: { num: 22, img: "obstacle2.png", side: 60, category: "obstacle", isObstacle: true, offsetX: 0,  zOrder: 8 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			button1: {num: 41, img: "pressure_off.png", img2: "pressure_on.png", img_og: ["pressure_off.png","pressure_on.png"], side: 60, category: "button", id: 1, zOrder: 1 },
			button2: {num: 42, img: "pressure_off.png", img2: "pressure_on.png", img_og: ["pressure_off.png","pressure_on.png"], side: 60, category: "button", id: 2, zOrder: 1 },
			door1: {num: 51, img: "door_a.png", img2: "door_b.png", img_og: ["door_a.png","door_b.png"], side: 60, category: "door", closed: true, id: 1, zOrder: 1 },
			door2: {num: 52, img: "door_c.png", img2: "door_a.png", img_og: ["door_c.png","door_a.png"], side: 60, category: "door", closed: true, id: 2, zOrder: 1 },
			door3: {num: 53, img: "door_d.png", img2: "door_b.png", img_og: ["door_d.png","door_b.png"], side: 60, category: "door", closed: true, id: 1, zOrder: 1 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[12, 11, 12, 11, 12, 11, 12],
					[11, 12, 11, 12, 11, 12, 11],
					[12, 11, 12, 11, 12, 11, 12],
					[11, 12, 11, 12, 11, 12, 3],
					[12, 11, 12, 11, 12, 11, 12],
					[11, 12, 11, 12, 11, 12, 11],
					[12, 11, 12, 11, 12, 11, 12],
				],
				initItems: [
					{ row: 6, col: 1, dir: 3, type: "Miha" },
					{ row: 0, col: 1, dir: 1, type: "Piki" },
					{ row: 0, col: 0, type: "obstacle" },
					{ row: 0, col: 2, type: "obstacle" },
					{ row: 0, col: 3, type: "obstacle" },
					{ row: 0, col: 4, type: "obstacle" },
					{ row: 0, col: 5, type: "obstacle" },
					{ row: 0, col: 6, type: "obstacle" },
					{ row: 1, col: 0, type: "obstacle" },
					{ row: 1, col: 4, type: "obstacle" },
					{ row: 1, col: 5, type: "obstacle" },
					{ row: 1, col: 6, type: "obstacle" },
					{ row: 2, col: 0, type: "obstacle" },
					{ row: 2, col: 1, type: "obstacle" },
					{ row: 2, col: 2, type: "obstacle" },
					{ row: 2, col: 6, type: "obstacle" },
					{ row: 3, col: 0, type: "obstacle" },
					{ row: 3, col: 1, type: "obstacle" },
					{ row: 3, col: 2, type: "obstacle" },
					{ row: 3, col: 3, type: "obstacle" },
					{ row: 3, col: 4, type: "obstacle" },
					{ row: 4, col: 0, type: "obstacle" },
					{ row: 4, col: 1, type: "obstacle" },
					{ row: 4, col: 2, type: "obstacle" },
					{ row: 4, col: 6, type: "obstacle" },
					{ row: 5, col: 0, type: "obstacle" },
					{ row: 5, col: 4, type: "obstacle" },
					{ row: 5, col: 5, type: "obstacle" },
					{ row: 5, col: 6, type: "obstacle" },
					{ row: 6, col: 0, type: "obstacle" },
					{ row: 6, col: 2, type: "obstacle" },
					{ row: 6, col: 3, type: "obstacle" },
					{ row: 6, col: 4, type: "obstacle" },
					{ row: 6, col: 5, type: "obstacle" },
					{ row: 6, col: 6, type: "obstacle" },
				],
			},
		],
		medium: [
			{
				tiles: [
					[12, 11, 12, 11, 12, 11, 12],
					[11, 12, 11, 12, 11, 12, 11],
					[12, 11, 12, 11, 12, 11, 12],
					[11, 12, 11, 12, 11, 3, 11],
				],
				initItems: [
					{ row: 1, col: 1, dir: 0, type: "Miha" },
					{ row: 0, col: 5, dir: 2, type: "Piki" },
					{ row: 0, col: 2, type: "obstacle" },
					{ row: 2, col: 0, type: "obstacle" },
					{ row: 2, col: 1, type: "obstacle" },
					{ row: 2, col: 2, type: "obstacle" },
					{ row: 3, col: 2, type: "obstacle2" },
					{ row: 3, col: 3, type: "obstacle2" },
					{ row: 3, col: 4, type: "obstacle2" },
					{ row: 3, col: 6, type: "obstacle2" },
					{ row: 1, col: 2, type: "door3" },
					{ row: 0, col: 3, type: "button1" },
				],
			},
		],
		hard: [
			{
				tiles: [
					[12, 11, 3, 11, 12, 11, 12],
					[11, 12, 11, 12, 11, 12, 11],
					[12, 11, 12, 11, 12, 11, 12],
					[11, 12, 11, 12, 11, 12, 11],
					[12, 11, 12, 11, 12, 11, 12],
					[11, 12, 11, 12, 11, 12, 11],
					[12, 11, 12, 11, 12, 11, 12],
				],
				initItems: [
					{ row: 0, col: 6, dir: 1, type: "Miha" },
					{ row: 6, col: 0, dir: 3, type: "Piki" },
					{ row: 5, col: 1, type: "obstacle" },
					{ row: 6, col: 1, type: "obstacle" },
					{ row: 1, col: 4, type: "obstacle" },
					{ row: 0, col: 4, type: "obstacle" },
					{ row: 3, col: 4, type: "obstacle" },
					{ row: 4, col: 4, type: "obstacle" },
					{ row: 4, col: 5, type: "obstacle" },
					{ row: 4, col: 6, type: "obstacle" },
					{ row: 0, col: 0, type: "obstacle2" },
					{ row: 0, col: 1, type: "obstacle2" },
					{ row: 0, col: 3, type: "obstacle2" },
					{ row: 2, col: 4, type: "door1" },
					{ row: 5, col: 0, type: "door2" },
					{ row: 3, col: 0, type: "button1" },
					{ row: 3, col: 5, type: "button2" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["easy","medium","hard"], null, true);
//initWrapper(initTask, null, null, true);
