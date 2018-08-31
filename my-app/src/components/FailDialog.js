import React from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo';

import Constants from '../constants/Constants';
import Colors from '../constants/Colors';
import styles from '../constants/Styles';


export default class FailDialog extends React.Component {

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        setTimeout(() => {
          this.props.navigation.navigate(Constants.PIN_CODE_SCREEN);
        }, 1000)
    }

    render() {
        return (
            <LinearGradient
                style={styles.gradient}
                colors={[Colors.failFirstGradient, Colors.failSecondGradient]}>
                <View style={styles.dialogContainer}>
                    <Image style={styles.logoImage} source={require('../../assets/cross_black_circular_button.png')}/>
                </View>
            </LinearGradient>
        );
    }
}