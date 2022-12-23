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
		maxInstructions: 20,
		includeBlocks: {			//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				printer: ["print", "read"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["logic", "variables", "loops", "math"],
				singleBlocks: [],
				excludedBlocks: [],
			},
			variables: ["stevec", "stevilo"],
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="K2+LlCs0Wni0m)u+*H+z" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="KsvuN1VOAZ]F*Thk!JW-"><field name="VAR">stevilo</field><value name="VALUE"><block type="read" id="vJ7evS!{7{,J!Wq74k45"></block></value><next><block type="print" id="6Mai:0OSP9yY=LRyGs*V"><value name="PARAM_0"><block type="variables_get" id="IvB{mrQFW760ti4!xj,("><field name="VAR">stevilo</field></block></value></block></next></block></next></block></xml>',
		},		
		checkEndEveryTurn: false,																//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: printerEndConditions.checkMessagesEqual,     //funkcija za preverjanje uspešnosti rešitve
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				input: "2\n12\n42\n23\n42\n42\n22\n41\n41\n5\n",
				output: "3",
			},
			{
				input: "2\n10\n21\n12\n7\n100\n12\n99\n40\n17\n",
				output: "0",
			},
			{
				input: "42\n42\n42\n42\n42\n42\n42\n42\n42\n42\n",
				output: "10",
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
   
