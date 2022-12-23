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
            singleBlocks: { easy : ["text", "text_join", "controls_repeat_ext", "controls_if", "controls_if_else"],
                            medium : ["text", "text_join", "text_append", "text_length", "text_getSubstring", "text_charAt", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"],
                            hard : ["text", "text_join", "text_append", "text_length", "text_getSubstring", "text_charAt", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"]
                          },
         }
      },
      maxInstructions: {easy: 0, medium: 0, hard: 10},
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
            input: "Pozdravljeni,\ntaborniki.\nMoje\nime\nje\nTine.",
            output: "Pozdravljeni, taborniki. Moje ime je Tine.",
         },
       ],
       medium: [
         {
            input: "Danes ste se na\n#taborniškem\ntekmovanju\n#vsi\nodlično izkazali.",
            output: "Danes ste se na tekmovanju odlično izkazali.",
         },
       ],
       hard : [
           {
               input: "Čas za razglasitev\n#sledečih\nrezultatov:\n%tretje mesto\n#aplavz\nje osvojila taborniška skupina Ogenj\n%drugo mesto so osvojili taborniška skupina Zelenčki\n%zmaga pa pripada taborniški skupini Medvedi.",
               output: "Čas za razglasitev rezultatov:\ntretje mesto je osvojila taborniška skupina Ogenj\ndrugo mesto so osvojili taborniška skupina Zelenčki\nzmaga pa pripada taborniški skupini Medvedi.",
           },
       ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
