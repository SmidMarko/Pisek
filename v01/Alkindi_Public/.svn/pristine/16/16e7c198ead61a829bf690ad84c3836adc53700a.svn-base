function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         rows: 16,
         cols: 16,
         start: {
            row: 2,
            col: 12
         },
         arrows: [
            {dRow: 2, dCol: 0},
            {dRow: -2, dCol: 0},
            {dRow: 0, dCol: 2},
            {dRow: 0, dCol: -2}
         ],
         allowWrap: false,
         regions: [
            {
               topLeft: {row: 1, col: 1},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 2, col: 6},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 5, col: 10},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 10, col: 2},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 13, col: 7},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 12, col: 12},
               letters: [["1", "2"], ["3", "4"]]
            }
         ],
         answerHash: 14338674
      },
      medium: {
         rows: 16,
         cols: 16,
         start: {
            row: 4,
            col: 10
         },
         arrows: [
            {dRow: -2, dCol: 4},
            {dRow: -1, dCol: 5},
            {dRow: 1, dCol: -5},
            {dRow: 2, dCol: -4}
         ],
         allowWrap: false,
         regions: [
            {
               topLeft: {row: 1, col: 6},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 5, col: 0},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 9, col: 10},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 5, col: 12},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 12, col: 7},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 13, col: 12},
               letters: [["1", "2"], ["3", "4"]]
            }
         ],
         answerHash: 41481154
      },
      hard: {
         rows: 21,
         cols: 18,
         start: {
            row: 1,
            col: 13
         },
         arrows: [
            {dRow: 5, dCol: 2},
            {dRow: 2, dCol: 5},
            {dRow: -5, dCol: -2},
            {dRow: -2, dCol: -5}
         ],
         allowWrap: true,
         regions: [
            {
               topLeft: {row: 3, col: 5},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 5, col: 9},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 7, col: 3},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 12, col: 5},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 14, col: 15},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 17, col: 1},
               letters: [["1", "2"], ["3", "4"]]
            },
            {
               topLeft: {row: 15, col: 8},
               letters: [["1", "2"], ["3", "4"]]
            }
         ],
         answerHash: 13955683
      }
   };

   var rows;
   var cols;
   var regions;

   var paper;
   var paperWidth;
   var paperHeight;
   var gridWidth;
   var gridHeight;
   var grid;
   var whitePadding;

   var cellHighlight;
   var arrowsSet;
   var specialEdges;
   var clickPaths;
   var moveCount;
   var moveLimitFeedback = 6;
   var ignoreClicks;
   var clickDelay = 500;
   var bottomHalf;
   var bottomHalfStartRow;

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
      currentCellAttr: {
         fill: "#FA5858"
      },
      arrowAttr: {
         stroke: "#B40404",
          "stroke-width": 4,
         "stroke-linecap": "round"
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

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      displayHelper.thresholdEasy = 120;
      displayHelper.thresholdMedium = 180;
      displayHelper.timeoutMinutes = 8;
      level = curLevel;
      rows = data[level].rows;
      cols = data[level].cols;
      regions = data[level].regions;
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
      showFeedback(null);
      ignoreClicks = false;
      moveCount = 0;
      var passwordHTML = "<tr>";
      for(var index = 0; index < regions.length; index++) {
         passwordHTML += "<td class='letterCell' id='letterCell_" + index + "'></td>";
      }
      $("#passwordTable").html(passwordHTML);
      refreshPassword();
      initPaper();
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      return {
         currentCell: {
            row: data[level].start.row,
            col: data[level].start.col
         },
         selections: Beav.Array.make(regions.length, null)
      };
   };

   subTask.unloadLevel = function(callback) {
      if(grid) {
         grid.remove();
         grid = null;
      }
      callback();
   };

   function initPaper() {
      gridWidth = gridParams.cellWidth * cols;
      gridHeight = gridParams.cellHeight * rows;
      paperWidth = gridParams.padding * 2 + gridWidth;
      paperHeight = gridParams.padding * 2 + gridHeight;
      paper = subTask.raphaelFactory.create("anim", "anim", paperWidth, paperHeight);
      initGridBottomHalf();


      // White padding covers the wrapped arrows.
      paper.setStart();
      paper.rect(0, 0, gridParams.padding, paperHeight).attr(gridParams.whitePadding);
      paper.rect(paperWidth - gridParams.padding, 0, gridParams.padding, paperHeight).attr(gridParams.whitePadding);
      paper.rect(0, 0, paperWidth, gridParams.padding).attr(gridParams.whitePadding);
      paper.rect(0, paperHeight - gridParams.padding, paperWidth, gridParams.padding).attr(gridParams.whitePadding);
      whitePadding = paper.setFinish();

      initGrid();
   }

   function initGrid() {
      grid = new Grid("anim", paper, rows, cols, gridParams.cellWidth, gridParams.cellHeight, gridParams.padding, gridParams.padding, gridParams.lineAttr);
      grid.clickCell(clickCell);
      $.each(regions, initGridRegion);

      grid.setCell(dotFiller, {
         row: data[level].start.row,
         col: data[level].start.col
      });

      refreshCurrentCell();
   }

   function initGridBottomHalf() {
      bottomHalfStartRow = Math.floor(rows / 2);
      var x0 = gridParams.padding;
      var y0 = bottomHalfStartRow * gridParams.cellHeight + gridParams.padding;
      var width = gridParams.cellWidth * cols;
      var height = gridParams.cellHeight * (rows - bottomHalfStartRow);
      bottomHalf = paper.rect(x0, y0, width, height).attr({ fill: "#E0E0E0", "z-index": -1 });
      paper.path(["M", x0, y0, "L", x0 + width, y0]).attr({ "stroke-width": 3 });
   }

   function initGridRegion(index) {
      var region = regions[index];

      // Letters text.
      var letters = region.letters;
      for(var regionRow = 0; regionRow < letters.length; regionRow++) {
         var letterRow = letters[regionRow];
         for(var regionCol = 0; regionCol < letterRow.length; regionCol++) {
            var letter = letterRow[regionCol];
            var position = grid.getCellCenter(region.topLeft.row + regionRow, region.topLeft.col + regionCol);
            var letterElement = paper.text(position.x, position.y, letter).attr(gridParams.regionTextAttr);
            letterElement[0].style.cursor = "default";
         }
      }

      // Border.
      var topLeftPos = grid.getCellPos(region.topLeft.row, region.topLeft.col);
      var bottomRightPos = grid.getCellPos(region.topLeft.row + letters.length, region.topLeft.col + letters[0].length);
      var regionWidth = letters[0].length * gridParams.cellWidth;
      var regionHeight = letters.length * gridParams.cellHeight;
      paper.rect(topLeftPos.x, topLeftPos.y, regionWidth, regionHeight).attr(gridParams.regionLineAttr);

      // Index digit.
      var centerX = topLeftPos.x + regionWidth / 2;
      //var indexElement = paper.text(centerX, topLeftPos.y + gridParams.regionIndexOffset, index + 1).attr(gridParams.regionTextAttr);
      //indexElement[0].style.cursor = "default";

      refreshRegion(index);
   }

   function clickCell(event) {
      if(ignoreClicks) {
         return;
      }

      var row = event.data.row;
      var col = event.data.col;

      // If this cell corresponds to an arrow destination, go to it.
      for(var iDirection = 0; iDirection < data[level].arrows.length; iDirection++) {
         var direction = data[level].arrows[iDirection];
         if(row === answer.currentCell.row + direction.dRow && col === answer.currentCell.col + direction.dCol) {
            goToDirection(direction);
            delayClicks();
            return;
         }
      }

      // If a region is clicked, handle separately.
      var regionIndex = gridPosToRegion(row, col);
      if(regionIndex !== null) {
         showFeedback(null);
         clickRegion(regionIndex, row, col);
         return;
      }

      // Click on white cell.
      showFeedback(taskStrings.whiteClick);
   }

   function clickRegion(regionIndex, row, col) {
      var oldSelection = answer.selections[regionIndex];
      if(oldSelection && oldSelection.row === row && oldSelection.col === col) {
         answer.selections[regionIndex] = null;
      }
      else {
         answer.selections[regionIndex] = {
            row: row,
            col: col
         };
      }
      refreshRegion(regionIndex);
      refreshPassword();
   }

   function refreshRegion(regionIndex) {
      forEachInRegion(regionIndex, function(row, col) {
         setCellSelected(row, col, false);
      });
      var selection = answer.selections[regionIndex];
      if(selection !== null) {
         setCellSelected(selection.row, selection.col, true);
      }
      var nbRemaining = 0;
      for (var iRegion = 0; iRegion < regions.length; iRegion++) {
         if (answer.selections[iRegion] == null) {
            nbRemaining++;
         }
      }
      $("#nbRemaining").html(nbRemaining);
   }

   function forEachInRegion(index, callback) {
      var region = regions[index];
      for(var regionRow = 0; regionRow < region.letters.length; regionRow++) {
         for(var regionCol = 0; regionCol < region.letters[regionRow].length; regionCol++) {
            callback(region.topLeft.row + regionRow, region.topLeft.col + regionCol, regionRow, regionCol);
         }
      }
   }

   function setCellSelected(row, col, selected) {
      if(!selected) {
         grid.clearCell(row, col);
         return;
      }
      grid.addToCell(selectFiller, {
         row: row,
         col: col
      });
   }

   function selectFiller(data) {
      var rect = paper.rect(data.xPos, data.yPos, gridParams.cellWidth, gridParams.cellHeight).attr(gridParams.regionSelectAttr);
      rect.toBack();
      bottomHalf.toBack();
      return [rect];
   }

   function dotFiller(data) {
      var xPos = data.xPos + gridParams.cellWidth / 2;
      var yPos = data.yPos + gridParams.cellHeight / 2;
      return [paper.circle(xPos, yPos).attr(gridParams.dotAttr)];
   }

   function refreshCurrentCell() {
      var row = answer.currentCell.row;
      var col = answer.currentCell.col;
      var position = grid.getCellPos(row, col);
      if(!cellHighlight) {
         cellHighlight = paper.rect(position.x, position.y, gridParams.cellWidth, gridParams.cellHeight).attr(gridParams.currentCellAttr);
      }
      cellHighlight.toBack();
      cellHighlight.attr({
         x: position.x,
         y: position.y
      });

      // Gray selection is always at the back.
      // We ignore the initial set, so we don't send the dot to the back.
      if(row !== data[level].start.row || col !== data[level].start.col) {
         var cellContent = grid.getCell(row, col);
         for(var iContent = 0; iContent < cellContent.length; iContent++) {
            cellContent[iContent].toBack();
         }
      }

      refreshArrows();
   }

   function refreshArrows() {
      if(arrowsSet) {
         arrowsSet.remove();
      }
      specialEdges = paper.set();
      clickPaths = paper.set();
      paper.setStart();
      $.each(data[level].arrows, refreshArrow);
      arrowsSet = paper.setFinish();

      // Bring only the arrow edges in front of the white padding.
      whitePadding.toFront();
      specialEdges.toFront();

      // The invisible clicking paths are always at the front.
      clickPaths.toFront();
   }

   function refreshArrow(index, direction) {
      var sourceCenter = grid.getCellCenter(answer.currentCell.row, answer.currentCell.col);
      var target = {
         row: answer.currentCell.row + direction.dRow,
         col: answer.currentCell.col + direction.dCol
      };

      var outside = (target.row < 0 || target.row >= rows || target.col < 0 || target.col >= cols);
      if(outside && !data[level].allowWrap) {
         return null;
      }

      var targetCenter = getVirtualCenter(target);
      drawArrow(direction, sourceCenter, targetCenter, false, outside);

      if(outside) {
         var wrapTarget = {
            row: (target.row % rows + rows) % rows,
            col: (target.col % cols + cols) % cols
         };
         var wrapSource = {
            row: wrapTarget.row - direction.dRow,
            col: wrapTarget.col - direction.dCol
         };

         var wrapTargetCenter = getVirtualCenter(wrapTarget);
         var wrapSourceCenter = getVirtualCenter(wrapSource);

         drawArrow(direction, wrapSourceCenter, wrapTargetCenter, true, false);
      }
   }

   function getVirtualCenter(gridPosition) {
      return {
         x: gridParams.padding + gridPosition.col * gridParams.cellWidth + gridParams.cellWidth / 2,
         y: gridParams.padding + gridPosition.row * gridParams.cellHeight + gridParams.cellHeight / 2
      };
   }

   function drawArrow(direction, source, target, specialEdge, hideEdge) {
      // Thick path, for clicking.
      var clickPath = paper.path([
         "M", source.x, source.y,
         "L", target.x, target.y
      ]).attr(gridParams.clickPathAttr).data("direction", direction);
      clickPath.click(clickArrow);
      clickPaths.push(clickPath);

      // Start with full arrow, from center to center.
      var path = paper.path([
         "M", source.x, source.y,
         "L", target.x, target.y
      ]).attr(gridParams.arrowAttr);

      var length = path.getTotalLength();

      // Chop the arrow's prefix, so it doesn't touch the dot.
      var subPath = path.getSubpath(gridParams.arrowChopPrefix, length);
      
      path.attr({
         path: subPath
      });

      if(hideEdge) {
         return;
      }

      // Arrow edge. We first draw it pointing right, then rotate.
      var angle = Math.atan2(target.y - source.y, target.x - source.x) * 180 / Math.PI;
      var edge = paper.path(Raphael.transformPath([
         "M", target.x, target.y,
         "L", target.x - gridParams.arrowEdgeDiffX, target.y - gridParams.arrowEdgeDiffY,
         "M", target.x, target.y,
         "L", target.x - gridParams.arrowEdgeDiffX, target.y + gridParams.arrowEdgeDiffY
      ],["R", angle, target.x, target.y])).attr(gridParams.arrowAttr);

      if(specialEdge) {
         specialEdges.push(edge);
      }
   }

   function clickArrow(event) {
      if(ignoreClicks) {
         return;
      }
      goToDirection(this.data("direction"));
      delayClicks();
   }

   function goToDirection(direction) {
      moveCount++;

      showFeedback(null);
      /*
      if(moveCount >= moveLimitFeedback) {
         showFeedback(taskStrings.notMove);
         moveCount = 0;
      }
      */

      var newPosition = {
         row: ((answer.currentCell.row + direction.dRow) % rows + rows) % rows,
         col: ((answer.currentCell.col + direction.dCol) % cols + cols) % cols
      };
      
      if (newPosition.row >= bottomHalfStartRow) {
         showFeedback(taskStrings.restrictedArea);
         return;
      }

      // If the blue cell is in a region, select the appropriate cell.
      var regionIndex = gridPosToRegion(newPosition.row, newPosition.col);
      if(regionIndex !== null) {
         // We null the selection to override it.
         answer.selections[regionIndex] = null;
         clickRegion(regionIndex, newPosition.row, newPosition.col);
      }

      answer.currentCell = newPosition;
      refreshCurrentCell();
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

   function refreshPassword() {
      for(var index = 0; index < regions.length; index++) {
         var id = "letterCell_" + index;
         var text = getAnswerLetter(index);
         if(text === null) {
            text = "&nbsp;";
         }
         $("#" + id).html(text);
      }
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
      for(var regionIndex = 0; regionIndex < regions.length; regionIndex++) {
         if(answer.selections[regionIndex] === null) {
            return {
               successRate: 0,
               message: taskStrings.missing
            };
         }
      }
      var userHash = hashArray(getAnswerArray());
      //alert(userHash);
      if(userHash === data[level].answerHash) {
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
