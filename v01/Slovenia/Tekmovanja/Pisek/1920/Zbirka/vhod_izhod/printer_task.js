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
		maxInstructions: {				//omejitev števila ukazov
			basic: 20,
			easy: 50,
			medium: 75,
			hard: 100,
		},
		includeBlocks: {			//dovoljeni ukazi 
			groupByCategory: false,
			generatedBlocks: {
				printer: {
					basic: ["print"],
					easy: ["print"],
					medium: ["print", "read"],
					hard: ["print", "read"],
				},
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: [],
				singleBlocks: ["text"],
				excludedBlocks: [],
			},
			variables:{
				basic: [],
				easy: [],
				medium: [],
				hard: ["x","y"],
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
				input: "",
				output: "Pozdravljen!\n",
			}
		],
		medium: [
			{
				input: "ABBA\nbaab\n",
				output: "ABBA\nbaab\n",
			},
			{
				input: "1\n2\n",
				output: "1\n2\n",
			},
			{
				input: "a\nB\n",
				output: "a\nB\n",
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, ["easy", "medium"], null, true);
//initWrapper(initTask, null, null, true);
   
