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
		maxInstructions: {easy: 3, medium: 9, hard: 8},
		includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
			turtle: {
				easy: ["moveamountvalue", "turnleft", "turnright"],
				medium: ["moveamountvalue", "turnleft", "turnright", "peneither"],
				hard:  ["moveamountvalue", "turnleftamountvalue", "turnrightamountvalue", "peneither", "colourvalue"],
			}
        },
        standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: []
			}
		},	
		startingExample: '',																//vnaprej podana koda ukazov
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "sand.png",
		turtleImageFile: "turtle.svg",
		turtleStepSize: 2,
		coords : { //max x:300, y:300
			basic: { x: 150, y: 150},
			easy: { x: 150, y: 150},
			medium: { x: 200, y: 200},
			hard: { x: 150, y: 150},
		},
	};

	subTask.data = {
      easy: [{
          drawSolution : function(turtle) {turtle.move(5); turtle.turn(90); turtle.move(5)},
         }],
		 medium: [{
          drawSolution : function(turtle) { turtle.stop_painting(); turtle.move(1); turtle.start_painting(); turtle.turn(90); turtle.move(1); turtle.stop_painting(); turtle.move(1); turtle.start_painting(); turtle.move(1) },
         }],
		 hard: [{
          drawSolution : function(turtle) { turtle.stop_painting(); turtle.move(1); turtle.start_painting(); turtle.move(1); turtle.set_colour("#ff0000"); turtle.move(1); turtle.set_colour("#3333ff"); turtle.move(1) },
         }]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true)