import React from 'react';
import { View, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Routine from './Routine'
import styles, { btnGradientColors } from '../styles'
import { routinesDisplay as routines } from '../routines' 
import * as actions from '../redux/routineActions'

const RoutineCarousel = () => {
    const dispatch = useDispatch();
    const current = useSelector(state => state.routineIndex);

    const setCurrentRoutine = (event) => {
        // get the width of the viewSize
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        // get the current position in the scrollView
        const contentOffset = event.nativeEvent.contentOffset.x;

        let currentRoutine = Math.floor(contentOffset / viewSize);
        //prevent iOS bug on scrolling beyond the start of the first routine
        if(currentRoutine < 0) currentRoutine = 0;

        dispatch(actions.changeRoutine(currentRoutine));
    }

    return (
        <View style={styles.routineContainer}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={setCurrentRoutine}
            >
                {
                    routines.map((routine, index) => 
                        <Routine 
                            key={routine.id} 
                            {...routine}
                            color={btnGradientColors.startButton[index]}
                        />)
                }
            </ScrollView>
            <View style={styles.circlesContainer}>
                {
                    routines.map((_,i) => 
                    (<View key={i+_.id} style={[styles.navCircle, 
                                  {opacity: current === i 
                                            ? 1
                                            : 0.5 }]}/>))
                }
            </View>            
        </View>
    )
}

export default RoutineCarousel;
