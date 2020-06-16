import React from 'react'
import { StyleSheet, Dimensions } from 'react-native' 
import { View , Text} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { SvgCss } from 'react-native-svg'

const DEVICE_WIDTH = Dimensions.get('window').width;

const Routine = (props) => {

    console.log(props);

    return (
        <View style={styles.routineCard}>            
            <LinearGradient
                colors={props.color}
                style={styles.routineCircle}
            >
                <SvgCss
                    width="90%"
                    height="90%"
                    xml={props.image}
                />               
            </LinearGradient>            
            <Text
                style={styles.routineTitle}
            >
                {props.title}
            </Text>            
        </View>
    )
}

const styles = StyleSheet.create({
    routineCard: {
        height: '100%',
        width: DEVICE_WIDTH,
        alignItems: 'center',        
    },
    routineCircle: {
        height: 270,
        width: 270,
        borderRadius: Math.floor(270/2),
        alignContent: 'center',
        alignItems: 'center' 
    },
    routineTitle: {
        fontFamily: 'Sacramento-Regular', 
        fontSize: 50
    }
})

export default Routine;
