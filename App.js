import { AppLoading, SplashScreen, Updates } from 'expo';
import { Asset } from 'expo-asset';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import SplashImage from './src/assets/images/LOGO_APP.png'
import * as Font from 'expo-font';
import RoutineCarousel from './src/components/RoutineCarousel'
import { LinearGradient } from 'expo-linear-gradient'

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHide();
// To change the start button gradient between routines
const startButtonColors = [
  ['#F0CB35', '#C02425'],
  ['#159957', '#155799'],
  ['#C33764', '#1D2671']
];

export default function App() { 
  return (
    <AnimatedAppLoader image={SplashImage}>
      <MainScreen />
    </AnimatedAppLoader>
  );
}
 
const MainScreen = () => {   
  const [currentRoutine, setCurrentRoutine] = useState(0);

  const changeRoutine = (routine) => {    
    setCurrentRoutine(routine);
  }

  return (
    <View
      style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Ahimsa</Text>      
      <Text style={styles.regularText}>
        Selecciona tu ritmo:
      </Text>
      <RoutineCarousel
        colors={startButtonColors} 
        changeRoutine={changeRoutine}
        currentRutine={currentRoutine}
      />
      <LinearGradient
        colors={startButtonColors[currentRoutine]}
        style={styles.startButton}
      >
        <Text style={styles.buttonText}>Iniciar</Text>
      </LinearGradient>
    </View>
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 70
  },
  mainTitle: {
    fontFamily: 'Sacramento-Regular', 
    fontSize: 60
  },
  regularText: {
    fontSize: 15
  },
  startButton: {
    width: '60%',
    height: '8%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',  
  },
  buttonText: {
    color: '#FFF',
    fontSize: 21
  }
})



