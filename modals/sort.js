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
                <Text>Sort Modal</Text>
                <TouchableOpacity onPress={() => {
                    dispatch(sortAtoZ())
                    dispatch(modalSort(false))
                }}>
                    <Text>Cerrar</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default Sort