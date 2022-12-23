function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
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
            input: "7\n54\n6\n66\n17\n23\n43\n33",
             output: "54\n6\n66\n33\n",
          },
          {
              input: "13\n56\n33\n7\n27\n99\n126\n576\n44\n233\n123\n666\n665\n9",
              output: "33\n27\n99\n126\n576\n123\n666\n9\n",
          },
          {
              input: "11\n210\n207\n204\n201\n199\n30\n196\n193\n210\n207\n204",
              output: "210\n207\n204\n201\n30\n210\n207\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
