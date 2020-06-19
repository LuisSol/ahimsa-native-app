import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import RoutineCarousel from './RoutineCarousel'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import styles, { btnGradientColors } from '../styles'
import { useSelector } from 'react-redux'

export default MainScreen = () => {   
    const navigation = useNavigation();
    const current = useSelector(state => state.routineIndex);

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
        <RoutineCarousel />
        <TouchableOpacity 
            style={styles.touchablePrimaryBtn}
            onPress={startRoutine}
        >
            <LinearGradient
                colors={btnGradientColors.startButton[current]} 
                style={styles.primaryButton}           
            >
            <Text style={styles.buttonText}>Elegir</Text>
            </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

  