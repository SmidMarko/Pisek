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
         database: [
            ["juju53", "plat animal couleur et pays préférés"],
            ["mamourx", "comme d'hab mais à l'envers"],
            ["pluto18", "commence par A et finit pa 9, 10 lettres"],
            ["sharkbait", "ville et jour où j'ai rencontré Max"],
            ["malikastou", "12...6"],
            ["starfleet", "noté page 28 de mon bouquin préféré"],
        //    ["juju53", "plat animal couleur et pays préférés"],
        //    ["mamourx", "comme d'hab mais à l'envers"],
        //    ["pluto18", "commence par A et finit pa 9, 10 lettres"],
        //    ["sharkbait", "ville et jour où j'ai rencontré Max"],
        //    ["malikastou", "saison préférée"],
        //    ["starfleet", "noté page 28 de mon bouquin préféré"]
         ],
         // This is hash(user+hash(password))
         answerHash:  47557908  // hash(1+hash("hiver"))    // TODO
      },
      medium: {
         headers: ["login", "hint"],
         titleLengths: ["short", "short"],
         columnSizes: ["large", "large"],
         database: [
            ["juju53", "plat animal couleur et pays préférés"],
            ["mamourx", "comme d'hab mais à l'envers"],
            ["pluto18", "commence par A et finit pa 9, 10 lettres"],
            ["sharkbait", "ville et jour où j'ai rencontré Max"],
            ["malikastou", "saison préférée"],
            ["starfleet", "noté page 28 de mon bouquin préféré"],
            ["juju53", "plat animal couleur et pays préférés"],
            ["mamourx", "comme d'hab mais à l'envers"],
            ["pluto18", "commence par A et finit pa 9, 10 lettres"],
            ["sharkbait", "ville et jour où j'ai rencontré Max"],
            ["malikastou", "saison préférée"],
            ["starfleet", "noté page 28 de mon bouquin préféré"]
         ],
         // This is hash(user+hash(password))
         answerHash: 123 // TODO
      },
      hard: {
         headers: ["login", "indice", 'prénom', "année", "haché du mdp"],
         titleLengths: ["short", "long", "short", "short", "short"],
         columnSizes: ["small", "large", "small", "small", "small"],
         database: [
            ["anaispouplard", "mon vieux password", "Anaïs", "2005", "17ef73a8b635d89a"],
            ["nanouchka", "prénom+année sur 2 chiffres", "", "", "17ef73a8b635d89a"],
            ["acmilan", "choux chien cheville", "Spéphane", "2004", "110edf2294fb8bf4"  ],
            ["neymar2005", "mon relou de frère", "Guillaume", "2003", "83ab635d65fa973c" ],
            ["dounia94", "j'fais mon retour", "Dounia", "2004", "85832ff56362ab86"],
            ["realrealreal", "le plus grand génie du foot", "Kevin","2003","1d2bc778a789576b" ],
            ["queenofnight", "black rose snake skin", "Juliette", "2004", "5918632a901fA518" ],
            ["thomasduris", "delorean chien cheveux blancs lunettes tonnerre", "Thomas", "2003", "a694c65e24b9116a"],
            ["raybelle", "el che", "Mathilde", "2003", "967a4b3817329283"],
            ["lulu2005", "4 pat", "Lucie","2002","9437756a974582bc"]
         ],
         // This is hash(user+hash(password))
         answerHash: 123 // TODO
      }
   };

   subTask.loadLevel = function(curLevel) {
      displayHelper.hideValidateButton = true;
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
         html += "<tr>";
         $.each(row, function(index, value) {
            var className = "col-" + data[level].columnSizes[index];
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
         showFeedback(taskStrings.error);
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
      var userHash = hashString(answer.user + hashString(answer.password));
      if(userHash === data[level].answerHash) {
         return {
            successRate: 1,
            message: taskStrings.success
         };
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
