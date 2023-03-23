import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import CheckBox from 'react-native-check-box'
import { Formik } from 'formik';
import * as yup from 'yup';


const Form = () => {

    return (
        <View style={styles.container}>
            <Formik>
                <View>
                    <TextInput
                        placeholder='Title*'
                    />
                    <TextInput
                        placeholder='Summary*'
                    />
                    <TextInput
                        placeholder='Steps'
                    />
                    <TextInput
                        placeholder='Image url'
                    />
                    <TextInput
                        placeholder='Health Score'
                    />
                    <TextInput
                        placeholder='Ready in (minutes)'
                    />
                    <View>
                        <CheckBox
                            onClick={() => {
                            }}
                        />
                    </View>
                </View>
            </Formik>
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