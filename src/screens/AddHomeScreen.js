import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';

export default function AddHomeScreen({navigation}) {
    const [roomName, setRoomName] = useState('');
    const [roomDesc, setRoomDesc] = useState('');

    const handleButtonPress = () => {
        if(roomName.length > 0) {
            firestore()
                .collection('THREADS')
                .set({
                    name: roomName,
                    description: roomDesc
                })
                .then(() => {
                    navigation.goBack();
                })
        }   
    }

    function _handleButtonPress() {
        if (roomName.length > 0) {
            firestore()
            .collection('THREADS')
            .doc()
            .set({
                name: roomName,
                description: roomDesc
            })

            .then(() => {
                navigation.goBack();
            })
        }
      }

    return (
        <View style={styles.container}>
            <FormInput
                placeholder="Name"
                label="Name"
                value={roomName}
                onChangeText={(text) => setRoomName(text)}
            />
            <FormInput
                placeholder="Description"
                label="Description"
                value={roomDesc}
                onChangeText={(text) => setRoomDesc(text)}
            />
            <FormButton title="Save" onPress={() => _handleButtonPress()}/>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="keyboard-backspace" size={40} style={{marginTop: 10, color: '#0051ff'}}/>
            </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
