import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {AuthContext} from '../contexts/AuthProvider';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function LoginScreen({navigation}) {
    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: 'white',
                marginTop: 80
                }}
            >
                <Icon 
                    name="react" 
                    size={200} 
                    style={{marginBottom: 40, color: '#0051ff' }}
                />
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>Welcome to Chat app</Text>
                <FormInput 
                    placeholder="Email" 
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <FormInput 
                    secureTextEntry={true} 
                    placeholder="Password" 
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <FormButton title="Login" onPress={() => login(email, password)} />
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{marginTop: 10, fontSize: 15}}>New user? Join here</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

