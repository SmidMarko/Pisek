(function () {

    var importedModules = {};

    var importableModules = function () {
        // Wait to have modulesPath defined before executing the function
        return {
            'jquery-1.7.1': {src: modulesPath+"/_common/modules/ext/jquery/1.7/jquery.min.js", id: "http://code.jquery.com/jquery-1.7.1.min.js"},
            'jquery-ui.touch-punch': {src: modulesPath+"/_common/modules/ext/jquery-ui/jquery.ui.touch-punch.min.js", id: "jquery.ui.touch-punch.min.js"},
            'JSON-js': {src: modulesPath+"/_common/modules/ext/json/json2.min.js", id: "https://github.com/douglascrockford/JSON-js"},
            'raphael-2.2.1': {src: modulesPath+"/_common/modules/ext/raphael/2.2.1/raphael.min.js", id: "http://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.1/raphael.min.js"},
            'beaver-task-2.0': {src: modulesPath+"/_common/modules/pemFioi/beaver-task-2.0.js", id: "http://www.france-ioi.org/modules/pemFioi/beaver-task-2.0.js"},
            'jschannel': {src: modulesPath+"/_common/modules/ext/jschannel/jschannel.js", id: "http://www.france-ioi.org/modules/ext/jschannel/jschannel.js"},
            'raphaelFactory-1.0': {src: modulesPath+"/_common/modules/pemFioi/raphaelFactory-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/raphaelFactory-1.0.js"},
            'delayFactory-1.0': {src: modulesPath+"/_common/modules/pemFioi/delayFactory-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/delayFactory-1.0.js"},
            'simulationFactory-1.0': {src: modulesPath+"/_common/modules/pemFioi/simulationFactory-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/simulationFactory-1.0.js"},
            'beav-1.0': {src: modulesPath+"/_common/modules/pemFioi/beav-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/beav-1.0.js"},
            'raphael-2.1': {src: modulesPath+"/_common/modules/ext/raphael/2.1/raphael-min.js", id: "http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"},
            'simulation-2.0': {src: modulesPath+"/_common/modules/pemFioi/simulation-2.0.js", id: "http://www.france-ioi.org/modules/pemFioi/simulation-2.0.js"},
            'raphaelButton-1.0': {src: modulesPath+"/_common/modules/pemFioi/raphaelButton-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/raphaelButton-1.0.js"},
            'graph-1.0': {src: modulesPath+"/_common/modules/pemFioi/graph-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/graph-1.0.js"},
            'visual-graph-1.0': {src: modulesPath+"/_common/modules/pemFioi/visual-graph-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/visual-graph-1.0.js"},
            'graph-mouse-1.0': {src: modulesPath+"/_common/modules/pemFioi/graph-mouse-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/graph-mouse-1.0.js"},
            'crane-1.0': {src: modulesPath+"/_common/modules/pemFioi/crane-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/crane-1.0.js"},
            'grid-1.0': {src: modulesPath+"/_common/modules/pemFioi/grid-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/grid-1.0.js"},
            'drag_lib-2.0': {src: modulesPath+"/_common/modules/pemFioi/drag_lib-2.0.js", id: "http://www.france-ioi.org/modules/pemFioi/drag_lib-2.0.js"},
            'randomGenerator-1.0': {src: modulesPath+"/_common/modules/pemFioi/randomGenerator-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/randomGenerator-1.0.js"},
            'simpleKeyboard-1.0': {src: modulesPath+"/_common/modules/pemFioi/simpleKeyboard-1.0.js", id: "http://www.france-ioi.org/modules/pemFioi/simpleKeyboard-1.0.js"},

            'platform-pr': {classStr: "proxy module", src: modulesPath+"/_common/modules/integrationAPI.01/official/platform-pr.js", id: "http://www.france-ioi.org/modules/integrationAPI.01/official/platform-pr.js"},
            'buttonsAndMessages': {classStr: "stdButtonsAndMessages module", src: modulesPath+"/_common/modules/integrationAPI.01/installationAPI.01/pemFioi/buttonsAndMessages.js",  id: "http://www.france-ioi.org/modules/integrationAPI.01/installationAPI.01/pemFioi/buttonsAndMessages.js"},
            'installationAPI.01': {classStr: "remove", src: modulesPath+"/_common/modules/integrationAPI.01/installationAPI.01/pemFioi/installation.js"},
            'miniPlatform': {classStr: "remove", src: modulesPath+"/_common/modules/integrationAPI.01/official/miniPlatform.js"},

            'acorn': {src: modulesPath+"/_common/modules/ext/js-interpreter/acorn.js", id: "acorn"},
            'acorn-walk': {src: modulesPath+"/_common/modules/ext/acorn/walk.js", id: "acorn-walk"},
            'interpreter': {src: modulesPath+"/_common/modules/ext/js-interpreter/interpreter.js", id: "interpreter"},
            'ace': {src: modulesPath+"/_common/modules/ext/ace/ace.js", id: "ace"},
            'ace_python': {src: modulesPath+"/_common/modules/ext/ace/mode-python.js", id: "ace_python"},
            'processing-1.4.8': {src: modulesPath+"/_common/modules/ext/processing/1.4.8/processing.min.js", id: "https://raw.github.com/processing-js/processing-js/v1.4.8/processing.min.js"},

            'taskStyles-0.1': {type: "stylesheet", src: modulesPath+"/_common/modules/pemFioi/taskStyles-0.1.css", id: "http://www.france-ioi.org/modules/pemFioi/taskStyles-0.1.css"},

            'conceptDisplay-1.0': {src: modulesPath+"/_common/modules/pemFioi/conceptDisplay-1.0.js", id: "concept_display"},
            'conceptViewer-1.0': {src: modulesPath+"/_common/modules/pemFioi/conceptViewer-1.0.js", id: "concept_viewer"},
            'conceptViewer_css-1.0': {type: "stylesheet", src: modulesPath+"/_common/modules/pemFioi/conceptViewer-1.0.css", id: "concept_viewer_css"},

            'blockly': {src: modulesPath+"/_common/modules/ext/blockly/blockly_compressed.js", id: "blockly"},
            'blockly_blocks': {src: modulesPath+"/_common/modules/ext/blockly/blocks_compressed.js", id: "blockly_blocks"},
            'blockly_javascript': {src: modulesPath+"/_common/modules/ext/blockly/javascript_compressed.js", id: "blockly_javascript"},
            'blockly_python': {src: modulesPath+"/_common/modules/ext/blockly/python_compressed.js", id: "blockly_python"},
            'blockly_fr': {src: modulesPath+"/_common/modules/ext/blockly/fr.js", id: "blockly_fr"},
            'blockly_en': {src: modulesPath+"/_common/modules/ext/blockly/en.js", id: "blockly_en"},
            'blockly_de': {src: modulesPath+"/_common/modules/ext/blockly/de.js", id: "blockly_de"},
            'blockly_es': {src: modulesPath+"/_common/modules/ext/blockly/es.js", id: "blockly_es"},
            'blockly_sl': {src: modulesPath+"/_common/modules/ext/blockly/sl.js", id: "blockly_sl"},
            'blockly_fioi': {src: modulesPath+"/_common/modules/ext/blockly-fioi/fioi-blockly.min.js", id: "blockly_fioi"},

            'blockly-processing': {src: modulesPath+"/_common/modules/pemFioi/blocklyProcessing_lib.js", id: "blocklyProcessing_lib"},
            'blockly-template': {src: modulesPath+"/_common/modules/pemFioi/blocklyTemplate_lib.js", id: "blocklyTemplate_lib"},
            'jwinf_css': {type: "stylesheet", src: modulesPath+"/_common/modules/pemFioi/jwinf.css", id: "jwinf_css"}, // for BWINF
            'blocklyPisek_lib': {src: modulesPath+"/Slovenia/modules/blocklyPisek_lib.js", id: "blocklyPisek_lib"},
            'blocklyTabornik_lib': {src: modulesPath+"/Slovenia/modules/blocklyTabornik_lib.js", id: "blocklyTabornik_lib"},
            'blockly-robot': {src: modulesPath+"/Slovenia/modules/blocklyRobot_lib.js", id: "blocklyRobot_lib"},
            'blocklyRobot_lib': {src: modulesPath+"/Slovenia/modules/blocklyTabornik_lib.js", id: "blocklyRobot_lib"},
            'blocklyPrinter_lib': {src: modulesPath+"/Slovenia/modules/blocklyPrinter_lib.js", id: "blocklyPrinter_lib"},
            'blockly-turtle': {src: modulesPath+"/Slovenia/modules/blocklyTurtle_lib.js", id: "blocklyTurtle_lib"},
            'blocklyTurtle_lib': {src: modulesPath+"/Slovenia/modules/blocklyTurtle_lib.js", id: "blocklyTurtle_lib"},
            'blocklyZmajcek_lib': {src: modulesPath+"/Slovenia/modules/blocklyZmajcek_lib.js", id: "blocklyZmajcek_lib"},
            

            'blockly-isndraw': {src: modulesPath+"/_common/modules/pemFioi/blocklyIsnDraw_lib.js", id: "blocklyIsnDraw_lib"},
            'blockly-maths': {src: modulesPath+"/_common/modules/pemFioi/blocklyMaths_lib.js", id: "blocklyMaths_lib"},
            'blockly-printer-2.0': {src: modulesPath+"/_common/modules/pemFioi/blocklyPrinter_lib-2.0.js", id: "blocklyPrinter_lib-2.0"},

            'quickAlgo_utils': {src: modulesPath+"/_common/modules/pemFioi/quickAlgo/utils.js", id: "quickAlgo_utils"},
            'quickAlgo_i18n': {src: modulesPath+"/_common/modules/pemFioi/quickAlgo/i18n.js", id: "quickAlgo_i18n"},
            'quickAlgo_interface': {src: modulesPath+"/_common/modules/pemFioi/quickAlgo/interface.js", id: "quickAlgo_interface"},
            'quickAlgo_blockly_blocks': {src: modulesPath+"/_common/modules/pemFioi/quickAlgo/blockly_blocks.js", id: "quickAlgo_blockly_blocks"},
            'quickAlgo_blockly_interface': {src: modulesPath+"/_common/modules/pemFioi/quickAlgo/blockly_interface.js", id: "quickAlgo_blockly_interface"},
            'quickAlgo_blockly_runner': {src: modulesPath+"/_common/modules/pemFioi/quickAlgo/blockly_runner.js", id: "quickAlgo_blockly_runner"},
            'quickAlgo_python_interface': {src: modulesPath+"/_common/modules/pemFioi/quickAlgo/python_interface.js", id: "quickAlgo_python_interface"},
            'quickAlgo_python_runner': {src: modulesPath+"/_common/modules/pemFioi/quickAlgo/python_runner.js", id: "quickAlgo_python_runner"},
            'quickAlgo_subtask': {src: modulesPath+"/_common/modules/pemFioi/quickAlgo/subtask.js", id: "quickAlgo_subtask"},
            'quickAlgo_context': {src: modulesPath+"/_common/modules/pemFioi/quickAlgo/context.js", id: "quickAlgo_context"},
            'quickAlgo_css': {type: "stylesheet", src: modulesPath+"/_common/modules/pemFioi/quickAlgo/quickAlgo.css", id: "quickAlgo_css"},

            'scratch': {src: modulesPath+"/_common/modules/ext/scratch/blockly_compressed_vertical.js", id: "scratch"},
            'scratch_blocks_common': {src: modulesPath+"/_common/modules/ext/scratch/blocks_compressed.js", id: "scratch_blocks_common"},
            'scratch_blocks': {src: modulesPath+"/_common/modules/ext/scratch/blocks_compressed_vertical.js", id: "scratch_blocks"},
            'scratch_fixes': {src: modulesPath+"/_common/modules/ext/scratch/fixes.js", id: "scratch_fixes"},
            'scratch_procedures': {src: modulesPath+"/_common/modules/ext/scratch/procedures.js", id: "scratch_procedures"},

            'python_count': {src: modulesPath+"/_common/modules/pemFioi/pythonCount-1.0.js", id: "python_count"},
            'skulpt_quickAlgo': {src: modulesPath+"ext/skulpt/skulpt.quickAlgo.min.js", id: "skulpt_quickAlgo"},
            'skulpt_stdlib': {src: modulesPath+"ext/skulpt/skulpt-stdlib.js", id: "skulpt_stdlib"},
            'skulpt_debugger': {src: modulesPath+"ext/skulpt/debugger.js", id: "skulpt_debugger"},

            'simple_draw': {src: modulesPath+"/_common/modules/pemFioi/javascool/simple_draw.js", id: "simple_draw"},
            'blockly_simple_draw': {src: modulesPath+"/_common/modules/pemFioi/javascool/blockly_simple_draw.js", id: "blockly_simple_draw"},

            'p5': {src: modulesPath+"/_common/modules/pemFioi/p5/p5.js", id: "p5"},
            'p5.sound': {src: modulesPath+"/_common/modules/pemFioi/p5/p5.sound.js", id: "p5.sound"},
            'player_p5': {src: modulesPath+"/_common/modules/pemFioi/p5/player_p5.js", id: "player_p5"},
            'blockly_p5': {src: modulesPath+"/_common/modules/pemFioi/p5/blockly_p5.js", id: "blockly_p5"},

            'blockly_map': {src: modulesPath+"/_common/modules/pemFioi/map/blockly_map.js", id: "blockly_map"},
            'map': {src: modulesPath+"/_common/modules/pemFioi/map/map.js", id: "map"},

            'blockly_database': {src: modulesPath+"/_common/modules/pemFioi/database/blockly_database.js", id: "blockly_database"},
            'database': {src: modulesPath+"/_common/modules/pemFioi/database/database.js", id: "database"},
            'database_css': {type: "stylesheet", src: modulesPath+"/_common/modules/pemFioi/database/styles.css", id: "database_css"},

            'files_repository': {src: modulesPath+"/_common/modules/pemFioi/shared/files_repository.js", id: "files_repository"},
            'blocks_helper': {src: modulesPath+"/_common/modules/pemFioi/shared/blocks_helper.js", id: "blocks_helper"},
            'logger': {src: modulesPath+"/_common/modules/pemFioi/shared/logger.js", id: "logger"},

            'taskVideo': {src: modulesPath+"/_common/modules/pemFioi/taskVideo/taskVideo.js", id: "taskVideo"},
            'taskVideoPlayer': {src: modulesPath+"/_common/modules/pemFioi/taskVideo/player.js", id: "taskVideoPlayer"},
            'taskVideo_css': {type: "stylesheet", src: modulesPath+"/_common/modules/pemFioi/taskVideo/player.css", id: "taskVideo_css"},

            // Bundles
            'bebras-base': {src: modulesPath+"/_common/modules/bundles/bebras-base.js", id: "bundle-bebras-base"},
            'bebras-interface': {src: modulesPath+"/_common/modules/bundles/bebras-interface.js", id: "bundle-bebras-interface"},
            'js-interpreter': {src: modulesPath+"/_common/modules/bundles/js-interpreter.js", id: "bundle-js-interpreter"},
            'blockly-base': {src: modulesPath+"/_common/modules/bundles/blockly-base.js", id: "bundle-blockly-base"},
            'scratch-base': {src: modulesPath+"/_common/modules/bundles/scratch-base.js", id: "bundle-scratch-base"},
            'quickAlgo-all-blockly': {src: modulesPath+"/_common/modules/bundles/quickAlgo-all-blockly.js", id: "bundle-quickAlgo-all-blockly"},
            'quickAlgo-all-python': {src: modulesPath+"/_common/modules/bundles/quickAlgo-all-python.js", id: "bundle-quickAlgo-all-python"}
        }
    }

    var languageScripts = function () {
        var strLang = window.stringsLanguage ? window.stringsLanguage : 'fr';
        return {
            blockly: [
                'acorn',
                'acorn-walk',
                'interpreter',
                'blockly',
                'blockly_blocks',
                'blockly_javascript',
                'blockly_python',
                'blockly_' + strLang,
                'blockly_fioi',
                'quickAlgo_utils',
                'quickAlgo_i18n',
                'quickAlgo_interface',
                'quickAlgo_blockly_blocks',
                'quickAlgo_blockly_interface',
                'quickAlgo_blockly_runner',
                'quickAlgo_subtask',
                'quickAlgo_context',
                'quickAlgo_css'
            ],
            scratch: [
                'acorn',
                'acorn-walk',
                'interpreter',
                'scratch',
                'scratch_blocks_common',
                'scratch_blocks',
                'blockly_javascript',
                'blockly_python',
                'blockly_' + strLang,
                'blockly_fioi',
                'scratch_fixes',
                'scratch_procedures',
                'quickAlgo_utils',
                'quickAlgo_i18n',
                'quickAlgo_interface',
                'quickAlgo_blockly_blocks',
                'quickAlgo_blockly_interface',
                'quickAlgo_blockly_runner',
                'quickAlgo_subtask',
                'quickAlgo_context',
                'quickAlgo_css'
            ],
            python: [
                'python_count',
                'ace',
                'ace_python',
                'skulpt_quickAlgo',
                'skulpt_stdlib',
                'skulpt_debugger',
                'quickAlgo_utils',
                'quickAlgo_i18n',
                'quickAlgo_interface',
                'quickAlgo_python_interface',
                'quickAlgo_python_runner',
                'quickAlgo_subtask',
                'quickAlgo_context',
                'quickAlgo_css'
            ]
        }
    }

    var bundledModules = function () {
        // List of bundles and which modules they include
        // How to import the bundles is defined in importableModules
        return [
            {name: 'bebras-base', included: ['jquery-1.7.1', 'JSON-js', 'raphael-2.2.1', 'beaver-task-2.0', 'jschannel', 'raphaelFactory-1.0', 'delayFactory-1.0', 'simulationFactory-1.0']},
            {name: 'bebras-interface', included: ['platform-pr', 'buttonsAndMessages', 'beav-1.0', 'installationAPI.01', 'miniPlatform']},
            {name: 'js-interpreter', included: ['acorn', 'acorn-walk', 'interpreter']},
            {name: 'blockly-base', included: ['blockly', 'blockly_blocks', 'blockly_javascript', 'blockly_python']},
            {name: 'scratch-base', included: ['scratch', 'scratch_blocks_common', 'scratch_blocks', 'blockly_javascript', 'blockly_python']},
            {name: 'quickAlgo-all-blockly', included: ['quickAlgo_utils', 'quickAlgo_i18n', 'quickAlgo_interface', 'quickAlgo_blockly_blocks','quickAlgo_blockly_interface', 'quickAlgo_blockly_runner', 'quickAlgo_subtask', 'quickAlgo_context']},
            {name: 'quickAlgo-all-python', included: ['python_count', 'ace', 'ace_python', 'skulpt_quickAlgo', 'skulpt_stdlib', 'skulpt_debugger', 'quickAlgo_utils', 'quickAlgo_i18n', 'quickAlgo_interface', 'quickAlgo_python_interface', 'quickAlgo_python_runner', 'quickAlgo_subtask', 'quickAlgo_context']}
        ];
    };

// from http://stackoverflow.com/questions/979975/
    var QueryString = function () {
        // This function is anonymous, is executed immediately and
        // the return value is assigned to QueryString!
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    }();


    function getBundles(modulesList) {
        // Check modulesList for modules which are already bundled together

        // For now, only do it if useBundles is true
        if(!window.useBundles) { return modulesList; }

        if(typeof bundledModules == 'function') {
            bundledModules = bundledModules();
        }
        for(var iBundle in bundledModules) {
            var bundleIncludes = bundledModules[iBundle].included;
            var newModulesList = modulesList.slice();
            var isFirst = true;
            var ok = true;
            for(var iMod in bundleIncludes) {
                var idx = newModulesList.indexOf(bundleIncludes[iMod]);
                if(idx == -1) {
                    ok = false;
                    break;
                }
                if(isFirst) {
                    // Include the name of the bundle to include instead
                    newModulesList.splice(idx, 1, bundledModules[iBundle].name);
                    isFirst = false;
                } else {
                    newModulesList.splice(idx, 1);
                }
            }
            if(ok) {
                modulesList = newModulesList;
            }
        }
        return modulesList;
    }


    function importModules(modulesList) {
        if(typeof importableModules == 'function') {
            importableModules = importableModules();
        };
        modulesList = getBundles(modulesList);
        var modulesStr = '';
        for(var iMod in modulesList) {
            var moduleName = modulesList[iMod];
            var curModule = importableModules[moduleName];
            if(curModule) {
                // Avoid importing the same module twice
                if(importedModules[moduleName] === true) {
                    continue;
                } else {
                    importedModules[moduleName] = true;
                }

                var modClass = curModule.classStr ? curModule.classStr : 'module';
                var modSrc = curModule.src;
                if(QueryString.v) {
                    // Add v= parameters to the URLs
                    modSrc += (modSrc.indexOf('?') > -1 ? '&' : '?') + 'v=' + QueryString.v;
                }
                var modId = curModule.id ? curModule.id : moduleName;
                if(curModule.type == 'stylesheet') {
                    modulesStr += '<link class="'+modClass+'" rel="stylesheet" type="text/css" href="'+modSrc+'" id="'+modId+'">';
                } else {
                    modulesStr += '<script class="'+modClass+'" type="text/javascript" src="'+modSrc+'" id="'+modId+'"></script>';
                }
            } else {
                console.error("Module '"+moduleName+"' unknown.");
            }
        }
        document.write(modulesStr);
    }


    function conditionalLanguageElements(lang) {
        var elemList = document.querySelectorAll('[data-lang]');

        for(var iElem=0; iElem< elemList.length; iElem++) {
            elem = elemList[iElem];
            var elemLangs = elem.getAttribute('data-lang').split(' ');
            var elemOk = false;
            for (var i=0; i<elemLangs.length; i++) {
                if(elemLangs[i] == lang) {
                    elemOk = true;
                    break;
                }
            }
            if(!elemOk) {
                if(typeof elem.remove === 'function') {
                    elem.remove();
                } else {
                    elem.outerHTML = ''; // IE11 support
                }
            }
        }
    }


    function importLanguageModules(defaultLang) {
        // Default language
        var lang = QueryString.language ? QueryString.language : defaultLang;

        if(typeof languageScripts == 'function') {
            languageScripts = languageScripts();
        };

        if(!languageScripts[lang]) {
            console.error("Language "+lang+" unknown, couldn't load scripts.");
        }

        importModules(languageScripts[lang]);

        if(!window.preprocessingFunctions) { window.preprocessingFunctions = []; }
        var fct = function () { conditionalLanguageElements(lang); };
        window.preprocessingFunctions.push(fct);
        window.addEventListener('DOMContentLoaded', fct);
    }

    window.importModules = importModules;
    window.conditionalLanguageElements = conditionalLanguageElements;
    window.importLanguageModules = importLanguageModules;

})();
