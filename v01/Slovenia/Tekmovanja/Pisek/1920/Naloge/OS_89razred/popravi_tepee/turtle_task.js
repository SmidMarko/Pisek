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
		maxInstructions: 50,
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				turtle: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount", "peneither"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["variables", "functions"],
				singleBlocks: ["controls_repeat_ext", "math_number", "math_arithmetic"],
				excludedBlocks: [],
			},
		},
		startingExample: {
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="FJ*y@0`sR@uI33MJ)C](" deletable="false" movable="false" editable="false" x="0" y="0"></block><block type="procedures_defnoreturn" id="1" x="10" y="47"><mutation><arg name="n"></arg></mutation><field name="NAME">tepee</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment><statement name="STACK"><block type="turnrightamount" id="2"><value name="PARAM_0"><block type="math_number" id="3"><field name="NUM">30</field></block></value><next><block type="controls_repeat_ext" id="4"><value name="TIMES"><shadow type="math_number" id="5"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveamount" id="6"><value name="PARAM_0"><block type="variables_get" id="7"><field name="VAR">n</field></block></value><next><block type="turnrightamount" id="8"><value name="PARAM_0"><block type="math_number" id="9"><field name="NUM">120</field></block></value></block></next></block></statement><next><block type="peneither" id="10"><field name="PARAM_0">up</field><next><block type="moveamount" id="11"><value name="PARAM_0"><block type="math_arithmetic" id="12"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get" id="13"><field name="VAR">n</field></block></value><value name="B"><block type="math_number" id="14"><field name="NUM">4</field></block></value></block></value><next><block type="turnrightamount" id="15"><value name="PARAM_0"><block type="math_number" id="16"><field name="NUM">60</field></block></value><next><block type="peneither" id="17"><field name="PARAM_0">down</field><next><block type="controls_repeat_ext" id="18"><value name="TIMES"><shadow type="math_number" id="19"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="moveamount" id="20"><value name="PARAM_0"><block type="math_arithmetic" id="21"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get" id="[D~FFReMJK3xSm{b:qi3"><field name="VAR">n</field></block></value><value name="B"><block type="math_number" id="bc[6J=b||{X{`=EpSmcK"><field name="NUM">2</field></block></value></block></value><next><block type="turnrightamount" id="22"><value name="PARAM_0"><block type="math_number" id="23"><field name="NUM">120</field></block></value></block></next></block></statement><next><block type="turnleftamount" id="24"><value name="PARAM_0"><block type="math_number" id="25"><field name="NUM">90</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></xml>',
		},																//vnaprej podana koda ukazov
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
     		
		overlayFileName: "sand.png",
		turtleImageFile: "turtle.png",
		turtleStepSize: 0.2,
		coords : { x: 80, y: 200},
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				drawSolution : function(turtle) {
					turtle.turn(-30);
					turtle.move(60);
					turtle.turn(-120);
					turtle.move(60);
					turtle.turn(-120);
					turtle.stop_painting();
					turtle.move(15);
					turtle.turn(-60);
					turtle.start_painting();
					turtle.move(30);
					turtle.turn(120);
					turtle.move(30);
				},
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);