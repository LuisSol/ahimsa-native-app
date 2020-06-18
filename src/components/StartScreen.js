import React, { useState, useEffect } from 'react'
import { Text, View, Modal, TouchableOpacity, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { VictoryPie } from 'victory-native' 
import styles, { TOTAL_CENTER } from '../styles'

const backBtnColor = [
    ['#ED213A', '#93291E']
]

// Animations values
const spinValue = new Animated.Value(0);
const growValue = new Animated.Value(0);
const msg1Opacity = new Animated.Value(1);
const msg2Opacity = new Animated.Value(0);
const msg3Opacity = new Animated.Value(0);
const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg' , '360deg']
});
const grow = growValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.1]
});

const StartScreen = () => {
    const navigation = useNavigation();
    const [quoteVisible, setQuoteVisible] = useState(true);

    const returnToMain = () => {
        navigation.navigate('Home')
    }
    
    // Time for the intro modal
    useFocusEffect(() => {
        setTimeout(() => {
            setQuoteVisible(false);
        },3500);
    },[])

    useEffect(() => {
        if(!quoteVisible) {
            resetAnimations();  
            startAnimations();                       
        }    
    }, [quoteVisible]);

    const resetAnimations = () => {
        spinValue.setValue(0) 
        growValue.setValue(0) 
        msg1Opacity.setValue(1)  
        msg2Opacity.setValue(0)  
        msg3Opacity.setValue(0)  
    }

    const startAnimations = () => {
        /* I couln't use state to change the instruction message 
           due Animated.sequene currently doesnt allow a callback per step,
           also state changes are asyncronus :)  
        */
        Animated.parallel([
            // Pointer rotation animation
            Animated.loop(                
                Animated.timing(spinValue, {
                    toValue: 1,
                    duration: 2500,
                    useNativeDriver: true,
                    easing: Easing.linear
                })
                ,                
                {
                    iterations: 7
                }
            ), 
            // Respiration Animation
            Animated.loop(                
                Animated.sequence([
                    Animated.timing(growValue, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                        easing: Easing.linear
                    }),
                    Animated.timing(growValue, {
                        toValue: 0,
                        delay: 450,
                        duration: 1000,
                        useNativeDriver: true,
                        easing: Easing.linear
                    })
                ])
                ,
                {
                    iterations: 7
                }
            ),
            // Instruction Animation
            Animated.loop(                
                Animated.sequence([
                    Animated.parallel([
                        Animated.timing(msg1Opacity, {
                            toValue: 0,
                            delay: 800, 
                            duration: 200,
                            useNativeDriver: true,
                            easing: Easing.linear
                        }),
                        Animated.timing(msg2Opacity, {
                            toValue: 1,
                            delay: 800,
                            duration: 200,
                            useNativeDriver: true,
                            easing: Easing.linear
                        })
                    ]),
                    Animated.parallel([
                        Animated.timing(msg2Opacity, {
                            toValue: 0,
                            delay: 200, 
                            duration: 200,
                            useNativeDriver: true,
                            easing: Easing.linear
                        }),
                        Animated.timing(msg3Opacity, {
                            toValue: 1,
                            delay: 200,
                            duration: 200,
                            useNativeDriver: true,
                            easing: Easing.linear
                        })
                    ]),
                    Animated.parallel([
                        Animated.timing(msg3Opacity, {
                            toValue: 0,
                            delay: 800, 
                            duration: 200,
                            useNativeDriver: true,
                            easing: Easing.linear
                        }),
                        Animated.timing(msg1Opacity, {
                            toValue: 1,
                            delay: 800,
                            duration: 200,
                            useNativeDriver: true,
                            easing: Easing.linear
                        })
                    ])                        
                ])
                ,
                {
                    iterations: 7 
                }
            )
        ]).start();
    }

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
                <Text style={styles.mainTitle}>Energía</Text> 
                <View style={{...TOTAL_CENTER}}>
                    <VictoryPie
                        data={[
                            { y: 2 },
                            { y: 1 },
                            { y: 2 }
                        ]}
                        colorScale={['tomato','yellow','green']}
                        labels={[]}
                        radius={150}
                        innerRadius={90}
                    />
                    <Animated.View 
                        style={[styles.breathCircle, {transform: [{scale: grow}]}]}
                    >
                        <Animated.Text
                            style={{opacity: msg1Opacity, position: 'absolute' }} 
                        >
                            Inhala
                        </Animated.Text>
                        <Animated.Text 
                            style={{opacity: msg2Opacity, position: 'absolute'  }}
                        >
                            Sostén
                        </Animated.Text>
                        <Animated.Text 
                            style={{opacity: msg3Opacity, position: 'absolute' }}
                        >
                            Exhala
                        </Animated.Text>
                    </Animated.View>
                    <Animated.View 
                        style={[styles.rotationPivot, {transform: [{ rotate: spin}]}]}
                    >
                        <View style={styles.pointer}></View>
                    </Animated.View>
                </View>
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
