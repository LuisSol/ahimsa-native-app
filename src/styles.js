import { StyleSheet, Dimensions } from 'react-native'

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const TOTAL_CENTER = {
    justifyContent: 'center',
    alignItems: 'center', 
}
export const btnGradientColors = {
  startButton: [
    ['#F0CB35', '#C02425'],
    ['#159957', '#155799'],
    ['#C33764', '#1D2671'],
  ],
  backBtnColor: ['#ED213A', '#93291E']
}
export const pieChartColors = [
 ['rgba(255,50,0,.5)','rgba(255,0,0,.5)','rgba(255,0,0,.8)' ],
]
export default StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 40,
      paddingBottom: 70
    },
    mainTitle: {
      fontFamily: 'Sacramento-Regular', 
      fontSize: 60
    },
    regularText: {
      fontSize: 15
    },
    touchablePrimaryBtn: {
        width: '60%',
        height: '8%',
        marginBottom: 5
    },
    primaryButton: {
      height: '100%',      
      borderRadius: 10,
      flexDirection: 'row',      
      ...TOTAL_CENTER 
    },
    buttonText: {
      color: '#FFF',
      fontSize: 21
    },
    routineCard: {
        height: '100%',
        width: DEVICE_WIDTH,
        alignItems: 'center',        
    },
    routineCircle: {
        height: 270,
        width: 270,
        borderRadius: Math.floor(270/2),
        ...TOTAL_CENTER 
    },
    routineTitle: {
        fontFamily: 'Sacramento-Regular', 
        fontSize: 50
    },
    routineContainer: {
        height: '80%',
        width: '100%',
        paddingTop: 20,
        justifyContent: 'center'      
    },
    circlesContainer: {
        width: '100%',
        height: 20,
        flexDirection: 'row',         
        position: 'absolute',
        bottom: 30,
        ...TOTAL_CENTER
    },
    navCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#666',
        margin: 5  
    },
    quoteModal: {
      height: '100%',
      width: '100%',
      ...TOTAL_CENTER
    },
    breathCircle: {
      borderRadius: 115, 
      height: 230, 
      width: 230, 
      position: 'absolute', 
      backgroundColor: 'red',
      ...TOTAL_CENTER
    },
    rotationPivot: {
      position: 'absolute', 
      width: 20, 
      height: 350
    },
    pointer: {
      width: 20, 
      height: 20, 
      borderRadius: 10, 
      backgroundColor: 'white', 
      borderWidth: 1, 
      borderColor: '#666'
    },
    instruction: {
      position: 'absolute',
      color: 'white',
      fontSize: 50,
      fontFamily: 'Sacramento-Regular'
    },
    countDownModal: {
      backgroundColor: 'rgba(255,255,255,.9)',
      height: '100%',
      width: '100%',
      ...TOTAL_CENTER
    },
    countDownContainer: {
      borderColor: '#666',
      borderWidth: 1,      
      borderRadius: 30,
      height: 200,
      width: 200,
      backgroundColor: 'white',
      ...TOTAL_CENTER     
    },
    countDownNum: {
      fontSize: 100,
      fontFamily: 'Sacramento-Regular'
    }
  })

