function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      startingExample: {
          easy: {
              blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="9`5_*`av)JpmGN5kqj4@" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="34"><field name="VAR">t</field><value name="VALUE"><block type="lists_create_with" id="35" inline="true"><mutation items="7"></mutation><value name="ADD0"><block type="readInteger" id="36"></block></value><value name="ADD1"><block type="readInteger" id="37"></block></value><value name="ADD2"><block type="readInteger" id="38"></block></value><value name="ADD3"><block type="readInteger" id="39"></block></value><value name="ADD4"><block type="readInteger" id="40"></block></value><value name="ADD5"><block type="readInteger" id="41"></block></value><value name="ADD6"><block type="readInteger" id="42"></block></value></block></value><next><block type="variables_set" id="43"><field name="VAR">a</field><value name="VALUE"><block type="readInteger" id="44"></block></value><next><block type="print" id="45"><value name="PARAM_0"><block type="procedures_callreturn" id="46" inline="true"><mutation name="KolikoVecjih"><arg name="a"></arg><arg name="x"></arg></mutation><value name="ARG0"><block type="variables_get" id="47"><field name="VAR">t</field></block></value><value name="ARG1"><block type="variables_get" id="fy?YfN;4:LoV`BuwZ1i`"><field name="VAR">a</field></block></value></block></value></block></next></block></next></block></next></block><block type="procedures_defreturn" id="10" x="13" y="148"><mutation><arg name="a"></arg><arg name="x"></arg></mutation><field name="NAME">KolikoVecjih</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment></block></xml>'
            }
      },
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
             printer: ["print", "readInteger"],
         },
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
              input: "1\n2\n3\n4\n5\n6\n3",
              output: "3\n",
          },
          {
              input: "6\n8\n7\n5\n2\n3\n2",
              output: "5\n",
          },
          {
              input: "3\n5\n6\n4\n5\n2\n8",
              output: "0\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
