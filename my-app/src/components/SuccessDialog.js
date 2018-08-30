import React from 'react';
import { StyleSheet, TextInput, View, Image, Text, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import Icon from "react-native-vector-icons/Entypo";

export default class SuccessDialog extends React.Component {

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        setTimeout(() => {
          this.props.navigation.navigate('Chat');
        }, 1000)
    }

    render() {
        return (
            <LinearGradient
                style={styles.gradient}
                colors={[ '#32ccbc', '#90f7ec']}>
                <View style={styles.container}>
                    <Image style={styles.logoImage} source={require('../../assets/success.png')}/>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gradient: {
        flex: 1
    },
    logoImage: {
        width: 200,
        height: 200
    },
});