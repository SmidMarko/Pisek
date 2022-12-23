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
			basic: 30,
			easy: 40,
			medium: 50,
			hard: 50,
		},
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				turtle: ["moveamount","turnleftamountvalue", "turnrightamountvalue","peneither"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["functions","variables"],
				singleBlocks: ["controls_repeat","math_number","math_arithmetic"],
				excludedBlocks: [],
			},
			variables: ["korak"],
		},
		startingExample: {
			blockly: {
				basic: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="4IqQ52rpcEMts5(`bY1h" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="umAyDQ7Xh=#dcd*eh#zt"><field name="VAR">korak</field><value name="VALUE"><block type="math_number" id="pScz/}`[N/tAi;{Zj5sM"><field name="NUM">100</field></block></value><next><block type="controls_repeat" id="w@9=#;#@01|2?gTXC1Jl"><field name="TIMES">3</field><statement name="DO"><block type="peneither" id="-Jpq,kTJwK;[iN:zFXD,"><field name="PARAM_0">up</field><next><block type="turnrightamountvalue" id="P+cr4Yp;Fxw_*c}a#A|+"><field name="PARAM_0">90</field><next><block type="moveamount" id="bRYJUm_A[1Yi)!TN.l[E"><value name="PARAM_0"><block type="variables_get" id="j}kb`{#K|xP5QHkT/yHp"><field name="VAR">korak</field></block></value><next><block type="turnleftamountvalue" id=",SSxlE.ogprNvIa=[:RU"><field name="PARAM_0">90</field><next><block type="peneither" id=":0S*wb4s_?1me25~1E0)"><field name="PARAM_0">down</field></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block><block type="procedures_defnoreturn" id="jCF!FNglHBTpjET_~pXv" x="56" y="277"><mutation><arg name="x"></arg></mutation><field name="NAME">opeka</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment><statement name="STACK"><block type="controls_repeat" id="}~iHaP6bF7kX|q7EUML."><field name="TIMES">4</field><statement name="DO"><block type="moveamount" id="P!9*HKmD=]#*F#{@M)@Z"><value name="PARAM_0"><block type="variables_get" id="d:eeF5~_J#:aTjsXkp*B"><field name="VAR">x</field></block></value><next><block type="turnrightamountvalue" id="1=;=XH[(d-`F50/QKn=H"><field name="PARAM_0">90</field></block></next></block></statement></block></statement></block></xml>',
				easy: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="4IqQ52rpcEMts5(`bY1h" deletable="false" movable="false" editable="false" x="0" y="0"></block><block type="procedures_defnoreturn" id="jCF!FNglHBTpjET_~pXv" x="69" y="389"><mutation><arg name="x"></arg></mutation><field name="NAME">opeka</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment><statement name="STACK"><block type="controls_repeat" id="}~iHaP6bF7kX|q7EUML."><field name="TIMES">4</field><statement name="DO"><block type="moveamount" id="P!9*HKmD=]#*F#{@M)@Z"><value name="PARAM_0"><block type="variables_get" id="d:eeF5~_J#:aTjsXkp*B"><field name="VAR">x</field></block></value><next><block type="turnrightamountvalue" id="1=;=XH[(d-`F50/QKn=H"><field name="PARAM_0">90</field></block></next></block></statement></block></statement></block></xml>',
				medium: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="4IqQ52rpcEMts5(`bY1h" deletable="false" movable="false" editable="false" x="0" y="0"></block><block type="procedures_defnoreturn" id="jCF!FNglHBTpjET_~pXv" x="69" y="389"><mutation><arg name="x"></arg></mutation><field name="NAME">opeka</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment><statement name="STACK"><block type="controls_repeat" id="}~iHaP6bF7kX|q7EUML."><field name="TIMES">4</field><statement name="DO"><block type="moveamount" id="P!9*HKmD=]#*F#{@M)@Z"><value name="PARAM_0"><block type="variables_get" id="d:eeF5~_J#:aTjsXkp*B"><field name="VAR">x</field></block></value><next><block type="turnrightamountvalue" id="1=;=XH[(d-`F50/QKn=H"><field name="PARAM_0">90</field></block></next></block></statement></block></statement></block></xml>',
				hard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="HWpyh]fjajx4v/@[NN#[" deletable="false" movable="false" editable="false" x="0" y="0"></block><block type="procedures_defnoreturn" id="jCF!FNglHBTpjET_~pXv" x="73" y="371"><field name="NAME">krog</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment><statement name="STACK"><block type="controls_repeat" id="}~iHaP6bF7kX|q7EUML."><field name="TIMES">0</field><statement name="DO"><block type="moveamount" id="P!9*HKmD=]#*F#{@M)@Z"><value name="PARAM_0"><block type="math_number" id="y-]=[;@mfDQPSyuRckEQ"><field name="NUM">0</field></block></value><next><block type="turnrightamountvalue" id="1=;=XH[(d-`F50/QKn=H"><field name="PARAM_0">0</field></block></next></block></statement></block></statement></block></xml>',
			},
		},
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqual,	//funkcija za preverjanje uspešnosti rešitve
   
		overlayFileName: "sand.png",
		turtleImageFile: "turtle.png",
		turtleStepSize: {
			basic: 0.03,
			easy: 0.03,
			medium: 0.03,
			hard: 0.03,
		},
		coords: {
			basic: {x: 50, y: 170},
			easy: {x: 40, y: 170},
			medium: {x: 40, y: 70},
			hard: {x: 40, y: 60},
		},
    };

	subTask.data = {
		basic: [
			{
				drawSolution : function(turtle) {
					for(var j=0; j<6; j++){
						for (var i = 0; i < 4; i++) {
							turtle.move(100);
							turtle.turn(-90);
						}
						turtle.stop_painting();
						turtle.turn(-90);
						turtle.move(100);
						turtle.turn(90);
						turtle.start_painting();
					}
				},
			},
		],
		easy:[
			{
				drawSolution : function(turtle) {
					for(var j=0; j<4; j++){
						for (var i = 0; i < 4; i++) {
							turtle.move(100);
							turtle.turn(-90);
						}
						turtle.stop_painting();
						turtle.turn(-90);
						turtle.move(200);
						turtle.turn(90);
						turtle.start_painting();
					}
				},
			},
		],
		medium: [
			{
				drawSolution : function(turtle) {
					for(var k=0; k<4; k++){
						for(var j=0; j<4; j++){
							for (var i = 0; i < 4; i++) {
								turtle.move(100);
								turtle.turn(-90);
							}
							turtle.stop_painting();
							turtle.turn(-90);
							turtle.move(200);
							turtle.turn(90);
							turtle.start_painting();
						}
						turtle.stop_painting();
						turtle.turn(90);
						turtle.move(4*200);
						turtle.turn(90);
						turtle.move(200);
						turtle.turn(180);
						turtle.start_painting();
					}
				},
			},
		],
		hard: [
			{
				drawSolution : function(turtle) {
					for(var k=0; k<4; k++){
						for(var j=0; j<4; j++){
							for (var i = 0; i < 360; i++) {
								turtle.move(1);
								turtle.turn(-1);
							}
							turtle.stop_painting();
							turtle.turn(-90);
							turtle.move(200);
							turtle.turn(90);
							turtle.start_painting();
						}
						turtle.stop_painting();
						turtle.turn(90);
						turtle.move(4*200);
						turtle.turn(90);
						turtle.move(200);
						turtle.turn(180);
						turtle.start_painting();
					}
				},
			},
		],
	};

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy"], null, true);