import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { modalFilter, filterByDiet } from "../redux/actions";
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'


const Filter = () => {
    const diets = useSelector((state) => state.diets);
    const dispatch = useDispatch();

    return (
        <Modal >
            <View style={globalStyles.container}>
                <Text style={globalStyles.title}>Filter by diets</Text>
                <View style={globalStyles.menu}>
                    {diets?.map((diet) => {
                        return (
                            <TouchableOpacity style={globalStyles.touch}
                                key={diet.id}
                                onPress={() => {
                                    dispatch(filterByDiet(diet.name));
                                    dispatch(modalFilter(false))
                                }}>
                                <Text style={globalStyles.text}>{diet.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <TouchableOpacity style={globalStyles.button}
                    onPress={() => {
                        dispatch(modalFilter(false))
                    }}>
                    <Text style={globalStyles.text}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}


export default Filter