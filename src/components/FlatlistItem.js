import React from 'react'
import { View, Text } from 'react-native'
import {List} from 'react-native-paper'

export default function FlatlistItem({name, desc, navigation}) {
    return (
        <View>
            <List.Item
                title={name}
                description={desc}
                titleNumberOfLines={1}
                titleStyle={{fontWeight: '700', fontSize: 20}}
                descriptionStyle={{fontSize: 16}}
                onPress={() => navigation.navigate("Room", {roomName: name})}
            />
        </View>
    )
}
