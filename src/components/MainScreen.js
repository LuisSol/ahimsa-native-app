import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import RoutineCarousel from './RoutineCarousel'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import styles from '../styles'

// To change the start button gradient between routines
const startButtonColors = [
    ['#F0CB35', '#C02425'],
    ['#159957', '#155799'],
    ['#C33764', '#1D2671']
  ];

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
          colors={startButtonColors} 
          changeRoutine={changeRoutine}
          currentRutine={currentRoutine}
        />
        <TouchableOpacity 
            style={styles.touchablePrimaryBtn}
            onPress={startRoutine}
        >
            <LinearGradient
                colors={startButtonColors[currentRoutine]} 
                style={styles.primaryButton}           
            >
            <Text style={styles.buttonText}>Iniciar</Text>
            </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  