Pod::Spec.new do |s|
  s.name         = "@cureapp/react-native-sensor-manager"
  s.version      = "0.2"
  s.license      = "NONE"
  s.homepage     = "https://github.com/CureApp/react-native-sensor-manager"
  s.authors      = { 'Kevin Primicerio' => 'kevin.primicerio@gmail.com' }
  s.summary      = "A React Native module that allows you to use the native sensorManager in order to use the accelerometer, gyroscope and magnetometer"
  s.source       = { :git => "https://github.com/CureApp/react-native-sensor-manager" }
  
  s.dependency 'React'
end
