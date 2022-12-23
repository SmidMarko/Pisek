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
		maxInstructions: 6,
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: false,
			generatedBlocks: {
				turtle:  ["moveamount", "movebackamount", "turnleftamount", "turnrightamount"],
			},
			
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_repeat_ext", "math_number"]
			},
		},
		startingExample: {
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id=";I3ZIp/Bv!!3Ba#h6B.V" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveamount" id="j80JJ=Ci?._nQa}987mf"><value name="PARAM_0"><block type="math_number" id="N|oYd3P{m!;qvTHop`3`"><field name="NUM">60</field></block></value><next><block type="controls_repeat_ext" id="a.k4]@5Zvrjh7VuG5mzv"><value name="TIMES"><shadow type="math_number" id="/GCkm!VrN@d2khq.w;Z}"><field name="NUM">6</field></shadow></value><statement name="DO"><block type="turnleftamount" id="CciL0KG*YWzBtX4iUP]@"><value name="PARAM_0"><block type="math_number" id="bYhpA4y2#e+8:?S(1(q4"><field name="NUM">60</field></block></value></block></statement></block></next></block></next></block></xml>',
		},																//vnaprej podana koda ukazov
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "sand.png",
		turtleImageFile: "turtle.png",
		turtleStepSize: 0.1,
		coords: {x: 240, y: 100},
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				drawSolution : function(turtle) {
					for (var i = 0; i < 6; ++i) {
						turtle.turn(60);
						turtle.move(100);
					}
				},
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);