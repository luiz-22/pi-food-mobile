import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Formik } from 'formik';
import * as yup from 'yup';


const Form = () => {

    return (
        <View style={styles.container}>
            <Text>form</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

export default Form