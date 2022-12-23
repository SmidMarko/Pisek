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
			hard: 60,
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
				easy: ["cena1","podrazitev"],
				hard: ["smer","ud","barva"],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: {
				easy: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="=KC_D6PzOoB|px29Si?P" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="EcLWHkpSwY2HgfySMSb*"><field name="VAR">cena1</field><value name="VALUE"><block type="readFloat" id="Or*pC`-)9ow#BO`|t;|F"></block></value><next><block type="variables_set" id="6Jfc;eY!:u|oV4X?gVi."><field name="VAR">podrazitev</field><value name="VALUE"><block type="readFloat" id="`Ly}@/aJ!=pLr0HJNWt0"></block></value><next><block type="variables_set" id="lU{9{x7e)||**xZO2O@j"><field name="VAR">podrazitev</field><value name="VALUE"><block type="math_arithmetic" id="2SOlMEvg*pW1`IZ)q[,P"><field name="OP">DIVIDE</field><value name="A"><shadow type="math_number" id="ak*#`)u;{C]#kW]Fwn9d"><field name="NUM">1</field></shadow><block type="variables_get" id="iHl|dxN:s)FtRCek]g{E"><field name="VAR">podrazitev</field></block></value><value name="B"><shadow type="math_number" id="p.B=+6U)eBtmK0l1,Y2#"><field name="NUM">100</field></shadow></value></block></value><next><block type="math_change" id="_xL;A.UZ1*eMcE;=yq8G"><field name="VAR">cena1</field><value name="DELTA"><shadow type="math_number" id="dvX|j/1g2!c|2q2ngLu!"><field name="NUM">1</field></shadow><block type="math_arithmetic" id="A;zKeC,l6Qo89:Ou0}e;"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="C;lLeS5o}apy3`9},3?2"><field name="NUM">1</field></shadow><block type="variables_get" id="@hYaD{6X`?=Y3MhMI*Bi"><field name="VAR">cena1</field></block></value><value name="B"><shadow type="math_number" id="D!./)YTnR=nX:c5AyiVd"><field name="NUM">1</field></shadow><block type="math_arithmetic" id="vjW]cwz1|*[JnhwDyL?P"><field name="OP">MULTIPLY</field><value name="A"><shadow type="math_number" id="Ia-*WZmE/Qhrq7yKQC;I"><field name="NUM">1</field></shadow><block type="variables_get" id="`HOgW@oWiPbEh298A1/."><field name="VAR">cena1</field></block></value><value name="B"><shadow type="math_number" id="6wc,?1X0f9Yjy!9sym}g"><field name="NUM">1</field></shadow><block type="variables_get" id="W}/pslGGz`)~}lrL{1vB"><field name="VAR">podrazitev</field></block></value></block></value></block></value><next><block type="print" id="]h2Da;LY~PX6_zg_yiov"><value name="PARAM_0"><block type="variables_get" id="4:PE56Q-8LoH,5p]l`ZN"><field name="VAR">cena1</field></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>',
				hard: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="Cvs?CMIVfi!###w}F3C)" deletable="false" movable="false" editable="false" x="0" y="0"></block><block type="controls_if" id="s;]Nqi2(_]yYhXr.gse8" x="2" y="80"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="!;WGinpJx`+@oToY3`0c"><field name="OP">EQ</field><value name="B"><block type="math_number" id="2W=CRUAb#f?@`!+)Z`AK"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="rj~f*pFCggJYqsC~J2uP"><field name="VAR">smer</field><value name="VALUE"><block type="text" id="9|L(eprQ}!]RCBXh;Kz5"><field name="TEXT">leva</field></block></value></block></statement><statement name="ELSE"><block type="variables_set" id="EcNM/V|wV;?b=iF0MuZW"><field name="VAR">smer</field><value name="VALUE"><block type="text" id="khaz0SSv26mwB84-*P#f"><field name="TEXT">desna</field></block></value></block></statement></block><block type="controls_if" id="}}T,or8liBxZ6OV[,OKM" x="1" y="216"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="4Ou~Qv6t!;EhI?vvcsd2"><field name="OP">EQ</field><value name="B"><block type="math_number" id="vR@7C:!QNg.zJ{=etj(L"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set" id=",(hqiN8NtT,NszF8N@sN"><field name="VAR">ud</field><value name="VALUE"><block type="text" id="2{Loe6(w}5e8XgetVrFH"><field name="TEXT">roka</field></block></value></block></statement><statement name="ELSE"><block type="variables_set" id="Yulpic9bA{:jbcliL4JG"><field name="VAR">ud</field><value name="VALUE"><block type="text" id="v{1:m+?RC59?bxh]H_T1"><field name="TEXT">noga</field></block></value></block></statement></block><block type="controls_if" id="`78=9W1O}fuu1yo8ROuz" x="3" y="359"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="B5)iO#mDqW0{B3GvF;bn"><field name="OP">EQ</field><value name="B"><block type="math_number" id="KPg`.2uO7+T*K7yJK]uh"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="SEr)V1n_[n:3,C`L`=*O"><field name="VAR">barva</field><value name="VALUE"><block type="text" id="Ab3qi3lU_?nM7sSbkbY)"><field name="TEXT">rdeča</field></block></value></block></statement><statement name="ELSE"><block type="controls_if" id="Kbg)le?V!5R|+PMuSlnG"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="yh-tzF[oSK,:@WX26.oZ"><field name="OP">EQ</field><value name="B"><block type="math_number" id="-=PV{(iF{o6mAeeGG|-V"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="_Q]KzCf][5;g@r)qvnV7"><field name="VAR">barva</field><value name="VALUE"><block type="text" id="6a9nK{IVL6nYBYT2?laj"><field name="TEXT">modra</field></block></value></block></statement><statement name="ELSE"><block type="controls_if" id="WBGzXCq5cq~#a~JSqiDF"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="mn!e]vU-g++dB!pXypEp"><field name="OP">EQ</field><value name="B"><block type="math_number" id="iUeBP68AkuV=,G2NEau7"><field name="NUM">3</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="`q:Ty]yUL4LmtCdQ?;eV"><field name="VAR">barva</field><value name="VALUE"><block type="text" id="Mr2VxRq@)DYP9a_(PL-p"><field name="TEXT">rumena</field></block></value></block></statement><statement name="ELSE"><block type="variables_set" id="SBODHz8S9*z#D{+I:glS"><field name="VAR">barva</field><value name="VALUE"><block type="text" id=";C3u+;.:Ew~I:r!7K+m;"><field name="TEXT">zelena</field></block></value></block></statement></block></statement></block></statement></block></xml>',
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

initWrapper(initTask, ["easy", "hard"], null, true);
//initWrapper(initTask, null, null, true);
   
