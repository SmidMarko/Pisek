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
		introMaxHeight: "40%",				//maksimalna velikost prostora za navodila
		maxListSize: 100, 						//max. dolžina seznama
		scrollbars: true,
		zoom: {
			controls: true,
			scale: 1,
		},
		actionDelay: 300,						//parameter za časovni zamik med izvajanjem ukazov
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: {												//omejitev števila ukazov
			basic: 0,
			easy:80, 
			medium: 5, 
			hard: 0,
		},
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: {
				basic: false,
				easy: false, 
				medium: false, 
				hard: true,
			},
			generatedBlocks: {
				turtle: {
					basic: ["moveamountvalue"],
					easy: ["moveamount", "turnleftamount", "turnrightamount", "peneither"],
					medium: ["moveamount", "turnleftamountvalue", "turnrightamountvalue"],
					hard: ["moveamount", "movebackamount", "turnleftamountvalue", "turnrightamountvalue", "peneither", "colourvalue", "inputvalue"],
				},
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
				singleBlocks: ["controls_repeat_ext", "math_number"],
			},
			variables:{
				basic: [],
				easy: [],
				medium: [],
				hard: [],
			},
		},
		startingExample: {
			easy: {
				blockly:
					''
			},
		},
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "grass.png",
		turtleImageFile: "pisek.png",
		turtleStepSize: {
			basic: 0.15,
			easy: 0.18,
			medium: 0.15,
			hard: 0.1,
		},	
		coords : { //max x:300, y:300
			basic: { x: 150, y: 225},
			easy: { x: 133, y: 250},
			medium: { x: 75, y: 225},
			hard: { x: 200, y: 100},
		},
	};

	subTask.data = {					//testni primeri
			easy: [{
				drawSolution : function(turtle) {
				   
					turtle.move(70);
					turtle.turn(-235);
					turtle.move(20);
					turtle.turn(-150);
					turtle.move(20);
					turtle.turn(80);
					turtle.move(20);
					turtle.turn(-150);
					turtle.move(20);
					turtle.turn(80);
					turtle.move(20);
					turtle.turn(-150);
					turtle.move(20);
					turtle.turn(80);
					turtle.move(20);
					turtle.turn(-150);
					turtle.move(20);
					turtle.turn(80);
					turtle.move(20);
					turtle.turn(-150);
					turtle.move(20);

					
					
				   
				   
				},
			   }],
			medium: [{
				drawSolution : function(turtle) {
				   
					for (var i = 0; i < 4; ++i) {
							turtle.move(100);
							turtle.turn(-90);
					}
				},
			}],
		 
		
	};
	

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["easy"], null, true);
//initWrapper(initTask, null, null, true);
