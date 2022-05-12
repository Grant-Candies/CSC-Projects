#include "PDMSerial.h"

PDMSerial pdm;

int cPin = 13;
int dPin = 12;
int ePin = 10;
int fPin = 9;
int gPin = 7;
int aPin = 6;
int bPin = 4;
int ledPin = 2;

int cPinState = LOW;
int dPinState = LOW;
int ePinState = LOW;
int fPinState = LOW;
int gPinState = LOW;
int aPinState = LOW;
int bPinState = LOW;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(cPin, INPUT_PULLUP);
  pinMode(dPin, INPUT_PULLUP);
  pinMode(ePin, INPUT_PULLUP);
  pinMode(fPin, INPUT_PULLUP);
  pinMode(gPin, INPUT_PULLUP);
  pinMode(aPin, INPUT_PULLUP);
  pinMode(bPin, INPUT_PULLUP);
  Serial.begin(9600);  
}

void loop() {
  cPinState = digitalRead(cPin);
  dPinState = digitalRead(dPin);
  ePinState = digitalRead(ePin);
  fPinState = digitalRead(fPin);
  gPinState = digitalRead(gPin);
  aPinState = digitalRead(aPin);
  bPinState = digitalRead(bPin);
  
  if (digitalRead(cPin) == LOW) {
    pdm.transmitSensor("p13", cPinState);
    pdm.transmitSensor("end");
    Serial.print("C");
  }
  else if (digitalRead(dPin) == LOW) {
    pdm.transmitSensor("p12", dPinState);
    pdm.transmitSensor("end");
    Serial.print("D");
  }
  else if (digitalRead(ePin) == LOW) {
    pdm.transmitSensor("p10", ePinState);
    pdm.transmitSensor("end");
    Serial.print("E");
  }
  else if (digitalRead(fPin) == LOW) {
    pdm.transmitSensor("p9", fPinState);
    pdm.transmitSensor("end");
    Serial.print("F");
  }
  else if (digitalRead(gPin) == LOW) {
    pdm.transmitSensor("p7", gPinState);
    pdm.transmitSensor("end");
    Serial.print("G");
  }
  else if (digitalRead(aPin) == LOW) {
    pdm.transmitSensor("p6", aPinState);
    pdm.transmitSensor("end");
    Serial.print("A");
  }
  else if (digitalRead(bPin) == LOW) {
    pdm.transmitSensor("p4", bPinState);
    pdm.transmitSensor("end");
    Serial.print("B");
  }
  
  boolean newData = pdm.checkSerial(); 
  
  if(newData) {
    if(pdm.getName().equals(String("on"))){
      digitalWrite(ledPin, HIGH);
    }
    if(pdm.getName().equals(String("off"))){
      digitalWrite(ledPin, LOW);
    }
  }
  
  // Serial.println(potentialValue);
  delay(1);
}

