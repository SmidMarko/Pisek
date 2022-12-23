function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
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
      maxInstructions: {easy: 0, medium: 0, hard: 50},
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
            input: "plezalec",
            output: "3",
         },
       ],
       medium: [
         {
            input: "telefon\nračunalnik\nsteklenica\nljubezen",
            output: "telefon",
         },
       ],
       hard : [
           {
             input: "telefon\nračunalnik\nsteklenica\nljubezen",
             output: "telefon",
           },
       ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
