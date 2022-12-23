function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         green_robot: { img: "green_robot.png", category: "robot", side: 80, nbStates: 9, offsetX: - 7, offsetY: 5,  zOrder: 2},
         obstacle: { num: 2, img: "obstacle.png", side: cellSide, isObstacle: true, zOrder: 0 },
         green: { num: 3, img: "green.png", side: cellSide, color: "vert", zOrder: 0 }, 
		 hole: { num: 7, img: "hole.png", side: cellSide, category: "hole", isObstacle: false, isHole: true, zOrder: 0 },
         marble: { num: 8, img: "marble.png", side: cellSide, category: "marble", isObstacle: false, isTransportable: true, zOrder: 1 },
         pill: { num: 9, img: "pill.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 1 },
		 marker: { num: 4, img: "marker.png", side: cellSide, category: "paint", isObstacle: false, isMarker: true, hasColor: true, color: "marker", zOrder: 0},
         paint: { img: "paint2.png", side: cellSide, category: "paint", isPaint: true, isObstacle: false, hasColor: true, color: "gris", zOrder: 1 },	 
		 0: { num: 100, side: cellSide, category: "number", value: 0 },
         1: { num: 101, side: cellSide, category: "number", value: 1 },
         2: { num: 102, side: cellSide, category: "number", value: 2 },
         3: { num: 103, side: cellSide, category: "number", value: 3 },
         4: { num: 104, side: cellSide, category: "number", value: 4 },
         5: { num: 105, side: cellSide, category: "number", value: 5 },
         6: { num: 106, side: cellSide, category: "number", value: 6 },
         7: { num: 107, side: cellSide, category: "number", value: 7 },
         8: { num: 108, side: cellSide, category: "number", value: 8 },
         9: { num: 109, side: cellSide, category: "number", value: 9 },
         10: { num: 110, side: cellSide, category: "number", value: 10 },
         11: { num: 111, side: cellSide, category: "number", value: 11 },
         12: { num: 112, side: cellSide, category: "number", value: 12 },
         13: { num: 113, side: cellSide, category: "number", value: 13 },
         14: { num: 114, side: cellSide, category: "number", value: 14 },
         15: { num: 115, side: cellSide, category: "number", value: 15 },
         16: { num: 116, side: cellSide, category: "number", value: 16 },
         17: { num: 117, side: cellSide, category: "number", value: 17 },
         18: { num: 118, side: cellSide, category: "number", value: 18 },
         19: { num: 119, side: cellSide, category: "number", value: 19 },
         20: { num: 120, side: cellSide, category: "number", value: 20 }
	  },
      maxInstructions: {
		  easy: 30,
		  medium: 35,
		  hard: 40
	  },
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {     
			robot: {
				easy: ["south", "east", "west", "numberUnder", "writeNumber"],
				medium: ["south", "east", "west", "numberUnder"],
				hard: ["south", "east", "west", "numberUnder", "pickTransportable", "dropTransportable"]
			}
		 },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["math", "variables"],
            singleBlocks: ["controls_repeat", "controls_for","lists_repeat", "lists_getIndex", "lists_setIndex"]
         }
      },
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: {
		  easy: function(context, lastTurn) {
         if (lastTurn) {
			var i = 0;
			var j = 0;
            var total = [0, 0, 0, 0, 0, 0];
            for (var iRow = 0; iRow < context.tiles.length; iRow++) {
               var row = subTask.data[subTask.level][subTask.iTestCase].tiles[iRow];
               for (var iCol = 0; iCol < row.length; iCol++) {
                  var items = context.getItems(iRow, iCol, {category: "number"});
                  var hasNumber = (items.length != 0);
                  if (hasNumber) {
                     var oldNumber = row[iCol];
                     var item = items[0];
                     var itemType = this.itemTypes[item.type];
                     if (oldNumber != 100) {
                        if (itemType.num != oldNumber) {
                           context.success = false;
                           throw("Ne smete spreminjati, če kvadrat ne vsebuje nič.");
                        }
                        total[i] = itemType.value;
						i = i + 1;
                     } 
					 else {
                        if (total[j] != itemType.value) {
                           context.success = false;
                           throw("Napačna številka.");
                        }
						else{
							j = j + 1;
						}
                     }
                  }
               }
            }
            context.success = true;
            throw("Super, vpisali ste pravilne številke!");
         }
      }, 
		  medium: robotEndConditions.checkPickedAllCollectibles, 
		  hard: robotEndConditions.checkMarblesInHoles
	  }
   };

   subTask.data = {
      easy: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 109, 103, 105, 102, 107, 101, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 107, 101, 112, 103, 104, 104, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 111, 102, 115, 103, 101, 120, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 100, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ],
	  medium: [
         {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 101, 103, 106, 103, 102, 101, 1],
                   [1, 1, 9, 1, 1, 1, 1, 1, 1],
                   [1, 1, 9, 9, 9, 1, 1, 1, 1],
                   [1, 1, 9, 9, 9, 9, 9, 9, 1],
                   [1, 1, 9, 9, 9, 1, 1, 1, 1],
                   [1, 1, 9, 9, 1, 1, 1, 1, 1],
                   [1, 1, 9, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 104, 103, 105, 102, 106, 101, 1],
                   [1, 1, 9, 9, 9, 9, 1, 1, 1],
                   [1, 1, 9, 9, 9, 1, 1, 1, 1],
                   [1, 1, 9, 9, 9, 9, 9, 1, 1],
                   [1, 1, 9, 9, 1, 1, 1, 1, 1],
                   [1, 1, 9, 9, 9, 9, 9, 9, 1],
                   [1, 1, 9, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 101, 103, 102, 102, 103, 101, 1],
                   [1, 1, 9, 1, 1, 1, 1, 1, 1],
                   [1, 1, 9, 9, 9, 1, 1, 1, 1],
                   [1, 1, 9, 9, 1, 1, 1, 1, 1],
                   [1, 1, 9, 9, 1, 1, 1, 1, 1],
                   [1, 1, 9, 9, 9, 1, 1, 1, 1],
                   [1, 1, 9, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         }
	  ],
	  hard: [
        {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 104, 103, 105, 102, 103, 101, 1],
                   [1, 8, 1, 1, 1, 7, 1, 1, 1],
                   [1, 8, 1, 1, 7, 1, 1, 1, 1],
                   [1, 8, 1, 1, 1, 1, 7, 1, 1],
                   [1, 8, 1, 7, 1, 1, 1, 1, 1],
                   [1, 8, 1, 1, 7, 1, 1, 1, 1],
                   [1, 8, 7, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 101, 103, 104, 105, 103, 101, 1],
                   [1, 8, 7, 1, 1, 1, 1, 1, 1],
                   [1, 8, 1, 1, 7, 1, 1, 1, 1],
                   [1, 8, 1, 1, 1, 7, 1, 1, 1],
                   [1, 8, 1, 1, 1, 1, 7, 1, 1],
                   [1, 8, 1, 1, 7, 1, 1, 1, 1],
                   [1, 8, 7, 1, 1, 1, 1, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         },
		 {
            tiles: [
                   [1, 1, 1, 1, 1, 1, 1, 1, 1],
                   [1, 1, 106, 103, 101, 104, 103, 105, 1],
                   [1, 8, 1, 1, 1, 1, 1, 7, 1],
                   [1, 8, 1, 1, 7, 1, 1, 1, 1],
                   [1, 8, 7, 1, 1, 1, 1, 1, 1],
                   [1, 8, 1, 1, 1, 7, 1, 1, 1],
                   [1, 8, 1, 1, 7, 1, 1, 1, 1],
                   [1, 8, 1, 1, 1, 1, 7, 1, 1],
                   [1, 1, 1, 1, 1, 1, 1, 1, 1]
               ],
            initItems: [
                  { row: 1, col: 1, dir: 0, type: "green_robot" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   