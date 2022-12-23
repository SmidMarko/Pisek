// Cohen-Sutherland line clippign algorithmf, adapted to efficiently
// handle polylines rather than just segments

function polylineclip(points, bbox, result) {

    var len = points.length,
        codeA = bitCode(points[0], bbox),
        part = [],
        i, a, b, codeB, lastCode;

    if (!result) result = [];

    for (i = 1; i < len; i++) {
        a = points[i - 1];
        b = points[i];
        codeB = lastCode = bitCode(b, bbox);

        while (true) {

            if (!(codeA | codeB)) { // accept
                part.push(a);

                if (codeB !== lastCode) { // segment went outside
                    part.push(b);

                    if (i < len - 1) { // start a new line
                        result.push(part);
                        part = [];
                    }
                } else if (i === len - 1) {
                    part.push(b);
                }
                break;

            } else if (codeA & codeB) { // trivial reject
                break;

            } else if (codeA) { // a outside, intersect with clip edge
                a = intersect(a, b, codeA, bbox);
                codeA = bitCode(a, bbox);

            } else { // b outside
                b = intersect(a, b, codeB, bbox);
                codeB = bitCode(b, bbox);
            }
        }

        codeA = lastCode;
    }

    if (part.length) result.push(part);

    return result;
}

// intersect a segment against one of the 4 lines that make up the bbox

function intersect(a, b, edge, bbox) {
    return edge & 8 ? [a[0] + (b[0] - a[0]) * (bbox[3] - a[1]) / (b[1] - a[1]), bbox[3]] : // top
           edge & 4 ? [a[0] + (b[0] - a[0]) * (bbox[1] - a[1]) / (b[1] - a[1]), bbox[1]] : // bottom
           edge & 2 ? [bbox[2], a[1] + (b[1] - a[1]) * (bbox[2] - a[0]) / (b[0] - a[0])] : // right
           edge & 1 ? [bbox[0], a[1] + (b[1] - a[1]) * (bbox[0] - a[0]) / (b[0] - a[0])] : // left
           null;
}

// bit code reflects the point position relative to the bbox:

//         left  mid  right
//    top  1001  1000  1010
//    mid  0001  0000  0010
// bottom  0101  0100  0110

function bitCode(p, bbox) {
    var code = 0;

    if (p[0] < bbox[0]) code |= 1; // left
    else if (p[0] > bbox[2]) code |= 2; // right

    if (p[1] < bbox[1]) code |= 4; // bottom
    else if (p[1] > bbox[3]) code |= 8; // top

    return code;
}

