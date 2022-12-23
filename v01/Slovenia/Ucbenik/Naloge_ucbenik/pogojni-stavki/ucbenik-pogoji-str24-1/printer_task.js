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
                input: "",
                output: "Mesec ima 30 dni.\nŠtevilka meseca mora biti med 1 in 12.\n",
            },
        ],
    };

    initBlocklySubTask(subTask);
}

initWrapper(initTask, null, null, true);