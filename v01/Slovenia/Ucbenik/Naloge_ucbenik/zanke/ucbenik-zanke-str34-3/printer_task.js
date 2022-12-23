function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      startingExample: {
         blockly: '<xml id="workspace" style="display: none">\n' +
             '  <block type="controls_for" id="10" x="10" y="10">\n' +
             '    <field name="VAR">n</field>\n' +
             '    <value name="FROM">\n' +
             '      <shadow type="math_number" id="11">\n' +
             '        <field name="NUM">1</field>\n' +
             '      </shadow>\n' +
             '      <block type="math_number" id="12">\n' +
             '        <field name="NUM">1</field>\n' +
             '      </block>\n' +
             '    </value>\n' +
             '    <value name="TO">\n' +
             '      <shadow type="math_number" id="13">\n' +
             '        <field name="NUM">10</field>\n' +
             '      </shadow>\n' +
             '      <block type="math_number" id="14">\n' +
             '        <field name="NUM">99</field>\n' +
             '      </block>\n' +
             '    </value>\n' +
             '    <value name="BY">\n' +
             '      <shadow type="math_number" id="15">\n' +
             '        <field name="NUM">1</field>\n' +
             '      </shadow>\n' +
             '    </value>\n' +
             '    <statement name="DO">\n' +
             '      <block type="variables_set" id="16">\n' +
             '        <field name="VAR">d</field>\n' +
             '        <value name="VALUE">\n' +
             '          <block type="math_number" id="17">\n' +
             '            <field name="NUM">0</field>\n' +
             '          </block>\n' +
             '        </value>\n' +
             '        <next>\n' +
             '          <block type="controls_for" id="18">\n' +
             '            <field name="VAR">delitelj</field>\n' +
             '            <value name="FROM">\n' +
             '              <shadow type="math_number" id="19">\n' +
             '                <field name="NUM">1</field>\n' +
             '              </shadow>\n' +
             '              <block type="math_number" id="20">\n' +
             '                <field name="NUM">1</field>\n' +
             '              </block>\n' +
             '            </value>\n' +
             '            <value name="TO">\n' +
             '              <shadow type="math_number" id="21">\n' +
             '                <field name="NUM">10</field>\n' +
             '              </shadow>\n' +
             '              <block type="variables_get" id="22">\n' +
             '                <field name="VAR">n</field>\n' +
             '              </block>\n' +
             '            </value>\n' +
             '            <value name="BY">\n' +
             '              <shadow type="math_number" id="23">\n' +
             '                <field name="NUM">1</field>\n' +
             '              </shadow>\n' +
             '            </value>\n' +
             '            <statement name="DO">\n' +
             '              <block type="controls_if" id="24">\n' +
             '                <value name="IF0">\n' +
             '                  <block type="logic_compare" id="25">\n' +
             '                    <field name="OP">GT</field>\n' +
             '                    <value name="A">\n' +
             '                      <block type="math_modulo" id="26" collapsed="true">\n' +
             '                        <value name="DIVIDEND">\n' +
             '                          <shadow type="math_number" id="27">\n' +
             '                            <field name="NUM">64</field>\n' +
             '                          </shadow>\n' +
             '                          <block type="variables_get" id="28">\n' +
             '                            <field name="VAR">n</field>\n' +
             '                          </block>\n' +
             '                        </value>\n' +
             '                        <value name="DIVISOR">\n' +
             '                          <shadow type="math_number" id="29">\n' +
             '                            <field name="NUM">10</field>\n' +
             '                          </shadow>\n' +
             '                          <block type="variables_get" id="30">\n' +
             '                            <field name="VAR">delitelj</field>\n' +
             '                          </block>\n' +
             '                        </value>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                    <value name="B">\n' +
             '                      <block type="math_number" id="31">\n' +
             '                        <field name="NUM">0</field>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                  </block>\n' +
             '                </value>\n' +
             '                <statement name="DO0">\n' +
             '                  <block type="variables_set" id="32">\n' +
             '                    <field name="VAR">d</field>\n' +
             '                    <value name="VALUE">\n' +
             '                      <block type="math_arithmetic" id="33" collapsed="true">\n' +
             '                        <field name="OP">ADD</field>\n' +
             '                        <value name="A">\n' +
             '                          <shadow type="math_number" id="34">\n' +
             '                            <field name="NUM">1</field>\n' +
             '                          </shadow>\n' +
             '                          <block type="variables_get" id="35">\n' +
             '                            <field name="VAR">d</field>\n' +
             '                          </block>\n' +
             '                        </value>\n' +
             '                        <value name="B">\n' +
             '                          <shadow type="math_number" id="36">\n' +
             '                            <field name="NUM">1</field>\n' +
             '                          </shadow>\n' +
             '                          <block type="math_number" id="37">\n' +
             '                            <field name="NUM">1</field>\n' +
             '                          </block>\n' +
             '                        </value>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                  </block>\n' +
             '                </statement>\n' +
             '              </block>\n' +
             '            </statement>\n' +
             '            <next>\n' +
             '              <block type="print" id="38">\n' +
             '                <value name="PARAM_0">\n' +
             '                  <block type="text_join" id="40">\n' +
             '                    <mutation items="4"></mutation>\n' +
             '                    <value name="ADD0">\n' +
             '                      <block type="variables_get" id="41">\n' +
             '                        <field name="VAR">n</field>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                    <value name="ADD1">\n' +
             '                      <block type="text" id="42">\n' +
             '                        <field name="TEXT"> ima </field>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                    <value name="ADD2">\n' +
             '                      <block type="variables_get" id="43">\n' +
             '                        <field name="VAR">d</field>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                    <value name="ADD3">\n' +
             '                      <block type="text" id="44">\n' +
             '                        <field name="TEXT"> deliteljev.</field>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                  </block>\n' +
             '                </value>\n' +
             '              </block>\n' +
             '            </next>\n' +
             '          </block>\n' +
             '        </next>\n' +
             '      </block>\n' +
             '    </statement>\n' +
             '  </block>\n' +
             '</xml>'
      },
      example: {
         blockly: '<xml id="solution" style="display: none">\n' +
             '  <block type="controls_for" id="10" x="10" y="10">\n' +
             '    <field name="VAR">n</field>\n' +
             '    <value name="FROM">\n' +
             '      <shadow type="math_number" id="11">\n' +
             '        <field name="NUM">1</field>\n' +
             '      </shadow>\n' +
             '      <block type="math_number" id="12">\n' +
             '        <field name="NUM">1</field>\n' +
             '      </block>\n' +
             '    </value>\n' +
             '    <value name="TO">\n' +
             '      <shadow type="math_number" id="13">\n' +
             '        <field name="NUM">10</field>\n' +
             '      </shadow>\n' +
             '      <block type="math_number" id="14">\n' +
             '        <field name="NUM">100</field>\n' +
             '      </block>\n' +
             '    </value>\n' +
             '    <value name="BY">\n' +
             '      <shadow type="math_number" id="15">\n' +
             '        <field name="NUM">1</field>\n' +
             '      </shadow>\n' +
             '    </value>\n' +
             '    <statement name="DO">\n' +
             '      <block type="variables_set" id="16">\n' +
             '        <field name="VAR">d</field>\n' +
             '        <value name="VALUE">\n' +
             '          <block type="math_number" id="17">\n' +
             '            <field name="NUM">0</field>\n' +
             '          </block>\n' +
             '        </value>\n' +
             '        <next>\n' +
             '          <block type="controls_for" id="18">\n' +
             '            <field name="VAR">delitelj</field>\n' +
             '            <value name="FROM">\n' +
             '              <shadow type="math_number" id="19">\n' +
             '                <field name="NUM">1</field>\n' +
             '              </shadow>\n' +
             '              <block type="math_number" id="20">\n' +
             '                <field name="NUM">1</field>\n' +
             '              </block>\n' +
             '            </value>\n' +
             '            <value name="TO">\n' +
             '              <shadow type="math_number" id="21">\n' +
             '                <field name="NUM">10</field>\n' +
             '              </shadow>\n' +
             '              <block type="math_arithmetic" id="22" collapsed="true">\n' +
             '                <field name="OP">ADD</field>\n' +
             '                <value name="A">\n' +
             '                  <shadow type="math_number" id="23">\n' +
             '                    <field name="NUM">1</field>\n' +
             '                  </shadow>\n' +
             '                  <block type="variables_get" id="24">\n' +
             '                    <field name="VAR">n</field>\n' +
             '                  </block>\n' +
             '                </value>\n' +
             '                <value name="B">\n' +
             '                  <shadow type="math_number" id="25">\n' +
             '                    <field name="NUM">1</field>\n' +
             '                  </shadow>\n' +
             '                  <block type="math_number" id="26">\n' +
             '                    <field name="NUM">1</field>\n' +
             '                  </block>\n' +
             '                </value>\n' +
             '              </block>\n' +
             '            </value>\n' +
             '            <value name="BY">\n' +
             '              <shadow type="math_number" id="27">\n' +
             '                <field name="NUM">1</field>\n' +
             '              </shadow>\n' +
             '            </value>\n' +
             '            <statement name="DO">\n' +
             '              <block type="controls_if" id="28">\n' +
             '                <value name="IF0">\n' +
             '                  <block type="logic_compare" id="29">\n' +
             '                    <field name="OP">EQ</field>\n' +
             '                    <value name="A">\n' +
             '                      <block type="math_modulo" id="30" collapsed="true">\n' +
             '                        <value name="DIVIDEND">\n' +
             '                          <shadow type="math_number" id="31">\n' +
             '                            <field name="NUM">64</field>\n' +
             '                          </shadow>\n' +
             '                          <block type="variables_get" id="32">\n' +
             '                            <field name="VAR">n</field>\n' +
             '                          </block>\n' +
             '                        </value>\n' +
             '                        <value name="DIVISOR">\n' +
             '                          <shadow type="math_number" id="33">\n' +
             '                            <field name="NUM">10</field>\n' +
             '                          </shadow>\n' +
             '                          <block type="variables_get" id="34">\n' +
             '                            <field name="VAR">delitelj</field>\n' +
             '                          </block>\n' +
             '                        </value>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                    <value name="B">\n' +
             '                      <block type="math_number" id="35">\n' +
             '                        <field name="NUM">0</field>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                  </block>\n' +
             '                </value>\n' +
             '                <statement name="DO0">\n' +
             '                  <block type="variables_set" id="36">\n' +
             '                    <field name="VAR">d</field>\n' +
             '                    <value name="VALUE">\n' +
             '                      <block type="math_arithmetic" id="37" collapsed="true">\n' +
             '                        <field name="OP">ADD</field>\n' +
             '                        <value name="A">\n' +
             '                          <shadow type="math_number" id="38">\n' +
             '                            <field name="NUM">1</field>\n' +
             '                          </shadow>\n' +
             '                          <block type="variables_get" id="39">\n' +
             '                            <field name="VAR">d</field>\n' +
             '                          </block>\n' +
             '                        </value>\n' +
             '                        <value name="B">\n' +
             '                          <shadow type="math_number" id="40">\n' +
             '                            <field name="NUM">1</field>\n' +
             '                          </shadow>\n' +
             '                          <block type="math_number" id="41">\n' +
             '                            <field name="NUM">1</field>\n' +
             '                          </block>\n' +
             '                        </value>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                  </block>\n' +
             '                </statement>\n' +
             '              </block>\n' +
             '            </statement>\n' +
             '            <next>\n' +
             '              <block type="print" id="42">\n' +
             '                <value name="PARAM_0">\n' +
             '                  <shadow type="text" id="43">\n' +
             '                    <field name="TEXT">abc</field>\n' +
             '                  </shadow>\n' +
             '                  <block type="text_join" id="44">\n' +
             '                    <mutation items="4"></mutation>\n' +
             '                    <value name="ADD0">\n' +
             '                      <block type="variables_get" id="45">\n' +
             '                        <field name="VAR">n</field>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                    <value name="ADD1">\n' +
             '                      <block type="text" id="46">\n' +
             '                        <field name="TEXT"> ima </field>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                    <value name="ADD2">\n' +
             '                      <block type="variables_get" id="47">\n' +
             '                        <field name="VAR">d</field>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                    <value name="ADD3">\n' +
             '                      <block type="text" id="48">\n' +
             '                        <field name="TEXT"> deliteljev.</field>\n' +
             '                      </block>\n' +
             '                    </value>\n' +
             '                  </block>\n' +
             '                </value>\n' +
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
             printer: ["print", "read"],
         },
          // Block math_floor_divison not avalible
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables"],
            singleBlocks: { easy : ["text", "text_join", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"],
                            },
         }
      },
      maxInstructions: {easy:100},
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
             output: "1 ima 1 deliteljev.\n2 ima 2 deliteljev.\n3 ima 2 deliteljev.\n4 ima 3 deliteljev.\n5 ima 2 deliteljev.\n6 ima 4 deliteljev.\n7 ima 2 deliteljev.\n8 ima 4 deliteljev.\n9 ima 3 deliteljev.\n10 ima 4 deliteljev.\n11 ima 2 deliteljev.\n12 ima 6 deliteljev.\n13 ima 2 deliteljev.\n14 ima 4 deliteljev.\n15 ima 4 deliteljev.\n16 ima 5 deliteljev.\n17 ima 2 deliteljev.\n18 ima 6 deliteljev.\n19 ima 2 deliteljev.\n20 ima 6 deliteljev.\n21 ima 4 deliteljev.\n22 ima 4 deliteljev.\n23 ima 2 deliteljev.\n24 ima 8 deliteljev.\n25 ima 3 deliteljev.\n26 ima 4 deliteljev.\n27 ima 4 deliteljev.\n28 ima 6 deliteljev.\n29 ima 2 deliteljev.\n30 ima 8 deliteljev.\n31 ima 2 deliteljev.\n32 ima 6 deliteljev.\n33 ima 4 deliteljev.\n34 ima 4 deliteljev.\n35 ima 4 deliteljev.\n36 ima 9 deliteljev.\n37 ima 2 deliteljev.\n38 ima 4 deliteljev.\n39 ima 4 deliteljev.\n40 ima 8 deliteljev.\n41 ima 2 deliteljev.\n42 ima 8 deliteljev.\n43 ima 2 deliteljev.\n44 ima 6 deliteljev.\n45 ima 6 deliteljev.\n46 ima 4 deliteljev.\n47 ima 2 deliteljev.\n48 ima 10 deliteljev.\n49 ima 3 deliteljev.\n50 ima 6 deliteljev.\n51 ima 4 deliteljev.\n52 ima 6 deliteljev.\n53 ima 2 deliteljev.\n54 ima 8 deliteljev.\n55 ima 4 deliteljev.\n56 ima 8 deliteljev.\n57 ima 4 deliteljev.\n58 ima 4 deliteljev.\n59 ima 2 deliteljev.\n60 ima 12 deliteljev.\n61 ima 2 deliteljev.\n62 ima 4 deliteljev.\n63 ima 6 deliteljev.\n64 ima 7 deliteljev.\n65 ima 4 deliteljev.\n66 ima 8 deliteljev.\n67 ima 2 deliteljev.\n68 ima 6 deliteljev.\n69 ima 4 deliteljev.\n70 ima 8 deliteljev.\n71 ima 2 deliteljev.\n72 ima 12 deliteljev.\n73 ima 2 deliteljev.\n74 ima 4 deliteljev.\n75 ima 6 deliteljev.\n76 ima 6 deliteljev.\n77 ima 4 deliteljev.\n78 ima 8 deliteljev.\n79 ima 2 deliteljev.\n80 ima 10 deliteljev.\n81 ima 5 deliteljev.\n82 ima 4 deliteljev.\n83 ima 2 deliteljev.\n84 ima 12 deliteljev.\n85 ima 4 deliteljev.\n86 ima 4 deliteljev.\n87 ima 4 deliteljev.\n88 ima 8 deliteljev.\n89 ima 2 deliteljev.\n90 ima 12 deliteljev.\n91 ima 4 deliteljev.\n92 ima 6 deliteljev.\n93 ima 4 deliteljev.\n94 ima 4 deliteljev.\n95 ima 4 deliteljev.\n96 ima 12 deliteljev.\n97 ima 2 deliteljev.\n98 ima 6 deliteljev.\n99 ima 6 deliteljev.\n100 ima 9 deliteljev.",
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
