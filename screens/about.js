import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const About = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/luiz-22')} style={styles.margin}>
                <AntDesign name="github" size={54} color="#f4952f" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/luiz22/')}>
                <Entypo name="linkedin" size={54} color="#f4952f" />
            </TouchableOpacity>
        </View>
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
    margin: {
        marginBottom: 50,
    }
});

export default About