function initTask(subTask) {
    subTask.gridInfos = {
        hideSaveOrLoad: false,
        actionDelay: 200,
        includeBlocks: {
            groupByCategory: true,
            generatedBlocks: {
                printer: ["print", "readInteger"],
            },
            // Block math_floor_divison not avalible
            standardBlocks: {
                includeAll: false,
                wholeCategories: ["variables"],
                singleBlocks: { easy : ["text", "text_join", "controls_if", "controls_if_else", "logic_compare", "logic_operation", "math_number", "math_arithmetic", "math_modulo", "logic_negate", "logic_boolean"],
                },
            }
        },
        maxInstructions: { easy:0},
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
                input: "5\n10\n10\n",
                output: "DA\n",
            },
            {
                input: "13\n94\n2\n",
                output: "NE\n",
            },
            {
                input: "21\n34\n21\n",
                output: "NE\n",
            },
            {
                input: "123\n124\n125\n",
                output: "DA\n",
            },
            {
                input: "1\n2\n133\n",
                output: "DA\n",
            },
            {
                input: "32\n32\n32\n",
                output: "DA\n",
            },
        ],
    };

    initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);