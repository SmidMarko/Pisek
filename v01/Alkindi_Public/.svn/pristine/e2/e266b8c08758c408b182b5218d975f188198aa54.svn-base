function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         rules: [
            "tenSymbols",
            "numberOfDigits",
            "numberOfLowerCase",
            "numberOfUpperCase",
         ],
         passwords: {
            toAccept: ["ab1CDE", "GHI23", "4JKLmn"],
            toReject: ["ABcde1", "uVwXyZ"]
         }
      },
      medium: {
         rules: [
            "tenSymbols",
            "numberOfLowerCase",
            "numberOfUpperCase",
            "numberOfDigits",
            "numberOfSpecial",
            "length"
         ],
         passwords: {
            toAccept: ["AW!Ped#", "m?BKxy@", "TR%UdW!", "?lk?nd?"],
            toReject: ["ab$ZC@", "F#92s!wB", "aCGde?b", "Y*Z#KW#"]
         }
      },
      hard: {
         rules: [
            "tenSymbols",
            "numberOfLowerCase",
            "numberOfUpperCase",
            "numberOfDigits",
            "numberOfSpecial",
            "length"
         ],
         passwords: {
            toAccept: ["8*3L5Q_#N", "F$893?PK!"],
             toReject: ["?1@2BK#","CS0bsX3LM","$13J416*2"]
         }
      }
   };

   var paper;
   var paperWidth = 730;
   var paperHeight;

   var rulesAreaWidth = 500;
   var passwordsAreaWidth = 210;
   var passwordsAreaHeight = 200;

   var marginX = 20;
   var marginY = 20;
   var headerH = 40;
   var ruleH = 70;
   var passwordH = 40;
   var switchW = 40;
   var switchH = 20;
   var rng;
   var labelRaph = [];
   var switchRaph = [];
   var passwordsStatuses;
   var nbRules;
   var passwords;
   var minPossibilities = 1000000000000000000;
   var atLeast = {
      choicesM: ["aucun", "au moins un", "au moins deux", "au moins trois", "uniquement des"],
      choicesF: ["aucune", "au moins une", "au moins deux", "au moins trois", "uniquement des"],
      minValues: [0, 1, 2, 3, -1],
      maxValues: [0, 100, 100, 100, -1]
   }
   var lengthChoices = [5,6,7,8,9];
    
   var colors = {
      grey: "#EAEAEA",
      darkGrey: "#cbc7c9",
      darkerGrey: "#8b8789",
      evenDarkerGrey: "#606060",
      green: "#88BB88",
      darkerGreen: "#508855",
      black: "#30242B",
      red: "#FFBBBB",
      darkerRed: "#FF3030",
      lightGreen: "#CAE1CA"
   };
   
   var frameAttr = {
      stroke: "none",
      fill: colors.grey,
      r: 5
   };
   var titleAttr = {
      "font-size": 14,
      "font-weight": "bold",
      fill: colors.darkerGreen
   };
   var titleAttrGreen = {
      "font-size": 14,
      "font-weight": "bold",
      fill: colors.darkerGreen
   };
   var titleAttrRed = {
      "font-size": 14,
      "font-weight": "bold",
      fill: colors.darkerRed
   };
   var passwordAttr = {
      "font-size": 18,
      "font-weight": "bold",
      fill: colors.evenDarkerGrey,
      "font-family": "monospace",
      "letter-spacing": "0.1em"
   };
   var lineAttr = {
      stroke: colors.green
   };
   var passLineAttr = {
      stroke: colors.grey
   };
   var passRectAttr = {
      correct: {
         stroke: "none",
         fill: colors.lightGreen
      },
      incorrect: {
         stroke: "none",
         fill: colors.red
      },
      neutral: {
         stroke: "none"
      }
   };
   var passStatusAttr = {
      correct: {
         fill: colors.darkerGreen
      },
      incorrect: {
         fill: colors.darkerRed
      }
   };
   var genLineAttr = {
      stroke: colors.darkGrey
   };
   var labelAttr = {
      "font-size": 14,
      fill: colors.black,
      "text-anchor": "start"
   };
   var switchAttr = {
      rect: {
         stroke: "none",
         fill: colors.darkGrey,
         width: switchW,
         height: switchH,
         r: switchH/2
      },
      circle: {
         stroke: "none",
         r: switchH/2
      },
      onCircle: {
         fill: colors.green,
      },
      offCircle: {
         fill: colors.darkerGrey,
      },
      clickZone: {
         stroke: "none",
         fill: "black",
         opacity: 0,
         width: 110,
         height: switchH
      }
   };
   var selectFrameAttr = {
      stroke: colors.grey,
      fill: "white"
   };

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      rng = new RandomGenerator(subTask.taskParams.randomSeed);
      nbRules = data[level].rules.length;
      passwords = data[level].passwords;
      var nbPasswords = passwords.toAccept.length + passwords.toReject.length + 1;
      var heightPasswords = nbPasswords * passwordH + 3 * headerH + 2 * marginY;
      if (level == "hard") {
         heightPasswords += headerH + passwordH + marginY;
      }
      paperHeight = Math.max(headerH + nbRules * ruleH, heightPasswords);
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      if(!answer) {
         return;
      }
      rng.reset(answer.seed);
   };

   subTask.resetDisplay = function() {
      initPaper();
      initRules(paper, 0, 0);
      for (var iRule = 0; iRule < nbRules; iRule++) {
         $("#rule" + iRule + "Select").val(answer.rulesParams[iRule]);
      }
      initPasswords(paper, rulesAreaWidth + marginX, 0);
      updatePasswords();
      initHandlers();
      displayError("");
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = {
         rulesSelected: Beav.Array.make(nbRules, 0),
         rulesParams: Beav.Array.make(nbRules, 0),
         seed: rng.nextInt(0,10000)
      };
      defaultAnswer.rulesSelected[0] = 1;
      if (level == "easy") {
      } else if (level == "medium") {
      } else {
      }
      return defaultAnswer;
   };

   subTask.unloadLevel = function(callback) {
      $(".ruleParam").remove();
      callback();
   };

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };

   function getResultAndMessage() {
      for (var iPass = 0; iPass < passwords.toAccept.length; iPass++) {
         if (!passwordAccepted(passwords.toAccept[iPass])) {
            return { successRate: 0, message: taskStrings.passwordToAcceptRejected };
         }
      }
      for (var iPass = 0; iPass < passwords.toReject.length; iPass++) {
         if (passwordAccepted(passwords.toReject[iPass])) {
            return { successRate: 0, message: taskStrings.passwordToRejectAccepted };
         }
      }
      if (level == "hard") {
         var possibilities = computePossibilities(data[level].rules, answer.rulesSelected, answer.rulesParams);
         if (possibilities <= minPossibilities) {
            return { successRate: 0, message: taskStrings.notEnoughPossibilities };
         }
      }
      
      return { successRate: 1, message: taskStrings.success };
   };

   function initPaper() {
      paper = subTask.raphaelFactory.create("paper","paper",paperWidth,paperHeight);
   };

   function initRules(paper, x, y) {
      var height = nbRules * ruleH + headerH;
      paper.rect(x, y, rulesAreaWidth, height)
           .attr(frameAttr);
      paper.text(x + rulesAreaWidth/2, y + headerH/2, taskStrings.selectRules)
           .attr(titleAttr);
      paper.path("M"+ x + " " + (y + headerH) + ",H" + (x + rulesAreaWidth))
           .attr(lineAttr);

      for(var iRule = 0; iRule < nbRules; iRule++){
         var yRule = y + headerH + iRule * ruleH;
         addRule(paper, x + marginX, yRule + marginY, iRule);
         updateRule(iRule);
         if (iRule != nbRules - 1) {
            var path = paper.path("M" + (x + marginX) + " " + (yRule + ruleH) + ",H" + (x + rulesAreaWidth - marginX))
                            .attr(genLineAttr);
         }
      }
   };
   
   function drawPasswordsList(paper, x, y, title, passwords, statuses) {
      var height = headerH + passwords.length * passwordH;
      paper.rect(x, y, passwordsAreaWidth, height)
           .attr(frameAttr);
      paper.text(x + passwordsAreaWidth / 2, y + headerH / 2, title)
           .attr(titleAttr);
      paper.path("M"+ x + " " + (y + headerH) + ",H" + (x + passwordsAreaWidth)).attr(lineAttr);

      for (var iPass = 0; iPass < passwords.length; iPass++) {
         var yPass = y + headerH + iPass * passwordH;
         var rect = paper.rect(x, yPass, passwordsAreaWidth, passwordH)
                         .attr(passRectAttr.correct);
         statuses.rects.push(rect);
         var line = paper.path("M" + x + " " + (yPass + passwordH) + ",H" + (x + passwordsAreaWidth))
                         .attr(passLineAttr);
         var label = paper.text(x + passwordsAreaWidth / 3.2, yPass + passwordH / 2, passwords[iPass])
                          .attr(passwordAttr);
         var statusLabel = paper.text(x + passwordsAreaWidth * 3.9 / 5, yPass + passwordH / 2, "STATUS")
                          .attr(titleAttr);
         statuses.labels.push(statusLabel);
      }
   }

   function drawPossibilities(paper, x, y, statuses) {
      var height = headerH + passwordH;
      paper.rect(x, y, passwordsAreaWidth, height)
           .attr(frameAttr);
      paper.text(x + passwordsAreaWidth / 2, y + headerH / 2, taskStrings.possibilitiesTitle)
           .attr(titleAttr);
      paper.path("M"+ x + " " + (y + headerH) + ",H" + (x + passwordsAreaWidth)).attr(lineAttr);

      var yPass = y + headerH;
      statuses.rect = paper.rect(x, yPass, passwordsAreaWidth, passwordH)
                           .attr(passRectAttr.neutral);
      statuses.label = paper.text(x + passwordsAreaWidth / 2, yPass + passwordH / 2, 0)
                           .attr(titleAttr);
   }
   
   function drawTarget(paper, x, y) {
      var height = headerH + passwordH;
      paper.rect(x, y, passwordsAreaWidth, height)
           .attr(frameAttr);
      paper.text(x + passwordsAreaWidth / 2, y + headerH / 2, taskStrings.targetTitle)
           .attr(titleAttr);
      paper.path("M"+ x + " " + (y + headerH) + ",H" + (x + passwordsAreaWidth)).attr(lineAttr);

      var yPass = y + headerH;
      var rect = paper.rect(x, yPass, passwordsAreaWidth, passwordH)
                      .attr(passRectAttr.neutral);
      var label = paper.text(x + passwordsAreaWidth / 2, yPass + passwordH / 2, "1 000 000 000 000 000 000")
                       .attr(titleAttr);
   }
   

   
   function regexpSatisfiesOccConstraint(regexp, ruleParam, passValue) {
      var nbMatches = (passValue.match(regexp) || []).length;
      if (atLeast.minValues[ruleParam] == -1) {
         return (nbMatches == passValue.length);
      }
      if (nbMatches < atLeast.minValues[ruleParam]) {
         return false;
      }
      if (nbMatches > atLeast.maxValues[ruleParam]) {
         return false;
      }
      return true;
   }
   
   function ruleAccepted(ruleType, ruleParam, passValue) {
      switch (ruleType) {
         case "tenSymbols":
            return passValue.length <= 10;
         case "numberOfLowerCase":
            return regexpSatisfiesOccConstraint(/[a-z]/g, ruleParam, passValue);
         case "numberOfUpperCase":
            return regexpSatisfiesOccConstraint(/[A-Z]/g, ruleParam, passValue);
         case "numberOfDigits":         
            return regexpSatisfiesOccConstraint(/[0-9]/g, ruleParam, passValue);
         case "numberOfSpecial":         
            return regexpSatisfiesOccConstraint(/@|#|\$|\&|\^|-|%|\*|\(|\)|\]|\[|\}|\{|!|\?|_|=|\+/g, ruleParam, passValue);
         case "length":
            return passValue.length >= ruleParam + 5;
      }
   }
   
   function passwordAccepted(passValue) {
      var accepted = true;
      for (var iRule = 0; iRule < nbRules; iRule++) {
         if (answer.rulesSelected[iRule]) {
            var ruleType = data[level].rules[iRule];
            var ruleParam = answer.rulesParams[iRule];
            accepted &= ruleAccepted(ruleType, ruleParam, passValue);
         }
      }
      return accepted;
   }
   
   function computePossibilities(rules, rulesSelected, rulesParams) {
      var maxNbPerType = [3, 3, 3, 3]; // we use two values beyond that: max+2 = none, max+1 = only this
      var symbolsPerType = [26, 26, 10, 7];
      var nbTypes = 4;

      var nbRemaining = 0;
      var minLength = 0;
      var nbSymbolsPerType = [0,0,0,0];
      for (var iRule = 0; iRule < rules.length; iRule++) {
         if (!rulesSelected[iRule]) {
            continue;
         }
         var ruleType = rules[iRule];
         var param = rulesParams[iRule];
         if (ruleType == "tenSymbols") {
            nbRemaining = 10;
         } else if (ruleType == "length") {
            minLength = param + 5;
         } else {
            var symbolTypes = {
               numberOfLowerCase: 0,
               numberOfUpperCase: 1,
               numberOfDigits: 2,
               numberOfSpecial: 3
            }
            var type = symbolTypes[ruleType];
            if (param == 0) {
               param = maxNbPerType[type] + 2;
            }
            nbSymbolsPerType[type] = param;
         }
      }
      var maxRemaining = nbRemaining - minLength;


      var dynPossibilities = [];

      function possibilities(nbRemaining, nbPerType) {
         var dynIndex = nbRemaining;
         for (var iType = 0; iType < nbTypes; iType++) {
            dynIndex *= maxNbPerType[iType] + 3; // number of possible values
            dynIndex += nbPerType[iType];
         }
         var dynValue = dynPossibilities[dynIndex];
         if (dynValue != undefined) {
            return dynValue;
         }
         var nbPossibilities = 0
         if (nbRemaining <= maxRemaining) {
            var nbIfWeStop = 1;
            // if there are still some to be places for a type, there is no valid password
            for (var iType = 0; iType < nbTypes; iType++) {
               if ((nbPerType[iType] > 0) && (nbPerType[iType] <= maxNbPerType[iType])) {
                  nbIfWeStop = 0;
               }
            }
            nbPossibilities += nbIfWeStop;
            if (nbRemaining == 0) {
               return nbPossibilities;
            }
         }
         // if one type is forced, we only put that type
         for (var iType = 0; iType < nbTypes; iType++) {
            if (nbPerType[iType] == maxNbPerType[iType] + 1) {
                nbPossibilities += symbolsPerType[iType] * possibilities(nbRemaining - 1, nbPerType);
                return nbPossibilities;
            }
         }
         // we try each type for the next symbol
         for (var iType = 0; iType < nbTypes; iType++) {
            if ((nbPerType[iType] > 0) && (nbPerType[iType] <= maxNbPerType[iType])) {
                nbPerType[iType]--;
                nbPossibilities += symbolsPerType[iType] * possibilities(nbRemaining - 1, nbPerType);
                nbPerType[iType]++;
            } else if (nbPerType[iType] == 0) {
                nbPossibilities += symbolsPerType[iType] * possibilities(nbRemaining - 1, nbPerType);
            }
         }
         dynPossibilities[dynIndex] = nbPossibilities;
         return nbPossibilities;
      }

      return possibilities(nbRemaining, nbSymbolsPerType);
   }
   
   function formatPossibilities(possibilities) {
      return possibilities.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
   }

   function updatePasswords() {
      for (var iPass = 0; iPass < passwords.toAccept.length; iPass++) {
         var rect = passwordsStatuses.toAccept.rects[iPass];
         var label = passwordsStatuses.toAccept.labels[iPass];
         if (passwordAccepted(passwords.toAccept[iPass])) {
            label.attr({text:taskStrings.statusAccepted})
                 .attr(passStatusAttr.correct);
            rect.attr(passRectAttr.correct);
         } else {
            label.attr({text:taskStrings.statusRejected})
                 .attr(passStatusAttr.incorrect);
            rect.attr(passRectAttr.incorrect);
         }
      }
      for (var iPass = 0; iPass < passwords.toReject.length; iPass++) {
         var rect = passwordsStatuses.toReject.rects[iPass];
         var label = passwordsStatuses.toReject.labels[iPass];
         if (passwordAccepted(passwords.toReject[iPass])) {
            label.attr({text:taskStrings.statusAccepted})
                 .attr(passStatusAttr.incorrect);
            rect.attr(passRectAttr.incorrect);
         } else {
            label.attr({text:taskStrings.statusRejected})
                 .attr(passStatusAttr.correct);
            rect.attr(passRectAttr.correct);
         }
      }
      var possibilities = computePossibilities(data[level].rules, answer.rulesSelected, answer.rulesParams);
      var possElems = passwordsStatuses.possibilities;
      possElems.label.attr({text: formatPossibilities(possibilities)});
      if (level == "hard") {
         if (possibilities >= minPossibilities) {
            possElems.label.attr(passStatusAttr.correct);
            possElems.rect.attr(passRectAttr.correct);
         } else {
            possElems.label.attr(passStatusAttr.incorrect);
            possElems.rect.attr(passRectAttr.incorrect);
         }
      }
   }
   
   function initPasswords(paper, x, y) {
      passwordsStatuses = {
         toAccept: {
            rects: [],
            labels: []
         },
         toReject: {
            rects: [],
            labels: []
         },
         possibilities: {
            rect: null,
            label: null
         }
      };
      drawPasswordsList(paper, x, y, taskStrings.toAccept, passwords.toAccept, passwordsStatuses.toAccept);
      var height = headerH + passwords.toAccept.length * passwordH;
      drawPasswordsList(paper, x, y + height + marginY, taskStrings.toReject, passwords.toReject, passwordsStatuses.toReject);
      height += headerH + passwords.toReject.length * passwordH;
      drawPossibilities(paper, x, y + height + 2 * marginY, passwordsStatuses.possibilities);
      if (level == "hard") {
         drawTarget(paper, x, y + height + 3 * marginY + headerH + passwordH);
      }
   }


   function initHandlers() {
      for(var iRule = 1; iRule < nbRules; iRule++){
         switchRaph[iRule].clickZone.click(clickSwitch(iRule));
         switchRaph[iRule].clickZone.attr("cursor","pointer");
      }
   };

   function initSelectBox(paper, x, y, idElement, choices, onChange) {
      var selectWidth = 120;
      var selectHeight = 20;
      paper.rect(x, y, selectWidth + 20, selectHeight + 4, 12).attr(selectFrameAttr);

      var selectHTML = "<select id=\"" + idElement + "\" class='ruleParam'>";
      for (var iChoice = 0; iChoice < choices.length; iChoice++) {
         selectHTML += "<option value=" + iChoice + ">" + choices[iChoice] + "</option>";
      }
      selectHTML += "</select>";
      $("#paper").append(selectHTML);
      
      $("#" + idElement).css({
         left: x + 10,
         top: y + 2
      });

      $("#" + idElement).change(onChange);
   };


   function drawSwitch(paper, x, y, isLocked) {
      var rect = paper.rect(x,y).attr(switchAttr.rect);
      if (isLocked) {
         rect.attr({opacity: 0});
      }
      var circle = paper.circle(x + switchW - switchH/2, y + switchH/2)
                        .attr(switchAttr.circle)
                        .attr(switchAttr.onCircle);
      var clickZone = paper.rect(x, y).attr(switchAttr.clickZone);      
      return {
         switch: paper.set(rect,circle),
         clickZone: clickZone
      };
   }

   function updateSwitch(sw, state) {
      var xSw = sw.switch[0].attr("x");
      if(state){
         sw.switch[1].attr("cx",xSw + switchW - switchH/2).attr(switchAttr.onCircle);
      }else{
         sw.switch[1].attr("cx",xSw + switchH/2).attr(switchAttr.offCircle);
      }
   };
   
   function addSelect(paper, x, y, type, iRule) {
      var choices = [];
      if (type == "atLeast") {
         var ruleType = data[level].rules[iRule];
         if (ruleType == "numberOfLowerCase" || ruleType == "numberOfUpperCase") {
            choices = atLeast.choicesF;
         } else {
            choices = atLeast.choicesM;
         }
      };
      if (type == "length") {
          choices = lengthChoices;
      }
       
      var idElement = "rule" + iRule + "Select";
      initSelectBox(paper, x, y, idElement, choices, function() {
         onSelectChange(idElement, iRule);
      });
   }

    function onSelectChange(idElement, iRule) {
      // activate rule if not already activated
      answer.rulesSelected[iRule] = 1;
      updateSwitch(switchRaph[iRule], answer.rulesSelected[iRule]);
      updateRules();
      updatePasswords();

      var value = parseInt($("#" + idElement).attr("value"));
      answer.rulesParams[iRule] = value;
      updateRules();
      updatePasswords();
   }
   
   function drawRuleMustContain(paper, x, y, label, iRule) {
      var text1 = paper.text(x, y - marginY / 2, taskStrings.passwordMustContain)
                       .attr(labelAttr);
      var selectBox = addSelect(paper, x, y + marginY / 2, "atLeast", iRule);
      var text2 = paper.text(x + 120 + 30, y + marginY, label)
                       .attr(labelAttr);
      return paper.set(text1, selectBox, text2);
   }

   function drawRuleLength(paper, x, y, iRule) {
      var text1 = paper.text(x, y - marginY / 2, taskStrings.passwordMustContainLength)
                       .attr(labelAttr);
      var selectBox = addSelect(paper, x, y + marginY / 2, "length", iRule);
      var text2 = paper.text(x + 120 + 30, y + marginY, taskStrings.characters)
                       .attr(labelAttr);
      return paper.set(text1, selectBox, text2);
   }


   function drawRuleText(paper, x, y, ruleType, iRule) {
      switch (ruleType) {
         case "tenSymbols":
            var stringSymbols ;
            if (level=="easy") {
                stringSymbols = taskStrings.tenSymbolsEasy;
            } else {
                stringSymbols = taskStrings.tenSymbolsMediumHard;
            }
            return paper.text(x, y, stringSymbols).attr(labelAttr);
         case "length":
            return drawRuleLength(paper, x, y, iRule);
         case "numberOfLowerCase":
            return drawRuleMustContain(paper, x, y, taskStrings.lowerCaseLetters, iRule);
         case "numberOfUpperCase":
            return drawRuleMustContain(paper, x, y, taskStrings.upperCaseLetters, iRule);
         case "numberOfDigits":
            return drawRuleMustContain(paper, x, y, taskStrings.digits, iRule);
         case "numberOfSpecial":
          return drawRuleMustContain(paper, x, y, taskStrings.special, iRule);
      }
   }

   function addRule(paper, x, y, iRule) {
      switchRaph[iRule] = drawSwitch(paper, x, y, (iRule == 0));
      var ruleType = data[level].rules[iRule];
      labelRaph[iRule] = drawRuleText(paper, x + marginX + switchW, y + 10, ruleType, iRule);
   };

   function updateRule(iRule) {
      updateSwitch(switchRaph[iRule], answer.rulesSelected[iRule]);
   };

   function updateRules() {
      for(var iRule = 0; iRule < nbRules; iRule++){
         updateRule(iRule);
      }
   };

   function clickSwitch(id) {
      return function() {
         displayError("");
         var state = answer.rulesSelected[id];
         answer.rulesSelected[id] = 1 - state;
         updateSwitch(switchRaph[id], answer.rulesSelected[id]);
         updateRules();
         updatePasswords();
      }
   };

   function displayError(msg) {
      $("#error").html(msg);
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
