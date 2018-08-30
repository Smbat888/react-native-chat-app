import React from 'react';
import { StyleSheet } from 'react-native';
import PINCode from '@haskkor/react-native-pincode';
import { LinearGradient } from 'expo';
import SyncStorage from 'sync-storage';

import Constants from '../constants/Constants';

export default class PinCode extends React.Component {

  static navigationOptions = {
      header: null
  };

 handleResultEnterPin(pinCode) {
    let value = SyncStorage.get(Constants.PIN_CODE_STORE_KEY);
    if (value == pinCode) {
        this.props.navigation.navigate(Constants.SUCCESS_DIALOG_SCREEN);
    } else {
        this.props.navigation.navigate(Constants.FAIL_DIALOG_SCREEN);
    }
 }

 render() {
   return (
       <LinearGradient
         colors={['#32ccbc', '#32ccbc', '#32ccbc']}
         style={{ flex: 1 }}>
         <PINCode
           handleResultEnterPin={pinStatus => this.handleResultEnterPin(pinStatus)}
           stylePinCodeColumnDeleteButton={styles.deleteButton}
           stylePinCodeButtonCircle={styles.buttonCircle}
           stylePinCodeButtonNumber="#FFFFFF"
           colorPassword="#FFFFFF"
           titleChoose=" "
           subtitleChoose=" "
           buttonDeleteText=" "
           status={'enter'}
           numbersButtonOverlayColor="#FFFFFF"
           titleConfirm=" "
           titleEnter= " "/>
       </LinearGradient>
   );
 }
}

 styles = StyleSheet.create({
   buttonCircle: {
     backgroundColor: 'rgba(52, 52, 52, 0.0)',
     borderWidth: 2,
     borderColor: "#ffffff",
     borderRadius: 100,
     width: 60,
     height: 60,
     justifyContent: 'center',
     alignItems: 'center'
   },
   deleteButton: {
     justifyContent: 'center',
     alignItems: 'center',
   },
 });

