function initTask(subTask) {
   var cellSide = 60;

   subTask.gridInfos = {
      hideSaveOrLoad: false,
      cellSide: cellSide,
      actionDelay: 200,
      itemTypes: {
         tabornik: { img: "tabornik.png", category: "robot", side: 80, nbStates: 9, offsetX: -15 },
         obstacle1: { num: 2, img: "grm.png", side: cellSide, isObstacle: true },
         obstacle2: { num: 5, img: "drevo.png", side: cellSide, isObstacle: true },
         green: { num: 3, img: "cilj.png", side: cellSide, color: "vert" },
         pill1: { num: 4, img: "zvezda.png", side: cellSide, category: "pill", isObstacle: false, isCollectible: true, zOrder: 0 }
      },
      maxInstructions: 0,
      includeBlocks: {
         groupByCategory: true,
         generatedBlocks: {
            robot: ["east", "south", "north","west"]
         },
      standardBlocks: {
         includeAll: false,
         wholeCategories: [],
         singleBlocks: ["controls_repeat"]
      },

      },
      startingExample: {
         easy: {
               blockly:'<xml xmlns="http://www.w3.org/1999/xhtml">\n'+
               '<block type="robot_start" id="Pku..pcPD|FUv8BOy5rO" deletable="false" movable="false" editable="false" x="0" y="0">\n'+
               '<next><block type="controls_repeat_ext" id="I/bj~Yc641Csbs9zV69i">\n'+
               '<value name="TIMES">\n'+
               '<shadow type="math_number" id="Ub(#jY3*SI~c,gJCos9N">\n'+
               '<field name="NUM">10</field>\n'+
               '</shadow></value>\n'+
               '<statement name="DO">\n'+
               '<block type="east" id="+54HB+fL,hQC`A{APaEG">\n'+
               '</block>\n'+
               '</statement>\n'+
               '<next>\n'+
               '<block type="controls_repeat_ext" id="mF*;@?1}7*rZ{.7xMu1P">\n'+
               '<value name="TIMES">\n'+
               '<shadow type="math_number" id=";}3xUtE?rd/3h}1v:hOO">\n'+
               '<field name="NUM">10</field>\n'+
               '</shadow>\n'+
               '</value>\n'+
               '<statement name="DO">\n'+
               '<block type="south" id="@u#[|{[`Lkm:1Fxj:nGa">\n'+
               '</block>\n'+
               '</statement>\n'+
               '<next>\n'+
               '<block type="controls_repeat_ext" id="rhzxPp:HNXz0*{;rOP_]">\n'+
               '<value name="TIMES">\n'+
               '<shadow type="math_number" id="c:/pg||4l?zC5.Uy2GQP">\n'+
               '<field name="NUM">10</field>\n'+
               '</shadow>\n'+
               '</value>\n'+
               '<statement name="DO">\n'+
               '<block type="north" id="(/lXes:(gX6d)dux)B~I">\n'+
               '</block>\n'+
               '</statement>\n'+
               '<next>\n'+
               '<block type="controls_repeat" id="HYOxH}vS#CIc?91IVA}F">\n'+
               '<field name="TIMES">10</field>\n'+
               '<statement name="DO">\n'+
               '<block type="west" id="N4pdsMCtpTI/Z:JYQou8">\n'+
               '</block>\n'+
               '</statement>\n'+
               '</block>\n'+
               '</next>\n'+
               '</block>\n'+
               '</next>\n'+
               '</block>\n'+
               '</next>\n'+
               '</block>\n'+
               '</next>\n'+
               '</block>\n'+
               '</xml>'
            },
         medium: {
            blockly: '<xml xmlns="http://www.w3.org/1999/xhtml">\n'+
            '<block type="robot_start" id="p0sK+LBkTziVgCg{6Z|M" deletable="false" movable="false" editable="false" x="0" y="0">\n' +
            '</block><block type="controls_repeat_ext" id="!Etu(ID!mEL,DjE}vNgY" x="94" y="20">\n' +
            '<value name="TIMES">\n' +
            '<shadow type="math_number" id="jAtitT{*g1]?Iw0H=kJb">\n' +
            '<field name="NUM">8</field>\n' +
            '</shadow>\n' +
            '</value>\n' +
            '<statement name="DO">\n' +
            '<block type="south" id="rff*@3qyD#nLW+Op`x#X">\n' +
            '</block>\n' +
            '</statement>\n' +
            '<next>\n' +
            '<block type="controls_repeat_ext" id="CBm~b|W)8e*Fxv`G)P[/">\n' +
            '<value name="TIMES">\n' +
            '<shadow type="math_number" id="Fek/d(}!~V9,p](Y?@T]">\n' +
            '<field name="NUM">7</field>\n' +
            '</shadow>\n' +
            '</value>\n' +
            '<statement name="DO">\n' +
            '<block type="east" id="_YX34X]6DH@#?w2Es.r@">\n' +
            '</block>\n' +
            '</statement>\n' +
            '<next>\n' +
            '<block type="controls_repeat_ext" id="-m|:6iTy90ay(dZD4)PG">\n' +
            '<value name="TIMES">\n' +
            '<shadow type="math_number" id="1bnc}-XyCQ!@sJt0Q)CR">\n' +
            '<field name="NUM">6</field>\n' +
            '</shadow>\n' +
            '</value>\n' +
            '<statement name="DO">\n' +
            '<block type="north" id="|vl`}:ZIeY2P[8{u9CG3">\n' +
            '</block>\n' +
            '</statement>\n' +
            '<next>\n' +
            '<block type="controls_repeat_ext" id="a#4jWmm))3_Y-C~NAYzm">\n' +
            '<value name="TIMES">\n' +
            '<shadow type="math_number" id="pK3r194CNAtk[K1ll@yS">\n' +
            '<field name="NUM">5</field>\n' +
            '</shadow>\n' +
            '</value>\n' +
            '<statement name="DO">\n' +
            '<block type="west" id="oWSV1ggpCzF0[iy3=s06">\n' +
            '</block>\n' +
            '</statement>\n' +
            '<next>\n' +
            '<block type="controls_repeat_ext" id="a|QQp)P{n)]:lCyg!7YC">\n' +
            '<value name="TIMES">\n' +
            '<shadow type="math_number" id="J[E:j-wCK-Cb~NQw4r~-">\n' +
            '<field name="NUM">5</field>\n' +
            '</shadow>\n' +
            '</value>\n' +
            '<statement name="DO">\n' +
            '<block type="south" id="s5VoIfh=4TReGj9`Ipw`">\n' +
            '</block>\n' +
            '</statement>\n' +
            '<next>\n' +
            '<block type="controls_repeat_ext" id="f_x6[iW2=Jyny@ewjfzd">\n' +
            '<value name="TIMES">\n' +
            '<shadow type="math_number" id="3Uf:gECTpWb0paf81(/-">\n' +
            '<field name="NUM">3</field>\n' +
            '</shadow>\n' +
            '</value>\n' +
            '<statement name="DO">\n' +
            '<block type="west" id="I98wNz}4vj(,Wh4)brCJ">\n' +
            '</block>\n' +
            '</statement>\n' +
            '<next>\n' +
            '<block type="controls_repeat_ext" id="t~ksiRq72DyfY?[OgeB}">\n' +
            '<value name="TIMES">\n' +
            '<shadow type="math_number" id="{5Kprfw{o0AP#5n|ws/}">\n' +
            '<field name="NUM">2</field>\n' +
            '</shadow>\n' +
            '</value>\n' +
            '<statement name="DO">\n' +
            '<block type="north" id="+!((k|lC+_GC9XlJ4{pG">\n' +
            '</block>\n' +
            '</statement>\n' +
            '<next>\n' +
            '<block type="east" id="jaf@/O:|rr8IbxdtiKbh">\n' +
            '</block>\n' +
            '</next>\n' +
            '</block>\n' +
            '</next>\n' +
            '</block>\n' +
            '</next>\n' +
            '</block>\n' +
            '</next>\n' +
            '</block>\n' +
            '</next>\n' +
            '</block>\n' +
            '</next>\n' +
            '</block>\n' +
            '</next>\n' +
            '</block>\n' +
            '</xml>'

         },
      hard: {
         blockly: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="south" id="|e[PY0h4Vd0OFZm-(1nj" x="0" y="0"><next><block type="controls_repeat_ext" id="{PKoqUa-P7R}07p4:ar5"><value name="TIMES"><shadow type="math_number" id="vLLX;:kNCf_lsz[:]3B;"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="east" id="eJhKr4u}MZVFJ[CE-`uo"></block></statement><next><block type="north" id="R)gVamD5`5D~_GGf#.{+"><next><block type="controls_repeat_ext" id="wHg2n4X[@ERI++Chtre["><value name="TIMES"><shadow type="math_number" id="0`l8|{KuudW(TV_S2/Q*"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="east" id="IdT,2qN`;Oa.W`])=i];"></block></statement><next><block type="north" id="ZI!.hD98UGlNMWpu[-xJ"><next><block type="controls_repeat_ext" id="uYtf~Sdq4[,P?+?_y8@R"><value name="TIMES"><shadow type="math_number" id="_M[~Wn+.1EocEMRip{qo"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="west" id="7F~+9RG|a?9ag/=VMImy"></block></statement><next><block type="controls_repeat_ext" id="Kx_bIDp-9HM]p_*ocmcb"><value name="TIMES"><shadow type="math_number" id="|ffM97)u2r;]:xQqYy@@"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="south" id="([/}Wm?(!8T!YpE}g@bA"><next><block type="east" id="8k=NpFV]QF~jr(=|A[VG"></block></next></block></statement><next><block type="controls_repeat_ext" id="{q[{9LVsqazx#5I4w}l`"><value name="TIMES"><shadow type="math_number" id="K;`o3a,6pB,X1OcH:93d"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="south" id="6MRkqQI.ed]ei+Yqnfq="></block></statement><next><block type="controls_repeat_ext" id="7om=tv5Z`298quy,cCty"><value name="TIMES"><shadow type="math_number" id="7mMQDTeXgJ#/6F2bE}Q3"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="west" id=",P3;Pa|z9f,FNmnWWC;["></block></statement><next><block type="controls_repeat_ext" id=":l!A0Le~8YS_yC_fUCYt"><value name="TIMES"><shadow type="math_number" id="g85x6YkfB-(9-7#J;Cq{"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="north" id="d=-/91z[HJ(aII2dAj(~"></block></statement><next><block type="east" id="{sLzFeJxUlBBOkeOkNK7"><next><block type="north" id="lI?;`++H=txT`nIS,}Er"><next><block type="controls_repeat_ext" id="DxW;FbZrQOAs=(5o?!.?"><value name="TIMES"><shadow type="math_number" id="!A1S2]E/inlJc_hma37@"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="east" id="frTwk:N=-J`rn`MB3!()"></block></statement><next><block type="controls_repeat_ext" id="tq_9|BqpEX1]3Vq[8}.F"><value name="TIMES"><shadow type="math_number" id="}h~RW4zU:9a#Ib}Xe9@a"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="south" id="jykwYIDt(tdg;[l5O*y@"></block></statement><next><block type="controls_repeat_ext" id="m.g6v!+{tzN@:?lY!2#j"><value name="TIMES"><shadow type="math_number" id="UnU*}=(I6Mku0Tz9s~}u"><field name="NUM">2</field></shadow></value><statement name="DO"><block type="west" id="?COUYJ9fkKLB`cdP2=Fq"></block></statement><next><block type="south" id="xrQZAv+Dk`p]!5]#c7Jg"><next><block type="west" id="u]eoM#IkbU=83Ryu;Tt,"></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><block type="robot_start" id="p0sK+LBkTziVgCg{6Z|M" deletable="false" movable="false" editable="false" x="108" y="26"></block></xml>'
      },
      },
      backgroundColor: "#ffffff",
	   blocklyColourTheme: "bwinf",
      ignoreInvalidMoves: false,
      groupByCategory: false,
      includedAll: false,
      includedCategories: [ ],
      includedBlocks: [],
      checkEndEveryTurn: true,
      checkEndCondition: robotEndConditions.checkPickedAllCollectibles
   };

   subTask.data = {
      easy: [
         {
            tiles: [
               [1, 4, 4, 4, 4, 4],
               [2, 4, 2, 2, 2, 4],
               [2, 4, 2, 2, 2, 4],
               [2, 4, 4, 4, 4, 4]
				],
            initItems: [
                  { row: 0, col: 0, dir: 0, type: "tabornik" }
               ]
         }
      ],
      medium: [
         {
            tiles: [
               [1, 2, 4, 4, 4, 4, 4, 4],
               [4, 2, 4, 2, 2, 2, 2, 4],
               [4, 2, 4, 2, 4, 4, 2, 4],
               [4, 2, 4, 2, 2, 4, 2, 4],
               [4, 2, 4, 2, 2, 4, 2, 4],
               [4, 2, 4, 4, 4, 4, 2, 4],
               [4, 2, 2, 2, 2, 2, 2, 4],
               [4, 4, 4, 4, 4, 4, 4, 4],
				],
            initItems: [
                  { row: 0, col: 0, dir: 1, type: "tabornik" }
               ]
         }
      ],
      hard: [
         {
            tiles: [
               [1, 2, 4, 4, 4, 4, 4],
               [4, 4, 4, 2, 4, 4, 4],
               [4, 4, 4, 2, 4, 4, 2],
               [4, 2, 4, 4, 2, 4, 4],
               [4, 4, 4, 4, 2, 2, 4],
               [4, 4, 4, 4, 4, 4, 4],
               ],
            initItems: [
                  { row: 0, col: 0, dir: 1, type: "tabornik" }
               ]
         }
      ]
   };

   initBlocklySubTask(subTask);
}

initWrapper(initTask, ["easy", "medium", "hard"], null, true);
   