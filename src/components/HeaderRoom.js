import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {useTheme} from 'react-native-paper'

export default function HeaderRoom({roomName, navigaiton}) {
    const {colors} = useTheme();
    
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.primary,
            padding:20
        },
        roomName: {
            color: 'white',
            fontSize: 26,
            fontWeight:'bold',
            marginRight: 20
        }
    })
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigaiton.goBack()}
            >
                <View style={styles.iconHome}>
                    <Icon name='home' size={35} style={{color: "white"}}/>
                </View>
            </TouchableOpacity>
            <Text style={styles.roomName}>{roomName}</Text>
            <View></View>
        </View>
    )
}



