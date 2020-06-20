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
    buildNumber: "1.0.0"
  },
  android: {
    package: "com.lesn.ahimsa",
    versionCode: 1
  }
};
