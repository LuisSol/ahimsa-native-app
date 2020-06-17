import React, { useState } from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation, useFocusEffect } from '@react-navigation/native' 
import styles from '../styles'

const backBtnColor = [
    ['#ED213A', '#93291E']
]

const StartScreen = () => {
    const navigation = useNavigation();
    const [quoteVisible, setQuoteVisible] = useState(true);

    const returnToMain = () => {
        navigation.navigate('Home')
    }
    
    useFocusEffect(() => {
        setTimeout(() => {
            setQuoteVisible(false);
        },3500);
    },[])

    return (
        <>
        <Modal
            visible={quoteVisible}
            animationType='fade'
        >
            <View style={styles.quoteModal}>
                <Text>"Mala la wea"</Text>
                <Text>- Weon.</Text>
            </View>
        </Modal>
        
        <View style={styles.mainContainer}>
            <TouchableOpacity 
                style={styles.touchablePrimaryBtn}
                onPress={returnToMain}                
            >
                <LinearGradient
                    colors={backBtnColor[0]} 
                    style={styles.primaryButton}           
                >
                <Text style={styles.buttonText}>Regresar</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default StartScreen;
