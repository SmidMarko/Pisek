function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "pisek.png", side: 60, nbStates: 9, isObstacle: true, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         hole: { num: 2, img: "hole.png",side: 45, offsetX: 8, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 3, img: "marble.png", side: 45, offsetX: 8, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 }
/* 	
Lahko se uporabi tudi nekaj takega:	 (num določa številko, s katero označimo objekt v tabeli spodaj)
		green_robot: { img: "green_robot.png", side: 80, nbStates: 9, isObstacle: true, offsetX: -14, category: "robot", team: 0, zOrder: 2 },
         0: { num: 100, side: cellSide, category: "number", value: 0 },
         1: { num: 101, side: cellSide, category: "number", value: 1 },
         2: { num: 2, side: cellSide, category: "number", value: 2 },
         3: { num: 3, side: cellSide, category: "number", value: 3 },
         4: { num: 4, side: cellSide, category: "number", value: 4 },
         5: { num: 5, side: cellSide, category: "number", value: 5 },
         6: { num: 6, side: cellSide, category: "number", value: 6 },
         7: { num: 7, side: cellSide, category: "number", value: 7 },
         8: { num: 8, side: cellSide, category: "number", value: 8 },
         marker: { num: 9, img: "marker.png", side: cellSide, isMarker: true, category: "marker", isObstacle: false, hasColor: true, color: "marker", zOrder: 0 },
         paint: { img: "paint.png", side: cellSide, isPaint: true, category: "paint", color: "gris", zOrder: 1 }
*/	 
      },
