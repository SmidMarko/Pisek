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
		maxInstructions: 0,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: false,
			generatedBlocks: {
				robot: ["right", "forward"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_repeat_ext"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: robotEndConditions.checkReachGreenArea,
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14, zOrder: 8},
			tile: { num: 1, img: "tile.png", side: 60, zOrder: 0 },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			hole: { num: 5, img: "hole.png", side: 60, category: "hole", isHole: true, zOrder: 2 },
			marble: { num: 6, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 6 },
			marker: { num: 7, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 5 },
			paint: { num: 8, img: "paint.png", side: 60, category: "paint", isPaint: true, zOrder: 4 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
		    {
				tiles: [
					[2, 2, 2, 2],
					[2, 2, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 2, 2],
					[2, 1, 2, 2],
					[2, 1, 1, 2],
					[2, 2, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 2, 2],
					[2, 1, 2, 2],
					[2, 1, 1, 2],
					[2, 2, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 2, 2],
					[2, 1, 2, 2],
					[2, 1, 1, 2],
					[2, 2, 3, 2],
					[2, 2, 2, 2]				   
				],
				initItems: [
					{ row: 1, col: 2, dir: 1, type: "green_robot" }
				]
			},
			/*{
				tiles: [
					[2, 2, 2, 2],
					[2, 2, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 2, 2],
					[2, 1, 1, 2],
					[2, 1, 1, 2],
					[2, 2, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 2, 2],
					[2, 1, 1, 2],
					[2, 2, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 2, 2],
					[2, 1, 2, 2],
					[2, 1, 1, 2],
					[2, 2, 3, 2],
					[2, 2, 2, 2]				   
				],
				initItems: [
					{ row: 1, col: 2, dir: 1, type: "green_robot" }
				]
			},
			{
				tiles: [
					[2, 2, 2, 2],
					[2, 2, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 2, 2],
					[2, 1, 1, 2],
					[2, 2, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 2, 2],
					[2, 1, 2, 2],
					[2, 1, 1, 2],
					[2, 2, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 2, 2],
					[2, 1, 1, 2],
					[2, 1, 1, 2],
					[2, 2, 3, 2],
					[2, 2, 2, 2]				   
				],
				initItems: [
					{ row: 1, col: 2, dir: 1, type: "green_robot" }
				]
			},
			{
				tiles: [
					[2, 2, 2, 2],
					[2, 2, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 2, 2],
					[2, 1, 1, 2],
					[2, 1, 1, 2],
					[2, 2, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 2, 2],
					[2, 1, 1, 2],
					[2, 1, 1, 2],
					[2, 2, 1, 2],
					[2, 1, 1, 2],
					[2, 1, 2, 2],
					[2, 1, 1, 2],
					[2, 1, 1, 2],
					[2, 2, 3, 2],
					[2, 2, 2, 2]				   
				],
				initItems: [
					{ row: 1, col: 2, dir: 1, type: "green_robot" }
				]
			},*/
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);