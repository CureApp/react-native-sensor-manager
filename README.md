This is a forked repository of [react-native-sensor-manager](https://github.com/kprimice/react-native-sensor-manager.git) that seems to not to be actively maintained

# react-native-sensor-manager

Wrapper for react-native. Accelerometer, Gyroscope, Magnetometer, Orientation, Step Counter, Thermometer, LightSensor, and Proximity Sensor are supported for now.

## Add it to your project

`$ yarn add @cureapp/react-native-sensor-manager`

## Supported React Native Version

| Version | Supported RN |
| --- | --- |
| 0.2.0 | RN 0.59+ |
| 1.0.0 | RN 0.60+ |

## Api

### Setup

```js
import React, {
  DeviceEventEmitter // will emit events that you can listen to
} from "react-native";

import { SensorManager } from "@cureapp/react-native-sensor-manager";
```

### Accelerometer

```js
SensorManager.startAccelerometer(100); // To start the accelerometer with a minimum delay of 100ms between events.
DeviceEventEmitter.addListener("Accelerometer", function(data) {
  /**
   * data.x
   * data.y
   * data.z
   **/
});
SensorManager.stopAccelerometer();
```

### Gyroscope

```js
DeviceEventEmitter.addListener("Gyroscope", function(data) {
  /**
   * data.x
   * data.y
   * data.z
   **/
});
SensorManager.startGyroscope(100);
SensorManager.stopGyroscope();
```

### Magnetometer

```js
SensorManager.startMagnetometer(100);
DeviceEventEmitter.addListener("Magnetometer", function(data) {
  /**
   * data.x
   * data.y
   * data.z
   **/
});
SensorManager.stopMagnetometer();
```

### Orientation

```js
SensorManager.startOrientation(100);
DeviceEventEmitter.addListener("Orientation", function(data) {
  /**
   * data.azimuth
   * data.pitch
   * data.roll
   **/
});
SensorManager.stopOrientation();
```

### Step Counter

```js
SensorManager.startStepCounter(1000);
DeviceEventEmitter.addListener("StepCounter", function(data) {
  /**
   * data.steps
   **/
});
SensorManager.stopStepCounter();
```

### Thermometer

```js
SensorManager.startThermometer(1000);
DeviceEventEmitter.addListener("Thermometer", function(data) {
  /**
   * data.temp
   **/
});
SensorManager.stopThermometer();
```

### LightSensor

```js
SensorManager.startLightSensor(100);
DeviceEventEmitter.addListener("LightSensor", function(data) {
  /**
   * data.light
   **/
});
SensorManager.stopLightSensor();
```

### Proximity Sensor

```js
SensorManager.startProximity(100);
DeviceEventEmitter.addListener("Proximity", function(data) {
  /**
   * data.isNear: [Boolean] A flag representing whether something is near the screen.
   * data.value: [Number] The raw value returned by the sensor (usually distance in cm).
   * data.maxRange: [Number] The maximum range of the sensor.
   **/
});
SensorManager.stopProximity();
```
