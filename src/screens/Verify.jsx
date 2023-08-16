
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Verify({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />

            <Text style={{ color: 'white', fontWeight: '500', fontSize: 16, marginTop: hp('9%') }}>Verify Secret Phrase</Text>
            <Text style={{ color: 'gray', fontSize: 11, width: wp('80%'), textAlign: 'center', marginVertical: 12 }}>Tab the words to put them next to each other in the correct order.</Text>
            <View style={{ width: wp('100%'), height: hp('15%'), backgroundColor: '#111' }}>

            </View>
            <View style={{ width: wp('65%'), alignSelf: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: hp('1%') }}>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 2 }}>
                    <TouchableOpacity style={styles.dragItem}>
                        <Text style={styles.dragText}>still</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dragItem}>
                        <Text style={styles.dragText}>rival</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dragItem}>
                        <Text style={styles.dragText}>used</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dragItem}>
                        <Text style={styles.dragText}>harvest</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dragItem}>
                        <Text style={styles.dragText}>pupil</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 2 }}>
                    <TouchableOpacity style={styles.dragItem}>
                        <Text style={styles.dragText}>vague</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dragItem}>
                        <Text style={styles.dragText}>library</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dragItem}>
                        <Text style={styles.dragText}>denial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dragItem}>
                        <Text style={styles.dragText}>already</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 2 }}>
                    <TouchableOpacity style={styles.dragItem}>
                        <Text style={styles.dragText}>develop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dragItem}>
                        <Text style={styles.dragText}>solution</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dragItem}>
                        <Text style={styles.dragText}>liquid</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("WalletScreen")}
            >
                <LinearGradient
                    style={styles.settingPad2}
                    colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                    start={[0, 0]}
                    end={[1, 0]}
                    locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                >
                    <View style={styles.innerGradient}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Continue</Text>
                    </View>
                </LinearGradient>
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
    linedBox: {
        borderBottomColor: '#222',
        borderBottomWidth: 1,
        flexDirection: 'row',
        width: wp('40%'),
        paddingBottom: 6,
        marginTop: 12
    },
    dragItem: {
        borderRadius: 2,
        alignItems: 'center',
        padding: 2,
        borderWidth: 1,
        borderColor: '#222',
        marginLeft: 3
    },
    dragText: {
        padding: 2,
        color: 'white',
        fontSize: 12
    },
    buttonStyle: {
        width: wp('80%'),
        paddingVertical: 8,
        alignItems: 'center',
        backgroundColor: 'gray',
        position: 'absolute',
        borderRadius: 8,
        bottom: hp('9%')
    },
    settingPad2: {
        position: 'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        width: wp('80%'),
        height: hp('6%'),
        borderRadius: 5,
        padding: 1,
        marginTop: hp('42%')
    },
    ContainerHeader: {
        position: 'absolute',
        marginLeft: 30,
        marginTop: -hp('1.5%'),
        color: 'white',
        zIndex: 999,
        backgroundColor: 'black'
    },
    innerGradient: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
