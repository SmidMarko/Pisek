function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
             printer: {
				easy: ["print"],
				medium: ["print", "read"],
				hard: ["print", "read"],
			 },
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: ["text"],
         },
      },
      maxInstructions: 2,
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
            output: "Pozdravljen, Houston!\n",
         }
      ],
      medium: [
         {
            input: "Pozdravljen, robot!",
            output: "Pozdravljen, robot!\n",
         },
         {
            input: "Test: 1 2 3!",
            output: "Test: 1 2 3!\n",
         },
         {
            input: "Test: a B c D!",
            output: "Test: a B c D!\n",
         },
      ]
   };

   initBlocklySubTask(subTask);
   displayHelper.thresholdEasy = 5000;
   displayHelper.thresholdMedium = 10000;
}

initWrapper(initTask, ["easy", "medium"], null);
   
