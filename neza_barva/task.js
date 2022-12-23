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
			easy:  0,
			medium: 30,
			hard: 100,
		},
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot: ["hex_move","paint2"],
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
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id=":?OL`@PIf],9C.42d`x@" deletable="false" movable="false" editable="false" x="0" y="0"></block><block type="paint2" id="|uM,[-JdnSO.V_2U.tR2" x="269" y="33"></block><block type="hex_move" id="1asRmD2hd+E-{16U-2S}" x="51" y="73"><field name="PARAM_0">west</field></block><block type="paint2" id="G#}VOKefKk//22]WgEyn" x="3" y="148"></block><block type="hex_move" id="n/ryq{-[2eig7]GGha|l" x="308" y="149"><field name="PARAM_0">sowe</field></block><block type="hex_move" id="NfoTbBC~=)D#3Br[u66P" x="17" y="202"><field name="PARAM_0">west</field></block><block type="hex_move" id="!Qe-kReQL7v.cj3Rat49" x="235" y="198"><field name="PARAM_0">nowe</field></block><block type="hex_move" id="qqEWAWgQghRh]1hWIF}N" x="245" y="257"><field name="PARAM_0">east</field></block><block type="paint2" id="kV6/xu=3.-W-5J{*N=q_" x="7" y="283"></block><block type="paint2" id="!/lLh:Yhuqwl-(jrS4ZD" x="133" y="350"></block><block type="paint2" id="raU*M9lwVtJGH|z3D!~[" x="333" y="355"></block><block type="hex_move" id="`W5P=]wxTasqGO8d=`dn" x="33" y="388"><field name="PARAM_0">soea</field></block><block type="paint2" id="aL7SED#LGeqXh}NP~PS|" x="262" y="416"></block><additional>{}</additional></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: robotEndConditions.checkMarkersPainted,
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 100, nbStates: 8, offsetY: 0, offsetX: 0, zOrder: 8},
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

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
