import { createStackNavigator } from 'react-navigation';

import Chat from '../components/Chat';
import Login from '../components/Login';
import PinCode from '../components/PinCode';
import FailDialog from '../components/FailDialog';
import SuccessDialog from '../components/SuccessDialog';

import { getInitialRoute } from '../utils/Helpers';

export default RootNavigation = createStackNavigator(
  {
    PinCode: PinCode,
    Chat: Chat,
    Login: Login,
    FailDialog: FailDialog,
    SuccessDialog: SuccessDialog
  },
  {
    initialRouteName: getInitialRoute(),
  }
);