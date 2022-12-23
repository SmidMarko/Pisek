function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
       startingExample: {
          blockly: '<xml id="workspace" style="display: none">\n' +
              '  <block type="procedures_defnoreturn" id="10" x="10" y="10">\n' +
              '    <mutation>\n' +
              '      <arg name="t"></arg>\n' +
              '    </mutation>\n' +
              '    <field name="NAME">Izpisi</field>\n' +
              '    <comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment>\n' +
              '    <statement name="STACK">\n' +
              '          <block type="variables_set" id="14">\n' +
              '            <field name="VAR">naj</field>\n' +
              '            <value name="VALUE">\n' +
              '              <block type="math_number" id="15">\n' +
              '                <field name="NUM">0</field>\n' +
              '              </block>\n' +
              '            </value>\n' +
              '            <next>\n' +
              '              <block type="controls_forEach" id="16">\n' +
              '                <field name="VAR">s</field>\n' +
              '                <value name="LIST">\n' +
              '                  <block type="variables_get" id="17">\n' +
              '                    <field name="VAR">t</field>\n' +
              '                  </block>\n' +
              '                </value>\n' +
              '                <statement name="DO">\n' +
              '                  <block type="variables_set" id="18">\n' +
              '                    <field name="VAR">dolzina</field>\n' +
              '                    <value name="VALUE">\n' +
              '                      <block type="text_length" id="19">\n' +
              '                        <value name="VALUE">\n' +
              '                          <shadow type="text" id="20">\n' +
              '                            <field name="TEXT">abc</field>\n' +
              '                          </shadow>\n' +
              '                          <block type="variables_get" id="21">\n' +
              '                            <field name="VAR">s</field>\n' +
              '                          </block>\n' +
              '                        </value>\n' +
              '                      </block>\n' +
              '                    </value>\n' +
              '                    <next>\n' +
              '                      <block type="controls_if" id="22">\n' +
              '                        <value name="IF0">\n' +
              '                          <block type="logic_compare" id="23">\n' +
              '                            <field name="OP">LT</field>\n' +
              '                            <value name="A">\n' +
              '                              <block type="variables_get" id="24">\n' +
              '                                <field name="VAR">dolzina</field>\n' +
              '                              </block>\n' +
              '                            </value>\n' +
              '                            <value name="B">\n' +
              '                              <block type="variables_get" id="25">\n' +
              '                                <field name="VAR">naj</field>\n' +
              '                              </block>\n' +
              '                            </value>\n' +
              '                          </block>\n' +
              '                        </value>\n' +
              '                        <statement name="DO0">\n' +
              '                          <block type="variables_set" id="26">\n' +
              '                            <field name="VAR">dolzina</field>\n' +
              '                            <value name="VALUE">\n' +
              '                              <block type="variables_get" id="27">\n' +
              '                                <field name="VAR">naj</field>\n' +
              '                              </block>\n' +
              '                            </value>\n' +
              '                          </block>\n' +
              '                        </statement>\n' +
              '                      </block>\n' +
              '                    </next>\n' +
              '                  </block>\n' +
              '                </statement>\n' +
              '                <next>\n' +
              '                      <block type="controls_forEach" id="31">\n' +
              '                        <field name="VAR">s</field>\n' +
              '                        <value name="LIST">\n' +
              '                          <block type="variables_get" id="32">\n' +
              '                            <field name="VAR">t</field>\n' +
              '                          </block>\n' +
              '                        </value>\n' +
              '                        <statement name="DO">\n' +
              '                          <block type="print" id="33">\n' +
              '                            <value name="PARAM_0">\n' +
              '                              <shadow type="text" id="34">\n' +
              '                                <field name="TEXT">abc</field>\n' +
              '                              </shadow>\n' +
              '                            </value>\n' +
              '                            <next>\n' +
              '                              <block type="print" id="45">\n' +
              '                                <value name="PARAM_0">\n' +
              '                                  <shadow type="text" id="46">\n' +
              '                                    <field name="TEXT">abc</field>\n' +
              '                                  </shadow>\n' +
              '                                  <block type="variables_get" id="47">\n' +
              '                                    <field name="VAR">t</field>\n' +
              '                                  </block>\n' +
              '                                </value>\n' +
              '                              </block>\n' +
              '                            </next>\n' +
              '                          </block>\n' +
              '                        </statement>\n' +
              '                      </block>\n' +
              '                </next>\n' +
              '              </block>\n' +
              '            </next>\n' +
              '          </block>\n' +
              '    </statement>\n' +
              '  </block>\n' +
              '  <block type="procedures_callnoreturn" id="48" inline="true" x="10" y="385">\n' +
              '    <mutation name="Izpisi">\n' +
              '      <arg name="t"></arg>\n' +
              '    </mutation>\n' +
              '    <value name="ARG0">\n' +
              '      <block type="lists_create_with" id="49" inline="true">\n' +
              '        <mutation items="4"></mutation>\n' +
              '        <value name="ADD0">\n' +
              '          <block type="read" id="50">\n' +
              '          </block>\n' +
              '        </value>\n' +
              '        <value name="ADD1">\n' +
              '          <block type="read" id="=51">\n' +
              '          </block>\n' +
              '        </value>\n' +
              '        <value name="ADD2">\n' +
              '          <block type="read" id="52">\n' +
              '          </block>\n' +
              '        </value>\n' +
              '        <value name="ADD3">\n' +
              '          <block type="read" id="53">\n' +
              '          </block>\n' +
              '        </value>\n' +
              '      </block>\n' +
              '    </value>\n' +
              '  </block>\n' +
              '</xml>'
       },
       example: {
         blockly: '<xml id="solution" style="display: none">\n' +
             '  <block type="procedures_defnoreturn" id="10" x="10" y="10">\n' +
             '    <mutation>\n' +
             '      <arg name="t"></arg>\n' +
             '    </mutation>\n' +
             '    <field name="NAME">Izpisi2</field>\n' +
             '    <comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment>\n' +
             '    <statement name="STACK">\n' +
             '          <block type="variables_set" id="14">\n' +
             '            <field name="VAR">naj</field>\n' +
             '            <value name="VALUE">\n' +
             '              <block type="math_number" id="15">\n' +
             '                <field name="NUM">0</field>\n' +
             '              </block>\n' +
             '            </value>\n' +
             '            <next>\n' +
             '              <block type="controls_forEach" id="16">\n' +
             '                <field name="VAR">s</field>\n' +
             '                <value name="LIST">\n' +
             '                  <block type="variables_get" id="17">\n' +
             '                    <field name="VAR">t</field>\n' +
             '                  </block>\n' +
             '                </value>\n' +
             '                <statement name="DO">\n' +
             '                  <block type="variables_set" id="18">\n' +
             '                    <field name="VAR">dolzina</field>\n' +
             '                    <value name="VALUE">\n' +
             '                      <block type="text_length" id="19">\n' +
             '                        <value name="VALUE">\n' +
             '                          <shadow type="text" id="20">\n' +
             '                            <field name="TEXT">abc</field>\n' +
             '                          </shadow>\n' +
             '                          <block type="variables_get" id="21">\n' +
             '                            <field name="VAR">s</field>\n' +
             '                          </block>\n' +
             '                        </value>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                    <next>\n' +
             '                      <block type="controls_if" id="22">\n' +
             '                        <value name="IF0">\n' +
             '                          <block type="logic_compare" id="23">\n' +
             '                            <field name="OP">GT</field>\n' +
             '                            <value name="A">\n' +
             '                              <block type="variables_get" id="24">\n' +
             '                                <field name="VAR">dolzina</field>\n' +
             '                              </block>\n' +
             '                            </value>\n' +
             '                            <value name="B">\n' +
             '                              <block type="variables_get" id="25">\n' +
             '                                <field name="VAR">naj</field>\n' +
             '                              </block>\n' +
             '                            </value>\n' +
             '                          </block>\n' +
             '                        </value>\n' +
             '                        <statement name="DO0">\n' +
             '                          <block type="variables_set" id="26">\n' +
             '                            <field name="VAR">naj</field>\n' +
             '                            <value name="VALUE">\n' +
             '                              <block type="variables_get" id="27">\n' +
             '                                <field name="VAR">dolzina</field>\n' +
             '                              </block>\n' +
             '                            </value>\n' +
             '                          </block>\n' +
             '                        </statement>\n' +
             '                      </block>\n' +
             '                    </next>\n' +
             '                  </block>\n' +
             '                </statement>\n' +
             '                <next>\n' +
             '                      <block type="controls_forEach" id="31">\n' +
             '                        <field name="VAR">s</field>\n' +
             '                        <value name="LIST">\n' +
             '                          <block type="variables_get" id="32">\n' +
             '                            <field name="VAR">t</field>\n' +
             '                          </block>\n' +
             '                        </value>\n' +
             '                        <statement name="DO">\n' +
             '                          <block type="print" id="33">\n' +
             '                            <value name="PARAM_0">\n' +
             '                              <shadow type="text" id="34">\n' +
             '                                <field name="TEXT">abc</field>\n' +
             '                              </shadow>\n' +
             '                              <block type="text_join" id="35">\n' +
             '                                <mutation items="2"></mutation>\n' +
             '                                <value name="ADD0">\n' +
             '                                </value>\n' +
             '                                <value name="ADD1">\n' +
             '                                  <block type="variables_get" id="46">\n' +
             '                                    <field name="VAR">s</field>\n' +
             '                                  </block>\n' +
             '                                </value>\n' +
             '                              </block>\n' +
             '                            </value>\n' +
             '                          </block>\n' +
             '                        </statement>\n' +
             '                  </block>\n' +
             '                </next>\n' +
             '              </block>\n' +
             '            </next>\n' +
             '          </block>\n' +
             '    </statement>\n' +
             '  </block>\n' +
             '  <block type="procedures_callnoreturn" id="47" inline="true" x="10" y="385">\n' +
             '    <mutation name="Izpisi2">\n' +
             '      <arg name="t"></arg>\n' +
             '    </mutation>\n' +
             '    <value name="ARG0">\n' +
             '      <block type="lists_create_with" id="48" inline="true">\n' +
             '        <mutation items="4"></mutation>\n' +
             '        <value name="ADD0">\n' +
             '          <block type="read" id="49">\n' +
             '          </block>\n' +
             '        </value>\n' +
             '        <value name="ADD1">\n' +
             '          <block type="read" id="50">\n' +
             '          </block>\n' +
             '        </value>\n' +
             '        <value name="ADD2">\n' +
             '          <block type="read" id="51">\n' +
             '          </block>\n' +
             '        </value>\n' +
             '        <value name="ADD3">\n' +
             '          <block type="read" id="52">\n' +
             '          </block>\n' +
             '        </value>\n' +
             '      </block>\n' +
             '    </value>\n' +
             '  </block>\n' +
             '</xml>'
      },
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
             printer: ["print", "read"],
         },
          // Block math_floor_divison not avalible
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables", "functions"],
            singleBlocks: { easy : ["text", "text_join", "text_append", "text_length", "text_getSubstring", "text_charAt", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"],
            },
         }
      },
      maxInstructions: {easy: 0},
      checkEndEveryTurn: false,
      blocklyColourTheme: "bwinf",
      checkEndCondition: function(context, lastTurn) {
          if (!lastTurn) return;

          // throws, if something is wrong …
          context.checkOutputHelper();

          // Seems like everything is okay: Right number of lines and all lines match …
          context.success = true;
         throw(window.languageStrings.messages.outputCorrect);
      },
      computeGrade: function(context, message) {
         var rate = 0;
         if (context.success) {
            rate = 1;
            if (context.nbMoves > 100) {
               rate /= 2;
               message += languageStrings.messages.moreThan100Moves;
            }
         }
         return {
            successRate: rate,
            message: message
         };
      }
   };

   subTask.data = {
       easy: [
         {
            input: "ena\ntri\npet\nsedem",
            output: "  ena\n  tri\n  pet\nsedem",
         },
         {
            input: "stopetdeset\npetindvajset\ntrinajst\npetdeset",
            output: " stopetdeset\npetindvajset\n    trinajst\n    petdeset",
         },
         {
            input: "petnajst\nstostiriinstirideset\npetstotrinajst\npet",
            output: "            petnajst\nstostiriinstirideset\n      petstotrinajst\n                 pet"
         }
       ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
