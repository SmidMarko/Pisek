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
		maxInstructions: 40,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: false,
			generatedBlocks: {
				robot: ["east", "west", "north", "south", "pickTransportable", "dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_repeat"],
				excludedBlocks: [],
			},
			variables: [],
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: robotEndConditions.checkMarblesInHoles,
			  
		cellSide: 60,							
		itemTypes: {
			robot: { img: "green_robot.png", side: 60, nbStates: 8, offsetX: 0, offsetY: 0,  isObstacle: true, offsetX: 0, category: "robot", zOrder: 3},
			hole: { num: 2, img: "hole.png", side: 60, category: "hole", isHole: true, zOrder: 0},
			marble: { num: 3, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 1},
			tile: { num: 4, img: "tile.png", side: 60, zOrder: 2},
		},//isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 4, 1, 1, 1, 2],
					[1, 1, 1, 4, 1, 1, 1, 1, 2],
					[1, 1, 4, 1, 1, 1, 1, 1, 2],
				],
				initItems: [
					{ row: 0, col: 1, dir: 0, type: "robot"},
					{ row: 0, col: 4, type: "marble" },
					{ row: 1, col: 3, type: "marble" },
					{ row: 2, col: 2, type: "marble" },
				]
			}
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
