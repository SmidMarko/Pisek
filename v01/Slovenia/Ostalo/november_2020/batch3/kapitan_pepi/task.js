function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hasGravity: false,
      hideSaveOrLoad: false,
      nbRobots: 2,
      cellSide: cellSide,
      actionDelay: 200,
      startingExample: {
          easy: {
              blockly: '<xml id="workspace" style="display: none">\n' +
                  '  <block type="controls_repeat_ext" id="1">\n' +
                  '    <value name="TIMES">\n' +
                  '      <shadow type="math_number" id="2">\n' +
                  '        <field name="NUM">3</field>\n' +
                  '      </shadow>\n' +
                  '    </value>\n' +
                  '    <statement name="DO">\n' +
                  '      <block type="controls_repeat_ext" id="3">\n' +
                  '        <value name="TIMES">\n' +
                  '          <shadow type="math_number" id="4">\n' +
                  '            <field name="NUM">2</field>\n' +
                  '          </shadow>\n' +
                  '        </value>\n' +
                  '        <statement name="DO">\n' +
                  '          <block type="east" id="5"></block>\n' +
                  '        </statement>\n' +
                  '        <next>\n' +
                  '          <block type="north" id="6"></block>\n' +
                  '        </next>\n' +
                  '      </block>\n' +
                  '    </statement>\n' +
                  '  </block>\n' +
                  '</xml>'

          },
          medium: {
              blockly: '<xml id="workspace" style="display: none">\n' +
                  '  <block type="east" id="1">\n' +
                  '    <next>\n' +
                  '      <block type="controls_repeat_ext" id="2">\n' +
                  '        <value name="TIMES">\n' +
                  '          <shadow type="math_number" id="3">\n' +
                  '            <field name="NUM">2</field>\n' +
                  '          </shadow>\n' +
                  '        </value>\n' +
                  '        <statement name="DO">\n' +
                  '          <block type="north" id="4">\n' +
                  '          </block>\n' +
                  '        </statement>\n' +
                  '        <next>\n' +
                  '          <block type="danceMove" id="5">\n' +
                  '            <next>\n' +
                  '              <block type="controls_repeat_ext" id="6">\n' +
                  '                <value name="TIMES">\n' +
                  '                  <shadow type="math_number" id="7">\n' +
                  '                    <field name="NUM">2</field>\n' +
                  '                  </shadow>\n' +
                  '                </value>\n' +
                  '                <statement name="DO">\n' +
                  '                  <block type="east" id="8"></block>\n' +
                  '                </statement>\n' +
                  '                <next>\n' +
                  '                  <block type="danceMove" id="9">\n' +
                  '                    <next>\n' +
                  '                      <block type="controls_repeat_ext" id="10">\n' +
                  '                        <value name="TIMES">\n' +
                  '                          <shadow type="math_number" id="11">\n' +
                  '                            <field name="NUM">2</field>\n' +
                  '                          </shadow>\n' +
                  '                        </value>\n' +
                  '                        <statement name="DO">\n' +
                  '                          <block type="east"></block>\n' +
                  '                        </statement>\n' +
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
                  '</xml>'
          },
          hard: {
             blockly: '<xml id="workspace" style="display: none">\n' +
                 '  <block type="north" id="1">\n' +
                 '    <next>\n' +
                 '      <block type="controls_repeat_ext" id="2">' +
                 '        <value name="TIMES">\n' +
                 '          <shadow type="math_number" id="3">\n' +
                 '            <field name="NUM">5</field>\n' +
                 '          </shadow>\n' +
                 '        </value>\n' +
                 '        <statement name="DO">\n' +
                 '          <block type="west"></block>\n' +
                 '        </statement>\n' +
                 '        <next>\n' +
                 '          <block type="controls_repeat_ext" id="4">\n' +
                 '            <value name="TIMES">\n' +
                 '              <shadow type="math_number" id="5">\n' +
                 '                <field name="NUM">3</field>\n' +
                 '              </shadow>\n' +
                 '            </value>\n' +
                 '            <statement name="DO">\n' +
                 '              <block type="turnAround" id="6">\n' +
                 '                <next>\n' +
                 '                  <block type="forward" id="7">\n' +
                 '                    <next>\n' +
                 '                      <block type="danceMove" id="8"></block>\n' +
                 '                    </next>\n' +
                 '                  </block>\n' +
                 '                </next>\n' +
                 '              </block>\n' +
                 '            </statement>\n' +
                 '            <next>\n' +
                 '              <block type="east" id="9">\n' +
                 '                <next>\n' +
                 '                  <block type="danceJump" id="10"></block>\n' +
                 '                </next>\n' +
                 '              </block>\n' +
                 '            </next>\n' +
                 '          </block>\n' +
                 '        </next>\n' +
                 '      </block>\n' +
                 '    </next>\n' +
                 '  </block>\n' +
                 '</xml>'
          }
      },
      itemTypes: {
         plesalka: { img: "green_robot.png", side: cellSide, nbStates: 9, nbStates2: 15, isObstacle: false, isFig1: true, isFig2: false, offsetX: 0, category: "robot", team: 0, zOrder: 2 },
         tile:      { num: 1, img: "tile.png",    side: cellSide },
		 red:      { num: 3, img: "red.png",    side: cellSide, color: "red",    category: "paint" },
         blue:     { num: 4, img: "blue.png",   side: cellSide, color: "blue",   category: "paint" },
         yellow:   { num: 2, img: "yellow.png", side: cellSide, color: "yellow", category: "paint" },
      },
      maxInstructions: {
         easy: 6,
         medium: 12,
         hard: 16
      },
      includeBlocks: {
          groupByCategory: false,
          generatedBlocks: {
              robot: {
                  easy: ["west", "east", "north", "south"],
                  medium: ["west", "east", "north", "south", "danceMove"],
                  hard: ["west", "east", "north", "south", "danceMove", "danceJump"],
              }
          },
          standardBlocks: {
              includeAll: false,
              wholeCategories: [],
              singleBlocks: ["controls_repeat_ext"]
          }
      },
	  ignoreInvalidMoves: false,
      checkEndEveryTurn: false,
      checkEndCondition: { easy: robotEndConditions.checkDanceMoves, medium: robotEndConditions.checkDanceMoves, hard: robotEndConditions.checkDanceMovesAndJumps}
   };



    subTask.data = {
        easy: [
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 2, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1]
                ],
                initItems: [
                    { row: 5, col: 1, dir: 3, type: "plesalka" },
                ]
            },
        ],
        medium: [
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 3, 1, 3, 2, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 3, 1, 3, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1]
                ],
                initItems: [
                    { row: 5, col: 1, dir: 3, type: "plesalka" },
                ]
            },
        ],
        hard: [
            {
                tiles: [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 3, 1, 3, 1, 4, 2, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 3, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1]
                ],
                initItems: [
                    { row: 5, col: 7, dir: 0, type: "plesalka" },
                ]
            },
        ]
    };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["medium"], null, true);
