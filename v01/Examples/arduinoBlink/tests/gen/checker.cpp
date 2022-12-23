#include <stdio.h>
#include <string>
#include "jsonxx.h"

using namespace std;

// *** Constants ***
// Pin modes
#define INPUT 1
#define OUTPUT 2
#define INPUT_PULLUP 3

// Values for digital write
#define HIGH 2
#define LOW 1

// Analog pins
#define A0 -1
#define A1 -2
#define A2 -3
#define A3 -4
#define A4 -5
#define A5 -6

#define LED_BUILTIN 13

int __currentPinModes[14] = {};
int __currentPinValues[14] = {};
int __currentAnalogPinValues[6] = {};

int nbLoops;

int lastDelay = -1;
int nbBlinks = 0;

// Next 5 functions are typically filled with the program verification logic

void gotPinMode(int pin, int mode) {
  // Pin mode changed
  __currentPinModes[pin] = mode;
  // *** Insert verification logic here
}

void gotDigitalWrite(int pin, int value) {
  // Pin value changed
  if(__currentPinModes[pin] != OUTPUT) {
    throw "Pin not set in output mode";
  }
  if(lastDelay != 1000 && lastDelay != -1) {
    throw "Need to wait 1000ms before next LED change";
  }
  if(pin != LED_BUILTIN) {
    throw "Tried to set values on another pin";
  }
  if(__currentPinValues[pin] != value) {
    __currentPinValues[pin] = value;
    nbBlinks += 1;
    lastDelay = 0;
  }
}

void gotDelay(int delay) {
  // Program waited delay ms
  if(delay < 0) {
    throw "Negative wait delay";
  }
  if(lastDelay == -1) {
    lastDelay = 0;
  }
  lastDelay += delay;
}

void gotSerial(string txt) {
  // Program output (until another type of action happened)
  throw "Unexpected output";
}

int checkEnd(jsonxx::Array* commandsJsonPtr) {
  // Check whether the solution is good, print result
  if(nbBlinks != nbLoops * 2) {
    throw "Not enough blinks";
  }
  jsonxx::Array curCmdJson;
  curCmdJson << "displayMsg" << "Success";
  *commandsJsonPtr << jsonxx::Value(curCmdJson);
  return 100;
}


int main (int argc, char* argv[]) {
  if(argc < 4) {
    // Not enough arguments
    printf("Not enough arguments\n");
    return 1;
  }

  // The three arguments passed to the checker:
  // fsolout: output of the program (output produced by libarduino)
  // fin: test file .in
  // fout: test file .out (empty file if not present)
  FILE* fsolout = fopen(argv[1], "r");
  FILE* fin = fopen(argv[2], "r");
//  FILE* fout = fopen(argv[3], "r");

  fscanf(fin, "%d", &nbLoops);

  // Output JSON for animation
  jsonxx::Array commandsJson;
  jsonxx::Array curCmdJson;
  curCmdJson << "startSimu";
  commandsJson << jsonxx::Value(curCmdJson);

  char op;
  char readBuffer[128];
  char dumpBuffer[3];
  int pin, value;
  try {
    string outputBuffer = "";
    while(!feof(fsolout)) {
      curCmdJson.reset();
      if(fscanf(fsolout, "%c", &op) > 0) {
        if(op != 'O' && outputBuffer.length() > 0) {
          curCmdJson << "O" << outputBuffer;
          commandsJson << jsonxx::Value(curCmdJson);
          curCmdJson.reset();

          gotSerial(outputBuffer);
          outputBuffer = "";
        }
        switch(op) {
          case 'S': // Setup
            fscanf(fsolout, "%d %d", &pin, &value);
            curCmdJson << "S" << pin << value;
            commandsJson << jsonxx::Value(curCmdJson);
            gotPinMode(pin, value);
            continue;

          case 'P': // Pin write
            fscanf(fsolout, "%d %d", &pin, &value);
            curCmdJson << "P" << pin << value;
            commandsJson << jsonxx::Value(curCmdJson);
            gotDigitalWrite(pin, value);
            continue;

          case 'W': // Wait 
            fscanf(fsolout, "%d", &value);
            curCmdJson << "W" << value;
            commandsJson << jsonxx::Value(curCmdJson);
            gotDelay(value);
            continue;

          case 'O': // Output 
            fscanf(fsolout, "%2c", dumpBuffer);
            while(fscanf(fsolout, "%128[^`]", readBuffer)) {
              outputBuffer.append(readBuffer);
            }
            fscanf(fsolout, "%2c", &dumpBuffer[0]);
            continue;
        }
        fgets(dumpBuffer, 1, fsolout);
      } else {
        break;
      }
      if(outputBuffer.length() > 0) {
        curCmdJson.reset();
        curCmdJson << "O" << outputBuffer;
        commandsJson << jsonxx::Value(curCmdJson);
        gotSerial(outputBuffer);
        outputBuffer = "";
      }
    }
    int finalGrade = checkEnd(&commandsJson);
    cout << finalGrade << endl << commandsJson.json();
    return 0;
  } catch (const char* e) {
    // Dunno why jsonxx seems to have an issue with the const char*
    string exc;
    exc.append(e);

    curCmdJson.reset();
    curCmdJson << "displayMsg";
    curCmdJson << exc;
    commandsJson << jsonxx::Value(curCmdJson);

    cout << 0 << endl << commandsJson.json();
    return 0;
  }
}
