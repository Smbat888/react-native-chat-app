import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE }  from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GiftedChat, InputToolbar } from "react-native-gifted-chat";

import {
    DID_GET_CHAT,
    DID_REMOVE_MESSAGE,
    DID_ADD_MESSAGE
} from '../action_types';
import Colors from '../constants/Colors';
import styles from '../constants/Styles';

class Chat extends React.Component {

    static navigationOptions = {
        header: null
    };

    state = {
        inputText: ""
    };

    onSend(messageText) {
        let message = [{
            _id: Math.round(Math.random() * 1000000),
            text: messageText,
            createdAt: new Date(),
            user: {
                _id: 1,
                name: "Developer"
            },
        }];
        this.props.addMessage(message);
        this.setState(previousState => ({
            inputText: ""
        }));
    }

    renderSend = (sendProps) => {
        if (sendProps.text.trim().length > 0) {
            return (
                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={() => this.onSend(sendProps.text)}>
                    <Icon name="send" size={18} color={Colors.sendButtonCollor} style={styles.iconStyle}/>
                </TouchableOpacity>
            );
        }
        return (
            <View style={styles.sendButton}>
                <Icon name="send" size={18}  style={[styles.sendButton, styles.iconStyle]} color={Colors.sendIconCollor}/>
            </View>
        );
    };

    render() {
        return (
            <GiftedChat
                text={this.state.inputText}
                messages={this.props.messages.messages}
                renderCustomView={this.renderCustomView}
                renderInputToolbar={this.renderInputToolbar}
                renderSend={this.renderSend}
                onInputTextChanged={text => this.setState({inputText: text})}
                user={{
                    _id: 1,
                }} />
        );
    }

    renderCustomView = (props) => {
        if (props.currentMessage.location) {
            return this.renderMapMessage(props);
        } else if (props.currentMessage.user._id === 1) {
            return (
                <View style={props.containerStyle}>
                    <Icon name="trash" size={18} color={Colors.removeIconCollor}
                          style={styles.iconStyle}
                          onPress={() => this.props.removeMessage(props.currentMessage)}/>
                </View>
            );
        }
        return null;
    };

    renderInputToolbar (props) {
        return <InputToolbar {...props} containerStyle={styles.inputToolbar} />
    }

    renderMapMessage = (props) => {
        return (
            <View style={props.containerStyle}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={[styles.mapView]}
                    region={{
                        latitude: props.currentMessage.location.latitude,
                        longitude: props.currentMessage.location.longitude,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,
                    }}
                    scrollEnabled={false}
                    zoomEnabled={false}>
                    <MapView.Marker
                        coordinate={{
                            latitude: props.currentMessage.location.latitude,
                            longitude: props.currentMessage.location.longitude
                        }}/>
                </MapView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMessages: () => dispatch({type: DID_GET_CHAT}),
        addMessage: (messages) => dispatch({type: DID_ADD_MESSAGE, messages}),
        removeMessage: (messages) => dispatch({type: DID_REMOVE_MESSAGE, messages}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)