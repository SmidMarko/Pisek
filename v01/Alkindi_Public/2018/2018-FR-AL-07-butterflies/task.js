function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
      easy: {
         graph: { "vertexInfo": { "0.0":{}, "1.0":{}, "2.0":{}, "1.1":{}, "2.1":{}, "1.2":{}, "2.2":{} },
                  "edgeInfo": { "01":{}, "02":{}, "03":{}, "11":{}, "21":{}, "31":{} },
                  "edgeVertices": { "01": ["0.0","1.0"], "02": ["0.0","1.1"], "03": ["0.0","1.2"], "11": ["1.0","2.0"], "21": ["1.1","2.1"], "31": ["1.2","2.2"] },
                  "directed": false },
         vertexPos: { 
            "0.0":{ "x": 365, "y": 70 }, 
            "1.0":{ "x": 140, "y": 190 }, 
            "2.0":{ "x": 140, "y": 310 }, 
            "1.1":{ "x": 365, "y": 190 }, 
            "2.1":{ "x": 365, "y": 310 }, 
            "1.2":{ "x": 590, "y": 190 }, 
            "2.2":{ "x": 590, "y": 310 } },
         graphFrameH: 380,
         initBf: { "0.0": { "antennae": [ 1, 1 ], "dots": [ [ 1, 1, 0, 1, 0 ], [ 1, 1, 0, 1, 0 ] ] } ,
		             "2.2": { "antennae": [ 0, 0 ], "dots": [ [ 1, 1, 0, 1, 0 ], [ 1, 0, 0, 0, 0 ] ] } },
         butterflies : [
            { "antennae": [ 1, 1 ], "dots": [ [ 1, 1, 0, 1, 0 ], [ 1, 1, 1, 1, 1 ] ] },
            { "antennae": [ 1, 0 ], "dots": [ [ 1, 1, 0, 1, 0 ], [ 1, 1, 0, 1, 1 ] ] },
            { "antennae": [ 0, 0 ], "dots": [ [ 1, 0, 0, 0, 0 ], [ 1, 1, 0, 1, 0 ] ] },
            { "antennae": [ 1, 0 ], "dots": [ [ 1, 1, 0, 0, 0 ], [ 1, 1, 0, 1, 0 ] ] },
            { "antennae": [ 0, 1 ], "dots": [ [ 1, 1, 0, 1, 0 ], [ 1, 1, 0, 0, 0 ] ] }
      	  ],
         bfPerRow: [1,3,3]
      },
      medium: {
         graph: { 
            "vertexInfo": { 
               "0.0":{}, "1.0":{}, "2.0":{}, "1.1":{}, "1.2":{}, "2.1":{}, "2.2":{}},
            "edgeInfo": { 
               "01":{}, "02":{}, "11":{}, "12":{}, "21":{}, "22":{}, },
            "edgeVertices": { 
               "01": ["0.0","1.0"], "02": ["0.0","2.0"], 
		"11": ["1.0","1.1"], "12": ["1.0","1.2"],
		"21": ["2.0","2.1"], "22": ["2.0","2.2"], },
            "directed": false },
         vertexPos: { 
            "0.0":{ "x": 365, "y": 70 }, 
             "1.0":{ "x": 230, "y": 170 },
	     "2.0":{ "x": 500, "y": 170 },
	    "1.1":{ "x": 160, "y": 290 }, "1.2":{ "x": 300, "y": 290 }, 
            "2.1":{ "x": 430, "y": 290 }, "2.2":{ "x": 570, "y": 290 }, },
         graphFrameH: 360,
         initBf: { },
         butterflies : [
            { "antennae": [ 0, 1 ], "dots": [ [ 1, 1, 0, 0, 0 ], [ 1, 1, 0, 1, 0 ] ] },
            { "antennae": [ 1, 1 ], "dots": [ [ 1, 1, 1, 1, 1 ], [ 1, 1, 0, 1, 0 ] ] },
            { "antennae": [ 0, 0 ], "dots": [ [ 1, 1, 0, 1, 1 ], [ 1, 1, 0, 1, 1 ] ] },
            { "antennae": [ 0, 1 ], "dots": [ [ 1, 1, 0, 1, 1 ], [ 1, 1, 0, 1, 0 ] ] },
            { "antennae": [ 1, 1 ], "dots": [ [ 1, 0, 0, 0, 0 ], [ 1, 1, 0, 1, 0 ] ] },
            { "antennae": [ 1, 1 ], "dots": [ [ 1, 1, 0, 1, 0 ], [ 1, 1, 0, 1, 0 ] ] },
            { "antennae": [ 0, 0 ], "dots": [ [ 1, 1, 0, 0, 0 ], [ 1, 1, 0, 0, 0 ] ] }
         ],
         bfPerRow: [1,3,6]
      },
      hard: {
         graph: {
   	      "vertexInfo": { 
               "0.0":{}, "0.1":{},           "0.3":{}, "0.4":{}, 
               "1.0":{}, "1.1":{}, "1.2":{}, "1.3":{}, "1.4":{}, 
               "2.0":{}, "2.1":{},           "2.3":{}, "2.4":{} },
               
            "edgeInfo": {
               "0001":{}, "0111":{}, "0010":{}, "1011":{}, "1112":{},
               "2021":{}, "1121":{}, "1303":{}, "0304":{}, "0414":{},
               "1213":{}, "1323":{}, "2324":{} },
            "edgeVertices": {
		"0001":["0.0","0.1"], "0111":["0.1","1.1"], "0010":["0.0","1.0"], "1011":["1.0","1.1"], "1112":["1.1","1.2"],
		"2021":["2.0","2.1"], "1121":["1.1","2.1"], "1303":["1.3","0.3"], "0304":["0.3","0.4"], "0414":["0.4","1.4"],
		"1213":["1.2","1.3"], "1323":["1.3","2.3"], "1314":["1.3","1.4"], "2324":["2.3","2.4"] },
            "directed": false },
         vertexPos: { 
            "0.0":{ "x": 85, "y": 70 }, "0.1":{ "x": 225, "y": 70 }, "1.2":{ "x": 365, "y": 190 }, "0.3":{ "x": 505, "y": 70 }, "0.4":{ "x": 645, "y": 70 }, 
            "1.0":{ "x": 85, "y": 190 }, "1.1":{ "x": 225, "y": 190 }, "1.3":{ "x": 505, "y": 190 }, "1.4":{ "x": 645, "y": 190 }, 
            "2.0":{ "x": 85, "y": 310 }, "2.1":{ "x": 225, "y": 310 }, "2.3":{ "x": 505, "y": 310 }, "2.4":{ "x": 645, "y": 310 } },
         graphFrameH: 380,
         initBf: {},
         butterflies : [
	     
             { "antennae": [ 0, 0 ], "dots": [ [ 0, 0, 0, 1, 0 ], [ 0, 0, 0, 0, 0 ] ] }, // 1.0
             { "antennae": [ 0, 0 ], "dots": [ [ 1, 1, 0, 1, 1 ], [ 0, 0, 1, 0, 0 ] ] }, // 1.4
             { "antennae": [ 1, 0 ], "dots": [ [ 0, 0, 0, 1, 0 ], [ 0, 1, 1, 1, 0 ] ] }, // 3.0
             { "antennae": [ 0, 1 ], "dots": [ [ 0, 0, 0, 1, 0 ], [ 0, 0, 1, 0, 0 ] ] }, // 1.1
             { "antennae": [ 1, 0 ], "dots": [ [ 1, 1, 0, 1, 0 ], [ 0, 0, 1, 0, 0 ] ] }, // 1.3
             { "antennae": [ 1, 1 ], "dots": [ [ 1, 1, 0, 1, 0 ], [ 1, 0, 1, 0, 0 ] ] }, // 0.3
             { "antennae": [ 0, 1 ], "dots": [ [ 1, 1, 0, 0, 0 ], [ 0, 1, 1, 0, 0 ] ] }, // 2.4
             { "antennae": [ 1, 0 ], "dots": [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ] }, // 0.0
             { "antennae": [ 1, 0 ], "dots": [ [ 1, 1, 0, 1, 1 ], [ 1, 0, 1, 0, 0 ] ] }, // 0.4
             { "antennae": [ 1, 1 ], "dots": [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 1, 0, 0 ] ] }, // 0.1
             { "antennae": [ 1, 1 ], "dots": [ [ 0, 1, 0, 1, 0 ], [ 0, 0, 1, 0, 0 ] ] }, // 1.2
             { "antennae": [ 0, 0 ], "dots": [ [ 0, 0, 0, 1, 0 ], [ 0, 1, 1, 0, 0 ] ] }, // 2.0
             { "antennae": [ 0, 0 ], "dots": [ [ 1, 1, 0, 0, 0 ], [ 0, 0, 1, 0, 0 ] ] }, // 2.3
	     
         ],
         bfPerRow: [1,3,4,5]
      }
      // hard: {
      //    graph: {
      // 	      "vertexInfo": { 
      //          "0.0":{}, "0.1":{}, "0.2":{}, "0.3":{}, "0.4":{}, 
      //          "1.0":{}, "1.1":{}, "1.2":{}, "1.3":{}, "1.4":{}, 
      //          "2.0":{}, "2.1":{}, "2.2":{}, "2.3":{}, "2.4":{} },
               
      //       "edgeInfo": {
      //          "0001":{}, "0102":{}, "0203":{}, "0304":{}, "0110":{},
      //          "0211":{}, "0312":{}, "0313":{}, "0414":{}, "1011":{},
      //          "1121":{}, "1322":{}, "1323":{}, "1333":{}, "2021":{} },
      //       "edgeVertices": {
      //          "0001": ["0.0","0.1"], "0102": ["0.1","0.2"], "0203": ["0.2","0.3"], "0304": ["0.3","0.4"], "0110": ["0.1","1.0"],
      //          "0211": ["0.2","1.1"], "0312": ["0.3","1.2"], "0313": ["0.3","1.3"], "0414": ["0.4","1.4"], "1011": ["1.0","1.1"],
      //          "1121": ["1.1","2.1"], "1322": ["1.3","2.2"], "1323": ["1.3","2.3"], "1333": ["1.3","2.4"], "2021": ["2.0","2.1"] },
      //       "directed": false },
      //    vertexPos: { 
      //       "0.0":{ "x": 85, "y": 70 }, "0.1":{ "x": 225, "y": 70 }, "0.2":{ "x": 365, "y": 70 }, "0.3":{ "x": 505, "y": 70 }, "0.4":{ "x": 645, "y": 70 }, 
      //       "1.0":{ "x": 85, "y": 190 }, "1.1":{ "x": 225, "y": 190 }, "1.2":{ "x": 365, "y": 190 }, "1.3":{ "x": 505, "y": 190 }, "1.4":{ "x": 645, "y": 190 }, 
      //       "2.0":{ "x": 85, "y": 310 }, "2.1":{ "x": 225, "y": 310 }, "2.2":{ "x": 365, "y": 310 }, "2.3":{ "x": 505, "y": 310 }, "2.4":{ "x": 645, "y": 310 } },
      //    graphFrameH: 380,
      //    initBf: {},
      //    butterflies : [
      //       { "antennae": [ 1, 1 ], "dots": [ [ 1, 0, 0, 1, 0 ], [ 0, 0, 0, 1, 1 ] ] },
      //       { "antennae": [ 1, 0 ], "dots": [ [ 0, 0, 0, 1, 0 ], [ 0, 0, 0, 1, 1 ] ] },
      //       { "antennae": [ 1, 1 ], "dots": [ [ 0, 0, 0, 1, 0 ], [ 0, 0, 0, 0, 1 ] ] },
      //       { "antennae": [ 1, 0 ], "dots": [ [ 0, 0, 0, 1, 0 ], [ 0, 1, 0, 0, 1 ] ] },
      //       { "antennae": [ 1, 1 ], "dots": [ [ 1, 0, 0, 1, 0 ], [ 0, 1, 0, 0, 1 ] ] },

      //       { "antennae": [ 0, 0 ], "dots": [ [ 1, 0, 0, 1, 0 ], [ 0, 0, 0, 1, 1 ] ] },
      //       { "antennae": [ 0, 1 ], "dots": [ [ 0, 0, 0, 1, 0 ], [ 0, 0, 0, 1, 1 ] ] },
      //       { "antennae": [ 0, 0 ], "dots": [ [ 0, 0, 0, 0, 0 ], [ 0, 1, 0, 0, 1 ] ] },
      //       { "antennae": [ 1, 1 ], "dots": [ [ 0, 1, 0, 1, 0 ], [ 0, 1, 0, 0, 1 ] ] },
      //       { "antennae": [ 1, 0 ], "dots": [ [ 1, 1, 0, 1, 0 ], [ 0, 1, 0, 0, 1 ] ] },

      //       { "antennae": [ 0, 1 ], "dots": [ [ 0, 1, 0, 1, 1 ], [ 0, 0, 0, 1, 1 ] ] },
      //       { "antennae": [ 0, 0 ], "dots": [ [ 0, 0, 0, 1, 1 ], [ 0, 0, 0, 1, 1 ] ] },
      //       { "antennae": [ 1, 0 ], "dots": [ [ 0, 1, 0, 0, 0 ], [ 0, 1, 0, 0, 1 ] ] },
      //       { "antennae": [ 0, 1 ], "dots": [ [ 0, 1, 0, 1, 0 ], [ 1, 1, 0, 0, 1 ] ] },
      //       { "antennae": [ 0, 1 ], "dots": [ [ 1, 1, 0, 1, 0 ], [ 0, 1, 0, 0, 1 ] ] }
      //    ],
      //    bfPerRow: [1,3,6,5]
      // }
   };
   var paper;
   var paperW = 770;
   var paperH;
   var margin = 10;
   var initBf;
   // var butterflyAttr = {
   //    "width": 90,
   //    "height": 60
   // };
   var butterflyAttr = {
      "width": 80,
      "height": 55
   };
   var nBfPerLine = 8;
   var butterflyObj = [];
   var antennaAttr = {
      "width": butterflyAttr.width/8,
      "height": butterflyAttr.height/4
   };
   var dotAttr = {
      "r": butterflyAttr.width/25,
      "fill": "black"
   };
   var ellipseAttr = {
      "rx": (butterflyAttr.width/2 + 20),
      "ry": (butterflyAttr.height/2 + 20),
      "fill": "white",
      "stroke-width": 3
   };
   var hover;
   var hoverAttr = {
      "rx": ellipseAttr.rx,
      "ry": ellipseAttr.ry,
      "fill": "none",
      "stroke": "yellow",
      "stroke-width": 3,
      "stroke-dasharray": "- "
   };
   var graph;
   var graphJSON;
   var vGraph;
   var graphFrame;
   var graphFrameAttr = {
      "width": paperW - 2*margin,
      "height": 0,
      "fill": "#c0c0ff",
      "x": margin,
      "y": 0
   };
   var edgeAttr = {
      "stroke": "black",
      "stroke-width": 3
   };
   var srcPos = [];
   var dropSpot = {};
   var startPos = [];
   var button;
   var moveX;
   var moveY;
   var buttonAttr = {
      "width": 100,
      "height": 30
   };

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      initBf = data[level].initBf;
      graphJSON = data[level].graph;
      graph = Graph.fromJSON(JSON.stringify(graphJSON));
      // displayHelper.customValidate = checkResult;
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
      initPos();
      initPaper();
      // initButton();
      // displayHelper.hideValidateButton = true;
      displayHelper.customValidate = checkResult;
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var defaultAnswer = {};
      for(var vertex in graphJSON.vertexInfo){
         if(initBf.hasOwnProperty(vertex)){
            defaultAnswer[vertex] = "initBf";
         }else{
            defaultAnswer[vertex] = null;
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
      var result = checkResult(true);
      if(result.success) {
         return {
            successRate: 1,
            message: result.message
         };
      }
      return {
         successRate: 0,
         message: result.message
      };
   };

   function initPos() {
      var nBf = data[level].butterflies.length;
      // graphFrameAttr.y = 2*(margin + ellipseAttr.ry) + Math.floor((nBf-1)/nBfPerLine)*((margin + 2*ellipseAttr.ry));
      graphFrameAttr.y = 2*(margin + butterflyAttr.height) + Math.floor((nBf-1)/nBfPerLine)*((margin + butterflyAttr.height));
      graphFrameAttr.height = data[level].graphFrameH;
      paperH = graphFrameAttr.y + graphFrameAttr.height + margin;
   };

   function initPaper() {
      paper = subTask.raphaelFactory.create("paper","paper",paperW,paperH);
      initButterflies();
      initGraph();
      initDragAndDrop();
   };

   function initButterflies() {
      // var spacing = 2*ellipseAttr.rx + margin;
      var spacing = butterflyAttr.width + margin;
      // var y = ellipseAttr.ry + margin;
      var y = butterflyAttr.height + margin;
      var x0 = (paperW - nBfPerLine*spacing)/2 + spacing/2;
      var x = x0;
      var nBf = data[level].butterflies.length;
      for(var iBf = 0; iBf < nBf; iBf++){
         if(iBf%nBfPerLine == 0) {
            x = x0;
            // y += (Math.floor(iBf/nBfPerLine) == 0) ? 0 : (2*ellipseAttr.ry + margin);
            y += (Math.floor(iBf/nBfPerLine) == 0) ? 0 : (butterflyAttr.height + margin);
         }
         butterflyObj[iBf] = drawButterfly(x,y,data[level].butterflies[iBf].antennae,data[level].butterflies[iBf].dots); 
         x += spacing;
         // console.log((Math.floor(iBf/5)));
         // y += (Math.floor(iBf/5))*ellipseAttr.ry + margin;
         setStartPos(iBf,true);
      }
   };

   function initGraph() {
      var graphDrawer = new SimpleGraphDrawer(ellipseAttr,edgeAttr);
      graphDrawer.setDrawVertex(drawVertex);
      graphDrawer.setDrawEdge(drawEdge);  // because default edge drawer doesn't work with ellipse
      vGraph = new VisualGraph("vGraph", paper, graph, graphDrawer, true);
      initVertexPos();
      redrawGraph();
   };

   function initVertexPos() {
      // var colX = [ paperW/2 - 2*(ellipseAttr.rx + margin) ];
      // for(var iCol = 0; iCol < 3; iCol++){
      //    colX.push(colX[iCol] + 2*(ellipseAttr.rx + margin));
      // }
      // var rowY = [ graphFrameAttr.y + margin + ellipseAttr.ry ];
      // for(var iRow = 0; iRow < 3; iRow++){
      //    rowY.push(rowY[iRow] + 2*(ellipseAttr.ry + margin/2));
      // }
      // vGraph.setVertexVisualInfo("0.0",{"x":colX[1],"y":rowY[0]});
      // for(var iCol = 1; iCol <= 3; iCol++){
      //    for(var iRow = 1; iRow < 3; iRow++){
      //       var id = iCol+"."+iRow;
      //       vGraph.setVertexVisualInfo(id,{"x":colX[iCol-1],"y":rowY[iRow]});
      //    }
      // }
      // for(var iRow = 0; iRow < data[level].bfPerRow.length; iRow++){
   	  //  var posY = graphFrameAttr.y + margin + ellipseAttr.ry + iRow * 2*(ellipseAttr.ry + margin/2); 
   	  //  for(var iCol = 0; iCol < data[level].bfPerRow[iRow]; iCol++){
   	  //      var id = iRow+"."+iCol;
   	  //      var ecart = (2/(data[level].bfPerRow[iRow]-1))*(ellipseAttr.rx + margin);
   	  //      var posX = (1+iCol)*paperW/(data[level].bfPerRow[iRow] + 1);
      //             vGraph.setVertexVisualInfo(id,{"x":posX,"y":posY});
   	  //  }
      // }
      for(var id in data[level].vertexPos){
         var posX = data[level].vertexPos[id].x + graphFrameAttr.x;
         var posY = data[level].vertexPos[id].y + graphFrameAttr.y;
         vGraph.setVertexVisualInfo(id,{"x":posX,"y":posY});
      }
   };

   function initDragAndDrop() {
      for(var iBf = 0; iBf < data[level].butterflies.length; iBf++){
         butterflyObj[iBf].undrag();
         butterflyObj[iBf].drag(dragMove(iBf),dragStart(iBf),dragEnd(iBf));
      }
   };

   function initButton() {
      var w = buttonAttr.width;
      var h = buttonAttr.height;
      var x = (paperW - w)/2;
      var y = graphFrameAttr.y + graphFrameAttr.height + margin;
      button = new Button(paper,x,y,w,h,taskStrings.validate);
      button.click(checkResult);
   };

   function dragMove(bf) {
      return function(dx,dy,x,y) {
         if(Beav.Navigator.isIE8()){
            dy -= document.documentElement.scrollTop;
         }
         moveX = startPos[0].cx + dx;
         moveY = startPos[0].cy + dy;
         
         setMovePos(bf,dx,dy);
         if(!Beav.Navigator.isIE8()){
            var drop = isOverDrop(moveX,moveY);
            hoverEffect(drop);
         }
         butterflyObj[bf].toFront();
      }
   };

   function dragStart(bf) {
      return function(x,y) {
         butterflyObj[bf].toFront();
         setStartPos(bf,false);
         for(var vId in answer){
            if(answer[vId] === bf){
               answer[vId] = null;
            }
         }
      }
   };

   function dragEnd(bf) {
      return function(ev) {
         var x = moveX;
         var y = moveY;
         var drop = isOverDrop(x,y);
         if(drop === false){
            var dx = srcPos[bf][0].cx - startPos[0].cx;
            var dy = srcPos[bf][0].cy - startPos[0].cy;
            hoverEffect(false);
         }else{
            if(answer.hasOwnProperty(drop) && answer[drop] !== null){
               backToSource(answer[drop]);
            }
            var newX = vGraph.getVertexVisualInfo(drop).x;
            var newY = vGraph.getVertexVisualInfo(drop).y;

            dx = newX - startPos[0].cx;
            dy = newY - startPos[0].cy;
            answer[drop] = bf;
         }

         setMovePos(bf,dx,dy);
         setNewPos(bf);
         unmarkEdges();
         initDragAndDrop();   // bug fix IE8
      }
   };

   function setStartPos(bf,source) {
      if(source){
         srcPos[bf] = [];
      }else{
         startPos = [];
      }
      for(var iElem = 0; iElem < butterflyObj[bf].length; iElem++){
         var x = butterflyObj[bf][iElem].attr("x");
         var y = butterflyObj[bf][iElem].attr("y");
         var cx = butterflyObj[bf][iElem].attr("cx");
         var cy = butterflyObj[bf][iElem].attr("cy");
         if(source){
            srcPos[bf][iElem] = { "x": x, "y": y, "cx": cx, "cy": cy };
         }else{
            startPos[iElem] = { "x": x, "y": y, "cx": cx, "cy": cy };
         }
      }
   };

   function setMovePos(bf,dx,dy) {
      for(var iElem = 0; iElem < butterflyObj[bf].length; iElem++){
         butterflyObj[bf][iElem].transform("T"+dx+" "+dy);
      }
   };

   function setNewPos(bf) {
      var dx = srcPos[bf][0].cx - butterflyObj[bf][0].attr("cx");
      var dy = srcPos[bf][0].cy - butterflyObj[bf][0].attr("cy");
      for(var vId in answer){
         if(answer[vId] === bf){
            dx = dropSpot[vId][0] - butterflyObj[bf][0].attr("cx");
            dy = dropSpot[vId][1] - butterflyObj[bf][0].attr("cy");
            break;
         }
      }
      if(Beav.Navigator.isIE8()){
         dx = dx/2;
         dy = dy/2;
      }
      for(var iElem = 0; iElem < butterflyObj[bf].length; iElem++){
         var newX = butterflyObj[bf][iElem].attr("x") + dx;
         var newY = butterflyObj[bf][iElem].attr("y") + dy;
         var newCx = butterflyObj[bf][iElem].attr("cx") + dx;
         var newCy = butterflyObj[bf][iElem].attr("cy") + dy;
         butterflyObj[bf][iElem].attr({ 
            "x": newX, 
            "y": newY,
            "cx": newCx, 
            "cy": newCy });
         butterflyObj[bf][iElem].transform("T0 0");
      }
   };

   function backToSource(bf) {
      for(var iElem = 0; iElem < butterflyObj[bf].length; iElem++){
         var newX = srcPos[bf][iElem].x;
         var newY = srcPos[bf][iElem].y;
         var newCx = srcPos[bf][iElem].cx;
         var newCy = srcPos[bf][iElem].cy;
         butterflyObj[bf][iElem].attr({ 
            "x": newX, 
            "y": newY,
            "cx": newCx, 
            "cy": newCy });
      }
   };

   function isOverDrop(x,y) {
      var magnetRadius = 80;
      for(var vId in dropSpot){
         var xDrop = dropSpot[vId][0];
         var yDrop = dropSpot[vId][1];
         if(Math.sqrt(Math.pow((xDrop - x),2) + Math.pow((yDrop - y),2)) < magnetRadius){
            return vId;
         }
      }
      return false;
   };

   function hoverEffect(vId) {
      if(hover) {
         hover.remove();
      }
      if(vId){
         var xDrop = vGraph.getVertexVisualInfo(vId).x;
         var yDrop = vGraph.getVertexVisualInfo(vId).y;
         hover = paper.ellipse(xDrop,yDrop).attr(hoverAttr);
      }
   };

   function drawVertex(id,info,visualInfo) {
      var pos = this._getVertexPosition(visualInfo);
      this.originalPositions[id] = pos;
      
      if(initBf[id]){
         var vertex = drawButterfly(pos.x,pos.y,initBf[id].antennae,initBf[id].dots,true);
      }else{
         var vertex = this.paper.ellipse(pos.x, pos.y).attr(this.circleAttr);
         dropSpot[id] = [ pos.x, pos.y ];
         if(answer[id] && answer[id] !== null){
            setStartPos(answer[id],false);
            var dx = (pos.x - startPos[0].cx);
            var dy = (pos.y - startPos[0].cy);
            setMovePos(answer[id],dx,dy);
            setNewPos(answer[id]);
            butterflyObj[answer[id]].toFront();
         }
      }
      
      return [vertex];
   };

   function drawEdge(id, vertex1, vertex2, vertex1Info, vertex2Info, vertex1VisualInfo, vertex2VisualInfo, edgeInfo, edgeVisualInfo) {
      var x1 = vertex1VisualInfo.x;
      var y1 = vertex1VisualInfo.y;
      var x2 = vertex2VisualInfo.x;
      var y2 = vertex2VisualInfo.y;
      var path = "M"+x1+" "+y1+"L"+x2+" "+y2;
      var edge = this.paper.path(path).attr(this.lineAttr).toBack();
      edge.attr(edgeVisualInfo);
      return [edge];
   };

   function drawButterfly(x,y,antennae,dots,graph) {
      var butterflyUrl = $("#butterfly").attr("src");
      var antUrl = [ $("#antennaL").attr("src"), $("#antennaR").attr("src") ];
      var wBf = butterflyAttr.width;
      var hBf = butterflyAttr.height;
      var xBf = x - wBf/2;
      var yBf = y - hBf/2;
      var antPos = [ [ 0.375, 0.08 ], [ 0.5, 0.08] ];
      var dotPos = [ [ 0.12, 0.2], [ 0.15, 0.49], [ 0.32, 0.41], [ 0.17, 0.77], [ 0.32, 0.84] ];
      paper.setStart();
      // var ellipse = paper.ellipse(x,y).attr(ellipseAttr);
      
      if(graph){
         var ellipse = paper.ellipse(x,y).attr(ellipseAttr);
         ellipse.attr("fill","lightblue");
      }else{
         var ellipse = paper.ellipse(x,y,ellipseAttr.rx/2,ellipseAttr.ry/2).attr({"fill":"red","opacity":0});
      }
      paper.image(butterflyUrl,xBf,yBf,wBf,hBf);
      for(var iAnt = 0; iAnt < 2; iAnt++){
         if(antennae[iAnt] === 1){
            var xAnt = xBf + wBf*antPos[iAnt][0];
            var yAnt = yBf + hBf*antPos[iAnt][1];
            paper.image(antUrl[iAnt],xAnt,yAnt).attr(antennaAttr);
         }
      }
      for(var iSide = 0; iSide < 2; iSide++){
         for(var iDot = 0; iDot < dots[iSide].length; iDot++){
            if(dots[iSide][iDot] === 1){
               var xDot = (iSide == 0) ? xBf + wBf*dotPos[iDot][0] : xBf + wBf*(1-dotPos[iDot][0]);
               var yDot = yBf + hBf*dotPos[iDot][1];
               paper.circle(xDot,yDot).attr(dotAttr);
            }
         }
      }
      paper.rect(xBf,yBf,wBf,hBf).attr({"fill":"red","opacity":0});
      var butterfly = paper.setFinish();
      if(graph){
         butterfly.drag(emptyFct,cannotDrag,emptyFct);
      }
      return butterfly;
   };

   function emptyFct() {};

   function cannotDrag() {
      displayHelper.showPopupMessage(taskStrings.cannotDrag,"blanket");
   };

   function getLength(obj) {
      var cpt = 0;
      for(var prop in obj){
         if(obj.hasOwnProperty(prop)){
            cpt++;
         }
      }
      return cpt;
   };

   function getButterfly(vId) {
      if(answer[vId] == "initBf"){
         return initBf[vId];
      }else{
         return data[level].butterflies[answer[vId]];
      }
   };

   function getNbAntennae(bf) {
      var ant = bf["antennae"];
      var cpt = 0;
      for(var iAnt = 0; iAnt < 2; iAnt++){
         if(ant[iAnt] == 1){
            cpt++;
         }
      }
      return cpt;
   };

   function compareDots(bf1,bf2) {
      var dots1 = bf1["dots"];
      var dots2 = bf2["dots"];
      var nDifference = [0,0];
      for(var side = 0; side < 2; side++){
         for(var iDot = 0; iDot < dots1[side].length; iDot++){
            if(dots1[side][iDot] != dots2[side][iDot]){
               nDifference[side]++;
            }
         }
      }
      return nDifference;
   };

   function checkResult(noVisualFeedback) {
      var success = true; 
      var message = taskStrings.success; 
      for(var vId in answer){
         if(answer[vId] === null){
            success = false;
            message = taskStrings.missingBf;
            break;
         }
      }
      if(success){
         mainLoop:
         for(var vId in answer){
            var bf = getButterfly(vId);
            var nAnt = getNbAntennae(bf);
            var neighbors = graph.getNeighbors(vId);
            for(var iNeighbor = 0; iNeighbor < neighbors.length; iNeighbor++){
               var neighborBf = getButterfly(neighbors[iNeighbor]);
               var neighborAnt = getNbAntennae(neighborBf);
               if(Math.abs(neighborAnt - nAnt) != 1){
                  success = false;
                  message = taskStrings.wrongAntenna;
                  if(!noVisualFeedback){
                     markEdge(vId,neighbors[iNeighbor]);
                     displayHelper.showPopupMessage(message,"blanket");
                  }
                  break mainLoop;
               }
               var diff = compareDots(bf,neighborBf);
               for(var side = 0; side < 2; side++){
                  if(diff[side] > 1){
                     success = false;
                     message = taskStrings.wrongDots(side);
                     if(!noVisualFeedback){
                        markEdge(vId,neighbors[iNeighbor]);
                        displayHelper.showPopupMessage(message,"blanket");
                     }
                     break mainLoop;
                  }
	       }
                if(diff[0]+diff[1] > 1){
                    success = false;
                    message = taskStrings.tooManyDots;
                    if(!noVisualFeedback){
                        markEdge(vId,neighbors[iNeighbor]);
                        displayHelper.showPopupMessage(message,"blanket");
                    }
                    break mainLoop;
                }
	    }
         }
      }else{
         displayHelper.showPopupMessage(message,"blanket");
      }
      if(success && !noVisualFeedback){
         platform.validate("done");
      }
      return { "success": success, "message": message };
   };

   function markEdge(vertex1,vertex2) {
      var edge = graph.getEdgesBetween(vertex1,vertex2);
      vGraph.setEdgeVisualInfo(edge[0],{"stroke":"red","stroke-width":5});
      redrawGraph();
   };

   function unmarkEdges() {
      var edges = graph.getAllEdges();
      for(var iEdge = 0; iEdge < edges.length; iEdge++){
         vGraph.setEdgeVisualInfo(edges[iEdge],{});
      }
      redrawGraph();
   };

   function redrawGraph() {
      vGraph.redraw();
      if(graphFrame){
         graphFrame.remove();
      }
      graphFrame = paper.rect().attr(graphFrameAttr).toBack();
      for(var vId in answer){
         if(answer[vId] !== null && answer[vId] != "initBf"){
            butterflyObj[answer[vId]].toFront();
         }
      }
   };

}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
