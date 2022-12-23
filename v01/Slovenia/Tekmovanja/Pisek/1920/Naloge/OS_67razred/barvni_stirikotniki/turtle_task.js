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
		maxInstructions: 40,
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: false,
			generatedBlocks: {
				turtle: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount", "peneither", "colourvalue"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["controls_repeat_ext", "math_number"],
				excludedBlocks: [],
			},
		},
		startingExample: '',																//vnaprej podana koda ukazov
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
   
		overlayFileName: "sand.png",
		turtleImageFile: "turtle.png",
		turtleStepSize: 0.1,
		coords: { x: 30, y: 200},
    };

	subTask.data = {
		easy: [
			{
				drawSolution : function(turtle) {
					for (i = 0; i < 4; i++) {
						jmax = 0
						if (i%2 == 0) {
							jmax = 8
						}
						else {
							jmax = 16
						}
				  
						for (j = 0; j <jmax; j++){
							if (j%2 == 0) {
								turtle.set_colour("#3333ff"); //RGB: 51 51 255
								turtle.move(10);
							}
							else {
								turtle.set_colour("#33cc00"); //RGB: 51 204 0
								turtle.move(20);
							}
						}
						turtle.turn(270);
					}
				 
				},
			},
		],
	};

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null);