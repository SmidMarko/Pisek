function initTask(subTask) {
    subTask.gridInfos = {				//podatki za urejevalnik in vizualno okno
		hideSaveOrLoad: false,			//gumba za shranjevanje in nalaganje kode ukazov
		actionDelay: 200,						//parameter za časovni zamik med izvajanjem ukazov
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: {				//omejitev števila ukazov
			basic: 20,
			easy: 50,
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
				basic: {
					turtle: ["moveamountvalue"],
				},
				easy: {
					turtle: ["moveamountvalue", "turnleft", "turnright"],
				},
				medium: {
					printer: ["print", "read"],
				},
				hard: {
					robot: ["forward","right","left","markedCell", "paint"],
				},
			},
			standardBlocks: {
				includeAll: {
					basic: false,
					easy: false,
					medium: false,
					hard: true,
				},
				wholeCategories: {
					basic:[],
					easy: [],
					medium: [],
					hard: [],
				},
				singleBlocks: {
					basic: [],
					easy: [],
					medium: ["text"],
					hard: [],
				},
			}
		},
		startingExample: '',					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: {				//funkcija za preverjanje uspešnosti rešitve
			basic: turtleEndConditions.checkImagesEqual,
			easy: turtleEndConditions.checkImagesEqual,
			medium: printerEndConditions.checkMessagesEqual,  
			hard: robotEndConditions.checkMarkersPainted,
		},
			  
		//mreza
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 8, offsetX: -10, zOrder: 6},
			tile: { num: 1, img: "tile.png", side: 60, zOrder: 0 },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 0, color: "vert" },
			pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 5 },
			hole: { num: 5, img: "hole.png", side: 60, category: "hole", isHole: true, zOrder: 0 },
			marble: { num: 6, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 4 },
			marker: { num: 7, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 3 },
			paint: { num: 8, img: "paint.png", side: 60, category: "paint", isPaint: true, zOrder: 2 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
		
		//zelva
		overlayFileName: "sand.png",
		turtleImageFile: "turtle.png",
		turtleStepSize: {
			basic: 2,
			easy: 2,
			medium: 2,
			hard: 0.1,
		},	
		coords : { //max x:300, y:300
			basic: { x: 150, y: 150},
			easy: { x: 150, y: 150},
			medium: { x: 200, y: 200},
			hard: { x: 200, y: 100},
		},
	};

	subTask.data = {						//testni primeri
		basic: [
			{
				inputValue: 0,
				drawSolution: function(turtle) {
					turtle.move(5); 
				},
			},
		]
		easy: [
			{
				inputValue: 0,
				drawSolution: function(turtle) {
					turtle.move(5); 
					turtle.turn(90); 
					turtle.move(5)
				},
			},
		],
		medium: [
			{
				input: "ABBA\nbaab\n",
				output: "ABBA\nbaab\n",
			},
			{
				input: "1\n2\n",
				output: "1\n2\n",
			},
			{
				input: "a\nB\n",
				output: "a\nB\n",
			},
		],
		hard: [
			{
				tiles: [
					[1, 1, 1, 1],
					[1, 2, 2, 1],
					[1, 2, 2, 1],
					[1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 3, dir: 2, type: "green_robot" },
					{ row: 0, col: 1, type: "marker" },
					{ row: 1, col: 0, type: "marker" },
					{ row: 2, col: 3, type: "marker" },
					{ row: 3, col: 2, type: "marker" },
				],
			},
			{
				tiles: [
					[1, 1, 1, 1],
					[1, 2, 2, 1],
					[1, 2, 2, 1],
					[1, 1, 1, 1],
				],
				initItems: [
					{ row: 0, col: 3, dir: 2, type: "green_robot" },
					{ row: 0, col: 2, type: "marker" },
					{ row: 1, col: 3, type: "marker" },
					{ row: 2, col: 0, type: "marker" },
					{ row: 3, col: 1, type: "marker" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["basic","easy", "medium", "hard"], null, true);
//initWrapper(initTask, null, null, true);
