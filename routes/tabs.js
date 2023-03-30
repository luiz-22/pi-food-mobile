import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { getAllRecipes, modalSort, modalFilter, modalAbout } from "../redux/actions";

import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import Home from '../screens/home'

const Tab = createBottomTabNavigator();

function Empty() {
    return (<View style={{ flex: 1, backgroundColor: "red" }} />)
}

const Tabs = ({ navigation }) => {
    const dispatch = useDispatch();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#000000',
                },
                tabBarInactiveTintColor: '#f4952f',
            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarButton: () => null,
                    tabBarVisible: false,
                    title: "Recipe Inn",
                    headerStyle: {
                        backgroundColor: "#000000",
                    },
                    headerTitleStyle: {
                        color: "#f4952f",
                        fontFamily: "Kalam-Regular",
                    },
                    headerRight: () => (
                        <View style={styles.optionsBar}>
                            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate("Search")}>
                                <EvilIcons name="search" size={32} color="#f4952f" />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Sort" component={Empty}
                listeners={() => ({
                    tabPress: (e) => {
                        e.preventDefault()
                        navigation.navigate('Sort')
                    },
                })}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="unsorted" size={24} color="#f4952f" />
                    )
                }}
            />
            <Tab.Screen name="Diets" component={Empty}
                listeners={() => ({
                    tabPress: (e) => {
                        e.preventDefault()
                        navigation.navigate('Filter')
                    },
                })}
                options={{
                    tabBarIcon: () => (
                        <Feather name="filter" size={24} color="#f4952f" />
                    )
                }}
            />
            <Tab.Screen name="New Recipe" component={Empty}
                listeners={() => ({
                    tabPress: (e) => {
                        e.preventDefault()
                        navigation.navigate('Form')
                    },
                })}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="add-circle-outline" size={28} color="#f4952f" />
                    ),
                }}

            />
            <Tab.Screen name="Show All" component={Empty}
                listeners={() => ({
                    tabPress: (e) => {
                        e.preventDefault()
                        dispatch(getAllRecipes())
                    },
                })}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="bars" size={24} color="#f4952f" />
                    )
                }}
            />
            <Tab.Screen name="About" component={Empty}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="ios-rocket" size={24} color="#f4952f" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    optionsBar: {
        flexDirection: "row",
    }
});

export default Tabs