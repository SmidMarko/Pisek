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
			easy: 15,
			medium: 75,
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
				robot: ["east","west","south","north", "nowe","noea","sowe","soea"], //,"nowe","noea","sowe","soea"
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
				excludedBlocks: {
					basic: [],
					easy: [],
					medium: ["controls_flow_statements"],
					hard: [],
				},
			},
			variables:{
				basic: [],
				easy: [],
				medium: ["x","y"],
				hard: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: {				//funkcija za preverjanje uspešnosti rešitve
			easy: function(context, lastTurn) {
						var solved1 = false, solved2 = false;
						var err1, err2;
						try{robotEndConditions.checkCountersValues(context, lastTurn);}
						catch(err){
							solved1 = context.success;
							err1 = err;
						}
						try{robotEndConditions.checkReachGreenArea(context, lastTurn);}
						catch(err){
							solved2 = context.success;
							err2 = err;
						}						
						context.success = (solved1 && solved2);
						throw(err1.concat("\n", err2));
			},
		},
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 70, nbStates: 9, offsetX: -14, zOrder: 8},
			tile0: { num: 1, img: "tile0.png", side: 60, zOrder: 0 },
			tile1: { num: 101, img: "tile1.png", side: 60, zOrder: 0, hasRestriction: true, allowed: "north south" },
			tile2: { num: 102, img: "tile2.png", side: 60, zOrder: 0,  hasRestriction: true, allowed: "east west" },
			tile3: { num: 103, img: "tile11.png", side: 60, zOrder: 0,  hasRestriction: true, allowed: "nowe soea" },
			tile4: { num: 104, img: "tile12.png", side: 60, zOrder: 0,  hasRestriction: true, allowed: "noea sowe" },
			tile5: { num: 105, img: "tile3.png", side: 60, zOrder: 0,  hasRestriction: true, allowed: "east south soea" },
			tile6: { num: 106, img: "tile4.png", side: 60, zOrder: 0,  hasRestriction: true, allowed: "west south sowe" },
			tile7: { num: 107, img: "tile5.png", side: 60, zOrder: 0,  hasRestriction: true, allowed: "north west nowe" },
			tile8: { num: 108, img: "tile6.png", side: 60, zOrder: 0,  hasRestriction: true, allowed: "east north noea" },
			tile9: { num: 109, img: "tile8.png", side: 60, zOrder: 0,  hasRestriction: true, allowed: "east south nowe" },
			tile10: { num: 110, img: "tile9.png", side: 60, zOrder: 0,  hasRestriction: true, allowed: "west south noea" },
			tile11: { num: 111, img: "tile10.png", side: 60, zOrder: 0,  hasRestriction: true, allowed: "north west soea" },
			tile12: { num: 112, img: "tile7.png", side: 60, zOrder: 0,  hasRestriction: true, allowed: "north east sowe" },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			obstacle1: { num: 21, img: "beach.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 }, 
			0: { num: 1000,  img: "chick2.png", side: 60, category: "number", isCounter: true, value: 0, zOrder: 7  },
			1: { num: 1001,  img: "chick1.png", side: 60, category: "number", isCounter: true, value: 1, zOrder: 7  },
			2: { num: 1002,  img: "chick2.png", side: 60, category: "number", isCounter: true, value: 2, zOrder: 7  },
			3: { num: 1003,  img: "chick2.png", side: 60, category: "number", isCounter: true, value: 3, zOrder: 7  },
			4: { num: 1004,  img: "chick2.png", side: 60, category: "number", isCounter: true, value: 4, zOrder: 7  },
			5: { num: 1005,  img: "chick2.png", side: 60, category: "number", isCounter: true, value: 5, zOrder: 7  },
			6: { num: 1006,  img: "chick2.png", side: 60, category: "number", isCounter: true, value: 6, zOrder: 7  },
			7: { num: 1007,  img: "chick2.png", side: 60, category: "number", isCounter: true, value: 7, zOrder: 7  },
			8: { num: 1008,  img: "chick2.png", side: 60, category: "number", isCounter: true, value: 8, zOrder: 7  },
			9: { num: 1009,  img: "chick2.png", side: 60, category: "number", isCounter: true, value: 9, zOrder: 7  },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			hole: { num: 5, img: "h_gray.png", side: 60, category: "hole", isHole: true, hasColor: true,color: "gris",zOrder: 2 },
			marble: { num: 6, img: "m_blue.png", side: 60, category: "marble", isTransportable: true, color: "bleu",zOrder: 6 },
			marker: { num: 7, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 5},
			paint: { num: 8, img: "paint.png", side: 60, category: "paint", isPaint: true, zOrder: 4 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {
		easy: [
			{
				tiles: [
					[21, 21, 21, 21, 21, 21],
					[2, 1, 1, 1, 1, 1],
					[2, 105, 102, 102, 106, 2],
					[1, 101, 109, 110, 101, 1],
					[1, 101, 112, 111, 101, 2],
					[1, 108, 102, 102, 107, 1],
					[1, 1, 2, 2, 1, 1],
				],
				initItems: [
					{ row: 2, col: 1, dir: 0, type: "green_robot" },
					{ row: 3, col: 2, type: 0 },
					{ row: 3, col: 3, type: 0 },
					{ row: 4, col: 2, type: 0 },
					{ row: 4, col: 3, type: 0 },
					{ row: 5, col: 4, type: 0 },
					{ row: 5, col: 1, type: 0 },
					{ row: 2, col: 4, type: 0 },
					{ row: 2, col: 1, type: "green" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
