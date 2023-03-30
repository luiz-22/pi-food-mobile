import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { filterByDiet } from "../redux/actions";
import { View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'


const Filter = ({ navigation }) => {
    const diets = useSelector((state) => state.diets);
    const dispatch = useDispatch();

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Filter by diets</Text>
            <View style={globalStyles.menu}>
                {diets?.map((diet) => {
                    return (
                        <TouchableOpacity style={globalStyles.touch}
                            key={diet.id}
                            onPress={() => {
                                dispatch(filterByDiet(diet.name));
                                navigation.navigate('Tabs')
                            }}>
                            <Text style={globalStyles.text}>{diet.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}


export default Filter