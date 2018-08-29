import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

class Counter extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.incressBtn} onPress={() => this.props.increaseCounter()}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
        <Text>{this.props.counter}</Text>
        <TouchableOpacity style={styles.decressBtn} onPress={() => this.props.decreaseCounter()}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
        decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  incressBtn: {
    backgroundColor: '#ffaa22',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
  },
  decressBtn: {
    backgroundColor: '#aa2dff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
  },
  btnText: {
    color: 'white',
    fontSize: 24,
  }
});
