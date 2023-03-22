import React from 'react'
import { useDispatch } from "react-redux";
import { sortAtoZ, sortZtoA, sortHealtScoreAsc, sortHealtScoreDes, modalSort } from "../redux/actions";
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'


const Sort = () => {
    const dispatch = useDispatch();

    return (
        <View>
            <Modal style={globalStyles.container} >
                <TouchableOpacity onPress={() => {
                    dispatch(sortAtoZ())
                    dispatch(modalSort(false))
                }}>
                    <Text>A - Z</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    dispatch(sortZtoA())
                    dispatch(modalSort(false))
                }}>
                    <Text>Z - A</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    dispatch(sortHealtScoreAsc())
                    dispatch(modalSort(false))
                }}>
                    <Text>Health Score: 1 - 100</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    dispatch(sortHealtScoreDes())
                    dispatch(modalSort(false))
                }}>
                    <Text>Health Score: 100 - 1</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default Sort