import React, { useState, useEffect } from 'react'
import { Text, View, Modal, TouchableOpacity, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { VictoryPie } from 'victory-native' 
import styles, { TOTAL_CENTER, btnGradientColors, pieChartColors } from '../styles'

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
    outputRange: [1, 1.15]
});

const StartScreen = () => {
    const navigation = useNavigation();
    const [quoteVisible, setQuoteVisible] = useState(true);
    const [countdownVisible, setCountDownVisible] = useState(false);
    const [counter, setCounter] = useState(3);
    const [playingRoutine, setPlayingRoutine] = useState(true);

    const returnToMain = () => {
        navigation.navigate('Home')
    };
    
    const restartRutine = () => {
        setPlayingRoutine(true);
        resetAnimations();
        setCountDownVisible(true);
        setTimeout(() => {
            setCounter(counter - 1);
        }, 1300);
    };

    const startRoutine = () => {
        setTimeout(() => {
            startAnimations();
        }, 200);        
    }

    // Time for the intro modal
    useFocusEffect(() => {        
        setTimeout(() => {           
            setQuoteVisible(false);            
        },3500);
    },[]);
    useEffect(() => {
        if(!quoteVisible) {
            restartRutine();
        }    
    }, [quoteVisible]);

    useEffect(() => { 
        if (counter === 'Ya') {
            setTimeout( () => {
                setCountDownVisible(false);
                setCounter(3);
                startRoutine();
            }, 700);           
        }       
        else if (countdownVisible) {
            setTimeout(() => {
                if (counter !== 1) {
                    setCounter(counter - 1)
                } 
                else {                    
                    setCounter('Ya');
                }                                
            },1000);                      
        }        
    }, [counter]);

    const resetAnimations = () => {
        spinValue.setValue(0) 
        growValue.setValue(0) 
        msg1Opacity.setValue(1)  
        msg2Opacity.setValue(0)  
        msg3Opacity.setValue(0)  
    }

    const startAnimations = () => {
        /* 
            I used another animation for the instruction message change instead of state
            because state update is asyncronus and i need the message change to be syncronus.
            I used two parallel Animation loops for the same reason
        */
        Animated.parallel([
            Animated.loop(
                // Pointer Animation                
                Animated.timing(spinValue, {
                    toValue: 1,
                    duration: 2500,
                    useNativeDriver: true,
                    easing: Easing.linear
                })                                  
                ,
                {
                    iterations: 12 
                }
            ) 
            ,
            Animated.loop(
                Animated.parallel([                
                    // Respiration Animation                           
                    Animated.sequence([
                        Animated.timing(growValue, {
                            toValue: 1,
                            duration: 1000,
                            useNativeDriver: true,
                            easing: Easing.linear
                        }),
                        Animated.timing(growValue, {
                            toValue: 0,
                            delay: 500,
                            duration: 900,
                            useNativeDriver: true,
                            easing: Easing.linear
                        })
                    ])
                    ,    
                    // Instructions Animation          
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
                                delay: 250, 
                                duration: 250,
                                useNativeDriver: true,
                                easing: Easing.linear
                            }),
                            Animated.timing(msg3Opacity, {
                                toValue: 1,
                                delay: 250,
                                duration: 250,
                                useNativeDriver: true,
                                easing: Easing.linear
                            })
                        ]),
                        Animated.parallel([
                            Animated.timing(msg3Opacity, {
                                toValue: 0,
                                delay: 700, 
                                duration: 200,
                                useNativeDriver: true,
                                easing: Easing.linear
                            }),
                            Animated.timing(msg1Opacity, {
                                toValue: 1,
                                delay: 700,
                                duration: 200,
                                useNativeDriver: true,
                                easing: Easing.linear
                            })
                        ])                        
                    ])
                ])           
                ,
                {
                    iterations: 12 
                }
            // I needed to use this hack in order to execute a callback function at the end of the Animations
            // for some reason the Animated.parallel doesnt execute the callback at the end
            ).start(() => setPlayingRoutine(false) )
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

            <Modal
                visible={countdownVisible}
                animationType='fade'
                transparent={true}
            >
                <View style={styles.countDownModal}>
                    <View style={styles.countDownContainer}>
                        <Text style={styles.countDownNum}>{counter}</Text>
                    </View>
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
                        colorScale={pieChartColors[0]}
                        labels={[]}
                        radius={150}
                        innerRadius={90}
                    />
                    <Animated.View 
                        style={[styles.breathCircle, {transform: [{scale: grow}]}]}
                    >   
                        <LinearGradient
                            colors={btnGradientColors.startButton[0]} 
                            style={styles.breathCircle}           
                        >
                            <Animated.Text
                                style={[styles.instruction, {opacity: msg1Opacity}]} 
                            >
                                Inhala
                            </Animated.Text>
                            <Animated.Text 
                                style={[styles.instruction, {opacity: msg2Opacity}]}
                            >
                                Sostén
                            </Animated.Text>
                            <Animated.Text 
                                style={[styles.instruction, {opacity: msg3Opacity}]}
                            >
                                Exhala
                            </Animated.Text>
                        </LinearGradient>
                    </Animated.View>
                    <Animated.View 
                        style={[styles.rotationPivot, {transform: [{ rotate: spin}]}]}
                    >
                        <View style={styles.pointer}></View>
                    </Animated.View>
                </View>
                <TouchableOpacity
                    disabled={playingRoutine} 
                    style={[styles.touchablePrimaryBtn, (playingRoutine) ? styles.disabledBtn : {} ]}
                    onPress={restartRutine}                
                >
                    <LinearGradient
                        colors={btnGradientColors.startButton[0]} 
                        style={styles.primaryButton}           
                    >
                        <Text style={styles.buttonText}>Iniciar</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.touchablePrimaryBtn}
                    onPress={returnToMain}                
                >
                    <LinearGradient
                        colors={btnGradientColors.backBtnColor} 
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
