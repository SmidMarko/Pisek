function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
	 maxWheel: 39,
         nBalls: 6,
         maxTry: 6
      },
      medium: {
         maxWheel: 59,
	 nBalls: 8,
         maxTry: 8
      },
      hard: {
         maxWheel: 59,
	 nBalls: 9,
         maxTry: 30
      }
   };
   var paper;
   var paperW = 770;
   var paperH = 450;
   var imgUrl = {};
   var vault = {};
   var rampLinEq = [ -0.1, 75 ];
   var nBalls;
   var ballRadius = 14;
   var balls = [];
   var ballsBottom = [];
   var firstBallX;
   var clickAreaAttr = {
      "opacity": 0,
      "fill": "white",
      "cursor": "pointer"
   };
   var trigger;
   var triggerAttr = {
      "fill": "rgb(230,230,230)",
      "font-weight": "bold",
      "font-size": 16,
      "cursor": "pointer"
   };
   var triggerShadowAttr = {
      "stroke": "black",
      "stroke-width": 1,
      "fill": "black",
      "font-weight": "bold",
      "font-size": 16,
      "cursor": "pointer"
   };
   var digit = [];
   var digitPos = [];
   var digitAttr = {
      "fill": "rgb(230,230,230)",
      "font-weight": "bold",
      "font-size": 16,
      "font-family": "monospace"
   };
   var wheelButtons = [];
   var wheelCenter = [];
   var wheelDragArea = [];
   var wheelRadius = 86;
   var ranGen;
   var prevAngle = [0, 0];
   var startAngle = 0;
   var startValue = 0;

   var minX = 84;
   var maxX = 667;
   var maxPos = 199;
   var openingPos = 125;
   var openingX = posToX(openingPos);

   var solWheelRange;
   var solPosRange;
   var nClick = 0;
   var nDrag = 0;
   
   var lockerCenter = [];
   var handleCenter = [];
   var handleShadowCenter = [];
   var prevDropX = 0;
   var maxWheel;

   var unlocked = false; // for update when reload

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      maxWheel = data[level].maxWheel;
      nBalls = data[level].nBalls;
      randGen = new RandomGenerator(subTask.taskParams.randomSeed+level.charCodeAt(0));
   };

   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      if(!answer) {
         return;
      }
      randGen.reset(answer.seed);
      reloadAttempts();
   };
   
   function reloadAttempts() {
      solWheelRange = [{min: 0, max: maxWheel}, {min: 0, max: maxWheel}];
      solPosRange = [{min: 0, max: maxPos}, {min: 0, max: maxPos}];
      for (var iAttempt = 0; iAttempt < answer.attempts.length; iAttempt++) {
         var attempt = answer.attempts[iAttempt];
         for (var dir = 0; dir < attempt.wheel.length; dir++) {
            getDropPosOneWheel(attempt.wheel[dir], dir);
         }
      }
   }

   subTask.resetDisplay = function() {
      initImgUrl();
      initPos();
      initVault();
      displayHelper.hideValidateButton = true;
      $("#attempts").html(answer.nTry);
      $("#nbMarbles").html(data[level].nBalls);
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = { "wheelVal": [0,0], "nTry": 0, "seed": randGen.nextInt(0,1000), attempts: [] };
      return defaultAnswer;
   };

   subTask.unloadLevel = function(callback) {
      for(var iWheel = 0; iWheel < 2; iWheel++){
         if(wheelDragArea[iWheel]) wheelDragArea[iWheel].undrag();
      }
      callback();
   };

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };

   function getResultAndMessage() {
      var dropPos = getDropPos();
      var successRate = 0;
      if (isUnlocked(dropPos)) {
         if (answer.nTry > data[level].maxTry) {
            if (level == "hard") {
               return {
                  successRate: 0.5,
                  message: taskStrings.partialScore(answer.nTry)
               }
            } else {
               return {
                  successRate: 0,
                  message: taskStrings.error
               }
            }
         } else {
            return {
               successRate: 1,
               message: taskStrings.success
            }
         }
      } else {
         return {
             successRate: 0,
             message: taskStrings.error
         }
      }
   };

   function initImgUrl() {
      imgUrl.back = $("#back").attr("src");
      imgUrl.ball = $("#ball").attr("src");
      imgUrl.front = $("#front").attr("src");
      imgUrl.wheel = $("#wheel").attr("src");
      imgUrl.locker = $("#locker").attr("src");
      imgUrl.handle = $("#handle").attr("src");
      imgUrl.handleShadow = $("#handle_shadow").attr("src");
      imgUrl.pointer = $("#pointer").attr("src");
      imgUrl.numberSupport = $("#number_support").attr("src");
   };

   function initPos() {
      wheelCenter[0] = [ 594, 188 ];
      if(level == "hard"){
         wheelCenter[1] = [ (wheelCenter[0][0] - 225), wheelCenter[0][1] ];
      }
      firstBallX = 302;
      lockerCenter = [ 312, 365 ];
      handleCenter = [ 66, 214 ];
      handleShadowCenter = [ 71, 224 ];
      // paper.circle(handleShadowCenter[0],handleShadowCenter[1],1);
   };

   function initVault() {
      paper = subTask.raphaelFactory.create("vault","vault",paperW,paperH);
      vault.back = paper.image(imgUrl.back,10,10,750,431);
      vault.locker = paper.image(imgUrl.locker,150,327,344,113);
      initBalls();
      vault.front = paper.image(imgUrl.front,10,10,750,431);
      vault.handleShadow = paper.image(imgUrl.handleShadow,50,200,183,51);
      vault.handle = paper.image(imgUrl.handle,45,190,176,46);
      vault.wheel = [];
      vault.pointer = [];
      prevAngle = [0, 0];
      vault.numberSupport = [];
      vault.wheel.push(paper.image(imgUrl.wheel,500,100,225,201));
      vault.pointer.push(paper.image(imgUrl.pointer,584,120,19,10));
      vault.numberSupport.push(paper.image(imgUrl.numberSupport,590,171,97,40));
      if(level == "hard"){
         vault.wheel.push(paper.image(imgUrl.wheel,275,100,225,201));
         vault.pointer.push(paper.image(imgUrl.pointer,359,120,19,10));
         vault.numberSupport.push(paper.image(imgUrl.numberSupport,365,171,97,40));
      }
      initTrigger();
      initDigit();
      initWheelButtons();
      initWheelDragArea();
      for(var iWheel = 0; iWheel < wheelCenter.length; iWheel++){
         updateWheel(iWheel);
      }
      if(unlocked){
         vault.handle.attr({"transform": "R-90,"+handleCenter[0]+","+handleCenter[1]});
         vault.handleShadow.attr({"transform": "R-90,"+handleCenter[0]+","+handleCenter[1]});
      }
   };

   function initDigit() {
      for(var iWheel = 0; iWheel < vault.wheel.length; iWheel++){
         var x1 = 643 - iWheel*225;
         var y1 = 190;
         var x2 = x1 + 20;
         var y2 = y1;
         digitPos.push([[x1,y1],[x2,y2]]);
         digit[iWheel] = [];
         for(var iDigit = 0; iDigit < 2; iDigit++){
            digit[iWheel][iDigit] = paper.text(digitPos[iWheel][iDigit][0],digitPos[iWheel][iDigit][1]," ").attr(digitAttr);
         }
      }
   };

   function initWheelButtons() {
      var w = 28;
      var h = 27;
      for(var iWheel = 0; iWheel < vault.wheel.length; iWheel++){
         var x1 = 694 - iWheel*225;
         var y1 = 164;
         var x2 = x1;
         var y2 = y1 + h;
         var pos = [[x1,y1],[x2,y2]];
         wheelButtons[iWheel] = [];
         for(var iButton = 0; iButton < 2; iButton++){
            wheelButtons[iWheel][iButton] = paper.rect(pos[iButton][0],pos[iButton][1],w,h).attr(clickAreaAttr);
            wheelButtons[iWheel][iButton].click(clickWheelButton(iWheel,iButton));
         }
      }
   };

   function initWheelDragArea() {
      for(var iWheel = 0; iWheel < wheelCenter.length; iWheel++){
         if(wheelDragArea[iWheel]) {
            wheelDragArea[iWheel].remove();
         }
         wheelDragArea[iWheel] = paper.circle(wheelCenter[iWheel][0],wheelCenter[iWheel][1],wheelRadius).attr(clickAreaAttr);
         // paper.circle(wheelCenter[iWheel][0],wheelCenter[iWheel][1],wheelRadius/2).attr(clickAreaAttr).attr("cursor","auto");
         wheelDragArea[iWheel].undrag();
         wheelDragArea[iWheel].drag(dragMove(iWheel),dragStart(iWheel),dragEnd(iWheel));
      }
   };

   function initBalls() {
      if(answer.nTry > 0){
         initAncientBalls();
      }
      var x = firstBallX;
      var nMarbles = (level == "hard") ? nBalls : nBalls - answer.nTry;
      for(var iBall = 0; iBall < nMarbles; iBall++){
         balls[iBall] = paper.image(imgUrl.ball,x,(rampLinEq[0]*x+rampLinEq[1]),2*ballRadius,2*ballRadius);
         x += 28; 
      }
   };

   function initAncientBalls() {
      for(var iTry = 0; iTry < answer.nTry; iTry++){
         var pos = answer.attempts[iTry].pos[0];
         if(level == "hard"){
            pos = getDropPosTwoWheels(answer.attempts[iTry].pos[0],answer.attempts[iTry].pos[1]);
         }
         var x = posToX(pos);
         var y = 302;
         var ball = paper.image(imgUrl.ball,x,y,2*ballRadius,2*ballRadius);
         if(isUnlocked(pos)){
            ball.attr({"y":320});
            vault.locker.attr({"transform": "R10,"+lockerCenter[0]+","+lockerCenter[1]});
            ball.attr({"transform": "R10,"+lockerCenter[0]+","+lockerCenter[1]});
            unlocked = true;
         } 
         if(iTry < answer.nTry - 1){
            var sizeRed = 0.7;
            var newPos1bis = { "x": (x + ballRadius*(1-sizeRed)), "y": (y + 2*ballRadius*(1-sizeRed)), "width": 2*ballRadius*sizeRed, "height": 2*ballRadius*sizeRed, "opacity": 0.7 };
            ball.attr(newPos1bis);
         }
         ballsBottom.push(ball);
         prevDropX = x;
      }
   }

   function initTrigger() {
      var x = 97;
      var y = 29;
      var w = 157;
      var h = 37;
      paper.setStart();
      paper.rect(x,y,w,h).attr(clickAreaAttr);
      // paper.rect(x,y,w,h).attr({"stroke":"red"});
      paper.text(176,49,taskStrings.trigger.toUpperCase()).attr(triggerShadowAttr);
      paper.text(176,48,taskStrings.trigger.toUpperCase()).attr(triggerAttr);
      trigger = paper.setFinish();
      trigger.click(dropBall);
   };

   function getDropPosOneWheel(wheelVal, dir) {
      var pos = 0;
      if ((wheelVal > solWheelRange[dir].min) && (wheelVal < solWheelRange[dir].max)) {
         var leftSideWider = ((wheelVal - solWheelRange[dir].min) > (solWheelRange[dir].max - wheelVal));
         var posRangeDist = solPosRange[dir].max - solPosRange[dir].min;
         if (leftSideWider) {
            var posRangeDist = solPosRange[dir].max - openingPos;
            var wheelRangeDist = wheelVal - solWheelRange[dir].min;
            if (wheelRangeDist > 1) {
               pos = Math.round(solPosRange[dir].max - Math.max(1, posRangeDist / 2.5));
            } else {
               pos = openingPos;
            }
            solWheelRange[dir].max = wheelVal;
            solPosRange[dir].max = pos;
         } else {
            var posRangeDist = openingPos - solPosRange[dir].min;
            var wheelRangeDist = solWheelRange[dir].max - wheelVal;
            if (wheelRangeDist > 1) {
               pos = Math.round(solPosRange[dir].min + Math.max(1, posRangeDist / 2.5));
            } else {
               pos = openingPos;
            }
            solWheelRange[dir].min = wheelVal;
            solPosRange[dir].min = pos;
         }
      } else {
         var maxBelow = { wheel: [0,0], pos: [0, 0] };
         var minAbove = { wheel: [maxWheel,maxWheel], pos: [maxPos, maxPos] };
         for (var iAttempt = 0; iAttempt < answer.attempts.length; iAttempt++) {
            var attempt = answer.attempts[iAttempt];
            var wheel = attempt.wheel[dir];
            if (wheel == wheelVal) {
               return attempt.pos[dir];
            }
            if ((wheel < wheelVal) && (wheel > maxBelow.wheel[dir])) {
                maxBelow = attempt;
            }
            if ((wheel > wheelVal) && (wheel < minAbove.wheel[dir])) {
                minAbove = attempt;
            }
         }
         pos = maxBelow.pos[dir] + Math.round((minAbove.pos[dir] - maxBelow.pos[dir])
            * (wheelVal - maxBelow.wheel[dir]) / (minAbove.wheel[dir] - maxBelow.wheel[dir]));
      }
      return pos;
   }

   function getDropPos() {
      var wheelVal1 = answer.wheelVal[0];
      if (level == "easy") {
         var pos = Math.round(wheelVal1 * maxPos / maxWheel)-3;
         answer.attempts.push({ wheel: [wheelVal1], pos: [pos]});
      } else if (level == "medium") {
         var pos = getDropPosOneWheel(wheelVal1, 0);
         answer.attempts.push({ wheel: [wheelVal1], pos: [pos]});
      } else {
         var wheelVal2 = answer.wheelVal[1];
         var pos1 = getDropPosOneWheel(wheelVal1, 0);
         var pos2 = getDropPosOneWheel(wheelVal2, 1);
         var pos = getDropPosTwoWheels(pos1,pos2);
         answer.attempts.push({ wheel: [wheelVal1, wheelVal2], pos: [pos1, pos2]});
         //console.log(wheelVal1 + "," + wheelVal2 + "=>" + pos1 + "," + pos2 + " => " + pos);
      }
      return pos;
   };

   function getDropPosTwoWheels(pos1,pos2) {
      return openingPos - Math.round((Math.abs(pos1 - openingPos) + Math.abs(pos2 - openingPos)) / 2);
   }
   
   function posToX(pos) {
      return Math.round(minX + (maxX - minX) * pos / maxPos);
   }
   
   function dropBall() {
      trigger.unclick().attr("cursor","auto");
      var dropPos = getDropPos();
      var unlock = isUnlocked(dropPos);
      answer.nTry++;
      $("#attempts").html(answer.nTry);
      ballAnim(posToX(dropPos),unlock);
   };

   function isUnlocked(dropPos) {
      if(dropPos == openingPos){
         return true;
      }else{
         return false;
      }
   };

   function ballAnim(dropX,unlock) {
      dropAnim(dropX,unlock);
      shiftBallsAnim();
   };

   function dropAnim(dropX,unlock) {
      var ball = balls.shift();
      
      var newPos1 = { "x": firstBallX, "y": 100 };
      var newPos2 = { "x": dropX, "y": 100 };
      var newPos3 = { "x": dropX, "y": 302 };
      var sizeRed = 0.7;
      var newPos1bis = { "x": (prevDropX + ballRadius*(1-sizeRed)), "y": (newPos3.y + 2*ballRadius*(1-sizeRed)), "width": 2*ballRadius*sizeRed, "height": 2*ballRadius*sizeRed, "opacity": 0.7 };
      var step1 = new Raphael.animation(newPos1,500,"<",function(){
         subTask.raphaelFactory.animate("step2",ball,step2);
         if(prevDropX > 0) {
            subTask.raphaelFactory.animate("step1bis",ballsBottom[ballsBottom.length-1],step1bis);
         }
      });
      var step1bis = new Raphael.animation(newPos1bis,1000,"<");
      var step2 = new Raphael.animation(newPos2,500,"<",function(){
         subTask.raphaelFactory.animate("step3",ball,step3);
      });
      var step3 = new Raphael.animation(newPos3,500,"<",function(){
         if(!unlock){
            if((level != "hard") && (answer.nTry >= data[level].maxTry)){
               platform.validate("done");
            }else{
               prevDropX = dropX;
               ballsBottom.push(ball);
               trigger.click(dropBall).attr("cursor","pointer");
            }
         }else{
            var sizeInc = 1.1;
            var newPos4 = { "x": openingX, "y": newPos3.y + 2*ballRadius*(1-sizeInc), "width": 2*ballRadius*sizeInc, "height": 2*ballRadius*sizeInc};
            var newPos5 = { "x": openingX, "y": 320 + 2*ballRadius*(1-sizeInc), "width": 2*ballRadius*sizeInc, "height": 2*ballRadius*sizeInc};
            var step4 = new Raphael.animation(newPos4,500,"<",function(){
               ball.toFront();
               subTask.raphaelFactory.animate("step5",ball,step5);
            });
            var step5 = new Raphael.animation(newPos5,300,"<",function(){
               unlockAnim(ball);
            });
            subTask.raphaelFactory.animate("step4",ball,step4);
         }
      });
      subTask.raphaelFactory.animate("step1",ball,step1);
   };

   function shiftBallsAnim() {
      var x = firstBallX;
      for(var iBall = 0; iBall < balls.length; iBall++){
         var newPos = { "x": x, "y":(rampLinEq[0]*x+rampLinEq[1]) };
         var shiftAnim = new Raphael.animation(newPos,500,"<");
         subTask.raphaelFactory.animate("shift"+iBall,balls[iBall],shiftAnim);
         x += 28; 
      }
      if(level == "hard"){
         vault.back.remove();
         balls.push(paper.image(imgUrl.ball,x,(rampLinEq[0]*x+rampLinEq[1]),28,28).toBack());
         for(var iBall = ballsBottom.length - 1; iBall >= 0 ; iBall--){
            ballsBottom[iBall].toBack();
         }
         vault.back = paper.image(imgUrl.back,10,10,750,431).toBack();
      }
   };

   function unlockAnim(ball) {
      var lockerRotation = new Raphael.animation({"transform": "R10,"+lockerCenter[0]+","+lockerCenter[1]},500,"<",function(){
         subTask.raphaelFactory.animate("handleRotation",vault.handle,handleRotation);
         subTask.raphaelFactory.animate("handleShadowRotation",vault.handleShadow,handleShadowRotation);
      });
      var handleRotation = new Raphael.animation({"transform": "R-90,"+handleCenter[0]+","+handleCenter[1]},500,"<",function(){
         platform.validate("done");
      });
      var handleShadowRotation = new Raphael.animation({"transform": "R-90,"+handleShadowCenter[0]+","+handleShadowCenter[1]},500,"<");
      subTask.raphaelFactory.animate("lockerRotation",vault.locker,lockerRotation);
      subTask.raphaelFactory.animate("ballRotation",ball,lockerRotation);
   };

   function angleToWheelCenter(iWheel, x, y) {
      var xCenter = $("#vault").offset().left + wheelCenter[iWheel][0];
      if(Beav.Navigator.isIE8()){
         var yCenter = $("#vault").offset().top + document.documentElement.scrollTop + wheelCenter[iWheel][1];
      }else{
         var yCenter = $("#vault").offset().top + wheelCenter[iWheel][1];
      }
      
      return (Math.atan2(y - yCenter, x - xCenter) + 5 * Math.PI / 2) % (Math.PI * 2);
   }
   
   function dragStart(iWheel) {
      return function(x, y) {
         startAngle = angleToWheelCenter(iWheel, x, y);
         startValue = answer.wheelVal[iWheel];
         nClick = 0;
      }
   };
   
   function dragMove(iWheel) {
      return function(dx,dy,x,y) {
         var angle = angleToWheelCenter(iWheel, x, y);
         answer.wheelVal[iWheel] = (startValue + truncate((angle - startAngle) * (maxWheel + 1) / (2 * Math.PI)) + (maxWheel + 1)) % (maxWheel + 1);
         updateWheel(iWheel);
         nDrag++;
      }
   };
   function dragEnd(iWheel) {
      return function() {
         // drag = false;
         initWheelDragArea(); // IE8 bug fix
      }
   };

   function clickWheelButton(iWheel, iButton) {
      return function(){
         answer.wheelVal[iWheel] = (answer.wheelVal[iWheel] + 1 - iButton*2 + (maxWheel + 1)) % (maxWheel + 1);
         updateWheel(iWheel);
         nClick++;
         if(nClick >= 5 && nDrag < 10){
            displayHelper.showPopupMessage(taskStrings.dontForget,"blanket");
         }
      }
   };

   function updateWheel(iWheel) {
      updateDigit(iWheel);
      var angle = answer.wheelVal[iWheel]*360/(maxWheel + 1);
      vault.pointer[iWheel].transform("R"+angle+","+wheelCenter[iWheel][0]+","+wheelCenter[iWheel][1]);
      prevAngle[iWheel] = angle;
   };

   function updateDigit(iWheel) {
      var value = answer.wheelVal[iWheel];
      var digitValues = [truncate(value / 10), value % 10];
      // if((navigator.appVersion.indexOf("MSIE 8.") != -1 && !drag) || navigator.appVersion.indexOf("MSIE 8.") == -1){
         for(var iDigit = 0; iDigit < 2; iDigit++){
            // digit[iWheel][iDigit].remove();
            if(digit[iWheel][iDigit]){
               var val = (digitValues[iDigit] === 0) ? "0" : digitValues[iDigit];
               digit[iWheel][iDigit].attr("text",val);
            }else{
               digit[iWheel][iDigit] = paper.text(digitPos[iWheel][iDigit][0],digitPos[iWheel][iDigit][1],digitValues[iDigit]).attr(digitAttr);
            }
         }
      // }
   };

   function truncate(x) { // IE8 compatible
      if( x > 0) {
         return Math.floor(x);
      }else {
         return Math.ceil(x);
      }
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
