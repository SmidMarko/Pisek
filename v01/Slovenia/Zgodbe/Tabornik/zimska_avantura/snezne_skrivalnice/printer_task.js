function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      startingExample: {
         blockly: '<xml id="workspace2" style="display: none">\n' +
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
             '        <field name="NUM">9</field>\n' +
             '      </shadow>\n' +
             '      <block type="math_number" id="14">\n' +
             '        <field name="NUM">9</field>\n' +
             '      </block>\n' +
             '    </value>\n' +
             '    <value name="BY">\n' +
             '      <shadow type="math_number" id="15">\n' +
             '        <field name="NUM">1</field>\n' +
             '      </shadow>\n' +
             '    </value>\n' +
             '    <statement name="DO">\n' +
             '      <block type="print" id="16">\n' +
             '        <value name="PARAM_0">\n' +
             '          <block type="variables_get" id="18">\n' +
             '            <field name="VAR">n</field>\n' +
             '          </block>\n' +
             '        </value>\n' +
             '      </block>\n' +
             '    </statement>\n' +
             '  </block>\n' +
             '</xml>'
      },
      example: {
         blockly: '<xml id="solution2" style="display: none">\n' +
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
             '        <field name="NUM">9</field>\n' +
             '      </shadow>\n' +
             '      <block type="math_number" id="14">\n' +
             '        <field name="NUM">10</field>\n' +
             '      </block>\n' +
             '    </value>\n' +
             '    <value name="BY">\n' +
             '      <shadow type="math_number" id="15">\n' +
             '        <field name="NUM">1</field>\n' +
             '      </shadow>\n' +
             '    </value>\n' +
             '    <statement name="DO">\n' +
             '      <block type="print" id="16">\n' +
             '        <value name="PARAM_0">\n' +
             '          <block type="variables_get" id="18">\n' +
             '            <field name="VAR">n</field>\n' +
             '          </block>\n' +
             '        </value>\n' +
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
            singleBlocks: { easy : ["text", "text_join", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"], medium: ["text", "text_join", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"], hard: ["text", "text_join", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"],
                            },
         }
      },
      maxInstructions: {easy: 0, medium: 0, hard: 14},
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
             output: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20"
         },
      ],
      medium: [
         {
            input:"",
            output: "3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15"
         },
      ],
      hard: [
         {
            input:"",
            output: "15\n18\n21\n24"
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
