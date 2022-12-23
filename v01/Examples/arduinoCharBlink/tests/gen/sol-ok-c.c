const int ledPin = 13;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(9600);

  // set ledPin as an output pin
  pinMode(ledPin, OUTPUT);

  // send an intro:
  Serial.println("Appuyer sur une touche puis entree");
  Serial.println();
}

void loop() {
  // get any incoming bytes:
  if (Serial.available() > 0) {
    char thisChar = Serial.read();

    // say what was sent:
    Serial.print("Vous avez envoye :");
    Serial.write(thisChar);

    if(thisChar == '1') {
      Serial.println("on allume la LED");
      digitalWrite(ledPin, HIGH);      
    }

    if(thisChar == '0') {
      Serial.println("on eteint la LED");
      digitalWrite(ledPin, LOW);   
    }
  }
}
