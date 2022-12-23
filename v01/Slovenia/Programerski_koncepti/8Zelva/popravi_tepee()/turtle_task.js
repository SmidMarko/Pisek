function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      startingExample: {
          blockly: '<xml id="workspace1" style="display: none">\n' +
                  '  <block type="procedures_defnoreturn" id="1" x="10" y="10">\n' +
                  '    <mutation>\n' +
                  '      <arg name="n"></arg>\n' +
                  '    </mutation>\n' +
                  '    <field name="NAME">tepee</field>\n' +
                  '    <statement name="STACK">\n' +
                  '      <block type="turnrightamount" id="2">\n' +
                  '        <value name="PARAM_0">\n' +
                  '          <block type="math_number" id="3">\n' +
                  '            <field name="NUM">30</field>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '        <next>\n' +
                  '          <block type="controls_repeat_ext" id="4">\n' +
                  '            <value name="TIMES">\n' +
                  '              <shadow type="math_number" id="5">\n ' +
                  '                <field name="NUM">2</field>\n' +
                  '              </shadow>\n' +
                  '            </value>\n' +
                  '            <statement name="DO">\n' +
                  '              <block type="moveamount" id="6">\n' +
                  '                <value name="PARAM_0">\n' +
                  '                  <block type="variables_get" id="7">\n' +
                  '                    <field name="VAR">n</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '                <next>\n' +
                  '                  <block type="turnrightamount" id="8">\n' +
                  '                    <value name="PARAM_0">\n' +
                  '                      <block type="math_number" id="9">\n' +
                  '                        <field name="NUM">120</field>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                  </block>\n' +
                  '                </next>\n' +
                  '              </block>\n' +
                  '            </statement>\n' +
                  '            <next>\n' +
                  '              <block type="peneither" id="10">\n' +
                  '                <field name="PARAM_0">up</field>\n' +
                  '                <next>\n' +
                  '                  <block type="moveamount" id="11">\n' +
                  '                    <value name="PARAM_0">\n' +
                  '                      <block type="math_arithmetic" id="12">\n' +
                  '                        <field name="OP">DIVIDE</field>\n' +
                  '                        <value name="A">\n + ' +
                  '                          <block type="variables_get" id="13">\n' +
                  '                            <field name="VAR">n</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                        <value name="B">\n' +
                  '                          <block type="math_number" id="14">\n' +
                  '                            <field name="NUM">4</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <next>\n' +
                  '                      <block type="turnrightamount" id="15">\n' +
                  '                        <value name="PARAM_0">\n' +
                  '                          <block type="math_number" id="16">\n' +
                  '                            <field name="NUM">60</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                        <next>\n' +
                  '                          <block type="peneither" id="17">\n' +
                  '                            <field name="PARAM_0">down</field>\n' +
                  '                            <next>\n' +
                  '                              <block type="controls_repeat_ext" id="18">\n' +
                  '                                <value name="TIMES">\n' +
                  '                                  <shadow type="math_number" id="19">\n' +
                  '                                    <field name="NUM">2</field>\n' +
                  '                                  </shadow>\n' +
                  '                                </value>\n' +
                  '                                <statement name="DO">\n' +
                  '                                  <block type="moveamount" id="20">\n' +
                  '                                    <value name="PARAM_0">\n' +
                  '                                      <block type="math_arithmetic" id="21">\n' +
                  '                                        <field name="OP">DIVIDE</field>\n' +
                  '                                        <value name="A">\n' +
                  '                                          <block type="variables_get">\n' +
                  '                                            <field name="VAR">n</field>\n' +
                  '                                          </block>\n' +
                  '                                        </value>\n' +
                  '                                        <value name="B">' +
                  '                                          <block type="math_number">\n' +
                  '                                            <field name="NUM">2</field>\n' +
                  '                                          </block>\n' +
                  '                                        </value>\n' +
                  '                                      </block>\n' +
                  '                                    </value>\n' +
                  '                                    <next>\n' +
                  '                                      <block type="turnrightamount" id="22">\n' +
                  '                                        <value name="PARAM_0">\n' +
                  '                                          <block type="math_number" id="23">\n' +
                  '                                            <field name="NUM">120</field>\n' +
                  '                                          </block>\n' +
                  '                                        </value>\n' +
                  '                                      </block>\n' +
                  '                                    </next>\n' +
                  '                                  </block>\n' +
                  '                                </statement>\n' +
                  '                                <next>\n' +
                  '                                  <block type="turnleftamount" id="24">\n' +
                  '                                    <value name="PARAM_0">\n' +
                  '                                      <block type="math_number" id="25">\n' +
                  '                                        <field name="NUM">90</field>\n' +
                  '                                      </block>\n' +
                  '                                    </value>\n' +
                  '                                  </block>\n' +
                  '                                </next>\n' +
                  '                              </block>\n' +
                  '                            </next>\n' +
                  '                          </block>\n' +
                  '                        </next>\n' +
                  '                      </block>\n' +
                  '                    </next>\n' +
                  '                  </block>\n' +
                  '                </next>\n' +
                  '              </block>\n' +
                  '            </next>\n' +
                  '          </block>\n' +
                  '        </next>\n' +
                  '      </block>\n' +
                  '    </statement>\n' +
                  '  </block>\n' +
                  '</xml>'
      },
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            easy: {turtle: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount", "peneither"]},
            medium: {turtle: ["moveamount", "movebackamount", "turnleftamount",  "turnrightamount", "peneither"]},
            hard: {turtle: ["moveamount", "movebackamount", "turnleftamount",  "turnrightamount", "peneither"]},
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables", "functions"],
            singleBlocks: {
                easy: ["controls_repeat_ext", "math_number", "math_arithmetic"],
                medium: ["controls_repeat_ext", "math_number", "math_arithmetic"],
                hard: ["controls_repeat_ext", "math_number", "math_arithmetic"],
            }
         }
      },
      overlayFileName: "sand.png",
      turtleStepSize: 0.18,
      coords : { x: 110, y: 170},
      maxInstructions: {easy: 0, medium: 0, hard: 0},
      blocklyColourTheme: "bwinf",
      checkEndEveryTurn: false,
      checkEndCondition: function(context, lastTurn) {
         if (lastTurn) {
            var userImage = context.turtle.invisibleTurtle.drawingContext.getImageData(0, 0, 300, 300);
            var solutionImage = context.turtle.invisibleSolutionTurtle.drawingContext.getImageData(0, 0, 300, 300);
            var len = Math.min(userImage.data.length, solutionImage.data.length);
            var delta = 0;
            var fill = 0;
            var empty = 0;
            // Pixels are in RGBA format.  Only check the Alpha bytes.
            for (var i = 3; i < len; i += 4) {
               // Check the Alpha byte.
               if (Math.abs(userImage.data[i] - solutionImage.data[i]) > 127) {
                  delta++;
               }
               if (solutionImage.data[i] > 127)
                  fill++;
               else
                  empty++;
            }
            
            if (delta < Math.min(fill,empty) * 0.1) {
               context.success = true;
               throw(window.languageStrings.messages.paintingCorrect);
            }
            else {
               context.success = false;
               throw(window.languageStrings.messages.paintingWrong);
            }
         }
      },
      computeGrade: function(context, message) {
         var rate = 0;
         if (context.success) {
            rate = 1;
            if (context.nbMoves > 100) {
               rate /= 2;
               message += strings.moreThan100Moves;
            }
         }
         return {
            successRate: rate,
            message: message
         };
      }
   };

   subTask.data = {
      easy: [{
          drawSolution : function(turtle) {
              turtle.turn(-30);
              turtle.move(60);
              turtle.turn(-120);
              turtle.move(60);
              turtle.turn(-120);
              turtle.stop_painting();
              turtle.move(15);
              turtle.turn(-60);
              turtle.start_painting();
              turtle.move(30);
              turtle.turn(120);
              turtle.move(30);

          },
         }],
         medium: [{
             drawSolution : function(turtle) {
                turtle.turn(-30);
                turtle.move(60);
                turtle.turn(-120);
                turtle.move(60);
                turtle.turn(-120);
                turtle.stop_painting();
                turtle.move(15);
                turtle.turn(-60);
                turtle.start_painting();
                turtle.move(30);
                turtle.turn(120);
                turtle.move(30);
                turtle.turn(60);
                turtle.move(60);
                turtle.turn(120);
                turtle.move(60);
                turtle.turn(120);
                turtle.stop_painting();
                turtle.move(15);
                turtle.turn(60);
                turtle.start_painting();
                turtle.move(30);
                turtle.turn(-120);
                turtle.move(30);
                },
         }],
         hard: [{
             drawSolution : function(turtle) {
               for (var i = 0; i < 4; i++) {
                   turtle.turn(-30);
                   turtle.move(60);
                   turtle.turn(-120);
                   turtle.move(60);
                   turtle.turn(-120);
                   turtle.stop_painting();
                   turtle.move(15);
                   turtle.turn(-60);
                   turtle.start_painting();
                   turtle.move(30);
                   turtle.turn(120);
                   turtle.move(30);
                   turtle.turn(60);
                   turtle.move(60);
                   turtle.turn(120);
                   turtle.move(60);
                   turtle.turn(120);
                   turtle.stop_painting();
                   turtle.move(15);
                   turtle.turn(60);
                   turtle.start_painting();
                   turtle.move(30);
                   turtle.turn(-120);
                   turtle.move(30);
                   turtle.stop_painting();
                   turtle.turn(-120);
                   turtle.move(45);
                   turtle.turn(90);
                   turtle.start_painting();
               }
                },
         }],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
