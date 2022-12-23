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
      maxInstructions: {easy: 0, medium: 0, hard: 0},
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
            input: "Dragi raziskovalci,\nupam, da ste se v džungli\nimeli lepo.",
            output: "Dragi raziskovalci, upam, da ste se v džungli imeli lepo.",
         },
       ],
       medium: [
         {
            input: "V čast mi je bilo,\nda sem vam lahko\n#sam\nrazkazal džunglo.\nTaborniki in raziskovalci\nmoramo v prihodnje še\n#veliko\nsodelovati.",
            output: "V čast mi je bilo, da sem vam lahko razkazal džunglo. Taborniki in raziskovalci moramo v prihodnje še sodelovati.",
         },
       ],
       hard : [
           {
               input: "Upam, da vam je uspelo\nraziskati vse kar ste si\n#sami\nzadali.\n%Želim vam še veliko uspehov\nv vašem nadaljnjem raziskovanju.\n%Vedite, da ste tukaj\n#pri\n#nas\nvedno dobrodošli.",
               output: "Upam, da vam je uspelo raziskati vse kar ste si zadali. \nŽelim vam še veliko uspehov v vašem nadaljnjem raziskovanju. \nVedite, da ste tukaj vedno dobrodošli.",
           },
       ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
