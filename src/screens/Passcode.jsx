
import * as React from 'react';
import { View, Text, StatusBar, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Passcode({ navigation, route }) {
    const ownWallet = route.params.ownWallet;
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />

            <Text style={{ color: 'white', fontWeight: '500', fontSize: hp('2.4%'), marginTop: hp('20%') }}>Create Passcode</Text>
            <TextInput style={styles.passwordBox} secureTextEntry={true} />
            <Text style={{ color: 'gray', textAlign: 'center', width: wp('80%'), fontSize: hp('1.8%') }}>Add an extra layer of security when using the app</Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    if (!ownWallet) navigation.navigate("Backup")
                    else navigation.navigate("ImportPhase")
                }}
            >
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: hp('2%') }}>Set Passcode</Text>
            </TouchableOpacity>
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
        marginVertical: hp('3%'),
        textAlign: 'center',
        borderRadius: 6,
        backgroundColor: '#222',
        paddingVertical: 8
    }
});
