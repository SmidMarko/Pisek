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
		introMaxHeight: "33",				//maksimalna velikost prostora za navodila
		maxListSize: 100, 						//max. dolžina seznama
		scrollbars: true,
		zoom: {
			controls: true,
			scale: 1,
		},
		actionDelay: 150,						//parameter za časovni zamik med izvajanjem ukazov
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: {												//omejitev števila ukazov
			basic: 0,
			easy: 100, 
			medium: 100, 
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
					easy: ["moveamountvalue", "movebackamountvalue", "turnleftamount", "turnrightamount", "peneither", "colourvalue"],
					medium: ["moveamountvalue", "movebackamountvalue", "turnleftamountvalue", "turnrightamountvalue", "colourvalue", "peneither"],
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
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},
			
			
				
																				//vnaprej podana koda ukazov
		checkEndEveryTurn: true,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "grass.png",
		turtleImageFile: "pisek.png",
		turtleStepSize: {
			basic: 0.15,
			easy: 0.14,
			medium: 0.14,
			hard: 0.1,
		},	
		coords : { //max x:300, y:300
			basic: { x: 150, y: 225},
			easy: {x: 190, y: 230},
			medium: { x: 90, y: 240},
			hard: { x: 200, y: 100},
		},
	};

	subTask.data = {					//testni primeri
		easy: [{
			drawSolution : function(turtle) {
				
				var pravilno = "True";
				var prvaCrta = "True";
				for (var i = 0; i < 4; ++i) {
					if (prvaCrta == "True") { //nariše prvo črto
						turtle.turn(-65); //risanje desne stranice
						turtle.move(50);
						turtle.turn(180);//obrat in vračanje
						turtle.move(50);
						turtle.turn(-115);
						
						var prvaCrta = "False";
					} 
					
					else {
						if (i < 2) {
							turtle.move(100);
							turtle.turn(-65);
							turtle.move(50);
							turtle.turn(180)
							turtle.move(50);
							turtle.turn(-115);
							turtle.turn(90);
							
						} 
						else if (i == 3) {
							turtle.move(100);
							turtle.turn(-155);
							turtle.move(50);
							turtle.turn(180)
							turtle.move(50);
							turtle.turn(-105);
							turtle.turn(90);	
						}
					}
				}
			turtle.turn(80);
			turtle.move(100); 
			turtle.turn(90);
			turtle.move(100);
			turtle.turn(25); //risanje zunanjih dveh stranic
			turtle.move(50);
			turtle.turn(65);
			turtle.move(100);
			turtle.turn(90);
			turtle.move(100); 
			turtle.turn(90);//koda za 3d, smo v zadnjem levem kotu kocke
			turtle.set_colour("#7F7A7A");//nastavimo barvo
			for (k = 0; k < 5; k++) { //risanje črtkane črte(stranice za likom)
				turtle.stop_painting();
				turtle.move(10);
				turtle.start_painting();
				turtle.move(10);	
			}
			turtle.turn(90);
			for (k = 0; k < 5; k++) { //risanje črtkane črte(stranice za likom)
				turtle.stop_painting();
				turtle.move(10);
				turtle.start_painting();
				turtle.move(10);	
			}
			turtle.turn(180);
			for (k = 0; k < 5; k++) { //risanje črtkane črte(stranice za likom)
				turtle.start_painting();
				turtle.move(10);
				turtle.stop_painting();
				turtle.move(10);	
			}
			turtle.turn(25);
			turtle.start_painting();
			turtle.move(10);
			turtle.stop_painting();
			turtle.move(10);
			turtle.start_painting();
			turtle.move(10);
			turtle.stop_painting();
			turtle.move(10);
			turtle.start_painting();
			turtle.move(10);
			
		   },
		}],	
		 
		
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["easy"], null, true);
//initWrapper(initTask, null, null, true);
