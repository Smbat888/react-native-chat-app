import React from 'react';
import PINCode from '@haskkor/react-native-pincode';
import { LinearGradient } from 'expo';

export default class PinCode extends React.Component {
  
  render() {
    return (
        <LinearGradient
          colors={['#32ccbc', '#32ccbc', '#32ccbc']}
          style={{ flex: 1 }}>
          <PINCode 
            status={'choose'}
            titleComponent={null}
            subtitleComponent={null}
            titleAttemptFailed={null}
            titleChoose={null}
            titleConfirm={null}/>
        </LinearGradient>
    );
  }
}

