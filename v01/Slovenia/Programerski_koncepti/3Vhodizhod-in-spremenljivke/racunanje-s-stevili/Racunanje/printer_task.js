function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      startingExample:{
          easy: {
                blockly: '<xml id="workspace" style="display:none">\n' +
                    '  <block type="variables_set" id="1" x="200" y="100">\n' +
                    '    <field name="VAR" id="2">Celo 1</field>\n' +
                    '    <value name="VALUE">\n' +
                    '      <block type="readInteger" id="3"></block>\n' +
                    '    </value>\n' +
                    '    <next>\n' +
                    '      <block type="variables_set" id="4">\n' +
                    '        <field name="VAR" id="5">Celo 2</field>\n' +
                    '        <value name="VALUE">\n' +
                    '          <block type="readInteger" id="6"></block>\n' +
                    '        </value>\n' +
                    '        <next>\n' +
                    '          <block type="print" id="7">\n' +
                    '            <value name="PARAM_0">\n' +
                    '              <shadow type="math_number" id="8">\n' +
                    '                <field name="NUM">10</field>\n' +
                    '              </shadow>\n' +
                    '            </value>\n' +
                    '          </block>\n' +
                    '        </next>\n' +
                    '      </block>\n' +
                    '    </next>\n' +
                    '  </block>\n' +
                    '</xml>'
          },
          medium: {
              blockly: '<xml id="workspace" style="display:none">\n' +
                  '  <block type="variables_set" id="1" x="200" y="100">\n' +
                  '    <field name="VAR" id="2">Celo 2</field>\n' +
                  '    <value name="VALUE">\n' +
                  '      <block type="readInteger" id="3"></block>\n' +
                  '    </value>\n' +
                  '    <next>\n' +
                  '      <block type="variables_set" id="4">\n' +
                  '        <field name="VAR" id="5">Rezultat</field>\n' +
                  '        <value name="VALUE">\n' +
                  '          <block type="readInteger" id="6"></block>\n' +
                  '        </value>\n' +
                  '        <next>\n' +
                  '          <block type="print" id="7">\n' +
                  '            <value name="PARAM_0">\n' +
                  '              <shadow type="math_number" id="8">\n' +
                  '                <field name="NUM">10</field>\n' +
                  '              </shadow>\n' +
                  '              <block type="math_arithmetic" id="9">\n' +
                  '                <field name="OP">ADD</field>\n' +
                  '                 <value name="A">\n' +
                  '                   <block type="variables_get" id="10">\n' +
                  '                     <field name="VAR">Celo 1</field>\n' +
                  '                   </block>\n' +
                  '                 </value>\n' +
                  '                 <value name="B">\n' +
                  '                   <block type="variables_get" id="11">\n' +
                  '                     <field name="VAR">Celo 2</field>\n' +
                  '                   </block>\n' +
                  '                 </value>\n' +
                  '              </block>\n' +
                  '            </value>\n' +
                  '          </block>\n' +
                  '        </next>\n' +
                  '      </block>\n' +
                  '    </next>\n' +
                  '  </block>\n' +
                  '</xml>'
          },
          hard: {
              blockly: '<xml id="workspace" style="display:none">\n' +
                  '  <block type="variables_set" id="1" x="200" y="100">\n' +
                  '    <field name="VAR" id="2">Celo 1</field>\n' +
                  '    <value name="VALUE">\n' +
                  '      <block type="readInteger" id="3"></block>\n' +
                  '    </value>\n' +
                  '    <next>\n' +
                  '      <block type="variables_set" id="4">\n' +
                  '        <field name="VAR" id="5">Celo 2</field>\n' +
                  '        <value name="VALUE">\n' +
                  '          <block type="readInteger" id="6"></block>\n' +
                  '        </value>\n' +
                  '        <next>\n' +
                  '          <block type="variables_set" id="7">\n' +
                  '            <field name="VAR" id="8">Celo 3</field>\n' +
                  '            <value name="VALUE">\n' +
                  '              <block type="readInteger" id="9"></block>\n' +
                  '            </value>\n' +
                  '            <next>\n' +
                  '              <block type="variables_set" id="10">\n' +
                  '                <field name="VAR">Rezultat</field>\n' +
                  '                <value name="VALUE">\n' +
                  '                  <block type="math_arithmetic" id="11">\n' +
                  '                    <field name="OP">MINUS</field>\n' +
                  '                    <value name="A">\n' +
                  '                      <block type="variables_get" id="12">\n' +
                  '                        <field name="VAR">Celo 1</field>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <value name="B">\n' +
                  '                      <block type="variables_get" id="13">\n' +
                  '                        <field name="VAR">Celo 3</field>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                  </block>\n' +
                  '                </value>\n' +
                  '                <next>\n' +
                  '                  <block type="variables_set" id="14">\n' +
                  '                    <field name="VAR">Rezultat</field>\n' +
                  '                    <value name="VALUE">\n' +
                  '                      <block type="math_arithmetic" id="15">\n' +
                  '                        <field name="OP">DIVIDE</field>\n' +
                  '                        <value name="A">\n' +
                  '                          <block type="variables_get" id="16">\n' +
                  '                            <field name="VAR">Rezultat</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                        <value name="B">\n' +
                  '                          <block type="variables_get" id="17">\n' +
                  '                            <field name="VAR">Celo 3</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
                  '                      </block>\n' +
                  '                    </value>\n' +
                  '                    <next>\n' +
                  '                      <block type="print" id="18">\n' +
                  '                        <value name="PARAM_0">\n' +
                  '                          <shadow type="math_number" id="19">\n' +
                  '                            <value name="NUM">10</value>\n' +
                  '                          </shadow>\n' +
                  '                          <block type="variables_get" id="20">\n' +
                  '                            <field name="VAR">Rezultat</field>\n' +
                  '                          </block>\n' +
                  '                        </value>\n' +
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
          }
      },
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
             printer: ["print", "readInteger"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {easy : [], medium : [], hard : []},
            singleBlocks: {easy:["math_arithmetic"],medium:["math_arithmetic"],hard:["math_arithmetic"],},
         },
	  variables : {easy : ["Celo 1", "Celo 2", "Rezultat"], medium : ["Celo 1", "Celo 2", "Rezultat"], hard : ["Celo 1", "Celo 2", "Celo 3", "Rezultat"]}
      },
      maxInstructions: {easy:8, medium:16, hard: 16},
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
            input: "2\n3\n",
            output: "5\n",
         },
         {
           input: "4\n17\n",
           output: "21\n",
         },
         {
           input: "55\n102\n",
           output: "157\n",
         },
      ],
      medium: [
         {
            input: "4\n2\n",
            output: "8\n",
         },
         {
           input: "14\n14\n",
           output: "196\n",
         },
         {
           input: "35\n2\n",
           output: "70\n",
         },
      ],
      hard: [
          {
            input: "12\n2\n5\n",
            output: "36\n",
          },
          {
            input: "23\n7\n9\n",
            output: "46\n",
          },
          {
            input: "28\n5\n8\n",
            output: "84\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
