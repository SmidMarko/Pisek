function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         word: "regenerer",
         letters: ["e", "r",  "g", "n"],
         codes: [ '-..-' , '-..','-'  ,   '-.'  ],
         useSpaces: true,
         showDecryption: false,
         optimal: 17 // TODO tentative arbitrary value
      },
      medium: {
         word: "ce_ver_vert_severe_sait_verser_ses_verres_verts",
         // Must contain all letters from the word (and possibly others).
         letters: [ "e", "r", "_","s","v","t","c","a","i",""],
         // Codes must be the same length as the letters.
         codes: ['..', '.--', '.-.---', '.-...', '.-..-.', '.-..--', '-.','--.' ,   '---','.-.-' ],
         useSpaces: true,
         showDecryption: false,
         optimal: 132 // TODO tentative arbitrary value
      },

      hard: {
         word: "le_cricri_de_la_crique_crie_son_cri_cru_et_critique_car_il_craint_que_l_escroc_ne_le_croque_et_ne_le_craque",
         letters: ["_",  "e","c","r","i","l","u","q","n",  "a", "t", "o", "s", "d",         "",""],
         codes: ['.','..', '.--', '.-..', '.-.-',"-.-","-..-",  "-...-","--",  "-....-", "--.","---.","----.","-----", "-......",  "-.....-.-" ],
         useSpaces: false,
         showDecryption: true,
         optimal: 371 // TODO tentative arbitrary value
      }
   };
   
   var paperUser;
   var paperEncrypted;
   var paperDecrypted;
   var encryptedRaphael;
   var decryptedRaphael;
   var showDecryption;

   var dragAndDrop;

   var suffixBracketCodes = 10;

   var paperParams = {
      userWidth: null, // Calculated.
      userHeight: null,
      resultWidth: 510,
      resultHeight: 190,
      decryptedHeight: 380,
      xPad: 1,
      yPad: 2
   };

   var dragParams = {
      letterWidth: 80,
      codeWidth: 120,
      height: 30,
      xSpacing: 6,
      xPad: 20,
      textAttr: {
         "font-size": 16,
         "text-anchor": "start"
      },
      frequencyAttr: {
         "font-size": 16,
         "text-anchor": "end"
      },
      unusedAttr: {
         "font-size": 14
      },
      codeLeftMargin: 15,
      letterBoxAttr: {
         fill: "white"
      },
      codeBoxAttr: {
         fill: "white"
      }
   };

   var codeParams = {
      dotRadius: 2.5,
      dotXPad: 0,
      dashLength: 2,
      dotAttr: {
         fill: "#8888ff"
      },
      dashAttr: {
         stroke: "black",
         "stroke-width": 3,
         "stroke-linecap": "round"
      },
      codesSpacing: 4
   };

   var resultParams = {
      rowSpacing: 16,
      letterRowSpacing: 12,
      letterSpacing: 20,
      bracketHeight: 5,
      bracketXMargin: 2,
      bracketAttr: {
         stroke: "black"
      },
      bracketErrorAttr: {
         stroke: "red"
      },
      bracketRectErrorAttr: {
         fill: "#ffaaaa",
         width: 16,
         height: 16,
         stroke: "none"
      },
      bracketTextY: 15,
      bracketTextAttr: {
         "font-size": 14
      }
   };

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

   subTask.resetDisplay = function() {
      $("#word").text(data[level].word);
      showDecryption = data[level].showDecryption;
      if(showDecryption) {
         $("#decryptionContainer").show();
      }
      else {
         $("#decryptionContainer").hide();
      }
      initPaper();
      refreshResults();
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var obj = {};
      obj.letters = Beav.Array.init(data[level].letters.length, function(index) {
         return index;
      });
      obj.codes = Beav.Array.init(data[level].codes.length, function(index) {
         return index;
      });
      return obj;
   };

   subTask.unloadLevel = function(callback) {
      if(dragAndDrop) {
         dragAndDrop.disable();
      }
      callback();
   };

   function initPaper() {
      paperParams.userWidth = dragParams.letterWidth + dragParams.codeWidth + dragParams.xSpacing + 2 * paperParams.xPad;
      paperParams.userHeight = data[level].letters.length * dragParams.height + 2 * paperParams.yPad; 
      paperUser = subTask.raphaelFactory.create("paperUser", "paperUser", paperParams.userWidth, paperParams.userHeight);
      initDragAndDrop();

      paperEncrypted = subTask.raphaelFactory.create("paperEncrypted", "paperEncrypted", paperParams.resultWidth, paperParams.resultHeight);
      if(showDecryption) {
         paperDecrypted = subTask.raphaelFactory.create("paperDecrypted", "paperDecrypted", paperParams.resultWidth, paperParams.decryptedHeight);
      }
   }

   function initDragAndDrop() {
      dragAndDrop = DragAndDropSystem({
         paper: paperUser,
         actionIfDropped: actionIfDropped,
         actionIfEjected: actionIfEjected
      });

      // Letters container.
      dragAndDrop.addContainer({
         ident: "letters",
         cx: paperParams.xPad + dragParams.letterWidth / 2,
         cy: paperParams.userHeight / 2,
         widthPlace: dragParams.letterWidth,
         heightPlace: dragParams.height,
         nbPlaces: data[level].letters.length,
         dropMode: "replace",
         dragDisplayMode : "marker",
         placeBackgroundArray: [],
         direction: "vertical"
      });

      // Fill letters from answer.
      for(var iLetter = 0; iLetter < data[level].letters.length; iLetter++) {
         var letterIndex = answer.letters[iLetter];
         dragAndDrop.insertObject("letters", iLetter, {
            ident: letterIndex,
            elements: [drawLetter(data[level].letters[letterIndex])]
         });
      }

      // Codes container.
      dragAndDrop.addContainer({
         ident: "codes",
         cx: paperParams.userWidth - paperParams.xPad - dragParams.codeWidth / 2,
         cy: paperParams.userHeight / 2,
         widthPlace: dragParams.codeWidth,
         heightPlace: dragParams.height,
         nbPlaces: data[level].codes.length,
         dropMode: "replace",
         dragDisplayMode : "marker",
         placeBackgroundArray: [],
         direction: "vertical"
      });

      // Fill codes from answer.
      for(var iCode = 0; iCode < data[level].codes.length; iCode++) {
         var codeIndex = answer.codes[iCode];
         dragAndDrop.insertObject("codes", iCode, {
            ident: codeIndex,
            elements: [drawCodesWithBox(data[level].codes[codeIndex])]
         });
      }
   }

   function drawLetter(letter) {
      paperUser.setStart();
      paperUser.rect(
         - dragParams.letterWidth / 2,
         - dragParams.height / 2,
         dragParams.letterWidth,
         dragParams.height
      ).attr(dragParams.letterBoxAttr);
      if(letter === null || letter === undefined || letter === '') {
         paperUser.text(0, 0, taskStrings.unused).attr(dragParams.unusedAttr);
      }
      else {
         paperUser.text(dragParams.letterWidth / 2 - dragParams.xPad, 0, getFrequencyString(letter)).attr(dragParams.frequencyAttr);
         paperUser.text(- dragParams.letterWidth / 2 + dragParams.xPad, 0, letter).attr(dragParams.textAttr);
      }
      return paperUser.setFinish();
   }

   function getFrequencyString(letter) {
      var count = 0;
      for(var iLetter = 0; iLetter < data[level].word.length; iLetter++) {
         if(data[level].word[iLetter] === letter) {
            count++;
         }
      }
      return count.toString();
   }

   function drawCodesWithBox(codes) {
      var set = paperUser.set();
      var rect = paperUser.rect(
         - dragParams.codeWidth / 2,
         - dragParams.height / 2,
         dragParams.codeWidth,
         dragParams.height
      ).attr(dragParams.codeBoxAttr);
      set.push(rect);
      var elements = drawCodes(paperUser, codes, - dragParams.codeWidth / 2 + dragParams.codeLeftMargin, 0);
      set.push(elements);
      return set;
   }

   function drawCodes(paper, codes, leftX, centerY) {
      paper.setStart();
      var currentX = leftX;
      for(var iCode = 0; iCode < codes.length; iCode++) {
         drawSingleCode(paper, codes[iCode], currentX, centerY);
         currentX += getSingleCodeWidth(codes[iCode]) + codeParams.codesSpacing;
      }
      return paper.setFinish();
   }

   function drawSingleCode(paper, code, leftX, centerY) {
      if(code == '.') {
         return paper.circle(leftX + codeParams.dotXPad + codeParams.dotRadius, centerY, codeParams.dotRadius).attr(codeParams.dotAttr);
      }
      else {
         return paper.path(["M", leftX + codeParams.dashAttr["stroke-width"] / 2, centerY, "h", codeParams.dashLength]).attr(codeParams.dashAttr);
      }
   }

   function getCodesWidth(codes) {
      var result = 0;
      for(var iCode = 0; iCode < codes.length; iCode++) {
         var code = codes[iCode];
         result += getSingleCodeWidth(code);
         if(iCode < codes.length - 1) {
            result += codeParams.codesSpacing;
         }
      }
      return result;
   }

   function getSingleCodeWidth(code) {
      if(code == '.') {
         return codeParams.dotRadius * 2 + codeParams.dotXPad * 2;
      }
      else {
         return codeParams.dashLength + codeParams.dashAttr["stroke-width"];
      }
   }

   function actionIfDropped(srcCont, srcPos, dstCont, dstPos, dropType) {
      return srcCont === dstCont;
   }

   function actionIfEjected(refElement, srcCont, srcPos) {
      var sequence = dragAndDrop.getObjects(srcCont);
      for (var iPos = 0; iPos < sequence.length; iPos++) {
         if (sequence[iPos] === null) {
            // When an item is dropped, another item is removed, resulting in this null element.
            // Therefore the answer needs manual updating.
            updateAnswer();
            answer[srcCont][iPos] = parseInt(refElement.ident);
            refreshResults();
            return DragAndDropSystem.action(srcCont, iPos, "insert");
         }
      }
      return null;
   }

   function updateAnswer() {
      updateAnswerContainer("codes");
      updateAnswerContainer("letters");
   }

   function updateAnswerContainer(container) {
      answer[container] = $.map(dragAndDrop.getObjects(container), function(element, index) {
         return parseInt(element);
      });
   }

   function refreshResults() {
      if(encryptedRaphael) {
         encryptedRaphael.remove();
      }
      if(decryptedRaphael) {
         decryptedRaphael.remove();
      }
      encryptedRaphael = drawCipher(paperEncrypted, false);
      if(showDecryption) {
         decryptedRaphael = drawCipher(paperDecrypted, true);
      }
   }

   function drawCipher(paper, showLetters) {
      var userResult = getUserResult();
      $("#cipherLength").text(taskStrings.cipherLength(userResult.cipherContinuous.length));
      var leftX = paperParams.xPad + codeParams.dotRadius;
      var rightX = paperParams.resultWidth - paperParams.xPad;
      var currentX = leftX;
      var currentY = paperParams.yPad + codeParams.dotRadius;
      var set = paper.set();
      var groups = userResult.cipherGroups;
      var suffix = userResult.suffix;
      
      // Add the suffix codes as individual groups, so that they are drawn by the same method.
      // The bracket is handled later.
      for(var iChar = 0; iChar < suffix.length; iChar++) {
         groups.push(suffix[iChar]);
      }
      
      for(var iGroup = 0; iGroup < groups.length; iGroup++) {
         if (groups[iGroup] === undefined || groups[iGroup] === null) {
            alert("a letter is missing");
         }
         var codes = groups[iGroup];
         // Next row if needed.
         var currentWidth = getCodesWidth(codes);
         if(currentX + currentWidth > rightX || iGroup === userResult.decrypted.length) {
            currentX = leftX;
            currentY += resultParams.rowSpacing;
            if (showLetters) {
               currentY += resultParams.letterRowSpacing;
            }
         }

         var element = drawCodes(paper, codes, currentX, currentY);
         set.push(element);

         if(showLetters && iGroup < userResult.decrypted.length) {
            var text = userResult.decrypted[iGroup];
            var error = true;
            if(iGroup < data[level].word.length && data[level].word[iGroup] === text) {
               error = false;
            }
            element = drawBracketWithText(paper, currentX, currentY, currentWidth, text, error, true);
            set.push(element);
         }

         // Bracket for suffix.
         if(showLetters && iGroup === userResult.decrypted.length) {
            var bracketWidth = getCodesWidth(suffix.substring(0, suffixBracketCodes));
            var rightEdge = false;
            if(suffix.length <= suffixBracketCodes) {
               rightEdge = true;
            }
            element = drawBracketWithText(paper, currentX, currentY, bracketWidth, "?", true, rightEdge);
            set.push(element);
         }

         currentX += currentWidth;
         if(data[level].useSpaces) {
            currentX += resultParams.letterSpacing;
         }
         else {
            currentX += codeParams.codesSpacing;
         }
      }
      
      currentY += resultParams.rowSpacing / 2;
      if (showLetters) {
         currentY += resultParams.letterRowSpacing + resultParams.rowSpacing / 2;
      }
      paper.setSize(paper.width, currentY);
      return set;
   }

   function drawBracketWithText(paper, leftX, centerY, width, text, error, rightEdge) {
      var rightEdgeHeight = 0;
      if(rightEdge) {
         rightEdgeHeight = resultParams.bracketHeight;
      }
      paper.setStart();
      var bracket = paper.path([
         "M", leftX - resultParams.bracketXMargin, centerY,
         "v", resultParams.bracketHeight,
         "h", width + 2 * resultParams.bracketXMargin,
         "v", - rightEdgeHeight
      ]).attr(resultParams.bracketAttr);
      if(error) {
         bracket.attr(resultParams.bracketErrorAttr);
      }

      var textX = leftX + width / 2;
      var textY = centerY + resultParams.bracketTextY;
      if(error) {
         paper.rect(
            textX - resultParams.bracketRectErrorAttr.width / 2,
            textY - resultParams.bracketRectErrorAttr.height / 2
         ).attr(resultParams.bracketRectErrorAttr);
      }
      paper.text(textX, textY, text).attr(resultParams.bracketTextAttr);
      return paper.setFinish();
   }

   /* Returns an object with the fields:
    * cipherContinuous: a continuous string of codes, representing the encrypted word.
    * decrypted: a string with the letters decrypted from the continuous cipher, when taking a greedy approach.
    * cipherGroups: an array of codes corresponding to the decrypted letters.
    * suffix: string with unused trailing codes (possibly empty).
    */
   function getUserResult() {
      var codesToLetter = {};
      var letterToCodes = {};
      for(var index = 0; index < data[level].codes.length; index++) {
         var codeIndex = answer.codes[index];
         var codes = data[level].codes[codeIndex];
         var letterIndex = answer.letters[index];
         var letter = data[level].letters[letterIndex];
         codesToLetter[codes] = letter;
         letterToCodes[letter] = codes;
      }
      var cipherContinuous = "";
      for(var iLetter = 0; iLetter < data[level].word.length; iLetter++) {
         cipherContinuous += letterToCodes[data[level].word[iLetter]];
      }

      var cipherGroups = [];

      if(data[level].useSpaces) {
         // With spaces, the only possible decryption is the correct one.
         cipherGroups = Beav.Array.init(data[level].word.length, function(index) {
            return letterToCodes[data[level].word[index]];
         });
         return {
            cipherContinuous: cipherContinuous,
            cipherGroups: cipherGroups,
            decrypted: data[level].word,
            suffix: ""
         };
      }

      var decrypted = "";
      var accumulatingCodes = "";
      for(var iCode = 0; iCode < cipherContinuous.length; iCode++) {
         accumulatingCodes += cipherContinuous[iCode];

         // Decrypt letter as soon as possible.
         var currentLetter = codesToLetter[accumulatingCodes];
         if(currentLetter) {
            decrypted += currentLetter;
            cipherGroups.push(accumulatingCodes);
            accumulatingCodes = "";
         }
      }
      return {
         cipherContinuous: cipherContinuous,
         decrypted: decrypted,
         cipherGroups: cipherGroups,
         suffix: accumulatingCodes
      };
   }

   function getResultAndMessage() {
      var userResult = getUserResult();
      if(userResult.suffix !== "") {
         return {
            successRate: 0,
            message: taskStrings.badSuffix
         };
      }
      if(userResult.decrypted !== data[level].word) {
         return {
            successRate: 0,
            message: taskStrings.wrong
         };
      }
      if(userResult.cipherContinuous.length <= data[level].optimal) {
         return {
            successRate: 1,
            message: taskStrings.success
         };
      }
      return {
         successRate: Math.max(0, 1 - (userResult.cipherContinuous.length - data[level].optimal) / 4),
         message: taskStrings.suboptimal
      };
   }

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
