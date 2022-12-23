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
		actionDelay: 250,						//parameter za časovni zamik med izvajanjem ukazov
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: {												//omejitev števila ukazov
			easy: 17, 
			hard: 10, 
		},
		
   
		 
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: {

				easy: false, 
				hard: false, 

			},
			generatedBlocks: {
				turtle: {
					easy: ["moveamount", "turnleftamount", "turnrightamount"],
					hard: ["moveamount", "turnleftamount", "turnrightamount"],
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
		startingExample: {
			easy: {
				blockly:
					'<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="(a-b9b(vW|WgsEiI|4Pc" deletable="false" movable="false" editable="false" x="0" y="0"></block><block type="moveamount" id="|!_pexU{?M2FNMf)dn!(" x="90" y="84"><value name="PARAM_0"><block type="math_number" id=":eHP`g;_]b?br}wE`pGS"><field name="NUM">100</field></block></value><next><block type="turnrightamount" id="gOLSp;+XB3{R8=_+/)pz"><value name="PARAM_0"><block type="math_number" id="BPPHmA6dNM?qt4Vhl!}B"><field name="NUM">120</field></block></value><next><block type="moveamount" id="EyUszoJ?E`e?+,m89Kh|"><value name="PARAM_0"><block type="math_number" id="IVI3J9ay79,}KE`N!@3s"><field name="NUM">100</field></block></value><next><block type="turnrightamount" id="@@+_|i,B/mRhk~2Wzce:"><value name="PARAM_0"><block type="math_number" id="H]7jq|2~1fZw/|KZnFgV"><field name="NUM">60</field></block></value><next><block type="moveamount" id="q[]2)Xg.gE3UX;2[Et-G"><value name="PARAM_0"><block type="math_number" id="XZ}XvO{X(zaA;S)q2Un#"><field name="NUM">90</field></block></value><next><block type="turnrightamount" id="),/d[QS1!v=i/!og-9:a"><value name="PARAM_0"><block type="math_number" id="(b}/2Ix*:eeXs*AZXjoa"><field name="NUM">120</field></block></value><next><block type="moveamount" id=".m1LctQ4*g!T~S#p:H)2"><value name="PARAM_0"><block type="math_number" id="o6YCBMVy/U.PSc)96vfV"><field name="NUM">100</field></block></value><next><block type="turnrightamount" id="Y)Vu(bhz@p-f|KrC=U*7"><value name="PARAM_0"><block type="math_number" id="QeQB)L-0OZs-5!-~DrqE"><field name="NUM">60</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>'
			},	
		
		},
			
			
				
				
																			//vnaprej podana koda ukazov
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "grass.png",
		turtleImageFile: "pisek.png",
		turtleStepSize: {

			easy: 0.13,
			hard: 0.13,
		},	
		coords : {
			easy: {x: 90, y: 240},
			hard: { x: 90, y: 240},

		},
	};

	subTask.data = {					//testni primeri
		easy: [{
			drawSolution : function(turtle) {
			  
				  for (var i = 0; i < 2; ++i) {
					  turtle.move(100);
					  turtle.turn(-60);
					  turtle.move(100);
					  turtle.turn(-120);
					  ;
			   
				  }
			  },
		  }],
		  hard: [{
			drawSolution : function(turtle) {
			  
			  for (var i = 0; i < 2; ++i) {
				 turtle.move(100);
				 turtle.turn(-60);
				 turtle.move(100);
				 turtle.turn(-120);
				 ;
			   
			  }
		   },
		  }],
		 
		
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["easy", "hard"], null, true);
//initWrapper(initTask, null, null, true);
