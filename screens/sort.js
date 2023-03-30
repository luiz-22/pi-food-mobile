import React from 'react'
import { useDispatch } from "react-redux";
import { sortAtoZ, sortZtoA, sortHealtScoreAsc, sortHealtScoreDes, } from "../redux/actions";
import { View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'


const Sort = ({ navigation }) => {
    const dispatch = useDispatch();

    return (

        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Sort by</Text>
            <View style={globalStyles.menu}>
                <TouchableOpacity style={globalStyles.touch}
                    onPress={() => {
                        dispatch(sortAtoZ())
                        navigation.navigate('Tabs')
                    }}>
                    <Text style={globalStyles.text}>Title: A - Z</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.touch}
                    onPress={() => {
                        dispatch(sortZtoA())
                        navigation.navigate('Tabs')
                    }}>
                    <Text style={globalStyles.text}>Title: Z - A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.touch}
                    onPress={() => {
                        dispatch(sortHealtScoreAsc())
                        navigation.navigate('Tabs')
                    }}>
                    <Text style={globalStyles.text}>Health Score: 1 - 100</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.touch}
                    onPress={() => {
                        dispatch(sortHealtScoreDes())
                        navigation.navigate('Tabs')
                    }}>
                    <Text style={globalStyles.text}>Health Score: 100 - 1</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Sort