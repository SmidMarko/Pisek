if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

function MyMap() {
    this.values = {};
}

MyMap.prototype.set = function(iKey, iValue) {
   this.values[iKey] = iValue;
};

MyMap.prototype.get = function(iKey) {
   return this.values[iKey];
};

MyMap.prototype.forEach = function(f) {
   for (var iKey in this.values) {
      f(this.values[iKey], iKey);
   }
};

function frequency_analyzer(iTextInput, iFont) {
    this.mTextInput = iTextInput;
    this.mFont = iFont;
    this.mLimitRef = 18;
    this.mMapLang = new MyMap();
    this.mOptions = null;
    this.mObjects = null;
    this.mKeys = null;
    this.mData = null;
    this.mLastAlpha = false;
    this.mSub = null;
    this.mMapSub = null;
    this.mArrayAlphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.mArrayAlphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.mArrayDigit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.mArrayAccentLower = ['â', 'ã', 'ä', 'à', 'á', 'å', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', 'ø', 'ù', 'ú', 'û', 'ü', 'ý'];
    this.mArrayAccentUpper = ['Â', 'Ã', 'Ä', 'À', 'Á', 'Å', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý'];
    this.mArrayPunct = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '\\', '-', '.', '/' , ':', ';' , '<',  '=', '>', '?' , '@' , '_', '`', '’', '{', '|', '}', '~', '[', ']', "'"];
    this.mArraySpace = [' '];
    this.mTokens = null;
    this.mFrqAlpha = true;
    this.mMinifyInput = false;
    this.mMinifyFrq = false;
    this.mMinifyRef = false;
    this.mMinifySub = false;
    this.mMinifySum = false;
    this.mMinifyOutput = false;
    this.mShowSum = false;
    this.mOutputFull = false;
    this.mNewCharSub = [];

    this.init = function() {
        this.initRefLang();
        this.initIsCharFunctions();
        this.changeFrqRefLanguage();
        this.changeAlphaFont();
        this.applySectionButtonInput();
        this.applySectionButtonFrq();
        this.applySectionButtonRef();
        this.applySectionButtonSum();
        this.applySectionButtonSub();
        this.applySectionButtonOutput();
        this.applySumButton();
        this.applyOutputButton();

        // Chrome is very slow when using textareas, so we only use textareas when editing
        $('div#textarea-input').html(this.mTextInput);
        /*
        $('div#textarea-input').click(function() {
           that.clickInput();
        });
        */
        var that = this;

        $('#apply-input').click(function() {
            that.clickApplyInput();
        });

        $('#frq-alpha').change(function() {
            that.changeFrq();
        });

        $('#frq-fqz').change(function() {
            that.changeFrq();
        });

        $('#frq-ref-language').change(function() {
            that.changeFrqRefLanguage();
        });

        $('#alpha-font').change(function() {
            that.changeAlphaFont();
        });

        $('#sub-generate').click(function() {
            that.clickSubGenerate();
        });

        $('#section-button-input').click(function() {
            that.clickSectionButtonInput();
        });

        $('#section-button-frq').click(function() {
            that.clickSectionButtonFrq();
        });

        $('#section-button-ref').click(function() {
            that.clickSectionButtonRef();
        });

        $('#section-button-sub').click(function() {
            that.clickSectionButtonSub();
        });

        $('#section-button-sum').click(function() {
            that.clickSectionButtonSum();
        });

        $('#section-button-output').click(function() {
            that.clickSectionButtonOutput();
        });

        $('#sum-button').click(function() {
            that.clickSumButton();
        });

        $('#output-button').click(function() {
            that.clickOutputButton();
        });
    }

    this.clickInput = function() {
        var input = $('#textarea-input').html();
        $("#textarea-container").html('<textarea id="textarea-input" class="textarea-input">' + input + '</textarea>');
        var that = this;
        that.changeAlphaFont();
        $("textarea#textarea-input").focus();
        $("textarea#textarea-input").blur(function() {
           var input = $('#textarea-input').val();
           $("#textarea-container").html('<div id="textarea-input" class="textarea-input output-content">' + input + '</div>');
           that.changeAlphaFont();
            $('div#textarea-input').click(function() {
              that.clickInput();
           });
        });
    }

    this.initIsCharFunctions = function() {
         var charTypes = ["AlphaLower", "AlphaUpper", "Digit", "AccentLower", "AccentUpper", "Punct", "Space"];
         for (var iCharType = 0; iCharType < charTypes.length; iCharType++) {
            var charType = charTypes[iCharType];
            this["is" + charType] = {};
           for (var iChar = 0; iChar < this["mArray" + charType].length; ++iChar) {
               this["is" + charType][this["mArray" + charType][iChar]] = true;
           }
         }
    }


    var that = this;

    this.generateChartsContent = function(iFont, iKeys, iData) {
        var lMax = 0;
        for (var i = 0; i < iData.length; ++i) {
            var lVal = iData[i];
            lMax = lMax < lVal ? lVal : lMax;
        }
        lMax *= 1.1;

        var lContent = {
            legend: {
                enabled: false
            },
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: iKeys,
                labels: {
                    style: {
                        fontFamily: iFont,
                        fontSize: '16px'
                    }
                },
                max: that.mLimitRef
            },
            yAxis: {
                max: lMax,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span><span style="font-weight: bold; font-family: ' + iFont+ '; font-size:16px;">{point.key}</span>:&nbsp;{point.y:1f}&nbsp;%</span><table>',
                pointFormat: '',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            series: [{
                name: 'fréquence',
                data: iData
            }],
            scrollbar: {
                enabled: true
            },
            rangeSelector: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            }
        };
        return lContent;
    }

    this.contains = function(a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    }

    this.initRefLang = function() {
        // src https://fr.wikipedia.org/wiki/Fr%C3%A9quence_d%27apparition_des_lettres_en_fran%C3%A7ais
        var lFr = new MyMap();
        lFr.set('a', 7.637);
        lFr.set('b', 0.901);
        lFr.set('c', 3.260);
        lFr.set('d', 3.669);
        lFr.set('e', 14.715);
        lFr.set('f', 1.066);
        lFr.set('g', 0.866);
        lFr.set('h', 0.737);
        lFr.set('i', 7.529);
        lFr.set('j', 0.545);
        lFr.set('k', 0.049);
        lFr.set('l', 5.456);
        lFr.set('m', 2.968);
        lFr.set('n', 7.095);
        lFr.set('o', 5.378);
        lFr.set('p', 3.021);
        lFr.set('q', 1.362);
        lFr.set('r', 6.553);
        lFr.set('s', 7.948);
        lFr.set('t', 7.244);
        lFr.set('u', 6.311);
        lFr.set('v', 1.628);
        lFr.set('w', 0.114);
        lFr.set('x', 0.387);
        lFr.set('y', 0.308);
        lFr.set('z', 0.136);

        this.mMapLang.set("fr", lFr);

        // src: https://en.wikipedia.org/wiki/Letter_frequency
        var lEn = new MyMap();
        lEn.set('a', 11.602);
        lEn.set('b', 4.702);
        lEn.set('c', 3.511);
        lEn.set('d', 2.670);
        lEn.set('e', 2.007);
        lEn.set('f', 3.779);
        lEn.set('g', 1.950);
        lEn.set('h', 7.232);
        lEn.set('i', 6.286);
        lEn.set('j', 0.597);
        lEn.set('k', 0.590);
        lEn.set('l', 2.705);
        lEn.set('m', 4.383);
        lEn.set('n', 2.365);
        lEn.set('o', 6.264);
        lEn.set('p', 2.545);
        lEn.set('q', 0.173);
        lEn.set('r', 1.653);
        lEn.set('s', 7.755);
        lEn.set('t', 16.671);
        lEn.set('u', 1.487);
        lEn.set('v', 0.649);
        lEn.set('w', 6.753);
        lEn.set('x', 0.017);
        lEn.set('y', 1.620);
        lEn.set('z', 0.034);

        this.mMapLang.set("en", lEn);
    }

    this.pushKeyValue = function(iRes, iArray) {
        for (var i = 0; i < iArray.length; ++i) {
            var lValue = iArray[i];
            iRes.push({key: lValue, value : lValue});
        }
    }

    this.getMapId = function() {
        var lRes = new Array();
        this.pushKeyValue(lRes, this.mArrayAlphaLower);
        if (this.mOptions.withUpperCase) {
            this.pushKeyValue(lRes, this.mArrayAlphaUpper);
        }
        if (this.mOptions.withAccent) {
            this.pushKeyValue(lRes, this.mArrayAccentLower);
            if (this.mOptions.withUpperCase) {
                this.pushKeyValue(lRes, this.mArrayAccentUpper);
            }
        }
        if (this.mOptions.withDigit) {
            this.pushKeyValue(lRes, this.mArrayDigit);
        }

        if (this.mOptions.withPunctuation) {
            this.pushKeyValue(lRes, this.mArrayPunct);
        }

        if (this.mOptions.withSpace) {
            this.pushKeyValue(lRes, this.mArraySpace);
        }
        return lRes;
    }

    this.accentReplace = function(str) {
        str = str.replace(/[ÂÃÄÀÁÅ]/gi, "A");
        str = str.replace(/[Ç]/gi,      "C");
        str = str.replace(/[ÈÉÊË]/gi,   "E");
        str = str.replace(/[ÌÍÎÏ]/gi,   "I");
        str = str.replace(/[Ñ]/gi,      "N");
        str = str.replace(/[ÒÓÔÕÖØ]/gi, "O");
        str = str.replace(/[ÙÚÛÜ]/gi,   "U");
        str = str.replace(/[Ý]/gi,      "Y");
        str = str.replace(/[âãäàáå]/gi, "a");
        str = str.replace(/[ç]/gi,      "c");
        str = str.replace(/[èéêë]/gi,   "e");
        str = str.replace(/[ìíîï]/gi,   "i");
        str = str.replace(/[ñ]/gi,      "n");
        str = str.replace(/[òóôõöø]/gi, "o");
        str = str.replace(/[ùúûü]/gi,   "u");
        str = str.replace(/[ý]/gi,      "y");
        return str;
    }

    this.textToTokens = function(iText) {
        var lWithSpace       = false;
        var lWithPunctuation = false;
        var lWithAccent      = false;
        var lWithDigit       = false;
        var lWithUpperCase   = false;

        if (this.mOptions != null) {
            lWithSpace       = this.mOptions.withSpace;
            lWithPunctuation = this.mOptions.withPunctuation;
            lWithAccent      = this.mOptions.withAccent;
            lWithDigit       = this.mOptions.withDigit;
            lWithUpperCase   = this.mOptions.withUpperCase;
        }

        var lTokens = new Array();
        for (var i = 0, len = iText.length; i < len; i++) {
            var lRef = iText.charAt(i);
            var lValue = lRef;
            var lMute = false;
            var lWithAccent = false;
            var lFromUpperCase = false;

            if (!lWithSpace && lRef.match('[ \t]')) {
                lMute = true;
            }

            if (!lWithPunctuation && (this.isPunct[lRef] != undefined)) {
                lMute = true;
            }

            if (!lWithAccent) {
                lValue = this.accentReplace(lValue);
                if (lValue !== lRef) {
                    lWithAccent = true;
                }
            }

            if (!lWithDigit && (this.isDigit[lRef] != undefined)) {
                lMute = true;
            }

            if (!lWithUpperCase) {
                lValue = lValue.toLowerCase();
                if (lValue !== lRef) {
                    lFromUpperCase = true;
                }
            }

            lTokens.push({ref: lRef, value: lValue, output: lValue, mute: lMute, withAccent: lWithAccent, fromUpperCase: lFromUpperCase});
        }
        var lFont = this.mFont;
        return {font: lFont, tokens: lTokens};
    }


    this.tokensToText = function(iTokens) {
        var lStr = "";
        var lTokens = iTokens.tokens;

        for (var i = 0, len = lTokens.length; i < len; i++) {
            var lToken = lTokens[i];

            var lValue = lToken.output;
            if (lToken.fromUpperCase) {
                lValue = lValue.toUpperCase();
            }
            lStr += lValue;

        }
        return lStr;
    }

    this.computeMapFrq = function(iTokens) {
        var lMap = new MyMap();
        var lSize = 0;
        var lTokens = iTokens.tokens;

        for (var i = 0, len = lTokens.length; i < len; i++) {
            var lToken = lTokens[i];

            var lValue = lToken.value;
            var lMute = lToken.mute;

            if (!lMute) {
                if (lMap.get(lValue) === undefined) {
                    lMap.set(lValue, 0);
                }
                lMap.set(lValue, lMap.get(lValue) + 1);
                ++lSize;
            }
        }
        return {size: lSize, map: lMap};
    }



    this.sortFrq = function(iObjects, iWithKey) {
        iObjects.sort(function (i1, i2) {
            var lItem1 = iWithKey ? i1.key : i1.value;
            var lItem2 = iWithKey ? i2.key : i2.value;
            var lRes  = iWithKey ? 1 : -1;

            if (lItem1 < lItem2) {
                return -lRes;
            } else if (lItem1 > lItem2) {
                return lRes;
            }
            return 0;
        });
    }

    this.computeObjects = function(iMapFrq) {
        this.mKeys = new Array();
        this.mData = new Array();
        this.mObjects = new Array();
        var lSize = iMapFrq.size;

        this.mObjects = [];
        var that = this;
        iMapFrq.map.forEach(function(value, key) {
            var lV = (value / lSize * 100);
            var lVal = lV.toFixed(2) / 1;
            that.mObjects.push({key: key, value: lVal});
        });
    }

    this.clickApplyInput = function() {
        var lTextInput       = $('#textarea-input').html();

        var lWithSpace       = document.getElementById('optionWithSpace').checked;
        var lWithPunctuation = document.getElementById('optionWithPunctuation').checked;
        var lWithAccent      = document.getElementById('optionWithAccent').checked;
        var lWithDigit       = document.getElementById('optionWithDigit').checked;
        var lWithUpperCase   = document.getElementById('optionWithUpperCase').checked;

        this.mOptions = {
            withSpace: lWithSpace,
            withPunctuation: lWithPunctuation,
            withAccent: lWithAccent,
            withDigit: lWithDigit,
            withUpperCase: lWithUpperCase
        };

        $('#root').addClass('apply');

        this.mTokens = this.textToTokens(lTextInput);
        var lMapFrq = this.computeMapFrq(this.mTokens);
        var lFont = this.mTokens.font;
        this.computeObjects(lMapFrq);
        this.mLastAlpha = false;
        this.updateChartText(lFont);
//        var lMapId = this.getMapId();
//        this.updateSub(lMapId, lFont);
//        this.updateChartSum();
//        this.displayOutput(this.mTokens);
        this.updateSubFromRef();
    }

    this.updateChartText = function(iFont) {
        if (this.mObjects !== undefined &&
            this.mObjects != null) {
            this.sortFrq(this.mObjects, this.mLastAlpha);

            this.mKeys = [];
            this.mData = [];
            for (var i = 0, len = this.mObjects.length; i < len; i++) {
                var lItem = this.mObjects[i];
                this.mKeys.push(lItem.key);
                this.mData.push(lItem.value);
            }
            for (var i = this.mObjects.length; i < this.mLimitRef; ++i) {
                this.mKeys.push("");
                this.mData.push(0);
            }
        }
        var lContent = this.generateChartsContent(iFont, this.mKeys, this.mData);
        $('#chart-text').highcharts(lContent);
        $('#frq-min').empty();
        for (var i = 0; i < this.mObjects.length && i <= this.mLimitRef; i++) {
            var lKey = this.mObjects[i].key;
            $('#frq-min').append('<span class="frq-min-item" style="font-family: \'' + this.mFont + '\'">' + lKey + '</span>');
        }
    }

    this.changeFrq = function() {
        this.updateChartText(this.mTokens.font);
    }

    this.changeFrqRefLanguage = function() {
        var lKeys = new Array();
        var lData = new Array();
        var lLang = "fr";//$('#frq-ref-language').val();

        var lObjects = new Array();
        var lMap = this.mMapLang.get(lLang);
        lMap.forEach(function (value, key) {
            lObjects.push({key: key, value: value});
        });

        this.sortFrq(lObjects, false);


        for (var i = 0, len = lObjects.length; i < len; i++) {
            var lItem = lObjects[i];

            lKeys.push(lItem.key);
            lData.push(lItem.value);
        }

        var lContent = this.generateChartsContent('Fréquence', lKeys, lData);
        $('#chart-ref').highcharts(lContent);
        $('#ref-min').empty();
        for (var i = 0; i < lObjects.length && i <= this.mLimitRef; i++) {
            var lKey = lObjects[i].key;
            $('#ref-min').append('<span class="ref-min-item">' + lKey + '</span>');
        }

    }

    this.generateDragContainer = function(iMap, iFontKey, iPaper, iDragAndDrop, iCx, iCy, iSize, iId, f) {
        dragAndDropContainer = iDragAndDrop.addContainer({
            ident : iId,
            cx : iCx,
            cy : iCy,
            widthPlace : 25,
            heightPlace : 25,
            nbPlaces : iSize,
            dropMode : 'swap'
        });

        var iPos = 0;
        this.mMapSub.set(iId, []);
        for (var i = 0; i < iMap.length; i++) {
            var lItem = iMap[i];
            var lKey = lItem.key;
            if (f(lKey)) {
                var lValue = lItem.value;

                var u = iPaper.text(17 + iPos * 25, iCy - 25, lKey).attr({'font-family' : iFontKey, 'font-size': 18, 'font-weight': 'bold'});

                var c = iPaper.rect(-25/2,-25/2,25,25).attr('fill', 'white');
                var t = iPaper.text(0, 0, lValue).attr({'font-size': 14, 'font-weight': 'bold'});
                dragAndDropContainer.createDraggable(iPos + 1, iPos, [c,t]);
                var s = {key: lKey, value: lValue};
                this.mSub.push(s);
                this.mMapSub.get(iId).push(s);
                ++iPos;
            }
        }
        return dragAndDropContainer;
    }

    this.computeHeight = function() {
        var lInc = 90;
        var lRes = 100;

        if (this.mOptions.withPunctuation) {
            lRes += lInc;
        }
        if (this.mOptions.withAccent) {
            lRes += lInc;
        }
        if (this.mOptions.withDigit) {
            lRes += lInc;
        }
        if (this.mOptions.withUpperCase) {
            lRes += lInc;
            if (this.mOptions.withAccent) {
                lRes += lInc;
            }
        }
        if (this.mOptions.withSpace) {
            lRes += lInc;
        }
        return lRes;
    }

    this.updateSub = function(iMap, iFontKey) {
        var that = this;
        $('#sub').empty();
        var lHeight = this.computeHeight();
        var lSubElement = document.getElementById('sub');
        var lPaper = Raphael(lSubElement, 800, lHeight);

        var lDragAndDrop = DragAndDropSystem({
            paper : lPaper,
            actionIfDropped : function(srcCont, srcPos, dstCont, dstPos, type) {
                if (dstCont == null) {
                    return false;
                }
                return true;
            },
            drop: function(srcCont, srcPos, dstCont, dstPos, type) {
                that.generateNewSub(srcCont, srcPos, dstCont, dstPos, type);
            }
        });
        this.mSub = new Array();
        this.mMapSub = new MyMap();
        var lCy = 80;
        var lCxAlpha = 330;
        var lCxDigit = 130;
        var lCxAccent = 342;
        var lCxPunct = 392;
        var lCxSpace = 20;
        var lCyInc = 80;
        this.generateDragContainer(iMap, iFontKey, lPaper, lDragAndDrop,
                                   lCxAlpha, lCy, that.mArrayAlphaLower.length,
                                   'AlphaLower',
                                   function(c) {
                                       return that.isAlphaLower[c];
                                   });
        lCy += lCyInc;

        if (this.mOptions.withUpperCase) {
            this.generateDragContainer(iMap, iFontKey, lPaper, lDragAndDrop,
                                       lCxAlpha, lCy, that.mArrayAlphaUpper.length,
                                       'AlphaUpper',
                                       function(c) {
                                           return that.isAlphaUpper[c];
                                       });
            lCy += lCyInc;
        }

        if (this.mOptions.withAccent) {
            this.generateDragContainer(iMap, iFontKey, lPaper, lDragAndDrop,
                                       lCxAccent, lCy, that.mArrayAccentLower.length,
                                       'AccentLower',
                                       function(c) {
                                           return that.isAccentLower[c];
                                       });
            lCy += lCyInc;
        }

        if (this.mOptions.withUpperCase) {
            if (this.mOptions.withAccent) {
                this.generateDragContainer(iMap, iFontKey, lPaper, lDragAndDrop,
                                           lCxAccent, lCy, that.mArrayAccentUpper.length,
                                           'AccentUpper',
                                           function(c) {
                                               return that.isAccentUpper[c];
                                           });
                lCy += lCyInc;
            }
        }

        if (this.mOptions.withDigit) {
            this.generateDragContainer(iMap, iFontKey, lPaper, lDragAndDrop,
                                       lCxDigit, lCy, that.mArrayDigit.length,
                                       'Digit',
                                       function(c) {
                                           return that.isDigit[c];
                                       });
            lCy += lCyInc;
        }

        if (this.mOptions.withPunctuation) {
            this.generateDragContainer(iMap, iFontKey, lPaper, lDragAndDrop,
                                       lCxPunct, lCy, that.mArrayPunct.length,
                                       'Punctuation',
                                       function(c) {
                                           return that.isPunct[c];
                                       });
            lCy += lCyInc;
        }

        if (this.mOptions.withSpace) {
            this.generateDragContainer(iMap, iFontKey, lPaper, lDragAndDrop,
                                       lCxSpace, lCy, that.mArraySpace.length,
                                       'Space',
                                       function(c) {
                                           return that.isSpace[c];
                                       });
            lCy += lCyInc;
        }
    }

    this.subReplace = function(iKey, iValue) {
        for (var i = 0; i < this.mSub.length; ++i) {
            var lItem = this.mSub[i];
            if (lItem.key === iKey) {
                lItem.value = iValue;
                break;
            }
        }
    }

    this.generateNewSub = function(srcCont, srcPos, dstCont, dstPos, type) {
        var lSrc = this.mMapSub.get(srcCont)[srcPos];
        var lDst = this.mMapSub.get(dstCont)[dstPos];

        var lSrcValue = lSrc.value;
        var lDstValue = lDst.value;

        this.subReplace(lSrc.key, lDstValue);
        this.subReplace(lDst.key, lSrcValue);

        this.mNewCharSub = [lSrcValue, lDstValue];

        this.updateChartSum();
        this.updateTokensSub(this.mTokens, this.mSub);
        this.displayOutput(this.mTokens);
    }

    this.updateTokensSub = function(iTokens, iMap) {
        if (iTokens != null) {
            var lTokens = iTokens.tokens;
            var lMap = new MyMap();
            for (var i = 0; i < iMap.length; ++i) {
                lMap.set(iMap[i].key, iMap[i].value);
            }
            for (var i = 0, len = lTokens.length; i < len; i++) {
                var lToken = lTokens[i];

                var lValue = lToken.value;
                var lSub = lMap.get(lValue);
                if (lSub !== undefined) {
                    lToken.output = lSub;
                }
            }
        }
    }

    this.tokensToPairs = function(iTokens) {
        var lRes = new Array();
        var lTokens = iTokens.tokens;

        for (var i = 0, len = lTokens.length; i < len; i++) {
            var lToken = lTokens[i];

            var lInput = lToken.ref;
            var lOutput = lToken.output;
            if (lToken.fromUpperCase) {
                lOutput = lOutput.toUpperCase();
            }
            lRes.push({input: lInput, output: lOutput});
        }
        return lRes;
    }

    this.displayOutput = function(iTokens) {
        var lTextOutput = this.tokensToText(iTokens);
        $('textarea#textarea-output').val(lTextOutput);

      //   $('#output-content').empty();
        var lPairs = this.tokensToPairs(iTokens);
        var outputContentHTML = "";
        for (var i = 0; i < lPairs.length; ++i) {

            var lPair = lPairs[i];

            var lWInput = '';
            var lWOutput = '';
            for (; i < lPairs.length &&
                 lPairs[i].output !== ' '; ++i) {
                lPair = lPairs[i];

                /*lWInput  += lPair.input;
                var lClass = "";
                if (
                    this.contains(this.mNewCharSub, lPair.output)
                    ||
                    (!this.mOptions.withUpperCase &&
                     this.contains(this.mNewCharSub, lPair.output.toLowerCase()))
                   ) {
                    lClass = "pulse";
                }*/
               //  lWOutput += '<span class="char-output' + " " + lClass + '">' + lPair.output + "</span>";
               lWOutput += lPair.output;
            }

            //$('#output-content').append('<span class="item-output">' + lWOutput + '</span>');
            outputContentHTML += lWOutput;
//            $('#output-content').append('<span class="item-output" data-title="' + lWInput + '">' + lWOutput + '</span>');

            if (i < lPairs.length &&
                lPairs[i].output === ' ') {
               //  $('#output-content').append('<span> </span>');
               outputContentHTML += " ";
            }
        }
        $("#output-content").html(outputContentHTML);
        /*var pulse = function() {
            $('.pulse').css('background-color', "transparent");
        };
        setTimeout(pulse, 150);*/
    }

    this.changeAlphaFont = function() {
        var lFont = this.mFont;

        if (lFont === 'alien') {
            $('#textarea-input').css('font-family', "alien");
        } else {
            $('#textarea-input').css('font-family', "inherit");
        }
    }

    this.clickSubGenerate = function() {
        this.updateSubFromRef();
    }

    this.updateSubFromRef = function() {
        var lFont = this.mTokens.font;

        var lLang = "fr";//$('#frq-ref-language').val();
        var lFrqAlpha = $('input[name="frq"]:checked').val() === "alpha";


        var lMapRef = this.mMapLang.get(lLang);
        var lRef = new Array();
        lMapRef.forEach(function (value, key) {
            lRef.push({key: key, value: value});
        });
        this.sortFrq(lRef, false);

        var lMapFrq = this.computeMapFrq(this.mTokens);
        var lFrq = new Array();
        lMapFrq.map.forEach(function (value, key) {
            lFrq.push({key: key, value: value});
        });
        this.sortFrq(lFrq, false);


        var lMap = new MyMap();
        for (var i = 0; i < lFrq.length && i < lRef.length; ++i) {
            var lItemFrq = lFrq[i];
            var lItemRef = lRef[i];

            lMap.set(lItemFrq.key, lItemRef.key);
        }

        var lKeys = new Array();
        var lAlphaLower = new Array();
        lAlphaLower.push.apply(lAlphaLower, this.mArrayAlphaLower);
        if (!lFrqAlpha) {
            lAlphaLower.sort(function (i1, i2) {
                var lItem1 = lMapFrq.map.get(i1);
                var lItem2 = lMapFrq.map.get(i2);
                if (lItem1 == null) {
                    lItem1 = 0;
                }
                if (lItem2 == null) {
                    lItem2 = 0;
                }

                if (lItem1 < lItem2) {
                    return 1;
                } else if (lItem1 > lItem2) {
                    return -1;
                }
                return 0;
            });
        }
        lKeys.push.apply(lKeys, lAlphaLower);

        if (this.mOptions.withUpperCase) {
            lKeys.push.apply(lKeys, this.mArrayAlphaUpper);
        }
        if (this.mOptions.withAccent) {
            lKeys.push.apply(lKeys, this.mArrayAccentLower);
            if (this.mOptions.withUpperCase) {
                lKeys.push.apply(lKeys, this.mArrayAccentUpper);
            }
        }
        if (this.mOptions.withDigit) {
            lKeys.push.apply(lKeys, this.mArrayDigit);
        }

        if (this.mOptions.withPunctuation) {
            lKeys.push.apply(lKeys, this.mArrayPunct);
        }

        if (this.mOptions.withSpace) {
            lKeys.push.apply(lKeys, this.mArraySpace);
        }

        var that = this;
        var lMark = new Array();
        lMap.forEach(function(value, key) {
           if (that.isInSubRange(key)) {
               lMark.push(value);
           }
        });
        var lArray = new Array();
        for (var i = 0; i < lKeys.length; ++i) {
            var lKey = lKeys[i];
            var lValue = lMap.get(lKey);
            if (lValue == null) {
                lValue = this.getNextAlphaFrom(lKeys, lMark);
                lMark.push(lValue);
            }

            var s = {key: lKey, value: lValue};
            lArray.push(s);
        }

        this.updateSub(lArray, lFont);
        this.updateChartSum();
        this.updateTokensSub(this.mTokens, lArray);
        this.displayOutput(this.mTokens);
    }

    this.getNextAlphaFrom = function(iRef, iMark) {
        for (var i = 0; i < iRef.length; ++i) {
            var lCharacter = iRef[i];
            var lFound = false;

            for (var j = 0; j < iMark.length; ++j) {
                var lAlpha = iMark[j];
                if (lCharacter === lAlpha) {
                    lFound = true;
                    break;
                }
            }
            if (!lFound) {
                return lCharacter;
            }
        }
        return '_';
    }

    this.isInSubRange = function(key) {
        if (this.isAlphaLower[key] != undefined) {
            return true;
        }
        if (this.mOptions.withSpace && (this.isSpace[key] != undefined)) {
            return true;
        }
        if (this.mOptions.withPunctuation && (this.isPunct[key] != undefined)) {
            return true;
        }
        if (this.mOptions.withAccent && (this.isAccentLower[key] != undefined)) {
            return true;
        }
        if (this.mOptions.withDigit && (this.isPunct[key] != undefined)) {
            return true;
        }
        if (this.mOptions.withUpperCase && (this.isAlphaUpper[key] != undefined)) {
            return true;
        }
        if (this.mOptions.withUpperCase && this.mOptions.withAccent && (this.isAccentUpper[key] != undefined)) {
            return true;
        }
      return false;
    }
    
    this.updateChartSum = function() {
        var lFont = this.mFont;
        var lLang = "fr";//$('#frq-ref-language').val();

        var lKeys  = [];
        var lData1 = [];
        var lData2 = [];

        var lMapRef = this.mMapLang.get(lLang);
        var lRef = new Array();
        lMapRef.forEach(function (value, key) {
            lRef.push({key: key, value: value});
        });
        this.sortFrq(lRef, false);

        var lMapFrq = this.computeMapFrq(this.mTokens);
        var lFrq = new Array();
        lMapFrq.map.forEach(function (value, key) {
            lFrq.push({key: key, value: value});
        });
        this.sortFrq(lFrq, false);
        var that = this;

        for (var i = 0; i < this.mSub.length; ++i) {
            var lItem = this.mSub[i];
            var lKey1 = lItem.key;
            var lKey2 = lItem.value;

            var lValue1 = lMapFrq.map.get(lKey1);
            if (lValue1 == null) {
                lValue1 = 0;
            } else {
                lValue1 = lValue1 * 100 / lMapFrq.size;
            }
            var lValue2 = lMapRef.get(lKey2);
            if (lValue2 === undefined || lValue2 == null) {
                lValue2 = 0;
            }

            lKeys.push('<span style="font-size: 12px; font-family: '+ lFont + ';">' + lKey1 + '</span><span style="margin-left: 5px; font-size: 12px;"> ' + lKey2 + '</span>');
            lData1.push(lValue1);
            lData2.push(lValue2);
        }

        var lMax = 0;
        for (var i = 0; i < lData1.length; ++i) {
            var lVal = lData1[i];
            lMax = lMax < lVal ? lVal : lMax;
        }
        for (var i = 0; i < lData2.length; ++i) {
            var lVal = lData2[i];
            lMax = lMax < lVal ? lVal : lMax;
        }
        lMax *= 1.1;


        var lContent = {
            legend: {
                enabled: false
            },
            chart: {
                renderTo: 'container',
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: lKeys,
                max: that.mLimitRef
            },
            yAxis: {
                max: lMax,
                title: {
                    text: ''
                }
            },
            plotOptions: {
                series: {
                    animation: false
                }
            },
            tooltip: {
                enabled: false
            },
            series: [{
                data: lData1
            }, {
                data: lData2
            }],
            scrollbar: {
                enabled: true
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            }
        };

        $('#chart-sum').highcharts(lContent);
    }

    this.minifySection = function(iBoolean, iButtonId, iSectionId) {
        if (iBoolean) {
            $(iSectionId).addClass('minify');
            $(iButtonId).text('+');
        } else {
            $(iSectionId).removeClass('minify');
            $(iButtonId).text('-');
        }
    }

    this.applySectionButtonInput = function() {
        this.minifySection(this.mMinifyInput, '#section-button-input', '#section-input');
    }

    this.clickSectionButtonInput = function() {
        this.mMinifyInput = !this.mMinifyInput;
        this.applySectionButtonInput();
    }

    this.applySectionButtonFrq = function() {
        this.minifySection(this.mMinifyFrq, '#section-button-frq', '#section-frq');
    }

    this.clickSectionButtonFrq = function() {
        this.mMinifyFrq = !this.mMinifyFrq;
        this.applySectionButtonFrq();
        this.updateChartText(this.mTokens.font);
        if (this.mTokens != null) {
            this.updateChartText(this.mTokens.font);
        }
    }

    this.applySectionButtonRef = function() {
        this.minifySection(this.mMinifyRef, '#section-button-ref', '#section-ref');
    }

    this.clickSectionButtonRef = function() {
        this.mMinifyRef = !this.mMinifyRef;
        this.applySectionButtonRef();
        this.changeFrqRefLanguage();
    }

    this.applySectionButtonSub = function() {
        this.minifySection(this.mMinifySub, '#section-button-sub', '#section-sub');
    }

    this.clickSectionButtonSub = function() {
        this.mMinifySub = !this.mMinifySub;
        this.applySectionButtonSub();
    }

    this.applySectionButtonSum = function() {
        this.minifySection(this.mMinifySum, '#section-button-sum', '#section-sum');
    }

    this.clickSectionButtonSum = function() {
        this.mMinifySum = !this.mMinifySum;
        this.applySectionButtonSum();
    }

    this.applySectionButtonOutput = function() {
        this.minifySection(this.mMinifyOutput, '#section-button-output', '#section-output');
    }

    this.clickSectionButtonOutput = function() {
        this.mMinifyOutput = !this.mMinifyOutput;
        this.applySectionButtonOutput();
    }

    this.applySumButton = function() {
        if (this.mShowSum) {
            $('#root').addClass('show-sum');
            $('#sum-button').text('Cacher l\'histogramme');
        } else {
            $('#root').removeClass('show-sum');
            $('#sum-button').text('Afficher l\'histogramme');
        }
    }

    this.clickSumButton = function() {
        this.mShowSum = !this.mShowSum;
        this.applySumButton();
    }

    this.applyOutputButton = function() {
        if (this.mOutputFull) {
            $('#root').addClass('full-output');
            $('#output-button').text('Réduire le texte');
        } else {
            $('#root').removeClass('full-output');
            $('#output-button').text('Afficher le texte en entier');
        }
    }

    this.clickOutputButton = function() {
        this.mOutputFull = !this.mOutputFull;
        this.applyOutputButton();
    }
}
