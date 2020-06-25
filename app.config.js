export default {
  name: "ahimsa",  
  icon: "./src/assets/images/ICON_APP.png",
  version: "1.0.0",
  splash: {
    image:
      "./src/assets/images/LOGO_APP.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  orientation: 'portrait',
  slug: "lesn-ahimsa",
  ios: {
    bundleIdentifier: "com.lesn.ahimsa",
    buildNumber: "1.0.0",
    infoPlist: {
      NSCalendarsUsageDescription: "Esta app NO usa la cámara del equipo, sin embargo esta desarrollada con Expo Kit.",
      NSContactsUsageDescription: "Esta app NO usa la lista de usarios del equipo, sin embargo esta desarrollada con Expo Kit.",
      NSLocationWhenInUseUsageDescription: "Esta app NO usa la localización del equipo, sin embargo esta desarrollada con Expo Kit.",
      NSMicrophoneUsageDescription: "Esta app NO usa el micrófono del equipo, sin embargo esta desarrollada con Expo Kit.",
      NSMotionUsageDescription: "Esta app NO usa el acelerometro del equipo, sin embargo esta desarrollada con Expo Kit.",
      NSPhotoLibraryAddUsageDescription: "Esta app NO guarda imágenes en el equipo, sin embargo esta desarrollada con Expo Kit.",
      NSCameraUsageDescription: "Esta app NO usa la cámara del equipo, sin embargo esta desarrollada con Expo Kit."
    },
  },
  android: {
    package: "com.lesn.ahimsa",
    versionCode: 2,
    permissions: []
  }
};
