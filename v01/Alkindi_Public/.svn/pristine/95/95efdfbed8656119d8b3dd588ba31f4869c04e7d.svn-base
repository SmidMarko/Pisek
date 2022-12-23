function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         target:"CIEL",
         nDigit:4
      },
      medium: {
         target:"ALICE",
         nDigit:5
      },
      hard: {
         target:"ABCDEF",
         nDigit:6
      }
   };

   var paper;
   var paperWidth = 730;
   var paperHeight = 341;

   var keyboard;
   var keyWidth = 60;
   var keyHeight = 40;
   var marginX = 8;
   var marginY = 8;
   var nRows = 3;
   var nCol = 4;
   var xScreen = 90;
   var yScreen = 211;
   var wScreen = 194;
   var hScreen = 30;
   var buttonW = 110;
   var buttonH = 40;

   var nDigit;
   var inputRaph = [];
   var tryButton;
   var undoButton;
   var recentAttemptsRaph = [];
   var nRecentAttempts = 8;
   var substitution = [];

   var rng;
   var target;

   var letters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" ];
   var colors = {
         darkGreyBG: "#E3E3E3",
         darkGreyText: "#727272",
         lightGrey: "#F5F5F5",
         green: "#88BB88",
         black: "#30242B",
         darkerGreen: "#508855"
      };

   var encryptionToolAttr = {
      frame: {
         stroke: "none",
         fill: colors.darkGreyBG
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
         fill: "white"
      },
      text: {
         "font-size": 14,
         "font-style": "italic",
         fill: colors.darkGreyText
      },
      tryButton: {
         stroke: "none",
         fill: colors.green,
         opacity: 1
      },
      undoButton: {
         stroke: "none",
         fill: colors.black,
         opacity: 1
      }
   }; 
   var inputAttr = {
      "font-size": 18,
      "font-weight": "bold",
      "font-family": "monospace",
      fill: colors.darkerGreen
   };
   var recentAttemptsAttr = {
      frame: {
         stroke: "none",
         fill: colors.lightGrey
      },
      title: {
         "font-size": 14,
         "font-weight": "bold",
         fill: colors.darkGreyText
      },
      header: {
         stroke: colors.darkGreyText,
         fill: colors.darkGreyBG,
         opacity: 0.7,
         "stroke-opacity": 0.3
      },
      headerText: {
         "font-size": 12,
         "font-weight": "bold",
         fill: colors.darkGreyText
      },
      attempt: {
         stroke: colors.darkGreyBG,
         fill: colors.lightGrey
      },
      plain: {
         "font-size": 18,
         "font-weight": "bold",
         "letter-spacing": "0.2em",
         "font-family": "monospace",
         fill: colors.black
      },
      encrypted: {
         "font-size": 18,
         "font-weight": "bold",
         "letter-spacing": "0.2em",
         "font-family": "monospace",
         fill: colors.darkerGreen
      }
   };
   var keyboardAttr = [
      { name: "rect", mode: "enabled", attr: { stroke: "none", fill: colors.green } },
      { name: "shadow", mode: "enabled", attr: { opacity: 0 } },
      { name: "text", mode: "enabled", attr: { "font-size": 18, "font-family": "monospace", "font-weight": "bold", fill: "white" } }
   ];

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      var seed = subTask.taskParams.randomSeed;
      if (level == "hard") {
         seed += 1;
      }
      rng = new RandomGenerator(seed);
      substitution = JSON.parse(JSON.stringify(letters));
      rng.shuffle(substitution);
      target = data[level].target; 
      nDigit = data[level].nDigit; 
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
      $("#target").text(target);
      initPaper();
      initEncryptionTool();
      initRecentAttempts();
      initHandlers();
      displayHelper.hideValidateButton = true;
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = { input: [], recentAttempts: [], seed: rng.nextInt(0,10000) };
      return defaultAnswer;
   };

   subTask.unloadLevel = function(callback) {
      if (keyboard != null) {
         keyboard.remove();
         keyboard = null;
      }
      if (tryButton != null) {
         tryButton.remove();
         tryButton = null;
      }
      if (undoButton != null) {
         undoButton.remove();
         undoButton = null;
      }
      callback();
   };

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };

   function getResultAndMessage() {
      if (isAnswerValid()) {
         return {
            successRate: 1,
            message: taskStrings.success
         };
      } else {
         return {
            successRate: 0,
            message: taskStrings.error
         };
      }
   }
   
   function initPaper() {
      paper = subTask.raphaelFactory.create("paper","paper",paperWidth,paperHeight);
   };

   function initEncryptionTool() {
      paper.rect(0,0,paperWidth/2,paperHeight).attr(encryptionToolAttr.frame);
      paper.text(paperWidth/4,20,taskStrings.encryptionTool).attr(encryptionToolAttr.title);
      paper.path("M"+0+" "+40+",H"+paperWidth/2).attr(encryptionToolAttr.line);

      initKeyboard();

      paper.rect(xScreen,yScreen,wScreen,hScreen,hScreen/2).attr(encryptionToolAttr.screen);
      updateInput();

      var xText = xScreen + wScreen/2;
      var yText = yScreen + hScreen + 2*marginY;
      paper.text(xText,yText,taskStrings.pleaseInput1+nDigit+taskStrings.pleaseInput2).attr(encryptionToolAttr.text);

      var xButton = paperWidth / 4 - buttonW - marginX / 2;
      var yButton = 281;
      tryButton = new Button(paper,xButton,yButton,buttonW,buttonH,taskStrings["try"]);
      tryButton.setAttr("text","enabled",{"font-size":14,fill:"white"});
      tryButton.setAttr("rect","enabled",encryptionToolAttr.tryButton);
      tryButton.setAttr("rect","disabled",{opacity:0.5});
      tryButton.setAttr("shadow","enabled",{opacity:0});
      updateTry();
      undoButton = new Button(paper,xButton + buttonW + marginX,yButton,buttonW,buttonH,taskStrings["undo"]);
      undoButton.setAttr("text","enabled",{"font-size":14,fill:"white"});
      undoButton.setAttr("rect","enabled",encryptionToolAttr.undoButton);
      undoButton.setAttr("rect","disabled",{opacity:0.5});
      undoButton.setAttr("shadow","enabled",{opacity:0});
      updateUndo();
   };

   function initKeyboard() {
      var keyArray = [];
      var x0 = 50;
      var y0 = 61;
      keyboard = new Keyboard({
         paper: paper,
         keys: letters,
         nRows: nRows,
         nCol: nCol,
         xPos: x0,
         yPos: y0,
         keyWidth: keyWidth,
         keyHeight: keyHeight,
         marginX: marginX,
         marginY: marginY,
         attr: keyboardAttr
      });
   };

   function initRecentAttempts() {
      var x = paperWidth/2;
      paper.rect(x,0,paperWidth/2,paperHeight).attr(recentAttemptsAttr.frame);
      paper.text(x + paperWidth/4,20,taskStrings.recentAttempts).attr(recentAttemptsAttr.title);

      var headerY = 40;
      var headerH = 45;
      var headerW = paperWidth/4;
      paper.rect(x,headerY,headerW,headerH).attr(recentAttemptsAttr.header);
      paper.text(x + headerW/2,headerY + headerH/2,taskStrings.plain).attr(recentAttemptsAttr.headerText);
      paper.rect(x + headerW,headerY,headerW,headerH).attr(recentAttemptsAttr.header);
      paper.text(x + 3*headerW/2,headerY + headerH/2,taskStrings.encrypted).attr(recentAttemptsAttr.headerText);

      var attemptH = (paperHeight - headerY - headerH)/nRecentAttempts;
      var attemptW = headerW;
      for(var iAttempt = 0; iAttempt < nRecentAttempts; iAttempt++){
         var y = headerY + headerH + iAttempt*attemptH;
         paper.rect(x,y,attemptW,attemptH).attr(recentAttemptsAttr.attempt);
         paper.rect(x + attemptW,y,attemptW,attemptH).attr(recentAttemptsAttr.attempt);
         recentAttemptsRaph[iAttempt] = {
            plain: paper.text(x + attemptW/2, y + attemptH/2,"").attr(recentAttemptsAttr.plain),
            encrypted: paper.text(x + 3*attemptW/2, y + attemptH/2,"").attr(recentAttemptsAttr.encrypted)
         }
      }
      updateRecentAttempts();
   };

   function initHandlers() {
      for(var iKey = 0; iKey < letters.length; iKey++){
         keyboard.keyboard[iKey].click(keyboardClick(iKey));
         keyboard.keyboard[iKey].changeOverlay({cursor:"pointer"});
      }
      undoButton.click(undo);
      tryButton.click(check);
   };

   function keyboardClick(id) {
      return function(){
         var key = keyboard.keys[id];
         if(answer.input.length < nDigit){
            answer.input.push(key);
            updateInput();
            updateTry();
            updateUndo();
         }
      }
   };

   function undo() {
      answer.input.pop();
      updateInput();
      updateUndo();
      updateTry();
   };

   function updateInput() {
      for(var iDigit = 0; iDigit < nDigit; iDigit++){
         var xDigit = xScreen + 20 + (iDigit + 1/2) * (wScreen - 40)/nDigit;
         var yDigit = yScreen + hScreen/2;
         var digit = answer.input[iDigit] || "_";
         if(inputRaph[iDigit]){
            inputRaph[iDigit].remove();
         }
         inputRaph[iDigit] = paper.text(xDigit,yDigit,digit).attr(inputAttr);
      }
   };

   function updateTry() {
      if(answer.input.length < nDigit){
         tryButton.disable();
         tryButton.changeOverlay({cursor:"auto"});
      }else{
         tryButton.enable();
         tryButton.changeOverlay({cursor:"pointer"});
      }
   };

   function updateUndo() {
      if(answer.input.length == 0){
         undoButton.disable();
         undoButton.changeOverlay({cursor:"auto"});
      }else{
         undoButton.enable();
         undoButton.changeOverlay({cursor:"pointer"});
      }
   };

   function updateRecentAttempts() {
      var recentAtt = answer.recentAttempts;
      var indexCorrection = Math.max(0,recentAtt.length - nRecentAttempts);
      for(var iAttempt = 0; iAttempt < nRecentAttempts; iAttempt++){
         if(recentAtt[iAttempt + indexCorrection]){
            var plain = "";
            var encrypted = "";
            var encryptedArr = encrypt(recentAtt[iAttempt + indexCorrection]);
            for(var iDigit = 0; iDigit < nDigit; iDigit++){
               plain += recentAtt[iAttempt + indexCorrection][iDigit];
               encrypted += encryptedArr[iDigit];
            };
            
            recentAttemptsRaph[iAttempt].plain.attr("text",plain);
            recentAttemptsRaph[iAttempt].encrypted.attr("text",encrypted);
         }else{
            recentAttemptsRaph[iAttempt].plain.attr("text","");
            recentAttemptsRaph[iAttempt].encrypted.attr("text","");
         }
      }
   };

   function check() {
      var plain = JSON.parse(JSON.stringify(answer.input));
      answer.recentAttempts.push(plain);
      answer.recentAttempts = answer.recentAttempts.slice(- nRecentAttempts);
      if(isAnswerValid()){
         platform.validate("done");
      }
      updateRecentAttempts();
      answer.input = [];
      updateInput();
      updateTry();
      updateUndo();
   };

   function encrypt(plain) {
      var encrypted = [];
      for(var iLetter = 0; iLetter < plain.length; iLetter++){
         var letter = plain[iLetter];
         var letterIndex = Beav.Array.indexOf(letters,letter);
         var substitute = substitution[letterIndex];
         if(level == "easy"){
            var newIndex = (nDigit + (iLetter - 3))%nDigit;
            encrypted[newIndex] = letter;
         }else if(level == "medium"){
            encrypted[iLetter] = substitute;
         }else if(level == "hard"){
            var newIndex = (nDigit + (iLetter - 3))%nDigit;
            encrypted[newIndex] = substitute;
         }
      }
      // if(level == "hard"){
      //    rng.shuffle(encrypted);
      // }
      
      return encrypted;
   }

   function isAnswerValid() {
      var recentAtt = answer.recentAttempts;
      if(recentAtt.length == 0){
         return false;
      }
      var lastAttempt = recentAtt[recentAtt.length - 1];
      var encryptedArr = encrypt(lastAttempt);
      var encrypted = "";
      for(var iDigit = 0; iDigit < nDigit; iDigit++){
         encrypted += encryptedArr[iDigit];
      }
      if(encrypted == target){
         return true;
      }else{
         return false;
      }
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
