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
            wholeCategories: [],
            singleBlocks: []
         },
	  variables : ["Celo število"]
      },
      maxInstructions: {easy:8, medium:16, hard: 16},
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
            input: "2\n",
            output: "2\n",
         },
         {
           input: "17\n",
           output: "17\n",
         },
         {
           input: "102\n",
           output: "102\n",
         },
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null);
   
