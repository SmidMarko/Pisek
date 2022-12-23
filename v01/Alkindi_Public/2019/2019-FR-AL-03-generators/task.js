function initTask(subTask) {
   var state = {};
   var level;
   var answer = null;
   var data = {
         // password types : (see generateSymbol)
         // 0 : numbers only
         // 1 : letters only
         // 2 : numbers and letters (alphanumerical)
         // 3 : numbers againmix
      easy: {
         passwordTypes: [ 1, 4 ],
         range: [ 6, 9 ]
      },
      medium: {
         passwordTypes: [  1 , 2],
         range: [ 6, 9 ]
      },
      hard: {
         passwordTypes: [ 3 ],
         range: [ 6, 6 ]
      }
   };

   var leaked_passwords = [
      // digits only

      ["222222", "124578", "474747", "575757", "311311", "120120", "111777", "515051", "130390", "150787", "362514", "200788", "120579", "170889", "150686", "270183", "310181", "290388", "250590", "121086", "220188", "200882", "120687", "963741", "211188", "070783", "310387", "210382", "190587", "120391", "010385", "280492", "201182", "160784", "140387", "130591", "090983", "011281", "300689", "290590", "230790", "181094", "131087", "040580", "181191", "150380", "140892", "071186", "260481", "220278", "200981", "151282", "120787", "260584", "240482", "197500", "160379", "140683", "050680", "260678", "230180", "200291", "170386", "111184", "110371", "060786", "040285", "280182", "230580", "210189", "150683", "051186", "040584", "030789", "010979", "300679", "123147", "100291", "040474", "030585", "020487", "526452", "260193", "240775", "161177", "151176", "150879", "144000", "071179", "070683", "030594", "300178", "270887", "241191", "230794", "211293", "200585", "191288", "121190", "100472","111222", "565656", "456654", "162534", "020202", "142857", "132465", "001122", "070787", "311088", "100388", "280690", "130790", "280588", "230189", "150889", "300688", "120686", "030383", "180180", "130489", "111116", "110689", "251084", "151185", "110884", "210381", "141285", "110581", "231191", "061288", "270288", "220288", "120882", "100487", "020782", "250485", "210687", "019283", "250988", "230679", "220688", "200582", "190185", "160383", "140881", "101073", "251183", "250291", "200982", "160581", "130481", "120289", "101292", "090787", "021065", "280288", "231181", "230587", "161082", "140989", "041083", "616913", "280286", "240494", "151087", "100978", "100878", "060984", "020679", "311095", "300476", "241292", "140587", "110578", "060687", "040488", "314314", "280784", "250581", "220181", "200782", "140575", "120284", "101274", "090583", "030586", "300790", "240181", "180489", "090578", "071188", "070492", "061293", "030380", "021183", "300595", "220493", "156156", "090490", "240573", "210676", "190688", "181086", "170474", "123423", "110864", "081293", "070791", "070188", "050281", "281175", "260276", "240992", "220973", "131177", "130284", "123400", "110693", "101175", "080780", "040577", "020696", "355355", "221192", "220874", "211090", "210378", "200979", "158272", "110676", "080286", "061183", "060883", "031293", "030682", "011190", "789551", "160969", "160178", "100593", "081088", "080175", "070293", "051271", "050569", "030378", "709394", "310180", "281169", "250172", "191291", "170992", "141273", "111870", "100773", "020389", "020191", "300696", "271069", "251077", "240595", "221070", "210286", "170496", "150674", "121977", "120367", "100568", "050474", "030491", "020887", "020256", "230573", "230295", "220462", "210371", "197926", "190575", "150298", "141071", "100997", "091294", "081170", "061278", "050878", "001978", "260570", "220499", "190593", "160370", "141076", "140465", "125690", "120666", "102375", "101987", "060577", "040772","159753","789456"],


      // letters only
      
["azerty","azerty", "azerty", "azertyuiop","azertyuiop","motdepasse","motdepasse","chouchou","jetaime", "maison","aqwzsx","aqwzsxedc","monamour","iloveyou","buster", "klaster", "tigers", "knight", "jonathan", "sandra", "carter", "hawaii", "vladimir", "brooke", "baxter", "white", "rockstar", "abcdefgh", "bobcat", "minnie", "maiden", "poison", "zipper", "warren", "party", "christop", "ripper", "dodge", "crimson", "bird", "herbert", "starcraft", "warriors", "coco", "knights", "window", "rebels", "cooler", "greg", "justdoit", "content", "desert", "franco", "children", "dalton", "budman", "pinkfloy", "tuesday", "babies", "dthjybrf", "gofish", "gogo", "fabian", "mellon", "nancy", "corrado", "sean", "tommyboy", "matador", "smegma", "hotred", "haha", "getmoney", "tabitha", "korn", "whisky", "yumyum", "shai", "pobeda", "supreme", "talisman", "jing", "pippin", "jjjjj", "virtual", "sheng", "reynolds", "mantis", "fergie", "marker", "snooker", "lilian", "reload", "jingle", "webhompas", "erin", "wwww", "webmaste", "drive", "dandan", "cottage", "snowflak", "dudedude", "playstat", "nights", "reflex", "wapbbs","soccer", "yankees", "maverick", "melissa", "boomer", "rocket", "sydney", "bigboy", "fluffy", "sabrina", "vincent", "natalie", "softball", "alexander", "sweet", "karina", "people", "phpbb", "lawrence", "ronald", "sasha", "trooper", "bubble", "bunny", "sugar", "karate", "brandi", "marie", "mario", "head", "lollipop", "shasta", "trains", "memphis", "stranger", "quality", "finish", "tina", "scarlett", "anime", "shaman", "melvin", "josh", "peterpan", "sooner", "shelley", "romashka", "sony", "splash", "lifetime", "bikini", "leelee", "kenshin", "carl", "hang", "horizon", "barber", "tazmania", "lamont", "sunshin", "welder", "leonid", "greene", "chao", "boricua", "petra", "marin", "ninjas", "venera", "meng", "pppp", "weng", "duan", "tototo", "masamune", "becker", "someone", "reckless", "jayson", "dynasty", "bolton", "mari", "fandango", "faithful", "loveless", "celeb", "dalshe", "renata", "yyyyyy", "gbhfvblf", "nfytxrf","secret", "nikita", "pokemon", "nirvana", "shelby", "trinity", "fire", "enigma", "bill", "general", "kawasaki", "brooke", "colorado", "bambam", "xxxx", "darkside", "france", "devils", "blizzard", "casino", "bowling", "stealth", "sweety", "dollar", "knicks", "siemens", "hesoyam", "lollol", "christia", "chiefs", "brown", "nicolas", "alejandr", "teen", "unreal", "foster", "privet", "obiwan", "showtime", "gold", "gothic", "blade", "dixie", "roller", "beckham", "simba", "gator", "hermes", "viktoria", "plumber", "drake", "shane", "ready", "hawk", "splash", "jenna", "bubbas", "grandma", "nnnnnn", "zxcasdqwe", "cooter", "candle", "tang", "knopka", "alibaba", "juggalo", "sparks", "albion", "beanie", "chrono", "topher", "user", "bigbear", "titanium", "diehard", "ufkbyf", "phish", "jewels", "terrapin", "bigmike", "dddddddd", "trapper", "thumbs", "svoboda", "babyface", "strength", "zappa", "lucille", "banzai", "sonoma", "pringles", "march", "titten", "bunnies", "sunflower", "stepan", "helene", "normal", "highheel", "icehouse"], 




// letters and digits
      ["bond007", "area51", "chevy1", "daniel1", "tommy1", "cobra1", "a1a1a1", "gator1", "icu812", "12345s", "qwert40", "pinky1", "elway7", "andrea1", "ou8123", "mommy1", "55bgates", "rambo1", "gators1", "drag0n", "b12345", "scooby1", "bravo1", "angel12", "photo1", "mark123", "rosie1", "cezer121", "snowman1", "gregory1", "camaro1", "payton34", "rush2112", "1357911q", "brianna1", "xrp23q", "japan1", "bonnie1", "bones69", "victor1", "haha123", "2fchbg", "toronto1", "seven11", "donald1", "alexis1", "mnbvcxz1", "jordan12", "12e3e456", "howdy1", "dummy1", "crazy123", "sevilia1", "asfnhg66", "quick1", "andre123", "6bjvpe", "123456x", "wesley1", "student1", "rocky1", "master2", "ingram01", "beaver1", "tyrik123", "scooter1", "dunce1", "cookie59", "welcome8", "shearer9", "sc0tland", "patrick8", "jessica7", "jenny123", "golfvr6", "david1", "banjo1", "2wj2k9oj", "duke01", "d78unhxq", "a19l1980", "4freedom", "1panther", "pacific1", "cobra1", "britt1", "virus1", "ppppp1", "jmh1978", "iloveme2", "hello3", "chevy1", "alex95", "aaa123a", "6jhwmqku", "nikki123", "miller2", "leto2010", "killer11", "charle1", "august12", "west123", "tekken3", "simba2", "ppppp1", "isaac1", "icecube1", "divine5", "chicago1", "bond00", "alex007", "1bbbbbbb", "swiss1", "roman777", "pandora2", "october3", "mickey22", "jorge1", "gtogto43", "dude1234", "dell50", "beer69", "1iceman", "travis1", "thomas22", "p3orion", "mark3434", "macross1", "jason11", "hacker1", "dannym88", "bot2010", "123vika", "twenty2", "sunny2", "strong1", "rabbit66", "qwerty09", "power01", "misha123", "master66", "mama1965", "mafia1", "louis123", "joker777", "gizmo2", "bryan123", "boomer22", "beano002", "1newlife", "sunshin1", "smooth15", "seattle1", "scuba123", "sakura1", "redwing1", "psycho78", "lunar2", "kimber1", "h1d2b3", "goirish1", "fifty5", "david9", "bubba8", "black11", "bigmac1", "a159753", "136611gt", "yavin4", "uncle1", "sonja1", "scamp1", "sasha14", "pumpkin9", "music11", "mazda123", "grayson1", "forest5", "diamond0", "cricket1", "chicago9", "carlos10", "button12", "beck69", "april2", "ab12345", "890iop", "77sunset", "65impala", "2q3w4e", "1yamaha", "1bubba", "willie2", "ujkjc1", "tonto123", "raptor1", "raleigh1", "rabbit69", "phantom7", "patches2", "ninjazx7", "ng1971", "momma1", "messier1", "lol12345", "krishna1", "jon123", "happy123", "golden1", "gateway7", "finger1", "drummer2", "douglas2", "double07", "bubba111", "br0ken", "bigman69", "beer13", "alpha190", "adam22", "a2345678", "55555s", "4r4r4r", "1carmen", "vr265tu", "tramado1", "tiggy1", "rebel10", "r5t6y7u8", "picard01", "n7dj3saa", "manny2", "magic10", "light100", "irish11", "ira1985", "ibiza1", "goforit2", "futures1", "fresh123", "fender99", "duck123", "daniel0", "copper12", "catch222", "bart01", "banner1", "57ford", "1steven", "1penguin", "1998vlad", "111111v", "y76tb1", "trouble3", "teresa12", "ss1234", "silver13", "roger444", "robert1", "redsox33", "r1100gs", "pearl2", "oscar200", "ofen66", "matrix03", "love666", "live12", "lance01", "lacross1", "l00000", "koko12", "josh13", "jocelyn1", "ibanez1", "hendrix9", "greece1", "gemam2", "fg5632", "dwade3", "doreen1", "dogfood1", "dianne1", "det6pal", "denver01", "control1", "ccc222", "cally1", "buick87", "boomer45", "banker1", "athens1", "aptiva12"],

   // Mix (arbitrary printable chars
   [ "mustang", "merlin", "snoopy", "tigers", "please", "muffin", "jonathan", "hotdog", "mountain", "rush2112", "trinity", "maximus", "bollocks", "eagle1", "bill", "kelly", "marley", "molly", "juventus", "1111111111", "taurus", "airplane", "01012000", "berlin", "kramer", "666999", "bowling", "student", "testtest", "seattle", "cessna", "birthday", "hornet", "special", "pioneer", "diamonds", "artist", "mario", "martina", "nolimit", "immortal", "eternity", "velvet", "butt", "262626", "darwin", "tanker", "25802580", "blood", "brasil", "lonestar", "hell", "stonecol", "imagine", "garbage", "palace", "aggies", "southern", "sarah1", "telefon", "puppy", "keystone", "beast", "star69", "pauline", "momoney", "illini", "aikido", "bikini", "hithere", "february", "609609609", "rich", "anaconda", "sword", "ramses", "downtown", "marc", "sneakers", "haha", "030303", "erik", "dada", "kristine", "champ", "montgom240", "journey", "4545", "wagner", "team", "mazafaka", "bonbon", "cubswin", "02051986", "beamer", "norway", "guai", "secrets", "kissing", "geng", "anne", "sanfran", "dfcbkbq", "bullfrog", "tank", "jump", "eagles1", "alex123", "tiburon", "zzzzzzz", "store", "drakon", "qazwsxedc123", "111qqq", "zhjckfd", "dogboy", "guyver", "1616", "dogger", "slamdunk", "superma", "12021988", "pallmall", "tiger2", "clay", "606060", "25031987", "20091991", "irinka", "flores", "02031988", "rosario", "lantern", "zildjian", "nikolai", "kieran", "24111987", "papillon", "cleopatr", "14011986", "vendetta", "holes", "bennie", "19061990", "qazxcv", "2626", "noname", "357951", "1115", "tinkerbe", "dylan1", "5201314", "22021985", "spoons", "ranch", "26031984", "merlin1", "evangelion", "17091987", "mulligan", "blaine", "12051987", "stafford", "longhair", "gotham", "30111987", "18081988", "08011986", "02061972", "peterbil", "junkmail", "29061988", "1245", "05011987", "harrier", "brest", "acidburn", "66613666", "29011982", "11051988", "pizzaman", "contract", "17061987", "02061990", "01091988", "phat", "dental", "bobmarley", "23101987", "22071992", "12071992", "shady", "neon", "clement", "27091983", "19021985", "1218", "09101985", "panhead", "civicsi", "25121986", "11121990", "05071983", "wheeler", "parkour", "liliya", "leland", "bowl", "17051993", "womam", "smother", "londo", "19121986", "19121985", "11041988", "07021990", "01081980", "sentry", "scouts", "funk", "bertram", "19061986", "07091985", "rosewood", "metro", "ciaociao", "25101986", "23091983", "06121988", "03081992", "wertzu", "highlife", "alcatel", "20051981", "10101982", "07081992", "maxi", "dragonfly", "doodles", "andyandy", "22021987", "17061983", "11051985", "07081983", "vince", "redleg", "poisson", "orgasms", "daydream", "31071988", "25111985", "21041983", "09081986", "wendell", "ruth", "firestorm", "27111982", "21021991", "14081992", "07081990", "winter99", "scooby1", "mathias", "businessbabe", "24031984", "15101982", "14121985", "11041974", "05011985", "02121992", "newstart",  "moimoi", "heeled", "bobobobo", "28091989", "26051985", "12locked", "01101982", "q1q2q3q4", "impulse", "graphic", "GOLFER", "cherie", "29091989", "23081983", "23061986", "171186", "14061987", "01101991", "planner", "iron", "irakli", "chris2","andrew", "snoopy", "1q2w3e4r", "sophie", "butter", "q1w2e3", "nothing", "tomcat", "scott", "forest", "frankie",  "bradley", "mine",  "kenneth", "456123", "thailand", "bruins", "pppppp", "atlantis",  "mylove", "hamlet", "marino", "jerome", "bigone", "hunting", "pebbles", "vfvjxrf", "christy", "seminole", "plastic", "letmein2", "florence",  "robinson", "privet", "amadeus", "mirage", "raistlin", "12369874", "madrid", "qwer", "flames", "ragnarok", "qqqqqqqq", "katerina", "grateful", "myself", "peugeot", "sabbath", "beefcake", "gjkbyf", "moneys", "billie", "tuesday", "star69", "jennie", "hunter1", "wendy", "giant", "sayang", "scotch", "kristy", "selena", "malaka", "melissa1", "ddddddd", "depeche", "pingpong", "tool", "sparks",  "golfgolf", "becky", "marino13", "amsterda", "second", "christina", "whitesox", "backup", "quartz", "12qw34er", "Master", "traveler", "shang", "games", "yoyo", "marin", "02031986", "remote", "nikolay", "PolniyPizdec0211", "jenn", "penny1", "baseball1", "todd", "otto" ] 

];


   var paper;
   var paperWidth = 730;
   var paperHeight;

   var marginX = 20;
   var marginY = 20;
   var nGenerators = { easy: 5, medium:8, hard:8};
   var headerH = 40;
   var generatorH = 90;
   var buttonW = 30;
   var buttonH = 30;
   var passwordFrameW = 167;
   var passwordFrameH = 30;
   var switchW = 40;
   var switchH = 20;
   var rng;
   // var generatorTypes = [];
   var labelRaph = [];
   var buttonRaph = [];
   var passwordsRaph = [];
   var switchRaph = [];
   var passwordTypes;
   var range;
   var constraint = taskStrings.constraint;
   var typeLabel = [ taskStrings.onlyDigits, taskStrings.onlyLetters, taskStrings.onlyAlphanum, taskStrings.random ];

   var colors = {
      grey: "#EAEAEA",
      darkGrey: "#cbc7c9",
      green: "#88BB88",
      darkerGreen: "#508855",
      black: "#30242B"
   };
   
   var frameAttr = {
      stroke: "none",
      fill: colors.grey,
      r: 5
   };
   var titleAttr = {
      "font-size": 14,
      "font-weight": "bold",
      fill: colors.darkerGreen
   };
   var lineAttr = {
      stroke: colors.green
   };
   var genLineAttr = {
      stroke: colors.darkGrey
   };
   var numberAttr = {
      "font-size": 14,
      "font-weight": "bold",
      fill: colors.darkerGreen,
      "text-anchor": "start"
   };
   var constraintAttr = {
      "font-size": 14,
      "font-weight": "bold",
      fill: colors.black,
      "text-anchor": "start"
   };
   var labelAttr = {
      "font-size": 14,
      fill: colors.black,
      "text-anchor": "start"
   };
   var buttonAttr = {
      stroke: "none",
      fill: colors.green
   };
   var passwordFrameAttr = {
      stroke: "none",
      fill: "white",
      width: passwordFrameW,
      height: passwordFrameH,
      r: passwordFrameH/2
   };
   var arrowAttr = {
      stroke: "none",
      fill: "white"
   };
   var passwordAttr = {
      "font-size": 14,
      "font-weight": "bold",
      fill: colors.darkerGreen
   };
   var unselectedAttr = {
      stroke: "none",
      fill: colors.darkGrey
   };
   var selectedAttr = {
      stroke: "none",
      fill: colors.green
   };
   var switchAttr = {
      rect: {
         stroke: "none",
         fill: colors.darkGrey,
         width: switchW,
         height: switchH,
         r: switchH/2
      },
      circle: {
         stroke: "none",
         fill: colors.green,
         r: switchH/2
      },
      clickZone: {
         stroke: "none",
         fill: "black",
         opacity: 0,
         width: 110,
         height: switchH
      }
   };
   
   function getLevelSeed(level) {
      var seed = subTask.taskParams.randomSeed;
      var extraSeed = {easy: 0, medium: 1, hard: 2};
      return seed + extraSeed[level];
   }

   subTask.loadLevel = function(curLevel) {
      displayHelper.avatarType = "laptop";
      level = curLevel;
      rng = new RandomGenerator(getLevelSeed(level));
      paperHeight = headerH + (nGenerators[level]) * generatorH;
      passwordTypes = data[level].passwordTypes;
      range = data[level].range;
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
      initPasswordGenerator();
      initHandlers();
      displayError("");
   };

   subTask.getAnswerObject = function() {
      return answer;
   };

   subTask.getDefaultAnswerObject = function() {
      var seed = getLevelSeed(level);
      rng.reset(seed);
      var defaultAnswer = {
         switch: Beav.Array.make(nGenerators[level],1),
         generatorTypes: [],
         seed: seed
      };
      var b1 = rng.nextBit();
      var b2 = rng.nextBit();
      var b3 = rng.nextBit(); 
      var b4 = rng.nextBit(); 
      if (level == "easy") {
         defaultAnswer.generatorTypes = [
            {type:1, humanOrComp:b1},
            {type:1, humanOrComp:(1-b1)},
            {type:3, humanOrComp:b2},
            {type:3, humanOrComp:b3},
            {type:3, humanOrComp:(1-b2)},
         ];
      } else if (level == "medium") {
         defaultAnswer.generatorTypes = [
            {type:1, humanOrComp:b1},
            {type:1, humanOrComp:b2},
            {type:1, humanOrComp:(b3*(1-b1)+(1-b3)*(1-b2))},
            {type:1, humanOrComp:((1-b3)*(1-b1)+b3*(1-b2))},
            {type:2, humanOrComp:b3},
            {type:2, humanOrComp:b4},
            {type:2, humanOrComp:b1*(1-b3)+(1-b1)*(1-b4)},
            {type:2, humanOrComp:b1*(1-b4)+(1-b1)*(1-b3)},
         ];
      } else {
         defaultAnswer.generatorTypes = [
            {type:0, humanOrComp:b1},
            {type:0, humanOrComp:b2},
            {type:0, humanOrComp:b3},
            {type:0, humanOrComp:b4},
            {type:0, humanOrComp:(b3*(1-b1)+(1-b3)*(1-b2))},
            {type:0, humanOrComp:(b3*(1-b2)+(1-b3)*(1-b1))},
            {type:0, humanOrComp:(b1*(1-b3)+(1-b1)*(1-b4))},
            {type:0, humanOrComp:(b1*(1-b4)+(1-b1)*(1-b3))}
         ];
      }
//      rng.shuffle(defaultAnswer.generatorTypes);
      return defaultAnswer;
   };

   subTask.unloadLevel = function(callback) {
      callback();
   };

   subTask.getGrade = function(callback) {
      callback(getResultAndMessage());
   };

   function getResultAndMessage() {
      for(var iGen = 0; iGen < nGenerators[level]; iGen++){
         if(answer.switch[iGen] != answer.generatorTypes[iGen].humanOrComp){
            return { successRate: 0, message: taskStrings.error };
         }
      }
      return { successRate: 1, message: taskStrings.success };
   };

   function initPaper() {
      paper = subTask.raphaelFactory.create("paper","paper",paperWidth,paperHeight);
   };

   function initPasswordGenerator() {
      var x0 = 0;
      var y0 = 0;
      paper.rect(x0,y0,paperWidth,paperHeight).attr(frameAttr);
      paper.text(paperWidth/2, headerH/2, taskStrings.passwordGenerator).attr(titleAttr);
      paper.path("M"+x0+" "+(y0 + headerH)+",H"+paperWidth).attr(lineAttr);

      for(var iGen = 0; iGen < nGenerators[level]; iGen++){
         var y = y0 + headerH + iGen*generatorH;
         addGenerator(x0,y,iGen,iGen == nGenerators[level] - 1);
         updateGenerator(iGen);
      }
   };

   function initHandlers() {
      for(var iGen = 0; iGen < nGenerators[level]; iGen++){
         switchRaph[iGen].clickZone.click(clickSwitch(iGen));
         switchRaph[iGen].clickZone.attr("cursor","pointer");
         buttonRaph[iGen].click(generatePasswords(iGen));
         buttonRaph[iGen].changeOverlay({"cursor":"pointer"});
      }
   };

   function drawSwitch(paper, x, y) {
      var rect = paper.rect(x,y).attr(switchAttr.rect);
      var circle = paper.circle(x + switchW - switchH/2, y + switchH/2).attr(switchAttr.circle);
      return paper.set(rect,circle);
   }
   
   function drawUserComputerSwitch(paper, x, y) {
      var pathUser = "m 6.586372,7.52728 c 2.0788239,0 3.763642,-1.68482 3.763642,-3.76365 C 10.350014,1.68481 8.6651959,0 6.586372,0 4.5075484,0 2.8227309,1.68481 2.8227309,3.76363 c 0,2.07883 1.6848175,3.76365 3.7636411,3.76365 z M 9.2209211,8.46819 H 8.7298832 C 8.0771266,8.7681 7.350862,8.93864 6.586372,8.93864 5.8218824,8.93864 5.0985576,8.7681 4.4428608,8.46819 H 3.9518232 C 1.7700875,8.46819 0,10.23828 0,12.42001 v 1.22319 c 0,0.77918 0.6321741,1.41136 1.4113654,1.41136 H 11.761379 c 0.779191,0 1.411366,-0.63218 1.411366,-1.41136 v -1.22319 c 0,-2.18173 -1.770089,-3.95182 -3.9518239,-3.95182 z";
      var user = paper.path(pathUser).attr(unselectedAttr);
      user.transform("t" + x + " " + y + ",S" + 1.3 + " " + 1.3 + " " + x + " " + y);
      var xSwitch = x + 1.5 * marginX;
      var sw = drawSwitch(paper, xSwitch, y);
      var pathDesktop = "M 15.661017,0 H 1.4237288 C 0.63771186,0 0,0.63771 0,1.42373 v 9.49152 c 0,0.78602 0.63771186,1.42373 1.4237288,1.42373 H 7.1186441 L 6.6440678,13.76271 H 4.5084746 c -0.3944915,0 -0.7118644,0.31737 -0.7118644,0.71187 0,0.39449 0.3173729,0.71186 0.7118644,0.71186 h 8.0677964 c 0.394492,0 0.711865,-0.31737 0.711865,-0.71186 0,-0.3945 -0.317373,-0.71187 -0.711865,-0.71187 H 10.440678 L 9.9661017,12.33898 h 5.6949153 c 0.786017,0 1.423729,-0.63771 1.423729,-1.42373 V 1.42373 C 17.084746,0.63771 16.447034,0 15.661017,0 Z M 15.186441,10.44068 H 1.8983051 V 1.8983 H 15.186441 Z";
      var xDesktop = xSwitch + switchW + marginX/2;
      var desktop = paper.path(pathDesktop).attr(selectedAttr);
      desktop.transform("t" + xDesktop + " " + y + ",S" + 1.3 + " " + 1.3 + " " + xDesktop + " " + y );
      var clickZone = paper.rect(x, y).attr(switchAttr.clickZone);
      return {
         user: user,
         desktop: desktop,
         switch: sw,
         clickZone: clickZone
      };
   }

   function updateSwitch(sw, state) {
      var xSw = sw.switch[0].attr("x");
      if(state){
         sw.user.attr(unselectedAttr);
         sw.desktop.attr(selectedAttr);
         sw.switch[1].attr("cx",xSw + switchW - switchH/2);
      }else{
         sw.user.attr(selectedAttr);
         sw.desktop.attr(unselectedAttr);
         sw.switch[1].attr("cx",xSw + switchH/2);
      }
   };
   
   function drawReloadButton(paper, x, y) {
      var reloadButton = new Button(paper, x, y, buttonW, buttonH, "");
      reloadButton.setAttr("rect","enabled",buttonAttr);
      reloadButton.setAttr("shadow","enabled",{opacity:0});
      var arrow = paper.path("M 19.4664,3.0384154e-7 H 17.59184 A 0.47447189,0.47809697 0 0 0 17.117369,0.5008118 l 0.158157,3.297267 A 9.7828204,9.857563 0 0 0 9.8057535,0.3187347 c -5.4034451,0 -9.80970065,4.4435131 -9.8057508465993,9.8882393 C 0.00409265,15.660467 4.3928223,20.080076 9.8057535,20.080076 a 9.7701671,9.844814 0 0 0 6.5706495,-2.546268 0.47447189,0.47809697 0 0 0 0.01897,-0.694435 l -1.344334,-1.354604 a 0.47447189,0.47809697 0 0 0 -0.647658,-0.02192 6.9589213,7.0120889 0 1 1 1.179062,-9.1758792 l -4.014426,-0.194021 a 0.47447189,0.47809697 0 0 0 -0.497008,0.478093 v 1.888887 a 0.47447189,0.47809697 0 0 0 0.474471,0.478094 h 7.920911 a 0.47447189,0.47809697 0 0 0 0.474478,-0.478094 V 0.4781018 A 0.47447189,0.47809697 0 0 0 19.466391,3.0384154e-7 Z");
      arrow.transform("t" + (x + 5) + " " + (y + 5) + "s0.8");
      reloadButton.addElement("path",arrow);
      reloadButton.setAttr("path","enabled",arrowAttr);
      return reloadButton;
   }

   function addGenerator(x,y,id,isLast) {
      var index = id + 1;
      var x0 = x + marginX;
      var y0 = y + marginY;
      paper.text(x0,y0,index).attr(numberAttr);
      paper.text(x0+marginX,y0,constraint).attr(constraintAttr);
      labelRaph[id] = paper.text(x0 + 105,y0,"").attr(labelAttr);

      var xButton = x + 33;
      var yButton = y + 45;
      buttonRaph[id] = drawReloadButton(paper, xButton, yButton);

      passwordsRaph[id] = [];
      for(var iFrame = 0; iFrame < 3; iFrame++){
         var xFr = xButton + buttonW + marginX/2 + iFrame*(passwordFrameW + marginX/2);
         var yFr = yButton;
         paper.rect(xFr,yFr).attr(passwordFrameAttr);
         passwordsRaph[id][iFrame] = paper.text(xFr + passwordFrameW/2, yFr + passwordFrameH/2,"").attr(passwordAttr);
      }
      
      var xSwitch = xButton + buttonW + marginX/2 + 3*(passwordFrameW + marginX/2) + marginX/4;
      switchRaph[id] = drawUserComputerSwitch(paper, xSwitch, yFr + 5);

      if (!isLast) {
         var yLine = y + generatorH;
         var xLine = x0;
         var path = paper.path("M"+xLine+" "+yLine+",H"+(paperWidth - marginX)).attr(genLineAttr);
      }
   };

   function updateGenerators() {
      for(var iGen = 0; iGen < nGenerators[level]; iGen++){
         updateGenerator(iGen);
      }
   }

   function updateGenerator(id) {
      var type = answer.generatorTypes[id].type;
      var label = typeLabel[type];
      labelRaph[id].attr("text",label);
      generatePasswords(id)();
      updateSwitch(switchRaph[id], answer.switch[id]);
   };

   function clickSwitch(id) {
      return function() {
         displayError("");
         var state = answer.switch[id];
         answer.switch[id] = 1 - state;
         updateSwitch(switchRaph[id], answer.switch[id]);
      }
   };

   function generatePasswords(id) {
      return function() {
         displayError("");
         var type = answer.generatorTypes[id].type;
         var humanOrComp = answer.generatorTypes[id].humanOrComp;
         for(var iPass = 0; iPass < 3; iPass++){
            var pass = generatePassword(type,humanOrComp);
            passwordsRaph[id][iPass].attr("text",pass);
         }
      }
   };

   function generatePassword(type,comp) {
      var password = "";
      if(comp){
         //if(level != "hard" || type != 0){
            var passwordLength = rng.nextInt(range[0],range[1]);
            do{
               password += getPasswordSymbol(type);
            }while(password.length < passwordLength);
         //}else{
         //   password = getYear();
         //}
      }else{
         var items = leaked_passwords[type];
         var ind  = Math.floor(rng.nextInt(0, items.length - 1)) ;

         password = items[ind];
      }
      return password;
   };

   function getPasswordSymbol(type) {
      var specialChars = ["\"","?","!","#","@","%","^","&","(",")","'","[", "]", "\\", "|",">","<","$",",",".",":","{","}",";","*","/","-","_","+","="];
      var symbol;
      switch(type){
         case 0:  // digits
            symbol = rng.nextInt(0,9);
            break;
         case 1:   // letters
            var char = String.fromCharCode(rng.nextInt("a".charCodeAt(0),"z".charCodeAt(0)));
            symbol = char;
            break;
         case 2:   // letters and digits
            var charOrInt = rng.nextBit();
            symbol = getPasswordSymbol(charOrInt);
            break;
         case 3:  // special chars (arbitrary random)
            var nb = specialChars.length + 26 + 26 + 10;
            var num = rng.nextInt(0,nb-1);
            if (num < 62) {
               symbol = getPasswordSymbol(2);
            } else {
               symbol = specialChars[num - 62];
            }
            break;
      }
      return symbol;
   };

   function getYear() {
      var start = ["19","20"];
      var year = start[rng.nextBit()];
      do{
         year += rng.nextInt(0,9);
      }while(year.length < 4);
      return year;
   };

   function displayError(msg) {
      $("#error").html(msg);
   };
}
initWrapper(initTask, ["easy", "medium", "hard"]);
displayHelper.useFullWidth();
