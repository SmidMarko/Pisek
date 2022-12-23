function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      startingExample: {
         blockly: '<xml id="workspace3" style="display: none">\n' +
             '  <block type="variables_set" id="10" x="10" y="10">\n' +
             '    <field name="VAR">a</field>\n' +
             '    <value name="VALUE">\n' +
             '      <block type="readInteger" id="11">\n' +
             '      </block>\n' +
             '    </value>\n' +
             '    <next>\n' +
             '      <block type="variables_set" id="14">\n' +
             '        <field name="VAR">b</field>\n' +
             '        <value name="VALUE">\n' +
             '          <block type="readInteger" id="15">\n' +
             '          </block>\n' +
             '        </value>\n' +
             '        <next>\n' +
             '          <block type="variables_set" id="18">\n' +
             '            <field name="VAR">vsota</field>\n' +
             '            <value name="VALUE">\n' +
             '              <block type="variables_get" id="19">\n' +
             '                <field name="VAR">a</field>\n' +
             '              </block>\n' +
             '            </value>\n' +
             '            <next>\n' +
             '              <block type="controls_whileUntil" id="20">\n' +
             '                <field name="MODE">WHILE</field>\n' +
             '                <value name="BOOL">\n' +
             '                  <block type="logic_compare" id="21">\n' +
             '                    <field name="OP">LT</field>\n' +
             '                    <value name="A">\n' +
             '                      <block type="variables_get" id="22">\n' +
             '                        <field name="VAR">a</field>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                    <value name="B">\n' +
             '                      <block type="variables_get" id="23">\n' +
             '                        <field name="VAR">b</field>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                  </block>\n' +
             '                </value>\n' +
             '                <statement name="DO">\n' +
             '                  <block type="variables_set" id="24">\n' +
             '                    <field name="VAR">vsota</field>\n' +
             '                    <value name="VALUE">\n' +
             '                      <block type="math_arithmetic" id="25">\n' +
             '                        <field name="OP">ADD</field>\n' +
             '                        <value name="A">\n' +
             '                          <shadow type="math_number" id="26">\n' +
             '                            <field name="NUM">1</field>\n' +
             '                          </shadow>\n' +
             '                          <block type="variables_get" id="27">\n' +
             '                            <field name="VAR">vsota</field>\n' +
             '                          </block>\n' +
             '                        </value>\n' +
             '                        <value name="B">\n' +
             '                          <shadow type="math_number" id="28">\n' +
             '                            <field name="NUM">1</field>\n' +
             '                          </shadow>\n' +
             '                          <block type="variables_get" id="29">\n' +
             '                            <field name="VAR">a</field>\n' +
             '                          </block>\n' +
             '                        </value>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                    <next>\n' +
             '                      <block type="variables_set" id="30">\n' +
             '                        <field name="VAR">a</field>\n' +
             '                        <value name="VALUE">\n' +
             '                          <block type="math_arithmetic" id="31">\n' +
             '                            <field name="OP">ADD</field>\n' +
             '                            <value name="A">\n' +
             '                              <shadow type="math_number" id="32">\n' +
             '                                <field name="NUM">1</field>\n' +
             '                              </shadow>\n' +
             '                              <block type="variables_get" id="33">\n' +
             '                                <field name="VAR">a</field>\n' +
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
             '                    </next>\n' +
             '                  </block>\n' +
             '                </statement>\n' +
             '                <next>\n' +
             '                  <block type="print" id="36">\n' +
             '                    <value name="PARAM_0">\n' +
             '                      <shadow type="text" id="37">\n' +
             '                        <field name="TEXT">abc</field>\n' +
             '                      </shadow>\n' +
             '                      <block type="variables_get" id="38">\n' +
             '                        <field name="VAR">vsota</field>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
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
      example: {
         easy: {
             blockly: '<xml id="solution3a" style="display: none">\n' +
                 '  <block type="variables_set" id="10" x="10" y="10">\n' +
                 '    <field name="VAR">a</field>\n' +
                 '    <value name="VALUE">\n' +
                 '      <block type="readInteger" id="11">\n' +
                 '      </block>\n' +
                 '    </value>\n' +
                 '    <next>\n' +
                 '      <block type="variables_set" id="14">\n' +
                 '        <field name="VAR">b</field>\n' +
                 '        <value name="VALUE">\n' +
                 '          <block type="readInteger" id="15">\n' +
                 '          </block>\n' +
                 '        </value>\n' +
                 '        <next>\n' +
                 '          <block type="variables_set" id="18">\n' +
                 '            <field name="VAR">vsota</field>\n' +
                 '            <value name="VALUE">\n' +
                 '              <block type="math_number" id="19">\n' +
                 '                <field name="NUM">0</field>\n' +
                 '              </block>\n' +
                 '            </value>\n' +
                 '            <next>\n' +
                 '              <block type="controls_whileUntil" id="20">\n' +
                 '                <field name="MODE">WHILE</field>\n' +
                 '                <value name="BOOL">\n' +
                 '                  <block type="logic_compare" id="21">\n' +
                 '                    <field name="OP">LTE</field>\n' +
                 '                    <value name="A">\n' +
                 '                      <block type="variables_get" id="22">\n' +
                 '                        <field name="VAR">a</field>\n' +
                 '                      </block>\n' +
                 '                    </value>\n' +
                 '                    <value name="B">\n' +
                 '                      <block type="variables_get" id="23">\n' +
                 '                        <field name="VAR">b</field>\n' +
                 '                      </block>\n' +
                 '                    </value>\n' +
                 '                  </block>\n' +
                 '                </value>\n' +
                 '                <statement name="DO">\n' +
                 '                  <block type="variables_set" id="24">\n' +
                 '                    <field name="VAR">vsota</field>\n' +
                 '                    <value name="VALUE">\n' +
                 '                      <block type="math_arithmetic" id="25">\n' +
                 '                        <field name="OP">ADD</field>\n' +
                 '                        <value name="A">\n' +
                 '                          <shadow type="math_number" id="26">\n' +
                 '                            <field name="NUM">1</field>\n' +
                 '                          </shadow>\n' +
                 '                          <block type="variables_get" id="27">\n' +
                 '                            <field name="VAR">vsota</field>\n' +
                 '                          </block>\n' +
                 '                        </value>\n' +
                 '                        <value name="B">\n' +
                 '                          <shadow type="math_number" id="28">\n' +
                 '                            <field name="NUM">1</field>\n' +
                 '                          </shadow>\n' +
                 '                          <block type="variables_get" id="29">\n' +
                 '                            <field name="VAR">a</field>\n' +
                 '                          </block>\n' +
                 '                        </value>\n' +
                 '                      </block>\n' +
                 '                    </value>\n' +
                 '                    <next>\n' +
                 '                      <block type="variables_set" id="30">\n' +
                 '                        <field name="VAR">a</field>\n' +
                 '                        <value name="VALUE">\n' +
                 '                          <block type="math_arithmetic" id="31">\n' +
                 '                            <field name="OP">ADD</field>\n' +
                 '                            <value name="A">\n' +
                 '                              <shadow type="math_number" id="32">\n' +
                 '                                <field name="NUM">1</field>\n' +
                 '                              </shadow>\n' +
                 '                              <block type="variables_get" id="33">\n' +
                 '                                <field name="VAR">a</field>\n' +
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
                 '                    </next>\n' +
                 '                  </block>\n' +
                 '                </statement>\n' +
                 '                <next>\n' +
                 '                  <block type="print" id="36">\n' +
                 '                    <value name="PARAM_0">\n' +
                 '                      <shadow type="text" id="37">\n' +
                 '                        <field name="TEXT">abc</field>\n' +
                 '                      </shadow>\n' +
                 '                      <block type="variables_get" id="38">\n' +
                 '                        <field name="VAR">vsota</field>\n' +
                 '                      </block>\n' +
                 '                    </value>\n' +
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
         medium: {
            blockly: '<xml id="solution3b" style="display: none">\n' +
                '  <block type="variables_set" id="10" x="10" y="10">\n' +
                '    <field name="VAR">a</field>\n' +
                '    <value name="VALUE">\n' +
                '      <block type="readInteger" id="11">\n' +
                '      </block>\n' +
                '    </value>\n' +
                '    <next>\n' +
                '      <block type="variables_set" id="14">\n' +
                '        <field name="VAR">b</field>\n' +
                '        <value name="VALUE">\n' +
                '          <block type="readInteger" id="15">\n' +
                '          </block>\n' +
                '        </value>\n' +
                '        <next>\n' +
                '          <block type="controls_if" id="21">\n' +
                '            <value name="IF0">\n' +
                '              <block type="logic_compare" id="22">\n' +
                '                <field name="OP">LT</field>\n' +
                '                <value name="A">\n' +
                '                  <block type="variables_get" id="23">\n' +
                '                    <field name="VAR">b</field>\n' +
                '                  </block>\n' +
                '                </value>\n' +
                '               <value name="B">\n' +
                '                  <block type="variables_get" id="24">\n' +
                '                    <field name="VAR">a</field>\n' +
                '                  </block>\n' +
                '                </value>\n' +
                '              </block>\n' +
                '            </value>\n' +
                '           <statement name="DO0">\n' +
                '              <block type="variables_set" id="25">\n' +
                '                <field name="VAR">t</field>\n' +
                '                <value name="VALUE">\n' +
                '                  <block type="variables_get" id="26">\n' +
                '                    <field name="VAR">a</field>\n' +
                '                  </block>\n' +
                '                </value>\n' +
                '                <next>\n' +
                '                  <block type="variables_set" id="27">\n' +
                '                    <field name="VAR">a</field>\n' +
                '                    <value name="VALUE">\n' +
                '                      <block type="variables_get" id="28">\n' +
                '                        <field name="VAR">b</field>\n' +
                '                      </block>\n' +
                '                    </value>\n' +
                '                    <next>\n' +
                '                      <block type="variables_set" id="29">\n' +
                '                       <field name="VAR">b</field>\n' +
                '                       <value name="VALUE">\n' +
                '                          <block type="variables_get" id="30">\n' +
                '                            <field name="VAR">t</field>\n' +
                '                          </block>\n' +
                '                        </value>\n' +
                '                      </block>\n' +
                '                    </next>\n' +
                '                  </block>\n' +
                '                </next>\n' +
                '              </block>\n' +
                '            </statement>\n' +
                '            <next>\n' +
                '              <block type="variables_set" id="31">\n' +
                '                <field name="VAR">vsota</field>\n' +
                '                <value name="VALUE">\n' +
                '                  <block type="math_number" id="32">\n' +
                '                    <field name="NUM">0</field>\n' +
                '                  </block>\n' +
                '                </value>\n' +
                '                <next>\n' +
                '                  <block type="controls_whileUntil" id="33">\n' +
                '                    <field name="MODE">WHILE</field>\n' +
                '                    <value name="BOOL">\n' +
                '                      <block type="logic_compare" id="34">\n' +
                '                        <field name="OP">LTE</field>\n' +
                '                        <value name="A">\n' +
                '                          <block type="variables_get" id="35">\n' +
                '                            <field name="VAR">a</field>\n' +
                '                          </block>\n' +
                '                        </value>\n' +
                '                        <value name="B">\n' +
                '                          <block type="variables_get" id="36">\n' +
                '                            <field name="VAR">b</field>\n' +
                '                          </block>\n' +
                '                        </value>\n' +
                '                      </block>\n' +
                '                    </value>\n' +
                '                    <statement name="DO">\n' +
                '                      <block type="variables_set" id="37">\n' +
                '                        <field name="VAR">vsota</field>\n' +
                '                        <value name="VALUE">\n' +
                '                          <block type="math_arithmetic" id="38">\n' +
                '                            <field name="OP">ADD</field>\n' +
                '                                <value name="A">\n' +
                '                                  <shadow type="math_number" id="39">\n' +
                '                                    <field name="NUM">1</field>\n' +
                '                                  </shadow>\n' +
                '                                  <block type="variables_get" id="40">\n' +
                '                                    <field name="VAR">vsota</field>\n' +
                '                                  </block>\n' +
                '                                </value>\n' +
                '                                <value name="B">\n' +
                '                                  <shadow type="math_number" id="41">\n' +
                '                                    <field name="NUM">1</field>\n' +
                '                                  </shadow>\n' +
                '                                  <block type="variables_get" id="42">\n' +
                '                                    <field name="VAR">a</field>\n' +
                '                                  </block>\n' +
                '                                </value>\n' +
                '                              </block>\n' +
                '                            </value>\n' +
                '                            <next>\n' +
                '                              <block type="variables_set" id="43">\n' +
                '                                <field name="VAR">a</field>\n' +
                '                                <value name="VALUE">\n' +
                '                                  <block type="math_arithmetic" id="44">\n' +
                '                                    <field name="OP">ADD</field>\n' +
                '                                    <value name="A">\n' +
                '                                      <shadow type="math_number" id="45">\n' +
                '                                        <field name="NUM">1</field>\n' +
                '                                      </shadow>\n' +
                '                                      <block type="variables_get" id="46">\n' +
                '                                        <field name="VAR">a</field>\n' +
                '                                      </block>\n' +
                '                                    </value>\n' +
                '                                    <value name="B">\n' +
                '                                      <shadow type="math_number" id="47">\n' +
                '                                        <field name="NUM">1</field>\n' +
                '                                      </shadow>\n' +
                '                                      <block type="math_number" id="48">\n' +
                '                                        <field name="NUM">1</field>\n' +
                '                                      </block>\n' +
                '                                    </value>\n' +
                '                                  </block>\n' +
                '                                </value>\n' +
                '                              </block>\n' +
                '                            </next>\n' +
                '                          </block>\n' +
                '                        </statement>\n' +
                '                        <next>\n' +
                '                          <block type="print" id="49">\n' +
                '                            <value name="PARAM_0">\n' +
                '                              <shadow type="text" id="50">\n' +
                '                                <field name="TEXT">abc</field>\n' +
                '                              </shadow>\n' +
                '                              <block type="variables_get" id="51">\n' +
                '                                <field name="VAR">vsota</field>\n' +
                '                              </block>\n' +
                '                            </value>\n' +
                '                          </block>\n' +
                '                        </next>\n' +
                '                      </block>\n' +
                '                    </next>\n' +
                '                  </block>\n' +
                '                </next>\n' +
                '              </block>\n' +
                '        </next>\n' +
                '      </block>\n' +
                '    </next>\n' +
                '  </block>\n' +
                '</xml>'
         },
         hard: {
            blockly: '<xml id="solution3b" style="display: none">\n' +
                '  <block type="variables_set" id="10" x="10" y="10">\n' +
                '    <field name="VAR">a</field>\n' +
                '    <value name="VALUE">\n' +
                '      <block type="readInteger" id="11">\n' +
                '      </block>\n' +
                '    </value>\n' +
                '    <next>\n' +
                '      <block type="variables_set" id="14">\n' +
                '        <field name="VAR">b</field>\n' +
                '        <value name="VALUE">\n' +
                '          <block type="readInteger" id="15">\n' +
                '          </block>\n' +
                '        </value>\n' +
                '        <next>\n' +
                '          <block type="controls_if" id="21">\n' +
                '            <value name="IF0">\n' +
                '              <block type="logic_compare" id="22">\n' +
                '                <field name="OP">LT</field>\n' +
                '                <value name="A">\n' +
                '                  <block type="variables_get" id="23">\n' +
                '                    <field name="VAR">b</field>\n' +
                '                  </block>\n' +
                '                </value>\n' +
                '               <value name="B">\n' +
                '                  <block type="variables_get" id="24">\n' +
                '                    <field name="VAR">a</field>\n' +
                '                  </block>\n' +
                '                </value>\n' +
                '              </block>\n' +
                '            </value>\n' +
                '           <statement name="DO0">\n' +
                '              <block type="variables_set" id="25">\n' +
                '                <field name="VAR">t</field>\n' +
                '                <value name="VALUE">\n' +
                '                  <block type="variables_get" id="26">\n' +
                '                    <field name="VAR">a</field>\n' +
                '                  </block>\n' +
                '                </value>\n' +
                '                <next>\n' +
                '                  <block type="variables_set" id="27">\n' +
                '                    <field name="VAR">a</field>\n' +
                '                    <value name="VALUE">\n' +
                '                      <block type="variables_get" id="28">\n' +
                '                        <field name="VAR">b</field>\n' +
                '                      </block>\n' +
                '                    </value>\n' +
                '                    <next>\n' +
                '                      <block type="variables_set" id="29">\n' +
                '                       <field name="VAR">b</field>\n' +
                '                       <value name="VALUE">\n' +
                '                          <block type="variables_get" id="30">\n' +
                '                            <field name="VAR">t</field>\n' +
                '                          </block>\n' +
                '                        </value>\n' +
                '                      </block>\n' +
                '                    </next>\n' +
                '                  </block>\n' +
                '                </next>\n' +
                '              </block>\n' +
                '            </statement>\n' +
                '            <next>\n' +
                '              <block type="variables_set" id="31">\n' +
                '                <field name="VAR">vsota</field>\n' +
                '                <value name="VALUE">\n' +
                '                  <block type="math_number" id="32">\n' +
                '                    <field name="NUM">0</field>\n' +
                '                  </block>\n' +
                '                </value>\n' +
                '                <next>\n' +
                '                  <block type="controls_whileUntil" id="33">\n' +
                '                    <field name="MODE">WHILE</field>\n' +
                '                    <value name="BOOL">\n' +
                '                      <block type="logic_compare" id="34">\n' +
                '                        <field name="OP">LTE</field>\n' +
                '                        <value name="A">\n' +
                '                          <block type="variables_get" id="35">\n' +
                '                            <field name="VAR">a</field>\n' +
                '                          </block>\n' +
                '                        </value>\n' +
                '                        <value name="B">\n' +
                '                          <block type="variables_get" id="36">\n' +
                '                            <field name="VAR">b</field>\n' +
                '                          </block>\n' +
                '                        </value>\n' +
                '                      </block>\n' +
                '                    </value>\n' +
                '                    <statement name="DO">\n' +
                '                      <block type="variables_set" id="37">\n' +
                '                        <field name="VAR">vsota</field>\n' +
                '                        <value name="VALUE">\n' +
                '                          <block type="math_arithmetic" id="38">\n' +
                '                            <field name="OP">ADD</field>\n' +
                '                                <value name="A">\n' +
                '                                  <shadow type="math_number" id="39">\n' +
                '                                    <field name="NUM">1</field>\n' +
                '                                  </shadow>\n' +
                '                                  <block type="variables_get" id="40">\n' +
                '                                    <field name="VAR">vsota</field>\n' +
                '                                  </block>\n' +
                '                                </value>\n' +
                '                                <value name="B">\n' +
                '                                  <shadow type="math_number" id="41">\n' +
                '                                    <field name="NUM">1</field>\n' +
                '                                  </shadow>\n' +
                '                                  <block type="variables_get" id="42">\n' +
                '                                    <field name="VAR">a</field>\n' +
                '                                  </block>\n' +
                '                                </value>\n' +
                '                              </block>\n' +
                '                            </value>\n' +
                '                            <next>\n' +
                '                              <block type="variables_set" id="43">\n' +
                '                                <field name="VAR">a</field>\n' +
                '                                <value name="VALUE">\n' +
                '                                  <block type="math_arithmetic" id="44">\n' +
                '                                    <field name="OP">ADD</field>\n' +
                '                                    <value name="A">\n' +
                '                                      <shadow type="math_number" id="45">\n' +
                '                                        <field name="NUM">1</field>\n' +
                '                                      </shadow>\n' +
                '                                      <block type="variables_get" id="46">\n' +
                '                                        <field name="VAR">a</field>\n' +
                '                                      </block>\n' +
                '                                    </value>\n' +
                '                                    <value name="B">\n' +
                '                                      <shadow type="math_number" id="47">\n' +
                '                                        <field name="NUM">1</field>\n' +
                '                                      </shadow>\n' +
                '                                      <block type="math_number" id="48">\n' +
                '                                        <field name="NUM">1</field>\n' +
                '                                      </block>\n' +
                '                                    </value>\n' +
                '                                  </block>\n' +
                '                                </value>\n' +
                '                              </block>\n' +
                '                            </next>\n' +
                '                          </block>\n' +
                '                        </statement>\n' +
                '                        <next>\n' +
                '                          <block type="print" id="49">\n' +
                '                            <value name="PARAM_0">\n' +
                '                              <shadow type="text" id="50">\n' +
                '                                <field name="TEXT">abc</field>\n' +
                '                              </shadow>\n' +
                '                              <block type="variables_get" id="51">\n' +
                '                                <field name="VAR">vsota</field>\n' +
                '                              </block>\n' +
                '                            </value>\n' +
                '                          </block>\n' +
                '                        </next>\n' +
                '                      </block>\n' +
                '                    </next>\n' +
                '                  </block>\n' +
                '                </next>\n' +
                '              </block>\n' +
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
            wholeCategories: ["variables"],
            singleBlocks: ["text", "text_join", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"],
         }
      },
      maxInstructions: {easy: 0, medium: 0, hard: 30},
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
            input: "3\n5",
             output: "12"
         },
         {
            input: "12\n17",
            output: "87"
         },
         {
            input: "9\n34",
            output: "559"
         },
      ],
      medium: [
          {
              input: "5\n3",
              output: "12"
          },
          {
              input: "17\n12",
              output: "87"
          },
          {
              input: "34\n9",
              output: "559"
          },
       ],
      hard: [
          {
              input: "5\n3",
              output: "12"
          },
          {
              input: "17\n12",
              output: "87"
          },
          {
              input: "34\n9",
              output: "559"
          },
       ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
