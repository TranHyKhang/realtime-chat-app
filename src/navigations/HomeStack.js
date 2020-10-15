import React from 'react'
import { View, Text } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import AddHomeScreen from '../screens/AddHomeScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName='Home' headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="AddNewRoom" component={AddHomeScreen}/>
        </Stack.Navigator>
    )
}
