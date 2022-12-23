function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hasGravity: false,
      hideSaveOrLoad: false,
      cellSide: cellSide,
      topMargin: 300,
      actionDelay: 200,
      startingExample: {
          easy: {
          blockly:  '<xml id="workspace1" style="display: none">\n' +
                    '  <block type="forwardAmount" id="1" x="10" y="10">\n' +
                    '    <value name="PARAM_0">\n' +
                    '      <block type="math_number" id="2">\n' +
                    '        <field name="NUM">12</field>\n' +
                    '      </block>\n' +
                    '    </value>\n' +
                    '    <next>\n' +
                    '      <block type="writeToScreen" id="3">\n' +
                    '        <value name="PARAM_0">\n' +
                    '          <block type="text" id="4">\n' +
                    '            <field name="TEXT">Želim nazaj</field>\n' +
                    '          </block>\n' +
                    '        </value>\n' +
                    '        <next>\n' +
                    '          <block type="variables_set" id="5">\n' +
                    '            <field name="VAR">stPolj</field>\n' +
                    '            <next>\n' +
                    '              <block type="forwardAmount" id="6">\n' +
                    '                <value name="PARAM_0">\n' +
                    '                  <block type="variables_get" id="7">\n' +
                    '                    <field name="VAR">stPolj</field>\n' +
                    '                  </block>\n' +
                    '                </value>\n' +
                    '                <next>\n' +
                    '                  <block type="forwardAmount" id="8">\n' +
                    '                    <value name="PARAM_0">\n' +
                    '                      <block type="variables_get" id="9">\n' +
                    '                        <field name="VAR">stPolj</field>\n' +
                    '                      </block>\n' +
                    '                    </value>\n' +
                    '                    <next>\n' +
                    '                      <block type="forwardAmount" id="10">\n' +
                    '                        <value name="PARAM_0">\n' +
                    '                          <block type="variables_get" id="11">\n' +
                    '                            <field name="VAR">stPolj</field>\n' +
                    '                          </block>\n' +
                    '                        </value>\n' +
                    '                      </block>\n' +
                    '                    </next>\n' +
                    '                  </block>\n' +
                    '                </next>\n' +
                    '              </block>\n' +
                    '            </next>\n' +
                    '          </block>\n' +
                    '        </next>\n' +
                    '      </block>\n' +
                    '    </next>\n' +
                    '  </block>\n' +
                    '</xml>\n'
      },
      },
      backgroundColor: "#ffffff",
      borderColor: "#111111",
      showLabels: true,
      showPath: {easy: true, medium: false, hard: true},
      itemTypes: {
         avto:   { img: "avto.png", side: cellSide, nbStates: 9, isObstacle: false, isFig1: true, isFig2: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         red:    { num: 3, img: "red.png",    side: cellSide, color: "red",    category: "paint" },
         blue:   { num: 9, img: "blue.png", side: cellSide, color: "blue", category: "paint" },
         yellow: { num: 8, img: "yellow.png", side: cellSide, color: "yellow", category: "paint" },
      },
      maxInstructions: {
         easy: 12,
         medium: 8,
         hard: 5
      },
      includeBlocks: {
          groupByCategory: true,
          generatedBlocks: {
              robot: ["forwardAmount", "turnLeft", "turnRight", "writeToScreen", "currentPosition", "row", "col"]
          },
          standardBlocks: {
              includeAll: false,
              wholeCategories: ["variables"],
              singleBlocks: ["controls_whileUntil", "controls_if", "controls_if_else", "controls_repeat_ext", "text", "math_number", "logic_compare", "controls_flow_statements", "logic_boolean"],
          },
          variables: ["stPolj"],
      },
	  ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: {easy: robotEndConditions.checkCarPath, medium: robotEndConditions.checkCarPath, hard: robotEndConditions.checkCarPath}
   };



    subTask.data = {
        easy: [
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

                ],
                initItems: [
                    { row: 19, col: 7, dir: 3, type: "avto" },
                ],
                output: "Želim nazaj\n",
                endPosition: {row: 19, col: 7},
            },
        ],
        medium: [
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                ],
                initItems: [
                    { row: 19, col: 7, dir: 3, type: "avto" },
                ],
                output: "",
            },
        ],
        hard: [
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 2, 2, 2, 1, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1],
                    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1],
                    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1],
                    [1, 1, 1, 2, 1, 1, 1, 8, 8, 8, 1, 9, 1, 1, 1],
                    [1, 1, 1, 2, 2, 2, 1, 1, 1, 8, 1, 9, 1, 1, 1],
                    [1, 1, 1, 1, 1, 2, 1, 1, 1, 8, 1, 9, 1, 1, 1],
                    [1, 1, 1, 1, 1, 2, 1, 1, 1, 8, 1, 9, 1, 1, 1],
                    [1, 1, 1, 1, 1, 2, 1, 1, 1, 3, 1, 9, 1, 1, 1],
                    [8, 8, 8, 1, 1, 2, 2, 2, 1, 1, 1, 9, 8, 8, 8],
                    [1, 1, 8, 1, 1, 1, 1, 2, 1, 1, 1, 9, 1, 1, 8],
                    [1, 1, 8, 1, 1, 1, 1, 2, 1, 1, 1, 9, 1, 1, 8],
                    [1, 1, 8, 1, 1, 1, 1, 2, 1, 1, 1, 9, 1, 1, 8],
                    [1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                ],
                initItems: [
                    { row: 7, col: 1, dir: 2, type: "avto" },
                    { row: 7, col: 5, dir: 2, type: "avto" },
                    { row: 15, col: 0, dir: 2, type: "avto" },
                    { row: 15, col: 12, dir: 2, type: "avto" },
                    { row: 10, col: 7, dir: 2, type: "avto" },
                ],
                output: "",
            },
        ]
    };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
