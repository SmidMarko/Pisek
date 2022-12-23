function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;

   var marginY = 20;
   var marginX = 20;
   var blockW = 65;
   var blockH = 45;


   var data = {
      easy: {
         nbCol: 5,
         nbRows: 3,
         itinerary: [[0,1],[1,1],[1,0],[2,0],[3,0],[3,1],[4,1],[5,1]],
         towers: [
            { block: [2,2], x: blockW - marginX / 2, y: blockH - marginY / 2 },
            { block: [3,0], x: marginX, y: blockH - marginY / 2 },
            { block: [4,1], x: blockW - marginX / 2, y: marginY / 2 }
         ],
         markers: [1,3,6]
      },
      medium: {
         nbCol: 5,
         nbRows: 3,
         itinerary: [[0,3],[1,3],[1,2],[2,2],[2,3],[3,3],[3,2],[4,2],[4,3],[5,3]],
         towers: [
            { block: [0,0], x: marginX / 2, y: blockH / 2 },
            { block: [2,2], x: marginX / 2, y: blockH / 2 },
            { block: [4,1], x: blockW - marginX / 2, y: blockH / 2 }
         ],
         markers: [4,5,8]
      },
      hard: {
         nbCol: 8,
         nbRows: 4,
         itinerary: [[2,4],[2,3],[1,3],[1,2],[1,1],[2,1],[3,1],[3,2],[4,2],[5,2],[5,3],[6,3],[6,2],[7,2],[7,1],[6,1]],
         towers: [
            { block: [0,0], x: marginX / 2, y: blockH / 2 },
            { block: [3,1], x: blockW - marginX / 2, y: blockH / 2 },
            { block: [4,2], x: marginX / 2, y: blockH - marginY / 2 },
            { block: [3,3], x: blockW - marginX / 2, y: blockH - marginY / 2 },
            { block: [5,0], x: marginX / 2, y: blockH / 2 },
            { block: [1,1], x: blockW - marginX / 2, y: blockH / 2 },
            { block: [7,2], x: marginX / 2, y: blockH - marginY / 2 },
            { block: [6,3], x: blockW - marginX / 2, y: blockH - marginY / 2 }
         ],
         markers: [3,5,8,10]
      }
   };

   var paper;
   var paperWidth = 730;
   var paperHeight;

   var headerH = 40;
   var graphH = 200;
   var graphW = paperWidth - 4*marginX;
   var graphFrameH = headerH + graphH + 3*marginY;
   var mapH;
   var mapW;
   var mapFrameH;
   var streetW = 15;
   var graduationLength = 5;

   var nbCol;
   var nbRows;
   var nbTowers;
   var stepLength = 5;
   var towerCoord = [];
   var nbYGrad = 3;
   var xGraduationStep;
   var yGraduationStep = (graphH - marginY)/nbYGrad;
   var nbMarkedCrossroads;
   var emo;
   var dragLimit;
   var shortestLine;
   var graphShortestLine;
   var maxDistance;
   var crossroads;
   var dragging = false;

   var colors = {
      grey: "#EAEAEA",
      lightGrey: "#F9F9F9",
      darkGrey: "#727272",
      green: "#88BB88",
      black: "#30242B",
      purple: "#a349a4",
      yellow: "#F48A28" 
   };
   
   var graphWindowAttr = {
      frame: {
         stroke: "none",
         fill: colors.lightGrey,
         r: 5
      },
      title: {
         "font-size": 14,
         "font-weight": "bold",
         fill: colors.darkGrey
      },
      line: {
         stroke: colors.darkGrey,
         opacity: 0.5
      }
   };
   var mapWindowAttr = {
      frame: {
         stroke: "none",
         fill: colors.grey,
         r: 5
      },
      title: {
         "font-size": 14,
         "font-weight": "bold",
         fill: colors.green
      },
      line: {
         stroke: colors.green
      }
   };
   var blockAttr = {
      stroke: "none",
      fill: colors.green,
      r: 5,
      width: blockW,
      height: blockH
   };
   var crossroadAttr = {
      stroke: colors.darkGrey,
      "stroke-width": 2,
      r: streetW/2,
      fill: "white"
   };
   var towerAttr = {
      stroke: colors.black,
      "stroke-width": 2,
      fill: colors.purple
   };
   var towerIdAttr = {
      "font-size": 14,
      "font-weight": "bold",
      fill: colors.black
   };
   var axisAttr = {
      stroke: colors.black,
      "stroke-width": 1
   };
   var gridLineAttr = {
      stroke: colors.grey,
      "stroke-width": 1
   };
   var gradLabelAttr = {
      "font-size": 14,
      "font-weight": "bold",
      fill: colors.darkGrey
   };
   var xAxisLabelAttr = {
      "font-size": 14,
      "font-style": "italic",
      fill: colors.darkGrey
   };
   var borderAttr = {
      stroke: gridLineAttr,
      "stroke-dasharray": ["- "]
   };
   var zoneLineAttr = {
      stroke: colors.darkGrey
   };
   var crossroadMarkerAttr = {
      stroke: colors.darkGrey,
      "stroke-width": 2,
      fill: colors.black,
      r: streetW/2
   };
   var emoAttr = {
      circle: {
         stroke: colors.black,
         "stroke-width": 2,
         fill: colors.yellow,
         r: 15
      },
      eyes: {
         stroke: "none",
         fill: colors.black,
         r: 2
      },
      smile: {
         stroke: colors.black,
         "stroke-width": 2
      } 
   };
   var shortestLineAttr = {
      stroke: colors.yellow,
      "stroke-width": 3,
      "stroke-dasharray": ["- "]
   };
   var graphShortestLineAttr = {
      stroke: colors.yellow,
      "stroke-width": 2
   };

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      rng = new RandomGenerator(subTask.taskParams.randomSeed + level.charCodeAt(0));
      nbCol = data[level].nbCol;
      nbRows = data[level].nbRows;
      nbTowers = data[level].towers.length;
      nbMarkedCrossroads = data[level].markers.length;
      mapW = nbCol*blockW + (nbCol + 1)*streetW;
      mapH = nbRows*blockH + (nbRows + 1)*streetW;
      mapFrameH = headerH + mapH + 2*marginY;
      paperHeight = graphFrameH + marginY + mapFrameH;
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
      initPaper();
      initGraph();
      initMap();
      initHandlers();
      displayError("");
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = { seed: rng.nextInt(0,10000) };
      defaultAnswer.currMarkedCrossroads = [];
      defaultAnswer.currentPos = null;
      for(var iRow = 0; iRow <= nbRows; iRow++){
         defaultAnswer.currMarkedCrossroads[iRow] = [];
         for(var iCol = 0; iCol <= nbCol; iCol++){
            defaultAnswer.currMarkedCrossroads[iRow][iCol] = false;
         }
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
      // console.log(answer.markedCrossroads);      
      for(var iCross = 0; iCross < nbMarkedCrossroads; iCross++){
         var posMarker = data[level].itinerary[data[level].markers[iCross]];
         var row = posMarker[1];
         var col = posMarker[0];
         if(!answer.currMarkedCrossroads[row][col]){
            return { successRate: 0, message: taskStrings.error };
         }
      }
      return { successRate: 1, message: taskStrings.success };
   };
   
   function initPaper() {
      paper = subTask.raphaelFactory.create("paper","paper",paperWidth,paperHeight);

      $("#zone_2").css("position","relative");
      var overlayPos = [];
      var nbOverlays = 3;
      for(var iOverlay = 0; iOverlay < nbOverlays; iOverlay++){
         if(!$("#overlay_"+(iOverlay + 1)).length){
            $("#zone_2").append("<div id=\"overlay_"+(iOverlay + 1)+"\"></div>");
         }
      }
      $("#paper").css("touch-action","none");
      overlayPos[0] = {
         x: marginX,
         y: 0,
         w: paperWidth,
         h: graphFrameH + marginY + headerH + (mapFrameH - headerH - mapH)/2 - 10
      };
      overlayPos[1] = {
         x: marginX,
         y: graphFrameH + marginY + headerH,
         w: (paperWidth - mapW)/2 - 10,
         h: mapFrameH - headerH
      };
      overlayPos[2] = {
         x: marginX + paperWidth - (paperWidth - mapW)/2 + 10,
         y: graphFrameH + marginY + headerH,
         w: (paperWidth - mapW)/2 - 10,
         h: mapFrameH - headerH
      };
      for(var iOverlay = 0; iOverlay < nbOverlays; iOverlay++){
         var pos = overlayPos[iOverlay];
         $("#overlay_"+(iOverlay + 1)).css({
            display: "block",
            position: "absolute",
            top: pos.y + 20,
            left: pos.x,
            width: pos.w,
            height: pos.h,
            background: "red",
            opacity: 0
         });
      }
   };

   function initGraph() {
      var attr = graphWindowAttr;
      paper.rect(0,0,paperWidth,graphFrameH).attr(attr.frame);
      paper.text(paperWidth/2, headerH/2, taskStrings.distance).attr(attr.title);
      paper.path("M"+0+" "+(0 + headerH)+",H"+paperWidth).attr(attr.line);

      var x0 = 3*marginX;
      var y0 = headerH + marginY;
      paper.path("M"+x0+" "+y0+",V"+(y0 + graphH)).attr(axisAttr);
      paper.path("M"+x0+" "+(y0 + graphH)+",H"+(x0 + graphW)).attr(axisAttr);

      var nbCrossroads = data[level].itinerary.length;
      xGraduationStep = graphW/(nbCrossroads - 1);
      for(var iGrad = 0; iGrad < nbCrossroads; iGrad++){
         var xGrad = x0 + xGraduationStep*iGrad;
         paper.path("M"+xGrad+" "+(y0 + graphH)+",V"+(y0 + graphH + graduationLength));
         paper.path("M"+xGrad+" "+y0+",V"+(y0 + graphH)).attr(gridLineAttr);
      }
      paper.text(x0 + graphW/2, y0 + graphH + marginY,taskStrings.eachGrad).attr(xAxisLabelAttr);

      for(var iGrad = 0; iGrad <= nbYGrad; iGrad++){
         var yGrad = y0 + graphH - iGrad*yGraduationStep;
         paper.path("M"+x0+" "+yGrad+",H"+(x0 - graduationLength));
         paper.text((x0 - marginX),yGrad,iGrad).attr(gradLabelAttr);
      }

      drawGraph(x0,y0);
   };

   function initMap() {
      var attr = mapWindowAttr;
      var y0 = graphFrameH + marginY;
      paper.rect(0,y0,paperWidth,mapFrameH).attr(attr.frame);
      paper.text(paperWidth/2, y0 + headerH/2, taskStrings.moveEmo).attr(attr.title);
      paper.path("M"+0+" "+(y0 + headerH)+",H"+paperWidth).attr(attr.line);

      drawMap();
   }; 
