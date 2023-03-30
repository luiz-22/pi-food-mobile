import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createRecipe } from "../redux/actions";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'
import CheckBox from 'react-native-check-box'
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    summary: yup.string()
        .required()
        .min(8),
    healthScore: yup.string()
        .test('is-num-0-100', '0 - 100', (val) => {
            return parseInt(val) <= 100 && parseInt(val) >= 0;
        }),
    readyInMinutes: yup.string()
        .test('is-num-0-240', '0 - 240', (val) => {
            return parseInt(val) <= 240 && parseInt(val) >= 0;
        }),
});

const Form = ({ navigation }) => {
    const diets = useSelector((state) => state.diets);
    const dishes = useSelector((state) => state.dishes);
    const dispatch = useDispatch();

    const [check, setCheck] = useState([]);
    const [check2, setCheck2] = useState([]);

    useEffect(() => {
        setCheck(
            diets.map((d) => {
                let checked = false;
                return { ...d, checked }
            })
        )

        setCheck2(
            dishes.map((d) => {
                let checked = false;
                return { ...d, checked }
            })
        )

    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Formik
                    initialValues={{ title: '', summary: '', steps: '', image: '', healthScore: 0, readyInMinutes: 0, dishTypes: [], diets: [] }}
                    validationSchema={reviewSchema}
                    onSubmit={(values, actions) => {
                        dispatch(createRecipe(values))
                        actions.resetForm();
                        navigation.navigate("Tabs");
                    }}
                >
                    {props => (
                        <View>
                            <Text>Title*</Text>
                            {(props.touched.title && props.errors.title) && <Text style={styles.errorText}>{props.touched.title && props.errors.title}</Text>}
                            <TextInput
                                style={styles.input}
                                onChangeText={props.handleChange('title')}
                                onBlur={props.handleBlur('title')}
                                value={props.values.title}
                            />
                            <Text>Summary*</Text>
                            {(props.touched.summary && props.errors.summary) && <Text style={styles.errorText}>{props.touched.summary && props.errors.summary}</Text>}
                            <TextInput
                                style={styles.input}
                                onChangeText={props.handleChange('summary')}
                                onBlur={props.handleBlur('summary')}
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
                            {(props.touched.healthScore && props.errors.healthScore) && <Text style={styles.errorText}>{props.touched.healthScore && props.errors.healthScore}</Text>}
                            <TextInput
                                style={[styles.input, styles.numeric]}
                                keyboardType='numeric'
                                onChangeText={props.handleChange('healthScore')}
                                onBlur={props.handleBlur('healthScore')}
                                value={props.values.score}
                            />
                            <Text>Ready in (minutes)</Text>
                            {(props.touched.readyInMinutes && props.errors.readyInMinutes) && <Text style={styles.errorText}>{props.touched.readyInMinutes && props.errors.readyInMinutes}</Text>}
                            <TextInput
                                style={[styles.input, styles.numeric]}
                                keyboardType='numeric'
                                onChangeText={props.handleChange('readyInMinutes')}
                                onBlur={props.handleBlur('readyInMinutes')}
                                value={props.values.minutes}
                            />
                            <View style={styles.checkContainer}>
                                <View>
                                    <Text>Diets</Text>
                                    <View style={styles.checkList}>
                                        {diets?.map((diet, index) => {
                                            return (
                                                <View style={styles.item} key={index}>
                                                    <CheckBox
                                                        onClick={() => {
                                                            const oldData = props.values.diets

                                                            if (check[diet.id - 1]?.checked === true) {
                                                                const newData = oldData?.filter(i => i !== diet.name)
                                                                props.setFieldValue('diets', newData)
                                                            }
                                                            else {
                                                                const newData = oldData?.concat(diet.name);
                                                                props.setFieldValue('diets', newData);
                                                            }

                                                            setCheck(
                                                                check?.map((d) => {
                                                                    if (diet.id === d.id) {
                                                                        return { ...d, checked: !d.checked }
                                                                    } else {
                                                                        return d
                                                                    }
                                                                })
                                                            )
                                                        }}
                                                        isChecked={check[diet.id - 1]?.checked}
                                                        checkedCheckBoxColor={"#f4952f"}
                                                    />
                                                    <Text>{diet.name}</Text>
                                                </View>
                                            )
                                        })}
                                    </View>
                                </View>
                                <View>
                                    <Text>Types of dishes</Text>
                                    <View style={styles.checkList}>
                                        {dishes?.map((dish, index) => {
                                            return (
                                                <View style={styles.item} key={index}>
                                                    <CheckBox
                                                        onClick={() => {
                                                            const oldData = props.values.dishTypes

                                                            if (check2[dish.id - 1]?.checked === true) {
                                                                const newData = oldData?.filter(i => i !== dish.name)
                                                                props.setFieldValue('dishTypes', newData)
                                                            } else {
                                                                const newData = oldData?.concat(dish.name);
                                                                props.setFieldValue('dishTypes', newData);
                                                            }

                                                            setCheck2(
                                                                check2?.map((d) => {
                                                                    if (dish.id === d.id) {
                                                                        return { ...d, checked: !d.checked }
                                                                    } else {
                                                                        return d
                                                                    }
                                                                })
                                                            )
                                                        }}
                                                        isChecked={check2[dish.id - 1]?.checked}
                                                        checkedCheckBoxColor={"#f4952f"}
                                                    />
                                                    <Text>{dish.name}</Text>
                                                </View>
                                            )
                                        })}
                                    </View>
                                </View>
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
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#000',
    },
    buttonText: {
        color: '#f4952f',
        textTransform: 'uppercase',
        fontSize: 14,
        textAlign: 'center',
    },
    checkList: {
        marginBottom: 14,
    },
    item: {
        flexDirection: 'row',
        marginRight: 10
    },
    checkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    errorText: {
        color: '#f4952f',
    },
});

export default Form