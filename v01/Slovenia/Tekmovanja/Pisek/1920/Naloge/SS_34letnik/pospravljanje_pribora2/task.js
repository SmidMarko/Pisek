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
			easy: 50,
			medium: 75,
			hard: 100,
		},
		includeBlocks: {						//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				robot: ["east","west","south","north","pickWithdrawableOptions","onWithdrawableOptions"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["loops","logic","functions","variables"],
				singleBlocks: ["math_number", "text"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="(w}i#E)ZJi|:~s=Or!Il" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="north" id="GPx_VH2:Csn[WptkK[@f"><next><block type="north" id="}B.2[vnFUFqUhyvP@Z|j"><next><block type="east" id="sD!i-@TX{b]/Cxd1Wfv{"><next><block type="east" id="{n[[}v;~]AID*k4d*u/:"><next><block type="controls_repeat_ext" id="-W}gySQUOHWTKvz;8E7-"><value name="TIMES"><shadow type="math_number" id="D?UR0-r/z]x:Aw2pQ}Fs"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="procedures_callnoreturn" id="EQnpghu_{p/B~Fla0)Io"><mutation name="sprehod"><arg name="smer"></arg></mutation><value name="ARG0"><block type="text" id=")z1nA@/Gddo:Z-LqJYg`"><field name="TEXT">desno</field></block></value><next><block type="north" id="Puo*~CDf!=(Wi7,F#|]-"><next><block type="west" id="]Uoz5u1IHsEh!7`PcWm7"><next><block type="procedures_callnoreturn" id="!rz2,bh)D:g+~D.]7z-]"><mutation name="sprehod"><arg name="smer"></arg></mutation><value name="ARG0"><block type="text" id="n~?=2OdmCVyPmKVb*~bt"><field name="TEXT">levo</field></block></value><next><block type="north" id="cU_qAKC]2Gl)uJ[FwY+P"><next><block type="east" id="m;~`ivW/D4KcogQf=B?;"></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block><block type="procedures_defnoreturn" id="wUpzWX8i;CT#Z8r~aPlj" x="399" y="181"><mutation><arg name="smer"></arg></mutation><field name="NAME">sprehod</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment></block></xml>',
		},					
		checkEndEveryTurn: false,		//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: {				//funkcija za preverjanje uspešnosti rešitve
			easy: robotEndConditions.checkPickedAllWithdrawables,
		},
			  
		cellSide: 60,							
		itemTypes: {
			green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 8, offsetX: -14, zOrder: 8},
			//tile: { num: 1, img: "tile.png", side: 60, zOrder: 0 },
			obstacle: { num: 2, img: "obstacle.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 1 },
			//obstacle1: { num: 21, img: "drevo.png", side: 60, category: "obstacle", isObstacle: true, zOrder: 0 },
			green: { num: 3, img: "green.png", side: 60, category: "paint", zOrder: 3, color: "vert" },
			pill: { num: 4, img: "pill.png", side: 60, category: "pill", isCollectible: true, zOrder: 7 },
			hole: { num: 5, img: "hole.png", side: 60, category: "hole", isHole: true, zOrder: 2 },
			//marble: { num: 6, img: "marble.png", side: 60, category: "marble", isTransportable: true, zOrder: 6 },
			utensil: { num: 6, img: "marble.png", side: 60, category: "utensil", isWithdrawable: true, zOrder: 6 },
			utensil1: { num: 61, img: "vilica.png", side: 60, category: "utensil", isWithdrawable: true, kind: "fork", zOrder: 6 },
			utensil2: { num: 62, img: "zlica.png", side: 60, category: "utensil", isWithdrawable: true, kind: "spoon", zOrder: 6 },
			utensil3: { num: 63, img: "noz.png", side: 60, category: "utensil", isWithdrawable: true, kind: "knife", zOrder: 6 },
			marker: { num: 7, img: "marker.png", side: 60, category: "marker", isMarker: true, zOrder: 5 },
			paint: { num: 8, img: "paint.png", side: 60, category: "paint", isPaint: true, zOrder: 4 },
		}, //isRound, isSquare, isTriangle, isDotted, isFull, isStriped, // hasColor(color) // isTransportable(color, shape) // "paint"(color) //"number"(value)
		ignoreInvalidMoves: false,
	};

	subTask.data = {						//testni primeri
		easy: [
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 62, 62, 63, 61, 61, 63, 1],
					[1, 1, 63, 63, 61, 63, 61, 61, 1],
					[1, 1, 61, 61, 62, 61, 63, 62, 1],
					[1, 1, 62, 63, 62, 61, 62, 61, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 6, col: 0, dir: 0, type: "green_robot" },
				],
			},
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 61, 61, 62, 61, 63, 62, 1],
					[1, 1, 62, 63, 62, 61, 62, 63, 1],
					[1, 1, 62, 62, 63, 61, 61, 62, 1],
					[1, 1, 63, 63, 61, 63, 61, 62, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 6, col: 0, dir: 0, type: "green_robot" },
				],
			},
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 61, 61, 62, 61, 63, 62, 1],
					[1, 1, 62, 63, 62, 61, 62, 61, 1],
					[1, 1, 63, 63, 61, 63, 61, 62, 1],
					[1, 1, 62, 62, 63, 61, 61, 63, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 6, col: 0, dir: 0, type: "green_robot" },
				],
			},
			{
				tiles: [
					[1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 62, 63, 62, 61, 62, 61, 1],
					[1, 1, 63, 63, 61, 63, 61, 62, 1],
					[1, 1, 61, 61, 62, 61, 63, 62, 1],
					[1, 1, 63, 63, 61, 63, 61, 62, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1],
				],
				initItems: [
					{ row: 6, col: 0, dir: 0, type: "green_robot" },
				],
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
