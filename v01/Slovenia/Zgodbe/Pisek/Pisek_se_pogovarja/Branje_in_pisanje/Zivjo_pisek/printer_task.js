function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
             printer: ["print", "read"],
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: [],
            singleBlocks: {easy:["text_changeCase_noShadow"],medium:["text_changeCase_noShadow", "text_length_noShadow"],hard:["text", "text_join"],},
         },
      },
      maxInstructions: {easy:4, medium:7, hard: 7},
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
            input: "Živijo, Pišek!\n",
            output: "ŽIVIJO, PIŠEK!\n",
         },
         {
           input: "Živijo, Blockly!\n",
           output: "ŽIVIJO, BLOCKLY!\n",
         },
         {
           input: "UčImO se Blockly!\n",
           output: "UČIMO SE BLOCKLY!\n",
         },
      ],
      medium: [
         {
            input: "Živijo, Pišek!\n",
            output: "14\n",
         },
         {
           input: "Učimo se programirati!\n",
           output: "22\n",
         },
         {
           input: "Pozdravljeni, vsi programerji!\n",
           output: "30\n",
         },
      ],
      hard: [
          {
            input: "Pišek!\n",
            output: "Živijo, Pišek!\n",
          },
          {
            input: "Blockly!\n",
            output: "Živijo, Blockly!\n",
          },
          {
            input: "učenci!\n",
            output: "Živijo, učenci!\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
