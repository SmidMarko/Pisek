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
		maxInstructions: 40,
		includeBlocks: {			//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				printer: ["print", "read","charToNumber"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["logic", "functions", "variables", "loops", "math","texts"],
				singleBlocks: [],
				excludedBlocks: ["text_eval"],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '',
		},		
		checkEndEveryTurn: false,																//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: printerEndConditions.checkMessagesEqual,     //funkcija za preverjanje uspešnosti rešitve
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				input: "1,2,3,1,2,3,4,5,",
				output: "1,2,3,4,5,",
			},
			{
				input: "1,2,3,5,4,6,7,",
				output: "1,2,3,4,5,6,7,",
			},
			{
				input: "1,2,3,1,2,3,4,1,2,",
				output: "1,2,3,4,",
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
   
