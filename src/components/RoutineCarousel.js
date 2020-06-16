import React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native'
import Routine from './Routine'

const routines = [
    {
      id: 'morenergy1',
      title: 'Energía'
    },
    {
      id: 'eveconcen2',
      title: 'Concentración'
    },
    {
      id: 'nighrelx3',
      title: 'Relajación'
    },
  ] 

const RoutineCarousel = (props) => {

    const setCurrentRoutine = (event) => {
        // get the width of the viewSize
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        // get the current position in the scrollView
        const contentOffset = event.nativeEvent.contentOffset.x;
                
        const currentRoutine = Math.floor(contentOffset / viewSize);
        props.changeRoutine(currentRoutine);
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={setCurrentRoutine}
            >
                {routines.map(routine => <Routine key={routine.id} {...routine}/>)}
            </ScrollView>            
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '80%',
        width: '100%',
        paddingTop: 20,      
    }
})

export default RoutineCarousel;
