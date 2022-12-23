var amWorker = !self.document;

if (amWorker) {
   importScripts('skulpt.min.js');
   onmessage = function(event) {
      _runPython(event.data.programText, event.data.inputText, function(result) {
         postMessage(result);
      });
   };
}

function _runPython(programText, inputText, callback) {
   var output_text = "";
   var onOutput = function(output) {
      output_text += output;
   };
   var onError = function(error) {
      callback({
         error: error.toString()
      });
   };
   var onSuccess = function() {
      callback({
         output: output_text
      });
   };
   Sk.configure({
      output: onOutput
   });
   Sk.execLimit = 1000;
   // This is for a newer version of skulpt:
   var myPromise = Sk.misceval.asyncToPromise(function() {
      return Sk.importMainWithBody("<stdin>", false, programText, true);
   });
   myPromise.then(onSuccess, onError);
   
   // This is for an older version of skulpt:
   /*try {
      eval(Sk.importMainWithBody("<stdin>", false, programText)); 
   }
   catch(e) {
      callback({
         error: e.toString()
      });
      return;
   }
   callback({
      output: output_text
   });*/
}
