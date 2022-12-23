function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {

      },
      medium: {

      },
      hard: {

      }
   };

   var paper;
   var paperWidth = 730;
   var paperHeight = 500;

   var marginX = 20;
   var marginY = 20;
   var deviceW = 243;
   var deviceH = 291;
   var headerH = 40;
   var screenH = 30;
   var screenW = deviceW - 2*marginX;
   var screenX = marginX;
   var screenY = headerH + marginY;
   var nRows = 4;
   var nCol = 3;
   var keyMarginX = 5;
   var keyMarginY = 5;
   var keyWidth = 64;
   var keyHeight = 30;
   var nDigit = 4;
   var hackWindowW = paperWidth - deviceW;
   var hackWindowH = paperHeight;
   var xLog;
   var yLog;
   var expectedInput;
   var hackFeedback = [];

   var inputRaph = [];
   var log;
   var testedPasswords = [];
   var maxPasswordsToTest = 12; // in hard

   var keyboard;

   var keys = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "V" ];
   var colors = {
      lightGreyBG: "#F9F9F9",
      greyBG: "#EAEAEA",
      darkGrey: "#6D6D6D",
      green: "#88BB88",
      darkerGreen: "#508855",
      black: "#30242B",
      yellow: "#F48A28" 
   };
   var space = "\u00A0";
   var skull = [
                       '______',
                    '.-"      "-.',
                   '/            \\',
       '_          |              |          _',
     '( \\         |,  .-.  .-.  ,|         / )',
      '> "=._     | )(__/  \\__)( |     _.=" <',
      '(_/"=._"=._ |/     /\\     \\| _.="_.="\\_)',
             '"=._ (_     ^^     _)"_.="',
                 '"=\\__|IIIIII|__/="',
                '_.="| \\IIIIII/ |"=._',
      '_     _.="_.="\\          /"=._"=._     _',
     '( \\_.="_.="     `--------`     "=._"=._/ )',
      '> _.="                            "=._ <',
     '(_/   jgs                              \\_)'
   ];

   var digitAttr = {
      "font-size": 22,
      "font-weight": "bold",
      fill: colors.darkerGreen
   };
   var deviceAttr = {
      frame: {
         stroke: "none",
         fill: colors.greyBG,
         // r: 5,
         width: deviceW,
         height: deviceH
      },
      title: {
         "font-size": 14,
         "font-weight": "bold",
         fill: colors.darkerGreen
      },
      line: {
         stroke: colors.green
      },
      screen: {
         stroke: "none",
         fill: "white",
         r: screenH/2,
         width: screenW,
         height: screenH
      },
      text: {
         "font-size": 14,
         fill: colors.darkGrey,
      }
   };
   var hackWindowAttr = {
      frame: {
         stroke: "none",
         fill: colors.black,
         width: hackWindowW,
         height: hackWindowH
      },
      title: {
         "font-size": 14,
         "font-weight": "bold",
         fill: "white"
      },
      line: {
         stroke: "white"
      },
      text: {
         "font-family": "monospace",
         "font-size": 12,
         fill: "white",
         "text-anchor": "start"
      },
      skull: {
         "font-family": "monospace",
         "font-size": 12,
         fill: "white"
      }
   };
   var keyboardAttr = [
      { name: "rect", mode: "enabled", attr: { stroke: "none", fill: colors.green } },
      { name: "shadow", mode: "enabled", attr: { opacity: 0 } },
      { name: "text", mode: "enabled", attr: { "font-size": 14, "font-weight": "bold", fill: "white" } }
   ];
   var enterButtonAttr = {
      stroke: "none",
      fill: colors.black
   };
   var backspaceButtonAttr = {
      stroke: "none",
      fill: colors.yellow
   };

   function getLevelSeed(level) {
      var seed = subTask.taskParams.randomSeed;
      var extraSeed = {easy: 0, medium: 1, hard: 2};
      return seed + extraSeed[level];
   }
    
   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      rng = new RandomGenerator(getLevelSeed(level));
      expectedInput = genTarget();
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
      initPaper();
      initDevice();
      initHackWindow();
      initHandlers();
       $("#target").text(expectedInput.join("")) 
      displayError("");
      displayHelper.hideValidateButton = true;
      if(answer.hacked){
         hack(false,true);
      }
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = { currInput: [], log: [], hacked: false/*, seed: rng.nextInt(0,10000)*/ };
      return defaultAnswer;
   };

   subTask.unloadLevel = function(callback) {
      if (keyboard != null) {
         keyboard.remove();
         keyboard = null;
      }
      callback();
   };

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };

   function getResultAndMessage() {
      var result = hack(true);
      if(result){
         return { successRate: 1, message: taskStrings.success };
      }else{
         return { successRate: 0, message: taskStrings.error };
      }
   };
   
   function initPaper() {
      paper = subTask.raphaelFactory.create("paper","paper",paperWidth,paperHeight);
      $("#error").css({
         position: "absolute",
         top: deviceH + marginY,
         left: marginX/2,
         width: deviceW - marginX
      });
   };

   function initDevice() {
      paper.rect(0,0).attr(deviceAttr.frame);
      paper.text(deviceW/2, headerH/2, taskStrings.pickNew).attr(deviceAttr.title);
      paper.path("M"+0+" "+headerH+",H"+deviceW).attr(deviceAttr.line);

      paper.rect(screenX,screenY).attr(deviceAttr.screen);
      var yDigit = screenY + screenH/2;
      for(var iDigit = 0; iDigit < nDigit; iDigit++){
         var xDigit = screenX + marginX + (iDigit + 1/2)*(screenW - 2*marginX)/nDigit;
         inputRaph[iDigit] = paper.text(xDigit,yDigit,"").attr(digitAttr);
      }
      updateInput();

      initKeyboard();
   };

   function initKeyboard() {
      var x0 = marginX;
      var y0 = 136;
      keyboard = new Keyboard({
         paper: paper,
         keys: keys,
         nRows: nRows,
         nCol: nCol,
         xPos: x0,
         yPos: y0,
         keyWidth: keyWidth,
         keyHeight: keyHeight,
         marginX: keyMarginX,
         marginY: keyMarginY,
         attr: keyboardAttr,
         keyFiller: keyFiller
      });
   };

   function initHackWindow() {
      paper.rect(deviceW,0).attr(hackWindowAttr.frame);
      paper.text(deviceW + hackWindowW/2, headerH/2, taskStrings.hackingTool).attr(hackWindowAttr.title);
      paper.path("M"+deviceW+" "+headerH+",H"+(deviceW + hackWindowW)).attr(hackWindowAttr.line);

      var x0 = deviceW + marginX;
      var y0 = headerH + marginY;
      paper.text(x0,y0,taskStrings.logging).attr(hackWindowAttr.text);
      xLog = x0;
      yLog = y0 + marginX;

      updateHackWindow();
   };

   function initHandlers() {
      for(var iKey = 0; iKey < keyboard.keys.length; iKey++){
         keyboard.keyboard[iKey].click(keyboardClick(iKey));
         keyboard.keyboard[iKey].changeOverlay({cursor:"pointer"});
      }
   };

   function keyFiller(index,x,y){
      if(!isNaN(this.keys[index])){
         return null;
      }else{
         var letter = this.keys[index];
         var attr = (letter == "V") ? enterButtonAttr : backspaceButtonAttr;
         var key = new Button(this.paper,x,y,this.keyWidth,this.keyHeight,letter,this.repeat, this.initialDelay, this.stepDelay, this.delayFactory);
         key.setAttr("rect","enabled",attr);
         key.setAttr("text","enabled",keyboardAttr[2].attr);
         key.setAttr("shadow","enabled",{opacity: 0});
         return key;
      }
   };

   function updateInput() {
      for(var iDigit = 0; iDigit < nDigit; iDigit++){
         var digit = answer.currInput[iDigit] || "_";
         inputRaph[iDigit].attr("text",digit);
      }
   };

   function updateHackWindow(passwords) {
      if(log){
         log.remove();
      }
      var attr = hackWindowAttr.text;
      var spacing = marginX;
      var maxKeysPerLine = Math.floor((hackWindowW - 2*marginX)/spacing) + 1;
      var keyStr = answer.log; 
      var y = yLog;
      paper.setStart();

      for(var iKey = 0; iKey < keyStr.length; iKey++){
         var key = keyStr[iKey];
         var x = xLog + (iKey%maxKeysPerLine)*spacing;
         y = yLog + Math.floor(iKey/maxKeysPerLine)*marginY;
         paper.text(x,y,key).attr(attr);
      }

      if(passwords){
         hackFeedback[0] = paper.set();
         var yPswd = y + marginY;
         hackFeedback[0].push(paper.text(xLog,yPswd,taskStrings.computing).attr(attr));
         for(var iPswd = 0; iPswd < passwords.length; iPswd++){
            y = yPswd + (iPswd + 1) * marginY;
            var password = passwords[iPswd];
            for(var iDigit = 0; iDigit < nDigit; iDigit++){
               var x = xLog + iDigit*spacing;
               var digit = password[iDigit];
               hackFeedback[0].push(paper.text(x,y,digit).attr(attr));
            } 
         }

         y += marginY;
         var hackText = (answer.hacked) ? taskStrings.pswdGuessed : taskStrings.pswdNotGuessed;
         hackFeedback[1] = paper.text(xLog,y,hackText).attr(attr);
         y += marginY;
         var hackText2 = (answer.hacked) ? taskStrings.userHacked : taskStrings.userNotHacked;
         hackFeedback[2] = paper.set(paper.text(xLog,y,hackText2).attr(attr));
         if(answer.hacked){
            updateSkull(Math.max(100,y + marginY));
         }
      }
      log = paper.setFinish();
   };

   function updateSkull(ySkull) {
      var xSkull = deviceW + hackWindowW/2;
      for(var iLine = 0; iLine < skull.length; iLine++){
         var yLine = ySkull + iLine * 15;
         var line = skull[iLine].replace(/ /g,space);
         hackFeedback[2].push(paper.text(xSkull,yLine,line).attr(hackWindowAttr.skull));
      }
   };

   function keyboardClick(id) {
      return function(){
         displayError("");
         var key = keyboard.keys[id];
         if(answer.hacked){
            answer.log = [];
            updateHackWindow();
            answer.hacked = false;
         }
         if(!isNaN(key)){
            if(answer.currInput.length < nDigit){
               answer.currInput.push(key);
            } else {
               return;
            }
         }else if(key == "C"){
            if(answer.currInput.length > 0){
               answer.currInput.pop();
            }
         }else{
            /* key == "V" */
            if(answer.currInput.length < nDigit){
               displayError(taskStrings.tooShort);
               return
            } else if (!isValid(answer.currInput)) {
               displayError(taskStrings.wrongPassword);
               answer.currInput = [];
               answer.log = [];
               updateHackWindow();
               updateInput();
               return;
            } else {
               hack();
               return;
            }
         } 

         if(level == "easy"){
            if(key != "C"){
               answer.log.push(key);
            }
         }else{
            if(!(key == "C" && answer.log[answer.log.length - 1] == "C")){
               answer.log.push(key);
            }
         }
         updateInput();
         updateHackWindow();
      }
   };

   function hack(noVisual,noDelay) {
      if(answer.log.length == 0){
         return false;
      }
      var pswds = [];
      if(level != "hard"){
         var pswd = guessPswd();
         var hacked = isValid(pswd);
         pswds.push(pswd);
      }else{
         genPasswords(answer.log);
         var hacked = false;
         for (var iPassword = 0; iPassword < testedPasswords.length; iPassword++) {
            pswds.push(testedPasswords[iPassword]);
            if (isValid(testedPasswords[iPassword])) {
               hacked = true;
               break;
            }
         }
      }
      answer.hacked = hacked;
      if(!noVisual){
         updateHackWindow(pswds);
      }else{
         return !hacked;
      }
      if(hacked){
         answer.currInput = [];
         if(!noDelay){
            hackFeedback[0].hide();
            hackFeedback[1].hide();
            hackFeedback[2].hide();
            var count = 0;
            subTask.delayFactory.create("delay",function(){
               if(count >= 3){
                  subTask.delayFactory.destroy("delay");
                  updateInput();
                  displayError(taskStrings.tryAgain);
               }else{
                  hackFeedback[count].show();
                  count++;
               }
            },500,true);
         }else{
            updateInput();
            displayError(taskStrings.tryAgain);
         }
      }else if(!noVisual && !subTask.delayFactory.get("delay")){
         hackFeedback[0].hide();
         hackFeedback[1].hide();
         hackFeedback[2].hide();
         var count = 0;
         subTask.delayFactory.create("delay",function(){
            if(count >= 3){
               subTask.delayFactory.destroy("delay");
               platform.validate("done");
            }else{
               hackFeedback[count].show();
               count++;
            }
         },500,true);
      }
   };

   function guessPswd(combination,cPos) {
      var pswd = [];
      var iLog = 0;
      do{
         var key = answer.log[iLog];
         if(!isNaN(key)){
            pswd.push(key);
         }else if(key == "C"){
            if(level == "hard"){
               var cPosId = Beav.Array.indexOf(cPos,iLog);
               var nRepeat = combination[cPosId];
               for(var iC = 0; iC < nRepeat; iC++){
                  pswd.pop();
               }
            }else{
               pswd.pop();
            }
         }
         iLog++;
      }while(iLog < answer.log.length);
      pswd.splice(4);
      return pswd;
   };

   function enumeratePasswords(cleanedLog, curPassword, curPos, nbToDelete, nbDeletable, posNextC) {
      /*console.log("enumerate " + JSON.stringify(cleanedLog) + ", " +
                  JSON.stringify(curPassword) + ", curPos: " + curPos +
                  ", nbToDelete: " + nbToDelete + ", nbDeletable: " + nbDeletable +
                  ", posNextC: " + posNextC);
      */
      if (testedPasswords.length >= maxPasswordsToTest) {
         return;
      }
      if (curPassword.length == 4) {
         testedPasswords.push(JSON.parse(JSON.stringify(curPassword)));
         return;
      }
      if (curPos == posNextC) {
         var posC = -1;
         for (var iLetter = curPos + 1; iLetter < cleanedLog.length; iLetter++) {
            if (cleanedLog[iLetter] == "C") {
                posC = iLetter;
                break;
            }
         }
         enumeratePasswords(cleanedLog, curPassword, curPos + 1, nbToDelete, nbDeletable, posC);
      } else {
         var nbDeleted = posNextC - curPos;
         if ((nbToDelete > 0) && (nbDeleted > 0) && (nbDeleted <= nbToDelete)) {
            // we delete everything until the next C.
            enumeratePasswords(cleanedLog, curPassword, posNextC, nbToDelete - nbDeleted, nbDeletable - nbDeleted, posNextC);
         }
         if ((nbToDelete == 0) || (nbToDelete < nbDeletable)) {
            // we keep the current letter
            curPassword.push(cleanedLog[curPos]);
            enumeratePasswords(cleanedLog, curPassword, curPos + 1, nbToDelete, nbDeletable - 1, posNextC);
            curPassword.pop();
         }
      }
   }

   function genPasswords(fullLog) {
      // console.log("genPasswords(" + JSON.stringify(fullLog) + ")");
      var cleanedLog = [];
      // We get rid of the letters before each C, since we have to delete them.
      for (var iLetter = 0; iLetter < fullLog.length; iLetter++) {
         if ((iLetter == fullLog.length - 1) || (fullLog[iLetter + 1] != 'C')) {
            cleanedLog.push(fullLog[iLetter]);
         }
      }
      var nbC = 0;
      var nbDeletable = 0;
      var posNextC = -1;
      for (var iLetter = 0 ; iLetter < cleanedLog.length; iLetter++) {
         var letter = cleanedLog[iLetter];
         if (letter == 'C') {
            nbC++;
            if (posNextC == -1) {
               posNextC = iLetter;
            }
            nbDeletable = iLetter + 1 - nbC;
         }
      }
      testedPasswords = [];
      var nbToDelete = cleanedLog.length - nbC - 4;
      enumeratePasswords(cleanedLog, [], 0, nbToDelete, nbDeletable, posNextC);
      // console.log(JSON.stringify(testedPasswords));
   }

    function hasTwoEqualDigits(t) {
	return (t[0]==t[1] || t[0]==t[2] || t[0]==t[3] || t[1]==t[2] || t[1]==t[3] || t[2]==t[3]);
    }
    
    function genTarget() {
	// generate the expected input

	var target = [0,0,0,0];

	while (hasTwoEqualDigits(target)) {
	    for(var i=0; i<4; i++){
		target[i] = rng.nextInt(0,9);
	    }
	}
	return target;
    }

   function isValid(pswd) {
      for(var iDigit = 0; iDigit < nDigit; iDigit++){
         if(pswd[iDigit] != expectedInput[iDigit]){
            return false;
         }
      }
      return true;
   };

   function displayError(msg) {
      $("#error").html(msg);
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
