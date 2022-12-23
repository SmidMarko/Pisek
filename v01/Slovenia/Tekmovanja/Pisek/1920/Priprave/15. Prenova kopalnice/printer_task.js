function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: false,
         generatedBlocks: {
             printer: ["print"],
         },
          // Block math_floor_divison not avalible
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables"],
            singleBlocks: { easy : ["text", "text_print", "math_number", "math_arithmetic", "math_modulo"],
                            },
         }
      },
	  startingExample: {
         easy:{
            blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="FzT,+D!nNVyud9O01AJW" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="print" id="ar[5d1uEdrFy~~zyw?DW"><value name="PARAM_0"><block type="math_arithmetic" id="9`8/Vxbp=j,Xt9WF?hQ*"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="FeyyN-@l`gC63)}Zx/nm"><field name="NUM">8</field></shadow></value><value name="B"><shadow type="math_number" id="U@VL_K?bOwF~VzYh.lB?"><field name="NUM">4</field></shadow></value></block></value></block></next></block></xml>'
		}
	},
	  maxInstructions: {easy: 0},
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
            output: "28\n",
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
