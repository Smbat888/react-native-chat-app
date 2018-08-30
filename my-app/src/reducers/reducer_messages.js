import {
  DID_GET_CHAT,
  DID_REMOVE_MESSAGE,
  DID_ADD_MESSAGE
} from '../action_types';

import { GiftedChat } from "react-native-gifted-chat";

import chatDummyData from '../data/chatDummyData';

const initialState = {
  messages: chatDummyData
}

export default function(state = initialState, action) {
  if (action.error) {
    return state;
  }
  switch(action.type) {
    case DID_ADD_MESSAGE:
      state.messages = GiftedChat.append(state.messages, action.messages);
      return {
        messages: state.messages
      };
    case DID_GET_CHAT:
        return state;
    case DID_REMOVE_MESSAGE:
        newState = { ...state };
        newState.messages = newState.messages.filter(e =>  e._id !== action.messages._id);
        return newState;
  }
  return state;
}