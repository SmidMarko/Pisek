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
			easy:  15,
			medium: 30,
			hard: 100,
		},
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: {
				basic: false,
				easy: false,
				medium: false,
				hard: true,
			},
			generatedBlocks: {
				robot: ["hex_move", "paint2"],
			},
			standardBlocks: {
				includeAll: {
					basic: false,
					easy: false,
					medium: false,
					hard: true,
				},
				wholeCategories: [],
				singleBlocks: [],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: robotEndConditions.checkMarkersPainted,
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 100, nbStates: 8, offsetY: 20, offsetX: -20, zOrder: 8},
			tile: { num: 10, img: "tile0.png", side: 62, offsetY: 1, offsetX: -1, zOrder: 0 },
			tile1: { num: 11, img: "tile1.png", side: 62, offsetY: 1, offsetX: -1,zOrder: 0 },
			tile2: { num: 12, img: "tile2.png", side: 62, offsetY: 1, offsetX: -1,zOrder: 0 },
			tile3: { num: 13, img: "tile3.png", side: 62, offsetY: 1, offsetX: -1, zOrder: 0 },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			hole: { num: 5, img: "hole.png", side: 60, category: "hole", isHole: true, zOrder: 2 },
			marble: { num: 6, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 6 },
			marker: { num: 7, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 3 },
			paint: { num: 8, img: "paint.png", side: 62, offsetY: 1, offsetX: -1,category: "paint", isPaint: true, zOrder: 4 },
			paint1: { num: 81, img: "paint1.png", side: 62, offsetY: 1, offsetX: -1,category: "paint", zOrder: 4 },
			paint2: { num: 82, img: "paint2.png", side: 62, offsetY: 1, offsetX: -1,category: "paint", zOrder: 4 },
			paint3: { num: 83, img: "paint3.png", side: 62, offsetY: 1, offsetX: -1,category: "paint", zOrder: 4 },
			paint4: { num: 84, img: "paint4.png", side: 62, offsetY: 1, offsetX: -1,category: "paint", zOrder: 4 },
			paint6: { num: 86, img: "paint6.png", side: 62, offsetY: 1, offsetX: -1,category: "paint", zOrder: 4 },
			paint7: { num: 87, img: "paint7.png", side: 62, offsetY: 1, offsetX: -1,category: "paint", zOrder: 4 },
			paint8: { num: 88, img: "paint8.png", side: 62, offsetY: 1, offsetX: -1,category: "paint", zOrder: 4 },
			paint9: { num: 89, img: "paint9.png", side: 62, offsetY: 1, offsetX: -1,category: "paint", zOrder: 4 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10],
					[12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12],
					[11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11],
					[13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13],
					[10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10],
					[12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12],
					[11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11],
					[13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13, 12, 13],
					[10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10, 11, 10],
				],
				initItems: [
					{ row: 4, col: 8, dir: 2, type: "green_robot" },
					{ row: 4, col: 6, type: "marker" },
					{ row: 4, col: 2, type: "marker" },
					{ row: 2, col: 3, type: "marker" },
					{ row: 2, col: 5, type: "marker" },
					{ row: 6, col: 3, type: "marker" },
					{ row: 6, col: 5, type: "marker" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["easy","medium"], null, true);
//initWrapper(initTask, null, null, true);
