function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var headers;
   var database;
   var headerToIndex;
   var data = {
      easy: {
         // These must correspond to the fields of taskStrings.headerInfo.
         headers: ["login", "hint"],

         // These indicate the field to use for the table header, e.g. headerInfo.login.short.
         titleLengths: ["short", "long"],

         // These indicate the css class for each column, e.g. "col-small".
         columnSizes: ["small", "large"],
         contentClasses: ["mono", ""],
         database: [
            ["acmilan34", "numero de telephone"],
            ["elektrika", "plat-animal-couleur-pays"],
            ["romainlight", "comme d'hab mais à l'envers"],
            ["worldpiece", "commence par A et finit par 9, 10 lettres"],
            ["sharkbay", "ville et jour où j'ai rencontré Max"],
            ["juju96", "mon jour de la semaine préféré"],
            ["bijoujou", "xn44...."],
            ["alcatraz", "noté page 428 de mon livre"],
            ["zazibu", "en anglais qui commence par A"]
         ],
         answerHashes:  [57115445]
      },
      medium: {
         headers: ["login", "hint", "hash"],
         titleLengths: ["short", "long", "long"],
         columnSizes: ["small", "large", "large"],
         contentClasses: ["mono", "", "mono"],
         database: [
            ["mimi43", "nom du chanteur de mon ancien groupe",          "1a5b219da921f720"],
            ["starfleet", "mon ancien numéro de téléphone",             "219aa1832b7e4810"],
            ["kokola", "commence par 'xyz'",                            "892b902b5a84de92"],
            ["doctopie",   "mon équipe et ma couleur préférées",        "a82742cb9ed8ba25"],
            ["nanouchka", "nom du ruisseau derrière chez julie",        "90e26da96210b92a"],
            ["tomagic", "4 meilleures amies",                           "e7c2abb15207d2b0"],
            ["pluto15", "celui avec 'kor' au milieu",                   "892b902b5a84de92"],
            ["freeeedom", "comme sur alicebook",                        "12b7502cea84df23"],
            ["malikastar", "nom de mon premier perso D&G",              "b07ba247139acb72"],
            ["erika", "celui qui se termine par 42",                    "892b902b5a84de92"]
         ],
          answerHashes: [15759263, 16597330, 48921530]
      },
      hard: {
         headers: ["login", "hint", 'firstName', "year", "hash"],
         titleLengths: ["short", "long", "short", "short", "long"],
         columnSizes: ["small", "medium", "small", "small", "medium"],
         contentClasses: ["mono", "", "", "", "mono"],
         database: [
             ["anais22",      "mon vieux password", "Anaïs", "",            "e9xbw02xha84dljh"],
             ["happyface",    "prenom+année", "", "",                       "e71f73a8b635d89a"],
             ["muzikos",      "choux chien cheville", "Stéphane", "2004",   "110edf2294fb8bf4"],
             ["neymar2005",   "mon prénom", "", "2003",                     "83ab635d65fa973c"],
             ["dounia94",     "j'fais mon retour", "Dounia", "",            "85832ff56362ab86"],
             ["realrealreal", "génie du foot", "Kevin","",                  "1d2bc778a789576b"],
             ["juju04",       "2 fois mon code PIN", "Juliette", "2004",    "4d52dc2e73d50250"],
             ["wlogan",       "", "", "2000",                               "b27e9708690ad832"],
             ["totor99",      "", "Victor", "1999",                         "f0e494ec8b873ab7"],
             ["deluco",       "meilleure BD", "Victor", "",                 "49c4a157e1fb6d11"],
             ["superlord",    "", "Victor", "",                             "d42e1f2268b50941"],
             ["lili234",      "prénom de ma tante", "", "2001",             "5918632a901fa518"],
             ["thomas",       "cheveux blancs", "Thomas", "",               "a694c65e24b9116a"],
             ["raybelle",     "el che", "", "2003",                         "967a4b3817329283"],
             ["bob42",        "", "Bob","2002",                             "9437756a974582bc"],
             ["lulu2005",     "ma meilleure amie", "Lucie","2005",          "5918632a901fa518"],
             ["remilo",       "ville de naissance", "Guillaume","",         "3e0078195cd61359"],
             ["reine",        "film favori", "Clémentine","",               "152d953dc16e0079"],
             ["a36du77",      "je mets pas d'indice", "","1997",            "9f06243abcb89c7e"],
             ["solene",       "trop facile", "","",                         "9f06243abcb89c7e"],
             ["jessy",        "", "Jessica","2001",                         "9f06243abcb89c7e"],
             ["supersmile",   "", "Latifa","1998",                          "e0c331c61d871fa7"],
             ["queenofnight", "", "","2001",                                "e71f73a8b635d89a"],
             ["alice12",      "toujours pareil", "","",                     "e71f73a8b635d89a"]
         ],
          answerHashes: [32094176, 5496647, 9183221] 
      }
   };

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      displayHelper.hideValidateButton = true;
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
      level = curLevel;
      headers = data[level].headers;
      headerToIndex = {};
      $.each(headers, function(index, header) {
         headerToIndex[header] = index;
      });
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      if(!answer) {
         return;
      }
   };

   subTask.resetDisplay = function() {
      showFeedback(null);
      $("#userField").val(answer.user);
      $("#passwordField").val(answer.password);
      initSort();
      initHeaders();
      initRows();
      initHandlers();
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      return {
         user: "",
         password: ""
      };
   };

   subTask.unloadLevel = function(callback) {
      $("#sortList").off("change");
      $("#userField").off("input change keyup");
      $("#passwordField").off("input change keyup");
      $("#submitLogin").off("click");
      callback();
   };

   function initSort() {
      var html = "";
      $.each(headers, function(index, header) {
         html += "<option value=\"" + header + "\">" + taskStrings.headerInfo[header].sortName + "</option>";
      });
      $("#sortList").html(html);
   }

   function onSortChange() {
      initRows();
   }

   function initHeaders() {
      var html = "<thead><tr>";
      $.each(headers, function(index, header) {
         var className = "col-" + data[level].columnSizes[index];
         html += "<th class=\"" + className + "\">";
         html += taskStrings.headerInfo[header][data[level].titleLengths[index]];
         html += "</th>";
      });
      html += "</tr></thead>";
      $("#databaseHeaders").html(html);
   }

   function initRows() {
      database = $.extend(true, [], data[level].database);
      var sortOption = $("#sortList").val();
      var sortColIndex = headerToIndex[sortOption];
      database.sort(function(row1, row2) {
         return row1[sortColIndex].localeCompare(row2[sortColIndex]);
      });

      var html = "<tbody>";
      $.each(database, function(rowIndex, row) {
         html += "<tr id='row_" + rowIndex + "'>";
         $.each(row, function(index, value) {
            var className = "col-" + data[level].columnSizes[index] + " " + data[level].contentClasses[index];
            html += "<td class=\"" + className + "\">";
            html += value;
            html += "</td>";
         });
         html += "</tr>";
      });
      html += "</tbody>";
      $("#databaseRows").html(html);
   }

   function initHandlers() {
      $("#sortList").off("change");
      $("#sortList").change(onSortChange);
      $("#userField").off("input change keyup");
      $("#userField").on("input change keyup", onLoginChange);
      $("#passwordField").off("input change keyup");
      $("#passwordField").on("input change keyup", onLoginChange);
      $("#submitLogin").off("click");
      $("#submitLogin").click(onSubmit);
   }

   function onLoginChange() {
      showFeedback(null);
      answer.user = $("#userField").val();
      answer.password = $("#passwordField").val();
   }

   function onSubmit() {
      showFeedback(null);
      var resultAndMessage = getResultAndMessage();
      if(resultAndMessage.successRate === 1) {
         platform.validate("done");
      }
      else {
         showFeedback(resultAndMessage.message);
      }
   }

   function hashString(string) {
      var value = 0;
      for(var iLetter = 0; iLetter < string.length; iLetter++) {
         var code = string.charCodeAt(iLetter);
         value += (code * 58349) % 57298363;
         value = (value * 15013) % 57298363;
      }
      return value;
   }

   function showFeedback(string) {
      if(string === null || string === undefined || string === "") {
         string = "&nbsp;";
      }
      $("#feedback").html(string);
   }

   function getResultAndMessage() {
      if (answer.password.length < 8) {
         return {
            successRate: 0,
            message: taskStrings.tooShort
         }
      }
      var userHash = hashString(answer.user + hashString(answer.password.toLowerCase()));
      //alert(userHash);
      for (var iHash = 0; iHash < data[level].answerHashes.length; iHash++) {
         if(userHash === data[level].answerHashes[iHash]) {
            return {
               successRate: 1,
               message: taskStrings.success
            };
         }
      }
      return {
         successRate: 0,
         message: taskStrings.error
      };
   }

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
