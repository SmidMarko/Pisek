function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         passwordLength: 6,
         prefixCharIsDigit: [1, 1, 1],
          prefixes: [
	      ["1", "4", "8"],
	      ["2", "5", "4"],
	      ["8", "4", "3"],
	      ["3", "1", "5"],
	      ["7", "2", "1"],
	      ["6", "0", "2"]
	  ],
         rules: [rule1],
         vaultScale: 1.3,
         handleScale: 1.1,
         duckScale: 1,
         handlePos: {xRatio: 0.15, yRatio: 0.52},
         duckPos: [
            {xRatio: 0.35, yRatio: 0.63}
         ],
         keysPos: {xRatio: 0.5, yRatio: 0.27},
         keysType: "digits"
      },
      medium: {
         passwordLength: 6,
         prefixCharIsDigit: [0, 1, 0],
          prefixes: [
	      ["R", "3", "Y"],
	      ["F", "5", "D"],
	      ["J", "7", "V"],
	      ["M", "2", "E"],
	      ["C", "1", "T"],
	      ["L", "8", "K"]
	  ],
         rules: [rule3],
         vaultScale: 2,
         handleScale: 2,
         duckScale: 1.3,
         handlePos: {xRatio: 0.15, yRatio: 0.6},
         duckPos: [
            {xRatio: 0.45, yRatio: 0.65},
            {xRatio: 0.2, yRatio: 0.65}
         ],
         keysPos: {xRatio: 0.1, yRatio: 0.23},
         keysType: "full"
      },
      hard: {
         passwordLength: 6,
         prefixCharIsDigit: [0, 1, 0],
          prefixes: [
	      ["F", "5", "K"],
	      ["J", "1", "H"],
	      ["M", "2", "E"],
	      ["C", "4", "J"],
	      ["L", "6", "D"],
	      ["R", "3", "B"]
	  ],
         rules: [rule4],
         vaultScale: 2,
         handleScale: 2,
         duckScale: 1.3,
         handlePos: {xRatio: 0.15, yRatio: 0.6},
         duckPos: [
            {xRatio: 0.3, yRatio: 0.60},
            {xRatio: 0.55, yRatio: 0.60},
            {xRatio: 0.45, yRatio: 0.65},
            {xRatio: 0.2, yRatio: 0.65},
            {xRatio: 0.2, yRatio: 0.65},
            {xRatio: 0.2, yRatio: 0.65},
            {xRatio: 0.2, yRatio: 0.65},
            {xRatio: 0.2, yRatio: 0.65},
            {xRatio: 0.2, yRatio: 0.65},
            {xRatio: 0.2, yRatio: 0.65},
            {xRatio: 0.2, yRatio: 0.65}
         ],
         keysPos: {xRatio: 0.1, yRatio: 0.23},
         keysType: "full"
      }
   };

   var paper;
   var paperWidth;
   var paperHeight;
   var keyboards;
   var vaultHandle;
   var simulation;

   var randomGenerator;
   var generatedPasswords;
   var prefix;
   var rule;
   
   var defaultVaultWidth = 290;
   var defaultVaultHeight = 270;
   var rotationAnimTime = 200;
   var openAnimTime = 1000;

   var passwordLength;
   var maxLastGenerated = 10;
   var generationLimit = 1000;

   var asciiZero = "0".charCodeAt(0);
   var asciiA = "A".charCodeAt(0);
   var alphabetSize = 26;
   var digitsSize = 10;

   var keysTypes = {
      digits: {
         width: 105,
         height: 160
      },
      full: {
         width: 440,
         height: 150
      }
   };
   
   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
      displayHelper.hideValidateButton = true;
      level = curLevel;
      randomGenerator = new RandomGenerator(subTask.taskParams.randomSeed);
      passwordLength = data[level].passwordLength;
      prefixCharIsDigit = data[level].prefixCharIsDigit;
      displayHelper.hideRestartButton = true;
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      if(!answer) {
         return;
      }
      randomGenerator.reset(answer.seed);
      prefix = data[level].prefixes[randomGenerator.nextInt(0, data[level].prefixes.length - 1)];
      rule = data[level].rules[randomGenerator.nextInt(0, data[level].rules.length - 1)];

      // Make sure answer.numGenerated is a valid integer in the expected range.
      answer.numGenerated = Math.max(0, Math.min(generationLimit, answer.numGenerated));
      if(!answer.numGenerated) {
         answer.numGenerated = 0;
      }

      // Make sure input is a valid size.
      if(answer.input.length > passwordLength - prefix.length) {
         answer.input.splice(passwordLength - prefix.length);
      }
   };

   subTask.resetDisplay = function() {
      $("#keysDiv").show();
      initPaper();
      initHandlers();

      $("#passwordPrefix").text(prefix.join(""));
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      return {
         seed: randomGenerator.nextInt(0, 1000000),
         input: [],
         numGenerated: 1
      };
   };

   subTask.unloadLevel = function(callback) {
      removeKeyboards();
      $("#generatePassword").off("click");
      $("#execute").off("click");
      callback();
   };

   function initHandlers() {
      $("#generatePassword").off("click");
      $("#generatePassword").on("click", clickGenerate);
      $("#execute").off("click");
      $("#execute").on("click", clickVault);
   }

   function initPaper() {
      // Paper.
      var vaultScale = data[level].vaultScale;
      paperWidth = defaultVaultWidth * vaultScale;
      paperHeight = defaultVaultHeight * vaultScale;
      paper = subTask.raphaelFactory.create("anim", "anim", paperWidth, paperHeight);
      $("#mainDiv").css({
         width: paperWidth,
         height: paperHeight
      });
      
      // Vault.
      drawClosedVault(0, 0, vaultScale);
      vaultHandle = drawHandle(paperWidth * data[level].handlePos.xRatio, paperHeight * data[level].handlePos.yRatio, data[level].handleScale);
      vaultHandle.click(clickVault);
      
      // Keyboard.
      initKeys();

      // Password generation.
      // Note that answer.numGenerated can be trusted after reloadAnswer.
      generatedPasswords = [];
      for(var index = 0; index < answer.numGenerated; index++) {
         doGenerate();
      }
      refreshGenerated();

      // User password.
      refreshUserPassword();
   }

   function initKeys() {
      var keysType = data[level].keysType;
      var params = keysTypes[keysType];
      $("#keysDiv").css({
         left: paperWidth * data[level].keysPos.xRatio,
         top: paperHeight * data[level].keysPos.yRatio,
         width: params.width + "px",
         height: params.height + "px"
      });

      if(keysType === "digits") {
         createDigitsKeyboard();
      }
      else {
         createFullKeyboard();
      }
   }

   function createDigitsKeyboard() {
      var keys = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, "backspace"]];
      var keyboard = createGenericKeyboard(keys, $("#keyboardDigitsOnly"));
      keyboards = [keyboard];
   }

   function createFullKeyboard() {
      keyboards = [createFullKeyboard1(), createFullKeyboard2()];
   }

   function createFullKeyboard1() {
      var keys = [
         ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
         ["J", "K", "L", "M", "N", "O", "P", "Q", "R"],
         ["S", "T", "U", "V", "W", "X", "Y", "Z"],
         ["backspace"]
      ];
      return createGenericKeyboard(keys, $("#fullKeyboard1"));
   }

   function createFullKeyboard2() {
      var keys = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
      return createGenericKeyboard(keys, $("#fullKeyboard2"));
   }

   // Receives a two dimensional array of keys, where each key is a digit, letter,
   // or the string "backspace". Creates and returns a Keyboard object in the given element.
   function createGenericKeyboard(keys, element) {
      var keyboard = new Keyboard(handleKey);
      var rows = [];
      for(var iRow = 0; iRow < keys.length; iRow++) {
         var row = [];
         for(var iCol = 0; iCol < keys[iRow].length; iCol++) {
            var key = keys[iRow][iCol];
            var keyCode;
            var buttonText;
            if(key === "backspace") {
               keyCode = Keyboard.BACKSPACE;
               buttonText = taskStrings.backspace;
            }
            else {
               keyCode = String(key).charCodeAt(0);
               buttonText = key;
            }
            row.push({keyCode: keyCode, buttonText: buttonText});
         }
         rows.push(row);
      }

      keyboard.addMap(element, rows);
      return keyboard;
   }
   
   function handleKey(keyCode) {
      if(keyCode === Keyboard.BACKSPACE) {
         if(answer.input.length > 0) {
            answer.input.pop();
         }
      }
      else {
         if(answer.input.length < passwordLength - prefix.length) {
            answer.input.push(String.fromCharCode(keyCode));
         }
      }
      refreshUserPassword();
   }

   function clickGenerate() {
      answer.numGenerated++;
      doGenerate();
   }

   function doGenerate() {
      generatedPasswords.unshift(generatePassword());
      while(generatedPasswords.length > maxLastGenerated) {
         generatedPasswords.pop();
      }
      refreshGenerated();
   }

   function refreshGenerated() {
      var oneGeneratedHTML = "&nbsp;";
      var allGeneratedHTML = "";
      if(generatedPasswords.length > 0) {
         oneGeneratedHTML = generatedPasswords[0].join("");
      }

      for(var index = 0; index < maxLastGenerated; index++) {
         var password = ["&nbsp;"];
         if(index < generatedPasswords.length) {
            password = generatedPasswords[index];
         }
         allGeneratedHTML += "<span class=\"password\">" + password.join("") + "</span>";
         if(index < maxLastGenerated - 1) {
            allGeneratedHTML += "<br>";
         }
      }

      $("#generatedPassword").html(oneGeneratedHTML);
      $("#lastGenerated").html(allGeneratedHTML);
   }

   function generatePassword() {
      var randomPrefix = generateRandomArray();
      return rule(randomPrefix);
   }

   function refreshUserPassword() {
      $("#userPassword").text(getUserPassword().join(""));
      $("#feedback").html("");
   }

   function getUserPassword() {
      var result = prefix.concat(answer.input);
      while(result.length < passwordLength) {
         result.push("_");
      }
      return result;
   }

   function openVault() {
      $("#keysDiv").hide();
      removeKeyboards();
      drawOpenVault(0, 0, data[level].vaultScale);
      for(var index = 0; index < data[level].duckPos.length; index++) {
         drawDuck(data[level].duckPos[index].xRatio * paperWidth, data[level].duckPos[index].yRatio * paperHeight, data[level].duckScale);
      }
   }

   function drawHandle(xPos, yPos, scale) {
      scale *= 0.8;
      // Generated SVG.
      var path4372 = paper.ellipse(25.149864, 25.360287, 25.149864, 25.006966);
      path4372.attr({ fill: '#a5b9bf', "fill-opacity": '0.87264189', stroke: 'none', 'stroke-opacity': '1', "stroke-width": '0', "stroke-miterlimit": '1.00000012', "stroke-dasharray": 'none', "stroke-dashoffset": '0'});
      var path4374 = paper.ellipse(25.507109, 25.646078, 14.07535, 13.146521);
      path4374.attr({ id: 'path4374', fill: '#cedadd', "fill-opacity": '1', stroke: 'none', 'stroke-opacity': '1', "stroke-width": '0', "stroke-miterlimit": '1.00000012', "stroke-dasharray": 'none', "stroke-dashoffset": '0'});
      var rect4376 = paper.rect(19.576881, 19.215717, 104.88636, 14.003901);
      rect4376.attr({ id: 'rect4376', x: '19.576881', y: '19.215717', fill: '#cedadd', "fill-opacity": '1', stroke: 'none', 'stroke-opacity': '1', "stroke-width": '0', "stroke-miterlimit": '1.00000012', "stroke-dasharray": 'none', "stroke-dashoffset": '0'});

      // Rotation center point (determined manually).
      var rotationX = xPos + 25 * scale;
      var rotationY = yPos + 25 * scale;

      // Move to position.
      var set = paper.set();
      set.push(path4372, path4374, rect4376);
      var baseTrans = ["S", scale, scale, 0, 0, "T", xPos, yPos];
      set.transform(baseTrans);

      set.customRotate = function(angle) {
         set.transform(baseTrans.concat(["R", angle, rotationX, rotationY]));
      };

      return set;
   }

   function drawClosedVault(xPos, yPos, scale) {
      scale *= 5;
      paper.setStart();
      var path6 = paper.path("M 29,6 1,6 C 0.478,6 0,6.506 0,7.027 L 0,51 c 0,0.521 0.478,1 1,1 l 28,0 z").attr({id: 'path6',parent: 'g4',fill: '#b6c8cc','stroke-width': '0','stroke-opacity': '1'});
      var path8 = paper.path("m 29,6 0,4 0,38 0,4 28.057,0.083 c 0.520998,0.0015 0.944,-0.422 0.944,-0.944 l 0,-44.112 c 0,-0.521 -0.422,-0.944 -0.944,-0.944 z").attr({id: 'path8',parent: 'g4',fill: '#b6c8cc','stroke-width': '0','stroke-opacity': '1'});
      var path10 = paper.path("m 5,10 0,38 48,0 0,-38 z").attr({id: 'path10',parent: 'g4',fill: '#e3e9ec','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path10');
      var path12 = paper.path("m 52,16.083 3,0 c 0.553,0 1,-0.447 1,-1 0,-0.553 -0.447,-1 -1,-1 l -3,0 c -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 z").attr({id: 'path12',parent: 'g4',fill: '#a3b8be','stroke-width': '0','stroke-opacity': '1'});
      var path14 = paper.path("m 55,17.083 -3,0 c -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 l 3,0 c 0.553,0 1,-0.447 1,-1 0,-0.553 -0.447,-1 -1,-1 z").attr({id: 'path14',parent: 'g4',fill: '#a3b8be','stroke-width': '0','stroke-opacity': '1'});
      var path16 = paper.path("m 55,39.083 -3,0 c -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 l 3,0 c 0.553,0 1,-0.447 1,-1 0,-0.553 -0.447,-1 -1,-1 z").attr({id: 'path16',parent: 'g4',fill: '#a3b8be','stroke-width': '0','stroke-opacity': '1'});
      var path18 = paper.path("m 55,42.083 -3,0 c -0.553,0 -1,0.447 -1,1 0,0.553 0.447,1 1,1 l 3,0 c 0.553,0 1,-0.447 1,-1 0,-0.553 -0.447,-1 -1,-1 z").attr({id: 'path18',parent: 'g4',fill: '#a3b8be','stroke-width': '0','stroke-opacity': '1'});
      var set = paper.setFinish();
      set.transform(["S", scale, scale, 0, 0, "T", xPos, yPos - 1.1 * scale]);
   }

   function drawDuck(xPos, yPos, scale) {
      paper.setStart();
      var path54636 = paper.path("m 549.07865,702.25472 c -1.065,1.7875 -2.13,3.575 -3.195,5.3625 5.05947,-1.20893 10.58188,-0.98424 15.25641,-3.47395 2.82109,-1.9081 4.81397,-5.97614 8.69834,-5.54222 3.85435,1.62747 6.31031,5.51461 7.91764,9.23538 2.81644,7.31089 2.64091,15.60864 0.46494,23.0509 -2.85586,8.81022 -11.02115,15.30972 -20.12127,16.62491 -11.38011,1.86723 -23.57915,3.60189 -34.64323,-0.69933 -9.04582,-3.37037 -16.28812,-12.9284 -14.72209,-22.83711 0.8536,-5.6644 4.49553,-10.82532 9.71751,-13.25814 2.87135,-3.37093 -1.75513,-7.32358 -1.7152,-11.07886 -0.78031,-3.32625 -0.9957,-9.20701 3.89366,-8.94294 3.74235,0.2135 7.12483,2.12304 10.67078,3.15547 6.09711,2.42089 11.97644,5.35033 17.77751,8.40339 z").attr({id: 'path54636',parent: 'layer1',fill: '#ebd467',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54636');
      var path54640 = paper.path("m 549.08965,707.03747 c -0.0345,2.90823 -4.85035,6.29224 -6.48215,5.1141 1.15364,-1.58095 2.30727,-3.1619 3.4609,-4.74285 1.00708,-0.12375 2.01417,-0.2475 3.02125,-0.37125 z").attr({id: 'path54640',parent: 'layer1',fill: '#ecc57c',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54640');
      var path54644 = paper.path("m 512.41478,722.28897 c -0.74725,-1.53177 1.81092,-7.29634 -0.56428,-5.96087 -4.96795,7.05742 -4.16051,17.31965 1.71124,23.61668 1.72863,2.27485 5.71651,5.39129 7.2877,5.72527 -5.50584,-6.44254 -8.46288,-14.92866 -8.43466,-23.38108 z").attr({id: 'path54644',parent: 'layer1',fill: '#ecc57c',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54644');
      var path54648 = paper.path("m 568.93702,698.4486 c -0.57724,3.31934 3.96805,5.15262 4.27046,8.55601 5.0963,11.11591 4.23157,24.82411 -2.48546,35.08274 8.10037,-6.58162 10.21942,-18.00395 8.67489,-27.87347 -0.97839,-6.35728 -4.00235,-13.3565 -10.45989,-15.76528 z").attr({id: 'path54648',parent: 'layer1',fill: '#ecc57c',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54648');
      var path54652 = paper.path("m 550.33477,696.4076 c 0.143,9.18103 -9.28445,16.3011 -18.0608,15.43943 -8.92069,-0.1912 -17.43502,-8.75559 -15.61424,-17.91669 1.68574,-9.31527 12.43573,-15.036 21.29334,-12.42924 6.65697,1.70954 12.58345,7.73171 12.3817,14.9065 z").attr({id: 'path54652',parent: 'layer1',fill: '#ebd467',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54652');
      var path54656 = paper.path("m 550.33477,696.4076 c 0.53459,-2.88566 -2.23937,-8.39059 -3.18032,-8.57212 2.60932,5.72993 2.43124,12.66509 -0.53468,18.22712 2.33855,-2.63308 3.73583,-6.12122 3.715,-9.655 z").attr({id: 'path54656',parent: 'layer1',fill: '#ecc57c',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54656');
      var path54660 = paper.path("m 517.82015,696.4076 c -0.69133,-2.68826 2.02268,-8.01841 1.53049,-8.6504 -4.09344,5.25862 -3.7428,13.44849 0.83451,18.3054 -1.58227,-2.9529 -2.36788,-6.31069 -2.365,-9.655 z").attr({id: 'path54660',parent: 'layer1',fill: '#ecc57c',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54660');
      var path54664 = paper.path("m 518.5354,706.74697 c 5.29144,1.08677 2.36188,-5.6661 0.58859,-7.73409 -0.38017,-3.06908 -2.25155,-7.97671 -5.78785,-4.76025 -2.78524,0.41209 -9.39254,0.96586 -6.52771,5.17735 2.88499,3.62021 6.85638,7.14587 11.72697,7.31699 z").attr({id: 'path54664',parent: 'layer1',fill: '#d6543b',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54664');
      var path54668 = paper.path("m 528.89803,698.23622 c -0.3824,5.48848 9.46851,2.44175 5.94101,-1.92969 -1.59773,-2.48887 -6.20786,-1.10754 -5.94101,1.92969 z").attr({id: 'path54668',parent: 'layer1',fill: '#f4f4f4',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54668');
      var path54688 = paper.path("m 529.42777,698.4486 c 0.5785,5.4312 7.32386,-2.19989 1.7569,-2.05607 -0.99389,0.0987 -1.77183,1.07904 -1.7569,2.05607 z").attr({id: 'path54688',parent: 'layer1',fill: '#231f20',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54688');
      var path54692 = paper.path("m 531.52003,697.7601 c -1.86642,2.7923 -1.45759,-2.70216 0,0 z").attr({id: 'path54692',parent: 'layer1',fill: '#f4f4f4',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54692');
      var path54696 = paper.path("m 538.73315,744.49472 c -4.23036,-2.87366 -4.09175,-10.09452 0.53624,-12.52767 5.98033,-4.1929 13.80523,-3.47383 20.1763,-6.80071 3.09803,-1.92814 9.09012,-0.72691 7.72665,3.92421 -1.67942,4.71421 -6.64678,7.26675 -11.19822,8.50291 4.27444,-1.82708 9.27203,-4.27061 10.4609,-9.20864 -0.47683,-5.49147 -7.25634,-2.13584 -10.19517,-0.70314 -6.31405,2.083 -14.01079,1.66569 -18.80611,6.99193 -2.42814,2.90147 -1.31353,7.43932 1.29941,9.82111 z").attr({id: 'path54696',parent: 'layer1',fill: '#c8ac82',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54696');
      var path54700 = paper.path("m 566.02565,731.82747 c 1.67519,4.17703 -2.36554,7.97125 -6.09918,9.00953 -3.55531,0.47282 3.56406,-2.353 4.13277,-3.77791 1.32677,-1.386 2.04563,-3.31612 1.96641,-5.23162 z").attr({id: 'path54700',parent: 'layer1',fill: '#c8ac82',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54700');
      var path54704 = paper.path("m 564.6279,738.2081 c 1.01774,2.6936 -4.41407,6.60648 -5.03347,5.25097 1.98581,-1.40983 3.81523,-3.11974 5.03347,-5.25097 z").attr({id: 'path54704',parent: 'layer1',fill: '#c8ac82',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54704');
      var path54684 = paper.path("M 0,0 C 3.8357087,-0.54945034 1.820774,5.6819187 1.0887728,5.0656991 3.3336641,3.9700406 2.9638798,-0.41175601 0,0 Z").attr({id: 'path54684',"clip-path": 'url(#clipPath54674)',parent: 'layer1',fill: '#fefdf7',"fill-opacity": '1',"fill-rule": 'nonzero',stroke: 'none','stroke-width':'1','stroke-opacity':'1'}).transform("t-505.88564,-680.9626").data('id', 'path54684');

      var set = paper.setFinish();
      set.transform(["T", -505.88564,-680.9626, "t", xPos, yPos, "S", scale, scale, xPos, yPos]);
      return set;
   }

   function drawOpenVault(xPos, yPos, scale) {
      scale *= 0.5 * 1.135;
      paper.setStart();
      var path4 = paper.path("M 413.59288,43.999242 8.307057,44.72963 C 3.7135435,44.737908 0,48.451966 0,53.036687 L 0,441.2244 c 0,4.58472 3.7135361,8.30706 8.307057,8.30706 l 405.285823,-0.73919 z");
      path4.attr({id: 'path4',fill: '#b6c8cc','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path4');
      var path6 = paper.path("m 466.39197,43.999242 0,35.929782 0,333.663856 0,35.19939 35.19939,0 c 4.58473,0 8.79975,-4.20632 8.79985,-8.79985 l 0.009,-386.955733 c 1.1e-4,-4.584721 -4.21512,-9.037445 -8.80865,-9.037445 z");
      path6.attr({id: 'path6',fill: '#b6c8cc','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path6');
      var rect8 = paper.rect(413.59286, 8.7998486, 43.999241, 464.42453);
      rect8.attr({x: '413.59286',y: '8.7998486',id: 'rect8',fill: '#808080','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect8');
      var path10 = paper.path("m 457.59212,0 0,475.19182 8.79985,0 0,-475.19182 z");
      path10.attr({id: 'path10',fill: '#e3e9ec','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path10');
      var path12 = paper.path("M 105.59818,184.79682 35.199394,79.198636 l 0,334.394244 70.398786,-58.57399 z");
      path12.attr({id: 'path12',fill: '#535d6c','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path12');
      var path14 = paper.path("m 466.39197,132.72811 19.79966,0 c 3.64974,0 6.59989,-3.93353 6.59989,-8.79984 0,-4.86632 -2.95015,-8.79985 -6.59989,-8.79985 l -19.79966,0 z");
      path14.attr({id: 'path14',fill: '#a3b8be','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path14');
      var path16 = paper.path("m 486.19163,141.52796 -19.79966,0 0,17.5997 19.79966,0 c 3.64974,0 6.59989,-3.93353 6.59989,-8.79985 0,-4.86631 -2.95015,-8.79985 -6.59989,-8.79985 z");
      path16.attr({id: 'path16',fill: '#a3b8be','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path16');
      var path18 = paper.path("m 486.19163,335.12463 -19.79966,0 0,17.5997 19.79966,0 c 3.64974,0 6.59989,-3.93353 6.59989,-8.79985 0,-4.86632 -2.95015,-8.79985 -6.59989,-8.79985 z");
      path18.attr({id: 'path18',fill: '#a3b8be','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path18');
      var path20 = paper.path("m 486.19163,361.52418 -19.79966,0 0,17.59969 19.79966,0 c 3.64974,0 6.59989,-3.93353 6.59989,-8.79985 0,-4.86631 -2.95015,-8.79984 -6.59989,-8.79984 z");
      path20.attr({id: 'path20',fill: '#a3b8be','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path20');
      var circle24 = paper.ellipse(435.02328, 95.668198, 7.0774937, 6.3837671);
      circle24.attr({id: 'circle24',fill: '#333333','stroke-width': '0','stroke-opacity': '1'}).data('id', 'circle24');
      var circle26 = paper.ellipse(435.02328, 133.97081, 7.0774937, 6.3837671);
      circle26.attr({id: 'circle26',fill: '#333333','stroke-width': '0','stroke-opacity': '1'}).data('id', 'circle26');
      var circle28 = paper.ellipse(435.02328, 351.01889, 7.0774937, 6.3837671);
      circle28.attr({id: 'circle28',fill: '#333333','stroke-width': '0','stroke-opacity': '1'}).data('id', 'circle28');
      var circle30 = paper.ellipse(435.02328, 312.71628, 7.0774937, 6.3837671);
      circle30.attr({id: 'circle30',fill: '#333333','stroke-width': '0','stroke-opacity': '1'}).data('id', 'circle30');
      var circle32 = paper.ellipse(435.02328, 172.27341, 7.0774937, 6.3837671);
      circle32.attr({id: 'circle32',fill: '#333333','stroke-width': '0','stroke-opacity': '1'}).data('id', 'circle32');
      var circle3192 = paper.ellipse(435.02328, 389.32147, 7.0774937, 6.3837671);
      circle3192.attr({id: 'circle3192',fill: '#333333','stroke-width': '0','stroke-opacity': '1'}).data('id', 'circle3192');
      var path35 = paper.path("m 351.99394,334.39424 c -234.66263,111.46475 -117.33131,55.73237 0,0 z");
      path35.attr({id: 'path35',fill: '#b5c3c6','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path35');
      var rect37 = paper.rect(105.50902, 184.79681, 308.08386, 172.13521);
      rect37.attr({x: '105.50902',y: '184.79681',id: 'rect37',fill: '#373e48',"fill-opacity": '1','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect37');
      var path39 = paper.path("m 413.59288,79.198636 -378.393486,0 70.398786,105.598184 c 83.40232,0 236.06439,0 307.9947,0 z");
      path39.attr({id: 'path39',fill: '#000000','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path39');
      var path41 = paper.path("m 105.52575,354.76323 -70.326356,58.82965 c 112.784196,0.35463 281.070416,0.43119 378.393486,0 l 0,-58.81485 z");
      path41.attr({id: 'path41',fill: '#000000','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path41');
      var rect45 = paper.rect(466.39197, 249.47571, 8.7998486, 70.398788);
      rect45.attr({id: 'rect45',y: '249.47571',x: '466.39197',fill: '#a3b8be','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect45');
      var rect47 = paper.rect(475.19183, 271.03534, 17.599697, 28.159515);
      rect47.attr({id: 'rect47',y: '271.03534',x: '475.19183',fill: '#e3e9ec','stroke-width': '0','stroke-opacity': '1'}).data('id', 'rect47');

      var set = paper.setFinish();
      set.transform(["S", scale, scale, 0, 0, "T", xPos, yPos]);
      return set;
   }

   function showFeedback(string) {
      if(string === null || string === undefined || string === "") {
         string = "&nbsp;";
      }
      $("#feedback").html(string);
   }

   function clickVault() {
      if(simulation && simulation.isPlaying()) {
         return;
      }
      subTask.simulationFactory.destroyAll();
      simulation = subTask.simulationFactory.create("sim");
      var success = validateUser();
      if(success) {
         addRotationEntry(45);
         addOpenEntry();
         addSuccessEntry();
      }
      else {
         $("#feedback").html(taskStrings.error);
         addRotationEntry(10);
         addRotationEntry(0);
      }
      simulation.setAutoPlay(true);
      simulation.play();
   }

   function addRotationEntry(angle) {
      simulation.addStepWithEntry({
         name: "rotation",
         action: {
            onExec: rotateHandle,
            params: {
               angle: angle
            },
            duration: rotationAnimTime,
            useTimeout: true
         }
      });
   }

   function addOpenEntry() {
      simulation.addStepWithEntry({
         name: "rotation",
         action: {
            onExec: openVault,
            duration: openAnimTime,
            useTimeout: true
         }
      });
   }

   function rotateHandle(params, duration, callback) {
      vaultHandle.customRotate(params.angle);
   }

   function addSuccessEntry() {
      simulation.addStepWithEntry({
         name: "validate",
         action: {
            onExec: onSuccess,
            duration: 0,
            useTimeout: true
         }
      });
   }

   function onSuccess() {
      platform.validate("done");
   }

   function removeKeyboards() {
      if(!keyboards) {
         return;
      }
      for (var iKeyboard = 0; iKeyboard < keyboards.length; iKeyboard++) {
         keyboards[iKeyboard].remove();
      }
   }

   function generateRandomArray() {
      var result = [];
      var length = prefixCharIsDigit.length;
      for (var iChar = 0; iChar < length; iChar++) {
         if (prefixCharIsDigit[iChar]) {
            result.push(randomGenerator.nextInt(0, 9).toString());
         } else {
            var rank = randomGenerator.nextInt(0, alphabetSize - 1);
            result.push(String.fromCharCode(asciiA + rank));
         }
      }
      return result;
   }

   function rule1(prefix) {
      var result = prefix.slice(0);
      var perm = [1, 2, 0];
      for(var index = 0; index < prefix.length; index++) {
         result.push(prefix[perm[index]]);
      }
      return result;
   }

   function rule2(prefix) {
      var result = prefix.slice(0);
      for(var index = 0; index < prefix.length; index++) {
         result.push(String.fromCharCode(((prefix[index].charCodeAt(0) - asciiZero + 3 + digitsSize) % digitsSize) + asciiZero));
      }
      return result;
   }

   function rule3(prefix) {
      var result = prefix.slice(0);
      var r = prefix[0].charCodeAt(0) - asciiA + 1;
      result[4] = "" + r % 10;
      result[3] = "" + ((r - r % 10) / 10);
      var c = prefix[1].charCodeAt() - asciiZero;
      result [5] = "" + ((10 - c) % 10);
      return result;
   }

   function rule4(prefix) {
      var result = prefix.slice(0);
      result.push(String.fromCharCode((prefix[0].charCodeAt(0) - asciiA + prefix[1].charCodeAt(0) - asciiZero) % 26 + asciiA));
      var c = prefix[1].charCodeAt() - asciiZero;
      result.push(String.fromCharCode((3 * c) % 10 + asciiZero));
      result.push(String.fromCharCode((prefix[2].charCodeAt(0) - asciiA + 7) % 26 + asciiA));
      return result;
   }

   function validateUser() {
      var userPassword = getUserPassword();
      var correctPassword = rule(prefix);
      return Beav.Object.eq(userPassword, correctPassword);
   }

   function getResultAndMessage() {
      if(validateUser()) {
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
