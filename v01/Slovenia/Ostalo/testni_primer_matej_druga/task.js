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
			/*basic: 0,*/
			easy: 10,
			medium: 15,
			hard: 15,
		},
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: {
				/*basic: false,*/
				easy: true,
				medium:true,
				hard: true,
			},
			generatedBlocks: {
				robot: {
					/*shared: ["east", "west"],*/
					easy: ["forward","right","left","pickWithdrawable","onWithdrawable"],
					medium: ["forward","right","left","pickWithdrawable","onWithdrawable"],
					hard: ["forward","right","left","pickWithdrawable","onWithdrawable"],
				},
			},
			standardBlocks: {
				includeAll: {
					/*basic: false,*/
					easy: false,
					medium: false,
					hard: false,
				},
				wholeCategories: {
					/*basic: [],*/
					easy: [],
					medium: [],
					hard: [],
				},
				singleBlocks: {
					/*basic: [],*/
					easy: ["controls_if", "controls_repeat"],
					medium: ["controls_if", "controls_repeat"],
					hard: ["controls_if", "controls_repeat"],
				},
				excludedBlocks: {
					/*basic: [],*/
					easy: ["variables"],
					medium: ["variables"],
					hard: ["variables"], //ignorira ker je includeAll: true
				},
			},
			/*variables:{
				basic: [],
				easy: [],
				medium: [],
				hard: [],
			},*/
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: {
				/*basic: '',*/
				easy: '',
				medium: '',
				hard: '',
			},
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: {				//funkcija za preverjanje uspešnosti rešitve
			/*basic: robotEndConditions.checkReachGreenArea,*/
			easy: robotEndConditions.checkPickedAllWithdrawables,
			medium: robotEndConditions.checkPickedAllWithdrawables,
			hard: robotEndConditions.checkPickedAllWithdrawables,
		},
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "tabornik.png", category: "robot", side: 80, nbStates: 8, offsetX: -14, zOrder: 8},
			tile: { num: 1, img: "trava.png", side: 60, zOrder: 0 },
			obstacle: { num: 2, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "sotor.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			pill: { num: 4, img: "smet.png", side: 60, category: "pill", isWithdrawable: true, zOrder: 7 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2],
					[1, 1, 1, 1, 1, 2],
					[2, 2, 2, 2, 1, 2],
					[2, 2, 2, 2, 1, 2],
					[2, 1, 1, 1, 1, 2],
					[2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 1, col: 0, dir: 0, type: "green_robot" },
					{ row: 1, col: 1, dir: 0, type: "pill" },
					{ row: 1, col: 2, dir: 0, type: "pill" },
					{ row: 1, col: 3, dir: 0, type: "pill" },
					{ row: 1, col: 4, dir: 0, type: "pill" },
					{ row: 2, col: 4, dir: 0, type: "pill" },
					{ row: 3, col: 4, dir: 0, type: "pill" },
					{ row: 4, col: 4, dir: 0, type: "pill" },
					{ row: 4, col: 3, dir: 0, type: "pill" },
					{ row: 4, col: 2, dir: 0, type: "pill" },
					{ row: 4, col: 1, dir: 0, type: "pill" },					
				],
			},
		],
		medium: [
			{
				tiles: [
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
					[2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 2],
					[2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 2, col: 1, dir: 0, type: "green_robot" },
					{ row: 2, col: 2, dir: 0, type: "pill" },
					{ row: 1, col: 2, dir: 0, type: "pill" },
					{ row: 1, col: 3, dir: 0, type: "pill" },
					{ row: 1, col: 4, dir: 0, type: "pill" },
					{ row: 2, col: 4, dir: 0, type: "pill" },
					{ row: 2, col: 5, dir: 0, type: "pill" },
					{ row: 2, col: 6, dir: 0, type: "pill" },
					{ row: 1, col: 6, dir: 0, type: "pill" },
					{ row: 1, col: 7, dir: 0, type: "pill" },
					{ row: 1, col: 8, dir: 0, type: "pill" },
					{ row: 2, col: 8, dir: 0, type: "pill" },
					{ row: 2, col: 9, dir: 0, type: "pill" },
					{ row: 2, col: 10, dir: 0, type: "pill" },
					{ row: 1, col: 10, dir: 0, type: "pill" },
					{ row: 1, col: 11, dir: 0, type: "pill" },
					{ row: 1, col: 12, dir: 0, type: "pill" },
					{ row: 2, col: 12, dir: 0, type: "pill" },
					{ row: 2, col: 13, dir: 0, type: "pill" },
					
				],
			},
		],
		hard: [
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
					[2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2],
					[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				],
				initItems: [
					{ row: 11, col: 1, dir: 0, type: "green_robot" },
					{ row: 11, col: 13, dir: 0, type: "green" },
					{ row: 11, col: 2, dir: 0, type: "pill" },
					{ row: 10, col: 2, dir: 0, type: "pill" },
					{ row: 9, col: 2, dir: 0, type: "pill" },
					{ row: 8, col: 2, dir: 0, type: "pill" },
					{ row: 7, col: 2, dir: 0, type: "pill" },
					{ row: 6, col: 2, dir: 0, type: "pill" },
					{ row: 5, col: 2, dir: 0, type: "pill" },
					{ row: 4, col: 2, dir: 0, type: "pill" },
					{ row: 3, col: 2, dir: 0, type: "pill" },
					{ row: 2, col: 2, dir: 0, type: "pill" },
					{ row: 1, col: 2, dir: 0, type: "pill" },
					{ row: 1, col: 3, dir: 0, type: "pill" },
					{ row: 1, col: 4, dir: 0, type: "pill" },
					{ row: 2, col: 4, dir: 0, type: "pill" },
					{ row: 3, col: 4, dir: 0, type: "pill" },
					{ row: 4, col: 4, dir: 0, type: "pill" },
					{ row: 5, col: 4, dir: 0, type: "pill" },
					{ row: 6, col: 4, dir: 0, type: "pill" },
					{ row: 7, col: 4, dir: 0, type: "pill" },
					{ row: 8, col: 4, dir: 0, type: "pill" },
					{ row: 9, col: 4, dir: 0, type: "pill" },
					{ row: 10, col: 4, dir: 0, type: "pill" },
					{ row: 11, col: 4, dir: 0, type: "pill" },
					{ row: 11, col: 5, dir: 0, type: "pill" },
					{ row: 11, col: 6, dir: 0, type: "pill" },
					{ row: 10, col: 6, dir: 0, type: "pill" },
					{ row: 9, col: 6, dir: 0, type: "pill" },
					{ row: 8, col: 6, dir: 0, type: "pill" },
					{ row: 7, col: 6, dir: 0, type: "pill" },
					{ row: 6, col: 6, dir: 0, type: "pill" },
					{ row: 5, col: 6, dir: 0, type: "pill" },
					{ row: 4, col: 6, dir: 0, type: "pill" },
					{ row: 3, col: 6, dir: 0, type: "pill" },
					{ row: 2, col: 6, dir: 0, type: "pill" },
					{ row: 1, col: 6, dir: 0, type: "pill" },
					{ row: 1, col: 7, dir: 0, type: "pill" },
					{ row: 1, col: 8, dir: 0, type: "pill" },
					{ row: 2, col: 8, dir: 0, type: "pill" },
					{ row: 3, col: 8, dir: 0, type: "pill" },
					{ row: 4, col: 8, dir: 0, type: "pill" },
					{ row: 5, col: 8, dir: 0, type: "pill" },
					{ row: 6, col: 8, dir: 0, type: "pill" },
					{ row: 7, col: 8, dir: 0, type: "pill" },
					{ row: 8, col: 8, dir: 0, type: "pill" },
					{ row: 9, col: 8, dir: 0, type: "pill" },
					{ row: 10, col: 8, dir: 0, type: "pill" },
					{ row: 11, col: 8, dir: 0, type: "pill" },
					{ row: 11, col: 9, dir: 0, type: "pill" },
					{ row: 11, col: 10, dir: 0, type: "pill" },
					{ row: 10, col: 10, dir: 0, type: "pill" },
					{ row: 9, col: 10, dir: 0, type: "pill" },
					{ row: 8, col: 10, dir: 0, type: "pill" },
					{ row: 7, col: 10, dir: 0, type: "pill" },
					{ row: 6, col: 10, dir: 0, type: "pill" },
					{ row: 5, col: 10, dir: 0, type: "pill" },
					{ row: 4, col: 10, dir: 0, type: "pill" },
					{ row: 3, col: 10, dir: 0, type: "pill" },
					{ row: 2, col: 10, dir: 0, type: "pill" },
					{ row: 1, col: 10, dir: 0, type: "pill" },
					{ row: 1, col: 11, dir: 0, type: "pill" },
					{ row: 1, col: 12, dir: 0, type: "pill" },
					{ row: 11, col: 12, dir: 0, type: "pill" },
					{ row: 10, col: 12, dir: 0, type: "pill" },
					{ row: 9, col: 12, dir: 0, type: "pill" },
					{ row: 8, col: 12, dir: 0, type: "pill" },
					{ row: 7, col: 12, dir: 0, type: "pill" },
					{ row: 6, col: 12, dir: 0, type: "pill" },
					{ row: 5, col: 12, dir: 0, type: "pill" },
					{ row: 4, col: 12, dir: 0, type: "pill" },
					{ row: 3, col: 12, dir: 0, type: "pill" },
					{ row: 2, col: 12, dir: 0, type: "pill" },
					
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
//initWrapper(initTask, null, null, true);