function initTask(subTask) {
   var state = {};
   var answer = null;
   var data = {
      rows: 1,
      cols: 28,
      start: {
         row: 0,
         col: 0
      }
   };

   var rows;
   var cols;
   var regions;
   
   var deltaRow = 0;
   var deltaCol = 0;
   var scale = 1;
   var scales = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072];
   var arrows = [];
   var curArrow = 0;
   var curArrowRect = null;

   var paper1;
   var paper2;
   var paperWidth;
   var paperHeight;
   var gridWidth;
   var gridHeight;
   var grid;
   var whitePadding;
   
   var curTargetRegion = null;

   var cellHighlight;
   var dotCurrentPos;
   var arrowsSet1;
   var arrowsSet2;
   var nextRegionLine;
   var clickPaths;
   var ignoreClicks;
   var clickDelay = 500;
   var gridBorder;
   var regionElements = [];
   var arrowElements = [];
   var recordedSteps = [];
   var recordingSteps = false;
   var arrowCellSide = 100;
   var arrowCellPadding = 10;
   var arrowCellsLeft = 5;
   var arrowCellsTop = 5;
   var maxNbArrows = 10;
   var nbArrowCellsColumns = 5;
   var arrowCellsRects = [];
   var minScaleForSelectedCell = 4;
   var minRegionSide = 4;
   var minHeightOneRow = 16;
   var cellHeight = 0;

   if (is2D) {
      nbArrowCellsColumns = 2;
      minHeightOneRow = 0;
      maxNbArrows = 8;
      data.cols = 15;
      data.rows = 15;
   }
   
   var arrowCellAttr = {
      stroke: "black",
      "stroke-width": 1,
      "fill-opacity": 0,
      fill: "white"
   };

   var selectedArrowCellAttr = {
      stroke: "red",
      "stroke-width": 3,
      "fill-opacity": 0,
      fill: "white"
   };

   var gridParams = {
      cellWidth: 26,
      cellHeight: 26,
      lineAttr: {
         stroke: "gray",
         "stroke-width": 1
      },
      regionLineAttr: {
         stroke: "black",
         "stroke-width": 3
      },
      regionLineScaleAttr: {
         stroke: "black",
         "stroke-width": 1
      },
      regionLineScaleSelectedAttr: {
         stroke: "black",
         "stroke-width": 1,
         fill: "#aaaaaa"
      },
      regionTextAttr: {
         "font-size": 18
      },
      regionSelectAttr: {
         fill: "#aaaaaa"
      },
      regionIndexOffset: -14,
      padding: 20,
      dotAttr: {
         r: 4,
         fill: "black"
      },
      tmpArrow: {
         stroke: "#808080",
         "stroke-width": 2,
         "stroke-linecap": "round",
      },
      arrowAttr: {
         stroke: "#B40404",
         "stroke-width": 4,
         "stroke-linecap": "round",
      },
      arrowScaledAttr: {
         stroke: "#B40404",
         "stroke-width": 2,
         "stroke-linecap": "round",
      },
      nextRegionLineAttr: {
         stroke: "#808080",
         "stroke-width": 3,
         "stroke-linecap": "round",
         "stroke-dasharray":"."
      },
      arrowChopPrefix: 8,
      arrowEdgeDiffX: 15,
      arrowEdgeDiffY: 12,
      whitePadding: {
         fill: "white",
         stroke: "none"
      },
      clickPathAttr: {
         stroke: "green",
         "stroke-width": 30,

         // This enables clicking on invisible paths in IE6.
         opacity: 0.01
      }
   };

   subTask.load = function(views, callback) {
      displayHelper.avatarType = "laptop";
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 120;
      $("#stopRecording").hide();
      $("#startRecording").show();
      $("#messageArrow").html("");
      $("#scale").val(0);

      rows = data.rows;
      cols = data.cols;

      var genData;
      if (is2D) {
         genData = genProblem2D(4, 0);
      } else {
         genData = genProblem1D(10, 10 ,4);
      }

      data.initialArrows = genData.initialArrows;
      data.regions = genData.regions;
      regions = data.regions;


      function setupClickScale(iScale) {
         $("#scale" + scales[iScale]).click(function() { changeScale(scales[iScale]); });      
      }
      for (var iScale = 0; iScale < scales.length; iScale++) {
         setupClickScale(iScale);
      }
      $("#nbTotal").html(regions.length);
      $("#center").click(clickCenter);
      $('#scale').on("change", changeSlider);
      $("#startRecording").click(startRecordingSteps);
      $("#stopRecording").click(stopRecordingSteps);
      $("#deleteArrow").click(deleteArrow);
      answer = subTask.getDefaultAnswerObject();


      if (subTask.display) {
         subTask.resetDisplay();
      }
      callback();
   };

   function lineclip(p1, p2) {
      var bbox = [0, 0, paperWidth, paperHeight]
      var result = [];
      result = polylineclip([[p1.x, p1.y],[p2.x, p2.y]], bbox, result);      
      if (result.length > 0) {
         p1.x = result[0][0][0];
         p1.y = result[0][0][1];
         p2.x = result[0][1][0];
         p2.y = result[0][1][1];
      } else {
         p1.x = -1;
         p1.y = -1;
         p2.x = -1;
         p2.y = -1;
      }
   }


function add(u,v,k) {
   var w = [u[0] + k * v[0], u[1] + k * v [1]];   
   if ((w[0] < 0) || ((w[0] == 0) && (w[1] < 0))) {
      w[0] = -w[0];
      w[1] = -w[1];
   }
   return w;
}

