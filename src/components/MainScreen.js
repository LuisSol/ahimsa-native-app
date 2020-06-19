import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import RoutineCarousel from './RoutineCarousel'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import styles, { btnGradientColors } from '../styles'

export default MainScreen = () => {   
    const [currentRoutine, setCurrentRoutine] = useState(0);
    const navigation = useNavigation();
  
    const changeRoutine = (routine) => {    
      setCurrentRoutine(routine);
    }
    
    const startRoutine = () => {
        navigation.navigate('Start');
    }

    return (
      <View
        style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Ahimsa</Text>      
        <Text style={styles.regularText}>
          Selecciona tu ritmo:
        </Text>
        <RoutineCarousel
          changeRoutine={changeRoutine}
          currentRutine={currentRoutine}
        />
        <TouchableOpacity 
            style={styles.touchablePrimaryBtn}
            onPress={startRoutine}
        >
            <LinearGradient
                colors={btnGradientColors.startButton[currentRoutine]} 
                style={styles.primaryButton}           
            >
            <Text style={styles.buttonText}>Iniciar</Text>
            </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  