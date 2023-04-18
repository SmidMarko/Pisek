function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      example: {
          easy: {
              blockly: '<xml id="workspace3" style="display: none">\n' +
                   '  <block type="procedures_defreturn" id="10" x="10" y="10">\n' +
                   '    <mutation>\n' +
                   '      <arg name="a"></arg>\n' +
                   '    </mutation>\n' +
                   '    <field name="NAME">PrviDvakrat</field>\n' +
                   '    <comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment>\n' +
                   '    <statement name="STACK">\n' +
                   '      <block type="variables_set" id="11">\n' +
                   '        <field name="VAR">n</field>\n' +
                   '        <value name="VALUE">\n' +
                   '          <block type="lists_length" id="12">\n' +
                   '            <value name="VALUE">\n' +
                   '              <block type="variables_get" id="13">\n' +
                   '                <field name="VAR">a</field>\n' +
                   '              </block>\n' +
                   '            </value>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <next>\n' +
                   '          <block type="variables_set" id="14">\n' +
                   '            <field name="VAR">prejsnji</field>\n' +
                   '            <value name="VALUE">\n' +
                   '              <block type="math_number" id="15">\n' +
                   '                <field name="NUM">0</field>\n' +
                   '              </block>\n' +
                   '            </value>\n' +
                   '            <next>\n' +
                   '              <block type="controls_for" id="16">\n' +
                   '                <field name="VAR">i</field>\n' +
                   '                <value name="FROM">\n' +
                   '                  <shadow type="math_number" id="17">\n' +
                   '                    <field name="NUM">1</field>\n' +
                   '                  </shadow>\n' +
                   '                  <block type="math_number" id="18">\n' +
                   '                    <field name="NUM">0</field>\n' +
                   '                  </block>\n' +
                   '                </value>\n' +
                   '                <value name="TO">\n' +
                   '                  <shadow type="math_number" id="19">\n' +
                   '                    <field name="NUM">10</field>\n' +
                   '                  </shadow>\n' +
                   '                  <block type="variables_get" id="20">\n' +
                   '                    <field name="VAR">n</field>\n' +
                   '                  </block>\n' +
                   '                </value>\n' +
                   '                <value name="BY">\n' +
                   '                  <shadow type="math_number" id="21">\n' +
                   '                    <field name="NUM">1</field>\n' +
                   '                  </shadow>\n' +
                   '                </value>\n' +
                   '                <statement name="DO">\n' +
                   '                  <block type="procedures_ifreturn" id="22">\n' +
                   '                    <mutation value="1"></mutation>\n' +
                   '                    <value name="CONDITION">\n' +
                   '                      <block type="logic_compare" id="23">\n' +
                   '                        <field name="OP">EQ</field>\n' +
                   '                        <value name="A">\n' +
                   '                          <block type="lists_getIndex" id="24" collapsed="true">\n' +
                   '                            <mutation statement="false" at="true"></mutation>\n' +
                   '                            <field name="MODE">GET</field>\n' +
                   '                            <field name="WHERE">FROM_START</field>\n' +
                   '                            <value name="VALUE">\n' +
                   '                              <block type="variables_get" id="25">\n' +
                   '                                <field name="VAR">a</field>\n' +
                   '                              </block>\n' +
                   '                            </value>\n' +
                   '                            <value name="AT">\n' +
                   '                              <block type="variables_get" id="26">\n' +
                   '                                <field name="VAR">i</field>\n' +
                   '                              </block>\n' +
                   '                            </value>\n' +
                   '                          </block>\n' +
                   '                        </value>\n' +
                   '                        <value name="B">\n' +
                   '                          <block type="variables_get" id="27">\n' +
                   '                            <field name="VAR">prejsnji</field>\n' +
                   '                          </block>\n' +
                   '                        </value>\n' +
                   '                      </block>\n' +
                   '                    </value>\n' +
                   '                    <value name="VALUE">\n' +
                   '                      <block type="logic_null" id="28"></block>\n' +
                   '                    </value>\n' +
                   '                    <next>\n' +
                   '                      <block type="variables_set" id="29">\n' +
                   '                        <field name="VAR">prejsnji</field>\n' +
                   '                        <value name="VALUE">\n' +
                   '                          <block type="lists_getIndex" id="30" collapsed="true">\n' +
                   '                            <mutation statement="false" at="true"></mutation>\n' +
                   '                            <field name="MODE">GET</field>\n' +
                   '                            <field name="WHERE">FROM_START</field>\n' +
                   '                            <value name="VALUE">\n' +
                   '                              <block type="variables_get" id="31">\n' +
                   '                                <field name="VAR">a</field>\n' +
                   '                              </block>\n' +
                   '                            </value>\n' +
                   '                            <value name="AT">\n' +
                   '                              <block type="variables_get" id="32">\n' +
                   '                                <field name="VAR">i</field>\n' +
                   '                              </block>\n' +
                   '                            </value>\n' +
                   '                          </block>\n' +
                   '                        </value>\n' +
                   '                      </block>\n' +
                   '                    </next>\n' +
                   '                  </block>\n' +
                   '                </statement>\n' +
                   '              </block>\n' +
                   '            </next>\n' +
                   '          </block>\n' +
                   '        </next>\n' +
                   '      </block>\n' +
                   '    </statement>\n' +
                   '    <value name="RETURN">\n' +
                   '      <block type="math_number" id="33">\n' +
                   '        <field name="NUM">0</field>\n' +
                   '      </block>\n' +
                   '    </value>\n' +
                   '  </block>\n' +
                   '  <block type="variables_set" id="34" x="10" y="260">\n' +
                   '    <field name="VAR">t</field>\n' +
                   '    <value name="VALUE">\n' +
                   '      <block type="lists_create_with" id="35" inline="true">\n' +
                   '        <mutation items="8"></mutation>\n' +
                   '        <value name="ADD0">\n' +
                   '          <block type="math_number" id="36">\n' +
                   '            <field name="NUM">3</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD1">\n' +
                   '          <block type="math_number" id="37">\n' +
                   '            <field name="NUM">8</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD2">\n' +
                   '          <block type="math_number" id="38">\n' +
                   '            <field name="NUM">8</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD3">\n' +
                   '          <block type="math_number" id="39">\n' +
                   '            <field name="NUM">8</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD4">\n' +
                   '          <block type="math_number" id="40">\n' +
                   '            <field name="NUM">5</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD5">\n' +
                   '          <block type="math_number" id="41">\n' +
                   '            <field name="NUM">7</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD6">\n' +
                   '          <block type="math_number" id="42">\n' +
                   '            <field name="NUM">7</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD7">\n' +
                   '          <block type="math_number" id="43">\n' +
                   '            <field name="NUM">9</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '      </block>\n' +
                   '    </value>\n' +
                   '    <next>\n' +
                   '      <block type="text_print" id="44">\n' +
                   '        <value name="TEXT">\n' +
                   '          <shadow type="text" id="45">\n' +
                   '            <field name="TEXT">abc</field>\n' +
                   '          </shadow>\n' +
                   '          <block type="procedures_callreturn" id="46" inline="true">\n' +
                   '            <mutation name="PrviDvakrat">\n' +
                   '              <arg name="a"></arg>\n' +
                   '            </mutation>\n' +
                   '            <value name="ARG0">\n' +
                   '              <block type="variables_get" id="47">\n' +
                   '                <field name="VAR">t</field>\n' +
                   '              </block>\n' +
                   '            </value>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '      </block>\n' +
                   '    </next>\n' +
                   '  </block>\n' +
                   '</xml>'
          }
      },
      startingExample: {
           easy: {
               blockly: '<xml id="workspace3" style="display: none">\n' +
                   '  <block type="procedures_defreturn" id="10" x="10" y="10">\n' +
                   '    <mutation>\n' +
                   '      <arg name="a"></arg>\n' +
                   '    </mutation>\n' +
                   '    <field name="NAME">PrviDvakrat</field>\n' +
                   '    <comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment>\n' +
                   '    <statement name="STACK">\n' +
                   '      <block type="variables_set" id="11">\n' +
                   '        <field name="VAR">n</field>\n' +
                   '        <value name="VALUE">\n' +
                   '          <block type="lists_length" id="12">\n' +
                   '            <value name="VALUE">\n' +
                   '              <block type="variables_get" id="13">\n' +
                   '                <field name="VAR">a</field>\n' +
                   '              </block>\n' +
                   '            </value>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <next>\n' +
                   '          <block type="variables_set" id="14">\n' +
                   '            <field name="VAR">prejsnji</field>\n' +
                   '            <value name="VALUE">\n' +
                   '              <block type="math_number" id="15">\n' +
                   '                <field name="NUM">0</field>\n' +
                   '              </block>\n' +
                   '            </value>\n' +
                   '            <next>\n' +
                   '              <block type="controls_for" id="16">\n' +
                   '                <field name="VAR">i</field>\n' +
                   '                <value name="FROM">\n' +
                   '                  <shadow type="math_number" id="17">\n' +
                   '                    <field name="NUM">1</field>\n' +
                   '                  </shadow>\n' +
                   '                  <block type="math_number" id="18">\n' +
                   '                    <field name="NUM">0</field>\n' +
                   '                  </block>\n' +
                   '                </value>\n' +
                   '                <value name="TO">\n' +
                   '                  <shadow type="math_number" id="19">\n' +
                   '                    <field name="NUM">10</field>\n' +
                   '                  </shadow>\n' +
                   '                  <block type="variables_get" id="20">\n' +
                   '                    <field name="VAR">n</field>\n' +
                   '                  </block>\n' +
                   '                </value>\n' +
                   '                <value name="BY">\n' +
                   '                  <shadow type="math_number" id="21">\n' +
                   '                    <field name="NUM">1</field>\n' +
                   '                  </shadow>\n' +
                   '                </value>\n' +
                   '                <statement name="DO">\n' +
                   '                  <block type="procedures_ifreturn" id="22">\n' +
                   '                    <mutation value="1"></mutation>\n' +
                   '                    <value name="CONDITION">\n' +
                   '                      <block type="logic_compare" id="23">\n' +
                   '                        <field name="OP">EQ</field>\n' +
                   '                        <value name="A">\n' +
                   '                          <block type="lists_getIndex" id="24" collapsed="true">\n' +
                   '                            <mutation statement="false" at="true"></mutation>\n' +
                   '                            <field name="MODE">GET</field>\n' +
                   '                            <field name="WHERE">FROM_START</field>\n' +
                   '                            <value name="VALUE">\n' +
                   '                              <block type="variables_get" id="25">\n' +
                   '                                <field name="VAR">a</field>\n' +
                   '                              </block>\n' +
                   '                            </value>\n' +
                   '                            <value name="AT">\n' +
                   '                              <block type="variables_get" id="26">\n' +
                   '                                <field name="VAR">i</field>\n' +
                   '                              </block>\n' +
                   '                            </value>\n' +
                   '                          </block>\n' +
                   '                        </value>\n' +
                   '                        <value name="B">\n' +
                   '                          <block type="variables_get" id="27">\n' +
                   '                            <field name="VAR">prejsnji</field>\n' +
                   '                          </block>\n' +
                   '                        </value>\n' +
                   '                      </block>\n' +
                   '                    </value>\n' +
                   '                    <value name="VALUE">\n' +
                   '                      <block type="logic_null" id="28"></block>\n' +
                   '                    </value>\n' +
                   '                    <next>\n' +
                   '                      <block type="variables_set" id="29">\n' +
                   '                        <field name="VAR">prejsnji</field>\n' +
                   '                        <value name="VALUE">\n' +
                   '                          <block type="lists_getIndex" id="30" collapsed="true">\n' +
                   '                            <mutation statement="false" at="true"></mutation>\n' +
                   '                            <field name="MODE">GET</field>\n' +
                   '                            <field name="WHERE">FROM_START</field>\n' +
                   '                            <value name="VALUE">\n' +
                   '                              <block type="variables_get" id="31">\n' +
                   '                                <field name="VAR">a</field>\n' +
                   '                              </block>\n' +
                   '                            </value>\n' +
                   '                            <value name="AT">\n' +
                   '                              <block type="variables_get" id="32">\n' +
                   '                                <field name="VAR">i</field>\n' +
                   '                              </block>\n' +
                   '                            </value>\n' +
                   '                          </block>\n' +
                   '                        </value>\n' +
                   '                      </block>\n' +
                   '                    </next>\n' +
                   '                  </block>\n' +
                   '                </statement>\n' +
                   '              </block>\n' +
                   '            </next>\n' +
                   '          </block>\n' +
                   '        </next>\n' +
                   '      </block>\n' +
                   '    </statement>\n' +
                   '    <value name="RETURN">\n' +
                   '      <block type="math_number" id="33">\n' +
                   '        <field name="NUM">0</field>\n' +
                   '      </block>\n' +
                   '    </value>\n' +
                   '  </block>\n' +
                   '  <block type="variables_set" id="34" x="10" y="260">\n' +
                   '    <field name="VAR">t</field>\n' +
                   '    <value name="VALUE">\n' +
                   '      <block type="lists_create_with" id="35" inline="true">\n' +
                   '        <mutation items="8"></mutation>\n' +
                   '        <value name="ADD0">\n' +
                   '          <block type="math_number" id="36">\n' +
                   '            <field name="NUM">3</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD1">\n' +
                   '          <block type="math_number" id="37">\n' +
                   '            <field name="NUM">8</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD2">\n' +
                   '          <block type="math_number" id="38">\n' +
                   '            <field name="NUM">8</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD3">\n' +
                   '          <block type="math_number" id="39">\n' +
                   '            <field name="NUM">8</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD4">\n' +
                   '          <block type="math_number" id="40">\n' +
                   '            <field name="NUM">5</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD5">\n' +
                   '          <block type="math_number" id="41">\n' +
                   '            <field name="NUM">7</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD6">\n' +
                   '          <block type="math_number" id="42">\n' +
                   '            <field name="NUM">7</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '        <value name="ADD7">\n' +
                   '          <block type="math_number" id="43">\n' +
                   '            <field name="NUM">9</field>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
                   '      </block>\n' +
                   '    </value>\n' +
                   '    <next>\n' +
                   '      <block type="text_print" id="44">\n' +
                   '        <value name="TEXT">\n' +
                   '          <shadow type="text" id="45">\n' +
                   '            <field name="TEXT">abc</field>\n' +
                   '          </shadow>\n' +
                   '          <block type="procedures_callreturn" id="46" inline="true">\n' +
                   '            <mutation name="PrviDvakrat">\n' +
                   '              <arg name="a"></arg>\n' +
                   '            </mutation>\n' +
                   '            <value name="ARG0">\n' +
                   '              <block type="variables_get" id="47">\n' +
                   '                <field name="VAR">t</field>\n' +
                   '              </block>\n' +
                   '            </value>\n' +
                   '          </block>\n' +
                   '        </value>\n' +
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
            wholeCategories: ["variables"],
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
              input: "",
              output: "17\n",
          },
       ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);