function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         tabornik: { img: "tabornik.png", category: "robot", side: 80, nbStates: 9, offsetX: -15 },
         obstacle: { num: 2, img: "grm.png", side: cellSide, isObstacle: true },
         obstacl: { num: 5, img: "drevo.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "cilj.png", side: cellSide, color: "vert" },
         pill1: { num: 4, img: "zvezda.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 0 }
      },
      maxInstructions: 0,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            robot: ["east", "south", "north","west"]
         },
      standardBlocks: {
         includeAll: false,
         wholeCategories: [],
         singleBlocks: ["controls_repeat"]
      },

      },
      startingExample: {
         easy: {
               blockly:'<xml xmlns="http://www.w3.org/1999/xhtml">\n'+
               '<block type="robot_start" id="Pku..pcPD|FUv8BOy5rO" deletable="false" movable="false" editable="false" x="0" y="0">\n'+
               '<next><block type="controls_repeat_ext" id="I/bj~Yc641Csbs9zV69i">\n'+
               '<value name="TIMES">\n'+
               '<shadow type="math_number" id="Ub(#jY3*SI~c,gJCos9N">\n'+
               '<field name="NUM">10</field>\n'+
               '</shadow></value>\n'+
               '<statement name="DO">\n'+
               '<block type="east" id="+54HB+fL,hQC`A{APaEG">\n'+
               '</block>\n'+
               '</statement>\n'+
               '<next>\n'+
               '<block type="controls_repeat_ext" id="mF*;@?1}7*rZ{.7xMu1P">\n'+
               '<value name="TIMES">\n'+
               '<shadow type="math_number" id=";}3xUtE?rd/3h}1v:hOO">\n'+
               '<field name="NUM">10</field>\n'+
               '</shadow>\n'+
               '</value>\n'+
               '<statement name="DO">\n'+
               '<block type="south" id="@u#[|{[`Lkm:1Fxj:nGa">\n'+
               '</block>\n'+
               '</statement>\n'+
               '<next>\n'+
               '<block type="controls_repeat_ext" id="rhzxPp:HNXz0*{;rOP_]">\n'+
               '<value name="TIMES">\n'+
               '<shadow type="math_number" id="c:/pg||4l?zC5.Uy2GQP">\n'+
               '<field name="NUM">10</field>\n'+
               '</shadow>\n'+
               '</value>\n'+
               '<statement name="DO">\n'+
               '<block type="north" id="(/lXes:(gX6d)dux)B~I">\n'+
               '</block>\n'+
               '</statement>\n'+
               '<next>\n'+
               '<block type="controls_repeat" id="HYOxH}vS#CIc?91IVA}F">\n'+
               '<field name="TIMES">10</field>\n'+
               '<statement name="DO">\n'+
               '<block type="west" id="N4pdsMCtpTI/Z:JYQou8">\n'+
               '</block>\n'+
               '</statement>\n'+
               '</block>\n'+
               '</next>\n'+
               '</block>\n'+
               '</next>\n'+
               '</block>\n'+
               '</next>\n'+
               '</block>\n'+
               '</next>\n'+
               '</block>\n'+
               '</xml>'
            }
      },
      backgroundColor: "noire",
	  blocklyColourTheme: "bwinf",
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [ ],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkPickedAllCollectibles
   };

   subTask.data = {
      easy: [
         {
            tiles: [
               [1, 4, 4, 4, 4, 4],
               [2, 4, 2, 2, 2, 4],
               [2, 4, 2, 2, 2, 4],
               [2, 4, 4, 4, 4, 4]
				],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "tabornik" }
               ]
         }
      ]
};

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
   
