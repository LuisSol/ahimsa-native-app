import { AppLoading, SplashScreen, Updates } from 'expo';
import { Asset } from 'expo-asset';
import Constants from 'expo-constants';
import React from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import SplashImage from './src/assets/images/LOGO_APP.png'
import * as Font from 'expo-font';

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHide();

export default function App() {
 
  return (
    <AnimatedAppLoader image={SplashImage}>
      <MainScreen />
    </AnimatedAppLoader>
  );
}

function AnimatedAppLoader({ children, image }) {
  const [isSplashReady, setSplashReady] = React.useState(false);

  const startAsync = React.useMemo(
    // If you use a local image with require(...), use `Asset.fromModule`
    () => () => Asset.fromModule(image).downloadAsync(),
    [image]
  );

  const onFinish = React.useMemo(() => setSplashReady(true), []);

  if (!isSplashReady) {
    return (
      <AppLoading
        startAsync={startAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    );
  }

  return (
    <AnimatedSplashScreen image={image}>
      {children}
    </AnimatedSplashScreen>
  );
}

function AnimatedSplashScreen({ children, image }) {
  const animation = React.useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = React.useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = React.useState(
    false
  );

  React.useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = React.useMemo(() => async () => {
    SplashScreen.hide();
    try {
      // Load stuff      
      await Promise.all([
        // Load fonts
        Font.loadAsync({
          'Sacramento-Regular': require('./src/assets/fonts/Sacramento-Regular.ttf')
        })
  
      ]);
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true);
    }
  });

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants.manifest.splash.backgroundColor,
              opacity: animation,
            },
          ]}>
                    
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: Constants.manifest.splash.resizeMode || 'contain',
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}

function MainScreen() {
    

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 40
      }}>
      <Text
        style={styles.mainTitle}
      >
        Ahimsa
      </Text>
      <Text
        style={styles.regularText}
      >
        Selecciona tu ritmo:
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontFamily: 'Sacramento-Regular', 
    fontSize: 60
  },
  regularText: {
    fontSize: 15
  }
})



