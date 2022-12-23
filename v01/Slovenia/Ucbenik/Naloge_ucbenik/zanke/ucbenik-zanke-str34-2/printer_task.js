function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
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
                            medium : ["text", "text_join", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"],
                            hard : ["text", "text_join", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"]
            },
         }
      },
      maxInstructions: {easy: 0, medium: 0, hard: 8},
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
               input: "beseda\n",
               output: "beseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\nbeseda\n",
           },
           {
               input: "niz\n",
               output: "niz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\nniz\n",
           },
           {
               input: "Banana\n",
               output: "Banana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\\nnBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\\nnBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\nBanana\\nnBanana\n",
           },
           {
               input: "00101\n",
               output: "00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n0010\n1\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00\n101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n00101\n",
           },
       ],
       medium: [
           {
               input: "5\nBanana\n",
               output: "Banana\nBanana\nBanana\nBanana\nBanana\n",
           },
           {
               input: "3\nJabolko\n",
               output: "Jabolko\nJabolko\nJabolko\n",
           },
           {
               input: "6\nPesek\n",
               output: "Pesek\nPesek\nPesek\nPesek\nPesek\nPesek\n",
           },
       ],
       hard: [
           {
               input: "5\nBanana\n",
               output: "Banana\nBanana\nBanana\nBanana\nBanana\n",
           },
           {
               input: "3\nJabolko\n",
               output: "Jabolko\nJabolko\nJabolko\n",
           },
           {
               input: "6\nPesek\n",
               output: "Pesek\nPesek\nPesek\nPesek\nPesek\nPesek\n",
           },
       ],

   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
