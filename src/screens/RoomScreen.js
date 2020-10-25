import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {useTheme, IconButton} from 'react-native-paper'
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat'

import HeaderRoom from '../components/HeaderRoom';


export default function RoomScreen({navigation, route}) {
    const {roomName} = route.params;
    const {colors} = useTheme();
    const [messages, setMessages] = useState([
        {
            _id: 0,
            text: "New room created",
            createAt: new Date().getTime(),
            system: true
        },
        {
            _id: 1,
            text: 'Hello!',
            createAt: new Date().getTime(),
            user: {
                _id: 2,
                name: 'Hy Khang'
            }
        }
    ]);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white'
        },
        sendingContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 7
        }
    })

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View style={styles.sendingContainer}>
                    <IconButton icon='send-circle' size={40} color={colors.primary}/>
                </View>
            </Send>
        )
    }

    function renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: colors.primary
                    }
                }}
            />
        )
    }

    function _handlSend(newMessage = []) {
        setMessages(GiftedChat.append(messages, newMessage));
    }
    return (
        <View style={styles.container}>
            <HeaderRoom roomName={roomName} navigaiton={navigation}/>
            <GiftedChat
                messages={messages}
                onSend={newMessage => _handlSend(newMessage)}
                user={{_id: 1, name:'ha ha'}}
                showUserAvatar
                alwaysShowSend
                renderBubble={renderBubble}
                renderSend={renderSend}
            />
        </View>
    )
}


