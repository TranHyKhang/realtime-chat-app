import React, { useContext, useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import auth from '@react-native-firebase/auth';

import {AuthContext} from '../contexts/AuthProvider'


const Routes = () => {
    const {user, setUser} = useContext(AuthContext);
    const [initial, setInitial] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if(initial) {
            setInitial(false);
        }
    }

    useEffect(() => {
        const a = auth().onAuthStateChanged(onAuthStateChanged);
        return a;
    },[])

    return (
        <NavigationContainer>
            {
                user ? <HomeStack/> : <AuthStack/>
            }
        </NavigationContainer>  
    )
}

export default Routes