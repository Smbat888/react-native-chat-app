import React from 'react';
import { TextInput, View, Image, Text } from 'react-native';
import SyncStorage from 'sync-storage';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/Entypo';

import Constants from '../constants/Constants';
import Colors from '../constants/Colors';
import styles from '../constants/Styles';

export default class Login extends React.Component {

    static navigationOptions = {
        header: null
    };

    onChangeText(text) {
        if (text.length === 4) {
            SyncStorage.set(Constants.PIN_CODE_STORE_KEY, text);
            this.props.navigation.navigate(Constants.PIN_CODE_SCREEN);
        }
    };

    render() {
        return (
            <LinearGradient
                style={styles.loginContainer}
                colors={[Colors.loginFirsGradient, Colors.loginSecondGradient]}>
                <Image
                    style={styles.loginLogoImage}
                    resizeMode='stretch'
                    source={require('../../assets/creative.png')}/>
                <View style={styles.inputTextView}>
                    <TextInput
                        onChangeText={(text) => this.onChangeText(text)}
                        underlineColorAndroid='transparent'
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
        );
    }
}