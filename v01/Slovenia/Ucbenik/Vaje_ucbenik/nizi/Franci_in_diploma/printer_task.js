function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      startingExample: {
          easy: {
              blockly: '<xml id="workspace" style="display: none">\n' +
                  '  <block type="procedures_defreturn" id="10" x="10" y="10">\n' +
                  '    <mutation>\n' +
                  '      <arg name="s"></arg>\n' +
                  '    </mutation>\n' +
                  '    <field name="NAME">PobrisiOklepaje</field>\n' +
                  '    <comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment>\n' +
                  '    <statement name="STACK">\n' +
                  '      <block type="variables_set" id="11">\n' +
                  '        <field name="VAR">vOklepaju</field>\n' +
                  '        <value name="VALUE">\n' +
                  '          <block type="logic_boolean" id="12">\n' +
                  '            <field name="BOOL">FALSE</field>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '        <next>\n' +
                  '          <block type="variables_set" id="13">\n' +
                  '            <field name="VAR">t</field>\n' +
                  '            <value name="VALUE">\n' +
                  '              <block type="text" id="14">\n' +
                  '                <field name="TEXT"></field>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <next>\n' +
                  '              <block type="controls_forEach" id="15">\n' +
                  '                <field name="VAR">c</field>\n' +
                  '                <value name="LIST">\n' +
                  '                  <block type="variables_get" id="16">\n' +
                  '                    <field name="VAR">s</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '                <statement name="DO">\n' +
                  '                  <block type="controls_if" id="17">\n' +
                  '                    <mutation elseif="2"></mutation>\n' +
                  '                    <value name="IF0">\n' +
                  '                      <block type="logic_compare" id="18">\n' +
                  '                        <field name="OP">EQ</field>\n' +
                  '                        <value name="A">\n' +
                  '                          <block type="variables_get" id="19">\n' +
                  '                            <field name="VAR">c</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                        <value name="B">\n' +
                  '                          <block type="text" id="20">\n' +
                  '                            <field name="TEXT">(</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <statement name="DO0">\n' +
                  '                      <block type="variables_set" id="21">\n' +
                  '                        <field name="VAR">vOklepaju</field>\n' +
                  '                        <value name="VALUE">\n' +
                  '                          <block type="logic_boolean" id="22">\n' +
                  '                            <field name="BOOL">TRUE</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </statement>\n' +
                  '                    <value name="IF1">\n' +
                  '                      <block type="logic_compare" id="23">\n' +
                  '                        <field name="OP">EQ</field>\n' +
                  '                        <value name="A">\n' +
                  '                          <block type="variables_get" id="24">\n' +
                  '                            <field name="VAR">c</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                        <value name="B">\n' +
                  '                          <block type="text" id="25">\n' +
                  '                            <field name="TEXT">)</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <statement name="DO1">\n' +
                  '                      <block type="variables_set" id="26">\n' +
                  '                        <field name="VAR">vOklepaju</field>\n' +
                  '                        <value name="VALUE">\n' +
                  '                          <block type="logic_boolean" id="27">\n' +
                  '                            <field name="BOOL">FALSE</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </statement>\n' +
                  '                    <value name="IF2">\n' +
                  '                      <block type="logic_negate" id="28">\n' +
                  '                        <value name="BOOL">\n' +
                  '                          <block type="variables_get" id="29">\n' +
                  '                            <field name="VAR">vOklepaju</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <statement name="DO2">\n' +
                  '                      <block type="text_append" id="30">\n' +
                  '                        <field name="VAR">s</field>\n' +
                  '                        <value name="TEXT">\n' +
                  '                          <shadow type="text" id="31">\n' +
                  '                            <field name="TEXT"></field>\n' +
                  '                          </shadow>\n' +
                  '                          <block type="variables_get" id="32">\n' +
                  '                            <field name="VAR">c</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </statement>\n' +
                  '                  </block>\n' +
                  '                </statement>\n' +
                  '              </block>\n' +
                  '            </next>\n' +
                  '          </block>\n' +
                  '        </next>\n' +
                  '      </block>\n' +
                  '    </statement>\n' +
                  '    <value name="RETURN">\n' +
                  '      <block type="variables_get" id="33">\n' +
                  '        <field name="VAR">t</field>\n' +
                  '      </block>\n' +
                  '    </value>\n' +
                  '  </block>\n' +
                  '  <block type="variables_set" id="34" x="10" y="370">\n' +
                  '    <field name="VAR">a</field>\n' +
                  '    <value name="VALUE">\n' +
                  '      <block type="procedures_callreturn" id="35" inline="true">\n' +
                  '        <mutation name="PobrisiOklepaje">\n' +
                  '          <arg name="s"></arg>\n' +
                  '        </mutation>\n' +
                  '        <value name="ARG0">\n' +
                  '          <block type="read" id="36">\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '      </block>\n' +
                  '    </value>\n' +
                  '    <next>\n' +
                  '      <block type="print" id="37">\n' +
                  '        <value name="PARAM_0">\n' +
                  '          <block type="variables_get" id="39">\n' +
                  '            <field name="VAR">a</field>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '      </block>\n' +
                  '    </next>\n' +
                  '  </block>\n' +
                  '</xml>'
          },
          medium: {
              blockly: '<xml id="workspace" style="display: none">\n' +
                  '  <block type="procedures_defreturn" id="10" x="10" y="10">\n' +
                  '    <mutation>\n' +
                  '      <arg name="s"></arg>\n' +
                  '    </mutation>\n' +
                  '    <field name="NAME">PobrisiOklepaje</field>\n' +
                  '    <comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment>\n' +
                  '    <statement name="STACK">\n' +
                  '      <block type="variables_set" id="11">\n' +
                  '        <field name="VAR">vOklepaju</field>\n' +
                  '        <value name="VALUE">\n' +
                  '          <block type="logic_boolean" id="12">\n' +
                  '            <field name="BOOL">FALSE</field>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '        <next>\n' +
                  '          <block type="variables_set" id="13">\n' +
                  '            <field name="VAR">t</field>\n' +
                  '            <value name="VALUE">\n' +
                  '              <block type="text" id="14">\n' +
                  '                <field name="TEXT"></field>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <next>\n' +
                  '              <block type="controls_forEach" id="15">\n' +
                  '                <field name="VAR">c</field>\n' +
                  '                <value name="LIST">\n' +
                  '                  <block type="variables_get" id="16">\n' +
                  '                    <field name="VAR">s</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '                <statement name="DO">\n' +
                  '                  <block type="controls_if" id="17">\n' +
                  '                    <mutation elseif="2"></mutation>\n' +
                  '                    <value name="IF0">\n' +
                  '                      <block type="logic_compare" id="18">\n' +
                  '                        <field name="OP">EQ</field>\n' +
                  '                        <value name="A">\n' +
                  '                          <block type="variables_get" id="19">\n' +
                  '                            <field name="VAR">c</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                        <value name="B">\n' +
                  '                          <block type="text" id="20">\n' +
                  '                            <field name="TEXT">(</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <statement name="DO0">\n' +
                  '                      <block type="variables_set" id="21">\n' +
                  '                        <field name="VAR">vOklepaju</field>\n' +
                  '                        <value name="VALUE">\n' +
                  '                          <block type="logic_boolean" id="22">\n' +
                  '                            <field name="BOOL">TRUE</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </statement>\n' +
                  '                    <value name="IF1">\n' +
                  '                      <block type="logic_compare" id="23">\n' +
                  '                        <field name="OP">EQ</field>\n' +
                  '                        <value name="A">\n' +
                  '                          <block type="variables_get" id="24">\n' +
                  '                            <field name="VAR">c</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                        <value name="B">\n' +
                  '                          <block type="text" id="25">\n' +
                  '                            <field name="TEXT">)</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <statement name="DO1">\n' +
                  '                      <block type="variables_set" id="26">\n' +
                  '                        <field name="VAR">vOklepaju</field>\n' +
                  '                        <value name="VALUE">\n' +
                  '                          <block type="logic_boolean" id="27">\n' +
                  '                            <field name="BOOL">FALSE</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </statement>\n' +
                  '                    <value name="IF2">\n' +
                  '                      <block type="logic_negate" id="28">\n' +
                  '                        <value name="BOOL">\n' +
                  '                          <block type="variables_get" id="29">\n' +
                  '                            <field name="VAR">vOklepaju</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <statement name="DO2">\n' +
                  '                      <block type="text_append" id="30">\n' +
                  '                        <field name="VAR">s</field>\n' +
                  '                        <value name="TEXT">\n' +
                  '                          <shadow type="text" id="31">\n' +
                  '                            <field name="TEXT"></field>\n' +
                  '                          </shadow>\n' +
                  '                          <block type="variables_get" id="32">\n' +
                  '                            <field name="VAR">c</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </statement>\n' +
                  '                  </block>\n' +
                  '                </statement>\n' +
                  '              </block>\n' +
                  '            </next>\n' +
                  '          </block>\n' +
                  '        </next>\n' +
                  '      </block>\n' +
                  '    </statement>\n' +
                  '    <value name="RETURN">\n' +
                  '      <block type="variables_get" id="33">\n' +
                  '        <field name="VAR">t</field>\n' +
                  '      </block>\n' +
                  '    </value>\n' +
                  '  </block>\n' +
                  '  <block type="variables_set" id="34" x="10" y="370">\n' +
                  '    <field name="VAR">a</field>\n' +
                  '    <value name="VALUE">\n' +
                  '      <block type="procedures_callreturn" id="35" inline="true">\n' +
                  '        <mutation name="PobrisiOklepaje">\n' +
                  '          <arg name="s"></arg>\n' +
                  '        </mutation>\n' +
                  '        <value name="ARG0">\n' +
                  '          <block type="read" id="36">\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '      </block>\n' +
                  '    </value>\n' +
                  '    <next>\n' +
                  '      <block type="print" id="37">\n' +
                  '        <value name="PARAM_0">\n' +
                  '          <block type="variables_get" id="39">\n' +
                  '            <field name="VAR">a</field>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '        <next>\n' +
                  '          <block type="variables_set" id="40">\n' +
                  '            <field name="VAR">b</field>\n' +
                  '            <value name="VALUE">\n' +
                  '              <block type="procedures_callreturn" id="41" inline="true">\n' +
                  '                <mutation name="PobrisiOklepaje">\n' +
                  '                  <arg name="s"></arg>\n' +
                  '                </mutation>\n' +
                  '                <value name="ARG0">\n' +
                  '                  <block type="read" id="42">\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <next>\n' +
                  '              <block type="print" id="43">\n' +
                  '                <value name="PARAM_0">\n' +
                  '                  <block type="variables_get" id="45">\n' +
                  '                    <field name="VAR">b</field>\n' +
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
          },
          hard: {
              blockly: '<xml id="workspace" style="display: none">\n' +
                  '  <block type="procedures_defreturn" id="10" x="10" y="10">\n' +
                  '    <mutation>\n' +
                  '      <arg name="s"></arg>\n' +
                  '    </mutation>\n' +
                  '    <field name="NAME">PobrisiOklepaje</field>\n' +
                  '    <comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment>\n' +
                  '    <statement name="STACK">\n' +
                  '      <block type="variables_set" id="11">\n' +
                  '        <field name="VAR">vOklepaju</field>\n' +
                  '        <value name="VALUE">\n' +
                  '          <block type="logic_boolean" id="12">\n' +
                  '            <field name="BOOL">FALSE</field>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '        <next>\n' +
                  '          <block type="variables_set" id="13">\n' +
                  '            <field name="VAR">t</field>\n' +
                  '            <value name="VALUE">\n' +
                  '              <block type="text" id="14">\n' +
                  '                <field name="TEXT"></field>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <next>\n' +
                  '              <block type="controls_forEach" id="15">\n' +
                  '                <field name="VAR">c</field>\n' +
                  '                <value name="LIST">\n' +
                  '                  <block type="variables_get" id="16">\n' +
                  '                    <field name="VAR">s</field>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '                <statement name="DO">\n' +
                  '                  <block type="controls_if" id="17">\n' +
                  '                    <mutation elseif="2"></mutation>\n' +
                  '                    <value name="IF0">\n' +
                  '                      <block type="logic_compare" id="18">\n' +
                  '                        <field name="OP">EQ</field>\n' +
                  '                        <value name="A">\n' +
                  '                          <block type="variables_get" id="19">\n' +
                  '                            <field name="VAR">c</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                        <value name="B">\n' +
                  '                          <block type="text" id="20">\n' +
                  '                            <field name="TEXT">(</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <statement name="DO0">\n' +
                  '                      <block type="variables_set" id="21">\n' +
                  '                        <field name="VAR">vOklepaju</field>\n' +
                  '                        <value name="VALUE">\n' +
                  '                          <block type="logic_boolean" id="22">\n' +
                  '                            <field name="BOOL">TRUE</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </statement>\n' +
                  '                    <value name="IF1">\n' +
                  '                      <block type="logic_compare" id="23">\n' +
                  '                        <field name="OP">EQ</field>\n' +
                  '                        <value name="A">\n' +
                  '                          <block type="variables_get" id="24">\n' +
                  '                            <field name="VAR">c</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                        <value name="B">\n' +
                  '                          <block type="text" id="25">\n' +
                  '                            <field name="TEXT">)</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <statement name="DO1">\n' +
                  '                      <block type="variables_set" id="26">\n' +
                  '                        <field name="VAR">vOklepaju</field>\n' +
                  '                        <value name="VALUE">\n' +
                  '                          <block type="logic_boolean" id="27">\n' +
                  '                            <field name="BOOL">FALSE</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </statement>\n' +
                  '                    <value name="IF2">\n' +
                  '                      <block type="logic_negate" id="28">\n' +
                  '                        <value name="BOOL">\n' +
                  '                          <block type="variables_get" id="29">\n' +
                  '                            <field name="VAR">vOklepaju</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <statement name="DO2">\n' +
                  '                      <block type="text_append" id="30">\n' +
                  '                        <field name="VAR">s</field>\n' +
                  '                        <value name="TEXT">\n' +
                  '                          <shadow type="text" id="31">\n' +
                  '                            <field name="TEXT"></field>\n' +
                  '                          </shadow>\n' +
                  '                          <block type="variables_get" id="32">\n' +
                  '                            <field name="VAR">c</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </statement>\n' +
                  '                  </block>\n' +
                  '                </statement>\n' +
                  '              </block>\n' +
                  '            </next>\n' +
                  '          </block>\n' +
                  '        </next>\n' +
                  '      </block>\n' +
                  '    </statement>\n' +
                  '    <value name="RETURN">\n' +
                  '      <block type="variables_get" id="33">\n' +
                  '        <field name="VAR">t</field>\n' +
                  '      </block>\n' +
                  '    </value>\n' +
                  '  </block>\n' +
                  '  <block type="variables_set" id="34" x="10" y="370">\n' +
                  '    <field name="VAR">a</field>\n' +
                  '    <value name="VALUE">\n' +
                  '      <block type="procedures_callreturn" id="35" inline="true">\n' +
                  '        <mutation name="PobrisiOklepaje">\n' +
                  '          <arg name="s"></arg>\n' +
                  '        </mutation>\n' +
                  '        <value name="ARG0">\n' +
                  '          <block type="read" id="36">\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '      </block>\n' +
                  '    </value>\n' +
                  '    <next>\n' +
                  '      <block type="print" id="37">\n' +
                  '        <value name="PARAM_0">\n' +
                  '          <block type="variables_get" id="39">\n' +
                  '            <field name="VAR">a</field>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '        <next>\n' +
                  '          <block type="variables_set" id="40">\n' +
                  '            <field name="VAR">b</field>\n' +
                  '            <value name="VALUE">\n' +
                  '              <block type="procedures_callreturn" id="41" inline="true">\n' +
                  '                <mutation name="PobrisiOklepaje">\n' +
                  '                  <arg name="s"></arg>\n' +
                  '                </mutation>\n' +
                  '                <value name="ARG0">\n' +
                  '                  <block type="read" id="42">\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <next>\n' +
                  '              <block type="print" id="43">\n' +
                  '                <value name="PARAM_0">\n' +
                  '                  <block type="variables_get" id="45">\n' +
                  '                    <field name="VAR">b</field>\n' +
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
             printer: ["print", "read"],
         },
          // Block math_floor_divison not avalible
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables", "functions","lists"],
            singleBlocks: { easy : ["text", "text_join", "text_append", "text_length", "text_getSubstring", "text_charAt", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"],
                            medium : ["text", "text_join", "text_append", "text_length", "text_getSubstring", "text_charAt", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"],
                            hard : ["text", "text_join", "text_append", "text_length", "text_getSubstring", "text_charAt", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"]
                          },
         }
      },
      maxInstructions: {easy: 0, medium: 0, hard: 41},
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
            input: "banana(jabolko) limon(pomaranca)korencek(paprika)",
            output: "banana limonkorencek",
         }
       ],
       medium: [
           {
             input: "banana(jabolko) limon(pomaranca)korencek(paprika)\nrukola(banana(jabolko)limon) pomaranca",
             output: "banana limonkorencek\nrukola pomaranca",
           }

       ],
       hard : [
           {
               input: "banana(jabolko) limon(pomaranca)korencek(paprika)\nrukola(banana(jabolko)limon) pomaranca",
               output: "banana limonkorencek\nrukola pomaranca",
           }
       ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
