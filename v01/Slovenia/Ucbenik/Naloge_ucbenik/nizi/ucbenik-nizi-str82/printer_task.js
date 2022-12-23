function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
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
      example: {
          easy: {
              blockly: '<xml id="solution" style="display: none">\n' +
                  '  <block type="procedures_defreturn" id="10" x="10" y="10">\n' +
                  '    <mutation>\n' +
                  '      <arg name="s"></arg>\n' +
                  '    </mutation>\n' +
                  '    <field name="NAME">PobrisiOklepaje2</field>\n' +
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
                  '                        <field name="VAR">t</field>\n' +
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
                  '        <mutation name="PobrisiOklepaje2">\n' +
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
                  '          <shadow type="text" id="38">\n' +
                  '            <field name="TEXT">abc</field>\n' +
                  '          </shadow>\n' +
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
              blockly: '<xml id="solution2" style="display: none">\n' +
                  '  <block type="procedures_defreturn" id="10" x="10" y="10">\n' +
                  '    <mutation>\n' +
                  '      <arg name="s"></arg>\n' +
                  '    </mutation>\n' +
                  '    <field name="NAME">PobrisiOklepaje2</field>\n' +
                  '    <comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment>\n' +
                  '    <statement name="STACK">\n' +
                  '      <block type="variables_set" id="11">\n' +
                  '        <field name="VAR">vOklepaju</field>\n' +
                  '        <value name="VALUE">\n' +
                  '          <block type="math_number" id="12">\n' +
                  '            <field name="NUM">0</field>\n' +
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
                  '                          <block type="math_arithmetic" id="22" collapsed="true">\n' +
                  '                            <field name="OP">ADD</field>\n' +
                  '                            <value name="A">\n' +
                  '                              <shadow type="math_number" id="23">\n' +
                  '                                <field name="NUM">1</field>\n' +
                  '                              </shadow>\n' +
                  '                              <block type="variables_get" id="24">\n' +
                  '                                <field name="VAR">vOklepaju</field>\n' +
                  '                              </block>\n' +
                  '                            </value>\n' +
                  '                            <value name="B">\n' +
                  '                              <shadow type="math_number" id="25">\n' +
                  '                                <field name="NUM">1</field>\n' +
                  '                              </shadow>\n' +
                  '                              <block type="math_number" id="26">\n' +
                  '                                <field name="NUM">1</field>\n' +
                  '                              </block>\n' +
                  '                            </value>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </statement>\n' +
                  '                    <value name="IF1">\n' +
                  '                      <block type="logic_compare" id="27">\n' +
                  '                        <field name="OP">EQ</field>\n' +
                  '                        <value name="A">\n' +
                  '                          <block type="variables_get" id="28">\n' +
                  '                            <field name="VAR">c</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                        <value name="B">\n' +
                  '                          <block type="text" id="29">\n' +
                  '                            <field name="TEXT">)</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <statement name="DO1">\n' +
                  '                      <block type="variables_set" id="30">\n' +
                  '                        <field name="VAR">vOklepaju</field>\n' +
                  '                        <value name="VALUE">\n' +
                  '                          <block type="math_arithmetic" id="31" collapsed="true">\n' +
                  '                            <field name="OP">MINUS</field>\n' +
                  '                            <value name="A">\n' +
                  '                              <shadow type="math_number" id="32">\n' +
                  '                                <field name="NUM">1</field>\n' +
                  '                              </shadow>\n' +
                  '                              <block type="variables_get" id="33">\n' +
                  '                                <field name="VAR">vOklepaju</field>\n' +
                  '                              </block>\n' +
                  '                            </value>\n' +
                  '                            <value name="B">\n' +
                  '                              <shadow type="math_number" id="34">\n' +
                  '                                <field name="NUM">1</field>\n' +
                  '                              </shadow>\n' +
                  '                              <block type="math_number" id="35">\n' +
                  '                                <field name="NUM">1</field>\n' +
                  '                              </block>\n' +
                  '                            </value>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </statement>\n' +
                  '                    <value name="IF2">\n' +
                  '                      <block type="logic_compare" id="36">\n' +
                  '                        <field name="OP">EQ</field>\n' +
                  '                        <value name="A">\n' +
                  '                          <block type="variables_get" id="37">\n' +
                  '                            <field name="VAR">vOklepaju</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                        <value name="B">\n' +
                  '                          <block type="math_number" id="38">\n' +
                  '                            <field name="NUM">0</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <statement name="DO2">\n' +
                  '                      <block type="text_append" id="39">\n' +
                  '                        <field name="VAR">t</field>\n' +
                  '                        <value name="TEXT">\n' +
                  '                          <shadow type="text" id="40">\n' +
                  '                            <field name="TEXT"></field>\n' +
                  '                          </shadow>\n' +
                  '                          <block type="variables_get" id="41">\n' +
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
                  '      <block type="variables_get" id="42">\n' +
                  '        <field name="VAR">t</field>\n' +
                  '      </block>\n' +
                  '    </value>\n' +
                  '  </block>\n' +
                  '  <block type="variables_set" id="43" x="10" y="380">\n' +
                  '    <field name="VAR">a</field>\n' +
                  '    <value name="VALUE">\n' +
                  '      <block type="procedures_callreturn" id="44" inline="true">\n' +
                  '        <mutation name="PobrisiOklepaje2">\n' +
                  '          <arg name="s"></arg>\n' +
                  '        </mutation>\n' +
                  '        <value name="ARG0">\n' +
                  '          <block type="read" id="45">\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '      </block>\n' +
                  '    </value>\n' +
                  '    <next>\n' +
                  '      <block type="print" id="46">\n' +
                  '        <value name="PARAM_0">\n' +
                  '          <shadow type="text" id="47">\n' +
                  '            <field name="TEXT">abc</field>\n' +
                  '          </shadow>\n' +
                  '          <block type="variables_get" id="48">\n' +
                  '            <field name="VAR">a</field>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '        <next>\n' +
                  '          <block type="variables_set" id="49">\n' +
                  '            <field name="VAR">b</field>\n' +
                  '            <value name="VALUE">\n' +
                  '              <block type="procedures_callreturn" id="50" inline="true">\n' +
                  '                <mutation name="PobrisiOklepaje2">\n' +
                  '                  <arg name="s"></arg>\n' +
                  '                </mutation>\n' +
                  '                <value name="ARG0">\n' +
                  '                  <block type="read" id="51">\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <next>\n' +
                  '              <block type="print" id="52">\n' +
                  '                <value name="PARAM_0">\n' +
                  '                  <shadow type="text" id="53">\n' +
                  '                    <field name="TEXT">abc</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="variables_get" id="54">\n' +
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
          hard:  {
              blockly: '<xml id="solution2" style="display: none">\n' +
                  '  <block type="procedures_defreturn" id="10" x="10" y="10">\n' +
                  '    <mutation>\n' +
                  '      <arg name="s"></arg>\n' +
                  '    </mutation>\n' +
                  '    <field name="NAME">PobrisiOklepaje2</field>\n' +
                  '    <comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment>\n' +
                  '    <statement name="STACK">\n' +
                  '      <block type="variables_set" id="11">\n' +
                  '        <field name="VAR">vOklepaju</field>\n' +
                  '        <value name="VALUE">\n' +
                  '          <block type="math_number" id="12">\n' +
                  '            <field name="NUM">0</field>\n' +
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
                  '                          <block type="math_arithmetic" id="22" collapsed="true">\n' +
                  '                            <field name="OP">ADD</field>\n' +
                  '                            <value name="A">\n' +
                  '                              <shadow type="math_number" id="23">\n' +
                  '                                <field name="NUM">1</field>\n' +
                  '                              </shadow>\n' +
                  '                              <block type="variables_get" id="24">\n' +
                  '                                <field name="VAR">vOklepaju</field>\n' +
                  '                              </block>\n' +
                  '                            </value>\n' +
                  '                            <value name="B">\n' +
                  '                              <shadow type="math_number" id="25">\n' +
                  '                                <field name="NUM">1</field>\n' +
                  '                              </shadow>\n' +
                  '                              <block type="math_number" id="26">\n' +
                  '                                <field name="NUM">1</field>\n' +
                  '                              </block>\n' +
                  '                            </value>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </statement>\n' +
                  '                    <value name="IF1">\n' +
                  '                      <block type="logic_compare" id="27">\n' +
                  '                        <field name="OP">EQ</field>\n' +
                  '                        <value name="A">\n' +
                  '                          <block type="variables_get" id="28">\n' +
                  '                            <field name="VAR">c</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                        <value name="B">\n' +
                  '                          <block type="text" id="29">\n' +
                  '                            <field name="TEXT">)</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <statement name="DO1">\n' +
                  '                      <block type="variables_set" id="30">\n' +
                  '                        <field name="VAR">vOklepaju</field>\n' +
                  '                        <value name="VALUE">\n' +
                  '                          <block type="math_arithmetic" id="31" collapsed="true">\n' +
                  '                            <field name="OP">MINUS</field>\n' +
                  '                            <value name="A">\n' +
                  '                              <shadow type="math_number" id="32">\n' +
                  '                                <field name="NUM">1</field>\n' +
                  '                              </shadow>\n' +
                  '                              <block type="variables_get" id="33">\n' +
                  '                                <field name="VAR">vOklepaju</field>\n' +
                  '                              </block>\n' +
                  '                            </value>\n' +
                  '                            <value name="B">\n' +
                  '                              <shadow type="math_number" id="34">\n' +
                  '                                <field name="NUM">1</field>\n' +
                  '                              </shadow>\n' +
                  '                              <block type="math_number" id="35">\n' +
                  '                                <field name="NUM">1</field>\n' +
                  '                              </block>\n' +
                  '                            </value>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </statement>\n' +
                  '                    <value name="IF2">\n' +
                  '                      <block type="logic_compare" id="36">\n' +
                  '                        <field name="OP">EQ</field>\n' +
                  '                        <value name="A">\n' +
                  '                          <block type="variables_get" id="37">\n' +
                  '                            <field name="VAR">vOklepaju</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                        <value name="B">\n' +
                  '                          <block type="math_number" id="38">\n' +
                  '                            <field name="NUM">0</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <statement name="DO2">\n' +
                  '                      <block type="text_append" id="39">\n' +
                  '                        <field name="VAR">t</field>\n' +
                  '                        <value name="TEXT">\n' +
                  '                          <shadow type="text" id="40">\n' +
                  '                            <field name="TEXT"></field>\n' +
                  '                          </shadow>\n' +
                  '                          <block type="variables_get" id="41">\n' +
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
                  '      <block type="variables_get" id="42">\n' +
                  '        <field name="VAR">t</field>\n' +
                  '      </block>\n' +
                  '    </value>\n' +
                  '  </block>\n' +
                  '  <block type="variables_set" id="43" x="10" y="380">\n' +
                  '    <field name="VAR">a</field>\n' +
                  '    <value name="VALUE">\n' +
                  '      <block type="procedures_callreturn" id="44" inline="true">\n' +
                  '        <mutation name="PobrisiOklepaje2">\n' +
                  '          <arg name="s"></arg>\n' +
                  '        </mutation>\n' +
                  '        <value name="ARG0">\n' +
                  '          <block type="read" id="45">\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '      </block>\n' +
                  '    </value>\n' +
                  '    <next>\n' +
                  '      <block type="print" id="46">\n' +
                  '        <value name="PARAM_0">\n' +
                  '          <shadow type="text" id="47">\n' +
                  '            <field name="TEXT">abc</field>\n' +
                  '          </shadow>\n' +
                  '          <block type="variables_get" id="48">\n' +
                  '            <field name="VAR">a</field>\n' +
                  '          </block>\n' +
                  '        </value>\n' +
                  '        <next>\n' +
                  '          <block type="variables_set" id="49">\n' +
                  '            <field name="VAR">b</field>\n' +
                  '            <value name="VALUE">\n' +
                  '              <block type="procedures_callreturn" id="50" inline="true">\n' +
                  '                <mutation name="PobrisiOklepaje2">\n' +
                  '                  <arg name="s"></arg>\n' +
                  '                </mutation>\n' +
                  '                <value name="ARG0">\n' +
                  '                  <block type="read" id="51">\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '            <next>\n' +
                  '              <block type="print" id="52">\n' +
                  '                <value name="PARAM_0">\n' +
                  '                  <shadow type="text" id="53">\n' +
                  '                    <field name="TEXT">abc</field>\n' +
                  '                  </shadow>\n' +
                  '                  <block type="variables_get" id="54">\n' +
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
                            medium : ["text", "text_join", "text_append", "text_length", "text_getSubstring", "text_charAt", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"],
                            hard : ["text", "text_join", "text_append", "text_length", "text_getSubstring", "text_charAt", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"]
                          },
         }
      },
      maxInstructions: {easy: 0, medium: 0, hard: 34},
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
            input: "dve(tri) stiri(pet)sest(sedem)",
            output: "dve stirisest",
         },
         {
            input: "pet(deset)sto",
            output: "petsto",
         },
         {
            input: "ena(dve)(tri)(stiri)pet (sest )sedem(osem )  devet (deset)",
            output: "enapet sedem devet ",
         },
       ],
       medium: [
           {
             input: "dve(tri) stiri(pet)sest(sedem)\nena(dve(tri)stiri) pet",
             output: "dve stirisest\nena pet",
           },
           {
             input: "deset (devet)sedem( sest)pet\npet(sest(())sedem) osem",
             output: "deset sedempet\npet osem",
           },
           {
             input: "devet osem(sedem)sest(pet) stiri\nena(dve () tri(stiri)) pet (sest(sedem(osem(devet))))deset",
             output: "devet osemsest stiri\nena pet deset",
           },
       ],
       hard : [
           {
               input: "dve(tri) stiri(pet)sest(sedem)\nena(dve(tri)stiri) pet",
               output: "dve stirisest\nena pet",
           },
           {
               input: "deset (devet)sedem( sest)pet\npet(sest(())sedem) osem",
               output: "deset sedempet\npet osem",
           },
           {
               input: "devet osem(sedem)sest(pet) stiri\nena(dve () tri(stiri)) pet (sest(sedem(osem(devet))))deset",
               output: "devet osemsest stiri\nena pet deset",
           },
       ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
