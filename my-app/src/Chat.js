import React from 'react';
import { GiftedChat } from "react-native-gifted-chat";
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE }  from 'react-native-maps'; // 0.19.0
import Icon from 'react-native-vector-icons/FontAwesome';

import "prop-types"; // 15.6.2

const styles = StyleSheet.create({
  mapView: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
  },
  iconStyle: {
    alignSelf: 'flex-end',
    marginRight: 10,
  }
});

export default class Chat extends React.Component {

    state = {
        messages: []
    };

    componentDidMount() {
        this.setState({ messages:  [
            {
              _id: Math.round(Math.random() * 1000000),
              text: '#awesome',
              createdAt: new Date(),
              user: {
                _id: 1,
                name: 'Developer',
              },
            },
            {
              _id: Math.round(Math.random() * 1000000),
              text: '',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
              },
              image: 'http://www.pokerpost.fr/wp-content/uploads/2017/12/iStock-604371970-1.jpg',
              sent: true,
              received: true,
            },
            {
              _id: Math.round(Math.random() * 1000000),
              text: 'Send me a picture!',
              createdAt: new Date(),
              user: {
                _id: 1,
                name: 'Developer',
              },
            },
            {
              _id: Math.round(Math.random() * 1000000),
              text: '',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
              },
              sent: true,
              received: true,
              location: {
                latitude: 48.864601,
                longitude: 2.398704
              },
            },
            {
              _id: Math.round(Math.random() * 1000000),
              text: 'Where are you?',
              createdAt: new Date(),
              user: {
                _id: 1,
                name: 'Developer',
              },
            },
            {
              _id: Math.round(Math.random() * 1000000),
              text: 'Yes, and I use Gifted Chat!',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
              },
              sent: true,
              received: true
            },
            {
              _id: Math.round(Math.random() * 1000000),
              text: 'Are you building a chat app?',
              createdAt: new Date(),
              user: {
                _id: 1,
                name: 'Developer',
              },
            },
            {
              _id: Math.round(Math.random() * 1000000),
              text: "You are officially rocking GiftedChat.",
              createdAt: new Date(),
              system: true,
            },
          ]});
      }

    onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
    }
  
  render() {
    return (
        <GiftedChat 
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        renderCustomView={this.renderCustomView}
        user={{
          _id: 1,
        }} />
    );
  }

  renderCustomView = (props) => {
    if (props.currentMessage.location) {
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
              zoomEnabled={false}
            >
              <MapView.Marker
                coordinate={{
                latitude: props.currentMessage.location.latitude,
                longitude: props.currentMessage.location.longitude
                }}
              />
            </MapView>
        </View>
      );
    } else if (props.currentMessage.user._id == 1) {
        return (
        <View style={props.containerStyle}>
          <Icon name="trash" size={18} color="green" style={styles.iconStyle} onPress={() => this.onRemove()}/>
        </View>
        );
    }
    return null
  }

  onRemove() {
      //TODO
  }

}