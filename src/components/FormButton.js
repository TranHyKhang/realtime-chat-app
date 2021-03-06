import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import {Button} from 'react-native-paper'


export default function FormButton({title, ...res}) {
    const {width, height} = Dimensions.get('screen');

    return (
        <View>
            <Button 
                mode="contained"
                style={{
                    width: width/2, 
                    height: height/16,
                    marginTop: 25,
                    borderRadius: 20
                }}
                contentStyle={{height: height/16}}
                labelStyle={{fontSize: 20, fontWeight:'bold'}}
                {...res}
            >   
                {title}
            </Button>
        </View>
    )
}
