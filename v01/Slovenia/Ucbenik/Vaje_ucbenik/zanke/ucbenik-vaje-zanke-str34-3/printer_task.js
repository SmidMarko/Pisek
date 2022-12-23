function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
             printer: ["print", "read"],
         },
          // Block math_floor_divison not avalible
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables"],
            singleBlocks: { easy : ["text", "text_join", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"],
                            },
         }
      },
      maxInstructions: {easy:100},
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
             output: "1 ima 1 deliteljev.\n2 ima 2 deliteljev.\n3 ima 2 deliteljev.\n4 ima 3 deliteljev.\n5 ima 2 deliteljev.\n6 ima 4 deliteljev.\n7 ima 2 deliteljev.\n8 ima 4 deliteljev.\n9 ima 3 deliteljev.\n10 ima 4 deliteljev.\n11 ima 2 deliteljev.\n12 ima 6 deliteljev.\n13 ima 2 deliteljev.\n14 ima 4 deliteljev.\n15 ima 4 deliteljev.\n16 ima 5 deliteljev.\n17 ima 2 deliteljev.\n18 ima 6 deliteljev.\n19 ima 2 deliteljev.\n20 ima 6 deliteljev.\n21 ima 4 deliteljev.\n22 ima 4 deliteljev.\n23 ima 2 deliteljev.\n24 ima 8 deliteljev.\n25 ima 3 deliteljev.\n26 ima 4 deliteljev.\n27 ima 4 deliteljev.\n28 ima 6 deliteljev.\n29 ima 2 deliteljev.\n30 ima 8 deliteljev.\n31 ima 2 deliteljev.\n32 ima 6 deliteljev.\n33 ima 4 deliteljev.\n34 ima 4 deliteljev.\n35 ima 4 deliteljev.\n36 ima 9 deliteljev.\n37 ima 2 deliteljev.\n38 ima 4 deliteljev.\n39 ima 4 deliteljev.\n40 ima 8 deliteljev.\n41 ima 2 deliteljev.\n42 ima 8 deliteljev.\n43 ima 2 deliteljev.\n44 ima 6 deliteljev.\n45 ima 6 deliteljev.\n46 ima 4 deliteljev.\n47 ima 2 deliteljev.\n48 ima 10 deliteljev.\n49 ima 3 deliteljev.\n50 ima 6 deliteljev.\n51 ima 4 deliteljev.\n52 ima 6 deliteljev.\n53 ima 2 deliteljev.\n54 ima 8 deliteljev.\n55 ima 4 deliteljev.\n56 ima 8 deliteljev.\n57 ima 4 deliteljev.\n58 ima 4 deliteljev.\n59 ima 2 deliteljev.\n60 ima 12 deliteljev.\n61 ima 2 deliteljev.\n62 ima 4 deliteljev.\n63 ima 6 deliteljev.\n64 ima 7 deliteljev.\n65 ima 4 deliteljev.\n66 ima 8 deliteljev.\n67 ima 2 deliteljev.\n68 ima 6 deliteljev.\n69 ima 4 deliteljev.\n70 ima 8 deliteljev.\n71 ima 2 deliteljev.\n72 ima 12 deliteljev.\n73 ima 2 deliteljev.\n74 ima 4 deliteljev.\n75 ima 6 deliteljev.\n76 ima 6 deliteljev.\n77 ima 4 deliteljev.\n78 ima 8 deliteljev.\n79 ima 2 deliteljev.\n80 ima 10 deliteljev.\n81 ima 5 deliteljev.\n82 ima 4 deliteljev.\n83 ima 2 deliteljev.\n84 ima 12 deliteljev.\n85 ima 4 deliteljev.\n86 ima 4 deliteljev.\n87 ima 4 deliteljev.\n88 ima 8 deliteljev.\n89 ima 2 deliteljev.\n90 ima 12 deliteljev.\n91 ima 4 deliteljev.\n92 ima 6 deliteljev.\n93 ima 4 deliteljev.\n94 ima 4 deliteljev.\n95 ima 4 deliteljev.\n96 ima 12 deliteljev.\n97 ima 2 deliteljev.\n98 ima 6 deliteljev.\n99 ima 6 deliteljev.\n100 ima 9 deliteljev.",
         },
      ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);
