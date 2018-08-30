import SyncStorage from 'sync-storage';
import Constants from '../constants/Constants';

export function getInitialRoute() {
    let value = SyncStorage.get(Constants.PIN_CODE_STORE_KEY);
    if (value) {
        return Constants.PIN_CODE_SCREEN;
    }
    return Constants.LOGIN_SCREEN;
}