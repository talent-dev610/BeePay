
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";


const BeeIcon = require("../../assets/icon_1.png");
const SwapIcon = require("../../assets/swap.png");
const DiscoverIcon = require("../../assets/discover.png");
const BrowserIcon = require("../../assets/browser.png");
const SettingIcon = require("../../assets/settings.png");

const backIcon = require("../../assets/backIcon.png");
const minuseIcon = require("../../assets/minuse.png");
const etherIcon = require("../../assets/ether.png");

export default function SendBpay({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.topNavContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image source={backIcon} style={{ width: 20, height: 14 }} />
                </TouchableOpacity>
                <TouchableOpacity
                // onPress={() => navigation.navigate("")}
                >
                    <Text style={{ color: 'white' }}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ color: 'white', fontSize: 20, marginVertical: hp('2%') }}>Send BPAY</Text>
            <LinearGradient
                style={styles.settingPad}
                colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                start={[0, 0]}
                end={[1, 0]}
                locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
            >
                <View style={styles.innerGradient}>
                    <Text style={{ color: 'white' }}>Address or name ENS, Bpay,...</Text>
                    <Image source={minuseIcon} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: '#D98F26', fontSize: 17 }}>PASTE</Text>
                </View>
            </LinearGradient>
            <LinearGradient
                style={styles.settingPad}
                colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                start={[0, 0]}
                end={[1, 0]}
                locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
            >
                <View style={styles.innerGradient}>
                    <Text style={{ color: 'white' }}>Amount Bpay</Text>
                    <View style={{ flexDirection: 'row', gap: 30 }}>
                        <Text style={{ color: '#D98F26', fontSize: 17 }}>MAX</Text>
                        <Text style={{ color: '#D98F26', fontSize: 17 }}>PASTE</Text>
                    </View>
                </View>
            </LinearGradient>
            <View>


                <Text style={{ color: 'white', marginTop: hp('7%'), marginBottom: hp('2%') }}>OPTIONAL</Text>
                <LinearGradient
                    style={styles.settingPad2}
                    colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                    start={[0, 0]}
                    end={[1, 0]}
                    locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                >
                    <View style={styles.innerGradient}>
                        <Text style={{ color: 'white' }}>Memo</Text>
                        <View style={{ flexDirection: 'row', gap: 30, alignItems: 'center' }}>
                            <Image source={minuseIcon} style={{ width: 20, height: 20 }} />
                            <Image source={etherIcon} style={{ width: 28, height: 28 }} />
                        </View>
                    </View>
                </LinearGradient>
            </View>

            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={BeeIcon} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: '#BF8122' }}> Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={SwapIcon} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: '#fff' }}> Swap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={DiscoverIcon} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: '#fff' }}> Discover</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={BrowserIcon} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: '#fff' }}> Browser</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Image source={SettingIcon} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: '#fff' }}> Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center'
    },
    logo: {
        width: wp('18%'),
        height: wp('18%'),
        marginTop: hp('13%'),
    },
    settingPad: {
        width: wp('85%'),
        height: hp('9%'),
        alignItems: 'center',
        borderRadius: 5,
        padding: 1,
        marginTop: hp('6%')
    },
    settingPad2: {
        width: wp('85%'),
        height: hp('9%'),
        alignItems: 'center',
        borderRadius: 5,
        padding: 1,
    },
    custombutton: {
        width: '100%',
        paddingVertical: 10,
        borderRadius: 8,
        textAlign: 'center',
        backgroundColor: 'black',
        marginVertical: hp('1.6%')
    },
    imageBackgorund: {
        flex: 1,
        justifyContent: 'center',
        width: wp('100%'),
        height: hp('100%'),
        position: 'absolute'
    },
    innerGradient: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: wp('5%')
    },
    circlePlus: {
        width: 40,
        height: 40,
        borderRadius: 20,
        padding: 2
    },
    innerCircle: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    bottomNav: {
        width: wp('100%'),
        height: hp('10%'),
        borderTopColor: '#BF8122',
        borderTopWidth: 1,
        marginTop: hp('90%'),
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp('5%'),
        alignItems: 'flex-end',
        paddingBottom: 10
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    topNavContainer: {
        width: wp('100%'),
        height: hp('10%'),
        flexDirection: 'row',
        padding: wp('5%'),
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
});
