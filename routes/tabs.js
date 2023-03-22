import React from 'react'
import { useDispatch } from "react-redux";
import { getAllRecipes, modalSort } from "../redux/actions";

import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home'


const Tab = createBottomTabNavigator();

function Empty() {
    return (<View style={{ flex: 1, backgroundColor: "red" }} />)
}

const Tabs = () => {

    const dispatch = useDispatch();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#000000',
                },
                tabBarInactiveTintColor: '#f4952f',
            }}>
            <Tab.Screen name="Home" component={Home} options={{
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
            }} />
            <Tab.Screen name="Sort" component={Empty}
                listeners={() => ({
                    tabPress: (e) => {
                        e.preventDefault()
                        dispatch(modalSort(true))
                    },
                })} />
            <Tab.Screen name="By Diets" component={Empty} />
            <Tab.Screen name="Show All" component={Empty}
                listeners={() => ({
                    tabPress: (e) => {
                        e.preventDefault()
                        dispatch(getAllRecipes())
                    },
                })} />
            <Tab.Screen name="About" component={Empty} />
        </Tab.Navigator>
    )
}

export default Tabs