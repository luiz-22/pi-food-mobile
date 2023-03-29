import React, { useEffect, useState } from 'react'
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
        <View>
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
    input: {
        width: "90%",
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 1,
        borderColor: "#10ac84",
        height: 30,
        color: "#000",
        textAlign: "center",
        padding: 4,
        borderRadius: 5,
    },
    buttonSave: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: "#10ac84",
        width: "90%",
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
});