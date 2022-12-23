/**
 * Custom block definitions
 */
Blockly.Blocks.math_floor_division = {
    init: function() {
        this.jsonInit({
            message0: "celoštevilski rezultat pri %1 ÷ %2",
            args0: [{
                type: "input_value",
                name: "DIVIDEND",
                check: "Number"
            }, {
                type: "input_value",
                name: "DIVISOR",
                check: "Number"
            }],
            inputsInline: !0,
            output: "Number",
            colour: Blockly.Blocks.math.HUE,
            tooltip: "Vrne celoštevilski rezultat pri deljenju dveh števil.",
            helpUrl: "https://en.wikipedia.org/wiki/Modulo_operation"
        })
    }
};

Blockly.Blocks.math_to_number = {
    init: function() {
        this.jsonInit({
            message0: "spremeni besedilo %1 v število",
            args0: [{
                type: "input_value",
                name: "TEXT",
                check: "String"
            }],
            inputsInline: !0,
            output: "Number",
            colour: Blockly.Blocks.math.HUE,
            tooltip: "Spremeni besedilo v število.",
            helpUrl: "https://en.wikipedia.org/wiki/Modulo_operation"
        })
    }
};

Blockly.Blocks.text_comment = {
    init: function() {
        this.jsonInit({
            message0: "komentiraj %1",
            args0: [{
                type: "input_value",
                name: "TEXT",
				check: "String"
            }],
			previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.texts.HUE,
            tooltip: "Izpiše komentar kode.",
            helpUrl: ""
        })
    }
};

Blockly.Blocks.text_chr = {
    init: function() {
        this.jsonInit({
            message0: "vrni znak iz številske kode %1",
            args0: [{
                type: "input_value",
                name: "VALUE",
				check: "Number"
            }],
			inputsInline: false,
            output: "String",
            colour: Blockly.Blocks.texts.HUE,
            tooltip: "Vrne znak iz številske kode.",
            helpUrl: ""
        })
    }
};

Blockly.Blocks.math_ord = {
    init: function() {
        this.jsonInit({
            message0: "vrni številsko kodo iz znaka %1",
            args0: [{
                type: "input_value",
                name: "TEXT",
				check: "String"
            }],
			inputsInline: false,
            output: "Number",
            colour: Blockly.Blocks.math.HUE,
            tooltip: "Vrne številsko kodo iz znaka.",
            helpUrl: ""
        })
    }
};

Blockly.Blocks.text_contains = {
    init: function() {
        this.jsonInit({
            message0: "besedilo %1 %2 besedilo %3",
            args0: [{
                type: "input_value",
                name: "TEXT",
				check: "String"
            },
            {
                type: "field_dropdown",
                name: "OPTION",
                options: [
                    ["vsebuje", "CONTAINS"],
                    ["ne vsebuje", "NOTCONTAINS"]
                ]
            },
            {
                type: "input_value",
                name: "SUBTEXT",
                check: "String"
            }],
			inputsInline: true,
            output: "Boolean",
            colour: Blockly.Blocks.texts.HUE,
            tooltip: "Vrne resnično, če besedilo vsebuje drugo besedilo, sicer vrne neresnično.",
            helpUrl: ""
        })
    }
};

Blockly.Blocks.text_check = {
    init: function() {
        this.jsonInit({
            message0: "besedilo %1 vsebuje samo %2",
            args0: [{
                type: "input_value",
                name: "TEXT",
				check: "String"
            },
            {
                type: "field_dropdown",
                name: "CHECK",
                options: [
                    ["črke", "ISALPHA"],
                    ["številke", "ISDIGIT"],
                    ["črke in številke", "ISALNUM"],
                    ["male črke", "ISLOWER"],
                    ["VELIKE ČRKE", "ISUPPER"]
                ]
            }],
			inputsInline: true,
            output: "Boolean",
            colour: Blockly.Blocks.texts.HUE,
            tooltip: "Preveri, če besedilo vsebuje samo znake iz ene od naslednjih možnosti: črke, številke, črke in številke, male črke, velike črke.",
            helpUrl: ""
        })
    }
};

Blockly.Blocks.text_replace = {
    init: function() {
        this.jsonInit({
            message0: "v besedilu %1 zamenjaj besedilo %2 z besedilom %3",
            args0: [{
                type: "input_value",
                name: "TEXT",
				check: "String"
            },
            {
                type: "input_value",
                name: "SUBTEXT1",
                check: "String"
            },
            {
                type: "input_value",
                name: "SUBTEXT2",
                check: "String"
            }],
			inputsInline: true,
            output: "String",
            colour: Blockly.Blocks.texts.HUE,
            tooltip: "V danem besedilu zamenja vse pojavitve prvega besedila z drugim besedilom.",
            helpUrl: ""
        })
    }
};

Blockly.Blocks.text_repeat = {
    init: function() {
        this.jsonInit({
            message0: "ustvari besedilo z elementom %1 , ki se ponovi %2 krat",
            args0: [{
                type: "input_value",
                name: "TEXT",
                check: "String"
            },
            {
                type: "input_value",
                name: "NUM",
                check: "Number"
            }],
			inputsInline: true,
            output: "String",
            colour: Blockly.Blocks.texts.HUE,
            tooltip: "Ustvari besedilo, kot večkratno ponovitev danega besedila.",
            helpUrl: ""
        })
    }
};


