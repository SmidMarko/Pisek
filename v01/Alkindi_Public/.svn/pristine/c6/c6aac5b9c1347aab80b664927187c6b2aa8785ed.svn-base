function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         sentences: [
            "otonon toho kororo.",        // A
            "tama ja satassa.",           // B
            "kotoho mono sonolo.",        // C
            "amana tama taaka.",          // D
            "kotoho lono otonon.",        // E
            "satassa brasta tana.",     // F
            "kororo joso sonolo.",        // G
            "tana ngamia amana.",        // H
                     ],
         types: [
            {visualType: 0, length: 4, answerHash: 3883367}, // ACEG
            {visualType: 1, length: 4, answerHash: 4227275} // BDFH
         ]
      },
      medium: {
         sentences: [
            "maziso ako akanaka anoita kuti.",           // A
            "gyonyoru szemeid megal a szerelem.",        // B
            "rudo runondi akanaka maziso ako akanaka.",  // C
            "szerelem szepsegei a gyonyoru megal.",      // E
            "ako maziso anodikanwa rudo akanaka kufa.",  // D
            "megal gyonyoru szemeid szeretsz engem.",    // F
            "itai kuti meso enyu akanaka rudo.",         // G
            "engem gyonyoru szep szerelem."              // H
                     ],
         types: [
            {visualType: 0, length: 4, answerHash: 3883367},
            {visualType: 1, length: 4, answerHash: 4227275}
         ]
      },
      //       "vachodne nadoba nadahera vasetiko otom.",          // A
      //       "leskely namutok lesatene staropy rokach.",         // B
      //       "mingalingu pachy vaganem vonam seladu jantaru.",   // C
      //       "sovat nasipava vepalom cemesto sivetle.",          // D
      //       "vizadobime nasizbu najocimie mingalingu koveta.",  // E
      //       "bohata staropy nasizbu halboke zirkadla.",         // F
      //       "kodusi tajanosti namutok seladu rodani famyk.",    // G
      //       "tamke vasetiko poradok akarusa pokol asmutok.",    // H
      //       "kanaly cemesto zacintu alata tamanoti.",           // I
      //       "pozaratu sanatieto kanaly spatieto nadoba."        // J
      hard: {
         sentences: [
	     "tama viisas ja onnellinen sade.",                      // A ja sade viisas
	     "te paraunei aute otere rata korero wo kotahi.",        // B korero kotahi wo
	     "sates sa tuvasti brestista tuona pazivana.",           // C pazivana sa
	     "kaukana jos pazivana kerron sa sinulle.",              // D pazivana sa
	     "sade on ja autioinen viisas surun.",                   // E ja sade viisas
	     "manatua nu imau tonu teuaki itauara.",                 // F
	     "ka korero wo ahau tehunga katoa earoha anaahau.",      // G korero katoa wo
	     "duista pazivana brestista sa ama syyta minua.",        // H pazivana sa
	     "engari  mea kotahi pahuatia wo ngamea katoa.",         // I kotahi katoa wo
	     "sa tajanosti namutok pazivana rodani famyk."	     // J pazivana sa
        ],
         types: [
            {visualType: 0, length: 5, answerHash: 5616645}, 
            {visualType: 1, length: 5, answerHash: 5199834}  
         ]
      }
   };

   var dragAndDrop;
   var dragContainer;
   var dragPlaces;
   var visualLocks;

   var paper;
   var paperWidth;
   var paperHeight;
   var totalSentences;
   var totalTypes;
   var typesY;
   var sentencesY;
   var disableSearch = false;

   var paperParams = {
      xPad: 2,
      yPad: 2,
      sentences: {
         width: 440,
         ySpacing: 8,
         yPad: 12,
         rightPad: 10,
         height: 22,
         textAttr: {
            "font-size": 14,
            "text-anchor": "start",
            "font-family": "courier new, ubuntu mono"
         },
         highlightRectAttr: {
            fill: "#FF8080",
            stroke: "none"
         },
         letterTextAttr: {
            "font-size": 14,
            "font-weight": "bold",
            "font-family": "Sans"
         },
         rectAttr: {
            "stroke-width": 1,
            fill: "#ffffe5"
         },
         letterLeftPad: 10,
         letterRightPad: 10,
         lineAttr: {
            "stroke-width": 1
         },
         lineRightPad: 5,
         chunkSpacing: 0,
         spaceWidth: 7.2,
         highlightHeight: 16
      },
      images: {
         width: 70,
         leftPad: 5,
         rightPad: 5
      },
      locks: {
         lockedImage: "lock.png",
         unlockedImage: "unlock.png",
         width: 25,
         height: 30,
         leftPad: 5
      },
      typeRectAttr: {
         stroke: "black",
         "stroke-width": 2
      }
   };

   var visualTypes = [
      {background: "#ffd7e3", image: "alien-rose.png", imageHeight: 70},
      // public domain licence 
      // https://openclipart.org/detail/218422/silly-alien-in-the-style-of-lemmling
      {background: "#e1f5a5", image: "alien-vert.png", imageHeight: 90}
      // public domain licence
      // https://openclipart.org/detail/16059/comic-alien
   ];

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
      level = curLevel;
      totalSentences = data[level].sentences.length;
      totalTypes = data[level].types.length;
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
      disableSearch = false;
      $("#search").val("");
      initPaper();
      initHandlers();
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var locks = Beav.Array.make(totalSentences, false);
      locks[0] = true;
      return {
         permutation: Beav.Array.init(totalSentences, function(num) {
            return num;
         }),
         locks: locks
      };
   };

   subTask.unloadLevel = function(callback) {
      $("#search").off("change input keyup");
      if(dragAndDrop) {
         dragAndDrop.disable();
         dragAndDrop = null;
      }
      callback();
   };

   function initHandlers() {
      $("#search").off("change input keyup");
      $("#search").on("change input keyup", onSearchChange);
   }

   function initPaper() {
      paperWidth = calculatePaperWidth();
      paperHeight = calculatePaperHeight();
      paper = subTask.raphaelFactory.create("anim", "anim", paperWidth, paperHeight);

      initTypes();
      initDragAndDrop();
      initLocks();
   }

   function calculatePaperWidth() {
      return 2 * paperParams.xPad + 
             calculateTypeWidth() +
             paperParams.locks.leftPad + 
             paperParams.locks.width;
   }

   function calculatePaperHeight() {
      var result = 2 * paperParams.yPad;
      for(var iType = 0; iType < totalTypes; iType++) {
         result += calculateTypeHeight(iType);
      }
      return result;
   }

   function calculateTypeWidth() {
      return paperParams.images.leftPad + 
             paperParams.images.width + 
             paperParams.images.rightPad + 
             paperParams.sentences.width + 
             paperParams.sentences.rightPad;
   }

   function calculateTypeHeight(iType) {
      var typeLength = data[level].types[iType].length;
      return 2 * paperParams.sentences.yPad +
             paperParams.sentences.height * typeLength +
             paperParams.sentences.ySpacing * (typeLength - 1);
   }

   function initTypes() {
      typesY = [];
      var typeWidth = calculateTypeWidth();
      var currentY = paperParams.yPad;
      for(var iType = 0; iType < totalTypes; iType++) {
         var typeHeight = calculateTypeHeight(iType);
         var visualType = visualTypes[data[level].types[iType].visualType];
         paper.rect(paperParams.xPad, currentY, typeWidth, typeHeight).attr({
            fill: visualType.background
         }).attr(paperParams.typeRectAttr);

         var imageWidth = paperParams.images.width;
         var imageHeight = visualType.imageHeight;
         var imageLeftX = paperParams.xPad + paperParams.images.leftPad;
         var imageCenterY = currentY + typeHeight / 2;
         paper.image(visualType.image, imageLeftX, imageCenterY - imageHeight / 2, imageWidth, imageHeight);

         typesY.push(currentY);
         currentY += typeHeight;
      }
   }

   function calculateSentenceX() {
      return paperParams.xPad + paperParams.images.leftPad + paperParams.images.width + paperParams.images.rightPad;
   }

   function calculateSentencesY() {
      var result = [];
      var index = 0;
      for(var iType = 0; iType < totalTypes; iType++) {
         var type = data[level].types[iType];
         var baseY = typesY[iType] + paperParams.sentences.yPad;
         for(var iSentence = 0; iSentence < type.length; iSentence++) {
            var yPos = baseY + iSentence * (paperParams.sentences.height + paperParams.sentences.ySpacing);
            result.push(yPos);
         }
      }
      return result;
   }

   function calculateDragPlaces() {
      var result = [];
      var leftX = calculateSentenceX();
      for(var iSentence = 0; iSentence < totalSentences; iSentence++) {
         var topY = sentencesY[iSentence];
         result.push([
            leftX + paperParams.sentences.width / 2,
            topY + paperParams.sentences.height / 2
         ]);
      }
      return result;
   }

   function initDragAndDrop() {
      dragAndDrop = DragAndDropSystem({
         paper: paper,
         actionIfDropped: actionIfDropped,
         actionIfEjected: actionIfEjected,
         canBeTaken: canBeTaken,
         drop: onDrop
      });

      sentencesY = calculateSentencesY();
      dragPlaces = calculateDragPlaces();

      dragContainer = dragAndDrop.addContainer({
         ident: "sentences",
         dropMode: "replace",
         cx: 0,
         cy: 0,
         widthPlace: paperParams.sentences.width,
         heightPlace: paperParams.sentences.height,
         nbPlaces: totalSentences,
         places: dragPlaces,
         placeBackgroundArray: []
      });

      initDragSentences();
   }

   function initDragSentences() {
      dragAndDrop.removeAllObjects("sentences");

      for(var iPerm = 0; iPerm < totalSentences; iPerm++) {
         var iSentence = answer.permutation[iPerm];
         dragAndDrop.insertObjects("sentences", iPerm, [
            {
               ident: iSentence,
               elements: [drawSentence(iSentence)]
            }
         ]);
      }
   }

   function getSentenceLetter(iSentence) {
      return String.fromCharCode("A".charCodeAt(0) + iSentence);
   }

   function drawSentence(iSentence) {
      paper.setStart();

      // Rectangle.
      var width = paperParams.sentences.width;
      var height = paperParams.sentences.height;
      paper.rect(- width / 2, - height / 2, width, height).attr(paperParams.sentences.rectAttr);

      // Letter.
      var letterX = - width / 2 + paperParams.sentences.letterLeftPad;
      paper.text(letterX, 0, getSentenceLetter(iSentence)).attr(paperParams.sentences.letterTextAttr);

      // Line.
      var lineX = letterX + paperParams.sentences.letterRightPad;
      paper.path([
         "M", lineX, - height / 2,
         "V", height / 2
      ]).attr(paperParams.sentences.lineAttr);

      // Text.
      var textX = lineX + paperParams.sentences.rightPad;
      drawTextChunks(iSentence, textX, 0);

      return paper.setFinish();
   }

   function drawTextChunks(iSentence, startX, startY) {
      var occurrences = getSearchOccurrences(iSentence);
      var sentence = data[level].sentences[iSentence];

      // A dummy element is created to get the text dimensions for highlighting.
      // Highlighting appears behind the text, so it must be done before.
      var dummyElement = paper.text(startX, startY, sentence).attr(paperParams.sentences.textAttr);
      var textWidth = dummyElement.getBBox().width;
      var charWidth = textWidth / sentence.length;
      var highlightWidth = $("#search").val().length * charWidth;
      dummyElement.remove();

      for(var iOccurrence = 0; iOccurrence < occurrences.length; iOccurrence++) {
         var iChar = occurrences[iOccurrence];
         var xPos = startX + iChar * charWidth;
         paper.rect(xPos, startY - paperParams.sentences.highlightHeight / 2, highlightWidth, paperParams.sentences.highlightHeight).attr(paperParams.sentences.highlightRectAttr);
      }

      paper.text(startX, startY, sentence).attr(paperParams.sentences.textAttr);
   }

   function getSearchOccurrences(iSentence) {
      var sentence = data[level].sentences[iSentence];
      var search = $("#search").val();

      if(search === "") {
         return [];
      }

      var result = [];
      for(var iChar = 0; iChar < sentence.length; iChar++) {
         if(sentence.slice(iChar, iChar + search.length) === search) {
            result.push(iChar);
         }
      }
      return result;
   }

   function actionIfDropped(srcCont, srcPos, dstCont, dstPos, dropType) {
      // Don't allow ejecting.
      if(!dstCont) {
         return false;
      }

      // Don't allow dropping on locked position.
      if(answer.locks[dstPos]) {
         return false;
      }

      return true;
   }

   function actionIfEjected(refElement, srcCont, srcPos) {
      // Re-insert an ejected element to a vacant position.
      var objects = dragAndDrop.getObjects("sentences");
      for (var iPos = 0; iPos < objects.length; iPos++) {
         if (objects[iPos] === null) {
            return DragAndDropSystem.action(srcCont, iPos, "insert");
         }
      }
      return null;
   }

   function canBeTaken(srcCont, srcPos) {
      var can = !answer.locks[srcPos];
      if (can) {
         disableSearch = true;
      }
      return can;
   }

   function onDrop() {
      disableSearch = false;
      answer.permutation = $.map(dragAndDrop.getObjects("sentences"), function(value) {
         return parseInt(value);
      });
   }

   function initLocks() {
      var leftX = paperParams.xPad + calculateTypeWidth() + paperParams.locks.leftPad;
      visualLocks = Beav.Array.init(totalSentences, function(iSentence) {
         var topY = sentencesY[iSentence] + paperParams.sentences.height / 2 - paperParams.locks.height / 2;
         var initialState = answer.locks[iSentence];
         return new VisualLock(iSentence, leftX, topY, initialState);
      });
   }

   function VisualLock(iSentence, leftX, topY, initialState) {
      var self = this;
      var currentState = initialState;
      var lockedImage;
      var unlockedImage;
      var width = paperParams.locks.width;
      var height = paperParams.locks.height;

      this.init = function() {
         lockedImage = paper.image(paperParams.locks.lockedImage, leftX, topY, width, height).hide();
         unlockedImage = paper.image(paperParams.locks.unlockedImage, leftX, topY, width, height).hide();
         if (iSentence != 0) {
            lockedImage.click(this.toggle);
            unlockedImage.click(this.toggle);
         }
         this.update(currentState);
      };

      this.update = function() {
         answer.locks[iSentence] = currentState;
         if(currentState) {
            unlockedImage.hide();
            lockedImage.show();
         }
         else {
            lockedImage.hide();
            unlockedImage.show();
         }
      };

      this.toggle = function() {
         currentState = !currentState;
         self.update();
      };

      this.init();
   }

   function onSearchChange() {
      if (!disableSearch) {
         initDragSentences();
      }
   }

   // Hash a set, given as an array of distinct integers.
   // Different permutations of the array produce the same hash.
   function hashSet(array) {
      var number = 0;
      for(var iNum = 0; iNum < array.length; iNum++) {
         number += Math.pow(2, array[iNum]);
      }
      var value = 0;
      while(number > 0) {
         var digit = number % 10;
         value += ((digit + 85361) * 138937);
         value %= 7843097;
         number = Math.floor(number / 10);
      }
      return value;
   }

   function showFeedback(string) {
      if(string === null || string === undefined || string === "") {
         string = "&nbsp;";
      }
      $("#feedback").html(string);
   }

   function validateUserHashes() {
      // For each type, calculate the user's hash and compare to the target.
      var iSentence = 0;
      for(var iType = 0; iType < totalTypes; iType++) {
         var typeLength = data[level].types[iType].length;
         var userSubPerm = answer.permutation.slice(iSentence, iSentence + typeLength);
         var found = false;
         var expectedHash = hashSet(userSubPerm);
         //alert(expectedHash);
         for (var refType = 0; refType < totalTypes; refType++) {
            if(expectedHash == data[level].types[refType].answerHash) {
               found = true;
            }
         }
         if (!found) {
            return false;
         }
         iSentence += typeLength;
      }
      return true;
   }

   function getResultAndMessage() {
      if(validateUserHashes()) {
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
