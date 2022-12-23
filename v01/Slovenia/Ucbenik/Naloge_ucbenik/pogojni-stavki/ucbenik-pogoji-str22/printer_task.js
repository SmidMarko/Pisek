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
            singleBlocks: { easy : ["text", "text_join", "text_prompt_ext", "controls_if", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_modulo", "logic_negate", "logic_boolean"],
                            medium : ["text", "text_join", "text_prompt_ext", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_modulo", "logic_negate", "logic_boolean"],
                            hard : ["text", "text_join", "text_prompt_ext", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_modulo", "logic_negate", "logic_boolean"]
                          },
         }
      },
      maxInstructions: {easy:8, medium:22, hard: 24},
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
            output: "DA\n",
         },
      ],
      medium: [
         {
            input: "",
            output: "manjše\n",
         },
      ],
      hard: [
          {
            input: "",
            output: "prvo\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
