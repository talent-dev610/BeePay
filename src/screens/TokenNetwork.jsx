
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from 'react-native-gesture-handler';


const BeeIcon = require("../../assets/icon_1.png");
const SwapIcon = require("../../assets/swap.png");
const DiscoverIcon = require("../../assets/discover.png");
const BrowserIcon = require("../../assets/browser.png");
const SettingIcon = require("../../assets/settings.png");

const backIcon = require("../../assets/backIcon.png");
const minuseIcon = require("../../assets/minuse.png");
const etherIcon = require("../../assets/ether.png");
const warningIcon = require("../../assets/warning.png");

export default function TokenNetwork({ navigation }) {

    const [tokenShow, setTokenShow] = useState(true)
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.topNavContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image source={backIcon} style={{ width: 20, height: 14 }} />
                </TouchableOpacity>
                <View style={{ width: wp('60%'), flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity
                        onPress={() => setTokenShow(true)}
                    >
                        <Text style={{ color: 'white', borderBottomColor: '#D98F26', borderBottomWidth: 2 }}>Token</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setTokenShow(false)}
                    >
                        <Text style={{ color: 'white', borderBottomColor: '#D98F26', borderBottomWidth: 2 }}>Network</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Image source={etherIcon} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
            </View>
            {
                !tokenShow ? (
                    <View>
                        <LinearGradient
                            style={styles.settingPad}
                            colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}>
                            <TextInput
                                placeholderTextColor={"#999"}
                                placeholder='Network'
                                style={styles.innerGradient} />
                        </LinearGradient>
                        <LinearGradient
                            style={styles.settingPad}
                            colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}>
                            <TextInput
                                placeholderTextColor={"#999"}
                                placeholder='Contract Address'
                                style={styles.innerGradient} />
                            <TouchableOpacity
                                style={{ position: 'absolute', top: hp('3%'), right: 100, backgroundColor: 'black' }}>
                                <Image
                                    source={minuseIcon}
                                    style={{ width: 20, height: 20 }} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ position: 'absolute', top: hp('3%'), right: 30, backgroundColor: 'black' }}>
                                <Text style={{ color: '#D98F26', fontSize: 17 }}>PASTE</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <LinearGradient
                            style={styles.settingPad}
                            colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}>
                            <TextInput
                                placeholderTextColor={"#999"}
                                placeholder='Name'
                                style={styles.innerGradient} />
                        </LinearGradient>
                        <LinearGradient
                            style={styles.settingPad}
                            colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}>
                            <TextInput
                                placeholderTextColor={"#999"}
                                placeholder='Symbol'
                                style={styles.innerGradient} />
                        </LinearGradient>
                        <LinearGradient
                            style={styles.settingPad}
                            colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}>
                            <TextInput
                                placeholderTextColor={"#999"}
                                placeholder='Decimals'
                                style={styles.innerGradient} />
                        </LinearGradient>
                        <View
                            style={styles.warning}>
                            <Image source={warningIcon} style={{ width: 20, height: 20 }} />
                            <Text
                                style={{ color: '#D98F26' }}>
                                Anyone can create a token, including fake versions of existing tokens.
                                Learn about scams and security risks.
                            </Text>
                        </View>
                    </View>
                ) : (
                    <View>
                        <View style={{ width: wp('85%'), flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
                            <LinearGradient
                                style={styles.netPad}
                                colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                                start={[0, 0]}
                                end={[1, 0]}
                                locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}>
                                <TextInput
                                    placeholderTextColor={"#999"}
                                    placeholder='Switch Network'
                                    style={styles.innerGradient} />
                            </LinearGradient>
                            <LinearGradient
                                style={styles.netPad}
                                colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                                start={[0, 0]}
                                end={[1, 0]}
                                locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}>
                                <TextInput
                                    placeholderTextColor={"#999"}
                                    placeholder='ChainList'
                                    style={styles.innerGradient} />
                            </LinearGradient>
                        </View>
                        <LinearGradient
                            style={styles.settingPad}
                            colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}>
                            <TextInput
                                placeholderTextColor={"#999"}
                                placeholder='Name'
                                style={styles.innerGradient} />
                        </LinearGradient>
                        <LinearGradient
                            style={styles.settingPad}
                            colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}>
                            <TextInput
                                placeholderTextColor={"#999"}
                                placeholder='Symbol'
                                style={styles.innerGradient} />
                        </LinearGradient>
                        <LinearGradient
                            style={styles.settingPad}
                            colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}>
                            <TextInput style={styles.innerGradient} />
                            <Text
                                style={{ color: '#999', position: 'absolute', top: -9, left: 16, backgroundColor: 'black' }}
                            >Node URL</Text>
                        </LinearGradient>
                        <LinearGradient
                            style={styles.settingPad}
                            colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                            start={[0, 0]}
                            end={[1, 0]}
                            locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}>
                            <TextInput
                                placeholderTextColor={"#999"}
                                placeholder='Explorer URL (Optional)'
                                style={styles.innerGradient} />
                        </LinearGradient>
                        <View
                            style={styles.warning}>
                            <Image source={warningIcon} style={{ width: 20, height: 20 }} />
                            <Text
                                style={{ color: '#D98F26', width: wp('70%') }}>
                                A malicious network provider can lie about the state of the blockchain and record your network activity.
                                Only add custom networks you trust.
                            </Text>
                        </View>
                    </View>
                )}
            <TouchableOpacity>
                <LinearGradient
                    style={styles.settingPad2}
                    colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                    start={[0, 0]}
                    end={[1, 0]}
                    locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                >
                    <View style={styles.button}>
                        <Text style={{ textAlign: 'center', color: '#888', fontSize: 20 }}>Save</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>

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
    netPad: {
        width: wp('41%'),
        height: hp('8%'),
        borderRadius: 5,
        padding: 1,
        marginTop: hp('2%')
    },
    settingPad: {
        width: wp('85%'),
        height: hp('8%'),
        borderRadius: 5,
        padding: 1,
        marginTop: hp('2%')
    },
    settingPad2: {
        width: wp('85%'),
        height: hp('9%'),
        alignItems: 'center',
        borderRadius: 5,
        padding: 1,
    },
    warning: {
        width: wp('85%'),
        height: hp('13%'),
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#331900',
        marginVertical: hp('2%'),
        alignItems: 'center',
        gap: 10
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
        padding: wp('5%'),
        color: 'white',
        position: 'relative'
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
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        borderRadius: 5
    }
});
