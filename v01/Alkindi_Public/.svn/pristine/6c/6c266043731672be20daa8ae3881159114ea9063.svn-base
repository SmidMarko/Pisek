function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
          words: [["DECHIFFRER", "ALICE", "SECRET"]],
         // Each cipher element will be in a separate row.
          cipherRows: ["FDTS FZDJS F TSJQDKKGSG ZS OSJGSW"]
      },
      medium: {
          words: [["UNE", "PAR", "PROGRAMME", "LE", "SCIENTIFIQUE"]],
         // Each cipher element will be in a separate row.
          cipherRows: ["ZTDKTLGTKDKAYKXLLTGNEAKLXMGICTXTMT", "TVKGMDXKCNTQVGTNMGEGICTXNYZXGQT"]
      },
      hard: {
          words: [["MOTS", "PLUS", "TEXTE", "DE", "MAIS", "EFFORT", "ON", "AVEC"]],
         // Each cipher element will be in a separate row.
          cipherRows: ["WPRNJSMRYMRNEOHEURDROEMUNEJXMU", "NRLWDRPIRSMHLJUDITTINILROWIU", "WPRNJSRTTEXMESHRJMMXEJPRX"]
      }
   };

   var cipher;
   var cipherRows;
   var words;
   var numSpaces;
   var userPlainArray;
   var isDragging;
   var selectedWordIndex;
   var letterIndexToWordIndex;
   var dragShift;
   var display;
   
   var overlapChar = '#';

   subTask.loadLevel = function(curLevel) {
      level = curLevel;
      displayHelper.avatarType = "laptop";
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
      cipher = data[level].cipherRows.join("");
      cipherRows = data[level].cipherRows;
      numSpaces = 0;
      words = [];
      for(var wordRow = 0; wordRow < data[level].words.length; wordRow++) {
         words = words.concat(data[level].words[wordRow]);
      }
      for(var row = 0; row < cipherRows.length; row++) {
         for(var iChar = 0; iChar < cipherRows[row].length; iChar++) {
            if(cipherRows[row][iChar] == " ") {
               numSpaces++;
            }
         }
      }
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      if(answer) {
         fillFromAnswer();
      }
   };

   subTask.resetDisplay = function () {
      display = true;
      isMouseOverContainer = false;
      initHTML();
      hideAllDeleteButtons();
      initHandlers();
      selectWord(0);
      fillFromAnswer();
      refreshResults();
      dragShift = 0;
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      return {
         positions: Beav.Array.make(words.length, null)
      };
   };

   subTask.unloadLevel = function(callback) {
      $(document).unbind("mouseup.SUBSTITUTION_TASK");
      callback();
   };

   function initHandlers() {
      $(document).unbind("mouseup.SUBSTITUTION_TASK");
      $(document).bind("mouseup.SUBSTITUTION_TASK", onMouseEvent);
      $("#mainContainer").unbind();
      $("#mainContainer").bind("mousedown", onMouseEvent);
      $("#mainContainer").bind("mousemove", onMouseEvent);

      $("#charContainer").unbind();
      $("#charContainer").bind("mouseleave", onMouseOutContainer);

      $(".deleteWord").unbind();
      $(".deleteWord").click(clickDelete);
   }

   function onMouseOutContainer() {
      if(isDragging) {
         actOnPosition(null);
      }
   }

   function initHTML() {
      // Word selection at the top.
      var iWord;
      var wordCount = 0;
      var wordsHTML = "";
      for(var wordRow = 0; wordRow < data[level].words.length; wordRow++) {
         wordsHTML += "<table><tr>";
         for(iWord = 0; iWord < data[level].words[wordRow].length; iWord++) {
            wordsHTML += "<td><span class=\"word mouse\" id=\"word_" + (wordCount + iWord) + "\" unselectable=\"on\">" + data[level].words[wordRow][iWord] + "</span></td>";
         }
         wordsHTML += "</tr><tr>";
         for(iWord = 0; iWord < data[level].words[wordRow].length; iWord++) {
            wordsHTML += "<td><span class=\"deleteWord\" id=\"deleteWord_" + (wordCount + iWord) + "\" unselectable=\"on\">" + taskStrings.deleteWord + "</span></td>";
         }
         wordsHTML += "</tr><tr><td height=\"5px\"></td></tr></table>";
         wordCount += data[level].words[wordRow].length;
      }
      wordsHTML += "";
      $("#wordsContainer").html(wordsHTML);

      // Cipher/plaintext.
      var charsHTML = "";
      var letterIndex = 0;
      for(var row = 0; row < cipherRows.length; row++) {
         var cipherRowHTML = "<div class=\"cipherContainer\" unselectable=\"on\">";
         var plainRowHTML = "<div class=\"plainContainer\" unselectable=\"on\">";

         for(var iChar = 0; iChar < cipherRows[row].length; iChar++) {
            cipherRowHTML += "<span id=\"cipher_" + letterIndex + "\" class=\"letter cipher mouse\" unselectable=\"on\">" + cipher[letterIndex] + "</span>";
            plainRowHTML += "<span id=\"plain_" + letterIndex + "\" class=\"letter plain mouse\" unselectable=\"on\">&nbsp;</span>";
            letterIndex++;
         }
         cipherRowHTML += "</div>";
         plainRowHTML += "</div>";
         charsHTML += cipherRowHTML;
         charsHTML += plainRowHTML;
      }
      $("#charContainer").html(charsHTML);
   }

   function fillFromAnswer() {
      for(var iWord = 0; iWord < words.length; iWord++) {
         addWord(iWord, answer.positions[iWord]);
      }
      refreshPlainLetters();
   }

   function onMouseEvent(event) {
      // Do not proceed when mouse moves and not dragging. 
      if(!isDragging && event.type == "mousemove") {
         return;
      }

      // Mouse up means cancel dragging.
      if(event.type == "mouseup") {
         isDragging = false;
         dragShift = 0;
         return;
      }

      // Do not proceed if this element isn't relevant.
      var element = $(event.target);
      if(!element.hasClass("mouse")) {
         return;
      }

      var indexFromID = idToIndex(element.attr("id"));

      if(event.type == "mousedown") {
         isDragging = true;
         // Select a word from the top.
         if(element.hasClass("word")) {
            selectWord(indexFromID);
            return;
         }
         // Element is a letter.
         var wordIndex = letterIndexToWordIndex[indexFromID];
         dragShift = 0;
         if(wordIndex !== null && wordIndex !== undefined) {
            selectWord(wordIndex);
            dragShift = indexFromID - answer.positions[wordIndex];
         }
         // Perform clicking action on the current letter index.
         actOnPosition(indexFromID - dragShift);
         return;
      }
      
      // If the mouse moves over a letter, perform same clicking action.
      if(element.hasClass("letter")) {
         actOnPosition(indexFromID - dragShift);
      } 
   }

   function actOnPosition(position) {
      if(answer.positions[selectedWordIndex] === position) {
         return;
      }
      if(position === null) {
         removeWord();
         refreshPlainLetters();
         highlightSelectedWord();
      }
      else if(isPositionValid(selectedWordIndex, position)) {
         removeWord();
         addWord(selectedWordIndex, position);
         refreshPlainLetters();
         highlightSelectedWord();
      }
      refreshResults();
   }

   function removeWord(iWord) {
      if(iWord === null || iWord === undefined) {
         iWord = selectedWordIndex;
      }
      answer.positions[iWord] = null;
      if(display) {
         refreshDeleteButton(iWord, false);
      }
   }

   function refreshPlainLetters() {
      userPlainArray = Beav.Array.make(cipher.length, null);
      letterIndexToWordIndex = Beav.Array.make(cipher.length, null);
      for(var iWord = 0; iWord < words.length; iWord++) {
         var word = words[iWord];
         var position = answer.positions[iWord];
         if(position === null) {
            continue;
         }
         for(var iChar = 0; iChar < word.length; iChar++) {
            var currentIndex = iChar + position;
            letterIndexToWordIndex[currentIndex] = iWord;
            if(userPlainArray[currentIndex] !== null) {
               userPlainArray[currentIndex] = overlapChar;
            }
            else {
               userPlainArray[currentIndex] = word[iChar];
            }
            if(display) {
               updatePlainCharDisplay(currentIndex, userPlainArray[currentIndex]);
            }
         }
      }
   }

   function updatePlainCharDisplay(index, string, isDeduced) {
      var internalValue = string;
      if(!string || string === " ") {
         string = "&nbsp;";
         internalValue = null;
      }
      var element = $("#plain_" + index);
      element.html(string);
      element.removeClass("letterFromWord");
      element.removeClass("deducedLetter");
      if(internalValue) {
         if(isDeduced) {
            element.addClass("deducedLetter");
         }
         else {
            element.addClass("letterFromWord");
         }
      }
   }

   function addWord(iWord, position) {
      if(!isPositionValid(iWord, position)) {
         return;
      }
      answer.positions[iWord] = position;
      if(display) {
         refreshDeleteButton(iWord, true);
      }
   }

   function isPositionValid(iWord, position) {
      return position !== null && position !== undefined && position + words[iWord].length >= 0 && position < cipher.length;
   }

   function idToIndex(string) {
      return parseInt(string.split("_")[1]);
   }

   function selectWord(index) {
      selectedWordIndex = index;
      $(".word").removeClass("selectedWord");
      $("#word_" + index).addClass("selectedWord");
      highlightSelectedWord();
   }

   function refreshDeleteButton(iWord, show) {
      var element = $("#deleteWord_" + iWord);
      if(show) {
         element.css("visibility", "visible");
      }
      else {
         element.css("visibility", "hidden");
      }
   }

   function hideAllDeleteButtons() {
      $(".deleteWord").css("visibility", "hidden");
   }

   function clickDelete(event) {
      removeWord(idToIndex(event.target.id));
      refreshPlainLetters();
      highlightSelectedWord();
      refreshResults();
   }

   function highlightSelectedWord() {
      $(".plain").removeClass("selectedWordLetters");
      var position = answer.positions[selectedWordIndex];
      if(position === null) {
         return;
      }
      for(var iChar = 0; iChar < words[selectedWordIndex].length; iChar++) {
         $("#plain_" + (iChar + position)).addClass("selectedWordLetters");
      }
   }

   /*
    * Return an object:
    * - errorIndices: a list of contradiction indices.
    * - deducedLetters: a mapping of indices to letters, that could be deduced from existing ones.
    * - numDecrypted: the number of characters the user has decrypted, including deduced ones, not including errors.
    */
   function getUserDecryption() {
      // Inverse means a mapping from the cipher letters to the user's letters.
      var key = {};
      var inverseKey = {};

      // Contains plain letters that were mapped to two different cipher letters, or to a space.
      var plainErrorsObject = {};

      // Contains cipher letters that were mapped to two different plain letters.
      var cipherErrorsObject = {};

      // Calculate the user's key and check for errors.
      var iChar;
      var cipherChar;
      var userChar;
      for(iChar = 0; iChar < cipher.length; iChar++) {
         cipherChar = cipher[iChar];
         userChar = userPlainArray[iChar];

         // Not mapping the cipher to anything - not an error.
         if(userChar === null) {
            continue;
         }

         // User mapped cipher space to a plain letter - plain error.
         if(cipherChar === " ") {
            plainErrorsObject[userChar] = true;
         }

         // User previously mapped this plain letter to a different cipher letter - plain error.
         if(key[userChar] && key[userChar] !== cipherChar) {
            plainErrorsObject[userChar] = true;
         }
         key[userChar] = cipherChar;

         // User previously mapped this cipher letter to a different plain letter - cipher error.
         if(inverseKey[cipherChar] && inverseKey[cipherChar] !== userChar) {
            cipherErrorsObject[cipherChar] = true;
         }
         inverseKey[cipherChar] = userChar;
      }

      // Errors.
      var errorIndices = [];
      for(iChar = 0; iChar < cipher.length; iChar++) {
         userChar = userPlainArray[iChar];
         cipherChar = cipher[iChar];
         // If the cipher or plain text contain an error, add the index. Ignore unmapped cipher.
         if(userChar === null) {
            continue;
         }
         if(plainErrorsObject[userChar] || cipherErrorsObject[cipherChar]) {
            errorIndices.push(iChar);
         }
      }

      // Deduced letters.
      var deducedLetters = {};
      for(iChar = 0; iChar < cipher.length; iChar++) {
         userChar = userPlainArray[iChar];
         cipherChar = cipher[iChar];
         // If the letter can be deduced from the key, add it. Ignore mapped cipher.
         if(userChar !== null) {
            continue;
         }
         var deducedPlainChar = inverseKey[cipherChar];
         // Ignore cases of an error in the cipher or plain.
         if(!deducedPlainChar || plainErrorsObject[deducedPlainChar] || cipherErrorsObject[cipherChar]) {
            continue;
         }
         deducedLetters[iChar] = deducedPlainChar;
      }

      // Count decrypted letters.
      var numDecrypted = 0;
      for(iChar = 0; iChar < cipher.length; iChar++) {
         userChar = userPlainArray[iChar];
         cipherChar = cipher[iChar];
         // If the user mapped this cipher character and there are no errors, or if it could be deduced - count it.
         if(deducedLetters[iChar] || (userChar && !plainErrorsObject[userChar] && !cipherErrorsObject[cipherChar])) {
            numDecrypted++;
         }
      }
      return {
         errorIndices: errorIndices,
         deducedLetters: deducedLetters,
         numDecrypted: numDecrypted
      };
   }

   function refreshResults() {
      var userDecryption = getUserDecryption();

      // Show errors.
      $(".letter").removeClass("letterError");
      var errors = userDecryption.errorIndices;
      for(var iError = 0; iError < errors.length; iError++) {
         var errorIndex = errors[iError];
         $("#plain_" + errorIndex).addClass("letterError");
         $("#cipher_" + errorIndex).addClass("letterError");
      }

      // Show deduced letters.
      for(var iChar = 0; iChar < cipher.length; iChar++) {
         var userChar = userPlainArray[iChar];
         if(userChar !== null) {
            continue;
         }
         // Note this takes care of both cases (deduced letter exists, or not).
         var letter = userDecryption.deducedLetters[iChar];
         updatePlainCharDisplay(iChar, letter, true);
      }

      // Show number of decrypted letters
      if (userDecryption.numDecrypted == cipher.length - numSpaces) {
         $("#allDecyrpted").show();
      } else {
         $("#allDecyrpted").hide();
      }
   }

   function getResultAndMessage() {
      // Check bounds.
      for(var iWord = 0; iWord < words.length; iWord++) {
         var wordLength = words[iWord].length;
         var position = answer.positions[iWord];
         if(position < 0) {
            return {
               successRate: 0,
               message: taskStrings.outOfBoundsBeginning
            };
         }
         if(position > cipher.length - wordLength) {
            return {
               successRate: 0,
               message: taskStrings.outOfBoundsEnd
            };
         }
      }
      // Check overlap.
      for(var iChar = 0; iChar < cipher.length; iChar++) {
         if(userPlainArray[iChar] == overlapChar) {
            return {
               successRate: 0,
               message: taskStrings.overlap
            };
         }
      }
      var userDecryption = getUserDecryption();
      if(userDecryption.errorIndices.length > 0) {
         return {
            successRate: 0,
            message: taskStrings.error
         };
      }
      if(userDecryption.numDecrypted < cipher.length - numSpaces) {
         return {
            successRate: 0,
            message: taskStrings.incomplete
         };
      }
      return {
         successRate: 1,
         message: taskStrings.success
      };
   }

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
