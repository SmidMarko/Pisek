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
		actionDelay: 150,						//parameter za časovni zamik med izvajanjem ukazov
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: {												//omejitev števila ukazov
			basic: 0,
			easy: 14, 
			medium: 10, 
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
					easy: ["moveamount", "turnrightamount"],
					medium: ["moveamount", "turnleftamount", "turnrightamount"],
					hard: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount", "peneither", "colourvalue", "inputvalue"],
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
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="(a-b9b(vW|WgsEiI|4Pc" deletable="false" movable="false" editable="false" x="0" y="0"></block><block type="controls_repeat_ext" id="OPEW5U,3j@6,`Q@gT0bJ" x="103" y="44"><value name="TIMES"><shadow type="math_number" id=".Sc!s8U@()UA{y{q@09z"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveamount" id="|!_pexU{?M2FNMf)dn!("><value name="PARAM_0"><block type="math_number" id=":eHP`g;_]b?br}wE`pGS"><field name="NUM">100</field></block></value><next><block type="turnrightamount" id="gOLSp;+XB3{R8=_+/)pz"><value name="PARAM_0"><block type="math_number" id="BPPHmA6dNM?qt4Vhl!}B"><field name="NUM">60</field></block></value><next><block type="moveamount" id="EyUszoJ?E`e?+,m89Kh|"><value name="PARAM_0"><block type="math_number" id="IVI3J9ay79,}KE`N!@3s"><field name="NUM">100</field></block></value><next><block type="turnrightamount" id="@@+_|i,B/mRhk~2Wzce:"><value name="PARAM_0"><block type="math_number" id="H]7jq|2~1fZw/|KZnFgV"><field name="NUM">120</field></block></value></block></next></block></next></block></next></block></statement></block></xml>',
		},
			
			
				
																				//vnaprej podana koda ukazov
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "grass.png",
		turtleImageFile: "pisek.png",
		turtleStepSize: {
			basic: 0.15,
			easy: 0.08,
			medium: 0.13,
			hard: 0.1,
		},	
		coords : { //max x:300, y:300
			basic: { x: 150, y: 225},
			easy: {x: 150, y: 150},
			medium: { x: 90, y: 240},
			hard: { x: 200, y: 100},
		},
	};

	subTask.data = {					//testni primeri
		easy: [{
			drawSolution : function(turtle) {
				for (var j = 0; j < 10; ++j) {
					for (var i = 0; i < 2; ++i) {
						turtle.move(100);
						turtle.turn(-60);
						turtle.move(100);
						turtle.turn(-120);
						;
					}
					turtle.turn(36);
				}
		   },
		  }],	
		 
		
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["easy"], null, true);
//initWrapper(initTask, null, null, true);
