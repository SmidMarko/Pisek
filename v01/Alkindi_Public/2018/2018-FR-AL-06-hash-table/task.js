function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         set: [ 312, 539, 780 ],
         nLines: 5
      },
      medium: {
         set: [ 214, 423, 591 ],
         nLines: 10
      },
      hard: {
         set: [ 173, 252, 863 ],
         nLines: 10
      }
   };
   var set;
   var paper;
   var paperW = 770;
   var paperH;
   var margin = 20;
   var keys = [];
   var keySize = 40;
   var keyAttr = {
      "stroke": "black",
      "stroke-width": 1,
      "fill": "white",
      "r": 5
   };
   var numberAttr = {
      "font-size": 20
   };
   var screenAttr = {
      "stroke": "black",
      "stroke-width": 1,
      "fill": "white",
      "x": (4*margin + 3*keySize),
      "y": 2*margin + 1.5*keySize,
      "width": (3*numberAttr["font-size"] + 3*margin/2),
      "height": keySize
   };
   var typedVal = "";
   var lastTypedVal = "";
   var typedObj = [];
   var button;
   var toolAttr = {
      "fill": "lightblue",
      "x": margin,
      "y": margin,
      "width": (3*keySize + 3*numberAttr["font-size"] + 11*margin/2),
      'height': (4*keySize + 7*margin/2)
   };
   var textAttr = {
      "font-size": 16
   };
   var tokenAttr = {
      "rx": (3*numberAttr["font-size"] + margin/2)/2,
      "ry": (numberAttr["font-size"] + margin/2)/2
   };
   var tokenColor = [ "white", "lightgreen", "rgb(180,180,180)" ];
   var tokens = [];
   var tokenInitPos = [];
   var tokenPos = [];
   var maxTok = 8; // max number of tokens that fit in one line
   var lines = [];
   var lineY = [];
   var moveX;
   var moveY;
   var lineAttr = {
      "stroke": "black",
      "stroke-width": 1,
      "width": (paperW - 2*margin),
      "height": (numberAttr["font-size"] + margin)
   };
   

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      paperH = toolAttr.y + toolAttr.height + margin + data[level].nLines*lineAttr.height + margin;
      set = data[level].set;
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
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = { "lineVal": [], "setLine": [] };
      for(var iLine = 0; iLine < data[level].nLines; iLine++){
         defaultAnswer.lineVal[iLine] = [];
      }
      for(var iTok = 0; iTok < set.length; iTok++) {
         defaultAnswer.setLine[iTok] = null;
      }
      return defaultAnswer;
   };

   subTask.unloadLevel = function(callback) {
      callback();
   };

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };

   function getResultAndMessage() {
      var success = true;
      var message = taskStrings.success;
      for(var iTok = 0; iTok < set.length; iTok++){
         if(answer.setLine[iTok] === null){
            success = false;
            message = taskStrings.missingToken;
            break;
         }else if(answer.setLine[iTok] != getLine(set[iTok],level)){
            success = false;
            message = taskStrings.wrongLine;
         }
      }
      if(success) {
         return {
            successRate: 1,
            message: message
         };
      }
      return {
         successRate: 0,
         message: message
      };
   };

   function initPaper() {
      paper = subTask.raphaelFactory.create("paper","paper",paperW,paperH);
      initTool();
      
      initLines();
      initNumbers();
      initDrag();
   };

   function initTool() {
      paper.rect().attr(toolAttr);
      initKeys();
      initScreen();
   };

   function initKeys() {
      for(var iKey = 0; iKey < 10; iKey++){
         var x = 2*margin + ((iKey%3) + Math.floor(iKey/9))*(keySize + margin/2);
         var y = 2*margin + Math.floor(iKey/3)*(keySize + margin/2);
         paper.rect(x,y,keySize,keySize).attr(keyAttr);
         paper.text(x+keySize/2,y+keySize/2,(iKey+1)%10).attr(numberAttr);
         keys[iKey] = paper.rect(x,y,keySize,keySize).attr(keyAttr).attr("opacity",0);
         keys[iKey].click(type(iKey));
      }
   };

   function initScreen() {
      paper.rect().attr(screenAttr);
      updateDigit();
   };

   function initNumbers() {
      var xText = toolAttr.x + (toolAttr.width + paperW)/2;
      var yText = toolAttr.y + textAttr["font-size"] + margin;
      paper.text(xText,yText,taskStrings.slideNum).attr(textAttr);
      for(var iNum = 0; iNum < set.length; iNum++){
         var x = xText - ((set.length - 1)/2 - iNum)*(paperW - toolAttr.x - toolAttr.width - 2*margin)/set.length;
         var y = yText + textAttr["font-size"] + 2*margin + tokenAttr.ry;
         tokens[iNum] = createToken(x,y,set[iNum],1);
         tokens[iNum].attr("cursor","pointer");
         tokenInitPos[iNum] = [ x, y ];
         tokenPos[iNum] = [ x, y ];
         if(answer.setLine[iNum] !== null){
            addTokenToLine(iNum,answer.setLine[iNum]);
         }
      }
      repositionTokens();
   };

   function initLines() {
      var x0 = margin;
      var xText = x0 + margin;
      var y0 = toolAttr.y + toolAttr.height + margin;
      var h = lineAttr.height;
      var w = lineAttr.width;
      for(var iLine = 0; iLine < data[level].nLines; iLine++){
         var y = y0 + iLine*h;
         var yText = y + h/2;
         lineY[iLine] = yText;
         lines[iLine] = paper.rect(x0,y,w,h).attr(lineAttr);
         paper.text(xText,yText,iLine).attr(numberAttr);
         updateLine(iLine);
      }
      paper.path("M"+(x0+2*margin)+" "+y0+"V"+(y0+data[level].nLines*h));
   };

   function initDrag() {
      for(var iTok = 0; iTok < set.length; iTok++){
         tokens[iTok].undrag();
         tokens[iTok].drag(dragMove(iTok),dragStart(iTok),dragEnd(iTok));
      }
   };

   function dragMove(token) {
      return function(dx,dy,x,y) {
         moveX = tokenPos[token][0] + dx;
         moveY = tokenPos[token][1] + dy;
         if(Beav.Navigator.isIE8()){
            moveY -= document.documentElement.scrollTop;
         }
         setPos(token,moveX,moveY);
         var line = isOverLine(moveX,moveY);
         hoverEffect(line);
      }
   };

   function dragStart(token) {
      return function(x,y) {
         tokens[token].toFront();
         if(answer.setLine[token] !== null){
            var line = answer.setLine[token];
            answer.setLine[token] = null;
            updateLine(line,true);
            
         }
      }
   };

   function dragEnd(token) {
      return function(ev) {
         // if(ev.pageX === undefined){
         //    var ev.pageX = x;
         //    var ev.pageY = y;
         // }
         /*
         var mouseX = ev.pageX;
         var mouseY = ev.pageY;
         if(Beav.Navigator.isIE8()){
            var mouseX = ev.clientX;
            var mouseY = ev.clientY;
         }
         var x = mouseX - $("#paper").position().left;
         var y = mouseY - $("#paper").position().top;
         */
         var x = moveX;
         var y = moveY;
         var line = isOverLine(x,y);
         if(line === false){
            var newX = tokenInitPos[token][0];
            var newY = tokenInitPos[token][1];
            setPos(token,newX,newY);
            tokenPos[token] = [ newX, newY ];
            hoverEffect(false);
         }else{
            addTokenToLine(token,line);
            updateLine(line,true);
            // repositionTokens();
         }
         initDrag(); // IE8 bug fix
      }
   };

   function addTokenToLine(tok,line) {
      var length = (answer.lineVal[line]) ? answer.lineVal[line].length : 0;
      var y = lineY[line];
      var tokOnLine = tokenOnLine(tok,line);
      if((length + tokOnLine) < maxTok){
         var x = 3*margin + (2*tokenAttr.rx + margin/2)*(length + tokOnLine + 1/2);
      }else{
         var x = 3*margin + (2*tokenAttr.rx + margin/2)*(maxTok - 1 - tokOnLine + 1/2);
      }
      setPos(tok,x,y);
      tokenPos[tok] = [ x, y ];
      answer.setLine[tok] = line;
      tokens[tok].toFront();
      hoverEffect(false);
   };

   function hoverEffect(line) {
      for(var iLine = 0; iLine < data[level].nLines; iLine++){
         if(line === iLine){
            lines[iLine].attr("fill","lightgrey");
         }else{
            lines[iLine].attr("fill","white");
         }
      }
   };

   function setPos(token,x,y) {
      tokens[token].attr({ 
            "x": x, 
            "y": y,
            "cx": x, 
            "cy": y });
   };

   function isOverLine(x,y) {
      if(x > margin && x < (paperW - margin) && y > (lineY[0] - lineAttr.height/2) && y < (lineY[data[level].nLines-1] + lineAttr.height/2)){
         var line = Math.floor((y - lineY[0] + lineAttr.height/2)/lineAttr.height)
         return line;
      }
      return false;
   };

   function addVal() {
      if (typedVal == "") {
         typedVal = "0";
      }
      var val = parseInt(typedVal);
      lastTypedVal = typedVal;
      var line = getLine(val,level);
      if(isOnLine(val,line)){
         displayHelper.showPopupMessage(taskStrings.alreadyTested,"blanket");
      }else if($.inArray(val,set) != -1){
         displayHelper.showPopupMessage(taskStrings.cannotTest,"blanket");
      }else{
         answer.lineVal[line].push(typedVal);
         updateLines();
      }
      typedVal = ""; 
      updateDigit();
   };

   function updateLine(line,noanim) {
      var tokOnLine = tokenOnLine(null,line);
      var length = (answer.lineVal[line]) ? answer.lineVal[line].length : 0;
      var newMaxTok = maxTok - tokOnLine;
      var firstTok = ((length - newMaxTok) > 0) ? (length - newMaxTok) : 0;
      for(var iNum = 0; iNum < (length - firstTok); iNum++){
         var x = 3*margin + (2*tokenAttr.rx + margin/2)*(iNum + 1/2);
         var y = lineY[line];
         var color = (answer.lineVal[line][iNum + firstTok] == parseInt("0" + lastTypedVal)) ? 2 : 0;
         createToken(x,y,answer.lineVal[line][iNum + firstTok],color,noanim);
      }
      if(tokOnLine !== 0){
         repositionTokens();
      }
   };

   function updateLines() {
      for(var iLine = 0; iLine < data[level].nLines; iLine++){
         updateLine(iLine);
      }
   };

   function repositionTokens() {
      var oldTok = [];
      for(var iTok = 0; iTok < tokens.length; iTok++){
         var tokLine = answer.setLine[iTok];
         answer.setLine[iTok] = null;
         if(tokLine !== null){
            oldTok.push([iTok,tokLine]) 
         }
      }
      for(var jTok = 0; jTok < oldTok.length; jTok++){
         addTokenToLine(oldTok[jTok][0],oldTok[jTok][1]);
      }
   };

   function isOnLine(val,line) {
      for(var iNum = 0; iNum < answer.lineVal[line].length; iNum++){
         if(answer.lineVal[line][iNum] == val){
            return true;
         }
      }
      return false;
   };

   function tokenOnLine(tok,line) {
      var tokOnLine = 0;
      for(var iTok = 0; iTok < answer.setLine.length; iTok++){
         if(answer.setLine[iTok] === line && tok != iTok){
            tokOnLine++;
         }
      }
      return tokOnLine;
   };

   function getLine(val,level) {
      var a, b, c, line ; 
      c = val % 10;
      b = Math.floor((val%100)/10);
      a = Math.floor(val/100);
      switch (level) {
      case 'easy' : 
         line = val % 5; 
         break;
      case 'medium':
         line = (a+b+c) % 10; 
         break;
      case 'hard':
         line = 4*(a%2) + 2*(b%2) + (c%2);
         break; 
      }
      return line;
   };

   function createToken(x,y,val,color,noanim) {
      paper.setStart();
      paper.ellipse(x,y).attr(tokenAttr).attr("fill",tokenColor[color]);
      paper.text(x,y,val).attr(numberAttr);
      var token = paper.setFinish();
      if(val == lastTypedVal && !noanim){
         tokenAnim(token,x,y);
      }
      return token;
   };

   function tokenAnim(token,x,y) {
      var x0 = screenAttr.x + screenAttr.width/2;
      var y0 = screenAttr.y + screenAttr.height + 2*tokenAttr.ry + margin;
      token.attr({"x":x0,"y":y0,"cx":x0,"cy":y0});
      var anim = new Raphael.animation({"x":x,"y":y,"cx":x,"cy":y},500,"<",function(){
         token.attr({"x":x,"y":y,"cx":x,"cy":y});
      });
      subTask.raphaelFactory.animate("anim",token,anim);
   };

   function type(iKey) {
      return function() {
         var key = "" + (iKey + 1)%10;
         if(typedVal.length < 3){
            typedVal += key;
         }else {
            typedVal = key;
         }
         updateDigit();
         if (typedVal.length == 3) {
            addVal();
         }
      }
   };

   function updateDigit() {
      for(var iDigit = 0; iDigit < 3; iDigit++){
         var x = screenAttr.x + margin/2 + numberAttr["font-size"]/2 + iDigit*(numberAttr["font-size"] + margin/4);
         var y = screenAttr.y + screenAttr.height/2;
         var actualDigit = "_";
         if(typedVal.length > iDigit){
            actualDigit = typedVal[iDigit];
         }
         if(typedObj[iDigit]){ 
            typedObj[iDigit].remove();
         }
         typedObj[iDigit] = paper.text(x,y,actualDigit).attr(numberAttr);
      }
   };

}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
