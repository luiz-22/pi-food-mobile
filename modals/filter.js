import React from 'react'
import { useDispatch } from "react-redux";
import { sortAtoZ, sortZtoA, sortHealtScoreAsc, sortHealtScoreDes, modalSort, modalFilter } from "../redux/actions";
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'


const Filter = () => {
    const dispatch = useDispatch();

    return (
        <Modal >
            <View style={globalStyles.container}>
                <Text style={globalStyles.title}>Filter by diets</Text>
                <View style={globalStyles.menu}>
                    <TouchableOpacity style={globalStyles.touch}
                        onPress={() => {
                            dispatch(sortAtoZ())
                            dispatch(modalSort(false))
                        }}>
                        <Text style={globalStyles.text}>Title: A - Z</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.touch}
                        onPress={() => {
                            dispatch(sortZtoA())
                            dispatch(modalSort(false))
                        }}>
                        <Text style={globalStyles.text}>Title: Z - A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.touch}
                        onPress={() => {
                            dispatch(sortHealtScoreAsc())
                            dispatch(modalSort(false))
                        }}>
                        <Text style={globalStyles.text}>Health Score: 1 - 100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.touch}
                        onPress={() => {
                            dispatch(sortHealtScoreDes())
                            dispatch(modalSort(false))
                        }}>
                        <Text style={globalStyles.text}>Health Score: 100 - 1</Text>
                    </TouchableOpacity>
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