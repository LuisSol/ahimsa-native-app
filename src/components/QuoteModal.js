import React from 'react'
import { Modal, View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import styles from '../styles'

const QuoteModal = ({ quoteVisible }) => {
    const quote = useSelector(state => state.quote)

    return (
        <Modal
            visible={quoteVisible}
            animationType='fade'
        >
            <View style={styles.quoteModal}>
                <View style={{justifyContent: 'center', height: '70%'}}>
                    <Text style={{fontSize: 30, fontFamily: 'Oswald-Regular'}}>“{quote.quote}”</Text>
                    <Text style={{fontFamily: 'Oswald-Regular', alignSelf: 'flex-end', fontStyle: 'italic', marginTop: 15}}>-{quote.author}.</Text>
                </View>
                <View style={{justifyContent: 'space-around', height: '30%'}}>
                    <Text >
                        Recuerda inhalar y exhalar SOLO por la nariz, 
                        las inhalaciones deben ser profundas y al exhalar debes vaciar 
                        por completo tus pulmones.                
                    </Text>
                    <Text >
                        Si presentas mareo es normal. Solo lleva tu barbilla al pecho y descanza unos minuto hasta que pase.                
                    </Text>                    
                </View>
            </View>            
        </Modal>
    )
}

export default QuoteModal;
