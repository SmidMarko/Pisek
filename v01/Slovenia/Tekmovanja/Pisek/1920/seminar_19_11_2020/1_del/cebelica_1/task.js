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
		maxInstructions: 12,
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: false,
			generatedBlocks: {
				robot: ["east", "south", "pickWithdrawable"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="73Emgct{yJK{aW/9obr6" deletable="false" movable="false" editable="false" x="4" y="0"></block><block type="east" id="Y75x]vgIjXo]4,+k0T{#" x="0" y="51"></block><block type="pickWithdrawable" id="sL8/69JR!YI,TwN8fTj!" x="129" y="87"></block><block type="pickWithdrawable" id="ZLf~-aY6z!vAl]{UdY*J" x="270" y="82"></block><block type="south" id="-E*iCUd?].aKST,xkI[E" x="235" y="121"></block><block type="east" id="qrg(|Yz.=`-4E:Iz|]kv" x="63" y="136"></block><block type="pickWithdrawable" id="]}R.aLMNAZ,d8M_4*:=i" x="153" y="168"></block><block type="pickWithdrawable" id="P5w)`L#}:9RrF`Lhg/yx" x="10" y="179"></block><block type="east" id="k2]ftYkruWu8Dyhyy@9E" x="173" y="224"></block><block type="east" id="OjNM0u7b!kk9E3W4Si2V" x="61" y="259"></block></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: robotEndConditions.checkPickedAllWithdrawables,
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "bee.png", category: "robot", side: 80, nbStates: 8, offsetX: -14, zOrder: 8},
			tile: { num: 1, img: "tile.png", side: 60, zOrder: 0 },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			hole: { num: 5, img: "hole.png", side: 60, category: "hole", isHole: true, zOrder: 2 },
			marble: { num: 6, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 6 },
			marker: { num: 9, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 5 },
			paint: { num: 8, img: "tile.png", side: 60, category: "paint", isPaint: true, zOrder: 4 },
			nut: { num: 7, img: "flower.png", side: 60, category: "withdrawable", isWithdrawable: true, zOrder: 5 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[1, 7, 7, 1, 1],
					[1, 1, 1, 7, 7],
					
				],
				initItems: [
					{ row: 0, col: 0, dir: 0, type: "green_robot" }
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
