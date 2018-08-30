import {
  DID_GET_CHAT,
  DID_REMOVE_MESSAGE,
  DID_ADD_MESSAGE
} from '../action_types';

const mockMessages = {
   messages: [
    {
      _id: Math.round(Math.random() * 1000000),
      text: '#awesome',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'Developer',
      },
    },
    // {
    //   _id: Math.round(Math.random() * 1000000),
    //   text: '',
    //   createdAt: new Date(),
    //   user: {
    //     _id: 2,
    //     name: 'React Native',
    //   },
    //   image: 'http://www.pokerpost.fr/wp-content/uploads/2017/12/iStock-604371970-1.jpg',
    //   sent: true,
    //   received: true,
    // },
    // {
    //   _id: Math.round(Math.random() * 1000000),
    //   text: 'Send me a picture!',
    //   createdAt: new Date(),
    //   user: {
    //     _id: 1,
    //     name: 'Developer',
    //   },
    // },
    // {
    //   _id: Math.round(Math.random() * 1000000),
    //   text: '',
    //   createdAt: new Date(),
    //   user: {
    //     _id: 2,
    //     name: 'React Native',
    //   },
    //   sent: true,
    //   received: true,
    //   location: {
    //     latitude: 48.864601,
    //     longitude: 2.398704
    //   },
    // },
    // {
    //   _id: Math.round(Math.random() * 1000000),
    //   text: 'Where are you?',
    //   createdAt: new Date(),
    //   user: {
    //     _id: 1,
    //     name: 'Developer',
    //   },
    // },
    // {
    //   _id: Math.round(Math.random() * 1000000),
    //   text: 'Yes, and I use Gifted Chat!',
    //   createdAt: new Date(),
    //   user: {
    //     _id: 2,
    //     name: 'React Native',
    //   },
    //   sent: true,
    //   received: true
    // },
    // {
    //   _id: Math.round(Math.random() * 1000000),
    //   text: 'Are you building a chat app?',
    //   createdAt: new Date(),
    //   user: {
    //     _id: 1,
    //     name: 'Developer',
    //   },
    // },
    // {
    //   _id: Math.round(Math.random() * 1000000),
    //   text: "You are officially rocking GiftedChat.",
    //   createdAt: new Date(),
    //   system: true,
    // },
  ]
};

export const getChat = () => ({
  type: DID_GET_CHAT,
  payload: Promise.resolve(
    Object.keys(mockMessages.messages).map(id => mockMessages.messages[id])
  )
});

export const addMessage = fields => {
  const id = Math.random().toString(36).substr(2, 8);

  mockMessages.messages[id] = {
    ...fields,
    id
  };

  return {
    type: DID_ADD_MESSAGE,
    payload: Promise.resolve(mockMessages.messages[id])
  };
}

export const deletePost = id => {
  delete mockMessages.messages[id];

  return {
    type: DID_REMOVE_MESSAGE,
    payload: id
  };
}