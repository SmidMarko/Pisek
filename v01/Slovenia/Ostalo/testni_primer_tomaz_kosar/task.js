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
		maxInstructions: 20,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: false,
			generatedBlocks: {
				robot: ["west","east","north","south","writeNumber","numberUnder",],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_repeat_ext","math_number","math_arithmetic"],
				excludedBlocks: [],
			},
			variables: ["sestevek"],
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: function(context, lastTurn) {
			if (lastTurn) {
				var total = 0;
				var i = 0;
				for (var iRow = 1; iRow <= 5; iRow++) {
					for (var iCol = 1; iCol <= 6; iCol++) {
						var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
						var items = context.getItems(iRow, iCol, {category: "number"});
						var hasNumber = (items.length != 0);
						if (hasNumber) {
							var oldNumber = row[iCol];
							var item = items[0];
							var itemType = this.itemTypes[item.type];
							if (itemType.num != oldNumber) {
								context.success = false;
								throw("Ne smete spreminjati tega polja.");
							}
							total += itemType.value;
						}
					}
					i +=1;
				}
				//resitev
				var items = context.getItems(6, 0, {category: "number"});
				var item = items[0];
				var itemType = this.itemTypes[item.type];

				if (itemType.value != total) {
					context.success = false;
					throw(total);
				}

				context.success = true;
				throw("Čestitamo! Veverički si pomagal izračunati skupno število lešnikov!");
			}
		}, 
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "squirrel.png", category: "robot", side: 80, nbStates: 9, offsetX: -14, zOrder: 8},
			//tile: { num: 1, img: "tile.png", side: 60, zOrder: 0 },
			//bstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			//green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			//pill: { num: 4, img: "seed.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			//hole: { num: 5, img: "hole.png", side: 60, category: "hole", isHole: true, zOrder: 2 },
			//marble: { num: 6, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 6 },
			//marker: { num: 7, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 5 },
			//paint: { num: 8, img: "paint.png", side: 60, category: "paint", isPaint: true, zOrder: 4 },
			0: { num:10, side:60, category: "number", value:0, zOrder: 1},
			1: { num:11, side:60, category: "number", value:1, zOrder: 1},
			2: { num:12, side:60, category: "number", value:2, zOrder: 1},
			3: { num:13, side:60, category: "number", value:3, zOrder: 1},
			4: { num:14, side:60, category: "number", value:4, zOrder: 1},
			5: { num:15, side:60, category: "number", value:5, zOrder: 1},
			6: { num:16, side:60, category: "number", value:6, zOrder: 1},
			7: { num:17, side:60, category: "number", value:7, zOrder: 1},
			8: { num:18, side:60, category: "number", value:8, zOrder: 1},
			9: { num:19, side:60, category: "number", value:9, zOrder: 1},
			10: { num:20, side:60, category: "number", value:10, zOrder: 1},
			11: { num:21, side:60, category: "number", value:11, zOrder: 1},
			12: { num:22, side:60, category: "number", value:12, zOrder: 1},
			13: { num:23, side:60, category: "number", value:13, zOrder: 1},
			14: { num:24, side:60, category: "number", value:14, zOrder: 1},
			15: { num:25, side:60, category: "number", value:15, zOrder: 1},
			16: { num:26, side:60, category: "number", value:16, zOrder: 1},
			17: { num:27, side:60, category: "number", value:17, zOrder: 1},
			18: { num:28, side:60, category: "number", value:18, zOrder: 1},
			19: { num:29, side:60, category: "number", value:19, zOrder: 1},
			20: { num:30, side:60, category: "number", value:20, zOrder: 1},
			21: { num:31, side:60, category: "number", value:21, zOrder: 1},
			22: { num:32, side:60, category: "number", value:22, zOrder: 1},
			23: { num:33, side:60, category: "number", value:23, zOrder: 1},
			24: { num:34, side:60, category: "number", value:24, zOrder: 1},
			25: { num:35, side:60, category: "number", value:25, zOrder: 1},
			26: { num:36, side:60, category: "number", value:26, zOrder: 1},
			27: { num:37, side:60, category: "number", value:27, zOrder: 1},
			28: { num:38, side:60, category: "number", value:28, zOrder: 1},
			29: { num:39, side:60, category: "number", value:29, zOrder: 1},
			30: { num:40, side:60, category: "number", value:30, zOrder: 1},
			31: { num:41, side:60, category: "number", value:31, zOrder: 1},
			32: { num:42, side:60, category: "number", value:32, zOrder: 1},
			33: { num:43, side:60, category: "number", value:33, zOrder: 1},
			34: { num:44, side:60, category: "number", value:34, zOrder: 1},
			35: { num:45, side:60, category: "number", value:35, zOrder: 1},
			36: { num:46, side:60, category: "number", value:36, zOrder: 1},
			37: { num:47, side:60, category: "number", value:37, zOrder: 1},
			38: { num:48, side:60, category: "number", value:38, zOrder: 1},
			39: { num:49, side:60, category: "number", value:39, zOrder: 1},
			40: { num:50, side:60, category: "number", value:40, zOrder: 1},
			41: { num:51, side:60, category: "number", value:41, zOrder: 1},
			42: { num:52, side:60, category: "number", value:42, zOrder: 1},
			43: { num:53, side:60, category: "number", value:43, zOrder: 1},
			44: { num:54, side:60, category: "number", value:44, zOrder: 1},
			45: { num:55, side:60, category: "number", value:45, zOrder: 1},
			46: { num:56, side:60, category: "number", value:46, zOrder: 1},
			47: { num:57, side:60, category: "number", value:47, zOrder: 1},
			48: { num:58, side:60, category: "number", value:48, zOrder: 1},
			49: { num:59, side:60, category: "number", value:49, zOrder: 1},
			50: { num:60, side:60, category: "number", value:50, zOrder: 1},
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 12, 1, 1, 13, 1, 1],
					[1, 11, 1, 1, 12, 1, 1, 1],
					[1, 1, 11, 1, 1, 1, 11, 1],
					[1, 1, 1, 13, 1, 13, 1, 1],
					[1, 1, 12, 1, 12, 1, 1, 1],
					[10, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 1, col: 0, dir: 0, type: "green_robot" },
				],
			},
			
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 11, 1, 1, 13, 1, 1],
					[1, 12, 12, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 12, 1, 13, 1],
					[1, 1, 1, 13, 1, 1, 1, 1],
					[1, 1, 1, 11, 12, 1, 13, 1],
					[10, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 1, col: 0, dir: 0, type: "green_robot" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
