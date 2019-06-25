declare module "@cureapp/react-native-sensor-manager" {
  // Accelerometer
  function startAccelerometer(minimumDelay: number);
  function stopAccelerometer();
  // Gyroscope
  function startGyroscope(minimumDelay: number);
  function stopGyroscope();
  // Magnetometer
  function startMagnetometer(minimumDelay: number);
  function stopMagnetometer();
  // Orientation
  function startOrientation(minimumDelay: number);
  function stopOrientation();
  // Step Counter
  function startStepCounter(minimumDelay: number);
  function stopStepCounter();
  // Thermometer
  function startThermometer(minimumDelay: number);
  function stopThermometer();
  // LightSensor
  function startLightSensor(minimumDelay: number);
  function stopLightSensor();
  // ProxyMeter
  function startProximity(minimumDelay: number);
  function stopProximity();
}
