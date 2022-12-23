function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: true,
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
            blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="s8/ImT5nZ=lkeDE4fY{_" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="sWhQmddin1uupaA;/iMD"><field name="VAR">a</field><value name="VALUE"><block type="math_number" id="N4:)n?evK@F,ZB{s|dH7"><field name="NUM">4</field></block></value><next><block type="variables_set" id="(k?1ofn#zD|1@5/rdenU"><field name="VAR">b</field><value name="VALUE"><block type="math_number" id="ela`xv?DF0Q}S_/GH16?"><field name="NUM">8.5</field></block></value><next><block type="variables_set" id="C_,`,j7sL-*~lSMk26DN"><field name="VAR">c</field><value name="VALUE"><block type="math_number" id="vqT~SfjlrjVGua6];ZE!"><field name="NUM">1</field></block></value><next><block type="variables_set" id="PE.dRO*A+.v?~:n{;t=,"><field name="VAR">rezultat</field><value name="VALUE"><block type="math_arithmetic" id="[u}nd_tAv+8?DV/IA+)7"><field name="OP">DIVIDE</field><value name="A"><shadow type="math_number" id="ng2q3pas[p|i4VXiq?Ka"><field name="NUM">1</field></shadow><block type="math_arithmetic" id="Ewg*UF*9pLiI`g3Wb56="><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="u2#a3X}S6`4G=z=HX9sr"><field name="NUM">1</field></shadow><block type="variables_get" id="7X2hL1qZhvo2H5R?(/zw"><field name="VAR">b</field></block></value><value name="B"><shadow type="math_number" id="BqP2/)f3G.Bxg5O!raHs"><field name="NUM">7.5</field></shadow><block type="variables_get" id=";MK=sC:)uslI9GH7;X=M"><field name="VAR">b</field></block></value></block></value><value name="B"><shadow type="math_number" id="lL!+Wu)CAYE5+jnPe+qG"><field name="NUM">4</field></shadow><block type="variables_get" id="Btqo[R(IqWU,+)WdBRcI"><field name="VAR">a</field></block></value></block></value><next><block type="print" id="_]1#yNq1~m37{jiO.qd8"><value name="PARAM_0"><block type="variables_get" id="9UVU9DYX#(Kdl/3ZoM*1"><field name="VAR">b</field></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>'},
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
            output: "0.1875\n",
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
