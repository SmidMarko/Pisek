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
		maxInstructions: 30,
		includeBlocks: {			//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				printer: ["print", "readInteger"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["logic", "functions", "variables", "math"],
				singleBlocks: [],
				excludedBlocks: [],
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
				input: "10",
				output: "123",
			},
			{
				input: "5",
				output: "11",
			},
			{
				input: "3",
				output: "4",
			},
			{
				input: "8",
				output: "47",
			},
			{
				input: "7",
				output: "29",
			},
			{
				input: "0",
				output: "2",
			},
			{
				input: "1",
				output: "1",
			},
			{
				input: "2",
				output: "3",
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
   
