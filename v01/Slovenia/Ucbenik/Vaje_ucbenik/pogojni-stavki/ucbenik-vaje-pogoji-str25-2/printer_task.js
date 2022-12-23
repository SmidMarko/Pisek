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
            input: "25\n",
            output: "Število osmoljencev: 4\nŠtevilo srečnežev: 9\n",
          },
          {
            input: "14\n",
            output: "Število osmoljencev: 2\nŠtevilo srečnežev: 5\n",
          },
          {
            input: "256\n",
            output: "Število osmoljencev: 42\nŠtevilo srečnežev: 85\n",
          },
          {
            input: "47\n",
            output: "Število osmoljencev: 7\nŠtevilo srečnežev: 16\n",
          },
          {
            input: "19\n",
            output: "Število osmoljencev: 3\nŠtevilo srečnežev: 7\n",
          },
          {
            input: "31\n",
            output: "Število osmoljencev: 5\nŠtevilo srečnežev: 11\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
