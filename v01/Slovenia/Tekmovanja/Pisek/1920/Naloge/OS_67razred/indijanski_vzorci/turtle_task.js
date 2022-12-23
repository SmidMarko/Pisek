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
		maxInstructions: 24,
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				turtle: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount", "peneither"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["functions"],
				singleBlocks: ["math_number", "math_arithmetic"],
				excludedBlocks: [],
			},
		},
		startingExample: '',																//vnaprej podana koda ukazov
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "sand.png",
		turtleImageFile: "turtle.png",
		turtleStepSize: 0.2,
		coords : { x: 90, y: 175},
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				drawSolution : function(turtle) {
					turtle.turn(-30);
					turtle.move(60);
					turtle.turn(-120);
					turtle.move(60);
					turtle.turn(-120);
					turtle.stop_painting();
					turtle.move(15);
					turtle.turn(-60);
					turtle.start_painting();
					turtle.move(30);
					turtle.turn(120);
					turtle.move(30);
				},
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);