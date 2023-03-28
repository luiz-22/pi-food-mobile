import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'
import CheckBox from 'react-native-check-box'
import { Formik } from 'formik';
import * as yup from 'yup';



const Form = () => {
    const diets = useSelector((state) => state.diets);
    const dishes = useSelector((state) => state.dishes);
    const dispatch = useDispatch();
    const [check, setCheck] = useState(false);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Formik
                    initialValues={{ title: '', summary: '', steps: '', image: '', healthScore: 0, readyInMinutes: 0, dishTypes: [], diets: [] }}
                    onSubmit={(values, actions) => {
                        console.log(values)
                    }}
                >
                    {props => (
                        <View>
                            <Text>Title*</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                            />
                            <Text>Summary*</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={props.handleChange('summary')}
                                value={props.values.summary}
                            />
                            <Text>Steps</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={props.handleChange('steps')}
                                value={props.values.steps}
                            />
                            <Text>Image url</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={props.handleChange('image')}
                                value={props.values.image}
                            />
                            <Text>Health Score (0 - 100)</Text>
                            <TextInput
                                style={[styles.input, styles.numeric]}
                                keyboardType='numeric'
                                onChangeText={props.handleChange('score')}
                                value={props.values.score}
                            />
                            <Text>Ready in (minutes)</Text>
                            <TextInput
                                style={[styles.input, styles.numeric]}
                                keyboardType='numeric'
                                onChangeText={props.handleChange('minutes')}
                                value={props.values.minutes}
                            />
                            <Text>Diets</Text>
                            <View style={styles.checkList}>
                                {diets.map((diet, index) => {
                                    return (
                                        <View style={styles.item} key={index}>
                                            <CheckBox
                                                onClick={() => {
                                                    setCheck(!check)
                                                }}
                                                isChecked={check}
                                            />
                                            <Text>{diet.name}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                            <Text>Types of dishes</Text>
                            <View style={styles.checkList}>
                                {dishes.map((dish, index) => {
                                    return (
                                        <View style={styles.item} key={index}>
                                            <CheckBox
                                                onClick={() => {
                                                    setCheck(!check)
                                                }}
                                                isChecked={check}
                                            />
                                            <Text>{dish.name}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                            <TouchableOpacity onPress={props.handleSubmit}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>CREATE RECIPE</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        // borderColor: '#ddd',
        marginBottom: 14,
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: 14,
    },
    numeric: {
        width: 80,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    },
    checkList: {
        marginBottom: 14,
    },
    item: {
        flexDirection: 'row',
        marginRight: 10
    }
});

export default Form