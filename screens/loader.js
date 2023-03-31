import { View, Modal, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = () => {
    return (
        <Modal >
            <View style={styles.container}>
                <ActivityIndicator size="large" color='#f4952f' />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#f4952f',
        fontSize: 20,

    }
});

export default Loader