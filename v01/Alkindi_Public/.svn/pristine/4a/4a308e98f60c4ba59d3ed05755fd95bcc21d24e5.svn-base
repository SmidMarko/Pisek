function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         text: "vous avez gagne",
         lettersToShow: 5
      },
      medium: {
         text:"cette phrase est juste",
         lettersToShow: 5
      },
      hard: {
         text: "alkindi etait genial",
         lettersToShow: 5,
         shifts: [-1, 1, 1, -1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1]
      }
   };

   var paper;
   var paperWidth = 730;
   var paperHeight;

   var marginX = 10;
   var marginY = 20;
   var arrowFrameW = 27;
   var encryptionWheelFrameH = 171;
   var wheelCellW;
   var wheelCellH = 32;
   var decryptionCellW = 40;
   var decryptionCellH = 40;
   var headerH = 40;
   var keyboardH = 150;
   var keyWidth = 60;
   var keyHeight = 30;
   var keyMarginX = 7;
   var keyMarginY = 5;
   var nRows = 3;
   var nCol = 10;
   var enterArrowLength = 16;
   var maxLettersPerRow;
   var lettersToShow;

   var wheelRaph = [];
   var decryptedCellsRaph = [];
   var selectedCell = null;
   var leftClickArea;
   var rightClickArea;
   var text;
   var encryptedText;
   var initialShift;
   var animationRunning = false;
   var animTime = 80;

   var rng;
   var keyboard;

   var letters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
   var colors = {
      lightGreyBG: "#F9F9F9",
      greyBG: "#EAEAEA",
      darkGreyText: "#6D6D6D",
      darkGreyBG: "#CBC7C9",
      green: "#88BB88",
      black: "#30242B",
      darkGreen: "#5A7E5A" 
   };

   var greenLetterAttr = {
      "font-size": 14,
      "font-weight": "bold",
      fill: colors.darkGreen
   };
   var blackLetterAttr = {
      "font-size": 14,
      "font-weight": "bold",
      fill: colors.black
   };
   var encryptionWheelAttr = {
         frame: {
            width: paperWidth,
            height: encryptionWheelFrameH,
            stroke: "none",
            fill: colors.lightGreyBG,
            r: 5
         },
         title: {
            "font-size": 14,
            "font-weight": "bold",
            fill: colors.black,
            opacity: 0.7
         },
         line: {
            stroke: colors.darkGreyText
         },
         text: {
            "font-size": 14,
            "font-style": "italic",
            fill: colors.darkGreyText
         },
         wheelCell: {
            stroke: colors.darkGreyText,
            fill: colors.darkGreyBG,
         },
         arrow: {
            stroke: "none",
            fill: "white"
         },
         clickFrame: {
            // width: arrowFrameW,
            // height: wheelCellH + 2,
            r: 5,
            stroke: "none",
            fill: colors.green
         },
         corrRect: {
            stroke: "none",
            fill: colors.green,
         }
   }; 
   var decryptionBoxAttr = {
         frame: {
            stroke: "none",
            fill: colors.greyBG,
            r: 5
         },
         title: {
            "font-size": 16,
            "font-weight": "bold",
            fill: colors.darkGreen
         },
         line: {
            stroke: colors.green
         },
         leftMargin: 100,
         encryptedLabel: {
            "font-size": 14,
            fill: colors.darkGreen
         },
         decryptedLabel: {
            "font-size": 14,
            fill: colors.darkGreyText
         },
         keyboardLine: {
            stroke: colors.darkGreyBG
         },
         message: {
            "text-anchor": "start",
            "font-size": 16,
            "font-weight": "bold",
            fill: colors.darkGreen
         }
   };
   var emptyCellAttr = {
      stroke: colors.darkGreyText,
      "stroke-width": 1,
      fill: colors.darkGreyBG,
      "fill-opacity": 0.5
   };
   var selectedCellAttr = {
      stroke: colors.green,
      "stroke-width": 3,
      fill: colors.darkGreyBG,
      "fill-opacity": 1
   };
   var editedCellAttr = {
      stroke: colors.darkGreyText,
      "stroke-width": 1,
      fill: colors.darkGreyBG,
      "fill-opacity": 1
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

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      rng = new RandomGenerator(subTask.taskParams.randomSeed);
      initialShift = (rng.nextInt(1,10000))%letters.length;
      wheelCellW = (paperWidth - 2*marginX - 2*arrowFrameW)/letters.length;
      text = data[level].text;
      lettersToShow = data[level].lettersToShow;
      encryptedText = encryptText();
      maxLettersPerRow = Math.floor((paperWidth - marginX - decryptionBoxAttr.leftMargin)/decryptionCellW);
      decryptionSpotH = marginY + Math.ceil((text.length/maxLettersPerRow))*(2*decryptionCellH + marginY);
      paperHeight = encryptionWheelFrameH + marginY + headerH + decryptionSpotH + keyboardH;
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      if(!answer) {
         return;
      }
      encryptedText = encryptText();
   };

   subTask.resetDisplay = function() {
      initPaper();
      initWheel();
      initDecryptionBox();
      initHandlers();
      displayError("");
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = { shift: 0, decrypted: [] };
      for(var iLetter = 0; iLetter < lettersToShow; iLetter++){
         defaultAnswer.decrypted[iLetter] = text.charAt(iLetter).toUpperCase();
      }
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
      for(var iLetter = 0; iLetter < text.length; iLetter++){
         var targetLetter = text.charAt(iLetter).toUpperCase();
         var answerLetter = answer.decrypted[iLetter] || " ";
         if(answerLetter != targetLetter){
            if (level == "hard" && iLetter >= 12) {
               return { successRate: 0.5, message: taskStrings.partialScore };
            }
            return { successRate: 0, message: taskStrings.error };
         }
      }
      return { successRate: 1, message: taskStrings.success };
   };
   
   function initPaper() {
      paper = subTask.raphaelFactory.create("paper","paper",paperWidth,paperHeight);
   };

   function initWheel() {
      paper.rect(0,0).attr(encryptionWheelAttr.frame);
      paper.text(paperWidth/2, headerH/2, taskStrings.encryptionWheel).attr(encryptionWheelAttr.title);
      paper.path("M"+0+" "+headerH+",H"+paperWidth).attr(encryptionWheelAttr.line);
      paper.text(paperWidth/2, headerH + 15, taskStrings.clickOnTheArrows).attr(encryptionWheelAttr.text);

      var wheelFrameY = 110;

      var xLeftArr = marginX + arrowFrameW/2;
      var xRightArr = marginX + paperWidth - 2*marginX - arrowFrameW/2;
      // var leftClickFrame = paper.rect(marginX,wheelFrameY).attr(encryptionWheelAttr.clickFrame);
      // var rightClickFrame = paper.rect(xRightArr - arrowFrameW/2,wheelFrameY).attr(encryptionWheelAttr.clickFrame);
      var leftCorrRect = paper.rect(marginX + arrowFrameW - 5, wheelFrameY, 5, wheelCellH + 2).attr(encryptionWheelAttr.corrRect);
      var rightCorrRect = paper.rect(xRightArr - arrowFrameW/2, wheelFrameY, 5, wheelCellH + 2).attr(encryptionWheelAttr.corrRect);
      
      var yArrow = wheelFrameY + wheelCellH/2 + 1;
      var leftArrow = getShape(paper,"triangle",xLeftArr,yArrow,5).attr(encryptionWheelAttr.arrow);
      var rightArrow = getShape(paper,"triangle",xRightArr,yArrow,5).attr(encryptionWheelAttr.arrow);
      leftArrow.transform("r"+-90);
      rightArrow.transform("r"+90);

      // leftClickArea = paper.set(leftClickFrame,leftCorrRect,leftArrow);
      leftClickArea = new Button(paper,marginX,wheelFrameY,arrowFrameW - 1,wheelCellH + 2,"",true,600,200,subTask.delayFactory);
      leftClickArea.addElement("arrow",leftArrow);
      leftClickArea.addElement("corrRect",leftCorrRect);
      leftClickArea.setAttr("rect","enabled",encryptionWheelAttr.clickFrame);
      leftClickArea.setAttr("corrRect","enabled",encryptionWheelAttr.corrRect);
      leftClickArea.setAttr("shadow","enabled",{opacity:0});
      leftClickArea.setAttr("corrRect","mousedown",{"fill": "#e5e5e5"});
      // rightClickArea = paper.set(rightClickFrame,rightCorrRect,rightArrow);
      rightClickArea = new Button(paper,xRightArr - arrowFrameW/2,wheelFrameY,arrowFrameW - 1,wheelCellH + 2,"",true,600,200,subTask.delayFactory);
      rightClickArea.addElement("arrow",rightArrow);
      rightClickArea.addElement("corrRect",rightCorrRect);
      rightClickArea.setAttr("rect","enabled",encryptionWheelAttr.clickFrame);
      rightClickArea.setAttr("corrRect","enabled",encryptionWheelAttr.corrRect);
      rightClickArea.setAttr("shadow","enabled",{opacity:0});
      rightClickArea.setAttr("corrRect","mousedown",{"fill": "#e5e5e5"});

      var x0 = marginX + arrowFrameW;
      for(var iLetter = 0; iLetter < letters.length; iLetter++){
         var xCell = marginX + arrowFrameW + iLetter * wheelCellW;
         var xLabel = xCell + wheelCellW/2;
         var yLabel = wheelFrameY - 15;
         paper.text(xLabel,yLabel,letters[iLetter]).attr(greenLetterAttr);
      }

      updateWheel();
   };

   function initDecryptionBox() {
      var xBox = 0;
      var yBox = encryptionWheelAttr.frame.height + marginY;
      paper.rect(xBox,yBox,paperWidth,headerH + decryptionSpotH + keyboardH).attr(decryptionBoxAttr.frame);
      paper.text(paperWidth/2,yBox + headerH/2,taskStrings.selectABox).attr(decryptionBoxAttr.title);
      paper.path("M"+0+" "+(yBox + headerH)+",H"+paperWidth).attr(decryptionBoxAttr.line);

      var yLine = yBox + headerH + 13;
      var leftMargin = decryptionBoxAttr.leftMargin;
      var xLabel = leftMargin/2;
      paper.text(xLabel, yLine + decryptionCellH/2, taskStrings.encrypted).attr(decryptionBoxAttr.encryptedLabel);
      paper.text(xLabel, yLine + 3*decryptionCellH/2, taskStrings.decrypted).attr(decryptionBoxAttr.decryptedLabel);

      for(var iLetter = 0; iLetter < text.length; iLetter++){
         var letter = encryptedText.charAt(iLetter).toUpperCase();
         var x = leftMargin + (iLetter%maxLettersPerRow)*decryptionCellW;
         var y = yLine + Math.floor(iLetter/maxLettersPerRow)*(2*decryptionCellH + marginY);
         paper.text(x + decryptionCellW/2, y + decryptionCellH/2,letter).attr(greenLetterAttr);
         if(letter != " "){
            var rect = paper.rect(x,y + decryptionCellH,decryptionCellW,decryptionCellH).attr(emptyCellAttr);
            var letter = paper.text(x + decryptionCellW/2, y + 3*decryptionCellH/2,"").attr(blackLetterAttr);
            decryptedCellsRaph[iLetter] = paper.set(rect,letter);
         }
      }
      updateDecryptedCells();
      paper.path("M"+0+" "+(yBox + headerH + decryptionSpotH)+",H"+paperWidth).attr(decryptionBoxAttr.keyBoardLine);
      
      if (level == "hard") {
         paper.text(leftMargin + 4*decryptionCellW,
                    yLine + (3.5*decryptionCellH + marginY),
                    taskStrings.partialScoreMessage).attr(decryptionBoxAttr.message);
      }

      initKeyboard();
   };

   function initKeyboard() {
      var keys = ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P",
                  "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M",
                  null, "W", "X", "C", "V", "B", "N", null, null, "backspace"];
      var x0 = keyMarginX * 2;
      var y0 = encryptionWheelFrameH + marginY + headerH + decryptionSpotH + marginY;
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
         shiftOddRows: true,
         attr: keyboardAttr,
         keyFiller: keyFiller
      });
   };

   function initHandlers() {
      leftClickArea.click(shiftWheel(-1));
      rightClickArea.click(shiftWheel(1));
      
      // leftClickArea.mousedown(shiftWheel(-1));
      // rightClickArea.mousedown(shiftWheel(1));
      leftClickArea.changeOverlay({cursor:"pointer"});
      rightClickArea.changeOverlay({cursor:"pointer"});

      for(var iCell = lettersToShow; iCell < decryptedCellsRaph.length; iCell++){
         if(decryptedCellsRaph[iCell]){
            decryptedCellsRaph[iCell].click(selectCell(iCell,true));
            decryptedCellsRaph[iCell].attr("cursor","pointer");
         }
      }

      for(var iKey = 0; iKey < keyboard.keys.length; iKey++){
         if (keyboard.keys[iKey] != null) {
            keyboard.keyboard[iKey].click(keyboardClick(iKey));
            keyboard.keyboard[iKey].changeOverlay({cursor:"pointer"});
         }
      }
   };

   function keyFiller(index,x,y){
      if(this.keys[index] != "backspace"){
         return null;
      }else{
         var enterKey = new Button(this.paper,x,y,this.keyWidth,this.keyHeight,"",this.repeat, this.initialDelay, this.stepDelay, this.delayFactory);
         enterKey.setAttr("rect","enabled",enterButtonAttr);
         enterKey.setAttr("shadow","enabled",{opacity: 0});
         var enterArrow = paper.path("M"+(x + keyWidth/2 + enterArrowLength/2)+" "+(y + keyHeight/2)+",H"+(x + keyWidth/2 - enterArrowLength/2)).attr(enterArrowAttr);
         enterKey.addElement("arrow",enterArrow);
         return enterKey;
      }
   };

   function updateWheel() {
      for(var iLetter = 0; iLetter < letters.length; iLetter++){
         var xCell = marginX + arrowFrameW + iLetter * wheelCellW;
         var yCell = 111;
         var xLetter = xCell + wheelCellW/2;
         var yLetter = yCell + 1 + wheelCellH/2;
         var index = (letters.length + iLetter - answer.shift)%letters.length;
         if(wheelRaph[iLetter]){
            wheelRaph[iLetter].remove();
         }
         wheelRaph[iLetter] = createWheelCell(xCell,yCell,letters[index]);
      }
      leftClickArea.toFront();
      rightClickArea.toFront();
   };

   function createWheelCell(x,y,letter) {
      var rect = paper.rect(x,y,wheelCellW,wheelCellH).attr(encryptionWheelAttr.wheelCell);
      var letter = paper.text(x + wheelCellW/2,y + wheelCellH/2,letter).attr(blackLetterAttr);
      return paper.set(rect,letter);
   };

   function updateDecryptedCells() {
      for(var iCell = 0; iCell < decryptedCellsRaph.length; iCell++){
         if(!decryptedCellsRaph[iCell]){
            continue;
         }else{
            updateDecryptedCell(iCell);
         }
      }
   };

   function updateDecryptedCell(id) {
      var letter = answer.decrypted[id];
      if(letter){
         decryptedCellsRaph[id][0].attr(editedCellAttr);
         decryptedCellsRaph[id][1].attr("text",letter);
         if(selectedCell == id){
            decryptedCellsRaph[id][0].attr(selectedCellAttr);
         }else if(id == decryptedCellsRaph.length - 1 && selectedCell == null){
            selectCell(id,true)();
         }
      }else{
         decryptedCellsRaph[id][0].attr(emptyCellAttr);
         decryptedCellsRaph[id][1].attr("text","");
         if(selectedCell == id){
            decryptedCellsRaph[id][0].attr(selectedCellAttr);
            decryptedCellsRaph[id][1].attr("text","_");
         }else if(selectedCell == null){
            selectCell(id,true)();
         }
      }
   };

   function shiftWheel(direction) {
      return function() {
         if(animationRunning){
            return
         }
         displayError("");
         answer.shift = (letters.length + answer.shift + direction)%letters.length;

         shiftAnim(direction);
         // updateWheel();
      }
   };

   function shiftAnim(direction) {
      animationRunning = true;
      var yNew = 111;
      if(direction == 1){
         var xNew = marginX + arrowFrameW - wheelCellW;
         var newLetter = wheelRaph[wheelRaph.length - 1][1].attr("text");
      }else{
         var xNew = marginX + arrowFrameW + letters.length*wheelCellW;
         var newLetter = wheelRaph[0][1].attr("text");
      }
      var newCell = createWheelCell(xNew,yNew,newLetter);
      leftClickArea.toFront();
      rightClickArea.toFront();
      var anim = new Raphael.animation({"transform":"T"+(direction*wheelCellW)+" 0"},animTime);
      var animNew = new Raphael.animation({"transform":"T"+(direction*wheelCellW)+" 0"},animTime,function(){
         updateWheel();
         newCell.remove();
         animationRunning = false;
      });
      for(var iCell = 0; iCell < letters.length; iCell++){
         subTask.raphaelFactory.animate("anim"+iCell,wheelRaph[iCell],anim);
      }
      subTask.raphaelFactory.animate("animNew",newCell,animNew);
   };

   function selectCell(id,selected) {
      return function() {
         displayError("");
         if(selected){
            if(selectedCell != null){
               if(selectedCell == id){
                  selectCell(selectedCell,false)();
                  return;
               }else{
                  selectCell(selectedCell,false)();
               }
            }
            var letter = answer.decrypted[id] || "_";
            decryptedCellsRaph[id][0].attr(selectedCellAttr);
            decryptedCellsRaph[id].toFront();
            selectedCell = id;
         }else{
            var letter = answer.decrypted[id] || "";
            var attr = (letter) ? editedCellAttr : emptyCellAttr;
            decryptedCellsRaph[id][0].attr(attr);
            selectedCell = null;
         }
         decryptedCellsRaph[id][1].attr("text",letter);
      }
   };

   function keyboardClick(id) {
      return function(){
         displayError("");
         if(selectedCell == null){
            displayError(taskStrings.noCellSelected);
         }else{
            var key = keyboard.keys[id];
            if(key != "backspace"){
               answer.decrypted[selectedCell] = key;
               if(selectedCell < text.length - 1){
                  if(text.charAt(selectedCell + 1) != " "){
                     selectCell(selectedCell + 1,true)();
                  }else{
                     selectCell(selectedCell + 2,true)();
                  }
               }else{
                  updateDecryptedCell(selectedCell);
               }
            }else{
               if ((selectedCell == answer.decrypted.length - 1) &&
                   (answer.decrypted[selectedCell] != null)) {
                  answer.decrypted[selectedCell] = null;
                  updateDecryptedCell(selectedCell);
               } else if (selectedCell > 0) {
                  if(selectedCell > lettersToShow){
                     if(text.charAt(selectedCell - 1) != " "){
                        answer.decrypted[selectedCell - 1] = null;
                        selectCell(selectedCell - 1,true)();
                     }else if(selectedCell - 1 > lettersToShow){
                        answer.decrypted[selectedCell - 2] = null;
                        selectCell(selectedCell - 2,true)();
                     }else{
                        updateDecryptedCell(selectedCell);
                     }
                  }else{
                     updateDecryptedCell(selectedCell);
                  }
               }
            }
         }
      }
   };

   function encryptText() {
      var encrypted = "";
      if(level != "easy"){
         text = text.replace(/ /g,"");
      }
      var shiftIncrement = 0;
      for(var iLetter = 0; iLetter < text.length; iLetter++){
         var letter = text.charAt(iLetter).toUpperCase();
         var index = Beav.Array.indexOf(letters,letter);
         if (level == "easy") {
            shiftIncrement = 0;
         } else if(level == "medium"){
            shiftIncrement = iLetter;
         } else if(level == "hard"){
            shiftIncrement += data[level].shifts[iLetter];
         }
         var newIndex = (index + initialShift + shiftIncrement)%letters.length;
         var newLetter = (letter != " ") ? letters[newIndex] : " ";
         encrypted += newLetter;
      }
      return encrypted;
   };

   function displayError(msg) {
      $("#error").html(msg);
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
