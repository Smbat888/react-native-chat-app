import React from 'react';
import { LinearGradient } from 'expo';

export default class SuccessDialog extends React.Component {

   static navigationOptions = {
      header: null
   };
  
  render() {
    return (
        <LinearGradient
          colors={['#32ccbc', '#32ccbc', '#32ccbc']}
          style={{ flex: 1 }}>
        </LinearGradient>
    );
  }
}