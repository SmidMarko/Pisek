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
		includeBlocks: {																	//dovoljeni ukazi 
			groupByCategory: true,
			generatedBlocks: {
				turtle: ["moveamountvalue","movebackamountvalue","turnleftamountvalue", "turnrightamountvalue", "peneither", "colourvalue"],
			},
			standardBlocks: {
				includeAll: false,
				wholeCategories:["functions"],
				singleBlocks: ["controls_repeat"],
				excludedBlocks: [],
			},
		},
		startingExample: {
			blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="procedures_defnoreturn" id="#nzd/.mm::N]pC5s]DP}" x="277" y="0"><field name="NAME">padalo</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment><statement name="STACK"><block type="controls_repeat" id="?/YzD21.Z]EqYJWfOy;/"><field name="TIMES">12</field><statement name="DO"><block type="moveamountvalue" id="5KMaaVFuhcWzlip2Vww1"><field name="PARAM_0">10</field><next><block type="movebackamountvalue" id="_4?!ICb7,+!k[f.COg+6"><field name="PARAM_0">10</field><next><block type="turnrightamountvalue" id="X:yq;hG1{{j/U/h0q392"><field name="PARAM_0">30</field></block></next></block></next></block></statement></block></statement></block><block type="robot_start" id="jk2+`(j/yC0bJG5wwn=5" deletable="false" movable="false" editable="false" x="0" y="15"><next><block type="colourvalue" id="zrn(Ke}PT!c=e8HFP~++"><field name="PARAM_0">#ffffff</field><next><block type="procedures_callnoreturn" id="rh;V6M)Zx[G*M}DS~{0."><mutation name="vrstica"></mutation></block></next></block></next></block><block type="procedures_defnoreturn" id="b#-nT`gy}N@,#AJChIc+" x="294" y="190"><field name="NAME">vrstica</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment><statement name="STACK"><block type="procedures_callnoreturn" id="qA?tw`{jK6aB-kGtYNC="><mutation name="padalo"></mutation></block></statement></block><additional>{}</additional></xml>',
		},
		checkEndEveryTurn: false,													//kako pogosto preverjamo uspešnost rešitve
		checkEndCondition: turtleEndConditions.checkImagesEqualOLD,	//funkcija za preverjanje uspešnosti rešitve
   
		overlayFileName: "sand.png",
		turtleImageFile: "turtle.png",
		turtleStepSize: 0.1,
		coords: { x: 150, y: 150},
    };

	subTask.data = {
		easy: [
			{
				drawSolution : function(turtle) {
					var rgbToHex = function (rgb) { 
						var hex = Number(rgb).toString(16);
						if (hex.length < 2) {
							hex = "0" + hex;
						}
						return hex;
					};
					turtle.set_colour("#ffffff"); 
					for (var i = 0; i < 6; i++) {
						turtle.move(10);
						turtle.turn(180);
						turtle.move(10);
				  		turtle.turn(180+60);
					}
					turtle.stop_painting();
					for (var j = 0; j < 12; j++) {
						for(var k = 0; k <4; k++){  
							turtle.start_painting();
							for (var i = 0; i < 12; i++) { //lucka
								turtle.move(10);
								turtle.turn(180);
								turtle.move(10);
								turtle.turn(180+30);
							}
							turtle.stop_painting();
							turtle.move(40);
						}					
						turtle.turn(180);
						turtle.move(40);
						turtle.start_painting();
						turtle.move(6*20);
						turtle.turn(180+30);
					}
				},
			},
		],
	};

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);