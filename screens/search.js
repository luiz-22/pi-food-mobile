import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { search } from "../redux/actions";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default function Search({ navigation }) {
    const [searchRecipe, setSearchRecipe] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        navigation.navigate("Tabs");
        dispatch(search(searchRecipe))
    };

    const handleChange = (value) => setSearchRecipe(value);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Write a Title"
                placeholderTextColor="#576574"
                value={search}
                onChangeText={(searchRecipe) => handleChange(searchRecipe)}
            />
            <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000'
        // alignItems: 'center',
    },
    input: {
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 1,
        borderColor: "#f4952f",
        height: 30,
        color: "#000",
        textAlign: "center",
        padding: 4,
    },
    buttonSave: {
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 3,
        backgroundColor: "#f4952f",
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 14
    },
});