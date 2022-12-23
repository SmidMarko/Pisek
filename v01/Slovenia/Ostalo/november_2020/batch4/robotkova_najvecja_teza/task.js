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
			groupByCategory: true,
			generatedBlocks: {
				robot: ["forward","writeNumber","numberUnder"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops","logic","variables","math"],
				singleBlocks: [],
				excludedBlocks: [],
			},
			variables:[],
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: function(context, lastTurn) {
			if (lastTurn) {
				var max = 0;
				var row = subTask.data[subTask.level][subTask.iTestCase].tiles[0];
				for (var iCol = 1; iCol < 12; iCol++) {
					var items = context.getItems(0, iCol, {category: "number"});
					var hasNumber = (items.length != 0);
					if (hasNumber) {
						var oldNumber = row[iCol];
						var item = items[0];
						var itemType = this.itemTypes[item.type];
						if (itemType.num != oldNumber) {
							context.success = false;
							throw("Ne smete spreminjati tega polja.");
						}
						else if(itemType.num > max){
							max = itemType.num;
						}
					}
				}
				if (max != this.itemTypes[context.getItems(0, 13, {category: "number"})[0].type].num) {
					context.success = false;
					throw("Največja teža ni pravilna. Poskusi še enkrat.");
				}
				context.success = true;
				throw("Čestitamo, program je izpisal pravo težo.");
			}
		}, 
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: -14, zOrder: 8},
			tile: { num: 1, img: "tile1.png", side: 60, zOrder: 0 },
			tile1: { num: 11, img: "tile.png", side: 60, zOrder: 0 },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			hole: { num: 5, img: "hole.png", side: 60, category: "hole", isHole: true, zOrder: 2 },
			marble: { num: 6, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 6 },
			marker: { num: 7, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 5 },
			820: { num: 820, side: 50, category: "number", value: 820, zOrder: 1, offsetX: 5, offsetY: -5 },
			1478: { num: 1478, side: 50, category: "number", value: 1478, zOrder: 1, offsetX: 5, offsetY: -5 },
			2476: { num: 2476, side: 50, category: "number", value: 2476, zOrder: 1, offsetX: 5, offsetY: -5 },
			1602: { num: 1602, side: 50, category: "number", value: 1602, zOrder: 1, offsetX: 5, offsetY: -5 },
			2863: { num: 2863, side: 50, category: "number", value: 2863, zOrder: 1, offsetX: 5, offsetY: -5 },
			1918: { num: 1918, side: 50, category: "number", value: 1918, zOrder: 1, offsetX: 5, offsetY: -5 },
			2505: { num: 2505, side: 50, category: "number", value: 2505, zOrder: 1, offsetX: 5, offsetY: -5 },
			1004: { num: 1004, side: 50, category: "number", value: 1004, zOrder: 1, offsetX: 5, offsetY: -5 },
			2236: { num: 2236, side: 50, category: "number", value: 2236, zOrder: 1, offsetX: 5, offsetY: -5 },
			2132: { num: 2132, side: 50, category: "number", value: 2132, zOrder: 1, offsetX: 5, offsetY: -5 },
			1768: { num: 1768, side: 50, category: "number", value: 1768, zOrder: 1, offsetX: 5, offsetY: -5 },
			667: { num: 667, side: 50, category: "number", value: 667, zOrder: 1, offsetX: 5, offsetY: -5 },
			2181: { num: 2181, side: 50, category: "number", value: 2181, zOrder: 1, offsetX: 5, offsetY: -5 },
			1534: { num: 1534, side: 50, category: "number", value: 1534, zOrder: 1, offsetX: 5, offsetY: -5 },
			2088: { num: 2088, side: 50, category: "number", value: 2088, zOrder: 1, offsetX: 5, offsetY: -5 },
			1154: { num: 1154, side: 50, category: "number", value: 1154, zOrder: 1, offsetX: 5, offsetY: -5 },
			2532: { num: 2532, side: 50, category: "number", value: 2532, zOrder: 1, offsetX: 5, offsetY: -5 },
			2558: { num: 2558, side: 50, category: "number", value: 2558, zOrder: 1, offsetX: 5, offsetY: -5 },
			1630: { num: 1630, side: 50, category: "number", value: 1630, zOrder: 1, offsetX: 5, offsetY: -5 },
			1634: { num: 1634, side: 50, category: "number", value: 1634, zOrder: 1, offsetX: 5, offsetY: -5 },
			1666: { num: 1666, side: 50, category: "number", value: 1666, zOrder: 1, offsetX: 5, offsetY: -5 },
			0: { num: 100, side: 50, category: "number", value: 0, zOrder: 1, offsetX: 5, offsetY: -5 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[1, 820, 1478, 2476, 1602, 2863, 1918, 2505, 1004, 2236, 2132, 1768, 1, 100],
				],
				initItems: [
					{ row: 0, col: 0, dir: 0, type: "green_robot" },
					{ row: 0, col: 13, type: "tile1" },
				],
			},
		
			{
				tiles: [
					[1, 667, 820, 2181, 1534, 2088, 1154, 2532, 2558, 1630, 1634, 1666, 1, 100],
				],
				initItems: [
					{ row: 0, col: 0, dir: 0, type: "green_robot" },
					{ row: 0, col: 13, type: "tile1" },
				],
			},
		],
		
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
