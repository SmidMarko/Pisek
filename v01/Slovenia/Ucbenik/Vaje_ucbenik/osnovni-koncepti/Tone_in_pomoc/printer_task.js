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
            blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="robot_start" id="sv@F*OS+Y46-`|4~Vl5n" deletable="false" movable="false" editable="false" x="0" y="0"><next><block type="variables_set" id="B=Rhgc|?]c{4OH@#X2u;"><field name="VAR">u</field><value name="VALUE"><block type="math_number" id="zeDvMNv{dPw/s|{s5TlB"><field name="NUM">3</field></block></value><next><block type="variables_set" id="Eaxm9fE1V/6QSc1kcIns"><field name="VAR">p</field><value name="VALUE"><block type="math_number" id="/!T/tdOg/vwI=N9#6MAc"><field name="NUM">11</field></block></value><next><block type="variables_set" id="}[}tu@MRPyDFL,RlqVXi"><field name="VAR">b</field><value name="VALUE"><block type="math_number" id=")/{#PZMfY.HIPqmZMD?C"><field name="NUM">15</field></block></value><next><block type="variables_set" id="rrv`!SZeW1p_+s7V(Co@"><field name="VAR">v</field><value name="VALUE"><block type="math_number" id="eCZVq)bY6_I8=T/exIU1"><field name="NUM">10</field></block></value><next><block type="variables_set" id="M`XGF~*81Nej|s=RVmUM"><field name="VAR">a</field><value name="VALUE"><block type="math_arithmetic" id="kPgvHh+j{uuPKw?c@{ZN"><field name="OP">MULTIPLY</field><value name="A"><shadow type="math_number" id=",Vz0`bYG7)Pj8hRTJ{zC"><field name="NUM">5</field></shadow><block type="variables_get" id="o7.KkM))idN@apJdz5vc"><field name="VAR">k</field></block></value><value name="B"><shadow type="math_number" id="lx@Db*L`YiEG3aD4(Tq2"><field name="NUM">3</field></shadow><block type="math_arithmetic" id="{C1OiCBvw=yZPi]xei.8"><field name="OP">MULTIPLY</field><value name="A"><shadow type="math_number" id="/pYQDTcCJ7Rk5jL9p`/7"><field name="NUM">3</field></shadow><block type="variables_get" id=";x|ouS[p`t-]*K0uEzA6"><field name="VAR">u</field></block></value><value name="B"><shadow type="math_number" id="J!il`/E7HW|Sb|a-V-S]"><field name="NUM">10</field></shadow><block type="variables_get" id="QBG=BB.tmD@j_6QrY9}C"><field name="VAR">p</field></block></value></block></value></block></value><next><block type="variables_set" id="`N,uZ?Mj5H`O[u[kvXa{"><field name="VAR">resitev</field><value name="VALUE"><block type="math_arithmetic" id="=o`o].|HQ5Puc-`B)IvM"><field name="OP">MULTIPLY</field><value name="A"><shadow type="math_number" id=")jee/7p-#I6QW-tgP;Se"><field name="NUM">1</field></shadow><block type="math_arithmetic" id="OzRAeO6s29-C]X7!9sSW"><field name="OP">ADD</field><value name="A"><shadow type="math_number" id="PNQda5=Nd64[.0nc*]qz"><field name="NUM">20</field></shadow><block type="variables_get" id="VX+HihjbRDTwTcx}5JDM"><field name="VAR">b</field></block></value><value name="B"><shadow type="math_number" id="f4xa?l;L)xUhZ-=u:s9+"><field name="NUM">9</field></shadow><block type="variables_get" id="Kn=(huH]1|)Oc)WEMafU"><field name="VAR">v</field></block></value></block></value><value name="B"><shadow type="math_number" id="q#XB5K6a7WF+h?N_[d7m"><field name="NUM">1</field></shadow><block type="variables_get" id="FYgH/+hVZF(W59n`ka_D"><field name="VAR">a</field></block></value></block></value><next><block type="print" id="B(1~ld(o5/6;F53=b_=n"><value name="PARAM_0"><block type="variables_get" id="YR9wm!3G,FMeA_;x`f*L"><field name="VAR">resitev</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><block type="math_number" id="Q9hFPc*,VR@grsO+Ytl@" x="274" y="207"><field name="NUM">0</field></block></xml>'}
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
            output: "30\n",
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
