import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo';

export default class Login extends React.Component {

   static navigationOptions = {
      header: null
   };
  
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.incressBtn} onPress={() => this.props.navigation.navigate('Chat')}>
                <Text style={styles.btnText}>navigate</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  btnText: {
    color: 'white',
    fontSize: 24,
  }
});