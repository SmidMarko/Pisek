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
		maxInstructions: 75,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot: ["east","west","south", "north","colorUnder","transportableColor","pickTransportable","dropTransportable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["logic","loops","variables"],
				singleBlocks: [],
				excludedBlocks: [],
			},
			variables: ["barva balona"],
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: robotEndConditions.checkMarblesInHolesColor,
		
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 8, offsetX: -14, zOrder: 8},
			tile: { num: 1, img: "tile.png", side: 60, zOrder: 0 },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			hole1: { num: 51, img: "h_blue.png", side: 60, category: "hole", isHole: true, hasColor: true, color: "bleu", zOrder: 2 },
			hole2: { num: 52, img: "h_red.png", side: 60, category: "hole", isHole: true, hasColor: true,color: "rouge",zOrder: 2 },
			hole3: { num: 53, img: "h_green.png", side: 60, category: "hole", isHole: true, hasColor: true,color: "vert",zOrder: 2 },
			hole4: { num: 54, img: "h_yellow.png", side: 60, category: "hole", isHole: true, hasColor: true,color: "jaune",zOrder: 2 },
			hole5: { num: 55, img: "h_orange.png", side: 60, category: "hole", isHole: true, hasColor: true,color: "orange",zOrder: 2 },
			hole6: { num: 56, img: "h_purple.png", side: 60, category: "hole", isHole: true, hasColor: true,color: "violet",zOrder: 2 },
			hole7: { num: 57, img: "h_brown.png", side: 60, category: "hole", isHole: true, hasColor: true,color: "marron",zOrder: 2 },
			hole8: { num: 58, img: "h_gray.png", side: 60, category: "hole", isHole: true, hasColor: true,color: "gris",zOrder: 2 },
			marble1: { num: 61, img: "m_blue.png", side: 60, category: "marble", isTransportable: true, color: "bleu",zOrder: 6 },
			marble2: { num: 62, img: "m_red.png", side: 60, category: "marble", isTransportable: true, color: "rouge",zOrder: 6 },
			marble3: { num: 63, img: "m_green.png", side: 60, category: "marble", isTransportable: true, color: "vert",zOrder: 6 },
			marble4: { num: 64, img: "m_yellow.png", side: 60, category: "marble", isTransportable: true, color: "jaune",zOrder: 6 },
			marble5: { num: 65, img: "m_orange.png", side: 60, category: "marble", isTransportable: true, color: "orange",zOrder: 6 },
			marble6: { num: 66, img: "m_purple.png", side: 60, category: "marble", isTransportable: true, color: "violet",zOrder: 6 },
			marble7: { num: 67, img: "m_brown.png", side: 60, category: "marble", isTransportable: true, color: "marron",zOrder: 6 },
			marble8: { num: 68, img: "m_gray.png", side: 60, category: "marble", isTransportable: true, color: "gris",zOrder: 6 },
			marker: { num: 7, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 5 },
			paint: { num: 8, img: "paint.png", side: 60, category: "paint", isPaint: true, zOrder: 4 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 51, 52, 53, 54, 55, 56, 57, 58, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 0, dir: 1, type: "green_robot" },
					{ row: 1, col: 1, type: "marble8" },
					{ row: 1, col: 5, type: "marble2" },
					{ row: 1, col: 8, type: "marble3" },
					{ row: 1, col: 3, type: "marble1" },
					{ row: 1, col: 2, type: "marble4" },
					{ row: 1, col: 4, type: "marble5" },
					{ row: 1, col: 6, type: "marble6" },
					{ row: 1, col: 7, type: "marble7" },
				],
			},
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 58, 52, 54, 55, 56, 57, 51, 53, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 0, dir: 1, type: "green_robot" },
					{ row: 1, col: 1, type: "marble8" },
					{ row: 1, col: 5, type: "marble2" },
					{ row: 1, col: 6, type: "marble3" },
					{ row: 1, col: 7, type: "marble1" },
					{ row: 1, col: 8, type: "marble4" },
					{ row: 1, col: 2, type: "marble5" },
					{ row: 1, col: 3, type: "marble6" },
					{ row: 1, col: 4, type: "marble7" },
				],
			},
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 51, 52, 54, 57, 56, 53, 58, 55, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 0, dir: 1, type: "green_robot" },
					{ row: 1, col: 4, type: "marble8" },
					{ row: 1, col: 3, type: "marble2" },
					{ row: 1, col: 2, type: "marble3" },
					{ row: 1, col: 1, type: "marble1" },
					{ row: 1, col: 5, type: "marble4" },
					{ row: 1, col: 6, type: "marble5" },
					{ row: 1, col: 7, type: "marble6" },
					{ row: 1, col: 8, type: "marble7" },
				],
			},
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 57, 56, 55, 53, 58, 51, 52, 54, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 0, dir: 1, type: "green_robot" },
					{ row: 1, col: 7, type: "marble8" },
					{ row: 1, col: 6, type: "marble2" },
					{ row: 1, col: 3, type: "marble3" },
					{ row: 1, col: 4, type: "marble1" },
					{ row: 1, col: 2, type: "marble4" },
					{ row: 1, col: 5, type: "marble5" },
					{ row: 1, col: 8, type: "marble6" },
					{ row: 1, col: 1, type: "marble7" },
				],
			},
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 51, 52, 55, 54, 56, 53, 57, 58, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 0, dir: 1, type: "green_robot" },
					{ row: 1, col: 3, type: "marble8" },
					{ row: 1, col: 2, type: "marble2" },
					{ row: 1, col: 1, type: "marble3" },
					{ row: 1, col: 4, type: "marble1" },
					{ row: 1, col: 8, type: "marble4" },
					{ row: 1, col: 6, type: "marble5" },
					{ row: 1, col: 5, type: "marble6" },
					{ row: 1, col: 7, type: "marble7" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
