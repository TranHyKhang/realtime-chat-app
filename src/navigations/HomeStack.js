import React from 'react'
import { View, Text } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'
import RoomScreen from '../screens/RoomScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName='Room'>
            <Stack.Screen name="Room" component={RoomScreen}/>
        </Stack.Navigator>
    )
}
