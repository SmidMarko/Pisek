function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      startingExample: {
          easy: {
              blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="HF@54/TxNs0bkV/LTHFG" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="25"><field name="VAR">n</field><value name="VALUE"><block type="readInteger" id="26"></block></value><next><block type="print" id="55"><value name="PARAM_0"><block type="procedures_callreturn" id="cbb)Y[_=ua+kGZ/z]l6c"><mutation name="prestejStevila"></mutation></block></value></block></next></block></next></block><block type="procedures_defreturn" id="YwuWRaNWug*{ysTJ|5D`" x="16" y="116"><field name="NAME">prestejStevila</field><comment pinned="false" h="80" w="160">Opiši to funkcijo...</comment></block></xml>'
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
              input: "50\n",
              output: "16\n",
          },
          {
              input: "100\n",
              output: "33\n",
          },
          {
              input: "300\n",
              output: "100\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
