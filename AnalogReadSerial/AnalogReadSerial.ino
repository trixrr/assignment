int val;
//int tempPin = A;

void setup()
{
  Serial.begin(9600);
}
void loop()
{
  val = analogRead(A0);
  float mv = ( val / 1024.0) * 5000;
  float cel = mv / 100;
  //float farh = (cel * 9) / 5 + 32;

  //Serial.print("TEMPRATURE = ");
  Serial.println(cel);
  //Serial.print("*C");
  //Serial.println();
  delay(1000);

  /* uncomment this to get temperature in farenhite
    Serial.print("TEMPRATURE = ");
    Serial.print(farh);
    Serial.print("*F");
    Serial.println();


  */
}


