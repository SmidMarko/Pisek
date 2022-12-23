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
			easy: 11, 
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
					easy: ["moveamount", "turnleft", "turnright"],
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
					'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="1L1ON[?:+q?hQf1IL)s|" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveamount" id="h.v*SHCS}Ug1F#0fnLI2"><value name="PARAM_0"><block type="math_number" id="Ae7=2lj@77[PcDqG12-f"><field name="NUM">200</field></block></value><next><block type="turnright" id="L@Eqm[~[@/_=xbWSW~S5"><next><block type="moveamount" id="~20T{FAzWoAA,a_[hEEI"><value name="PARAM_0"><block type="math_number" id="t(d7V=LZTZ)GgGk_qcAO"><field name="NUM">100</field></block></value><next><block type="turnright" id="+02/Phq_!jLrRw?|`MI+"><next><block type="moveamount" id="+6RTqbQlL-f=/Gx6:lrY"><value name="PARAM_0"><block type="math_number" id="t*8Xd{}bYw:7nM.MnU27"><field name="NUM">200</field></block></value><next><block type="turnright" id="?d*Z~QMFL|ru=ZDrTe92"><next><block type="moveamount" id="sE/sOq.u8Z5[/6`d.ld/"><value name="PARAM_0"><block type="math_number" id="evLAu69@sjV{v@9g@TQ+"><field name="NUM">100</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>'
			},
		},
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "grass.png",
		turtleImageFile: "pisek.png",
		turtleStepSize: {
			basic: 0.15,
			easy: 0.10,
			medium: 0.15,
			hard: 0.1,
		},	
		coords : { //max x:300, y:300
			basic: { x: 150, y: 225},
			easy: { x: 50, y: 200},
			medium: { x: 75, y: 225},
			hard: { x: 200, y: 100},
		},
	};

	subTask.data = {					//testni primeri
			easy: [{
				drawSolution : function(turtle) {
				   for (var i = 0; i < 4; ++i) {
					   turtle.move(100);
					   turtle.turn(-90);
					   turtle.move(200);
					   turtle.turn(-90);
				   }
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
