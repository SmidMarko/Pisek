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
		maxListSize: 100,			//max. dolžina seznama
		scrollbars: true,
		zoom: {
			controls: true,
			scale: 1,
		},
		actionDelay: 200,						//parameter za časovni zamik med izvajanjem ukazov
		blocklyColourTheme: "bwinf",	//izbira seta barv za bloke ukazov
		maxInstructions: {
			easy: 20,
		}, 			
		includeBlocks: {			//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				printer: ["print", "read","readInteger","readFloat","randomInteger"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["variables","math","texts","logic"],
				singleBlocks: [],
				excludedBlocks: [],
			},
			variables: {
				easy: ["masa1","povecanje"],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: {
				easy: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="=KC_D6PzOoB|px29Si?P" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="EcLWHkpSwY2HgfySMSb*"><field name="VAR">masa1</field><value name="VALUE"><block type="readFloat" id="Or*pC`-)9ow#BO`|t;|F"></block></value><next><block type="variables_set" id="6Jfc;eY!:u|oV4X?gVi."><field name="VAR">povecanje</field><value name="VALUE"><block type="readFloat" id="`Ly}@/aJ!=pLr0HJNWt0"></block></value><next><block type="variables_set" id="lU{9{x7e)||**xZO2O@j"><field name="VAR">povecanje</field><value name="VALUE"><block type="math_arithmetic" id="2SOlMEvg*pW1`IZ)q[,P"><field name="OP">DIVIDE</field><value name="A"><shadow type="math_number" id="ak*#`)u;{C]#kW]Fwn9d"><field name="NUM">1</field></shadow><block type="variables_get" id="iHl|dxN:s)FtRCek]g{E"><field name="VAR">povecanje</field></block></value><value name="B"><shadow type="math_number" id="p.B=+6U)eBtmK0l1,Y2#"><field name="NUM">100</field></shadow></value></block></value><next><block type="math_change" id="_xL;A.UZ1*eMcE;=yq8G"><field name="VAR">masa1</field><value name="DELTA"><shadow type="math_number" id="dvX|j/1g2!c|2q2ngLu!"><field name="NUM">1</field></shadow><block type="math_arithmetic" id="A;zKeC,l6Qo89:Ou0}e;"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="C;lLeS5o}apy3`9},3?2"><field name="NUM">1</field></shadow><block type="variables_get" id="@hYaD{6X`?=Y3MhMI*Bi"><field name="VAR">masa1</field></block></value><value name="B"><shadow type="math_number" id="D!./)YTnR=nX:c5AyiVd"><field name="NUM">1</field></shadow><block type="math_arithmetic" id="vjW]cwz1|*[JnhwDyL?P"><field name="OP">MULTIPLY</field><value name="A"><shadow type="math_number" id="Ia-*WZmE/Qhrq7yKQC;I"><field name="NUM">1</field></shadow><block type="variables_get" id="`HOgW@oWiPbEh298A1/."><field name="VAR">masa1</field></block></value><value name="B"><shadow type="math_number" id="6wc,?1X0f9Yjy!9sym}g"><field name="NUM">1</field></shadow><block type="variables_get" id="W}/pslGGz`)~}lrL{1vB"><field name="VAR">povecanje</field></block></value></block></value></block></value><next><block type="print" id="]h2Da;LY~PX6_zg_yiov"><value name="PARAM_0"><block type="variables_get" id="4:PE56Q-8LoH,5p]l`ZN"><field name="VAR">masa1</field></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>',
			},
		},		
		checkEndEveryTurn: false,																//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: {
			easy: printerEndConditions.checkMessagesEqual,     //funkcija za preverjanje uspešnosti rešitve
			hard: printerEndConditions.checkRandMessage1,
		},
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				input: "13.53\n0.55\n",
				output: "13.604415\n",
			},
			{
				input: "3.05\n51.55\n",
				output: "4.622275\n",
			},
			{
				input: "1.99\n28\n",
				output: "2.5472\n",
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
   