/**
 * Custom block generator functions
 */
Blockly.JavaScript.math_floor_division = function(a) {
    var b = Blockly.JavaScript.valueToCode(a, "DIVIDEND", Blockly.JavaScript.ORDER_MODULUS) || "0";
    a = Blockly.JavaScript.valueToCode(a, "DIVISOR", Blockly.JavaScript.ORDER_MODULUS) || "0";
    return ["Math.floor(" + b + " / " + a + ")", Blockly.JavaScript.ORDER_MODULUS]
};
Blockly.Python.math_floor_division = function(a) {
    var b = Blockly.Python.valueToCode(a, "DIVIDEND", Blockly.Python.ORDER_MULTIPLICATIVE) || "0";
    a = Blockly.Python.valueToCode(a, "DIVISOR", Blockly.Python.ORDER_MULTIPLICATIVE) || "0";
    return [b + " // " + a, Blockly.Python.ORDER_MULTIPLICATIVE]
};

Blockly.JavaScript.math_to_number = function(a) {
    var txt = Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_NONE);
    return ["Number(" + txt + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL]
};
Blockly.Python.math_to_number = function(a) {
    var txt = Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_NONE);
    return ["int(" + txt + ")", Blockly.Python.ORDER_FUNCTION_CALL]
};

Blockly.JavaScript.text_comment = function(a) {
    var str = Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_NONE);
    return "// " + str.substr(1, str.length-2) + "\n"
};
Blockly.Python.text_comment = function(a) {
    var str = Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_NONE);
    return "# " + str.substr(1, str.length-2) + "\n"
};

Blockly.JavaScript.text_chr = function(a) {
    var num = Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_NONE);
    return ["String.fromCharCode(" + num + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL]
};
Blockly.Python.text_chr = function(a) {
    var num = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE);
    return ["chr(" + num + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL]
};

Blockly.JavaScript.math_ord = function(a) {
    var str = Blockly.JavaScript.valueToCode(a, "TEXT", Blockly.JavaScript.ORDER_NONE);
    return [str + ".charCodeAt(0)", Blockly.JavaScript.ORDER_FUNCTION_CALL]
};
Blockly.Python.math_ord = function(a) {
    var str = Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_NONE);
    return ["ord(" + str + ")", Blockly.JavaScript.ORDER_FUNCTION_CALL]
};

Blockly.JavaScript['text_contains'] = function(block) {
  var str = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  var option = block.getFieldValue('OPTION');
  var substr = Blockly.JavaScript.valueToCode(block, 'SUBTEXT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '';
  if (option == 'CONTAINS') {
      code = str + '.indexOf(' + substr + ') > -1';
  }
  else {
      code = str + '.indexOf(' + substr + ') <= -1';
  }
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.Python['text_contains'] = function(block) {
  var str = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var option = block.getFieldValue('OPTION');
  var substr = Blockly.Python.valueToCode(block, 'SUBTEXT', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  if (option == 'CONTAINS') {
      code = substr + ' in ' + str;
  }
  else {
      code = substr + ' not in ' + str;
  }
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['text_check'] = function(block) {
  var str = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  var check = block.getFieldValue('CHECK');
  var code = '';
  switch (check) {
      case 'ISALPHA': code = '/^\\D+$/.test(' + str + ')'; break;
      case 'ISDIGIT': code = '/^\\d+$/.test(' + str + ')'; break;
      case 'ISALNUM': code = '/^(\\d|\\D)+$/.test(' + str + ')'; break;
      case 'ISLOWER': code = str + ' == ' + str + '.toLowerCase()'; break;
      case 'ISUPPER': code = str + ' == ' + str + '.toUpperCase()'; break;
  }
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.Python['text_check'] = function(block) {
  var str = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var check = block.getFieldValue('CHECK');
  var code = '';
  switch (check) {
      case 'ISALPHA': code = str + '.isalpha()'; break;
      case 'ISDIGIT': code = str + '.isdigit()'; break;
      case 'ISALNUM': code = str + '.isalnum()'; break;
      case 'ISLOWER': code = str + '.islower()'; break;
      case 'ISUPPER': code = str + '.isupper()'; break;
  }
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['text_replace'] = function(block) {
  var str = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  var substr1 = Blockly.JavaScript.valueToCode(block, 'SUBTEXT1', Blockly.JavaScript.ORDER_ATOMIC);
  var substr2 = Blockly.JavaScript.valueToCode(block, 'SUBTEXT2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = str + '.replace(new RegExp(' + substr1 + ', \'g\'), ' + substr2 + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.Python['text_replace'] = function(block) {
  var str = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var substr1 = Blockly.Python.valueToCode(block, 'SUBTEXT1', Blockly.Python.ORDER_ATOMIC);
  var substr2 = Blockly.Python.valueToCode(block, 'SUBTEXT2', Blockly.Python.ORDER_ATOMIC);
  var code = str + '.replace(' + substr1 + ', ' + substr2 + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['text_repeat'] = function(block) {
  var str = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  var num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC);
  var code = str + '.repeat(' + num + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.Python['text_repeat'] = function(block) {
  var str = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var num = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_ATOMIC);
  var code = str + ' * ' + num;
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
