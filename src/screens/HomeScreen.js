import React, {useContext, useState, useEffect} from 'react'
import { 
    View,
    Text, 
    StyleSheet,
    TouchableOpacity, 
    Dimensions, 
    FlatList
} from 'react-native'
import { AuthContext } from '../contexts/AuthProvider'
import {useTheme, Button} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import firestore from '@react-native-firebase/firestore' 

import FlatlistItem from '../components/FlatlistItem';
import FormButton from '../components/FormButton';
import Loading from '../components/Loading'



export default function HomeScreen({navigation}) {
    const [threads, setThreads] = useState([]);
    const {logout} = useContext(AuthContext);
    const {colors} = useTheme()
    const {width} = Dimensions.get('screen')
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            flex: 1,
            backgroundColor: 'white'
        },
        header: {
            flex: 1,
            backgroundColor: colors.primary,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
        },
        headerTitle: {
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',
            left: width/2.5
        },
        icon: {
            color: "white",
            top: 2,
            right: 10
        },  
        body: {
            flex: 7.5,
        },
        footer: {
            flex: 1.5,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })


    useEffect(() => {
        const data = firestore().collection('THREADS').onSnapshot((querySnapshot) => {
            const threads = querySnapshot.docs.map((documentSnapshot) => {
                return {
                    _id: documentSnapshot.id,
                    ...documentSnapshot.data()
                }
            })
            setThreads(threads)
        })
        return () => data()
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Home</Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('AddNewRoom')}
                >
                    <Icon name="add-comment" size={35} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={threads}
                    keyExtractor={(item) => item._id}
                    renderItem={({item}) => <FlatlistItem name={item.name} desc={item.description}/>}
                />
            </View>
            <View style={styles.footer}>
                <FormButton
                    title="Log out"
                    onPress={() => logout()}
                />
            </View>
        </View>
    )

    
}



