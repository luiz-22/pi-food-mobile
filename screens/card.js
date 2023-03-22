import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Card = ({ recipe }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { recipe })}
        >
            <View style={styles.container}>
                <Image
                    source={{ uri: `${recipe.image}` }}
                    style={styles.image}
                />
                <View style={styles.description}>
                    <Text style={styles.title}>{recipe.title}</Text>
                    <Text>{recipe.readyInMinutes} Minutes &nbsp; &nbsp; {recipe.healthScore} Healt Score</Text>
                    <Text>
                        {recipe.diets.map((el, index) => <Text key={index} style={styles.tag}>{el} {(index !== recipe.diets.length - 1) ? '-' : ''} </Text>)}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        margin: 20,
        backgroundColor: '#FAFAFA'
    },
    image: {
        width: 110,
        height: 110,
        marginRight: 10
    },
    description: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        flexShrink: 1
    },
    tag: {
        color: "#f4952f",
    }
});

export default Card