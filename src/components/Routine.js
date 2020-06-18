import React from 'react'
import { View , Text} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { SvgCss } from 'react-native-svg'
import styles from '../styles'

const Routine = (props) => {
    
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

export default Routine;
