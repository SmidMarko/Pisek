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
				printer: ["print", "read"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["logic", "functions", "variables", "loops", "math","lists"],
				singleBlocks: ["controls_forEach"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="g7AF|`(PMyxFu[xrrOaV" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="09T]Vb/[ra=Lt6z6S(3h"><field name="VAR">moja_tab</field><value name="VALUE"><block type="lists_create_with" id="s*YSDhp}:r#.FSoUFyWf"><mutation items="0"></mutation></block></value><next><block type="variables_set" id="7|4L;fdQG|EwaY1ljuWA"><field name="VAR">koliko_pod</field><value name="VALUE"><block type="read" id="@T4n/ab#b.@MNYzui9BU"></block></value><next><block type="controls_for" id="arZr@6uvF1fxo0Eei;-."><field name="VAR">i</field><value name="FROM"><shadow type="math_number" id="Q/Bx8OK_3Bp5CQ/kKd?:"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number" id="bpB#.FIcy*J-1n#Iglwz"><field name="NUM">10</field></shadow><block type="variables_get" id="_DyTwR_7*5z-[~90{KVK"><field name="VAR">koliko_pod</field></block></value><value name="BY"><shadow type="math_number" id="C8~B,,V19m{4Ub3Pxk46"><field name="NUM">1</field></shadow></value><statement name="DO"><block type="lists_setIndex" id="G@6vvN(-w6*[nyU)DS5a"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><field name="MODE">INSERT</field><value name="LIST"><block type="variables_get" id="tx/E]*Qcc5sv5A(k]p#t"><field name="VAR">moja_tab</field></block></value><value name="AT"><block type="variables_get" id="b3z]YaoXc]2J2/o_--:Q"><field name="VAR">i</field></block></value><value name="TO"><block type="read" id="YqmGS,QKxNun=`ap](Yf"></block></value></block></statement><next><block type="variables_set" id="C:iB8FU-(6cZ4`|0|Em]"><field name="VAR">skupni_prod</field><value name="VALUE"><block type="procedures_callreturn" id="O[c-I,~0U1f}w7XvKm!5"><mutation name="zmnozi"><arg name="tab"></arg></mutation><value name="ARG0"><block type="variables_get" id="GUeh]PRAK/~fhk|-{ea#"><field name="VAR">moja_tab</field></block></value></block></value><next><block type="print" id="{mwc5;jW8P+oI.Y/-g_{"><value name="PARAM_0"><block type="variables_get" id="ELIpK]sd1m4Nj6E541~="><field name="VAR">skupni_prod</field></block></value></block></next></block></next></block></next></block></next></block></next></block><block type="procedures_defreturn" id="1jZ?|*vkwX{T#M{Jl]]p" x="16" y="311"><mutation><arg name="tab"></arg></mutation><field name="NAME">zmnozi</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment><statement name="STACK"><block type="variables_set" id="Uzt0igsXFf/jjZJAQV9E"><field name="VAR">produkt</field><value name="VALUE"><block type="math_number" id="TkfEd!YJyH6,oOgwdV42"><field name="NUM">1</field></block></value><next><block type="controls_forEach" id="#(5nX#VEu|m=,,aDB[sz"><field name="VAR">x</field><value name="LIST"><block type="variables_get" id="_2+4]kyC(J6l6;(:`(h2"><field name="VAR">tab</field></block></value><statement name="DO"><block type="variables_set" id="oldiIlnhI.L}2KDF.0@L"><field name="VAR">produkt</field><value name="VALUE"><block type="math_arithmetic" id="oc4.=;dF}-s5f+@qotX~"><field name="OP">MULTIPLY</field><value name="A"><shadow type="math_number" id="*Y2T?cHQ??yn[XY}bZ`X"><field name="NUM">1</field></shadow><block type="variables_get" id="{5I7Sygsxy!Ze9W!}Ddz"><field name="VAR">produkt</field></block></value><value name="B"><shadow type="math_number" id="Wm6!2P6A#|8W[*:,kt)+"><field name="NUM">1</field></shadow><block type="variables_get" id="RkcO_}@8_b}9t!.vLq#W"><field name="VAR">x</field></block></value></block></value></block></statement></block></next></block></statement><value name="RETURN"><block type="variables_get" id="vvAC+RE/IJP/3G33Z1BR"><field name="VAR">produkt</field></block></value></block></xml>',
		},		
		checkEndEveryTurn: false,																//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: printerEndConditions.checkMessagesEqual,     //funkcija za preverjanje uspešnosti rešitve
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				input: "2\n0\n5\n",
				output: "5",
			},
			{
				input: "3\n10\n2\n4\n",
				output: "80",
			},
			{
				input: "5\n3\n0\n0\n0\n0\n",
				output: "3",
			},
			{
				input: "10\n3\n0\n2\n0\n0\n6\n1\n1\n-3\n0",
				output: "-108",
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
   
