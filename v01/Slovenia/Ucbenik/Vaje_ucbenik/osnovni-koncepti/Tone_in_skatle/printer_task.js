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
            blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="3L*~a9eZ(RAcwmSgt8`n" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="_6NwZ|C)e8mxL_YSFK:Y"><field name="VAR">a</field><value name="VALUE"><block type="math_number" id="yN7H#6jud=CoZ,n#x,QU"><field name="NUM">70</field></block></value><next><block type="variables_set" id="ep;r)y8:#i)j8z.R?rn}"><field name="VAR">b</field><value name="VALUE"><block type="math_number" id="T{KXxTHdE5}4Iz:ZjcF8"><field name="NUM">5</field></block></value><next><block type="variables_set" id="yURRMFi#wJaqLLlA4}ye"><field name="VAR">c</field><value name="VALUE"><block type="math_number" id="4kT@`p8]h(XE3v=_wT6a"><field name="NUM">4</field></block></value><next><block type="variables_set" id="r;fMZ3JqiZE:,Ukw;:_!"><field name="VAR">rezultat</field><value name="VALUE"><block type="math_arithmetic" id="W8=5Cqbiq:?VLzLQu2y:"><field name="OP">DIVIDE</field><value name="A"><shadow type="math_number" id="9@!5Bwu08gqgl8`hLCLp"><field name="NUM">1</field></shadow><block type="math_arithmetic" id="|N~2Q#/de19UT/@0e4H!"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="cq+(h+.G2(o?8s:F3FRW"><field name="NUM">1</field></shadow><block type="variables_get" id="URY|H!OY8-).6f3sMIY0"><field name="VAR">a</field></block></value><value name="B"><shadow type="math_number" id="vS=y0h*Mnomq16|vOcGp"><field name="NUM">1</field></shadow><block type="variables_get" id="n#y5u*IB{}7vyw{cz-|5"><field name="VAR">b</field></block></value></block></value><value name="B"><shadow type="math_number" id="5)iyZjU/TBNTnB?|G5#!"><field name="NUM">1</field></shadow><block type="variables_get" id="Ewn.y8s_6JUDLFpMbVBg"><field name="VAR">c</field></block></value></block></value><next><block type="print" id="}ps;(Vwp*0Ccld2mB!#p"></block></next></block></next></block></next></block></next></block></next></block></xml>'},
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
            output: "4\n",
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
