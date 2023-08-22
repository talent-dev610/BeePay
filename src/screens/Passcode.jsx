
import * as React from 'react';
import { View, Text, StatusBar, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input'


export default function Passcode({ navigation, route }) {
    const ownWallet = route.params.ownWallet;
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />

            <Text style={{ color: 'white', fontWeight: '500', fontSize: hp('2.4%'), marginTop: hp('20%') }}>Create Passcode</Text>
            {/* <TextInput style={styles.passwordBox} secureTextEntry={true} /> */}
            <OTPInputView
                pinCount={6}
                autofillFromClipboard={false}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                onCodeFilled={(code) => {
                    console.log(`Code is ${code}`)
                    if (!ownWallet) navigation.navigate("Backup")
                    else navigation.navigate("ImportPhase")
                }}
                style={{ width: wp('80%'), color: 'white', alignSelf: 'center', marginTop: hp('24%'), position: 'absolute' }}
            />
            <Text style={{ color: 'gray', textAlign: 'center', width: wp('80%'), marginTop: hp('10%'), fontSize: hp('1.8%') }}>Add an extra layer of security when using the app</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    alertMessage: {
        flexDirection: 'row',
        borderRadius: 8,
        width: wp('90%'),
        alignItems: 'center',
        backgroundColor: 'brown',
        paddingVertical: 8,
        justifyContent: 'center',
        marginTop: hp('3%'),
    },
    passwordBox: {
        color: 'gray',
        alignSelf: 'center',
        width: wp('60%'),
        marginVertical: hp('3%'),
        textAlign: 'center',
        borderRadius: 6,
        backgroundColor: '#222',
        paddingVertical: hp('0.5%')
    },
    buttonStyle: {
        color: 'gray',
        alignSelf: 'center',
        width: wp('30%'),
        marginVertical: hp('13%'),
        textAlign: 'center',
        borderRadius: 6,
        backgroundColor: '#222',
        paddingVertical: 8
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
});
