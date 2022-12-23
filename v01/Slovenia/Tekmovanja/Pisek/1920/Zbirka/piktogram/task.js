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
			groupByCategory: true,
			generatedBlocks: {
				robot:  ["south", "east", "west", "numberUnder", "paint"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["math", "variables"],
				singleBlocks: ["controls_repeat", "controls_for","lists_repeat", "lists_getIndex", "lists_setIndex"],
				excludedBlocks: [],
			},
			variables:[],
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: {				//funkcija za preverjanje uspešnosti rešitve
			easy: robotEndConditions.checkMarkersPainted,
		},
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14, zOrder: 8},
			//tile: { num: 1, img: "tile.png", side: 60, zOrder: 1 },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 5 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			hole: { num: 5, img: "hole.png", side: 60, category: "hole", isHole: true, zOrder: 2 },
			marble: { num: 6, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 6 },
			marker: { num: 9, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 0 },
			paint: { num: 8, img: "paint.png", side: 60, category: "paint", isPaint: true, zOrder: 4 },
			paint2: { num: 7, img: "paint2.png", side: 60, category: "paint", isPaint: true, isMarker: true, zOrder: 4 },
			0: { num: 100, side: 60, category: "number", value: 0 },
			1: { num: 101, side: 60, category: "number", value: 1 },
			2: { num: 102, side: 60, category: "number", value: 2 },
			3: { num: 103, side: 60, category: "number", value: 3 },
			4: { num: 104, side: 60, category: "number", value: 4 },
			5: { num: 105, side: 60, category: "number", value: 5 },
			6: { num: 106, side: 60, category: "number", value: 6 },
			7: { num: 107, side: 60, category: "number", value: 7 },
			8: { num: 108, side: 60, category: "number", value: 8 },
			9: { num: 109, side: 60, category: "number", value: 9 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					   [1, 1, 1, 1, 1, 1, 1, 1, 1],
					   [1, 1, 101, 103, 106, 103, 102, 101, 1],
					   [1, 1, 9, 1, 1, 1, 1, 1, 1],
					   [1, 1, 9, 9, 9, 1, 1, 1, 1],
					   [1, 1, 9, 9, 9, 9, 9, 9, 1],
					   [1, 1, 9, 9, 9, 1, 1, 1, 1],
					   [1, 1, 9, 9, 1, 1, 1, 1, 1],
					   [1, 1, 9, 1, 1, 1, 1, 1, 1],
					   [1, 1, 1, 1, 1, 1, 1, 1, 1],
				   ],
				initItems: [
					  { row: 1, col: 1, dir: 0, type: "green_robot" },
				   ],
			 },
			 {
				tiles: [
					   [1, 1, 1, 1, 1, 1, 1, 1, 1],
					   [1, 1, 104, 103, 105, 102, 106, 101, 1],
					   [1, 1, 9, 9, 9, 9, 1, 1, 1],
					   [1, 1, 9, 9, 9, 1, 1, 1, 1],
					   [1, 1, 9, 9, 9, 9, 9, 1, 1],
					   [1, 1, 9, 9, 1, 1, 1, 1, 1],
					   [1, 1, 9, 9, 9, 9, 9, 9, 1],
					   [1, 1, 9, 1, 1, 1, 1, 1, 1],
					   [1, 1, 1, 1, 1, 1, 1, 1, 1],
				   ],
				initItems: [
					  { row: 1, col: 1, dir: 0, type: "green_robot" },
				   ],
			 },
			 {
				tiles: [
					   [1, 1, 1, 1, 1, 1, 1, 1, 1],
					   [1, 1, 101, 103, 102, 102, 103, 101, 1],
					   [1, 1, 9, 1, 1, 1, 1, 1, 1],
					   [1, 1, 9, 9, 9, 1, 1, 1, 1],
					   [1, 1, 9, 9, 1, 1, 1, 1, 1],
					   [1, 1, 9, 9, 1, 1, 1, 1, 1],
					   [1, 1, 9, 9, 9, 1, 1, 1, 1],
					   [1, 1, 9, 1, 1, 1, 1, 1, 1],
					   [1, 1, 1, 1, 1, 1, 1, 1, 1],
				   ],
				initItems: [
					  { row: 1, col: 1, dir: 0, type: "green_robot" },
				   ],
			 },
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
