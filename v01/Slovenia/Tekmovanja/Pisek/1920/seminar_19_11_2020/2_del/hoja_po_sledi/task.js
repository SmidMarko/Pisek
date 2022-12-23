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
				robot: ["north","east","west","south","dirUnderEqual","greenCell"/*,"dirUnder"*/],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_whileUntil","controls_if"],
				excludedBlocks: [],
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
			green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14, zOrder: 8},
			tile: { num: 1, img: "tile.png", side: 60, zOrder: 0 },
			kompas: { num: 11, img: "kompas.png", side: 60, zOrder: 1 },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			obstacle1: { num: 21, img: "obstacle1.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			obstacle2: { num: 22, img: "obstacle2.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			hole: { num: 5, img: "hole.png", side: 60, category: "hole", isHole: true, zOrder: 2 },
			//marble: { num: 6, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 6 },
			utensil: { num: 6, img: "marble.png", side: 60, category: "utensil", isWithdrawable: true, zOrder: 6 },
			utensil1: { num: 61, img: "vilica.png", side: 60, category: "utensil", isWithdrawable: true, kind: "fork", zOrder: 6 },
			utensil2: { num: 62, img: "zlica.png", side: 60, category: "utensil", isWithdrawable: true, kind: "spoon", zOrder: 6 },
			utensil3: { num: 63, img: "noz.png", side: 60, category: "utensil", isWithdrawable: true, kind: "knife", zOrder: 6 },
			dirNorth: { num: 64, img: "dirNorth.png", side: 60, category: "marker", direction: "sever", zOrder: 6 },
			dirSouth: { num: 65, img: "dirSouth.png", side: 60, category: "marker", direction: "jug", zOrder: 6 },
			dirEast: { num: 66, img: "dirEast.png", side: 60, category: "marker", direction: "vzhod", zOrder: 6 },
			dirWest: { num: 67, img: "dirWest.png", side: 60, category: "marker", direction: "zahod", zOrder: 6 },
			marker: { num: 7, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 5 },
			paint: { num: 8, img: "paint.png", side: 60, category: "paint", isPaint: true, zOrder: 4 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[66, 66, 66, 66, 65, 1, 1],
					[21, 21, 21, 21, 65, 1, 1],
					[1, 65, 67, 67, 67, 1, 1],
					[1, 65, 22, 22, 22, 22, 22],
					[1, 65, 22, 22, 22, 22, 22],
					[1, 66, 66, 66, 65, 1, 1],
					[1, 1, 1, 1, 3, 1, 1],
				],
				initItems: [
					{ row: 0, col: 0, dir: 0, type: "green_robot" },
					{ row: 0, col: 0, type: "tile" },
					{ row: 0, col: 1, type: "tile" },
					{ row: 0, col: 2, type: "tile" },
					{ row: 0, col: 3, type: "tile" },
					{ row: 0, col: 4, type: "tile" },
					{ row: 1, col: 4, type: "tile" },
					{ row: 2, col: 4, type: "tile" },
					{ row: 2, col: 3, type: "tile" },
					{ row: 2, col: 2, type: "tile" },
					{ row: 2, col: 1, type: "tile" },
					{ row: 3, col: 1, type: "tile" },
					{ row: 4, col: 1, type: "tile" },
					{ row: 5, col: 1, type: "tile" },
					{ row: 5, col: 2, type: "tile" },
					{ row: 5, col: 3, type: "tile" },
					{ row: 5, col: 4, type: "tile" },
					{ row: 0, col: 6, type: "kompas" },
				],
			},
			{
				tiles: [
					[65, 21, 1, 1, 1, 1, 1],
					[65, 21, 66, 66, 65, 1, 1],
					[65, 21, 64, 22, 65, 1, 1],
					[65, 21, 64, 22, 65, 1, 1],
					[65, 21, 64, 22, 66, 66, 3],
					[66, 66, 64, 22, 1, 1, 1],
					[1, 1, 1, 22, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 0, dir: 0, type: "green_robot" },
					{ row: 0, col: 0, type: "tile" },
					{ row: 1, col: 0, type: "tile" },
					{ row: 2, col: 0, type: "tile" },
					{ row: 3, col: 0, type: "tile" },
					{ row: 4, col: 0, type: "tile" },
					{ row: 5, col: 0, type: "tile" },
					{ row: 5, col: 1, type: "tile" },
					{ row: 5, col: 2, type: "tile" },
					{ row: 4, col: 2, type: "tile" },
					{ row: 3, col: 2, type: "tile" },
					{ row: 2, col: 2, type: "tile" },
					{ row: 1, col: 2, type: "tile" },
					{ row: 1, col: 3, type: "tile" },
					{ row: 1, col: 4, type: "tile" },
					{ row: 2, col: 4, type: "tile" },
					{ row: 3, col: 4, type: "tile" },
					{ row: 4, col: 4, type: "tile" },
					{ row: 4, col: 5, type: "tile" },
					{ row: 0, col: 6, type: "kompas" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