/*
   function initItinerary() {
      if (level == "easy") {
         return [[0,1],[1,1],[1,0],[2,0],[3,0],[3,1],[4,1],[5,1]];
      }
      if (level == "medium") {
         return [[0,3],[1,3],[1,2],[2,2],[2,3],[3,3],[3,2],[4,2],[4,3],[5,3]];
      }
      return [[2,4],[2,3],[1,3],[1,2],[1,1],[2,1],[3,1],[3,2],[4,2],[5,2],[5,3],[6,3],[6,2],[7,2],[7,1],[6,1]];
      
      var initPos = [0,rng.nextInt(0,nbRows)];
      var pos = [];
      pos.push(initPos);
      do{
         var lastPos = pos[pos.length - 1];
         var lastX = lastPos[0];
         var lastY = lastPos[1];
         var nextMove = rng.nextInt(0,2);
         if(nextMove == 0){
            if(lastY > 0){
               var nextPos = [ lastX, lastY - 1 ];
            }else{
               var nextPos = [0];
            }
         }else if(nextMove == 1){
            var nextPos = [ lastX + 1, lastY ];
         }else{
            if(lastY < nbRows){
               var nextPos = [ lastX, lastY + 1 ];
            }else{
               var nextPos = [0];
            }
         }
         if(nextPos[0] &&
            (!pos[pos.length - 2] ||
             nextPos[0] != pos[pos.length - 2][0] ||
             nextPos[1] != pos[pos.length - 2][1])){   // no going back
            pos.push(nextPos);
         }
      }while(nextPos[0] < nbCol)

      return pos;
   };

   function initMarkedCrossroads(itinerary) {
      var iti = JSON.parse(JSON.stringify(itinerary));
      rng.shuffle(iti);
      iti.splice(nbMarkedCrossroads);
      // console.log(iti)
      return iti;
   };

   function initTowerPos() {
      var towerPos = [];
      var usedCols = [];
      var usedRows = [];
      for(var iTower = 0; iTower < nbTowers; iTower++){
         var col;
         var row;
         do{
            col = rng.nextInt(0,nbCol - 1);
            row = rng.nextInt(0,nbRows - 1);
         }while(usedCols[col] || usedRows[row]);
         var block = [col,row];
         usedCols[col] = true;
         usedRows[row] = true;
         var x = rng.nextInt(marginX/2,blockW - marginX/2);
         var y = rng.nextInt(marginY/2,blockH - marginY/2);
         var newPos = {
            block: block,
            x: x,
            y: y
         };
         towerPos.push(newPos);
      }
      return towerPos;
   }; 
*/
   function initHandlers() {
      initDrag();
      for(var iRow = 0; iRow <= nbRows; iRow++){
         for(var iCol = 0; iCol <= nbCol; iCol++){
            crossroads[iRow][iCol].click(selectCrossroad(iRow,iCol));
            crossroads[iRow][iCol].attr("cursor","pointer");
         }
      }
   };

   function initDrag() {
      // emo.drag(onMove,onStart,onEnd);
      Beav.dragWithTouch(emo, onMove, onStart, onEnd);
      emo.attr({cursor: "grab"});
      displayError("");
   };

   function drawMap() {
      var x0 = (paperWidth - mapW)/2 + streetW;
      var y0 = graphFrameH + marginY + headerH + (mapFrameH - headerH - mapH)/2 + streetW; 
      crossroads = [];
      for(var iRow = 0; iRow <= nbRows; iRow++){
         var yB = y0 + iRow*(blockH + streetW);
         var yC = yB - streetW/2;
         crossroads[iRow] = [];
         for(var iCol = 0; iCol <= nbCol; iCol++){
            var xB = x0 + iCol*(blockW + streetW);
            var xC = xB - streetW/2;

            if(iRow < nbRows && iCol < nbCol){
               paper.rect(xB,yB).attr(blockAttr)
            }
            var attrCircle;
            if(answer.currMarkedCrossroads[iRow][iCol]){
               attrCircle = crossroadMarkerAttr;
            }else{
               attrCircle = crossroadAttr;
            }
            crossroads[iRow][iCol] = paper.circle(xC,yC).attr(attrCircle);
            if(!answer.currentPos && iRow == 0 && iCol == 0){
               answer.currentPos = {
                  x: xC,
                  y: yC
               };
            }
         }
      }
      dragLimit = {
         xMin: x0 - streetW/2,
         xMax: x0 - streetW/2 + nbCol*(blockW + streetW),
         yMin: y0 - streetW/2,
         yMax: y0 - streetW/2 + nbRows*(blockH + streetW)
      };
      
      var towerPos = data[level].towers;
      for(var iTower = 0; iTower < towerPos.length; iTower++){
         var pos = towerPos[iTower];
         var xBlock = x0 + pos.block[0]*(blockW + streetW);
         var yBlock = y0 + pos.block[1]*(blockH + streetW);
         var x = xBlock + pos.x;
         var y = yBlock + pos.y;
         getShape(paper,"diamond",x,y,8).attr(towerAttr);
         if (level == "easy") {
            var xId = (pos.x < blockW/2) ? x + marginX : x - marginX;
            paper.text(xId,y,(iTower + 1)).attr(towerIdAttr);
         }
      }
      drawEmo(answer.currentPos.x,answer.currentPos.y);
      drawShortestLine({x:emo[0].attr("cx"),y:emo[0].attr("cy")})
   };

   function drawEmo(x,y) {
      var attr = emoAttr;
      var r = attr.circle.r;
      var circle = paper.circle(x,y).attr(attr.circle);
      var leftEye = paper.circle(x - r/4, y - r/5).attr(attr.eyes);
      var rightEye = paper.circle(x + r/4, y - r/5).attr(attr.eyes);
      var smile = paper.path("M"+(x - r/4)+" "+(y + r/4)+",S"+(x)+" "+(y + r/2)+" "+(x + r/4)+" "+(y + r/4)).attr(attr.smile);
      emo = paper.set(circle,leftEye,rightEye,smile);
   };

   function drawShortestLine(pos) {
      var relativePos = {
         x: pos.x - dragLimit.xMin + streetW/2,
         y: pos.y - dragLimit.yMin + streetW/2
      };
      var closestTower = getClosestTower(relativePos);
      var xTower = towerCoord[closestTower.ID].x + dragLimit.xMin - streetW/2;
      var yTower = towerCoord[closestTower.ID].y + dragLimit.yMin - streetW/2;
      if(shortestLine){
         shortestLine.remove();
      }
      shortestLine = paper.path("M"+pos.x+" "+pos.y+",L"+xTower+" "+yTower).attr(shortestLineAttr);
      emo.toFront();
      var yGraph = headerH + marginY + graphH - closestTower.distance*(graphH - marginY)/maxDistance;
      var xGraph = 3*marginX;
      if(graphShortestLine){
         graphShortestLine.remove();
      }
      graphShortestLine = paper.path("M"+xGraph+" "+yGraph+",H"+(xGraph + graphW)).attr(graphShortestLineAttr);
   };

   function drawGraph(x0,y0) {
      var pointsData = getGraphPoints(x0,y0);
      var points = pointsData.points;
      maxDistance = pointsData.maxDistance;
      var nearestTower = pointsData.nearestTower;
      var markedPos = pointsData.markedPos;
      for(var iPoint = 0; iPoint < points.length; iPoint++){
         if(iPoint < points.length - 1){
            var x = points[iPoint].x;
            var y = y0 + graphH - (points[iPoint].d)*(graphH - marginY)/maxDistance;
            var x2 = points[iPoint + 1].x;
            var y2 = y0 + graphH - points[iPoint + 1].d*(graphH - marginY)/maxDistance;
            paper.path("M"+x+" "+y+",L"+x2+" "+y2);
         }
      }
      if(level == "easy"){

         for(var iTower = 0; iTower < nearestTower.length; iTower++){
            var tower = nearestTower[iTower];
            var x = tower.x;
            var id = tower.towerID + 1;
            if(iTower > 0){
               paper.path("M"+x+" "+(y0 + graphH)+",V"+y0).attr(borderAttr);
            }
            var x1 = (iTower == 0) ? x0 : x;
            var x2 = (iTower < nearestTower.length - 1) ? nearestTower[iTower + 1].x : (x0 + graphW);
            var xTower = (x2 + x1)/2 - 8; 
            var xTowerID = (x2 + x1)/2 + 8;
            getShape(paper,"diamond",xTower,y0,8).attr(towerAttr);
            paper.text(xTowerID,y0,id).attr(towerIdAttr); 
            if(x1 + marginX/4 < xTower - marginX/2 && x2 - marginX/4 > xTowerID + marginX/4){
               paper.path("M"+(x1 + marginX/4)+" "+y0+",H"+(xTower - marginX/2)+",M"+(xTowerID + marginX/4)+" "+y0+",H"+(x2 - marginX/4)).attr(zoneLineAttr);
            }
         }
      }

      for(var iMarked = 0; iMarked < nbMarkedCrossroads; iMarked++){
         var pos = markedPos[iMarked];
         var y = y0 + graphH - pos.d*(graphH - marginY)/maxDistance;
         paper.circle(pos.x,y).attr(crossroadMarkerAttr);
      }
   };
   
   function getClosestTower(pos) {
      var distanceFromTowers = getDistanceFromTowers(pos);
      var minDistance = Infinity;
      var towerID = 0;
      for(var iTower = 0; iTower < nbTowers; iTower++){
         if(distanceFromTowers[iTower] < minDistance){
            minDistance = distanceFromTowers[iTower];
            towerID = iTower;
         }
      }
      return {
         ID: towerID,
         distance: minDistance
      };
   }

   function isCrossroadMarked(pos) {
      for(var iMarked = 0; iMarked < nbMarkedCrossroads; iMarked++){
         var posMarker = data[level].itinerary[data[level].markers[iMarked]];
         if((pos[0] == posMarker[0]) && (pos[1] == posMarker[1])){
            return true;
         }
      }
      return false;
   }

   function getGraphPoints(x0,y0) {
      var itinerary = JSON.parse(JSON.stringify(data[level].itinerary));
      getTowerCoordinates();
      var points = [];
      var iStreet = 0;
      var maxDistance = 0;
      var towerID = null;
      var nearestTower = [];
      var markedPos = [];
      do{
         var start = itinerary.shift();
         var end = itinerary[0];
         startCoord = {
            x: streetW/2 + start[0]*(blockW + streetW),
            y: streetW/2 + start[1]*(blockH + streetW)
         };
         endCoord = {
            x: streetW/2 + end[0]*(blockW + streetW),
            y: streetW/2 + end[1]*(blockH + streetW)
         };
         var streetLength = Math.abs((endCoord.y - startCoord.y) + (endCoord.x - startCoord.x));
         
         var startMarked = isCrossroadMarked(start);
         var endMarked = isCrossroadMarked(end) && (itinerary.length == 1);
         
         var nbSteps = Math.floor(Math.abs(streetLength) / stepLength);
         for(var iStep = 0; iStep < nbSteps; iStep++){
            var distOnStreet = iStep * stepLength;
            var currPos = {
               x: startCoord.x + (endCoord.x - startCoord.x) * distOnStreet / streetLength,
               y: startCoord.y + (endCoord.y - startCoord.y) * distOnStreet / streetLength
            };

            var closestTower = getClosestTower(currPos);
            maxDistance = Math.max(maxDistance,closestTower.distance);

            var xPoint = Math.round(x0 + (iStreet + distOnStreet / streetLength)*xGraduationStep);
            var dist = Math.round(closestTower.distance);
            points.push({x:xPoint,d:dist});
            
            if(towerID == null || closestTower.ID != towerID){
               towerID = closestTower.ID;
               nearestTower.push({towerID: towerID,x:xPoint});
            }
            if ((startMarked && iStep == 0) ||
                (endMarked && iStep == nbSteps - 1)) {
               markedPos.push({x:xPoint,d:dist}); 
            }
         }
         iStreet++;
      }while(itinerary.length > 1)
      return {
         points: points,
         maxDistance: maxDistance,
         nearestTower: nearestTower,
         markedPos: markedPos
      };
   };

   function getTowerCoordinates() {
      for(var iTower = 0; iTower < nbTowers; iTower++){
         var pos = data[level].towers[iTower];
         var coord = {
            x: streetW + pos.block[0]*(blockW + streetW) + pos.x,
            y: streetW + pos.block[1]*(blockH + streetW) + pos.y
         };
         towerCoord.push(coord);
      }
   };

   function getDistanceFromTowers(pos) {
      var distance = [];
      for(var iTower = 0; iTower < nbTowers; iTower++){
         var tower = towerCoord[iTower];
         var d = Beav.Geometry.distance(pos.x,pos.y,tower.x,tower.y);
         distance[iTower] = d;
      }
      return distance;
   };

   function onStart(x,y,event) {
      if(dragging){
         return
      }
      // console.log("start")

      dragging = true;
      emo.toFront();
      answer.currentPos = {
         x: emo[0].attr("cx"),
         y: emo[0].attr("cy")
      }
   };

   function onMove(dx,dy,x,y,event) {
      // console.log("move")
      var xMouse = x - $("#paper").offset().left;
      var yMouse = y - $("#paper").offset().top;

      answer.currentPos = getCloserStreetPos(xMouse,yMouse);
      var xi = emo[0].attr("cx");
      var yi = emo[0].attr("cy");

      var dxCorr = answer.currentPos.x - xi;
      var dyCorr = answer.currentPos.y - yi;
      emo.transform("t"+dxCorr+" "+dyCorr);

      drawShortestLine(answer.currentPos);
   };

   function onEnd(event) {
      // console.log("end")
      dragging = false;
      emo.remove();
      drawEmo(answer.currentPos.x, answer.currentPos.y);
      initDrag();
      // console.log("end_end")
   };

   function getCloserStreetPos(x,y) {
      var minDistance = Infinity;
      var streetData;
      var xStreet = null;
      var yStreet = null;
      for(var iRow = 0; iRow <= nbRows; iRow++){
         var yRow = dragLimit.yMin + iRow*(blockH + streetW);
         var d = Math.abs(y - yRow);
         if(d < minDistance){
            minDistance = d;
            yStreet = yRow;
            xStreet = null;
         }
      }
      for(var iCol = 0; iCol <= nbCol; iCol++){
         var xCol = dragLimit.xMin + iCol*(blockW + streetW);
         var d = Math.abs(x - xCol);
         if(d < minDistance){
            minDistance = d;
            xStreet = xCol;
            yStreet = null;
         }
      }
      if(xStreet == null){
         xStreet = Math.min(x,dragLimit.xMax);
         xStreet = Math.max(xStreet,dragLimit.xMin);
         for(var iCol = 0; iCol <= nbCol; iCol++){
            var xCol = dragLimit.xMin + iCol*(blockW + streetW);
            if(Math.abs(xCol - xStreet) < marginX / 2){
               xStreet = xCol;
               break;
            }
         }
      }else{
         yStreet = Math.min(y,dragLimit.yMax);
         yStreet = Math.max(yStreet,dragLimit.yMin);
         for(var iRow = 0; iRow <= nbRows; iRow++){
            var yRow = dragLimit.yMin + iRow*(blockH + streetW);
            if(Math.abs(yRow - yStreet) < marginY / 2){
               yStreet = yRow;
               break;
            }
         }
      }
      return {x: xStreet, y: yStreet};
   };

   function selectCrossroad(row,col) {
      return function() {
         displayError("");
         var current = answer.currMarkedCrossroads;
         if(!current[row][col]){
            var nbMarked = 0;
            for(var iRow = 0; iRow <= nbRows; iRow++){
               for(var iCol = 0; iCol <= nbCol; iCol++){
                  if(current[iRow][iCol]){
                     nbMarked++;
                  }
               }
            }
            if(nbMarked >= nbMarkedCrossroads){
               displayError(taskStrings.tooManyMarkers(nbMarkedCrossroads));
               return
            }
            current[row][col] = true;
            crossroads[row][col].attr(crossroadMarkerAttr);
         }else{
            current[row][col] = false;
            crossroads[row][col].attr(crossroadAttr);
         }
      }
   };

   function displayError(msg) {
      $("#error").html(msg);
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
