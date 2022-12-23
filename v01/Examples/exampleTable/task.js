function initTask(subTask) {
    var state = [];

    // Get target div for table rendering
    var targetDiv = $('#tableSpace');
    if(!targetDiv.length) {
        targetDiv = $('.tableSpace');
    }
    if(!targetDiv.length) {
        console.error('Unable to find #tableSpace or .tableSpace. Please add a corresponding div in the task.');
    }

    // Make the table
    var makeTable = function() {
        var html = '<table class="answerTable">';

        for(var i=0; i<=tableOptions.rows; i++) {
            html += '<tr>'
            for(var j=0; j<=tableOptions.cols; j++) {
                html += i == 0 ? '<th>' : '<td>';
                html += i == 0 && j == 0 ? '' : '<input type="text" id="in-' + i + '-' + j + '" class="answerInput">'
                html += i == 0 ? '</th>' : '</td>';
            }
        }

        html += '</table>';
        html += '<div id="answerTableSave"><button id="answerTableSaveBtn">' + taskStrings.saveBtn + '</button></div>';
        targetDiv.html(html);
        $('#answerTableSaveBtn').click(function() {
            syncState();
            platform.validate('stay', function(){})
            });
        $('.answerInput').change(subTask.onchange);
    }

    var syncState = function(newState) {
        if(!subTask.display) { return; }
        for(var i=0; i<=tableOptions.rows; i++) {
            if(!state[i]) { state[i] = []; }
            var initRow = tableOptions.initial && tableOptions.initial[i] ? tableOptions.initial[i] : [];
            var stateRow = newState && newState[i] ? newState[i] : [];
            for(var j=0; j<=tableOptions.cols; j++) {
                var targetInput = $('#in-' + i + '-' + j);
                var newVal = state[i][j];
                if(initRow[j]) {
                    newVal = initRow[j];
                    targetInput.prop('disabled', true);
                    targetInput.val(newVal);
                } else if(stateRow[j]) {
                    newVal = stateRow[j];
                    targetInput.val(newVal);
                } else if(!newState) {
                    newVal = targetInput.val();
                }
                state[i][j] = newVal;
            }
        }
    };

    function hashCode(s) {
        var hash = 0;
        for(var i = 0; i < s.length; i++) {
            hash = (hash << 5) - hash + s.charCodeAt(i) | 0;
        }
        return Math.abs(hash);
    };

    var getTableHash = function() {
        syncState();
        var tableHash = '';
        for(var i=0; i<=tableOptions.cols; i++) {
            var rowStr = '';
            for(var j=0; j<=tableOptions.rows; j++) {
                var cell = state[j] && state[j][i] ? state[j][i] : '';
                cell = cell.trim();
                if(tableOptions.filterFunc) {
                    cell = tableOptions.filterFunc(cell);
                }
                rowStr += ' ; ' + cell;
            }
            tableHash += hashCode(rowStr) + '-';
        }
        return tableHash;
    }
    if(subTask.display) {
        window.getCurrentTableHash = getTableHash;
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    var syncStateDebounced = debounce(function() { syncState(); }, 500);
    subTask.onchange = function() {
        $('.cellError').removeClass('cellError');
        syncStateDebounced();
    }

    subTask.load = function(views, callback) {
        if(subTask.display) {
            makeTable();
        }
        syncState();
        callback();
    };
    subTask.loadLevel = subTask.load;

    subTask.getStateObject = function() {
        return state;
    };

    subTask.reloadAnswerObject = function(answerObj) {
        if(subTask.display) {
            syncState(answerObj);
        } else {
            state = answerObj;
        }
    };

    subTask.reloadAnswer = function(answerObj, callback) {
        subTask.reloadAnswerObject(answerObj);
        callback();
    }

    subTask.resetDisplay = function() {
        if(subTask.display) {
            targetDiv.empty();
            makeTable();
            syncState(state);
        }
    };

    subTask.getAnswerObject = function() {
        return state;
    };

    subTask.getDefaultAnswerObject = function() {
        return [];
    };

    subTask.unload = function(callback) {
        if(subTask.display) {
            targetDiv.empty();
        }
        callback();
    };
    subTask.unloadLevel = subTask.unload;

    subTask.getGrade = function(callback) {
        if(tableOptions.solutionHash) {
            // Actually check the solution
            var curHash = getTableHash().split('-');
            var solHash = tableOptions.solutionHash.split('-');
            var firstError = null;
            var solLength = solHash.length - 1;
            // Note : the last element of solHash is empty
            for(var i = 0; i < solLength; i++) {
                if(curHash[i] != solHash[i]) {
                    firstError = i;
                    break;
                }
            }
            if(firstError === null) {
                callback({successRate: 1, message: taskStrings.validateMsg});
            } else {
                for(var i=0; i<=tableOptions.rows; i++) {
                    $('#in-' + i + '-' + firstError).addClass('cellError');
                }
                callback({successRate: firstError / solLength, message: taskStrings.errorMsg});
            }
        } else {
            callback({successRate: 1, message: taskStrings.validateMsg});
        }
    };
}

initWrapper(initTask);
