function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hasGravity: false,
      hideSaveOrLoad: false,
      cellSide: cellSide,
      topMargin: 300,
      actionDelay: 200,
      backgroundColor: "#ffffff",
      borderColor: "#111111",
      showLabels: true,
      showPath: {easy: true, medium: true},
      startingExample: {
          easy: {blockly:
                  '<xml id="workspace1" style="display: none">\n' +
                  '  <block type="controls_whileUntil" id="1">\n' +
                  '    <field name="MODE">WHILE</field>\n' +
                  '    <value name="BOOL">\n' +
                  '      <block type="logic_boolean" id="2">\n' +
                  '        <field name="BOOL">TRUE</field>\n' +
                  '      </block>\n' +
                  '    </value>\n' +
                  '    <statement name="DO">\n' +
                  '      <block type="controls_if" id="3">\n' +
                  '        <value name="IF0">\n' +
                  '          <block type="logic_compare" id="4">\n' +
                  '            <field name="OP">EQ</field>\n' +
                  '            <value name="A">\n' +
                  '              <block type="col" id="5"></block>\n' +
                  '            </value>\n' +
                  '            <value name="B">\n' +
                  '              <block type="math_number" id="6">\n' +
                  '                <field name="NUM">8</field>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '        <statement name="DO0">\n' +
                  '          <block type="controls_if" id="7">\n' +
                  '            <value name="IF0">\n' +
                  '              <block type="logic_compare" id="8">\n' +
                  '                <field name="OP">EQ</field>\n' +
                  '                <value name="A">\n' +
                  '                  <block type="row" id="9"></block>\n' +
                  '                </value>\n' +
                  '                <value name="B">\n' +
                  '                  <block type="text" id="10">\n' +
                  '                    <field name="TEXT">M</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <statement name="DO0">\n' +
                  '              <block type="controls_flow_statements" id="11">\n' +
                  '                <field name="FLOW">BREAK</field>\n' +
                  '              </block>\n' +
                  '            </statement>\n' +
                  '            <next>\n' +
                  '              <block type="forwardAmount" id="12">\n' +
                  '                <value name="PARAM_0">\n' +
                  '                  <block type="math_number" id="13">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </next>\n' +
                  '          </block>\n' +
                  '        </statement>\n' +
                  '      </block>\n' +
                  '    </statement>\n' +
                  '  </block>\n' +
                  '</xml>\n'}
      },
      itemTypes: {
         avto:  { img: "avto.png", side: cellSide, nbStates: 9, isObstacle: false, isFig1: true, isFig2: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         red:       { num: 3, img: "red.png",    side: cellSide, color: "red",    category: "paint" },
      },
      maxInstructions: {
         easy: 13,
         medium: 10,
      },
      includeBlocks: {
          groupByCategory: true,
          generatedBlocks: {
              robot: ["forwardAmount", "turnLeft", "turnRight", "writeToScreen", "currentPosition", "row", "col"]
          },
          standardBlocks: {
              includeAll: false,
              wholeCategories: ["variables"],
              singleBlocks: ["controls_whileUntil", "controls_if", "controls_repeat_ext", "text", "math_number", "logic_compare", "controls_flow_statements", "logic_boolean"],
          },
          variables: ["stPolj"],
      },
	  ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: {easy: robotEndConditions.checkCarPath, medium: robotEndConditions.checkCarPath}
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
                    [1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                ],
                initItems: [
                    { row: 19, col: 7, dir: 3, type: "avto" },
                ],
                output: "",
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
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

                ],
                initItems: [
                    { row: 19, col: 7, dir: 3, type: "avto" },
                ],
                output: "",
            },
        ],
    };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium"], null, true);
