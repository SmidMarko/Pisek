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
            blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="H41kjQ85ngQ0t:wrq(:v" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="1O~!R4I?HMnm.vdASKHB"><field name="VAR">a</field><value name="VALUE"><block type="math_number" id="Pnb*ssZgMd4Og@NI?Tpe"><field name="NUM">5</field></block></value><next><block type="variables_set" id="[E?DWxqI`M=zu-(*oMeB"><field name="VAR">a</field><value name="VALUE"><block type="math_number" id="0I[N7ZoK`OKLPV4e+SkZ"><field name="NUM">3</field></block></value><next><block type="variables_set" id="(jx#;OpcGXyt,t|E7f]U"><field name="VAR">obseg</field><value name="VALUE"><block type="math_arithmetic" id="dtG@;2l1e8zN-1ETZd9W"><field name="OP">MULTIPLY</field><value name="A"><shadow type="math_number" id="buKKn]3}GH.{;8V7g02`"><field name="NUM">5</field></shadow></value><value name="B"><shadow type="math_number" id="0t{WO//YqI.5If8EDAF_"><field name="NUM">1</field></shadow><block type="math_arithmetic" id="hAkz*E_[z?2s;~qrB=aP"><field name="OP">MINUS</field><value name="A"><shadow type="math_number" id="]y@(/?b#ChCbd_*exSky"><field name="NUM">1</field></shadow><block type="variables_get" id="mU=}kVWwM-6+6GYg8`3N"><field name="VAR">a</field></block></value><value name="B"><shadow type="math_number" id="}yomv;;|-C_8oosz~SPa"><field name="NUM">1</field></shadow><block type="variables_get" id="rfP9kVdksB/Xq,m37H|9"><field name="VAR">b</field></block></value></block></value></block></value><next><block type="print" id="}jvK5.}wkk[+8v5*JARc"><value name="PARAM_0"><block type="variables_get" id="vN3u~+YI,J018l+8wR~~"><field name="VAR">b</field></block></value></block></next></block></next></block></next></block></next></block></xml>'		  
         },
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
            output: "16\n",
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