/* 	 Maksimalno število blokov, ki jih lahko uporabiš 
	   */
      maxInstructions: {
         easy: 0,
         medium: 0,
         hard: 0
      },
      includeBlocks: {
         groupByCategory: {
            easy: true,
            medium: true,
            hard: true
         },
/* 
	Tukaj so zbrana imena blokov:
			wait: "počakaj",
            right: "obrni se levo",
            left: "obrni se desno",
            forward: "premakni se naprej",
            turnAround: "obrni se okoli",
            jump: "skoči",
            down: "pojdi dol",
            east: "premakni se desno",
            south: "premakni se dol",
            west: "premakni se levo",
            north: "premakni se gor",
            paint: "pobarvaj polje",
            pickTransportable: "poberi frnikolo",
            dropTransportable: "odvrzi frnikolo",
            onTransportable: "na frnikoli",
            onRoundObject: "na okroglem predmetu",
            onSquareObject: "na kvadratnem predmetu",
            onTriangleObject: "na trikotnem predmetu",
            onDottedObject: "na pikčastem predmetu",
            onFullObject: "na polnem predmetu",
            onStripedObject: "na črtastem predmetu",
            onHole: "na luknji",
            transportableShape: "oblika predmeta",
            transportableColor: "barva predmeta",
            transportableRed:  "predmet je rdeč",
            transportableBlue: "predmet je moder",
            transportableSquare: "predmet je kvadraten",
            greenCell: "polje je zeleno",
            brownCell: "polje je rjavo",
            markedCell: "polje je označeno",
            addPlatformAbove: "zgradi ploščad zgoraj",
            addPlatformInFront: "zgradi ploščad spredaj",
            platformInFront: "ploščad spedaj",
            platformInFrontAndBelow: "ploščad spredaj in spodaj",
            platformAbove: "ploščad zgoraj",
            gridEdgeInFront: "rob mreže spredaj",
            gridEdgeAbove: "rob mreže zgoraj",
            gridEdgeBelow: "rob mreže spodaj",
            gridEdgeEast: "rob mreže desno",
            gridEdgeWest: "rob mreže levo",
            obstacleInFront: "ovira spredaj",
            obstacleRight: "ovira desno",
            obstacleLeft: "ovira levo",
            obstacleEast: "ovira desno",
            obstacleWest: "ovira levo",
            obstacleNorth: "ovira zgoraj",
            obstacleSouth: "ovira spodaj",
            paintInFront: "barva spredaj",
            paintOnCell: "barva tega polja",
            paintNorthWest: "barva zgoraj in levo",
            paintNorth: "barva zgoraj",
            paintNorthEast: "barva zgoraj in desno",
            colorUnder: "barva polja",
            numberUnder: "številka polja",
            writeNumber: "nastavi številko polja na",
            dir: "smer robota",
            col: "stolpec robota",
            row: "vrstica robota",
            alert: "opozorilo",
            onPill: "na bonbonu",
            number: "skupno število predmetov za prenos",
            exists: "obstaja predmet, ki ga je mogoče prenesti",
            trans_row: "vrstica predmeta za prenos",
            trans_col: "stolpec predmeta za prenos"	
 */  
		 generatedBlocks: {
            robot: {
               easy: ["east", "west", "pickTransportable", "dropTransportable", "onTransportable", "onHole"],
               medium: ["east", "west", "north", "south", "pickTransportable", "dropTransportable", "onTransportable", "onHole"],
               hard: ["east", "west", "north", "south", "pickTransportable", "dropTransportable", "onTransportable", "onHole"]
            }
         },		 
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["functions", "variables", "math", "loops", "logic"],
            singleBlocks: {
               easy: ["controls_repeat_ext", ],
               medium: ["controls_repeat_ext"],
               hard: ["controls_repeat_ext", "math_arithmetic", "math_number"]
            }
         },
         variables: {
            easy: [],
            medium: [],
            hard: []
         }
      },
	  /*	
	  Možne checkEndCondition vrednosti:
			robotEndConditions.checkMarkersPainted za nalogo označi polja
			robotEndConditions.checkPickedAllCollectibles za nalogo s frnikolami ali objeki tipa isTransportable: true
			robotEndConditions.checkReachGreenArea za nalogo, kjer robot doseže zeleno polje 
			robotEndConditions.checkMarblesInHoles za nalogo pospravi frnikole
		
	 */
	  ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: robotEndConditions.checkMarblesInHoles
   };

   
 /*
 Spodaj v tabelah lahko spremenite vsebino naloge, konkretno postavitev objektov. Vrednosti "num" določenimi v spremenljivkah definiranih v itemTypes zapišemo 
 v polje v tabeli, če tam želimo ta objekt. initItems določa začetni položaj robota.
 */
   
   
   subTask.data = {
      easy: [
         {
            tiles: [
				   [1, 3, 3, 3, 2, 2, 2, 1, 3, 3, 2, 2, 1, 3, 2, 1, 1]
               ],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "green_robot" }
               ]
         }
      ],
      medium: [
				{
            tiles: [
				   [3, 1, 1, 1, 1, 1, 1, 1, 1, 2],
				   [1, 3, 1, 1, 1, 1, 1, 1, 1, 2],
				   [1, 1, 3, 1, 1, 1, 1, 1, 1, 2],
				   [1, 1, 1, 3, 1, 1, 1, 1, 1, 2],
				   [1, 1, 1, 1, 3, 1, 1, 1, 1, 2],
				   [1, 1, 1, 1, 1, 3, 1, 1, 1, 2],
				   [1, 1, 1, 1, 1, 1, 3, 1, 1, 2],
				   [1, 1, 1, 1, 1, 1, 1, 3, 1, 2],
				   [1, 1, 1, 1, 1, 1, 1, 1, 3, 2]				   

               ],
            initItems: [
                  { row: 8, col: 0, dir: 0, type: "green_robot" }
               ]
         }
         
      ],
      hard: [
         {
            tiles: [
				   [1, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2],
				   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				   [1, 1, 1, 3, 3, 3, 3, 2, 2, 2, 2],
				   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				   [1, 1, 1, 1, 1, 3, 3, 3, 2, 2, 2],
				   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				   [1, 1, 1, 1, 1, 1, 1, 3, 3, 2, 2],
				   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				   [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
				   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

               ],
            initItems: [
                  { row: 9, col: 0, dir: 0, type: "green_robot" }
               ]
         }
         
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
