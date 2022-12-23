function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: false,
      actionDelay: 200,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
             printer: ["print", "readInteger", "read"],
         },
          // Block math_floor_divison not avalible
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables"],
            singleBlocks: { easy : ["text", "text_join", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"],
                            medium : ["text", "text_join", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"],
                            hard : ["text", "text_join", "controls_repeat_ext", "controls_whileUntil", "controls_for", "controls_forEach", "controls_flow_statements", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_single", "math_trig", "math_constant", "math_modulo", "logic_negate", "logic_boolean"]
                          },
         }
      },
      maxInstructions: {easy: 0, medium: 0, hard: 91},
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
             output: "1.1.2014\n2.1.2014\n3.1.2014\n4.1.2014\n5.1.2014\n6.1.2014\n7.1.2014\n8.1.2014\n9.1.2014\n10.1.2014\n11.1.2014\n12.1.2014\n13.1.2014\n14.1.2014\n15.1.2014\n16.1.2014\n17.1.2014\n18.1.2014\n19.1.2014\n20.1.2014\n21.1.2014\n22.1.2014\n23.1.2014\n24.1.2014\n25.1.201\n4\n26.1.2014\n27.1.2014\n28.1.2014\n29.1.2014\n30.1.2014\n31.1.2014\n1.2.2014\n2.2.2014\n3.2.2014\n4.2.2014\n5.2.2014\n6.2.2014\n7.2.2014\n8.2.2014\n9.2.2014\n10.2.2014\n11.2.2014\n12.2.2014\n13.2.2014\n14.2.2014\n15.2.2014\n16.2.2014\n17.2.2014\n18.2.2014\n19.2.2\n014\n20.2.2014\n21.2.2014\n22.2.2014\n23.2.2014\n24.2.2014\n25.2.2014\n26.2.2014\n27.2.2014\n28.2.2014\n1.3.2014\n2.3.2014\n3.3.2014\n4.3.2014\n5.3.2014\n6.3.2014\n7.3.2014\n8.3.2014\n9.3.2014\n10.3.2014\n11.3.2014\n12.3.2014\n13.3.2014\n14.3.2014\n15.3.2014\n16.3\n.2014\n17.3.2014\n18.3.2014\n19.3.2014\n20.3.2014\n21.3.2014\n22.3.2014\n23.3.2014\n24.3.2014\n25.3.2014\n26.3.2014\n27.3.2014\n28.3.2014\n29.3.2014\n30.3.2014\n31.3.2014\n1.4.2014\n2.4.2014\n3.4.2014\n4.4.2014\n5.4.2014\n6.4.2014\n7.4.2014\n8.4.2014\n9.4.2014\n10\n.4.2014\n11.4.2014\n12.4.2014\n13.4.2014\n14.4.2014\n15.4.2014\n16.4.2014\n17.4.2014\n18.4.2014\n19.4.2014\n20.4.2014\n21.4.2014\n22.4.2014\n23.4.2014\n24.4.2014\n25.4.2014\n26.4.2014\n27.4.2014\n28.4.2014\n29.4.2014\n30.4.2014\n1.5.2014\n2.5.2014\n3.5.2014\n4.5.2\n014\n5.5.2014\n6.5.2014\n7.5.2014\n8.5.2014\n9.5.2014\n10.5.2014\n11.5.2014\n12.5.2014\n13.5.2014\n14.5.2014\n15.5.2014\n16.5.2014\n17.5.2014\n18.5.2014\n19.5.2014\n20.5.2014\n21.5.2014\n22.5.2014\n23.5.2014\n24.5.2014\n25.5.2014\n26.5.2014\n27.5.2014\n28.5.2014\n\n29.5.2014\n30.5.2014\n31.5.2014\n1.6.2014\n2.6.2014\n3.6.2014\n4.6.2014\n5.6.2014\n6.6.2014\n7.6.2014\n8.6.2014\n9.6.2014\n10.6.2014\n11.6.2014\n12.6.2014\n13.6.2014\n14.6.2014\n15.6.2014\n16.6.2014\n17.6.2014\n18.6.2014\n19.6.2014\n20.6.2014\n21.6.2014\n22.6.2014\n\n23.6.2014\n24.6.2014\n25.6.2014\n26.6.2014\n27.6.2014\n28.6.2014\n29.6.2014\n30.6.2014\n1.7.2014\n2.7.2014\n3.7.2014\n4.7.2014\n5.7.2014\n6.7.2014\n7.7.2014\n8.7.2014\n9.7.2014\n10.7.2014\n11.7.2014\n12.7.2014\n13.7.2014\n14.7.2014\n15.7.2014\n16.7.2014\n17.7.20\n14\n18.7.2014\n19.7.2014\n20.7.2014\n21.7.2014\n22.7.2014\n23.7.2014\n24.7.2014\n25.7.2014\n26.7.2014\n27.7.2014\n28.7.2014\n29.7.2014\n30.7.2014\n31.7.2014\n1.8.2014\n2.8.2014\n3.8.2014\n4.8.2014\n5.8.2014\n6.8.2014\n7.8.2014\n8.8.2014\n9.8.2014\n10.8.2014\n11.8.\n2014\n12.8.2014\n13.8.2014\n14.8.2014\n15.8.2014\n16.8.2014\n17.8.2014\n18.8.2014\n19.8.2014\n20.8.2014\n21.8.2014\n22.8.2014\n23.8.2014\n24.8.2014\n25.8.2014\n26.8.2014\n27.8.2014\n28.8.2014\n29.8.2014\n30.8.2014\n31.8.2014\n1.9.2014\n2.9.2014\n3.9.2014\n4.9.2014\n\n5.9.2014\n6.9.2014\n7.9.2014\n8.9.2014\n9.9.2014\n10.9.2014\n11.9.2014\n12.9.2014\n13.9.2014\n14.9.2014\n15.9.2014\n16.9.2014\n17.9.2014\n18.9.2014\n19.9.2014\n20.9.2014\n21.9.2014\n22.9.2014\n23.9.2014\n24.9.2014\n25.9.2014\n26.9.2014\n27.9.2014\n28.9.2014\n29.\n9.2014\n30.9.2014\n1.10.2014\n2.10.2014\n3.10.2014\n4.10.2014\n5.10.2014\n6.10.2014\n7.10.2014\n8.10.2014\n9.10.2014\n10.10.2014\n11.10.2014\n12.10.2014\n13.10.2014\n14.10.2014\n15.10.2014\n16.10.2014\n17.10.2014\n18.10.2014\n19.10.2014\n20.10.2014\n21.10.2014\n22\n.10.2014\n23.10.2014\n24.10.2014\n25.10.2014\n26.10.2014\n27.10.2014\n28.10.2014\n29.10.2014\n30.10.2014\n31.10.2014\n1.11.2014\n2.11.2014\n3.11.2014\n4.11.2014\n5.11.2014\n6.11.2014\n7.11.2014\n8.11.2014\n9.11.2014\n10.11.2014\n11.11.2014\n12.11.2014\n13.11.2014\\nn14.11.2014\n15.11.2014\n16.11.2014\n17.11.2014\n18.11.2014\n19.11.2014\n20.11.2014\n21.11.2014\n22.11.2014\n23.11.2014\n24.11.2014\n25.11.2014\n26.11.2014\n27.11.2014\n28.11.2014\n29.11.2014\n30.11.2014\n1.12.2014\n2.12.2014\n3.12.2014\n4.12.2014\n5.12.2014\n6.12\n.2014\n7.12.2014\n8.12.2014\n9.12.2014\n10.12.2014\n11.12.2014\n12.12.2014\n13.12.2014\n14.12.2014\n15.12.2014\n16.12.2014\n17.12.2014\n18.12.2014\n19.12.2014\n20.12.2014\n21.12.2014\n22.12.2014\n23.12.2014\n24.12.2014\n25.12.2014\n26.12.2014\n27.12.2014\n28.12.20\n14\n29.12.2014\n30.12.2014\n31.12.2014\n",
         },
      ],
      medium: [
          {
            input: "",
            output: "5.1.2014\n2.2.2014\n2.3.2014\n6.4.2014\n4.5.2014\n1.6.2014\n6.7.2014\n3.8.2014\n7.9.2014\n5.10.2014\n2.11.2014\n7.12.2014\n",
          },
      ],
      hard: [
           {
               input: "",
               output: "5.1.2014\n2.2.2014\n2.3.2014\n6.4.2014\n4.5.2014\n1.6.2014\n6.7.2014\n3.8.2014\n7.9.2014\n5.10.2014\n2.11.2014\n7.12.2014\n",
           },
       ],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);


