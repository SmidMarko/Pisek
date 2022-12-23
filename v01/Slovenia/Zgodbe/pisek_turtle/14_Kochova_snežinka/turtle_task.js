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
		maxInstructions: 150,
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: {
				basic: false,
				easy: false, 
				medium: false, 
				hard: true,
			},
			generatedBlocks: {
				turtle: {
					easy: ["moveamountvalue","turnleftamountvalue", "turnrightamountvalue"],
				},
			},
			standardBlocks: {
				includeAll: {
					basic: false,
					easy: false, 
					medium: false, 
					hard: true,
				},
				wholeCategories: ["math"],
				singleBlocks: ["controls_repeat"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Yg_IWiC;)N=:]usQTC_E" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="controls_repeat" id="~O+U+(tHZ-n/JS;?;-b:"><field name="TIMES">6</field><statement name="DO"><block type="controls_repeat" id="cZ7,-Ep|KB?d;#`mi;wq"><field name="TIMES">2</field><statement name="DO"><block type="moveamountvalue" id="@ju,lg~h`M4II/R4vqs7"><field name="PARAM_0">33.3</field><next><block type="turnrightamountvalue" id="n0#rpOwaEBUEUZI7[}oJ"><field name="PARAM_0">60</field><next><block type="moveamountvalue" id="n3Ejg-c!4s6[{,41I3hu"><field name="PARAM_0">33.3</field><next><block type="turnrightamountvalue" id="?tjTsi@:}H2`)9GEzdX/"><field name="PARAM_0">240</field><next><block type="moveamountvalue" id="WZx45j,bnG;Nob_n)c=e"><field name="PARAM_0">33.3</field><next><block type="turnrightamountvalue" id="h*tgKA0zS#if[I[qXSh6"><field name="PARAM_0">60</field><next><block type="moveamountvalue" id="2TiEQ27@j[YiG1DWWqyg"><field name="PARAM_0">33.3</field><next><block type="turnrightamountvalue" id="P~2x`/1Br.~Zy/xYJrGN"><field name="PARAM_0">60</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement><next><block type="turnleftamountvalue" id="vm*Hz+.48r9Eu}@lGU,0"><field name="PARAM_0">180</field></block></next></block></statement></block></next></block></xml>',
		},
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "grass.png",
		turtleImageFile: "pisek.png",
		turtleStepSize: 0.08,
		coords : { x: 220, y: 270},
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				drawSolution: function(turtle) {
					for (var k = 0; k < 3; ++k) {
						for (var j = 0; j < 2; ++j) {
							for (var i = 0; i < 2; ++i) {
								turtle.move(33.3); 
								turtle.turn(-60); 
								turtle.move(33.3); 
								turtle.turn(120);

								turtle.move(33.3); 
								turtle.turn(-60); 
								turtle.move(33.3); 
								turtle.turn(-60);

								
							}
							turtle.turn(180);	
						}

					}
				},
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
