import React from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo';

import Constants from '../constants/Constants';
import Colors from '../constants/Colors';
import styles from '../constants/Styles';

export default class SuccessDialog extends React.Component {

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        setTimeout(() => {
          this.props.navigation.navigate(Constants.CHAT_SCREEN);
        }, 1000)
    }

    render() {
        return (
            <LinearGradient
                style={styles.gradient}
                colors={[ Colors.successFirstGradient, Colors.succesSecondGradient]}>
                <View style={styles.dialogContainer}>
                    <Image style={styles.logoImage} source={require('../../assets/success.png')}/>
                </View>
            </LinearGradient>
        );
    }
}