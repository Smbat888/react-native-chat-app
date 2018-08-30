import { createStackNavigator } from 'react-navigation';

import Chat from './src/components/Chat';
import Login from './src/components/Login';
import PinCode from './src/components/PinCode';

export default RootNavigation = createStackNavigator(
  {
    Chat: Chat,
    PinCode: PinCode,
    Login: Login,
  },
  {
    initialRouteName: 'Chat',
  }
);