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
            wholeCategories: {easy : [], medium : [], hard : []},
            singleBlocks: {easy:["text_join"],medium:["text_changeCase_noShadow", "text_join"],hard:["text_changeCase_noShadow"],},
         },
	  variables : {easy : ["Vhod 1", "Vhod 2"], medium : ["Vhod 1", "Vhod 2", "Izhod"], hard : ["Izhod"]}
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
            input: "Pišek!\nPozdravljen \n",
            output: "Pozdravljen Pišek!\n",
         },
         {
           input: "Blockly!\nŽivijo \n",
           output: "Živijo Blockly!\n",
         },
         {
           input: "se Blockly!\nUčimo \n",
           output: "Učimo se Blockly!\n",
         },
      ],
      medium: [
         {
            input: "Pišek!\nŽivijo \n",
            output: "živijo pišek!\nŽIVIJO PIŠEK!\n",
         },
         {
           input: "programirati!\nUčimo se \n",
           output: "učimo se programirati!\nUČIMO SE PROGRAMIRATI!\n",
         },
         {
           input: "Blockly!\nZakon je \n",
           output: "zakon je blockly!\nZAKON JE BLOCKLY!\n",
         },
      ],
      hard: [
          {
            input: "Živijo Pišek!\n",
            output: "živijo pišek!\nŽivijo Pišek!\nŽIVIJO PIŠEK!\n",
          },
          {
            input: "Blockly je ZAKON za UČENJE!\n",
            output: "blockly je zakon za učenje!\nBlockly Je Zakon Za Učenje!\nBLOCKLY JE ZAKON ZA UČENJE!\n",
          },
          {
            input: "pozdravljen Blockly!\n",
            output: "pozdravljen blockly!\nPozdravljen Blockly!\nPOZDRAVLJEN BLOCKLY!\n",
          },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
