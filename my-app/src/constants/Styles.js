import { StyleSheet } from "react-native";
import Colors from "./Colors";
import Layout from "./Layout";

export default styles = StyleSheet.create({
    mapView: {
        width: 150,
        height: 100,
        borderRadius: 13,
        margin: 3,
    },
    iconStyle: {
        alignSelf: 'flex-end',
        marginRight: 10,
    },
    sendButton: {
        marginBottom: 10,
        marginRight: 10,
    },
    inputToolbar: {
        borderRadius: 25,
        borderTopColor: Colors.chatInputToolbarColor,
        marginBottom: 5,
    },
    dialogContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gradient: {
        flex: 1
    },
    logoImage: {
        width: 200,
        height: 200
    },
    loginContainer: {
        flex: 1,
    },
    inputTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        top: Layout.window.height * 55 / 100,
    },
    loginLogoImage: {
        position: 'absolute',
        height: Layout.window.height * 20 / 100,
        width: Layout.window.width,
        right: Layout.window.width * 15 / 100,
        top: Layout.window.height * 25 / 100,
    },
    icon: {
        backgroundColor: 'transparent',
        color: Colors.loginIconColor,
        position: 'absolute',
        right:30
    },
    inputText: {
        flex: 1,
        position: 'absolute',
        textAlign: 'center',
        right: 20,
        left: 20,
        height: 40,
        borderRadius: 25,
        backgroundColor: Colors.loginInputBackground,
    },
    horizontalText: {
        fontSize: 30,
        position: 'absolute',
        fontWeight: '100',
        right:55
    },
    buttonCircle: {
        backgroundColor: Colors.pinCodeCirculeButtonBackgroundColor,
        borderWidth: 2,
        borderColor: Colors.pinCodeCirculeButtonColor,
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});