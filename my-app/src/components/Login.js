import React from 'react';
import { StyleSheet, TextInput, View, Image, Text } from 'react-native';
import SyncStorage from 'sync-storage';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/Entypo';

import Constants from '../constants/Constants';

export default class Login extends React.Component {

   static navigationOptions = {
      header: null
   };

    onChangeText(text) {
        if (text.length === 4) {
            SyncStorage.set(Constants.PIN_CODE_STORE_KEY, text);
            this.props.navigation.navigate(Constants.CHAT_SCREEN);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    style={{flex: 1}}
                    colors={['#90f7ec', '#32ccbc']}>
                    <Image 
                        style={styles.logoImage} 
                        source={require('../../assets/creative.png')}/>
                    <View style={styles.inputTextView}>
                        <TextInput
                            onChangeText={(text) => this.onChangeText(text)}
                            maxLength={4}
                            fontSize={25}
                            secureTextEntry={true}
                            keyboardType='numeric'
                            style={styles.inputText}/>
                        <Text numberOfLines={1} style={styles.horizontalText} >|</Text>
                        <Icon name="eye"
                              size={20}
                              style={styles.icon}/>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 150
    },
    logoImage: {
        marginTop: 150

    },
    icon: {
        padding: 10,
        backgroundColor: 'transparent',
        position: 'absolute',
        right:20
    },
    inputText: {
        position: 'absolute',
        textAlign: 'center',
        right:20,
        left:20,
        flex: 1,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#fff',
        color: '#424242',
    },
    horizontalText: {
        fontSize: 30,
        position: 'absolute',
        fontWeight: '100',
        right:55
    }
});