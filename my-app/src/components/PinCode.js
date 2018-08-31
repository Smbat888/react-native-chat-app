import React from 'react';
import PINCode from '@haskkor/react-native-pincode';
import { LinearGradient } from 'expo';
import SyncStorage from 'sync-storage';

import Constants from '../constants/Constants';
import Colors from '../constants/Colors';
import styles from '../constants/Styles';

const emptyString = " ";

export default class PinCode extends React.Component {

    static navigationOptions = {
        header: null
    };

    handleResultEnterPin(pinCode) {
        let value = SyncStorage.get(Constants.PIN_CODE_STORE_KEY);
        this.setState({storedPin: " "});
        if (value === pinCode) {
            this.props.navigation.navigate(Constants.SUCCESS_DIALOG_SCREEN);
        } else {
            this.props.navigation.navigate(Constants.FAIL_DIALOG_SCREEN);
        }
    }

    render() {
        return (
            <LinearGradient
                colors={[Colors.pinCodeGradient, Colors.pinCodeGradient, Colors.pinCodeGradient]}
                style={{ flex: 1 }}>
                <PINCode
                    handleResultEnterPin={pinCode => this.handleResultEnterPin(pinCode)}
                    stylePinCodeColumnDeleteButton={styles.deleteButton}
                    stylePinCodeButtonCircle={styles.buttonCircle}
                    stylePinCodeButtonNumber={Colors.pinCodeButtonColor}
                    colorPassword={Colors.pinCodeButtonColor}
                    titleChoose={emptyString}
                    subtitleChoose={emptyString}
                    buttonDeleteText={emptyString}
                    status={'enter'}
                    numbersButtonOverlayColor={Colors.pinCodeButtonColor}
                    titleConfirm={emptyString}
                    titleEnter={emptyString}/>
            </LinearGradient>
        );
    }
}

