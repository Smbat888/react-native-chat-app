import React from 'react';
import { StyleSheet, TextInput, View, Image, Text, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import Icon from "react-native-vector-icons/Entypo";

export default class FailDialog extends React.Component {

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        setTimeout(() => {
          this.props.navigation.navigate('PinCode');
        }, 1000)
    }

    render() {
        return (
            <LinearGradient
                style={styles.gradient}
                colors={['#32ccbc', '#f790e7']}>
                <View style={styles.container}>
                    <Image style={styles.logoImage} source={require('../../assets/cross_black_circular_button.png')}/>
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