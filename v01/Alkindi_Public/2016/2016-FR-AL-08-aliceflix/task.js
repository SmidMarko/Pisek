function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         expectedHash: 3323800,
         messages: [
            {
               id: "4215124",
               author: "Roxane",
               date: "dimanche 10 mai 2015",
               content: "Je viens de voir le film \"Un homme d'exception\". Je suis déçue, j'ai mis 4."
            },
	    {
	       id: "4312342",
               author: "Igor",
               date: "mercredi 4 novembre 2015",
               content: "Qui a vu \"Zodiac\" ? J'hésite à le regarder."
            }
         ]
      },
      medium: {
         expectedHash: 2912800,
         messages: [
	    {
	       id: "364578",
               author: "Grégoire",
               date: "lundi 11 mai 2015",
               content: "Il y a quoi de bien à voir en ce moment ?"
            },
	    {
               id: "567874",
               author: "Ingrid",
               date: "mardi 12 mai 2015",
               content: "J'avais bien aimé \"Code Mercury\" mais ça fait longtemps que je l'ai vu."
            },
            {
               id: "742592",
               author: "Damien",
               date: "mardi 12 mai 2015",
               content: "En tous cas ne regarde pas \"U-571\", je l'ai regardé ce weekend, j'ai détesté. Je lui ai mis une très mauvaise note."
            },
            {
               id: "387543",
               author: "Geoffrey",
               date: "mercredi 13 mai 2015",
               content: "J'ai lu une bonne critique de \"Benjamin Gates\" mais il ne sort que la semaine prochaine ..."
            },
	     
         ]
      },
      hard: {
         expectedHash: 797610,
         messages: [
            {
               id: "269266",
               author: "Kim",
               date: "jeudi 14 juillet 2015",
               content: "Je suis chez Julie, elle vient de me montrer \"Breaking the code\". C'est son film préféré, c'est la troisième fois qu'elle le voit !"
            },
	    {
	       id: "795484",
               author: "Antoine",
               date: "mardi 10 février 2015",
               content: "Le film \"Enigma\" ça a un rapport avec la machine à chiffrer ?"
            },
	    {
	       id: "841249",
               author: "Philippe",
               date: "samedi 1er août 2015",
               content: "Qui veut aller au ciné avec moi ?"
            },
            {
               id: "2562697",
               author: "Giancarlo",
               date: "jeudi 10 décembre 2015",
               content: "Je viens de regarder \"Imitation Game\". Ils ont pris des libertés sur l'histoire ! J'ai mis 7."
            }
         ]
      }
   };
   var startYear = 2015;
   var endYear = 2015;
   var maxResults = 10;
   var maxUserID = 1000000000;

   var months = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
   ];

   var daysBefore = {};

   function fillDayNumbers() {
      var day = 0;
      for (var year = startYear; year <= endYear; year++) {
         daysBefore[year] = {};
         for (var month = 0; month < 12; month++) {
            daysBefore[year][month] = day;
            day += daysInMonth(month, year);
         }
      }
   }
   fillDayNumbers();
   var minDateGlobal = dateToInt({ year: startYear, month: 0, day: 0, hour: 0 });
   var maxDateGlobal = dateToInt({ year: endYear, month: 11, day: 30, hour: 23 });

   var movies = [
      "Un homme d'exception",
      "Code Mercury",
      "Imitation Game",
      "Da Vinci Code",
      "Enigma",
      "Pi",
      "U-571",
      "Les messagers du vent",
      "Zodiac",
      "Benjamin Gates",
      "Breaking the code"
   ];


   var moviesParams = [
      { ratingRange: [5, 7], hourProbaView: 0.5, extraRatings: [{movie: 0, date: 218, rating: 4, userID: 421354764, minute: 42}]  },
      { ratingRange: [0, 10], hourViewsRange: [100, 200] },
      { ratingRange: [0, 10], hourViewsRange: [5, 10] },
      { ratingRange: [0, 10], hourViewsRange: [100, 200] },
      { ratingRange: [0, 10], hourViewsRange: [100, 200] },
      { ratingRange: [0, 10], hourViewsRange: [100, 200] },
      { ratingRange: [2, 10], hourViewsRange: [2, 5] },
      { ratingRange: [0, 10], hourViewsRange: [100, 200] },
      { ratingRange: [0, 10], hourViewsRange: [100, 200] },
      { ratingRange: [0, 10], hourViewsRange: [100, 200] },
      { ratingRange: [0, 10], hourProbaView: 0.1, extraRatings: [
         {movie: 10, date: dateToInt({year:2015,month:2,day:5,hour:18}), rating: 10, userID: 335476462, minute: 27},
         {movie: 10, date: dateToInt({year:2015,month:4,day:0,hour:9}), rating: 10, userID: 335476462, minute: 27},
         {movie: 10, date: dateToInt({year:2015,month:5,day:12,hour:14}), rating: 10, userID: 335476462, minute: 27}
      ] }
   ];

   function daysInMonth(month, year) {
      var defaultDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var days = defaultDays[month];
      if ((year%4 == 0) && (month == 1)) {
         days++;
      }
      return days;
   }


   function initDays(selectID) {
      $(selectID).find('option').remove().end().append($("<option />").val('').text("Jour"));
      for (var iDay = 0; iDay <= 30; iDay++) {
         $(selectID).append($("<option />").val(iDay).text(iDay + 1));
      }
   }

   function initMonths(selectID) {
      $(selectID).find('option').remove().end().append($("<option />").val('').text("Mois"));
      for (var iMonth = 0; iMonth < months.length; iMonth++) {
         $(selectID).append($("<option />").val(iMonth).text(months[iMonth]));
      }
   }

   function initYears(selectID) {
      $(selectID).find('option').remove().end().append($("<option />").val('').text("Année"));
      for (var iYear = startYear; iYear <= endYear; iYear++) {
         $(selectID).append($("<option />").val(iYear).text(iYear));
      }
   }

   function initHours(selectID) {
      $(selectID).find('option').remove().end().append($("<option />").val('').text("Heure"));
      for (var iHour = 0; iHour <= 23; iHour++) {
         $(selectID).append($("<option />").val(iHour).text(twoDigits(iHour)));
      }
   }

   function intToDate(intDate) {
      //var hour = intDate % 24;
      var intDays = intDate;//(intDate - hour) / 24;
      var year = endYear;
      while (daysBefore[year][0] > intDays) {
         year--;
      }
      var month = 11;
      while (daysBefore[year][month] > intDays) {
         month--;
      }
      var day = intDays - daysBefore[year][month];
      return {year: year, month: month, day: day};//, hour: hour};
   }

   function twoDigits(val) {
      if (val < 10) {
         return "0" + val;
      }
      return val;
   }

   function intToDateFrench(intDate, minute) {
      var date = intToDate(intDate);
      return twoDigits(date.day + 1) + "/" + twoDigits(date.month + 1) + "/" + date.year;// + " " + twoDigits(date.hour) + ":" + twoDigits(minute);
   }

   function dateToInt(date) {
      var intDays = daysBefore[2015][date.month] + date.day;
      return intDays;// * 24 + date.hour;
   }

   function initRatings(selectID, optionText) {
      $(selectID).find('option').remove().end().append($("<option />").val('').text(optionText));
      for (var iRating = 1; iRating <= 10; iRating++) {
         $(selectID).append($("<option />").val(iRating).text(iRating));
      }
   }

   function initCombos() {
      $("#movie").find('option').remove().end().append($("<option />").val('').text("Sélectionner un film"));
      for (var iMovie = 0; iMovie < movies.length; iMovie++) {
          $("#movie").append($("<option />").val(iMovie).text(movies[iMovie]));
      }
      initDays("#startDate_day");
      initDays("#endDate_day");
      initMonths("#startDate_month");
      initMonths("#endDate_month");
      initYears("#startDate_year");
      initYears("#endDate_year");
      initHours("#startDate_hour");
      initHours("#endDate_hour");
      initRatings("#minRating", "Note min");
      initRatings("#maxRating", "Note max");
   };

   function initMessages() {
      var messages = data[level].messages;
      var html = "";
      for (var iMessage = 0; iMessage < messages.length; iMessage++) {
         var message = messages[iMessage];
         html += "<div id='message_" + message.id + "' class='messageContainer'>" +
                    "<div class='messageHeader'>" + message.author + "<div class='messageDate'>" + message.date + "</div></div>" +
                    "<div class='messageContent'>" + message.content + "</div>" +
                 "</div>";
      }
      $("#messages").html(html);
      for (var iMessage = 0; iMessage < messages.length; iMessage++) {
         addHandlerMessage(iMessage);
      }
   };

   function updateSearchParams() {
      answer.movie = getSelectedMovie();
      answer.orderBy = $("#orderBy").val();
      answer.filters = {};
      answer.filters.startDate = getSelectedDate("start");
      answer.filters.endDate = getSelectedDate("end");
      answer.filters.minRating = getSelectedRating("min");
      answer.filters.maxRating = getSelectedRating("max");
   }

   function refreshList() {
      updateSearchParams();
      displayResults();
   }

   function displayResults() {
      $("#reviews").html("Recherche...");
      if (answer.movie == null) {
         $("#reviews").html("Aucun film n'a été sélectionné");
         return;
      }
      var results;
      if (answer.orderBy == "userID") {
         results = genMoviesByUserID(answer.movie, answer.filters);
      } else if (answer.orderBy == "rating") {
         results = genMoviesByRating(answer.movie, answer.filters);
      } else {
         results = genMoviesByDate(answer.movie, answer.filters);
      }
      var str = "<table class='resultsTable' cellspacing=0><tr><td>ID Utilisateur</td><td>Film</td><td>Regardé le</td><td>Note</td></tr>";
      for (var iResult = 0; iResult < results.length; iResult++) {
         var result = results[iResult];
         str += "<tr id='result_" + iResult + "'>";
         str += "<td>" + result.userID + "</td>";
         str += "<td>" + movies[answer.movie] + "</td>";
         str += "<td>" + intToDateFrench(result.date, result.minute) + "</td>";
         str += "<td>" + result.rating + "</td>";
         str += "</tr>";
      }
      str += "</table>";
      $("#reviews").html(str);
      for (var iResult = 0; iResult < results.length; iResult++) {
         addHandlerResult(iResult);
      }
   }

   function addHandlerMessage(iMessage) {
      var messages = data[level].messages;
      var message = messages[iMessage];
      $("#message_" + message.id).click(function() {
         if (answer.iMessage != undefined) {
            $("#message_" + messages[answer.iMessage].id).removeClass("selectedMessage");
            if (iMessage == answer.iMessage) {
               answer.iMessage = null;
               return;
            }
         }
         $("#message_" + message.id).addClass("selectedMessage");
         answer.iMessage = iMessage;
         refreshAnswerDisplay();
      });
   }

   function addHandlerResult(iResult) {
      $("#result_" + iResult).click(function() {
         if (answer.result != undefined) {
            $("#result_" + answer.result).removeClass("selectedResult");
            if (answer.result == iResult) {
               answer.result = null;
               answer.userID = null;
               return;
            }
         }
         $("#result_" + iResult).addClass("selectedResult");
         answer.result = iResult;
         answer.userID = parseInt($("#result_" + iResult).children(":first").text());
         refreshAnswerDisplay();
      });
   }

   function refreshAnswerDisplay() {
      if (answer.userID != null) {
         $("#selectedUserID").html(answer.userID);
      } else {
         $("#selectedUserID").html("");
      }
      if (answer.iMessage != null) {
        var message = data[level].messages[answer.iMessage];
        $("#selectedAuthor").html(message.author);
      } else {
         $("#selectedAuthor").html("");
      }
      setSelectedDate("start", answer.filters.startDate);
      setSelectedDate("end", answer.filters.endDate);
      setSelectedRating("min", answer.filters.minRating);
      setSelectedRating("max", answer.filters.maxRating);
      setSelectedMovie(answer.movie);
      setSelectedOrder(answer.orderBy);
   }

   var seed = 1;
   function myRandom() {
       var x = Math.sin(seed++) * 10000;
       return x - Math.floor(x);
   }

   function randomIntBetween(minVal, maxVal) {
      return minVal + Math.floor(Math.random() * (maxVal - minVal + 1));
   }

   function compareRatings(review1, review2) {
      if (review1.rating < review2.rating) {
         return -1;
      }
      if (review1.rating > review2.rating) {
         return 1;
      }
      return 0;
   }

   function compareUserID(review1, review2) {
      if (review1.userID < review2.userID) {
         return -1;
      }
      if (review1.userID > review2.userID) {
         return 1;
      }
      return 0;
   }

   function compareDates(review1, review2) {
      if (review1.date < review2.date) {
         return -1;
      }
      if (review1.date > review2.date) {
         return 1;
      }
      if (review1.minute < review2.minute) {
         return -1;
      }
      if (review1.minute > review2.minute) {
         return 1;
      }
      return 0;
   }

   function getNbUsers(movie, date) {
      var movieParams = moviesParams[movie];
      seed = date + movie + 427;
      if (movieParams.hourProbaView != undefined) {
         if (myRandom() < movieParams.hourProbaView) {
            return 1;
         }
         return 0;
      } else {
         var hourViewsRange = movieParams.hourViewsRange;
         var span = Math.floor(hourViewsRange[1] - hourViewsRange[0]);
         return Math.floor((myRandom() * span + hourViewsRange[0]));
      }
   }

   function genUserID(movie, date, iRank, nbUsers) {
      var userBucketStart = Math.floor((iRank * maxUserID) / nbUsers);
      var userBucketSize = Math.floor(maxUserID / nbUsers);
      seed = date + movie + iRank + 2137;
      return userBucketStart + Math.floor(myRandom() * userBucketSize);
   }

   function getRating(movie, date, userID) {
      return (userID + movie + date) % 11;
   }

   function getMinute(movie, userID) {
      return (userID + movie) % 60;
   }

   function getMinDate(filters) {
      if (filters.startDate == null) {
         return minDateGlobal;
      }
      return filters.startDate;
   }

   function getMaxDate(filters) {
      if (filters.endDate == null) {
         return maxDateGlobal;
      }
      return filters.endDate;
   }

   function addExtraRatings(list, movie, filters) {
      var movieParams = moviesParams[movie];
      if (movieParams.extraRatings == undefined) {
         return;
      }
      var extras = movieParams.extraRatings;
      for (var iExtra = 0; iExtra < extras.length; iExtra++) {
         var extra = extras[iExtra];
         if ((extra.rating < filters.minRating) || (extra.rating > filters.maxRating)) {
            continue;
         }
         if ((extra.date < getMinDate(filters)) || (extra.date > getMaxDate(filters))) {
            continue;
         }
         if (extra.movie != movie) {
            continue;
         }
         list.push(extra);
      }
   }

   function genMoviesByDate(movie, filters) {
      var movieParams = moviesParams[movie];
      var minRating = Math.max(filters.minRating, movieParams.ratingRange[0]);
      var maxRating = Math.min(filters.maxRating, movieParams.ratingRange[1]);
      var list = [];
      var curDate = getMinDate(filters);
      while (curDate <= getMaxDate(filters)) {
         var nbUsers = getNbUsers(movie, curDate); 
         for (var iRank = 0; iRank < nbUsers; iRank++) {
            var userID = genUserID(movie, curDate, iRank, nbUsers);
            var rating = getRating(movie, curDate, userID);
            if ((rating >= minRating) && (rating <= maxRating)) {
               var minute = getMinute(movie, userID);
               list.push({movie: movie, date: curDate, rating: rating, userID: userID, minute: minute});
               if (list.length >= maxResults) {
                  addExtraRatings(list, movie, filters);
                  return list.sort(compareDates).slice(0, maxResults);
               }
            }
         }
         curDate++;
      }
      addExtraRatings(list, movie, filters);
      return list.sort(compareDates).slice(0, maxResults);
   }

   function genMoviesByRating(movie, filters) {
      var list = [];
      var movieParams = moviesParams[movie];
      var curRating = filters.minRating;
      var minRating = Math.max(filters.minRating, movieParams.ratingRange[0]);
      var maxRating = Math.min(filters.maxRating, movieParams.ratingRange[1]);
      var nbAttempts = 0;
      var usedUserIDs = {};
      while (nbAttempts < 1000) {
         var randDate = randomIntBetween(getMinDate(filters), getMaxDate(filters));
         var nbUsers = getNbUsers(movie, randDate);
         var randRank = randomIntBetween(0, nbUsers - 1);
         var userID = genUserID(movie, randDate, randRank, nbUsers);
         var rating = getRating(movie, randDate,userID);
         if ((rating == curRating) && (usedUserIDs[userID] == undefined)) {
            usedUserIDs[userID] = true;
            var minute = getMinute(movie, userID);
            list.push({movie: movie, date: randDate, rating: curRating, userID: userID, minute: minute});
            if (list.length >= maxResults) {
               addExtraRatings(list, movie, filters);
               return list.sort(compareRatings).slice(0, maxResults);
            }
         }
         nbAttempts++;
      }
      var list = genAllMovies(movie,filters);
      addExtraRatings(list, movie, filters);
      return list.sort(compareRatings).slice(0, maxResults);
   }

   function genAllMovies(movie, filters) {
      var movieParams = moviesParams[movie];
      var minRating = Math.max(filters.minRating, movieParams.ratingRange[0]);
      var maxRating = Math.min(filters.maxRating, movieParams.ratingRange[1]);
      var list = [];
      for (var curDate = getMinDate(filters); curDate <= getMaxDate(filters); curDate++) {
         var nbUsers = getNbUsers(movie, curDate);
         for (var iRank = 0; iRank < nbUsers; iRank++) {
            var userID = genUserID(movie, curDate, iRank, nbUsers);
            var rating = getRating(movie, curDate, userID);
            if ((rating >= minRating) && (rating <= maxRating)) {
               var minute = getMinute(movie, userID);
               list.push({movie: movie, date: curDate, rating: rating, userID: userID, minute: minute});
            }
         }
      }
      return list;
   }

   function genMoviesByUserID(movie, filters) {
      var list = [];
      var movieParams = moviesParams[movie];
      var minRating = Math.max(filters.minRating, movieParams.ratingRange[0]);
      var maxRating = Math.min(filters.maxRating, movieParams.ratingRange[1]);
      var curRank = 0;
      var hasChanges = 1;
      while (hasChanges && (list.length < maxResults)) {
         hasChanges = false;
         for (var curDate = getMinDate(filters); curDate <= getMaxDate(filters); curDate++) {
            var nbUsers = getNbUsers(movie, curDate);
            if (curRank >= nbUsers) {
               continue;
            }
            hasChanges = true;
            var userID = genUserID(movie, curDate, curRank, nbUsers);
            var rating = getRating(movie, curDate, userID);
            if ((rating >= minRating) && (rating <= maxRating)) {
               var minute = getMinute(movie, userID);
               list.push({movie: movie, date: curDate, rating: rating, userID: userID, minute: minute});
            }
         }
         curRank++;
      }
      addExtraRatings(list, movie, filters);
      list.sort(compareUserID);
      return list.slice(0, maxResults);
   }

   var dateParts = ["month", "day"];//, "hour"];

   function getSelectedDate(type) {
      var prefix = "#" + type + "Date_";
      var date = {};
      var hasParts = false;
      var hasMissingParts = false;
      for (var iPart = 0; iPart < dateParts.length; iPart++) {
         var part = dateParts[iPart];
         date[part] = $(prefix + part).val();
         if (date[part] == '') {
            hasMissingParts = true;
         } else {
            hasParts = true;
         }
      }

      $("#" + type + "DateError").html("");
      if (hasMissingParts) {
         if (hasParts) {
            $("#" + type + "DateError").html("incomplet");
         }
         return null;
      }

      for (var iPart = 0; iPart < dateParts.length; iPart++) {
         var part = dateParts[iPart];
         date[part] = parseInt(date[part]);
      }
      return dateToInt(date);
   }

   function setSelectedDate(type, intDate) {
      var prefix = "#" + type + "Date_";
      if (intDate === null) {
         for (var iPart = 0; iPart < dateParts.length; iPart++) {
            var part = dateParts[iPart];
            $(prefix + part).val('');
         }
      } else {
         var date = intToDate(intDate);
         for (var iPart = 0; iPart < dateParts.length; iPart++) {
            var part = dateParts[iPart];
            $(prefix + part).val(date[part]);
         }
      }
   }

   function getSelectedMovie() {
      var movie = $("#movie").val();
      if (movie == '') {
         return null;
      }
      return parseInt(movie);
   }

   function setSelectedMovie(movie) {
      if (movie == null) {
         $("#movie").val('');
      } else {
         $("#movie").val(movie);
      }
   }

   function getSelectedRating(type) {
      var rating = $("#" + type + "Rating").val();
      if (rating == '') {
         if (type == "min") {
            return 0;
         } else {
            return 10;
         }
      }
      return parseInt(rating);
   }

   function setSelectedRating(type, rating) {
      if (rating === null) {
         $("#" + type + "Rating").val('');
      } else {
         $("#" + type + "Rating").val(rating);
      }
   }

   function setSelectedOrder(orderBy) {
      if (orderBy == null) {
         $("#orderBy").val('');
      } else {
         $("#orderBy").val(orderBy);
      }
   }

   subTask.loadLevel = function(curLevel) {
      level = curLevel;
      displayHelper.avatarType = "laptop";
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
   };

   subTask.resetDisplay = function () {
      initCombos();
      initMessages();
      $("#startDateError").html("");
      $("#endDateError").html("");
      $("select").unbind("click");
      $("select").change(refreshList);
      displayResults();
      refreshAnswerDisplay();
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      return {
         userID: null,
         iMessage: null,
         filters: {
            startDate: null,
            endDate: null,
            minRating: null,
            maxRating: null
         },
         movie: null,
         orderBy: null
      };
   };

   subTask.unloadLevel = function(callback) {
      callback();
   };

   
   function getResultAndMessage() {
      var messages = data[level].messages;
      var hash = "";
      if ((answer.userID === null) || (answer.iMessage === null)) {
         return {
            successRate: 0,
            message: taskStrings.dataMissing
         };
      }
      hash = (answer.userID * 42167 + messages[answer.iMessage].id) % 4217897;

      if(hash == data[level].expectedHash) {
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
