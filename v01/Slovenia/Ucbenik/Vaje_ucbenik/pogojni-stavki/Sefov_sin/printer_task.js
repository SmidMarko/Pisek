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
            singleBlocks: { easy : ["text", "text_join", "controls_if", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_modulo", "logic_negate", "logic_boolean"],
                            medium : ["text", "text_join", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_modulo", "logic_negate", "logic_boolean"],
                            hard : ["text", "text_join", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_modulo", "logic_negate", "logic_boolean"]
                          },
         }
      },
      maxInstructions: {easy:20, medium:22, hard: 24},
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
            output: "DA\n",
         },
         {
           input: "33\n",
           output: "",
         },
         {
           input: "12\n",
           output: "",
         },
         {
            input: "123\n",
            output: "DA\n",
         },
         {
           input: "133\n",
           output: "DA\n",
         },
         {
           input: "32\n",
           output: "",
         },
      ],
      medium: [
         {
            input: "213\n",
            output: "večje\n",
         },
         {
           input: "2\n",
           output: "manjše\n",
         },
         {
           input: "32\n",
           output: "manjše\n",
         },
         {
            input: "43\n",
            output: "večje\n",
         },
         {
           input: "41\n",
           output: "manjše\n",
         },
         {
           input: "42\n",
           output: "enako\n",
         },
      ],
      hard: [
          {
            input: "13\n14\n",
            output: "drugo\n",
          },
          {
            input: "32\n1\n",
            output: "prvo\n",
          },
          {
            input: "141\n141\n",
            output: "enaki\n",
          },
          {
            input: "76\n11\n",
            output: "prvo\n",
          },
          {
            input: "23\n23\n",
            output: "enaki\n",
          },
          {
            input: "11\n31\n",
            output: "drugo\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
