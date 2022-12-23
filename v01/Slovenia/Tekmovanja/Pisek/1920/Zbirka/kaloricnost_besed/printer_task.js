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
				wholeCategories: ["texts", "logic", "functions", "variables", "loops", "math"],
				singleBlocks: ["controls_forEach"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="MeNysGC]}B=-Z-/8G|J@" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="4lE.Up{6K@R7/7kQXbxf"><field name="VAR">moje_besedilo</field><value name="VALUE"><block type="read" id="!rn]D9p0C*O.niI*lkvt"></block></value><next><block type="print" id="keE)?P`j[cX;X{45d8wA"><value name="PARAM_0"><block type="procedures_callreturn" id="+ZTpdpQRR9WJAPKddx.R"><mutation name="kaloricnost"><arg name="besedilo"></arg></mutation><value name="ARG0"><block type="variables_get" id="A(fcH2,t=E`g*3ApC0/K"><field name="VAR">moje_besedilo</field></block></value></block></value></block></next></block></next></block><block type="procedures_defreturn" id="vNPT8.au~9{|QiaZY[?6" x="6" y="132"><mutation><arg name="besedilo"></arg></mutation><field name="NAME">kaloricnost</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment><statement name="STACK"><block type="controls_forEach" id=":C#p)gxXOk6mLt)RU8JA"><field name="VAR">znak</field><value name="LIST"><block type="variables_get" id="5Vfzz#UCPNp+)lv{=AE/"><field name="VAR">besedilo</field></block></value></block></statement></block></xml>',
		},		
		checkEndEveryTurn: false,																//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: printerEndConditions.checkMessagesEqual,     //funkcija za preverjanje uspešnosti rešitve
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				input: "čmrlj",
				output: "0",
			},
			{
				input: "Kako debeeeeeeeeeeela sem!",
				output: "16",
			},
			{
				input: "Pišek",
				output: "2",
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
   
