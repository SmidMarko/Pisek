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
			easy: 12, 
			hard: 7, 

		},
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: {
				easy: false, 
				hard: false, 

			},
			generatedBlocks: {
				turtle: {
					
					easy: ["moveamount", "turnleft", "turnright"],
					hard: ["moveamount", "turnleft", "turnright"],
				},
			},
			standardBlocks: {
				includeAll: {
					easy: false, 
					hard: false, 
				},
				wholeCategories: [],
				singleBlocks: [],
				singleBlocks: ["controls_repeat_ext", "math_number"],
			},
			variables:{
				easy: [],
				hard: [],
			},
		},
		startingExample:{
			easy: {
				  blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="1KUp4L?)fFc}YqUSQz3#" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveamount" id="t=;z1.)A:y1?6u[zhgaZ"><value name="PARAM_0"><block type="math_number" id="L[@UvY|fU?a@gAR7qCJP"><field name="NUM">100</field></block></value><next><block type="turnright" id="_3_XD*fw*eAgZl41Dy`B"><next><block type="moveamount" id="BuA;_oE=![fWB6`.A?9i"><value name="PARAM_0"><block type="math_number" id="Gz.odB18[z~}pahMnm!w"><field name="NUM">100</field></block></value><next><block type="turnleft" id="Zn-3{HVIT8NmM4BmXK,k"><next><block type="moveamount" id="h6wR20RG?c-Ek-/61LU."><value name="PARAM_0"><block type="math_number" id="0LT2/mk7O+VnuSQi(0!E"><field name="NUM">30</field></block></value><next><block type="turnright" id="I:el@:OxEBrBUw:UVq2`"><next><block type="moveamount" id="A9fJBOax{_C~,WSwCkGB"><value name="PARAM_0"><block type="math_number" id="SNhECz09*)cRp:wGC]tl"><field name="NUM">100</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>'
			},
			hard: {
				blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="1KUp4L?)fFc}YqUSQz3#" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveamount" id="t=;z1.)A:y1?6u[zhgaZ"><value name="PARAM_0"><block type="math_number" id="L[@UvY|fU?a@gAR7qCJP"><field name="NUM">100</field></block></value><next><block type="turnright" id="_3_XD*fw*eAgZl41Dy`B"></block></next></block></next></block></xml>'
			},
			
		},	
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "grass.png",
		turtleImageFile: "pisek.png",
		turtleStepSize: {
			easy: 0.15,
			hard: 0.15,
		},	
		coords : { //max x:300, y:300
			easy: { x: 75, y: 225},
			hard: { x: 75, y: 225},

		},
	};

	subTask.data = {					//testni primeri
			easy: [{
				drawSolution : function(turtle) {
				   
				   for (var i = 0; i < 4; ++i) {
					   turtle.move(100);
					   turtle.turn(-90);
				   }
				},
			   }],
			   hard: [{
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

initWrapper(initTask, ["easy", "hard"], null, true);
//initWrapper(initTask, null, null, true);
