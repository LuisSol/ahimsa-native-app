import React from 'react'
import { StyleSheet, Dimensions } from 'react-native' 
import { View , Text} from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width;

const Routine = (props) => {
    return (
        <View style={styles.routineCard}>
            <Text>
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
    }
})

export default Routine;
