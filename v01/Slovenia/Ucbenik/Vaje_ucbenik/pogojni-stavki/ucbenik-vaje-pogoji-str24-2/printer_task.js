function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
             printer: ["print", "readInteger", "readFloat"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables"],
            singleBlocks: { easy : ["text", "text_join", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_modulo", "logic_negate", "logic_boolean"],
                          },
         }
      },
       maxInstructions: { easy:0},
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
            input: "500\n10\n700\n12.5\n",
            output: "Druga se bolj splača.\n",
         },
         {
           input: "333\n7\n525\n9.9\n",
           output: "Druga se bolj splača.\n",
         },
         {
           input: "210\n2.1\n450\n2.3\n",
           output: "Druga se bolj splača.\n",
         },
         {
            input: "100\n5\n75\n3.75\n",
            output: "Obe sta enakovredni.\n",
         },
         {
           input: "1000\n22.75\n880\n23.75",
           output: "Prva se bolj splača.\n",
         },
         {
           input: "320\n8\n380\n9.5\n",
           output: "Obe sta enakovredni.\n",
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);