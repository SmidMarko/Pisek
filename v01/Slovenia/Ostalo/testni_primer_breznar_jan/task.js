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
		showLabels: false,
		zoom: {
			controls: true,
			scale: 1,
		},
		actionDelay: 200,						//parameter za časovni zamik med izvajanjem ukazov
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: {				//omejitev števila ukazov
			basic: 0,
			easy: 15,
			medium: 15,
			hard: 15,
		},
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: {
				basic: false,
				easy: false,
				medium:false,
				hard: false,
			},
			generatedBlocks: {
				robot: {
					shared: ["east", "west", "south"],
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
					hard: false,
				},
				wholeCategories: {
					basic: [],
					easy: [],
					medium: [],
					hard: [],
				},
				singleBlocks: {
					basic: [],
					easy: [],
					medium: [],
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
				easy: '',
				medium: '',
				hard: '',
			},
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: {				//funkcija za preverjanje uspešnosti rešitve
			basic: robotEndConditions.checkReachGreenArea,
			easy: robotEndConditions.checkReachGreenArea,
			medium: robotEndConditions.checkReachGreenArea,
			hard: robotEndConditions.checkReachGreenArea,
		},
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 8, offsetX: -14, zOrder: 8},
			tile: { num: 1, img: "tile.png", side: 60, zOrder: 0 },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
		},
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[2, 1, 2, 2, 2, 2],
					[2, 1, 2, 2, 2, 2],
					[2, 1, 2, 2, 2, 2],
					[2, 1, 1, 1, 1, 2],
					[2, 2, 2, 2, 1, 2],
					[2, 2, 2, 2, 1, 3],
				],
				initItems: [
					{ row: 0, col: 1, dir: 1, type: "green_robot" }
				],
			}
		],
		medium: [
			{
				tiles: [
					[2, 1, 2, 2, 2, 2],
					[2, 1, 2, 2, 2, 2],
					[2, 1, 1, 1, 2, 2],
					[2, 2, 2, 1, 2, 2],
					[2, 1, 1, 1, 2, 2],
					[2, 1, 2, 2, 2, 2],
					[2, 1, 1, 1, 2, 2],
					[2, 2, 2, 1, 2, 2],
					[2, 2, 2, 3, 2, 2],
				],
				initItems: [
					{ row: 0, col: 1, dir: 1, type: "green_robot" }
				],
			},
		],
		hard: [
			{
				tiles: [
					[2, 1, 1, 1, 1, 1],
					[2, 1, 1, 1, 1, 2],
					[2, 2, 2, 1, 1, 2],
					[1, 1, 1, 1, 1, 2],
					[1, 2, 2, 1, 1, 1],
					[2, 1, 1, 1, 2, 1],
					[1, 1, 2, 2, 2, 1],
					[1, 1, 2, 2, 2, 1],
					[1, 3, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 1, dir: 1, type: "green_robot" }
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
//initWrapper(initTask, null, null, true);