function genProblem2D(fibo, additions) {
   var randomGenerator = new RandomGenerator(subTask.taskParams.randomSeed);
   var u = [randomGenerator.nextInt(30, 50), 21];
   var v = [0, randomGenerator.nextInt(20, 30)];
   var u0 = u;
   var v0 = v;
   var basisAdd = [];
   for (var depth = 0; depth < fibo; depth++) {
      basisAdd.push(1);
   }
   for (var iAddition = 0; iAddition < additions; iAddition++) {
      var k = randomGenerator.nextInt(0, fibo - 1);
      basisAdd[k]++;
   }
   for (var depth = 0; depth < fibo; depth++) {
      var uOld = u;
      u = v;
      v = add(uOld, u, basisAdd[depth]);
   }
   zones = [];
   zones.push(add((add(v, v, 2)), u, -1));
   zones.push(add(add(u0, v, 3), v0, -2));
   zones.push(add(v0, u0, 3));
   zones.push(add(u0, v0, 17 + randomGenerator.nextInt(-2, 2)));
   zones.push(add(add(v0, u0, 73 + randomGenerator.nextInt(-2,2)), v0, 50 + randomGenerator.nextInt(-4, 4)));
   
   var regions = []
   for (var iZone = 0; iZone < zones.length; iZone++) {
      var zone = zones[iZone];
      var dRow = randomGenerator.nextInt(0, 1);
      var dCol = randomGenerator.nextInt(0, 1);
      zone = add(zone, [dRow, dCol], -1);
      var region = { topLeft: { row: zone[0], col: zone[1] } };
      region.letters = [];
      for (var iRow = 0; iRow <  2; iRow++) {
         var rowLetters = [];
         for (var iLetter = 0; iLetter < 2; iLetter++) {
            rowLetters.push("" + (iRow * 2 + iLetter + 1));
         }
         region.letters.push(rowLetters);
      }
      regions.push(region);
   }
   return {
      initialArrows: [
         { dRow: u[0], dCol: u[1]},
         { dRow: v[0], dCol: v[1]}
      ],
      regions: regions
   };
}
   
   
   function oldGenProblem2D(fibo, additions, nbZones) {
      var randomGenerator = new RandomGenerator(subTask.taskParams.randomSeed);
      var u = [randomGenerator.nextInt(2, 5), 0];
      var v = [0, randomGenerator.nextInt(2, 5)];
      var basisAdd = [];
      for (var depth = 0; depth < fibo; depth++) {
         basisAdd.push(1);
      }
      for (var iAddition = 0; iAddition < additions; iAddition++) {
         var k = randomGenerator.nextInt(0, fibo - 1);
         basisAdd[k]++;
      }
      var zones = [];
      for (var depth = 0; depth < fibo; depth++) {
         if (depth % 3 == 1) {
            var k = 0;
            var newZone = 0;
            var zonesUsed = {};
            while (k == 0 || zonesUsed[newZone]) {
               k = randomGenerator.nextInt(-3, 3);
               newZone = [v[0] * k + u[0], v[1] * k + u[1]];
            }
            zones.push(newZone);
         }
         var prevU = u;
         u = v;
         v = [basisAdd[depth] * u[0] + prevU[0], basisAdd[depth] * u[1] + prevU[1]];
      }
      var regions = []
      for (var iZone = zones.length - 1; iZone >= Math.max(zones.length - 1 - nbZones, 0); iZone--) {
         var zone = zones[iZone];
         var dRow = randomGenerator.nextInt(0, 2);
         var dCol = randomGenerator.nextInt(0, 2);
         var region = { topLeft: { row: zone[0] - dRow, col: zone[1] - dCol } };
         region.letters = [];
         for (var iRow = 0; iRow <  2; iRow++) {
            var rowLetters = [];
            for (var iLetter = 0; iLetter < 2; iLetter++) {
               rowLetters.push("" + (iLetter + 1));
            }
            region.letters.push(rowLetters);
         }
         regions.push(region);
      }
      return {
         initialArrows: [
            { dRow: u[0], dCol: u[1]},
            { dRow: v[0], dCol: v[1]}
         ],
         regions: regions
      };
   }
   
   
   /*
     - fibo is the 'depth' of the problem in terms of level of substraction (as in Fibonacci)
     - additions is the number of additional substractions to add some randomness
     - size is the size of a zone (multiplication factor for the output)
     
     returns a tuple: the base (table of two numbers) and a list of zones (sorted by difficulty).
   */
   function genProblem1D(fibo, additions, size) {
      var randomGenerator = new RandomGenerator(subTask.taskParams.randomSeed);
      var u = 1;
      var v = 1;
      var basisAdd = [];
      for (var depth = 0; depth < fibo; depth++) {
         basisAdd.push(1);
      }
      var zones = [];
      for (var iAddition = 0; iAddition < additions; iAddition++) {
         var k = randomGenerator.nextInt(0, fibo - 1);
         basisAdd[k]++;
      }
      for (var depth = 0; depth < fibo; depth++) {
         if (depth % 2 == 1) {
            var k = 0;
            var newZone = 0;
            var zonesUsed = {};
            while (k == 0 || zonesUsed[newZone]) {
               k = randomGenerator.nextInt(-3, 3);
               newZone = v * k + u;
            }
            zones.push(newZone);
         }
         var prevU = u;
         u = v;
         v = basisAdd[depth] * u + prevU;
      }
      var regions = []
      for (var iZone = zones.length - 1; iZone >= 0; iZone--) {
         var zone = zones[iZone];
         var delta = randomGenerator.nextInt(0, size - 1);
         var region = { topLeft: { row: 0, col: size * zone - delta } };
         region.letters = [[]];
         for (var iLetter = 0; iLetter < size; iLetter++) {
            region.letters[0].push("" + (iLetter + 1));
         }
         regions.push(region);
      }
      return {
         initialArrows: [
            { dRow: 0, dCol: u * size},
            { dRow: 0, dCol: v * size}
         ],
         regions: regions
      };
   }

   function startRecordingSteps() {
      $("#deleteArrow").hide();
      if (answer.arrows.length >= maxNbArrows) {
         $("#messageArrow").html("Vous devez supprimer une flèche avant d'en créer une nouvelle.");
         return;
      }
      $("#messageArrow").html("Effectuez des déplacements<br/>pour définir une nouvelle flèche.");
      $("#stopRecording").show();
      $("#startRecording").hide();
      recordingSteps = true;
      recordedSteps = [{row: answer.currentCell.row, col: answer.currentCell.col }];
   };
   
   function getNewDirection() {
      var firstStep = recordedSteps[0];
      var lastStep = recordedSteps[recordedSteps.length - 1];
      var newDirection = {
         dRow: lastStep.row - firstStep.row,
         dCol: lastStep.col - firstStep.col
      };
      return newDirection;
   }
   
   function stopRecordingSteps(caller, skipRecording) {
      $("#deleteArrow").show();
      $("#stopRecording").hide();
      $("#startRecording").show();
      $("#messageArrow").html("");
      $("#recordedArrow").hide();
      recordingSteps = false;
      if (recordedSteps.length == 0) {
         $("#messageArrow").html("Pas de flèche créée : vous n'avez effectué aucun déplacement.");
         return;
      }
      var newDirection = getNewDirection();
      if (newDirection.dCol < 0) {
         newDirection.dCol = -newDirection.dCol;
         newDirection.dRow = -newDirection.dRow;
      }
     recordedSteps = [];
      if ((newDirection.dRow == 0) && (newDirection.dCol == 0)) {
         $("#messageArrow").html("Pas de flèche créée : votre déplacement retourne à son point de départ.");
         return;
      }
      var allDirections = getAvailableDirections();
      for (var iDir = 0; iDir < allDirections.length; iDir++) {
         var direction = allDirections[iDir];
         if ((newDirection.dRow == direction.dRow) && (newDirection.dCol == direction.dCol)) {
            $("#messageArrow").html("Pas de flèche créée : votre déplacement est identique à une flèche existante.");
            return;
         }
      }
      $("#messageArrow").html("");
      if (skipRecording == undefined) {
         answer.arrows.push(newDirection);     
      }
      refreshArrows();
   };

   function deleteArrow() {
      $("#messageArrow").html("");
      if (curArrow < data.initialArrows.length) {
         $("#messageArrow").html("Impossible de supprimer les flèches initiales.");
         return;
      }
      displayHelper.showPopupMessage("Confirmez-vous la suppression de la flèche sélectionnée ?", "blanket", "Oui", confirmedDeleteArrow, "Non", function() {});
   }
  
   
   function confirmedDeleteArrow() {
      arrowCellsRects[curArrow].attr(arrowCellAttr);
      answer.arrows.splice(curArrow, 1);
      curArrow--;
      arrowCellsRects[curArrow].attr(selectedArrowCellAttr);
      refreshArrows();
   }
   
   subTask.getStateObject = function() {
      return state;
   };

   subTask.reloadAnswerObject = function(answerObj) {
      answer = answerObj;
      if(!answer) {
         return;
      }

      if (paper1) {
         updateDelta();
         stopRecordingSteps(null, true);
         refreshAll();
      }
   };
   
   function changeScale(newScale) {
      scale = newScale;
      if (gridBorder) {
         gridBorder.remove();
      }
      updateDelta();
      cellHeight = Math.max(minHeightOneRow, gridParams.cellHeight / scale);
      if (scale != 1) {
         if(grid) {
            grid.remove();
            grid = null;
         }
         var height = gridHeight;
         if (rows == 1) {
            height = cellHeight;
         }
         gridBorder = paper1.rect(gridParams.padding, gridParams.padding, gridWidth, height);
      } else {
         if (grid == null) {
            initGrid();
         }
      }
      refreshAll();
  };
  
   function refreshAll() {
      if (answer == null) {
         return;
      }
      refreshRegionsDisplay()
      refreshCurrentCell();
      refreshNextRegion()
      refreshArrows();
   }
   
   function changeSlider() {
      var value = parseInt($("#scale").val());
      var newScale = scales[value];
      $("#strScale").html(newScale);
      changeScale(newScale);
   }
   
   function clickCenter() {
      changeScale(scale);
   }
   
   function updateDelta() {
      if (answer == null) {
         return;
      }
      deltaRow = -answer.currentCell.row + Math.floor(rows * scale / 2);
      deltaCol = -answer.currentCell.col + Math.floor(cols * scale / 2);
      if (rows == 1) {
         deltaRow = 0;
      }
   }

   subTask.resetDisplay = function() {
      showFeedback(null);
      ignoreClicks = false;
      initPaper();
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var arrows = [];
      for (var iArrow = 0; iArrow < data.initialArrows.length; iArrow++) {
         arrows.push(data.initialArrows[iArrow]);
      }
      return {
         currentCell: {
            row: data.start.row,
            col: data.start.col
         },
         selections: Beav.Array.make(regions.length, null),
         arrows: arrows
      };
   };

   subTask.unload = function(callback) {
      if(grid) {
         grid.remove();
         grid = null;
      }
      for (var iScale = 0; iScale < scales.length; iScale++) {
         $("#scale" + scales[iScale]).off("click");
      }
      $("#center").off("click");
      $('#scale').off("change");
      $("#startRecording").off("click");
      $("#stopRecording").off("click");
      $("#deleteArrow").off("click");
      callback();
   };

   function initPaper() {
      gridWidth = gridParams.cellWidth * cols;
      gridHeight = gridParams.cellHeight * rows;
      paperWidth = gridParams.padding * 2 + gridWidth;
      paperHeight = gridParams.padding * 2 + gridHeight;
      if (rows == 1) {
         paperHeight += 130;
      }
      var paper2Height = arrowCellsTop + Math.ceil(maxNbArrows / nbArrowCellsColumns) * (arrowCellSide + arrowCellPadding)
      paper1 = subTask.raphaelFactory.create("anim", "anim", paperWidth, paperHeight);
      paper2 = subTask.raphaelFactory.create("anim2", "anim2", 700, paper2Height);

      // White padding covers the wrapped arrows.
      paper1.setStart();
      paper1.rect(0, 0, gridParams.padding - 1, paperHeight).attr(gridParams.whitePadding);
      paper1.rect(gridParams.padding + gridWidth + 1, 0, paperWidth - (gridWidth + 1), paperHeight).attr(gridParams.whitePadding);
      paper1.rect(0, 0, gridWidth + gridParams.padding * 2, gridParams.padding - 1).attr(gridParams.whitePadding);
      paper1.rect(0, paperHeight - gridParams.padding + 1, gridWidth + gridParams.padding * 2, gridParams.padding * 2).attr(gridParams.whitePadding);
      whitePadding = paper1.setFinish();
      
      function setClickCell(rect, col, row) {
         rect.click(function() {
            var newArrow = row * nbArrowCellsColumns + col;
            if (newArrow >= answer.arrows.length) {
               return;
            }
            arrowCellsRects[curArrow].attr(arrowCellAttr);
            curArrow = newArrow;
            curArrowRect = rect;
            arrowCellsRects[curArrow].attr(selectedArrowCellAttr);
            refreshArrows();
         });
      }
      
      arrowCellsRects = [];
      for (var rowArrows = 0; rowArrows < maxNbArrows / nbArrowCellsColumns; rowArrows++) {
         for (var colArrows = 0; colArrows < nbArrowCellsColumns; colArrows++) {
            var x = arrowCellsLeft + (arrowCellSide + arrowCellPadding) * colArrows;
            var y = arrowCellsTop + (arrowCellSide + arrowCellPadding) * rowArrows;
            var rect = paper2.rect(x, y, arrowCellSide, arrowCellSide);
            arrowCellsRects.push(rect);            
            if (colArrows + rowArrows * nbArrowCellsColumns == curArrow) {
               rect.attr(selectedArrowCellAttr);
            } else {
               rect.attr(arrowCellAttr);
            }
            setClickCell(rect, colArrows, rowArrows);
         }
      }

      changeScale(1);
   }

   function initGrid() {
      grid = new Grid("anim", paper1, rows, cols, gridParams.cellWidth, gridParams.cellHeight, gridParams.padding, gridParams.padding, gridParams.lineAttr);
   }

   function foundRegion(regionIndex, row, col) {
      answer.selections[regionIndex] = {
         row: row,
         col: col
      };
      refreshNextRegion();
   }

   function refreshNextRegion() {
      var nbRemaining = 0;
      curTargetRegion = null;
      for (var iRegion = 0; iRegion < regions.length; iRegion++) {
         if (answer.selections[iRegion] == null) {
            if (nbRemaining == 0) {
               curTargetRegion = iRegion;
            }
            nbRemaining++;
         }
      }
      $("#nbRemaining").html(nbRemaining);
      if (nbRemaining == 0) {
         $("#nextRegionMessage").hide();
         $("#allRegionsMessage").show();
      } else {
         $("#nexTRegionMessage").show();;
         $("#allRegionsMessage").hide();
         var nextRegion = data.regions[curTargetRegion];
         var dRow = nextRegion.topLeft.row - answer.currentCell.row;
         var dCol = nextRegion.topLeft.col - answer.currentCell.col;
         var message = dCol;
         if (rows > 1) {
            message += "," + dRow;
         }
         $("#nextRegion").html(message);
      }

      
      if (!paper1) {
         return;
      }

      if (nextRegionLine) {
         nextRegionLine.remove();
      }
      if (nbRemaining > 0) {
         var sourceCenter = getVirtualCenter(answer.currentCell);
         var regionTopLeft = nextRegion.topLeft;
         var targetPos = {
            row: regionTopLeft.row + nextRegion.letters.length / 2,
            col: regionTopLeft.col + nextRegion.letters[0].length / 2
         };
         var targetCenter = getVirtualPos(targetPos);
         lineclip(sourceCenter, targetCenter);
         nextRegionLine = paper1.path([
            "M", sourceCenter.x, sourceCenter.y,
            "L", targetCenter.x, targetCenter.y
         ]).attr(gridParams.nextRegionLineAttr);
      }
   }
   

   function refreshRegionsDisplay() {
      for (var iElement = 0; iElement < regionElements.length; iElement++) {
         regionElements[iElement].remove();
      }
      $.each(regions, refreshRegionDisplay);
   }

   function refreshRegionDisplay(index) {
      if (answer == null) {
         return;
      }
      var region = regions[index];
      var letters = region.letters;

      if ((scale <= minScaleForSelectedCell) && (answer.selections[index] != null)) {
         var position = getVirtualPos(answer.selections[index]);         
         regionElements.push(paper1.rect(position.x, position.y, gridParams.cellWidth / scale, cellHeight).attr(gridParams.regionSelectAttr));
      }
      if (scale == 1) {
         // Letters text.
         for(var regionRow = 0; regionRow < letters.length; regionRow++) {
            var letterRow = letters[regionRow];
            for(var regionCol = 0; regionCol < letterRow.length; regionCol++) {
               var letter = letterRow[regionCol];
               var cell = {
                  row: region.topLeft.row + regionRow,
                  col: region.topLeft.col + regionCol
               };
               var posCenter = getVirtualCenter(cell);
               var letterElement = paper1.text(posCenter.x, posCenter.y, letter).attr(gridParams.regionTextAttr);
               letterElement[0].style.cursor = "default";
               regionElements.push(letterElement);
            }
         }
      }

      // Border.
      var topLeftPos = getVirtualPos(region.topLeft);
      var bottomRightPos = getVirtualPos({ row: region.topLeft.row + letters.length, col: region.topLeft.col + letters[0].length});
      var regionWidth = Math.max(minRegionSide, letters[0].length * gridParams.cellWidth / scale);
      var regionHeight = Math.max(minRegionSide, letters.length * cellHeight);
      var attr = gridParams.regionLineAttr;
      if (scale > minScaleForSelectedCell) {
         if (answer.selections[index] == null) {
            attr = gridParams.regionLineScaleAttr;
         } else {
            attr = gridParams.regionLineScaleSelectedAttr;
         }
      }
      var rect = paper1.rect(topLeftPos.x, topLeftPos.y, regionWidth, regionHeight).attr(attr);
      regionElements.push(rect);
   }

   function forEachInRegion(index, callback) {
      var region = regions[index];
      for(var regionRow = 0; regionRow < region.letters.length; regionRow++) {
         for(var regionCol = 0; regionCol < region.letters[regionRow].length; regionCol++) {
            callback(region.topLeft.row + regionRow, region.topLeft.col + regionCol, regionRow, regionCol);
         }
      }
   }
   
   function getAvailableDirections(onlyCurrent) {
      var directions = [];
      for(var iDirection = 0; iDirection < answer.arrows.length; iDirection++) {
         if (onlyCurrent && (curArrow != iDirection)) {
            continue;
         }
         var direction = answer.arrows[iDirection];
         var oppositeDirection = { dRow: -direction.dRow, dCol: -direction.dCol };
         directions.push(direction);
         directions.push(oppositeDirection);
      }
      return directions;
   }
   
   function normalizeArrow(direction, newLength) {
      var arrowLength = Math.sqrt(direction.dRow * direction.dRow + direction.dCol * direction.dCol);
      return {
         dRow: direction.dRow / arrowLength * newLength,
         dCol: direction.dCol / arrowLength * newLength
      }
   }

   function refreshArrowCells() {
      for (var iArrow = 0; iArrow < answer.arrows.length; iArrow++) {
         var normArrow = normalizeArrow(answer.arrows[iArrow], 80);
         var cellTop = arrowCellsTop + Math.floor(iArrow / nbArrowCellsColumns) * (arrowCellSide + arrowCellPadding);
         var cellLeft = arrowCellsLeft + (iArrow % nbArrowCellsColumns) * (arrowCellSide + arrowCellPadding); 
         var sourceCenter = {
            x: cellLeft + arrowCellSide / 2 - normArrow.dCol / 2,
            y: cellTop + arrowCellSide / 2 - normArrow.dRow / 2
         }
         var targetCenter = {
            x: sourceCenter.x + normArrow.dCol,
            y: sourceCenter.y + normArrow.dRow
         }
         var strCoords = "" + Math.round(answer.arrows[iArrow].dCol);
         if (rows > 1) {
            strCoords += "," + Math.round(answer.arrows[iArrow].dRow);
         }
         paper2.text(cellLeft + (arrowCellSide / 2), cellTop + 8, strCoords).attr({stroke: "black", "font-size":"12px"});
         drawArrowPixels(paper2, null, sourceCenter, targetCenter, false, false, gridParams.arrowAttr, false);
      }
   }
   
   function refreshCurrentCell() {
      if (answer == null) {
         return;
      }
      var row = answer.currentCell.row;
      var col = answer.currentCell.col;
      var position = getVirtualPos(answer.currentCell);
      var posCenter = getVirtualCenter(answer.currentCell);
      if (!dotCurrentPos) {
         dotCurrentPos = paper1.circle(posCenter.x, posCenter.y).attr(gridParams.dotAttr);
      }
      dotCurrentPos.toFront();
      dotCurrentPos.attr({
         cx: posCenter.x,
         cy: posCenter.y
      });
   }

   function refreshArrows(direction, opposite) {
      arrowElements = [];
      if(arrowsSet1) {
         arrowsSet1.remove();
      }
      if (!paper1) {
         return;
      }
      clickPaths = paper1.set();
      paper1.setStart();
      if (direction != null) {
         refreshArrow(0, direction, opposite);
      } else {
         var directions = getAvailableDirections(true);         
         $.each(directions, refreshArrow, opposite);
      }
      var nbDisplayed = 16;
      if (recordedSteps.length > 17) {
         nbDisplayed = recordedSteps.length - 1;
      }
      var ySpacing = 8*16/nbDisplayed;
      for (var iStep = 0; iStep < recordedSteps.length - 1; iStep++) {
         var deltaY = 0;
         if (rows == 1) {
            deltaY = 20 + (iStep * ySpacing);
         }
         var hideEdges = rows > 1;
         drawArrow(paper1, null, recordedSteps[iStep], recordedSteps[iStep + 1], true, hideEdges, gridParams.tmpArrow, 0, deltaY);
      }
      // Bring only the arrow edges in front of the white padding.
      whitePadding.toFront();
      
      arrowsSet1 = paper1.setFinish();

      if(arrowsSet2) {
         arrowsSet2.remove();
      }
      paper2.setStart();
      refreshArrowCells();
      arrowsSet2 = paper2.setFinish();


      // The invisible clicking paths are always at the front.
      clickPaths.toFront();
      for (var iRect = 0; iRect < arrowCellsRects.length; iRect++) {
         arrowCellsRects[iRect].toFront();
      }
   }
   
   function isOutside(cell) {
      return ((cell.row + deltaRow) < 0 || (cell.row + deltaRow) >= rows || (cell.col + deltaCol) < 0 || (cell.col + deltaCol) >= cols);
   }

   function refreshArrow(index, direction, opposite) {
      var source;
      var target;
      if (!opposite) {
         source = {
            row: answer.currentCell.row,
            col: answer.currentCell.col
         };
         target = {
            row: answer.currentCell.row + direction.dRow,
            col: answer.currentCell.col + direction.dCol
         };
      } else {
         source = {
            row: answer.currentCell.row - direction.dRow,
            col: answer.currentCell.col - direction.dCol
         };
         target = {
            row: answer.currentCell.row,
            col: answer.currentCell.col
         };
      }

      var hideEdges = false;//isOutside(target);
      var arrowAttr = gridParams.arrowAttr;
      var arrowChopPrefix = gridParams.arrowChopPrefix;
      if (scale > 1) {
         arrowAttr = gridParams.arrowScaledAttr;
         arrowChopPrefix = 2;
      }
      drawArrow(paper1, direction, source, target, true, hideEdges, arrowAttr, arrowChopPrefix);
   }

   function getVirtualPos(gridPosition) {
      return {
         x: gridParams.padding + (gridPosition.col + deltaCol) * gridParams.cellWidth / scale,
         y: gridParams.padding + (gridPosition.row + deltaRow) * cellHeight
      };
   }
   
   function getVirtualCenter(gridPosition) {
      var pos = getVirtualPos(gridPosition);
      
      return {
         x: pos.x + gridParams.cellWidth / scale / 2,
         y: pos.y + cellHeight / 2
      };
   }
   
   function drawArrowPixels(usedPaper, direction, sourceCenter, targetCenter, clip, hideEdge, arrowAttr, arrowChopPrefix, deltaY) {
      if (deltaY == null) {
         deltaY = 0;
      }
      if (clip) {
         lineclip(sourceCenter, targetCenter);
      }
      if (direction != null) {
         // Thick path, for clicking.
         var clickPath = usedPaper.path([
            "M", sourceCenter.x, sourceCenter.y + deltaY,
            "L", targetCenter.x, targetCenter.y + deltaY
         ]).attr(gridParams.clickPathAttr).data("direction", direction);
         clickPath.click(clickArrow);
         clickPaths.push(clickPath);
      }

      // Start with full arrow, from center to center.
      var path = usedPaper.path([
         "M", sourceCenter.x, sourceCenter.y + deltaY,
         "L", targetCenter.x, targetCenter.y + deltaY
      ]).attr(arrowAttr);

      var length = path.getTotalLength();

      // Chop the arrow's prefix, so it doesn't touch the dot.
      var subPath = path.getSubpath(arrowChopPrefix, length);
      
      path.attr({
         path: subPath
      });
      arrowElements.push(path);

      if(hideEdge) {
         return;
      }

      // Arrow edge. We first draw it pointing right, then rotate.
      var angle = Math.atan2(targetCenter.y - sourceCenter.y, targetCenter.x - sourceCenter.x) * 180 / Math.PI;
      var edgeScale = Math.max(1.5, Math.min(100/length, 5));
      if (deltaY > 0) {
         edgeScale *= 2;
      }
      var edge = usedPaper.path(Raphael.transformPath([
         "M", targetCenter.x, targetCenter.y + deltaY,
         "L", targetCenter.x - gridParams.arrowEdgeDiffX / edgeScale, targetCenter.y - gridParams.arrowEdgeDiffY / edgeScale + deltaY,
         "M", targetCenter.x, targetCenter.y + deltaY,
         "L", targetCenter.x - gridParams.arrowEdgeDiffX / edgeScale, targetCenter.y + gridParams.arrowEdgeDiffY / edgeScale + deltaY
      ],["R", angle, targetCenter.x, targetCenter.y + deltaY])).attr(arrowAttr);
      arrowElements.push(edge);
   }

   function drawArrow(usedPaper, direction, source, target, clip, hideEdge, arrowAttr, arrowChopPrefix, deltaY) {
      var sourceCenter = getVirtualCenter(source);
      var targetCenter = getVirtualCenter(target);
      drawArrowPixels(usedPaper, direction, sourceCenter, targetCenter, clip, hideEdge, arrowAttr, arrowChopPrefix, deltaY);
   }

   function clickArrow(event) {
      if(ignoreClicks) {
         return;
      }
      goToDirection(this.data("direction"));
      delayClicks();
   }

   function goToDirection(direction) {
      $("#messageArrow").html("");
      var firstDuration = 200;
      var pauseDuration = 100;
      var secondDuration = 300;

      showFeedback(null);

      var newCell = {
         row: (answer.currentCell.row + direction.dRow),
         col: (answer.currentCell.col + direction.dCol)
      };
      
      if (recordingSteps) {
         recordedSteps.push(newCell);
         $("#recordedArrow").show();
         var newDirection = getNewDirection();
         var message = "Déplacement en cours : " + newDirection.dCol;
         if (rows > 1) {
            message += "," + newDirection.dRow;
         }
         $("#messageArrow").html(message);
      }

      refreshArrows(direction);
      var oldRow = answer.currentCell.row;
      var oldCol = answer.currentCell.col;
      answer.currentCell = newCell;

      // If the blue cell is in a region, select the appropriate cell.
      var regionIndex = gridPosToRegion(newCell.row, newCell.col);
      if(regionIndex !== null) {
         foundRegion(regionIndex, newCell.row, newCell.col);
      }

      var sourcePosition = getVirtualCenter({ row: oldRow, col: oldCol });
      var newPosition = getVirtualCenter(newCell);
      var deltaPosition = { dx: sourcePosition.x - newPosition.x, dy: sourcePosition.y - newPosition.y };

      var transform1 = ["T", -deltaPosition.dx, -deltaPosition.dy];
      var newPosition = getVirtualCenter(newCell);
      dotCurrentPos.animate({ cx: newPosition.x, cy: newPosition.y }, firstDuration);
 
      setTimeout(function() {
         refreshAll();
      }, firstDuration);
 
      delayClicks();
   }

   function gridPosToRegion(row, col) {
      for(var iRegion = 0; iRegion < regions.length; iRegion++) {
         var region = regions[iRegion];
         if(row < region.topLeft.row || row >= region.topLeft.row + region.letters.length) {
            continue;
         }
         if(col < region.topLeft.col || col >= region.topLeft.col + region.letters[0].length) {
            continue;
         }
         return iRegion;
      }
      return null;
   }

   function getAnswerLetter(index) {
      if(answer.selections[index] === null) {
         return null;
      }
      var region = regions[index];
      var selection = answer.selections[index];
      return region.letters[selection.row - region.topLeft.row][selection.col - region.topLeft.col];
   }

   function getAnswerArray() {
      return Beav.Array.init(regions.length, getAnswerLetter);
   }

   function hashArray(array) {
      var value = 0;
      for(var iLetter = 0; iLetter < array.length; iLetter++) {
         var code = array[iLetter].charCodeAt(0);
         value += (code * 58349) % 57298363;
         value = (value * 15013) % 57298363;
      }
      return value;
   }

   function showFeedback(string) {
      if(string === null || string === undefined || string === "") {
         string = "&nbsp;";
      }
      $("#feedback").html(string);
   }

   function delayClicks() {
      ignoreClicks = true;
      subTask.delayFactory.destroy("lattice$delayClicks");
      subTask.delayFactory.create("lattice$delayClicks", enableClicks, clickDelay);
   }

   function enableClicks() {
      ignoreClicks = false;
   }

   function getResultAndMessage() {
      var nbFound = 0;
      for(var regionIndex = 0; regionIndex < regions.length; regionIndex++) {
         if(answer.selections[regionIndex] != null) {
            nbFound++;
         }
      }
      var successRate = nbFound / regions.length;
      if (successRate < 1) {
         return {
            successRate: successRate,
            message: taskStrings.missing
         };
      }
      else {
         return {
            successRate: 1,
            message: taskStrings.success
         };
      }
   }

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };
}
initWrapper(initTask, null, null, true);
