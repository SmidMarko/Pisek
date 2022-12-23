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
			easy: 60, 
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
					easy: ["moveamountvalue", "movebackamountvalue", "turnleftamount", "turnrightamount", "peneither"],
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
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="uZzxdb~K_vPFNM.`GNfI" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="turnrightamount" id="Cv/pHe`!!ibt)7xg`elK"><value name="PARAM_0"><block type="math_number" id="J;7bYFzo7GUf_!!M|:W-"><field name="NUM">60</field></block></value></block></next></block></xml>',
		},
			
			
				
																				//vnaprej podana koda ukazov
		checkEndEveryTurn: true,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "grass.png",
		turtleImageFile: "pisek.png",
		turtleStepSize: {
			basic: 0.15,
			easy: 0.15,
			medium: 0.14,
			hard: 0.1,
		},	
		coords : { //max x:300, y:300
			basic: { x: 150, y: 225},
			easy: {x: 150, y: 260},
			medium: { x: 90, y: 240},
			hard: { x: 200, y: 100},
		},
	};

	subTask.data = {					//testni primeri
		easy: [{
			drawSolution : function(turtle) {
				turtle.turn(-60);
				turtle.set_colour("#000000")			
				turtle.move(100); //risanje desne stranice
				turtle.turn(130);
				turtle.set_colour("#7F7A7A");
				for (var i = 0; i < 5; ++i) { //črtkana zadnja stranica
					turtle.stop_painting();
					turtle.move(10);
					turtle.start_painting();
					turtle.move(10);
						
				}
				turtle.turn(50);
				for (var i = 0; i < 5; ++i) { //črtkana zadnja stranica
					turtle.move(10);
					turtle.stop_painting();
					turtle.move(10);
					turtle.start_painting();
				}
				turtle.set_colour("#000000")
				turtle.turn(130);
				turtle.move(100)

				turtle.turn(115);//zgornji del piramide
				turtle.move(150);
				turtle.turn(140);
				turtle.move(140);

				turtle.turn(180);//obrat in pot nazaj
				turtle.move(140);

				turtle.turn(-100);//obrat in pot nazaj
				turtle.move(140);

				
			},
		}],	
		 
		
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["easy"], null, true);
//initWrapper(initTask, null, null, true);
