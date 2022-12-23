function initTask () {
   var dataTabs = {
       siteA: {
          securityObj: {
             securityAnswer: "hiver",
             password: "Turing1254"
          },
          title: "Alicebook"
       },
      siteB: {
         securityObj: {
            username: "alice2015",
            password: "Turing1254"
         },
         title: "AlkindiMail"
      },
      siteC: {
         securityObj: {
            username: "AliceKindi",
            password: "Colossus",
            email: "alice2015@mail.ak"
         },
         title: "Bankindi"
      },
      siteD: {
         securityObj: {
            username: "@Alkindi",
            password: "SZ42",
            birthday: {
               day: 21,
               month: 8,
               year: 2000
            }
         },
         title: "Touiteur"
      }
   };
   var data = {
      easy: {
         tabs: [
            "siteA"
         ]
      },
      medium: {
         tabs: [
            "siteA",
            "siteB",
            "siteC"
         ]
      },
      hard: {
         tabs: [
            "siteA",
            "siteB",
            "siteD"
         ]
      }
   };
   var dataEmails = [
      /*
      This is the order the mails will appear, so make sure it's anti chronological.
      Note, new mails will be prepended to the HTML containing the real date.
      */
      {
         from: "Bob",
         title: "Devoir de maths",
         date: "10/10/2015",
         content: "As-tu réussi l'exercice sur le chiffrement de César ? Je suis bloqué à la deuxième question ! Peux-tu m'aider stp ?"
      },
      {
         from: "Bibliothèque ",
         title: "Livre en retard",
         date: "03/10/2015",
         content: "Sauf erreur de notre part, vous n'avez pas rendu le livre \"Histoire des codes secrets\" de S. Singh, qui sont maintenant en retard. Nous vous invitons donc à régulariser votre compte le plus rapidement possible."
      },
      {
         from: "Touiteur ",
         title: "Un nouveau folloueur",
         date: "22/09/2015",
         content: "Bonjour @Alkindi ! Vous avez un nouveau folloueur : @AdaLovelace vous suit désormais sur Touiteur."
      },
      {
         from: "Bankindi ",
         title: "Nouveau contrat",
         date: "10/09/2015",
         content: "Pour vos 15 ans, la banque Bankindi vous propose de souscrire au nouveau contrat jeune. Carte gratuite les deux premières années. Contactez votre conseiller si vous êtes intéressés."
      },
      {
         from: "Cinéclub ",
         title: "Programme de rentrée",
         date: "30/08/2015",
         content: "Bonjour à tous ! Pour la rentrée, nous avons prévu de projetter le film \"Imitation Game\" mercredi prochain à 18h. Venez nombreux !"
      },
      {
         from: "Caroline ",
         title: "Vacances",
         date: "24/08/2015",
         content: "Salut Alice ! Tu es rentrée de vacances ? Appelle-moi si tu veux qu'on se voit cette semaine, j'ai plein de choses à te raconter. A bientôt !"
      },
      {
         from: "Alicebook",
         title: "Joyeux anniversaire !",
         date: "21/08/2015",
         content: "Alicebook vous souhaite un très joyeux anniversaire ! Retrouvez tous vos souvenirs de ces dernières années sur notre site."
      },
      {
         from: "Librairie ",
         title: "Votre commande",
         date: "14/08/2015",
         content: "Le livre que vous avez commandé est arrivé. Vous pouvez venir le chercher du lundi au vendredi, de 10h à 19h."
      }
   ];
   var answer = null;
   var state = null;
   var level = null;
   var tabIDPrefix = "tab_";
   var pageIDPrefix = "browser_page_";
   var mailRowPrefix = "siteB_mail_id_";
   var mailContentPrefix = "siteB_mail_content_id_";

   task.load = function(views, callback) {
      initMail();
      savePageDefaults();
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.avatarType = "laptop";
      displayHelper.setupLevels();

      //displayHelper.hideValidateButton = true;
      //displayHelper.hideRestartButton = true;

      if (views.solutions) {
         $("#solution").show();
      }
      
      callback();
   };

   task.getDefaultStateObject = function() {
      return { level: "easy" };
   };

   task.getStateObject = function() {
      state.level = level;
      return state;
   };

   task.reloadStateObject = function(stateObj, display) {
      state = stateObj;
      level = state.level;

      if (display) {
         loadTabs();
      }
   };

   task.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      loadPageDefaults();
      loadPageHandlers();
      reloadSiteA();
      reloadSiteB();
      reloadSiteC();
      reloadSiteD();
      selectTab(data[level].tabs[0]);
   };

   task.getAnswerObject = function() {
      return answer;
   };

   task.getDefaultAnswerObject = function() {
      var answer = {};
      for(var curLevel in data) {
         answer[curLevel] = {};
         for(var iTab in data[curLevel].tabs) {
            answer[curLevel][data[curLevel].tabs[iTab]] = {};
         }
      }
      return answer;
   };
   
   var initMail = function() {
      for(var iMail = dataEmails.length - 1; iMail >= 0; iMail--) {
         addEmail(iMail, dataEmails[iMail].from, dataEmails[iMail].title, dataEmails[iMail].content, dataEmails[iMail].date);
      }
   };
   
   var loadPageDefaults = function() {
      for(var tabID in dataTabs) {
         $("#" + pageIDPrefix + tabID).html(dataTabs[tabID].defaultHTML);
      }
   };
   
   var loadPageHandlers = function() {
      $("#siteA_forgot").click(function(){
         $("#siteA_security_question").show();
      });
      $("#siteA_security_submit").click(function() {
         answer[level].siteA.securityAnswer = $("#siteA_security_answer").val();
         siteASecurity(true);
      });
      $("#siteA_submit").click(function() {
         answer[level].siteA.password = $("#siteA_password").val();
         siteAPassword(true);
         validate();
      });
      $("#siteB_submit").click(function() {
         answer[level].siteB.username = $("#siteB_user").val();
         answer[level].siteB.password = $("#siteB_password").val();
         siteBLogin(true);
         validate();
      });
      $("#siteB_list").click(function(event) {
         if(!event ||
            !event.target ||
            !event.target.parentElement ||
            !event.target.parentElement.id ||
            (event.target.parentElement.id.substring(0, mailRowPrefix.length) != mailRowPrefix)) {
            return;
         }
         var mailID = event.target.parentElement.id.substring(mailRowPrefix.length);
         showMail(mailID);
      });
      $("#siteB_back").click(function() {
         $("#siteB_mail_content_container").hide();
         $("#siteB_content").show();
      });
      $("#siteC_forgot").click(function() {
         $("#siteC_reminder").show();
      });
      $("#siteC_reminder_button").click(function() {
         answer[level].siteC.email = $("#siteC_reminder_email").val();
         siteCReminder();
      });
      $("#siteC_submit").click(function() {
         answer[level].siteC.username = $("#siteC_user").val();
         answer[level].siteC.password = $("#siteC_password").val();
         siteCLogin(true);
         validate();
      });
      $("#siteD_forgot").click(function() {
         $("#siteD_security").show();
      });
      $("#siteD_security_button").click(function() {
         var birthday = {
            day: parseInt($("#siteD_security_day").val()),
            month: parseInt($("#siteD_security_month").val()),
            year: parseInt($("#siteD_security_year").val())
         };
         for (var property in birthday) {
            if (isNaN(birthday[property])) {
               birthday[property] = "";
            }
         }
         answer[level].siteD.birthday = birthday;
         answer[level].siteD.recoverUsername = $("#siteD_security_user").val();
         siteDSecurity(true);
      });
      $("#siteD_submit").click(function() {
         answer[level].siteD.username = $("#siteD_user").val();
         answer[level].siteD.password = $("#siteD_password").val();
         siteDLogin(true);
         validate();
      });
      $("input[type='text'], input[type='password']").on("input change keydown", function(event) {
         var siteID = event.currentTarget.id.substr(4, 1);
         $("#browser_page_site" + siteID + " .error").hide();
      });
   };
   
   var savePageDefaults = function() {
      for(var tabID in dataTabs) {
         dataTabs[tabID].defaultHTML = $("#" + pageIDPrefix + tabID).html();
      }
   };
   
   var loadTabs = function() {
      var tabsHTML = "";
      for(var iTab = 0; iTab < data[level].tabs.length; iTab++) {
         var tabID = data[level].tabs[iTab];
         tabsHTML += "<span id=\"" + tabIDPrefix + tabID + "\" class=\"browser_tab";
         if(iTab === 0) {
            tabsHTML += " current";
         }
          tabsHTML += "\">" + dataTabs[tabID].title + "</span>";
      }
      $("#browser_tabs_menu").html(tabsHTML);
      $(".browser_tab").click(clickTab);
      $("#siteC_reminder_message").html("");
   };
   
   var clickTab = function() {
      var tabID = this.id.substring(tabIDPrefix.length);
      selectTab(tabID);
   };
   
   var selectTab = function(tabID) {
      $(".browser_tab").removeClass("current");
      $("#" + tabIDPrefix + tabID).addClass("current");
      $(".browser_page").hide();
      $("#" + pageIDPrefix + tabID).show();
   };

   var reloadSiteA = function() {
      siteASecurity();
      siteAPassword();
   };
   
   var siteASecurity = function(showError) {
      var progress = answer[level].siteA;
      if(!progress) {
         return;
      }
      var security = dataTabs.siteA.securityObj;
      $("#siteA_security_error").hide();
      $("#siteA_help_container").text("");
      if(progress.securityAnswer !== undefined) {
         $("#siteA_security_question").show();
         $("#siteA_security_answer").val(progress.securityAnswer);
         
         var cleanAnswer = progress.securityAnswer.replace(/[^A-Za-z]*/g, "").toLowerCase();
         if(cleanAnswer.indexOf(security.securityAnswer.toLowerCase()) > -1) {
            $("#siteA_help_container").text("Votre mot de passe est \"" + security.password + "\"");
         }
         else if(showError) {
            $("#siteA_security_error").show();
         }
      }
   };
   
   var siteAPassword = function(showError) {
      var progress = answer[level].siteA;
      if(!progress) {
         return;
      }
      var security = dataTabs.siteA.securityObj;
      $("#siteA_login_error").hide();
      $("#siteA_password").val(progress.password);
      if((progress.password != undefined) && (progress.password.toLowerCase() === security.password.toLowerCase())) {
         $("#siteA_login_container").hide();
         $("#siteA_content").show();
         $("." + level).show();
      }
      else if(showError) {
         $("#siteA_login_error").show();
      }
   };
   
   var reloadSiteB = function() {
      siteBLogin();
   };
   
   var siteBLogin = function(showError) {
      var progress = answer[level].siteB;
      if(!progress) {
         return;
      }
      var security = dataTabs.siteB.securityObj;
      $("#siteB_login_error").hide();
      $("#siteB_user").val(progress.username);
      $("#siteB_password").val(progress.password);
      if((progress.username != undefined) && (progress.password != undefined) &&
         (progress.username.toLowerCase() === security.username.toLowerCase()) &&
         (progress.password.toLowerCase() === security.password.toLowerCase())) {
         $("#siteB_login_container").hide();
         $("#siteB_list_title").text("Boîte de réception de l'adresse " + security.username + "@mail.ak :");
         $("#siteB_content").show();
      }
      else if(showError) {
         $("#siteB_login_error").show();
      }
   };
   
   var showMail = function(mailID) {
      var titleStr = $("#" + mailRowPrefix + mailID + " .siteB_mail_title").text();
      var dateStr = $("#" + mailRowPrefix + mailID + " .siteB_mail_date").text();
      var fromStr = $("#" + mailRowPrefix + mailID + " .siteB_mail_from").text();
      $("#siteB_mail_current_title").text(titleStr);
      $("#siteB_mail_current_date").text(dateStr);
      $("#siteB_mail_current_from").text(fromStr);
      
      $("#siteB_content").hide();
      $(".siteB_mail_content").hide();
      $("#siteB_mail_content_container").show();
      $("#" + mailContentPrefix + mailID).show();
   };
   
   var reloadSiteC = function() {
      siteCReminder();
      siteCLogin();
   };
   
   var siteCReminder = function() {
      if(!answer[level].siteC || (answer[level].siteC.email == undefined)) {
         $("#siteC_reminder_message").hide();
         return;
      }
      if ((answer[level].siteC.email.toLowerCase() !== dataTabs.siteC.securityObj.email)) {
         $("#siteC_reminder_message").html("</br><span style='color:red'>Adresse email non reconnue</span>");
         $("#siteC_reminder_message").show();
         return;
      }
      $("#siteC_reminder_message").show();
      $("#siteC_reminder_message").html("</br>Un message contenant votre identifiant et votre mot de passe vous a été envoyé !");
      var content = "Votre identifiant est \"" + dataTabs.siteC.securityObj.username + "\" et votre mot de passe est \"" + dataTabs.siteC.securityObj.password + "\"";
      addEmail(101, "Bankindi", "Mot de passe", content);
   };
   
   var siteCLogin = function(showError) {
      var progress = answer[level].siteC;
      if(!progress) {
         return;
      }
      var security = dataTabs.siteC.securityObj;
      $("#siteC_login_error").hide();
      $("#siteC_user").val(progress.username);
      $("#siteC_password").val(progress.password);
      if((progress.username != undefined) && (progress.password != undefined) &&
         (progress.username.toLowerCase() === security.username.toLowerCase()) &&
         (progress.password.toLowerCase() === security.password.toLowerCase())) {
         $("#siteC_login_container").hide();
         $("#siteC_content").show();
      }
      else if(showError) {
         $("#siteC_login_error").show();
      }
   };
   
   var reloadSiteD = function() {
      siteDSecurity();
      siteDLogin();
   };
   
   var siteDSecurity = function(showError) {
      var progress = answer[level].siteD;
      if(!progress) {
         return;
      }
      var security = dataTabs.siteD.securityObj;
      $("#siteD_security_message").hide();
      $("#siteD_security_error").hide();
      if(progress.birthday !== undefined) {
         $("#siteD_security").show();
         $("#siteD_security_user").val(progress.recoverUsername);
         $("#siteD_security_day").val(progress.birthday.day);
         $("#siteD_security_month").val(progress.birthday.month);
         $("#siteD_security_year").val(progress.birthday.year);
         if(Beav.Object.eq(progress.birthday, security.birthday) &&
            (progress.recoverUsername != undefined) &&
            (progress.recoverUsername.toLowerCase() == security.username.toLowerCase() || "@" + progress.recoverUsername.toLowerCase() == security.username.toLowerCase())) {
            $("#siteD_security_message").show();
            addEmail(102, "Touiteur", "Mot de passe", "Votre identifiant est \"" + security.username + "\" et votre mot de passe est \"" + security.password + "\"");
         }
         else if(showError) {
            $("#siteD_security_error").show();
         }
      }
   };
   
   var siteDLogin = function(showError) {
      var progress = answer[level].siteD;
      if(!progress) {
         return;
      }
      var security = dataTabs.siteD.securityObj;
      $("#siteD_login_error").hide();
      $("#siteD_user").val(progress.username);
      $("#siteD_password").val(progress.password);
      if((progress.password != undefined) &&
         (progress.password.toLowerCase() === security.password.toLowerCase()) &&
         (progress.username != undefined) &&
         (progress.username.toLowerCase() === security.username.toLowerCase() || "@" + progress.username.toLowerCase() === security.username.toLowerCase())) {
         $("#siteD_login_container").hide();
         $("#siteD_content").show();
      }
      else if(showError) {
         $("#siteD_login_error").show();
      }
   };
   
   var addEmail = function(id, from, title, content, dateString) {
      var mailID = mailRowPrefix + id;
      var mailContentID = mailContentPrefix + id;
      if($("#" + mailID).length > 0) {
         return;
      }
      if(!dateString) {
         var date = new Date();
         dateString = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
      }
      var rowHTML = "<tr class=\"siteB_mail\" id=\"" + mailID + "\">"         +
         "<td class=\"siteB_mail_from\">"                                     +
            from                                                              +
         "</td>"                                                              +
         "<td class=\"siteB_mail_title\">"                                    +
            title                                                             +
         "</td>"                                                              +
         "<td class=\"siteB_mail_date\">"                                     +
            dateString                                                        +
         "</td>"                                                              +
      "</tr>";
      
      $("#siteB_list tr:first-child").after(rowHTML);
      
      var contentHTML = "<div id=\"" + mailContentID + "\" class=\"siteB_mail_content\">" +
         content                                                                          +
      "</div>";
      $("#siteB_mail_content_list").prepend(contentHTML);
   };
   
   var validate = function() {
      if(getResultAndMessage(answer, level).result == "correct") {
         platform.validate("done");
      }
   };
   
   var getResultAndMessage = function(answer, level) {
      for(var iTab in data[level].tabs) {
         var tabID = data[level].tabs[iTab];
         var security = dataTabs[tabID].securityObj;
         var progress = answer[level][tabID];
         //if(!Beav.Object.eq(security, progress)) {
         if(((progress.password == undefined) || (security.password.toLowerCase() !== progress.password.toLowerCase())) ||
            (security.username !== undefined && security.username.toLowerCase() !== progress.username.toLowerCase() && (tabID != "siteD" || security.username.toLowerCase() !== "@" + progress.username.toLowerCase()))) { 
            return {
               result: "error",
               message: "Vous ne vous êtes pas connecté à tous les sites."
            };
         }
      }
      return {
         result: "correct"
      };
   };

   grader.gradeTask = function(strAnswer, token, callback) {
      task.getLevelGrade(strAnswer, token, callback, null);
   };

   task.getLevelGrade = function(strAnswer, token, callback, gradedLevel) {
      var answer = $.parseJSON(strAnswer);
      var taskParams = displayHelper.taskParams;
      var scores = {};
      var messages = {};
      var maxScores = displayHelper.getLevelsMaxScores();

      // clone the state to restore after grading.
      var oldState = $.extend({}, task.getStateObject());
      for (var curLevel in data) {
         state.level = curLevel;
         task.reloadStateObject(state, false);

         var resultAndMessage = getResultAndMessage(answer, curLevel);
         if (resultAndMessage.result == "correct") {
            scores[curLevel] = maxScores[curLevel];
            messages[curLevel] = "Bravo ! Vous avez réussi.";
         }
         else {
            scores[curLevel] = taskParams.noScore;
            messages[curLevel] = resultAndMessage.message;
         }
      }

      task.reloadStateObject(oldState, false);
      if (!gradedLevel) {
         displayHelper.sendBestScore(callback, scores, messages);
      } else {
         callback(scores[gradedLevel], messages[gradedLevel]);
      }
   };
}

initTask();
