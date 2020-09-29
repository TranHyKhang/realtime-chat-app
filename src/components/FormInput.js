import React from 'react'
import { View, Dimensions } from 'react-native'
import {TextInput} from 'react-native-paper'

export default function FormInput({...res}) {
    const {width, height} = Dimensions.get('screen')
    return (
        <View>
            <TextInput  
                mode='outlined'
                style={{width: width/1.5, marginTop: 20}}
                {...res}
            />
        </View>
    )
}
