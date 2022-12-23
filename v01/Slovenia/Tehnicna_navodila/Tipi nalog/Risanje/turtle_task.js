function initTask(subTask) {
   subTask.gridInfos = {
      hideSaveOrLoad: true,
      actionDelay: 200,
      startingExample: {
         easy: {
             blockly:
                 '<xml id="workspace" style="display:none">\n' +
                 '  <block type="controls_repeat_ext" id="1" x="200" y="100">\n' +
                 '    <value name="TIMES">\n' +
                 '      <block type="math_number" id="2">\n' +
                 '        <field name="NUM">6</field>\n' +
                 '      </block>\n' +
                 '    </value>\n' +
                 '    <statement name="DO">\n' +
                 '      <block type="turnleftamount" id="3">\n' +
                 '        <value name="PARAM_0">\n' +
                 '          <shadow type="math_number" id="4">\n' +
                 '            <field name="NUM">10</field>\n' +
                 '          </shadow>\n' +
                 '          <block type="math_number" id="5">\n' +
                 '            <field name="NUM">60</field>\n' +
                 '          </block>\n' +
                 '        </value>\n' +
                 '        <next>\n' +
                 '          <block type="moveamount" id="6">\n' +
                 '            <value name="PARAM_0">\n' +
                 '              <shadow type="math_number" id="7">\n' +
                 '                <field name="NUM">10</field>\n' +
                 '              </shadow>\n' +
                 '              <block type="math_number" id="8">\n' +
                 '                <field name="NUM">100</field>\n' +
                 '              </block>\n' +
                 '            </value>\n' +
                 '          </block>\n' +
                 '        </next>\n' +
                 '      </block>\n' +
                 '    </statement>\n' +
                 '  </block>\n' +
                 '</xml>'
         },
         medium: {
             blockly:
                 '<xml id="workspace" style="display:none">\n' +
                 '  <block type="controls_repeat_ext" id="1" x="0" y="300">\n' +
                 '    <value name="TIMES">\n' +
                 '      <block type="math_number" id="2">\n' +
                 '        <field name="NUM">6</field>\n' +
                 '      </block>\n' +
                 '    </value>\n' +
                 '  </block>\n' +
                 '  <block type="turnleftamount" id="3" x="480" y="210">\n' +
                 '    <value name="PARAM_0">\n' +
                 '      <shadow type="math_number" id="4">\n' +
                 '        <field name="NUM">10</field>\n' +
                 '      </shadow>\n' +
                 '      <block type="math_number" id="5">\n' +
                 '        <field name="NUM">60</field>\n' +
                 '      </block>\n' +
                 '    </value>\n' +
                 '  </block>\n' +
                 '  <block type="moveamount" id="6" x="100" y="500">\n' +
                 '    <value name="PARAM_0">\n' +
                 '      <shadow type="math_number" id="7">\n' +
                 '        <field name="NUM">10</field>\n' +
                 '      </shadow>\n' +
                 '      <block type="math_number" id="8">\n' +
                 '        <field name="NUM">100</field>\n' +
                 '      </block>\n' +
                 '    </value>\n' +
                 '  </block>\n' +
                 '</xml>'
         },
         hard: {
             blockly:
                 '<xml id="workspace" style="display:none">\n' +
                 '  <block type="controls_repeat_ext" id="1" x="0" y="300">\n' +
                 '    <value name="TIMES">\n' +
                 '      <block type="math_number" id="2">\n' +
                 '        <field name="NUM">6</field>\n' +
                 '      </block>\n' +
                 '    </value>\n' +
                 '  </block>\n' +
                 '  <block type="turnrightamount" id="3" x="180" y="310">\n' +
                 '    <value name="PARAM_0">\n' +
                 '      <shadow type="math_number" id="4">\n' +
                 '        <field name="NUM">10</field>\n' +
                 '      </shadow>\n' +
                 '      <block type="math_number" id="5">\n' +
                 '        <field name="NUM">60</field>\n' +
                 '      </block>\n' +
                 '    </value>\n' +
                 '  </block>\n' +
                 '  <block type="movebackamount" id="6" x="300" y="500">\n' +
                 '    <value name="PARAM_0">\n' +
                 '      <shadow type="math_number" id="7">\n' +
                 '        <field name="NUM">10</field>\n' +
                 '      </shadow>\n' +
                 '      <block type="math_number" id="8">\n' +
                 '        <field name="NUM">100</field>\n' +
                 '      </block>\n' +
                 '    </value>\n' +
                 '  </block>\n' +
                 '</xml>'
         }

      },
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            easy: {turtle: ["moveamount", "turnleftamount", "turnrightamount"]},
             medium: {turtle: ["moveamount", "turnleftamount", "turnrightamount"]},
             hard: {turtle: ["moveamount", "movebackamount", "turnleftamount", "turnrightamount"]},
         },
         standardBlocks: {
            includeAll: false,
            wholeCategories: ["variables"],
            singleBlocks: ["controls_repeat_ext", "math_number"]
         }
      },
      overlayFileName: "sand.png",
      turtleStepSize: 0.1,
      coords: {x: 240, y: 200},
      maxInstructions: {easy: 0, medium: 0, hard: 0},
      blocklyColourTheme: "bwinf",
      checkEndEveryTurn: false,
      checkEndCondition: function(context, lastTurn) {
         if (lastTurn) {
            var userImage = context.turtle.invisibleTurtle.drawingContext.getImageData(0, 0, 300, 300);
            var solutionImage = context.turtle.invisibleSolutionTurtle.drawingContext.getImageData(0, 0, 300, 300);
            var len = Math.min(userImage.data.length, solutionImage.data.length);
            var delta = 0;
            var fill = 0;
            var empty = 0;
            // Pixels are in RGBA format.  Only check the Alpha bytes.
            for (var i = 3; i < len; i += 4) {
               // Check the Alpha byte.
               if (Math.abs(userImage.data[i] - solutionImage.data[i]) > 127) {
                  delta++;
               }
               if (solutionImage.data[i] > 127)
                  fill++;
               else
                  empty++;
            }
            
            if (delta < Math.min(fill,empty) * 0.1) {
               context.success = true;
               throw(window.languageStrings.messages.paintingCorrect);
            }
            else {
               context.success = false;
               throw(window.languageStrings.messages.paintingWrong);
            }
         }
      },
      computeGrade: function(context, message) {
         var rate = 0;
         if (context.success) {
            rate = 1;
            if (context.nbMoves > 100) {
               rate /= 2;
               message += strings.moreThan100Moves;
            }
         }
         return {
            successRate: rate,
            message: message
         };
      }
   };

   subTask.data = {
      easy: [{
          drawSolution : function(turtle) {
             for (var i = 0; i < 6; ++i) {
                 turtle.move(100);
                 turtle.turn(60);
             }
          },
         }],
       medium: [{
           drawSolution : function(turtle) {
               for (var i = 0; i < 6; ++i) {
                   turtle.move(100);
                   turtle.turn(60);
               }
           },
       }],
       hard: [{
           drawSolution : function(turtle) {
               for (var i = 0; i < 6; ++i) {
                   turtle.move(100);
                   turtle.turn(60);
               }
           },
       }],
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null);
   
