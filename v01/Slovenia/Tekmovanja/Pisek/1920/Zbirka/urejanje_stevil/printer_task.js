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
		maxInstructions: 59,
		includeBlocks: {			//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				printer: ["print", "readInteger"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories: ["logic", "functions", "variables", "loops", "math"],
				singleBlocks: ["controls_forEach", "text"],
				excludedBlocks: [],
			},
		},
		startingExample: { //vnaprej podana koda ukazov
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="MeNysGC]}B=-Z-/8G|J@" deletable="false" movable="false" editable="false" x="3" y="0"><next><block type="variables_set" id="|U._4v~aNy{oJ`2*fK1p"><field name="VAR">stevilo</field><value name="VALUE"><block type="readInteger" id="?[!s#V0-hO(OGmptY]Rw"></block></value><next><block type="variables_set" id="+Y(*EBpUzbOHYkJ,a]7o"><field name="VAR">tabela</field><value name="VALUE"><block type="lists_create_with" id="bHO935X8vhz|be3!IzjQ"><mutation items="0"></mutation></block></value><next><block type="controls_repeat_ext" id=",H4]H7rHlC{FENf]W[/Y"><value name="TIMES"><shadow type="math_number" id=",ES-@{}z~;;(zA)Ei?3H"><field name="NUM">10</field></shadow><block type="variables_get" id="4u=9gDQp#8lm.lTobe@S"><field name="VAR">stevilo</field></block></value><statement name="DO"><block type="lists_setIndex" id="JkEp2~,J@:zWKpky#2@I"><mutation at="false"></mutation><field name="WHERE">LAST</field><field name="MODE">INSERT</field><value name="LIST"><block type="variables_get" id="y5_MHn)JU,G`Jd;}ty(~"><field name="VAR">tabela</field></block></value><value name="TO"><block type="readInteger" id="MXIbf!v{yEJU*nD2)S@:"></block></value></block></statement><next><block type="procedures_callnoreturn" id="je;V,RJM}IJTN4Jw+#Ep"><mutation name="uredi_stevila"><arg name="tab"></arg><arg name="n"></arg></mutation><value name="ARG0"><block type="variables_get" id="l:wB4H7SnU[t=@?KsLPM"><field name="VAR">tabela</field></block></value><value name="ARG1"><block type="variables_get" id="~BN;zSaI1H`)A@)Izw(."><field name="VAR">stevilo</field></block></value><next><block type="controls_for" id="VlyPpR2O?i)qyt,t`r~g"><field name="VAR">m</field><value name="FROM"><shadow type="math_number" id="d2hsgRETz5iMq?Njwjx["><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number" id="-f:xkyvFd`WbOe7Gmnb6"><field name="NUM">10</field></shadow><block type="variables_get" id="agMiQ7YK++Qauv!bl!~D"><field name="VAR">stevilo</field></block></value><value name="BY"><shadow type="math_number" id="GYtL4rr5h1kodS?}FCfx"><field name="NUM">1</field></shadow></value><statement name="DO"><block type="print" id="70OX3Q;fR95tGWzri`*G"><value name="PARAM_0"><block type="lists_getIndex" id="jsI=lrnu1@?rQrx0f.KY"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get" id="9F-IP~O6a-~-38Q):!m2"><field name="VAR">tabela</field></block></value><value name="AT"><block type="variables_get" id="TZF7x)V4[(7jmlgSkF|n"><field name="VAR">m</field></block></value></block></value><next><block type="controls_if" id=",_-5(s[Vu!N]-?7`jlBI"><value name="IF0"><block type="logic_compare" id="kW/(=6,R2caIGP54GTZx"><field name="OP">LT</field><value name="A"><block type="variables_get" id="hd0_wgZ@`r1Pk@-WT]rA"><field name="VAR">m</field></block></value><value name="B"><block type="variables_get" id="1fTQk2)i7FNKtbyL@];?"><field name="VAR">stevilo</field></block></value></block></value><statement name="DO0"><block type="print" id="nvE7IVc6fF.h!zB9~7m1"><value name="PARAM_0"><block type="text" id="HAGV,!EG0bu{T0vX_0(i"><field name="TEXT">, </field></block></value></block></statement></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block><block type="procedures_defnoreturn" id="r!pV6XbJPIl,j}/8!qiQ" x="0" y="413"><mutation><arg name="tab"></arg><arg name="n"></arg></mutation><field name="NAME">uredi_stevila</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment></block><block type="lists_setIndex" id="0Sr6~/q3bc8]Z6Bso49N" x="374" y="428"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><field name="MODE">SET</field><value name="LIST"><block type="variables_get" id="boOv2y45c}]{zL8!K1-/"><field name="VAR">tab</field></block></value><value name="AT"><block type="variables_get" id="xsMCzFO{NasiAWH_QYJX"><field name="VAR">i</field></block></value><value name="TO"><block type="variables_get" id="k+@a.q_xX[,(tg61iPiQ"><field name="VAR">a</field></block></value><next><block type="lists_setIndex" id="S~H+s)+J@ax.~lH=p=Rz"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><field name="MODE">SET</field><value name="LIST"><block type="variables_get" id=",zDr;?t:;Z?Wf,MtGjOm"><field name="VAR">tab</field></block></value><value name="AT"><block type="math_arithmetic" id="T,gXc{T!MRX+D0l|0jO-"><field name="OP">MINUS</field><value name="A"><shadow type="math_number" id="XP[~#9ej:ry9GV[zrA+["><field name="NUM">1</field></shadow><block type="variables_get" id="V!)CsbL/i.iA9Gn?rvE/"><field name="VAR">i</field></block></value><value name="B"><shadow type="math_number" id="y#eaY|h=czN1=j;p{dCN"><field name="NUM">1</field></shadow></value></block></value><value name="TO"><block type="variables_get" id="wd/mUw3LXP4AH`njli{y"><field name="VAR">b</field></block></value></block></next></block><block type="controls_repeat_ext" id="qANA)*XxKE1GvX7Jtq,Z" x="7" y="487"><value name="TIMES"><shadow type="math_number" id="0GyUW9Hde?]YtlbLtDmk"><field name="NUM">10</field></shadow><block type="math_arithmetic" id="DaE]hLU:(AXWzFma,Yl)"><field name="OP">MINUS</field><value name="A"><shadow type="math_number" id="XP[~#9ej:ry9GV[zrA+["><field name="NUM">1</field></shadow><block type="variables_get" id="~}FMC4abVTR3mXwLUWdb"><field name="VAR">n</field></block></value><value name="B"><shadow type="math_number" id="Tzcx]IlnCDAd.UcMse(_"><field name="NUM">1</field></shadow></value></block></value></block><block type="controls_for" id="riPjx,A53.B0vx`oBcPK" x="128" y="546"><field name="VAR">i</field><value name="FROM"><shadow type="math_number" id="g[5h:Wn~KpGperohlwxv"><field name="NUM">2</field></shadow></value><value name="TO"><shadow type="math_number" id="NB!o@avoyrmwT)IbtbYT"><field name="NUM">10</field></shadow><block type="variables_get" id="4nT.,JE=~e_8;cXi]T|E"><field name="VAR">n</field></block></value><value name="BY"><shadow type="math_number" id="z_#@*l]?M`-{;M49{Q5!"><field name="NUM">1</field></shadow></value></block><block type="variables_set" id="(wWLAfV_.666T8@6MNNU" x="262" y="603"><field name="VAR">a</field><value name="VALUE"><block type="lists_getIndex" id="uXhTVoEHHURi+:pB;/8Z"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get" id="D3z8GN}ta4l(@eZyGp(G"><field name="VAR">tab</field></block></value><value name="AT"><block type="math_arithmetic" id="qtj?_6q~lg_f:h=V*@v7"><field name="OP">MINUS</field><value name="A"><shadow type="math_number" id="XP[~#9ej:ry9GV[zrA+["><field name="NUM">1</field></shadow><block type="variables_get" id="/oj1zL0qVQPgckhV/h_]"><field name="VAR">i</field></block></value><value name="B"><shadow type="math_number" id="rO+QN=rQ{,E7lLg:]umW"><field name="NUM">1</field></shadow></value></block></value></block></value></block><block type="controls_if" id="9#J1JI/n?wc6LHq~@/a@" x="35" y="663"><value name="IF0"><block type="logic_compare" id="{Vz4)s!sdj.z=PC6Xn;3"><field name="OP">GT</field><value name="A"><block type="variables_get" id="ZX-1YJ2h]liV:rnx#TAz"><field name="VAR">a</field></block></value><value name="B"><block type="variables_get" id="BTg=lTUxCyvptO|4ANLj"><field name="VAR">b</field></block></value></block></value></block><block type="variables_set" id="sQtSi~pO{!V@Q.g[8u_J" x="331" y="684"><field name="VAR">b</field><value name="VALUE"><block type="lists_getIndex" id="*p_zSD{GH[H6/JN@/m#t"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get" id="+*2lD{U7MLIoi15/S~|B"><field name="VAR">tab</field></block></value><value name="AT"><block type="variables_get" id="sjSQH`Ax@s@TLkSEaDF~"><field name="VAR">i</field></block></value></block></value></block></xml>',
		},		
		checkEndEveryTurn: false,																//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: printerEndConditions.checkMessagesEqual,     //funkcija za preverjanje uspešnosti rešitve
	};

	subTask.data = {					//testni primeri
		easy: [
			{
				input: "2\n0\n5\n",
				output: "0, 5",
			},
			{
				input: "3\n10\n2\n4\n",
				output: "2, 4, 10",
			},
			{
				input: "5\n3\n0\n3\n0\n0\n",
				output: "0, 0, 0, 3, 3",
			},
			{
				input: "10\n3\n7\n1\n2\n11\n6\n1\n2\n-3\n0\n",
				output: "-3, 0, 1, 1, 2, 2, 3, 6, 7, 11",
			},
		],
	};

	initBlocklySubTask(subTask);	//klic programskega orodja Blockly
}

initWrapper(initTask, null, null, true);
//initWrapper(initTask, null, null, true);
   
