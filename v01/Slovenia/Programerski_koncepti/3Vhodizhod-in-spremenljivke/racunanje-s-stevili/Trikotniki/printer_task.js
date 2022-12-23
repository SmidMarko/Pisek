function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
             printer: ["print", "readInteger"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: {easy : [], medium : [], hard : []},
            singleBlocks: {easy:["math_arithmetic"],medium:["controls_if", "controls_if_else", "logic_compare", "math_number", "text"],hard:["controls_if_else", "logic_compare", "logic_operation", "math_number", "text"],},
         },
	  variables : {easy : ["1. kot", "2. kot", "3. kot"], medium : ["1. kot", "2. kot", "3. kot"], hard : ["1. kot", "2. kot", "3. kot"]}
      },
      maxInstructions: {easy:16, medium:40, hard: 30},
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
            input: "20\n60\n",
            output: "100\n",
         },
         {
           input: "65\n72\n",
           output: "43\n",
         },
         {
           input: "17\n69\n",
           output: "94\n",
         },
      ],
      medium: [
         {
            input: "76\n34\n70\n",
            output: "Kot je oster.\nKot je oster.\nKot je oster.\n",
          },
          {
            input: "50\n54\n76\n",
            output: "Kot je oster.\nKot je oster.\nKot je oster.\n",
          },
          {
            input: "100\n43\n37\n",
            output: "Kot je top.\nKot je oster.\nKot je oster.\n",
          },
      ],
      hard: [
          {
            input: "67\n32\n90\n",
            output: "Trikotnik je pravokoten.\n",
         },
         {
           input: "17\n93\n70\n",
           output: "Trikotnik ni pravokoten.\n",
         },
         {
           input: "102\n44\n34",
           output: "Trikotnik ni pravokoten.\n",
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);