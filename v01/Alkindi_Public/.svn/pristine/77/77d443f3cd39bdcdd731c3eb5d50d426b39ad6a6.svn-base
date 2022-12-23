function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         paperH: 350,
         secondFrame: [3,5,7],
         target: [0,3,6],
         nFrames: 2,
         operations: ["P","+"]
      },
      medium: {
         paperH: 520,
         secondFrame: [4,3,6],
         target: [3,0,4],
         nFrames: 5,
         operations: ["P","+","+","P"]
      },
      hard: {
         paperH: 530,
         secondFrame: [4,5,6],
         target: [8,5,4],
         nFrames: 8,
         operations: ["P","+","+","P","P","+"]
      }
   };
   var paper;
   var paperW = 770;
   var paperH;
   var margin = 20;
   var marginHard = 12;
   var digits = []; // Raphael objects
   var values = [];
   var digitPos = [];
   var firstDigitsAttr = {
      "font-size": 16,
      "font-weight": "bold"
   };
   var firstDigitsFrameAttr = {
      "width": 25,
      "height": 25,
      "stroke": "black",
      "stroke-width": 1,
      "fill": "white"
   };
   var firstFrameAttr = {
      "x": margin,
      "y": margin,
      "width": (firstDigitsFrameAttr.width+margin)*3 + margin,
      "height": (firstDigitsFrameAttr.height+margin)*2,
      "stroke": "black",
      "stroke-width": 1,
      "fill": "rgb(220,220,220)"
   };
   var triangleAttr = {
      "stroke": "none",
      "fill": "rgb(0,0,230)",
      "cursor": "pointer"
   };
   var frameAttr = {
      "width": 0, // defined later
      "height": 0, // 
      "stroke": "black",
      "stroke-width": 1,
      "fill": "rgb(220,220,220)"
   };
   var digitFrameAttr = {
      "width": 25,
      "height": 25,
      "stroke": "black",
      "stroke-width": 1,
      "fill": "rgb(240,240,240)"
   };
   var digitAttr = {
      "font-size": 16
   };
   var frameX = [];
   var frameY = [];
   var nFrames;
   var targetX;
   var targetY;
   var targetOuterFrame = 10;
   var targetOuterFrameAttr = {
      "fill": "rgb(150,200,150)"
   };
   var operationAttr = {
      "font-size": 25,
      "font-weight": "bold"
   };
   var operationFrame = {
      "r": 20,
      "stroke": "rgb(150,0,0)",
      "stroke-width": 3,
      "fill": "#f4cccc"
   };
   var operationX = [];
   var operationY = [];
   var arrowAttr = {
      "stroke": "rgb(50,50,50)",
      "stroke-width": 3,
      "arrow-end": "block-wide-long"
   };

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      paperH = data[level].paperH;
      nFrames = data[level].nFrames;
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
      updateValues();
      initDim();
      initFramePos();
      initOperationPos();
      initPaper();
      initObjective();
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = [1,2,3];
      return defaultAnswer;
   };

   subTask.unloadLevel = function(callback) {
      callback();
   };

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };

   function getResultAndMessage() {
      var res = updateValues(); 
      var success = true;
      for(var iDigit = 0; iDigit < 3; iDigit++){
         if(data[level].target[iDigit] != res[iDigit]){
            success = false;
         }
      }
      if(success) {
         return {
            successRate: 1,
            message: taskStrings.success
         };
      }
      return {
         successRate: 0,
         message: taskStrings.error
      };
   };

   function initDim() {
      if(level != "hard"){
         frameAttr.width = (digitFrameAttr.width+margin)*3;
         frameAttr.height = digitFrameAttr.height+margin;
      }else{
         digitFrameAttr.width = 20;
         digitFrameAttr.height = 20;
         frameAttr.width = digitFrameAttr.width*3 + margin*2 + marginHard;
         frameAttr.height = digitFrameAttr.height+marginHard;
         arrowAttr["arrow-end"] = "block";
         firstFrameAttr.x = 100;
         targetOuterFrame = 5;
      }
      
   };

   function initFramePos() {
      if(level != "hard"){
         frameX[0] = firstFrameAttr.x + margin/2;
      }else{
         frameX[0] = firstFrameAttr.x + margin - marginHard/2;
      }
      for(var iCol = 1; iCol < 4; iCol++){
         frameX[iCol] = frameX[iCol-1] + frameAttr.width + margin/2;
      }
      frameY[0] = firstFrameAttr.y + firstFrameAttr.height - frameAttr.height;
      for(var iRow = 1; iRow < 7; iRow++){
         frameY[iRow] = frameY[iRow-1] + frameAttr.height*2;
      }
      targetX = (level != "medium") ? frameX[3] : frameX[0];
      var lastRow = nFrames-1 - Math.floor(nFrames/3);
      targetY = frameY[lastRow] + frameAttr.height*2;
   };

   function initOperationPos() {
      operationX[0] = frameX[0] + frameAttr.width/2;
      operationX[3] = frameX[3] + frameAttr.width/2;
      operationX[1] = (operationX[0] + frameX[2])/2;
      operationX[2] = (frameX[3] - frameAttr.width + operationX[3])/2;

      for(var iRow = 0; iRow < 3; iRow++){
         operationY[iRow] = frameY[2*iRow + 1] + frameAttr.height/2;
      }
   };

   function initPaper() {
      paper = subTask.raphaelFactory.create("paper","paper",paperW, paperH);
      initFirstFrame();
      initFrames();
      initTarget();
      initOperations();
      initArrows();
   };

   function initFirstFrame() {
      paper.rect().attr(firstFrameAttr);
      digits[0] = [];
      digitPos[0] = [];
      for(var iDigit = 0; iDigit < 3; iDigit++){
         var w = firstDigitsFrameAttr.width;
         var h = firstDigitsFrameAttr.height;
         var x = firstFrameAttr.x + margin + iDigit*(margin + w);
         var y = firstFrameAttr.y + margin/2 + (h + margin)/2;
         paper.rect(x,y).attr(firstDigitsFrameAttr);
         digits[0][iDigit] = paper.text(x+w/2,y+h/2,answer[iDigit]).attr(firstDigitsAttr);
         digitPos[0][iDigit] = [ (x+w/2), (y+h/2) ];
         var up = drawTriangle(x,y-margin/2,-1);
         var down = drawTriangle(x,y+h+margin/2,1);
         up.click(increment(iDigit,1));
         down.click(increment(iDigit,9));
      }
   };

   function initFrames() {
      for(var iFrame = 0; iFrame < nFrames; iFrame++){
         drawFrame(iFrame,paper);
      }
   };

   function initTarget() {
      drawFrame(nFrames,paper);
      var outerFr = targetOuterFrame;
      var x = targetX-outerFr;
      var y = targetY-outerFr;
      var w = frameAttr.width + 2*outerFr;
      var h = frameAttr.height + 2*outerFr;
      paper.rect(x,y,w,h).attr(targetOuterFrameAttr).toBack();
      paper.text(x + frameAttr.width / 2 + outerFr,y + frameAttr.height + 2 * outerFr + 20, taskStrings.result).attr("font-size",16);
   };

   function initObjective() {
      var objPaper = subTask.raphaelFactory.create("objPaper","target",(frameAttr.width + 2*targetOuterFrame + 2*margin),(frameAttr.height + 2*targetOuterFrame + 2*marginHard));
      drawFrame(-1,objPaper);
      var outerFr = targetOuterFrame;
      var x = margin;
      var y = marginHard;
      var w = frameAttr.width + 2*outerFr;
      var h = frameAttr.height + 2*outerFr;
      objPaper.rect(x,y,w,h).attr(targetOuterFrameAttr).toBack();
   };

   function initOperations() {
      for(var iOp = 0; iOp < data[level].operations.length; iOp++){
         drawOperation(iOp);
      }
   };

   function initArrows() {
      var arrowX = [ (frameX[0]+frameAttr.width/2), (frameX[3]+frameAttr.width/2) ];
      var arrowY = [];
      for(var iRow = 0; iRow < 3; iRow++) {
         arrowY[iRow] = operationY[iRow];
      }
      var y0 = firstFrameAttr.y + firstFrameAttr.height;
      var r = operationFrame.r;
      var w = frameAttr.width;
      var h = frameAttr.height;
      var yt = targetY - targetOuterFrame;
      paper.setStart();
      paper.path("M"+arrowX[0]+" "+y0+"V"+arrowY[0]+"H"+(operationX[1] - r));
      paper.path("M"+(operationX[1] + r)+" "+arrowY[0]+"H"+frameX[2]);
      paper.path("M"+(frameX[2] + w)+" "+arrowY[0]+"H"+(operationX[3] - r));
      paper.path("M"+arrowX[1]+" "+y0+"V"+(operationY[0] - r));
      if(level == "easy"){
         paper.path("M"+arrowX[1]+" "+operationY[0] + r+"V"+yt);
      }else{
         paper.path("M"+arrowX[1]+" "+(operationY[0] + r)+"V"+frameY[2]);
         paper.path("M"+arrowX[0]+" "+arrowY[0]+"V"+frameY[2]);
         paper.path("M"+arrowX[0]+" "+(frameY[2] + h)+"V"+(operationY[1] - r));
         paper.path("M"+arrowX[1]+" "+(frameY[2] + h)+"V"+arrowY[1]+"H"+(operationX[2] + r));
         paper.path("M"+(operationX[2] - r)+" "+arrowY[1]+"H"+(frameX[1] + w));
         paper.path("M"+frameX[1]+" "+arrowY[1]+"H"+(operationX[0] + r));
         if(level == "medium"){
            paper.path("M"+arrowX[0]+" "+(operationY[1] + r)+"V"+yt);
         }else{
            paper.path("M"+arrowX[0]+" "+(operationY[1] + r)+"V"+frameY[4]);
            paper.path("M"+arrowX[1]+" "+arrowY[1]+"V"+frameY[4]);
            paper.path("M"+arrowX[1]+" "+(frameY[4] + h)+"V"+(operationY[2] - r));
            paper.path("M"+arrowX[0]+" "+(frameY[4] + h)+"V"+arrowY[2]+"H"+(operationX[1] - r));
            paper.path("M"+(operationX[1] + r)+" "+arrowY[2]+"H"+frameX[2]);
            paper.path("M"+(frameX[2] + w)+" "+arrowY[2]+"H"+(operationX[3] - r));
            paper.path("M"+arrowX[1]+" "+(operationY[2] + r)+"V"+yt);
         }
      }
      paper.setFinish().attr(arrowAttr).toBack();
   }

   function drawOperation(index) {
      var col = (index*2 + 1 - Math.floor(index/2) + 2*Math.floor(index/4))%4;
      var row = Math.floor(index/2);
      var x = operationX[col];
      var y = operationY[row];
      var op = data[level].operations[index];
      paper.circle(x,y).attr(operationFrame);
      paper.text(x,y,op).attr(operationAttr);
   };

   function drawFrame(iFrame,p) {
      if(iFrame == nFrames){
         var x = targetX;
         var y = targetY;
         var dAttr = firstDigitsAttr;
      }else if(iFrame > -1){
         var col = (3 - iFrame%4 + Math.floor(iFrame/2)*3 + Math.floor(iFrame/6))%4;
         var row = iFrame - Math.floor(iFrame/3);
         var x = frameX[col];
         var y = frameY[row];
         var dAttr = digitAttr;
      }else{
         var x = margin + targetOuterFrame;
         var y = marginHard + targetOuterFrame;
         var dAttr = firstDigitsAttr;
      }
      p.rect(x,y).attr(frameAttr);
      if(iFrame > -1){
         digits[iFrame+1] = [];
         digitPos[iFrame+1] = [];
      }
      for(var iDigit = 0; iDigit < 3; iDigit++){
         var w = digitFrameAttr.width;
         var h = digitFrameAttr.height;
         if(level != "hard"){
            var xd = x + margin/2 + iDigit*(margin + w);
            var yd = y + margin/2;
         }else{
            var xd = x + marginHard/2 + iDigit*(margin + w);
            var yd = y + marginHard/2;
         }
         p.rect(xd,yd).attr(digitFrameAttr);
         if(iFrame > -1){
            var val = values[iFrame][iDigit];
            digits[iFrame+1][iDigit] = p.text(xd+w/2,yd+h/2,val).attr(dAttr);
            digitPos[iFrame+1][iDigit] = [ (xd+w/2), (yd+h/2) ];
         }else{
            var val = data[level].target[iDigit];
            p.text(xd+w/2,yd+h/2,val).attr(dAttr);
         }
      }
   };

   function drawTriangle(x,y,dir) {
      var w = firstDigitsFrameAttr.width;
      var h = firstDigitsFrameAttr.height/2;
      var clickAreaMargin = 10;
      var clickArX = x - clickAreaMargin;
      var clickArY = (dir == 1) ? (y - clickAreaMargin) : (y - clickAreaMargin - h);
      var clickAreaColor = (navigator.appVersion.indexOf("MSIE 8.") != -1) ? firstFrameAttr.fill : "transparent";
      var clickArea = paper.rect(clickArX, clickArY, (w + 2*clickAreaMargin), (h + 2*clickAreaMargin)).attr({"stroke":"none","fill":clickAreaColor,"cursor":"pointer"});
      var triangle = paper.path("M"+x+" "+y+"H"+(x+w)+"L"+(x+w/2)+" "+(y+dir*h)+"Z");
      triangle.attr(triangleAttr);
      return paper.set(triangle,clickArea);
   };

   function increment(index,val) {
      return function(){
         answer[index] = (answer[index] + val)%10;
         updateValues();
         updateFirstDigit(index);
         updateDigits();
      }
   };

   function updateValues() {
      if(!values[0]) values[0] = JSON.parse(JSON.stringify(data[level].secondFrame));
      values[1] = permute(answer);
      if(level == "easy"){
         var result = add(values[0],values[1]);
         values[2] = result;
      }else{
         values[2] = JSON.parse(JSON.stringify(answer));
         values[3] = add(values[0],values[1]);
         values[4] = permute(values[3]);
         if(level == "medium"){
            var result = add(values[2],values[4]);
            values[5] = result;
         }else{
            values[5] = add(values[2],values[4]);
            values[6] = JSON.parse(JSON.stringify(values[3]));
            values[7] = permute(values[5]);
            var result = add(values[6],values[7]);
            values[8] = result;
         }
      }
      return result;
   };

   function permute(arr) {
      var newArr = [];
      for(var iDigit = 0; iDigit < 3; iDigit++){
         newArr[iDigit] = arr[(iDigit + 2)%3];
      }
       // newArr[0] = arr[1];
       // newArr[1] = arr[0];
       // newArr[2] = arr[2];
       return newArr;
   };

   function add(arr1,arr2) {
      var number1 = toNumber(arr1);
      var number2 = toNumber(arr2);
      var units1 = number1%10;
      var units2 = number2%10;
      var tens1 = ((number1-units1)%100)/10;
      var tens2 = ((number2-units2)%100)/10;
      var hundreds1 = (number1 - tens1*10 - units1)/100;
      var hundreds2 = (number2 - tens2*10 - units2)/100;
      var units = (units1 + units2)%10;
      var tens = (tens1 + tens2)%10;
      var hundreds = (hundreds1 + hundreds2)%10;
      // var number1 = toNumber(arr1);
      // var number2 = toNumber(arr2);
      // var addition = (number1 + number2)%1000;
      // var units = addition%10;
      // var tens = ((addition - units)%100)/10;
      // var hundreds = (addition - tens*10 - units)/100;
      return [hundreds,tens,units];
   };

   function toNumber(arr) {
      return arr[0]*100 + arr[1]*10 + arr[2];
   };

   function updateFirstDigit(iDigit) {
      digits[0][iDigit].remove();
      digits[0][iDigit] = paper.text(digitPos[0][iDigit][0],digitPos[0][iDigit][1],answer[iDigit]).attr(firstDigitsAttr);
   };

   function updateDigits() {
      for(var iFrame = 0; iFrame <= nFrames; iFrame++){
         for(var iDigit = 0; iDigit < 3; iDigit++){
            digits[iFrame+1][iDigit].remove();
            digits[iFrame+1][iDigit] = paper.text(digitPos[iFrame+1][iDigit][0],digitPos[iFrame+1][iDigit][1],values[iFrame][iDigit]).attr(digitAttr);
         }
      }
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
