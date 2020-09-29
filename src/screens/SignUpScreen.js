import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function LoginScreen({navigation}) {
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: 'white',
                marginTop: 80
                }}
            >
                <Icon name="react" size={200} style={{marginBottom: 40, color: '#0051ff' }}/>
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>Register to Chat</Text>
                <FormInput placeholder="Email" label="Email"/>
                <FormInput secureTextEntry={true} placeholder="Password" label="Password" />
                <FormButton title="Sign Up" />
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Icon name="keyboard-backspace" size={40} style={{marginTop: 10, color: '#0051ff'}}/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

