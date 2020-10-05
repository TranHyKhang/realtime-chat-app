import React, {useContext} from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import { AuthContext } from '../contexts/AuthProvider'
import {useTheme} from 'react-native-paper'



export default function HomeScreen() {
    const {logout} = useContext(AuthContext);
    const {colors} = useTheme()
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            flex: 1
        },
        header: {
            flex: 1,
            backgroundColor: colors.primary,
            alignItems: 'center',
            justifyContent: 'center'
        },
        headerTitle: {
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold'
        },
        body: {
            flex: 8,
        },
        footer: {
            flex: 1,
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Home</Text>
            </View>
            <View style={styles.body}>
                <Text>Body</Text>
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
                <Button title="title" onPress={() => logout()}/>
            </View>
        </View>
    )

    
}



