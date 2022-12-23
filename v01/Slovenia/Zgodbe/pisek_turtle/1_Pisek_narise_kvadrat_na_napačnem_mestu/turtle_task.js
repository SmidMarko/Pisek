function initTask(subTask) {
	subTask.gridInfos = {				//podatki za urejevalnik in vizualno okno
		hideControls: {					//gumbi na urejevalniku
			restart: false,
			saveOrLoad: true,			//gumba za shranjevanje in nalaganje kode ukazov
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
			easy: 20, 
			hard: 20,
		},
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: {
				easy: false, 
				hard: false,
			},
			generatedBlocks: {
				turtle: {
					easy: ["moveamountvalue"],
					hard: ["moveamountvalue", "turnleft", "turnright"],
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
			hard: {
				blockly:
					'<xml xmlns="http://www.w3.org/1999/xhtml"> <block type="robot_start" id="YIXWi=kjEQE?L|{m#Mr." deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="moveamount" id="y}(9PE.g+6k4~8/}i7}-"><value name="PARAM_0"><block type="math_number" id="vkIcO0rs?/FZ[DdcE4.,"><field name="NUM">100</field></block></value><next><block type="turnleft" id="M278k*Y~]u{)MOio],Sf"><value name="PARAM_0"><block type="math_number" id="vJ~0#;5-YF.*-tNWtPiy"><field name="NUM">90</field></block></value><next><block type="moveamount" id="Fz?F(9NsbL~Kg|8:c*mm"><value name="PARAM_0"><block type="math_number" id="lqZ`CF-Amr-FH/uu9wX!"><field name="NUM">100</field></block></value><next><block type="turnleft" id="SXNGD1wtdBpQfP-QZ!+y"><value name="PARAM_0"><block type="math_number" id="+*+wunh3GPFVJdwMiR2u"><field name="NUM">90</field></block></value><next><block type="moveamount" id="EHoS=+Bse}i7u|ivHdF:"><value name="PARAM_0"><block type="math_number" id="ocHIk+f_X|sN+}6}i9x3"><field name="NUM">100</field></block></value><next><block type="turnleft" id="?J@Tmmd)XZZabzC}qz8z"><value name="PARAM_0"><block type="math_number" id="/,b=0T`@cqn]skjSB3?W"><field name="NUM">90</field></block></value><next><block type="moveamount" id="zFI7FHb|f=j|H|V(2+l0"><value name="PARAM_0"><block type="math_number" id="{xvthx[s,sR|D-7Cxp!@"><field name="NUM">100</field></block></value><next><block type="turnleft" id="l=fjd~8FY-Zd)FN4iREY"><value name="PARAM_0"><block type="math_number" id=":6}d@4,]DlF31,RLmw)B"><field name="NUM">90</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>'
			},
			
   
		 },																//vnaprej podana koda ukazov
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "grass.png",
		turtleImageFile: "pisek.png",
		turtleStepSize: {
			easy: 0.15,
			hard: 0.15,
			
		},	
		coords : { //max x:300, y:300
			easy: { x: 150, y: 225},
			hard: { x: 75, y: 225},
			
		},
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				inputValue: 0,
				drawSolution: function(turtle) {
					turtle.start_painting(); 
					turtle.move(100); 
				},
			},
		],
		hard: [{
			inputValue: 0,
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

initWrapper(initTask, ["easy","hard"], null, true);
//initWrapper(initTask, null, null, true);
