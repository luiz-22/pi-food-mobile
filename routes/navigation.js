import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getRecipes, getDiets, getDishes } from "../redux/actions";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Tabs from './tabs';
import Detail from '../screens/detail'
import Form from '../screens/form';
import Search from '../screens/search';
import Sort from '../screens/sort';
import Filter from '../screens/filter';

const Stack = createStackNavigator();

const Navigation = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes());
        dispatch(getDiets())
        dispatch(getDishes())
    }, [dispatch]);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={Tabs}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Detail" component={Detail}
                    options={{
                        title: "Recipe Inn",
                        headerStyle: {
                            backgroundColor: "#000000",
                        },
                        headerTitleStyle: {
                            color: "#f4952f",
                            fontFamily: "Kalam-Regular",
                        },
                        headerTintColor: "#f4952f",
                    }}
                />
                <Stack.Screen name="Form" component={Form}
                    options={{
                        title: "Recipe Inn",
                        headerStyle: {
                            backgroundColor: "#000000",
                        },
                        headerTitleStyle: {
                            color: "#f4952f",
                            fontFamily: "Kalam-Regular",
                        },
                        headerTintColor: "#f4952f",
                    }}
                />
                <Stack.Screen name="Search" component={Search}
                    options={{
                        title: "Recipe Inn",
                        headerStyle: {
                            backgroundColor: "#000000",
                        },
                        headerTitleStyle: {
                            color: "#f4952f",
                            fontFamily: "Kalam-Regular",
                        },
                        headerTintColor: "#f4952f",
                    }}
                />
                <Stack.Screen name="Sort" component={Sort}
                    options={{
                        title: "Recipe Inn",
                        headerStyle: {
                            backgroundColor: "#000000",
                        },
                        headerTitleStyle: {
                            color: "#f4952f",
                            fontFamily: "Kalam-Regular",
                        },
                        headerTintColor: "#f4952f",
                    }}
                />
                <Stack.Screen name="Filter" component={Filter}
                    options={{
                        title: "Recipe Inn",
                        headerStyle: {
                            backgroundColor: "#000000",
                        },
                        headerTitleStyle: {
                            color: "#f4952f",
                            fontFamily: "Kalam-Regular",
                        },
                        headerTintColor: "#f4952f",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation