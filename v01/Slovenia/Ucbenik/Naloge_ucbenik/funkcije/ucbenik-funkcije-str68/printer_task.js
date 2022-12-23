function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      startingExample: {
          easy: {
              blockly: '<xml id="workspace2" style="display: none">\n' +
                  '  <block type="procedures_defnoreturn" id="10" x="10" y="10">\n' +
                  '    <mutation>\n' +
                  '      <arg name="leto"></arg>\n' +
                  '    </mutation>\n' +
                  '    <field name="NAME">ObdelajLeto</field>\n' +
                  '    <comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment>\n' +
                  '    <statement name="STACK">\n' +
                  '      <block type="controls_if" id="11">\n' +
                  '        <value name="IF0">\n' +
                  '          <block type="logic_compare" id="12">\n' +
                  '            <field name="OP">EQ</field>\n' +
                  '            <value name="A">\n' +
                  '              <block type="math_modulo" id="13" collapsed="true">\n' +
                  '                <value name="DIVIDEND">\n' +
                  '                  <shadow type="math_number" id="14">\n' +
                  '                    <field name="NUM">64</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="variables_get" id="15">\n' +
                  '                    <field name="VAR">leto</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '                <value name="DIVISOR">\n' +
                  '                  <shadow type="math_number" id="16">\n' +
                  '                    <field name="NUM">10</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="math_number" id="17">\n' +
                  '                    <field name="NUM">13</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <value name="B">\n' +
                  '              <block type="math_number" id="18">\n' +
                  '                <field name="NUM">0</field>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '        <statement name="DO0">\n' +
                  '          <block type="variables_set" id="19">\n' +
                  '            <field name="VAR">st</field>\n' +
                  '            <value name="VALUE">\n' +
                  '              <block type="math_arithmetic" id="20" collapsed="true">\n' +
                  '                <field name="OP">ADD</field>\n' +
                  '                <value name="A">\n' +
                  '                  <shadow type="math_number" id="21">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="variables_get" id="22">\n' +
                  '                    <field name="VAR">stevec</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '                <value name="B">\n' +
                  '                  <shadow type="math_number" id="23">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="math_number" id="24">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '          </block>\n' +
                  '        </statement>\n' +
                  '      </block>\n' +
                  '    </statement>\n' +
                  '  </block>\n' +
                  '  <block type="variables_set" id="25" x="10" y="140">\n' +
                  '    <field name="VAR">st</field>\n' +
                  '    <value name="VALUE">\n' +
                  '      <block type="readInteger" id="26">\n' +
                  '      </block>\n' +
                  '    </value>\n' +
                  '    <next>\n' +
                  '      <block type="variables_set" id="29">\n' +
                  '        <field name="VAR">stevec</field>\n' +
                  '        <value name="VALUE">\n' +
                  '          <block type="math_number" id="30">\n' +
                  '            <field name="NUM">0</field>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '        <next>\n' +
                  '          <block type="controls_for" id="31">\n' +
                  '            <field name="VAR">leto</field>\n' +
                  '            <value name="FROM">\n' +
                  '              <shadow type="math_number" id="32">\n' +
                  '                <field name="NUM">1</field>\n' +
                  '              </shadow>\n' +
                  '              <block type="math_arithmetic" id="33" collapsed="true">\n' +
                  '                <field name="OP">MINUS</field>\n' +
                  '                <value name="A">\n' +
                  '                  <shadow type="math_number" id="34">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="math_arithmetic" id="35">\n' +
                  '                    <field name="OP">MULTIPLY</field>\n' +
                  '                    <value name="A">\n' +
                  '                      <shadow type="math_number" id="36">\n' +
                  '                        <field name="NUM">1</field>\n' +
                  '                      </shadow>\n' +
                  '                      <block type="math_number" id="37">\n' +
                  '                        <field name="NUM">100</field>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <value name="B">\n' +
                  '                      <shadow type="math_number" id="38">\n' +
                  '                        <field name="NUM">1</field>\n' +
                  '                      </shadow>\n' +
                  '                      <block type="variables_get" id="39">\n' +
                  '                        <field name="VAR">st</field>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '                <value name="B">\n' +
                  '                  <shadow type="math_number" id="40">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="math_number" id="41">\n' +
                  '                    <field name="NUM">99</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <value name="TO">\n' +
                  '              <shadow type="math_number" id="42">\n' +
                  '                <field name="NUM">10</field>\n' +
                  '              </shadow>\n' +
                  '              <block type="math_arithmetic" id="43" collapsed="true">\n' +
                  '                <field name="OP">ADD</field>\n' +
                  '                <value name="A">\n' +
                  '                  <shadow type="math_number" id="44">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="math_arithmetic" id="45">\n' +
                  '                    <field name="OP">MULTIPLY</field>\n' +
                  '                    <value name="A">\n' +
                  '                      <shadow type="math_number" id="46">\n' +
                  '                        <field name="NUM">1</field>\n' +
                  '                      </shadow>\n' +
                  '                      <block type="math_number" id="47">\n' +
                  '                        <field name="NUM">100</field>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <value name="B">\n' +
                  '                      <shadow type="math_number" id="48">\n' +
                  '                        <field name="NUM">1</field>\n' +
                  '                      </shadow>\n' +
                  '                      <block type="variables_get" id="49">\n' +
                  '                        <field name="VAR">st</field>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '                <value name="B">\n' +
                  '                  <shadow type="math_number" id="50">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="math_number" id="51">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <value name="BY">\n' +
                  '              <shadow type="math_number" id="52">\n' +
                  '                <field name="NUM">1</field>\n' +
                  '              </shadow>\n' +
                  '            </value>\n' +
                  '            <statement name="DO">\n' +
                  '              <block type="procedures_callnoreturn" id="53" inline="true">\n' +
                  '                <mutation name="ObdelajLeto">\n' +
                  '                  <arg name="leto"></arg>\n' +
                  '                </mutation>\n' +
                  '                <value name="ARG0">\n' +
                  '                  <block type="variables_get" id="54">\n' +
                  '                    <field name="VAR">leto</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </statement>\n' +
                  '            <next>\n' +
                  '              <block type="print" id="55">\n' +
                  '                <value name="PARAM_0">\n' +
                  '                  <block type="variables_get" id="57">\n' +
                  '                    <field name="VAR">stevec</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
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
      example: {
          easy: {
              blockly: '<xml id="solution2" style="display: none">\n' +
                  '  <block type="procedures_defnoreturn" id="10" x="10" y="10">\n' +
                  '    <mutation>\n' +
                  '      <arg name="leto"></arg>\n' +
                  '    </mutation>\n' +
                  '    <field name="NAME">ObdelajLeto2</field>\n' +
                  '    <comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment>\n' +
                  '    <statement name="STACK">\n' +
                  '      <block type="controls_if" id="11">\n' +
                  '        <value name="IF0">\n' +
                  '          <block type="logic_compare" id="12">\n' +
                  '            <field name="OP">EQ</field>\n' +
                  '            <value name="A">\n' +
                  '              <block type="math_modulo" id="13" collapsed="true">\n' +
                  '                <value name="DIVIDEND">\n' +
                  '                  <shadow type="math_number" id="14">\n' +
                  '                    <field name="NUM">64</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="variables_get" id="15">\n' +
                  '                    <field name="VAR">leto</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '                <value name="DIVISOR">\n' +
                  '                  <shadow type="math_number" id="16">\n' +
                  '                    <field name="NUM">10</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="math_number" id="17">\n' +
                  '                    <field name="NUM">13</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <value name="B">\n' +
                  '              <block type="math_number" id="18">\n' +
                  '                <field name="NUM">0</field>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '        <statement name="DO0">\n' +
                  '          <block type="variables_set" id="19">\n' +
                  '            <field name="VAR">stevec</field>\n' +
                  '            <value name="VALUE">\n' +
                  '              <block type="math_arithmetic" id="20" collapsed="true">\n' +
                  '                <field name="OP">ADD</field>\n' +
                  '                <value name="A">\n' +
                  '                  <shadow type="math_number" id="21">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="variables_get" id="22">\n' +
                  '                    <field name="VAR">stevec</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '                <value name="B">\n' +
                  '                  <shadow type="math_number" id="23">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="math_number" id="24">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '          </block>\n' +
                  '        </statement>\n' +
                  '      </block>\n' +
                  '    </statement>\n' +
                  '  </block>\n' +
                  '  <block type="variables_set" id="25" x="10" y="140">\n' +
                  '    <field name="VAR">st</field>\n' +
                  '    <value name="VALUE">\n' +
                  '      <block type="readInteger" id="26">\n' +
                  '      </block>\n' +
                  '    </value>\n' +
                  '    <next>\n' +
                  '      <block type="variables_set" id="29">\n' +
                  '        <field name="VAR">stevec</field>\n' +
                  '        <value name="VALUE">\n' +
                  '          <block type="math_number" id="30">\n' +
                  '            <field name="NUM">0</field>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '        <next>\n' +
                  '          <block type="controls_for" id="31">\n' +
                  '            <field name="VAR">leto</field>\n' +
                  '            <value name="FROM">\n' +
                  '              <shadow type="math_number" id="32">\n' +
                  '                <field name="NUM">1</field>\n' +
                  '              </shadow>\n' +
                  '              <block type="math_arithmetic" id="33" collapsed="true">\n' +
                  '                <field name="OP">MINUS</field>\n' +
                  '                <value name="A">\n' +
                  '                  <shadow type="math_number" id="34">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="math_arithmetic" id="35">\n' +
                  '                    <field name="OP">MULTIPLY</field>\n' +
                  '                    <value name="A">\n' +
                  '                      <shadow type="math_number" id="36">\n' +
                  '                        <field name="NUM">1</field>\n' +
                  '                      </shadow>\n' +
                  '                      <block type="math_number" id="37">\n' +
                  '                        <field name="NUM">100</field>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <value name="B">\n' +
                  '                      <shadow type="math_number" id="38">\n' +
                  '                        <field name="NUM">1</field>\n' +
                  '                      </shadow>\n' +
                  '                      <block type="variables_get" id="39">\n' +
                  '                        <field name="VAR">st</field>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '                <value name="B">\n' +
                  '                  <shadow type="math_number" id="40">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="math_number" id="41">\n' +
                  '                    <field name="NUM">99</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <value name="TO">\n' +
                  '              <shadow type="math_number" id="42">\n' +
                  '                <field name="NUM">10</field>\n' +
                  '              </shadow>\n' +
                  '              <block type="math_arithmetic" id="43" collapsed="true">\n' +
                  '                <field name="OP">ADD</field>\n' +
                  '                <value name="A">\n' +
                  '                  <shadow type="math_number" id="44">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="math_arithmetic" id="45">\n' +
                  '                    <field name="OP">MULTIPLY</field>\n' +
                  '                    <value name="A">\n' +
                  '                      <shadow type="math_number" id="46">\n' +
                  '                        <field name="NUM">1</field>\n' +
                  '                      </shadow>\n' +
                  '                      <block type="math_number" id="47">\n' +
                  '                        <field name="NUM">100</field>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <value name="B">\n' +
                  '                      <shadow type="math_number" id="48">\n' +
                  '                        <field name="NUM">1</field>\n' +
                  '                      </shadow>\n' +
                  '                      <block type="variables_get" id="49">\n' +
                  '                        <field name="VAR">st</field>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '                <value name="B">\n' +
                  '                  <shadow type="math_number" id="50">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="math_number" id="51">\n' +
                  '                    <field name="NUM">1</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <value name="BY">\n' +
                  '              <shadow type="math_number" id="52">\n' +
                  '                <field name="NUM">1</field>\n' +
                  '              </shadow>\n' +
                  '            </value>\n' +
                  '            <statement name="DO">\n' +
                  '              <block type="procedures_callnoreturn" id="53" inline="true">\n' +
                  '                <mutation name="ObdelajLeto2">\n' +
                  '                  <arg name="leto"></arg>\n' +
                  '                </mutation>\n' +
                  '                <value name="ARG0">\n' +
                  '                  <block type="variables_get" id="54">\n' +
                  '                    <field name="VAR">leto</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </statement>\n' +
                  '            <next>\n' +
                  '              <block type="print" id="55">\n' +
                  '                <value name="PARAM_0">\n' +
                  '                  <block type="variables_get" id="57">\n' +
                  '                    <field name="VAR">stevec</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
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
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
             printer: ["print", "readInteger"],
         },
          // Block math_floor_divison not avalible
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables", "functions"],
            singleBlocks: { easy : ["logic_compare", "logic_operation", "logic_negate", "logic_boolean", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "lists_create_with_empty", "lists_create_with", "lists_length", "lists_isEmpty", "lists_getIndex", "lists_setIndex",  "lists_getSublist",  "lists_sort", "text", "text_join"],
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
              input: "9\n",
              output: "8\n",
          },
          {
              input: "17\n",
              output: "7\n",
          },
          {
              input: "21\n",
              output: "8\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
