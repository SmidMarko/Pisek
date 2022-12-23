function initTask(subTask) {
   var state = {};
   var level;
   var answer = [];
   var data = {
      easy: {
         grid: [
            [ 2, 0, 0, 0, 1, 0 ],
            [ 0, 0, 1, 0, 1, 0 ],
            [ 0, 1, 1, 0, 0, 1 ],
            [ 2, 0, 1, 1, 0, 0 ],
            [ 2, 0, 0, 1, 0, 1 ]
         ]
      },
      medium: {
         grid: [
            [ 2, 0, 0, 1, 1, 0, 0 ],
            [ 0, 1, 0, 0, 0, 0, 0 ],
            [ 0, 1, 1, 0, 1, 0, 0 ],
            [ 2, 0, 0, 0, 1, 0, 0 ],
            [ 0, 0, 0, 1, 0, 0, 0 ],
            [ 0, 1, 1, 0, 0, 0, 1 ],
            [ 0, 0, 0, 0, 0, 1, 1 ]
         ]
      },
      hard: {
         grid: [
            [ 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0 ],
            [ 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0 ],
            [ 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1 ],
            [ 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ],
            [ 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0 ],
            [ 2, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0 ],
            [ 2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
            [ 2, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0 ]
         ]
      }
   };
   var grid;
   var nbCols;
   var nbRows;

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      grid = JSON.parse(JSON.stringify(data[level].grid));
      nbRows = grid.length;
      nbCols = grid[0].length;
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      if(!answer) {
         return;
      }
      updateGrid();
   };

   subTask.resetDisplay = function() {
      initGrid();
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = {"switchStates":[],"lock":[]};
      for(var iSwitch = 0; iSwitch < nbCols-1; iSwitch++){
         defaultAnswer.switchStates[iSwitch] = 0;
         defaultAnswer.lock[iSwitch] = 0;
      }
      return defaultAnswer;
   };

   subTask.unloadLevel = function(callback) {
      callback();
   };

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };

   function getResultAndMessage() {
      var success = true;
      for(var iRow = 0; iRow < nbRows; iRow++){
         if(countLights(iRow)%2 != 0) {
            success = false;
         }
      }
      if(success) {
         var successRate = 1;
         if ((level != "hard") || (nbSwitchesOn() == 3)) {
            return {
               successRate: 1,
               message: taskStrings.success
            };
         } else {
            return {
               successRate: 0.5,
               message: taskStrings.partial
            };
         }
      }
      return {
         successRate: 0,
         message: taskStrings.error
      };
   };

   function initGrid() {
      $("#grid").empty();
      var lightOffUrl = $("#lightOff").attr("src");
      var lightOnUrl = $("#lightOn").attr("src"); 
      var switchOffUrl = $("#switchOff").attr("src"); 
      var switchOnUrl = $("#switchOn").attr("src"); 
      var lockUrl = $("#lock").attr("src"); 
      var unlockUrl = $("#unlock").attr("src");  
      var table = "<table class=\""+level+"Mode\">";
      for(var iRow = -1; iRow <= nbRows; iRow++){
         table += (iRow == -1) ? "<thead>" : "<tr>";
         for(var iCol = 0; iCol <= nbCols; iCol++){
            if(iRow == -1){
               table += "<th>";
               if(iCol != 0 && iCol != nbCols){
                  var imgUrl = (answer.lock[iCol-1] == 0) ? unlockUrl : lockUrl;
                  table += "<img class=\"lock\" src=\""+imgUrl+"\" data_col=\""+iCol+"\">";
               }
               table += "</th>";
            }else if(iRow == 0){
               table += "<th>";
               if(iCol != 0 && iCol != nbCols){
                  var imgUrl = (answer.switchStates[iCol-1] == 0) ? switchOffUrl : switchOnUrl;
                  table += "<img class=\"switch\" src=\""+imgUrl+"\" data_col=\""+iCol+"\">";
               }else if(iCol == nbCols){
                  table += taskStrings.lightNumber;
               }
               table += "</th>";
            }else{
               table += "<td>";
               if(iCol == nbCols){
                  var nLights = countLights(iRow-1);
                  var classes = (nLights%2 != 0) ? "lightNumber red" : "lightNumber green";
                  table += "<span class=\""+classes+"\">"+nLights+"</span>";
               }else if(grid[iRow-1][iCol] != 0){
                  table += (grid[iRow-1][iCol] == 2) ? "<img src=\""+lightOnUrl+"\">" : "<img src=\""+lightOffUrl+"\">";
               }
               table += "</td>";
            }
         }
         table += (iRow == 0) ? "</thead>" : "</tr>";
      }
      table += "</table>";

      $('#grid').append(table);
      initHandlers();
   };

   function countLights(row) {
      var cpt = 0;
      for(var iCol = 0; iCol < grid[row].length; iCol++){
         if(grid[row][iCol] == 2) cpt++;
      }
      return cpt;
   };

   function initHandlers() {
      for(var iCol = 1; iCol < nbCols; iCol++){
         $('#grid .switch[data_col='+iCol+']').off("click");
         if(answer.lock[iCol-1] == 0){
            $('#grid .switch[data_col='+iCol+']').click(switchOn);
         }
      }
      
      $('#grid .lock').off("click");
      $('#grid .lock').click(lock);
   };
   
   function nbSwitchesOn() {
      var nbOn = 0;
      for (var iSwitch = 0; iSwitch < nbCols - 1; iSwitch++) {
         if (answer.switchStates[iSwitch] == 1) {
            nbOn++;
         }
      }
      return nbOn;
   }

   function switchOn() {
      var col = $(this).attr("data_col");      
      if ((level == "hard") && (nbSwitchesOn() == 4) && (answer.switchStates[col-1] == 0)) {
         // TODO:  feedback
         showFeedback(taskStrings.limitReached);
         return;
      } else {
         showFeedback("");
      }
      answer.switchStates[col-1] = 1 - answer.switchStates[col-1];
      updateGrid();
      initGrid();
   };

   function lock() {
      var col = $(this).attr("data_col"); 
      answer.lock[col-1] = 1 - answer.lock[col-1];
      initGrid();
   };
   
   function showFeedback(message) {
      $("#displayHelper_graderMessage").html(message);
      $("#displayHelper_graderMessage").css({"color": "red", "font-weight": "bold"});
   };



   function updateGrid() {
      for(var iRow = 0; iRow < nbRows; iRow++){
         for(var iCol = 1; iCol < grid[iRow].length; iCol++){
            if(grid[iRow][iCol] != 0){
               grid[iRow][iCol] = (answer.switchStates[iCol-1] == 0) ? 1 : 2;
            }
         }
      }
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
