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
            singleBlocks: { easy : ["logic_compare","controls_if_else",  "controls_repeat_ext", "controls_if", "math_number", "math_arithmetic", "math_single", "text"],
                            },
         }
      },
      maxInstructions: 0,
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
              input: "12\n5\n3\n13\n15\n9\n2\n2\n6\n7",
              output: "NE\n",
          },
          {
              input: "22\n12\n22\n13\n22\n15\n22\n1\n3\n4",
              output: "DA\n",
          },
          {
              input: "1\n2\n3\n4\n5\n6\n7\n2\n1\n5",
              output: "NE\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
