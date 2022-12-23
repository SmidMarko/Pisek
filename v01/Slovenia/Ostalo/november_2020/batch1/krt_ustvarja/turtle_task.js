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
		maxInstructions: {
			easy: 12,
		},
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: {
				easy: false,
				hard: true,
			},
			generatedBlocks: {
				turtle: ["moveamountvalue","turnleftamountvalue", "turnrightamountvalue","peneither"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: {
					easy: [],
				},
				singleBlocks: ["controls_repeat"],
				excludedBlocks: [],
			},
			variables: {
				easy: [],
			},
		},
		startingExample: {
			blockly: {
				easy: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="j8ZclQO!FCu|-{Mh48NQ" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat" id=":(ZVt00UWx=Y}8qmRml="><field name="TIMES">5</field><statement name="DO"><block type="controls_repeat" id="{RYt;H(ZMl/(!d3QgQbU"><field name="TIMES">4</field><statement name="DO"><block type="moveamountvalue" id="fN}8/.mOvKAUItn6)bes"><field name="PARAM_0">0</field><next><block type="turnleftamountvalue" id="5+mcNV~z@e{iZTQoagOM"><field name="PARAM_0">0</field></block></next></block></statement><next><block type="turnleftamountvalue" id=";X`6a@@Po46lRC=*IlPY"><field name="PARAM_0">0</field></block></next></block></statement></block></next></block></xml>',
				hard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="tJTBIGsL2FW#}yBO,+W*" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat" id="7p4l1ZoX@SO}0FS-@S~,"><field name="TIMES">4</field><statement name="DO"><block type="moveamountvalue" id="[h~nr@jymU3:crfZF{Nt"><field name="PARAM_0">100</field><next><block type="turnrightamountvalue" id="goEgcxF6)_(`UHO{B|y5"><field name="PARAM_0">90</field></block></next></block></statement></block></next></block></xml>',
			},
		},
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
   
		overlayFileName: "sand.png",
		turtleImageFile: "turtle.png",
		turtleStepSize: 0.1,
		coords: {
			easy: { x: 150, y: 150},
			hard: { x: 100, y: 200},
		},
    };

	subTask.data = {
		easy: [
			{
				drawSolution : function(turtle) {
					for(var j = 0; j < 5; j++) {
						for (var i = 0; i < 4; i++) {
							turtle.move(100);
							turtle.turn(90);
						}
						turtle.turn(72);
					}
				},
			},
		]
	};

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);