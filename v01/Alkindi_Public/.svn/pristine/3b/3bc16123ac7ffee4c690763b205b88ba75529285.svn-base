function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         minLetters: 4,
         aliceLine: "Salut Bob, comment vas-tu ?",
         bobLine: "Salut Alice ! je vais bien, merci. Et toi ca va ?"
      },
      medium: {
          minLetters: 5,
	  aliceLine: "Salut Bob, j'ai appris que tu as \nobtenu ton permis, c'est super ! \nTu pourras me conduire au lycée\n quand on aura cours ensemble ? ;)",
          //bobLine: "Je vois que tu es bien     informée ! Comment tu as su pour mon permis ? Bien sur je pourrai t'emmener en   voiture, les jours ou il   pleut."
          bobLine:  "Hahaha, tout de suite      interessee je vois ! Oui je suis tres content ! A     priori, j'irai au bahut en voiture uniquement quand il pleuvra et dans ce cas je t'amenerai, (pardon        t'emmenerai) evidemment ! "  
      },
      hard: {
         minLetters: 7,
	 //aliceLine: "Le 28 je ne peux pas, mais je peux \nle 9 décembre.",
         //bobLine: "Pas possible pour moi tu es sure que tu n es pas      disponible le dernier      weekend de novembre en plus c est mon anniversaire"
          aliceLine: "Salut Bob ! Ça fait longtemps qu'on\nn'a pas mangé ensemble. On pourrait\nse voir un de ces jours, non ? Je \nsuis libre la deuxième semaine de \ndécembre, ça te va ?",
          bobLine: "Coucou ! malheureusement je serai tres occupé et je   pars en vacances ensuite.  Mais je te propose de faire ça en janvier si c'est    possible pour toi." 
      }
   };

   var paper;
   var paperWidth = 730;
   var paperHeight;

   var marginX = 20;
   var marginY = 20;
   var conversationH;
   var decryptionToolH = 281;
   var headerH = 40;
   var screenW = 300;
   var screenH = 30;
   var validateButtonW = 167;
   var validateButtonH = screenH;
   var autocompletionH = 50;
   var nCol = 10;
   var nRows = 3;
   var keyMarginX = 8;
   var keyMarginY = 5;
   var keyH = 30;
   var keyW = (paperWidth - 2*marginX + keyMarginX)/(nCol + 0.5) - keyMarginX;
   var keyboard;
   var enterArrowLength = 16;
   var aliceBubbleW = 315;
   var aliceBubbleH = 20;
   var bobBubbleW = 315;
   var bobBubbleH;
   var letterSpacing = 10;
   var lineSpacing = 15;
   var maxLettersPerLine = Math.floor((bobBubbleW - 2*marginX)/letterSpacing);
   var animTime = 50;

   var minLetters;
   var maxLetters = 10;
   var aliceLine;
   var bobLine;
   var bobWords;
   var encryptedText;
   var inputRaph = [];
   var textRaph = [];
   var autocompletionRaph = [];
   var validateButton;
   var errorLabel;

   var rng;

   var letters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
   var colors = {
      lightGreyBG: "#F9F9F9",
      greyBG: "#EAEAEA",
      darkGrey: "#6D6D6D",
      green: "#88BB88",
      darkerGreen: "#508855",
      black: "#30242B",
      red: "#FF0000"
   };
   
   var inputAttr = {
      "font-size": 22,
      "font-weight": "bold",
      fill: colors.darkerGreen
   };
   var errorAttr = {
      "font-size": 18,
      "font-weight": "bold",
      fill: colors.red
   }
   var conversationAttr = {
      frame: {
         stroke: "none",
         fill: colors.lightGreyBG,
         r: 5
      },
      title: {
         "font-size": 14,
         "font-weight": "bold",
         fill: colors.darkGrey
      },
      line: {
         stroke: colors.darkGrey
      },
      name: {
         "font-size": 14,
         "font-family": "monospace",
         "font-weight": "bold",
         fill: colors.darkerGreen,
         "text-anchor": "start"
      },
      text: {
         "font-size": 14,
         "font-family": "monospace",
         "font-weight": "bold",
         fill: colors.darkGrey,
         "text-anchor": "start",
         opacity: 0.7
      },
      bubble: {
         stroke: colors.darkGrey,
         fill: "white",
         "stroke-opacity": 0.7,
         r: 5
      }
   };
   var decryptionToolAttr = {
      frame: {
         stroke: "none",
         fill: colors.greyBG,
         width: paperWidth,
         height: decryptionToolH,
         r: 5
      },
      title: {
         "font-size": 14,
         "font-weight": "bold",
         fill: colors.darkerGreen
      },
      line: {
         stroke: colors.green
      },
      label1: {
         "font-size": 14,
         fill: colors.darkGrey,
         "text-anchor": "start",
         "font-style": "italic"
      },
      label2: {
         "font-size": 14,
         fill: colors.darkGrey,
         "text-anchor": "start",
         "font-weight": "bold"
      },
      screen: {
         stroke: "none",
         fill: "white",
         r: screenH/2,
         width: screenW,
         height: screenH
      },
      autocompletion: {
         "font-size": 14,
         fill: colors.darkerGreen,
         "text-anchor": "start"
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
   var enterArrowAttr = {
      stroke: "white",
      "stroke-width": 3,
      "stroke-linecap": "round",
      "arrow-end": "block-midium-short"
   };
   var highlightedTextAttr = {
      fill: "red",
      opacity: 1
   };
   var revealedTextAttr = {
      fill: colors.darkerGreen,
      opacity: 1
   };

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      minLetters = data[level].minLetters;
      aliceLine = data[level].aliceLine;
      bobLine = data[level].bobLine;
      bobWords = getWords();
      rng = new RandomGenerator(subTask.taskParams.randomSeed);
      encryptedText = encryptText();
      bobBubbleH = Math.ceil(encryptedText.length/(maxLettersPerLine))*lineSpacing + 25;
      aliceBubbleH = Math.ceil(aliceLine.length/(maxLettersPerLine))*lineSpacing + 10;
      conversationH = headerH + marginY + aliceBubbleH + marginY + bobBubbleH + marginY ;
      paperHeight = conversationH + marginY + decryptionToolH;
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
      encryptedText = encryptText();
   };

   subTask.resetDisplay = function() {
      initPaper();
      initConversation();
      initDecryptionTool();
      initHandlers();
      displayError("");
      displayHelper.hideValidateButton = true;
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = { input: [], seed: rng.nextInt(0,10000) };
      return defaultAnswer;
   };

   subTask.unloadLevel = function(callback) {
      if (validateButton != null) {
         validateButton.remove();
         validateButton = null;
      }
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
      return validate(true);
   };
   
   function initPaper() {
      paper = subTask.raphaelFactory.create("paper","paper",paperWidth,paperHeight);
   };

   function initConversation() {
      var attr = conversationAttr;
      var x0 = 0;
      var y0 = 0;
      paper.rect(x0,y0,paperWidth,conversationH).attr(attr.frame);
      paper.text(paperWidth/2, headerH/2, taskStrings.conversation).attr(attr.title);
      paper.path("M"+x0+" "+(y0 + headerH)+",H"+paperWidth).attr(attr.line);

      var xAlice = 65;
      var xBubble1 = 127;
      var yBubble1 = y0 + headerH + marginY;
      var yAlice = yBubble1 + aliceBubbleH/2;
      paper.text(xAlice,yAlice,taskStrings.alice).attr(attr.name);
      drawBubble(xBubble1,yBubble1,aliceBubbleW,aliceBubbleH,"left",yAlice);
      paper.text(xBubble1 + marginX,yAlice,aliceLine).attr(attr.text);

      var xBob = paperWidth - 100;
      var xBubble2 = xBob - bobBubbleW - marginX;
      var yBubble2 = yBubble1 + aliceBubbleH + marginY;
      var yBob = yBubble2 + bobBubbleH/2;
      paper.text(xBob,yBob,taskStrings.bob).attr(attr.name);
      drawBubble(xBubble2,yBubble2,bobBubbleW,bobBubbleH,"right",yBob);
      var yText = yBubble2 + marginY;
      var xText = xBubble2 + marginX;
      for(var iLetter = 0; iLetter < encryptedText.length; iLetter++){
         var letter = encryptedText[iLetter];
         var x = xText + (iLetter%maxLettersPerLine)*letterSpacing;
         var y = yText + Math.floor(iLetter/maxLettersPerLine) * lineSpacing;
         textRaph[iLetter] = paper.text(x,y,letter).attr(attr.text);
      }
   };

   function initDecryptionTool() {
      var attr = decryptionToolAttr;
      var y0 = conversationH + marginY;
      paper.rect(0,y0).attr(attr.frame);
      paper.text(paperWidth/2, y0 + headerH/2, taskStrings.decryptionTool).attr(attr.title);
      paper.path("M"+0+" "+(y0 + headerH)+",H"+paperWidth).attr(attr.line);

      var xLabel = marginX;
      var xScreen = 220;
      var yScreen = y0 + headerH + marginY;
      var yLabel = yScreen + screenH/2;
      paper.text(xLabel,yLabel,taskStrings.pleaseInput(minLetters)).attr(attr.label1);
      
      paper.rect(xScreen,yScreen).attr(attr.screen);
      var yLetter = yScreen + screenH/2;
      for(var iLetter = 0; iLetter < maxLetters; iLetter++){
         var xLetter = xScreen + marginX + (iLetter + 1/2)*(screenW - 2*marginX)/maxLetters;
         inputRaph[iLetter] = paper.text(xLetter,yLetter,"").attr(inputAttr);
      }
      updateInput();

      var xButton = xScreen + screenW + marginX;
      validateButton = new Button(paper, xButton, yScreen, validateButtonW, validateButtonH, taskStrings.validate);
      validateButton.setAttr("rect","enabled",keyboardAttr[0].attr);
      validateButton.setAttr("shadow","enabled",keyboardAttr[1].attr);
      validateButton.setAttr("text","enabled",keyboardAttr[2].attr);

      var yLabel2 = yScreen + screenH + 2*marginY;
      errorLabel = paper.text(paperWidth/2, yScreen + screenH + marginY, "erreur").attr(errorAttr);
      paper.text(xLabel,yLabel2,taskStrings.autocompletion).attr(attr.label2);
      var xAutocompletion = 180;
      var wordsSpacing = 7*attr.autocompletion["font-size"];
      var lineSpacing = 15;
      var maxWordsPerLine = Math.floor((paperWidth - xAutocompletion - marginX)/wordsSpacing);
      for(var iWord = 0; iWord < 2*maxWordsPerLine; iWord++){
         var x = xAutocompletion + (iWord%maxWordsPerLine)*wordsSpacing;
         var y = yLabel2 + Math.floor(iWord/maxWordsPerLine)*lineSpacing;
         autocompletionRaph[iWord] = paper.text(x,y,"").attr(attr.autocompletion);
      }
      updateAutocompletion();

      var xKeyboard = marginX;
      var yKeyboard = yScreen + screenH + marginY + autocompletionH;
      initKeyboard(xKeyboard,yKeyboard);
   };

   function initKeyboard(x,y) {
      var keys = ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P",
                  "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M",
                  null, "W", "X", "C", "V", "B", "N", null, null, "backspace"];
      keyboard = new Keyboard({
         paper: paper,
         keys: keys,
         nRows: nRows,
         nCol: nCol,
         xPos: x,
         yPos: y,
         keyWidth: keyW,
         keyHeight: keyH,
         marginX: keyMarginX,
         marginY: keyMarginY,
         shiftOddRows: true,
         attr: keyboardAttr,
         keyFiller: keyFiller
      });
   };

   function initHandlers() {
      for(var iKey = 0; iKey < keyboard.keys.length; iKey++){
         if (keyboard.keys[iKey] != null) {
            keyboard.keyboard[iKey].click(keyboardClick(iKey));
            keyboard.keyboard[iKey].changeOverlay({cursor:"pointer"});
         }
      }
      validateButton.click(validate);
      validateButton.changeOverlay({cursor:"pointer"});
   };

   function keyFiller(index,x,y){
      if(this.keys[index] != "backspace"){
         return null;
      }else{
         var enterKey = new Button(this.paper,x,y,this.keyWidth,this.keyHeight,"",this.repeat, this.initialDelay, this.stepDelay, this.delayFactory);
         enterKey.setAttr("rect","enabled",enterButtonAttr);
         enterKey.setAttr("shadow","enabled",{opacity: 0});
         var enterArrow = paper.path("M"+(x + keyW/2 + enterArrowLength/2)+" "+(y + keyH/2)+",H"+(x + keyW/2 - enterArrowLength/2)).attr(enterArrowAttr);
         enterKey.addElement("arrow",enterArrow);
         return enterKey;
      }
   };

   function drawBubble(x,y,w,h,side,ySpeaker) {
      paper.rect(x,y,w,h).attr(conversationAttr.bubble);
      var triangleH = 8;
      var triangleW = 8;
      
      if(side == "left"){
         var x1 = x + 1;
         var x2 = x - triangleW;
      }else{
         var x1 = x + w - 1;
         var x2 = x + w + triangleW;
      }
      var x3 = x1;
      var y1 = ySpeaker - triangleH/2;
      var y2 = ySpeaker;
      var y3 = ySpeaker + triangleH/2;
      
      var path = "M"+x1+" "+y1+",L"+x2+" "+y2+",L"+x3+" "+y3;
      paper.path(path).attr(conversationAttr.bubble);
   };

   function updateInput() {
      for(var iLetter = 0; iLetter < maxLetters; iLetter++){
         var letter = answer.input[iLetter] || "";
         inputRaph[iLetter].attr("text",letter);
      }
   };

   function updateAutocompletion() {
      var input = answer.input;
      if(input.length == 0 || input.length == maxLetters){
         resetAutocompletion();
      }else{
         var words = [];
         var id = 0;
         do{
            var word = motsFrancaisCourants[id];
            if(word.length <= maxLetters && word.length >= minLetters && word.length > input.length){
               var match = true;
               for(var iLetter = 0; iLetter < input.length; iLetter++){
                  var letter = input[iLetter];
                  if(letter != word.charAt(iLetter).toUpperCase()){
                     match = false;
                  }
               }
               if(match){
                  words.push(word);
               }
            }
            id++;
         }while(words.length < autocompletionRaph.length && id < motsFrancaisCourants.length)

         for(var iWord = 0; iWord < autocompletionRaph.length; iWord++){
            var word = words[iWord] || "";
            autocompletionRaph[iWord].attr("text",word);
            autocompletionRaph[iWord].unclick();
            autocompletionRaph[iWord].click(setInput(word));
            autocompletionRaph[iWord].attr("cursor","pointer");
         }
      }
   };

   function resetAutocompletion() {
      for(var iWord = 0; iWord < autocompletionRaph.length; iWord++){
         autocompletionRaph[iWord].attr("text","");
         autocompletionRaph[iWord].unclick();
         autocompletionRaph[iWord].attr("cursor","auto");
      }
   };

   function setInput(word) {
      return function() {
         for(var iLetter = 0; iLetter < word.length; iLetter++){
            var letter = word.charAt(iLetter).toUpperCase();
            answer.input[iLetter] = letter;
         };
         updateInput();
         updateAutocompletion();
      }
   };

   function encryptText() {
      var text = bobLine;
      var newText = [];
      for(var iLetter = 0; iLetter < text.length; iLetter++){
         var letter = text.charAt(iLetter).toUpperCase();
         var letterID = Beav.Array.indexOf(letters,letter);
         var shift = rng.nextInt(1,1000);
         var newLetterID = (letterID + shift)%letters.length;
         var newLetter = letters[newLetterID];
         newText.push(newLetter);
      }
      return newText;
   };

   function getWords() {
      var words = [];
      var word = [];
      var startPos = null;
      for(var iLetter = 0; iLetter < bobLine.length; iLetter++){
         var letter = bobLine.charAt(iLetter).toUpperCase();
         if(Beav.Array.has(letters,letter)){
            word.push(letter);
            if(startPos == null){
               startPos = iLetter;
            }
         }else if(word.length > 0){
            words.push({word:word,startPos:startPos});
            word = [];
            startPos = null;
         }
      }
      return words;
   };

   function keyboardClick(id) {
      return function(){
         displayError("");
         var key = keyboard.keys[id];
         if(key != "backspace"){
            if(answer.input.length < maxLetters){
               answer.input.push(key);
            }
         }else{
            if(answer.input.length > 0){
               answer.input.pop();
            }
         }
         updateInput();
         updateAutocompletion();
      }
   };

   function validate(validation) {
      if (!validation) {
         displayError("");
      }
      var input = answer.input;
      if(input.length < minLetters){
         if(!validation){
            displayError(taskStrings.tooShort(minLetters));
         }else{
            return { successRate: 0, message: taskStrings.tooShort(minLetters) };   
         }
      }else{
         var startPos = getAnswerStartPosInMessage();
         if(startPos >= 0){
            if(!validation){
               animRevealText(startPos);
            }else{
               return { successRate: 1, message: taskStrings.success };
            }
         }else{
            if(!validation){
               answer.input = [];
               updateInput();
               updateAutocompletion();
               displayError(taskStrings.wrongWord);
            }else{
               return { successRate: 0, message: taskStrings.wrongWord };
            }
         }
      }
   };

   function getAnswerStartPosInMessage() {
      for(var iWord = 0; iWord < bobWords.length; iWord++){
         var word = bobWords[iWord].word;
         var startPos = bobWords[iWord].startPos;
         if(word.length == answer.input.length){
            var match = true;
            for(var iLetter = 0; iLetter < word.length; iLetter++){
               var letter = word[iLetter];
               if(letter != answer.input[iLetter]){
                  match = false;
               }
            }
            if(match){
               return startPos;
            }
         }
      }
      return -1;
   };

   function animRevealText(startPos) {
      for(var iLetter = startPos; iLetter < startPos + answer.input.length; iLetter++){
         textRaph[iLetter].attr({text:bobLine.charAt(iLetter).toUpperCase()})
                          .attr(highlightedTextAttr);
      }
      subTask.delayFactory.create("delay",revealText(startPos,startPos + answer.input.length - 1),animTime);
   };

   function revealText(min,max) {
      return function(){
         var idToReveal = [];
         if(min > 0){
            min--;
            idToReveal.push(min);
         }
         if(max < textRaph.length - 1){
            max++;
            idToReveal.push(max);
         }
         if(idToReveal.length > 0){
            for(var iID = 0; iID < idToReveal.length; iID++){
               var id = idToReveal[iID];
               textRaph[id].attr({text:bobLine.charAt(id).toUpperCase()}).attr(revealedTextAttr);
            }
            subTask.delayFactory.create("delay",revealText(min,max),animTime);
         }else{
            platform.validate("done");
         }
      }
   };

   function displayError(msg) {
      errorLabel.attr({text: msg});
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
