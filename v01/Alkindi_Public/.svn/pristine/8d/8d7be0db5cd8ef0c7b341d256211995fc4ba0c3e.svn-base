function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         clientsData: [
            [ "Nicolas", "Pellet", "SEPTEMBRE", "2002", "masculin" ],
            [ "Louise", "Treboux", "FEVRIER", "2009", "feminin" ],
            [ "Guillaume", "Cornuz", "MAI", "2001", "masculin" ],
            [ "Martin", "Humbert", "SEPTEMBRE", "2005", "masculin" ],
            [ "Julien", "Cornut", "DECEMBRE", "2003", "masculin" ]
         ],
         maxSteps: 4,
         targetClientsIDs: [1, 2]
      },
      medium: {
         clientsData: [
            [ "Juliette", "Brocquet", "NOVEMBRE", "2007", "feminin" ],
            [ "Amelie", "Chappuis", "JUILLET", "2008", "feminin" ],
            [ "Zoe", "Tille", "JUILLET", "2004", "feminin" ],
            [ "Marc", "Samma", "MARS", "2003", "masculin" ],
            [ "Stephane", "Nidic", "FEVRIER", "2007", "masculin" ],
            [ "Eva", "Godet", "JANVIER", "2006", "feminin" ],
            [ "Kevin", "Li", "AOUT", "2004", "masculin" ],
            [ "Sophie", "Droz", "NOVEMBRE", "2001", "feminin" ],
            [ "Vincent", "Gallard", "JANVIE", "2005", "masculin" ],
            [ "Ambre", "Joly", "MARS", "2002", "feminin" ]
         ],
         maxSteps: 4,
         targetClientsIDs: [2, 3]
      },
      hard: {
            clientsData: [
            [ "Sacha", "Maire", "MAI", "2009", "masculin" ],
            [ "Diane", "Passy", "JUILLET", "2000", "feminin" ],
            [ "Jules", "Treboux", "AOUT", "2004", "masculin" ],
            [ "Hugo", "Niquil", "JUIN", "2005", "masculin" ],
            [ "Luca", "Isella", "AVRIL", "2007", "masculin" ],
            [ "Leo", "Vernel", "FEVRIER", "2002", "masculin" ],
            [ "Eva", "Besse", "NOVEMBRE", "2004", "feminin" ],
            [ "Adam", "Sandoz", "MARS", "2008", "masculin" ],
            [ "Enzo", "Escot", "OCTOBRE", "2000", "masculin" ],
            [ "Lina", "Eveque", "DECEMBRE", "2002", "feminin" ],
            [ "Yasmine", "Rappin", "NOVEMBRE", "2008", "feminin" ],
            [ "Noémie", "Ludinard", "AVRIL", "2001", "feminin" ]
         ],
         maxSteps: 12,
         targetClientsNames: ["X", "Y", "Z"]         
      }
   };
   var clientsData;
   var nbClients;
   var nbTargetClients;
   var targetClientsIDs;
   var targetClientsNames;
   var passwords = [];
   var targetClientsPasswords = [];
   var randGen;
   var maxSteps;
   var letters = [ "A", "B", "C", "D", "E", "F", 
                  "G", "H", "I", "J", "K", "L", 
                  "M", "N", "O", "P", "Q", "R", 
                  "S", "T", "U", "V", "W", "X", 
                  "Y", "Z"];
   var month = [ "JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE" ];
   var names = ["Aebi","Alber","Babey","Badan","Besse","Brocquet","Candaux","Carraud","Chappuis", "Cornut", "Cornuz",
      "Dardel","Deladoey","Droz", "Eveque","Escot", "Fonjallaz","Francillon","Gallard","Georges","Godet","Humbert","Isella",
      "Joly","Jomini","Li","Ludinard","Maire","Mercier","Musy","Nidic","Niquil","Nussle","Paquot","Passy","Pellet","Quartier","Rappin","Rey",
      "Sandoz","Samma","Therolaz","Tille","Treboux","Uldry","Vernel","Vienne","Wicht","Zaire"];
   var selectedLine = null;

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      randGen = new RandomGenerator(subTask.taskParams.randomSeed+level.charCodeAt(0));
      clientsData = data[level].clientsData;
      nbClients = clientsData.length;
      initPasswords();
      initTargetClients();
      maxSteps = data[level].maxSteps;
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      if(!answer) {
         return;
      }
      randGen.reset(answer.seed);
      initPasswords();
      initTargetClients();
   };

   subTask.resetDisplay = function() {
      $("#line").html(taskStrings.selectLine);
      initTable();
      initSteps();
      initResult();
      initHandlers();
      hideFeedback();
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = { "steps": [], "clientsData": [], "seed": randGen.nextInt(0,1000) };
      for(var iTarget = 0; iTarget < 3; iTarget++){
         if(level == "easy"){
            defaultAnswer.clientsData.push({"month":month[0],"year":2000});
         }else{
            defaultAnswer.clientsData.push({"month":month[0],"name":names[0]});
         }
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
      for(var iClient = 0; iClient < nbTargetClients; iClient++){
         var targetClientID = targetClientsIDs[iClient];
         var targetClientData = clientsData[targetClientID];
         var actualMonth = targetClientData[2];
         if (level == "easy") {
            var actualYear = targetClientData[3];
            if(actualMonth != answer.clientsData[iClient].month || actualYear != answer.clientsData[iClient].year) {
               success = false;
            }
         } else {
            var actualName = targetClientData[1];
            if(actualName != answer.clientsData[iClient].name || actualMonth != answer.clientsData[iClient].month) {
               success = false;
            }
         }
      }
      if(success) {
         return {
            successRate: 1,
            message: taskStrings.success
         };
      }
      return {
         successRate: 0,
         message: taskStrings.error
      };
   };

   function initPasswords() {
      for(var iPassword = 0; iPassword < nbClients; iPassword++){
         passwords[iPassword] = randGen.generateSafePermutation(letters.length);
      }
   };

   function initTargetClients() {
      if (level == "hard") {
         targetClientsNames = data[level].targetClientsNames;
         nbTargetClients = targetClientsNames.length;

         targetClientsIDs = [];
         var perm1 = randGen.generateSafePermutation((nbClients / 2) - 2);
         targetClientsIDs.push(perm1[0] + 2);
         var perm2 = randGen.generateSafePermutation(nbClients / 2);
         targetClientsIDs.push(perm2[0] + nbClients / 2);
         targetClientsIDs.push(perm2[1] + nbClients / 2);
      } else {
         targetClientsIDs = data[level].targetClientsIDs;
         targetClientsNames = [];
         nbTargetClients = targetClientsIDs.length;
         for (var iTargetClient = 0; iTargetClient < nbTargetClients; iTargetClient++) {
             targetClientsNames.push("" + (data[level].targetClientsIDs[iTargetClient] + 1));
         }
      }
   };

   function initTable() {
      $('#data').empty();
      var table = "<table>";
      for(var iClient = 0; iClient < nbClients; iClient++){
         var clickableClass = "clickableRow";
         if ((level == "hard") && (iClient >= nbClients / 2)) {
            clickableClass = "unclickableRow";
         }
         table += "<tr data_id=\""+iClient+"\" class=\""+ clickableClass + "\">";
         var nCol = (level != "hard") ? 4 : 5;
         for(var iCol = 0; iCol <= nCol; iCol++){
            if(iCol == 0){
               var text = "Élève "+(iClient+1);
            }else{
               var text = encode(clientsData[iClient][iCol-1].toUpperCase(),iClient);
            }
            table +="<td>"+text+"</td>";
         }
         table += "</tr>";
      }
      table += "</table>";
      $('#data').append(table);
      reloadSteps();
   };

   function initSteps() {
      var nSteps = answer.steps.length;
      $("#nbSteps").html(nSteps);
      $("#totalSteps").html(maxSteps);
      var frame = "";
      for(var iStep = 0; iStep < nSteps; iStep++){
         frame += "Ligne "+(parseInt(answer.steps[iStep].line)+1)+" ";
         frame += (answer.steps[iStep].encrypt) ? "chiffrée " : "déchiffrée ";
         frame += "avec le mot de passe de l'élève "+answer.steps[iStep].usedClientName+".<br/>";
      }
      $('#steps').html(frame);
      var tableBottom = $('#data table').offset().top + $('#data table').height();
      var frameH = tableBottom - $('#steps').offset().top;
      $('#steps').height(frameH);
   };

   function reloadSteps() {
      var nSteps = answer.steps.length;
      for(var iStep = 0; iStep < nSteps; iStep++){
         var encrypt = answer.steps[iStep].encrypt;
         var clientID = answer.steps[iStep].usedClientID;
         var selLine = answer.steps[iStep].line;
         var isOrigin = true;
         var col = 0;
         $('#data table [data_id='+selLine+'] td').each(function(){
            if(col > 0){
               var newText = (encrypt) ? encode($(this).text(),clientID) : decode($(this).text(),clientID);
               $(this).text(newText);
               var origText = encode(data[level].clientsData[selLine][col - 1].toUpperCase(), selLine);
               if (newText != origText) {
                  isOrigin = false;
               }
            }
            col++;
         });
         if(!isOrigin){
            $('#data table [data_id='+selLine+']').addClass("mod");
         }else{
            $('#data table [data_id='+selLine+']').removeClass("mod");
         }
      }
      $('#data table [data_id='+selLine+']').addClass("lineSelected");
      selectedLine = selLine;
   };

   function initResult() {
      $('#result').empty();
      var html = "<p><b>Réponse proposée :</b></p>";
      for(var iRes = 0; iRes < nbTargetClients; iRes++){
         var targetClientID = targetClientsIDs[iRes];
         var targetClientName = targetClientsNames[iRes];
         html += "<div>";
         html += "<span><b>Élève "+targetClientName+" :</b></span>";
         if (level != "easy") {
            html += "<label for=\"client"+targetClientID+"Name\">Nom :</label>";
            html += "<select name=\"client"+targetClientID+"Name\" id=\"client"+targetClientID+"Name\" data_clientName=\""+targetClientName+"\">";
            for (var iName = 0; iName < names.length; iName++) {
		html += "<option value=\""+names[iName]+"\">" + names[iName].toUpperCase() + "</option>";
            }
            html += "</select>";
         }

	  html += "<label for=\"client"+targetClientID+"Month\">Mois :</label>";
         html += "<select name=\"client"+targetClientID+"Month\" id=\"client"+targetClientID+"Month\" data_clientName=\""+targetClientName+"\">";
         for(var iMonth = 0; iMonth < month.length; iMonth++){
            html += "<option value=\""+month[iMonth]+"\">"+month[iMonth]+"</option>";
         }
         html += "</select>";
	  if (level == "easy") {
       
            html += "<label for=\"client"+targetClientID+"Year\">Année :</label>";
            html += "<select name=\"client"+targetClientID+"Year\" id=\"client"+targetClientID+"Year\" data_clientName=\""+targetClientName+"\">";
            for(var iYear = 0; iYear < 18; iYear++){
               html += "<option>"+(2000+iYear)+"</option>";
            }
            html += "</select>";
         }
         html += "</div>";
      }
      $('#result').append(html);
      updateForm();
   };

   function updateForm() {
      for(var iRes = 0; iRes < nbTargetClients; iRes++){
         $("select[name=client"+targetClientsIDs[iRes]+"Month] option[value="+answer.clientsData[iRes].month+"]").prop("selected",true);
         if(level == "easy"){
            $("select[name=client"+targetClientsIDs[iRes]+"Year] option[value="+answer.clientsData[iRes].year+"]").prop("selected",true);
         }else{
            $("select[name=client"+targetClientsIDs[iRes]+"Name] option[value="+answer.clientsData[iRes].name+"]").prop("selected",true);
         }
      }
      var lastCheck = (answer.steps.length > 0) ? answer.steps[answer.steps.length-1].usedClientID : 0;
      
      var clientName = lastCheck + 1;
      if(level == "hard" && lastCheck > 1){
         var index = $.inArray(lastCheck,targetClientsIDs);
         clientName = targetClientsNames[index];
      }
      $("#clients input[value=\""+clientName+"\"]").prop("checked",true);
   };

   function initHandlers() {
      $('.clickableRow').off("click");
      $('.clickableRow').click(selectLine);
      $('#encode').off("click");
      $('#encode').click(processLine(true));
      $('#decode').off("click");
      $('#decode').click(processLine(false));
      $("select").change(updateAnswer);
   };

   function updateAnswer() {
      var clientId = $(this).attr("data_clientName");
      var index = $.inArray(clientId,targetClientsNames);
      var name = $(this).attr("name");
      var val = $(this).find("option:selected").val();
      if(name.search("Month") != -1){
         answer.clientsData[index].month = val;
      }else if(name.search("Year") != -1){
         answer.clientsData[index].year = val;
      }else if(name.search("Name") != -1){
         answer.clientsData[index].name = val;
      }
   };

   function selectLine() {
      hideFeedback();
      $('#data table tr').removeClass("lineSelected");
      $(this).addClass("lineSelected");
      selectedLine = parseInt($(this).attr("data_id"));
      $("#line").html(taskStrings.line + (selectedLine + 1));
   };

   function processLine(encrypt) {
      return function(){
         hideFeedback();
         var clientName = $('#clients input:checked').val();
         if(answer.steps.length >= maxSteps){
            displayHelper.showPopupMessage(taskStrings.maxStep(maxSteps),"blanket");
            return;
         }
         var clientID = null;
         for (var iClient = 0; iClient < nbTargetClients; iClient++) {
            if (clientName == targetClientsNames[iClient]) {
               clientID = targetClientsIDs[iClient];
            }
         }
         if (clientID === null) {
            clientID = parseInt(clientName) - 1;
         }
         if(selectedLine == null){
            showFeedback(taskStrings.noLineSelected);
         }else if(clientID === null){
            showFeedback(taskStrings.noPassword);
         }else{
            var col = 0;
            var isOrigin = true;
            $('#data table [data_id='+selectedLine+'] td').each(function(){
               if(col > 0){
                  var newText = (encrypt) ? encode($(this).text(),clientID) : decode($(this).text(),clientID);
                  $(this).text(newText);
                  var origText = encode(data[level].clientsData[selectedLine][col - 1].toUpperCase(), selectedLine);
                  if (newText != origText) {
                     isOrigin = false;
                  }
               }
               col++;
            });
            if (!isOrigin) {
               $('#data table [data_id='+selectedLine+']').addClass("mod");
            }else{
               $('#data table [data_id='+selectedLine+']').removeClass("mod");
            }
            var step = { "line": selectedLine, "encrypt": encrypt, "usedClientID": clientID, "usedClientName": clientName};
            addStep(step);
         }
      }
   };

   function addStep(step) {
      answer.steps.push(step);
      initSteps();
   };

   function encode(str,numPassword) {
      var newStr = "";
      for(var iLetter = 0; iLetter < str.length; iLetter++){
         var index = getIndex(str[iLetter],letters);
         if(index > -1){
            newStr += letters[passwords[numPassword][index]];
         }else{
            newStr += str[iLetter];
         }
      }
      return newStr;
   };

   function decode(str,numPassword) {
      var newStr = "";
      for(var iLetter = 0; iLetter < str.length; iLetter++){
         var index = getIndex(getIndex(str[iLetter],letters),passwords[numPassword]);
         if(index > -1){
            newStr += letters[index];
         }else{
            newStr += str[iLetter];
         }
      }
      return newStr;
   };

   function getIndex(val,array) {
      for(var i = 0; i < array.length; i++){
         if(array[i] == val){
            return i;
         }
      }
      return -1;
   };

   function showFeedback(message) {
      $("#displayHelper_graderMessage").html(message);
      $("#displayHelper_graderMessage").css({"color": "red", "font-weight": "bold"});
   };

   function hideFeedback() {
      $("#displayHelper_graderMessage").html("");
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
