import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const BUSDImage = require("../../assets/BUSD.png");
const BitcoinImage = require("../../assets/Bitcoin.png");
const EthereumImage = require("../../assets/Ethereum.png");
const XrpImage = require("../../assets/XRP.png");
const BnbImage = require("../../assets/BNB.png");

const tradeImage = require("../../assets/trade.png");
const bellImage = require("../../assets/bell.png");
const labelImage = require("../../assets/label.png");
const exchangeImage = require("../../assets/exchange.png");
const uploadImage = require("../../assets/upload.png");
const downloadImage = require("../../assets/download.png");
const cameraImage = require("../../assets/camera.png");
const infoImage = require("../../assets/info.png");
const cobImage = require("../../assets/cob.png");

const logoImage = require("../../assets/logo.png");
const BeeIcon = require("../../assets/icon_1.png");
const SwapIcon = require("../../assets/swap.png");
const DiscoverIcon = require("../../assets/discover.png");
const BrowserIcon = require("../../assets/browser.png");
const SettingIcon = require("../../assets/settings.png");

export default function AddToken({ navigation, route }) {

  const [activityShow, setActivityShow] = useState(true)

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 0;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  return (
    <View style={styles.container} >
      <LinearGradient
        style={styles.settingPad}
        colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
        start={[0, 0.1]}
        end={[1, 0]}
        locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
      >
        <StatusBar hidden={true} />

        <View style={styles.iconGroup}>
          <TouchableOpacity >
            <Image source={bellImage} width={24} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={tradeImage} width={24} />
          </TouchableOpacity>
        </View>

        <Text style={{ alignSelf: 'center', fontSize: 26, color: 'black', fontWeight: '600' }}  >$9,958.20</Text>
        <Text style={{ alignSelf: 'center', fontSize: 16, color: 'black' }}  >My wallet</Text>

        {activityShow && <View style={{ flexDirection: 'row', width: wp('65%'), alignSelf: 'center', justifyContent: 'space-between', marginTop: hp('3%') }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SearchReceive", { activity: "send" })}
          >
            <View style={styles.labelContainer}>
              <Image source={uploadImage} style={{ width: 14 }} />
            </View>
            <Text style={{ alignSelf: 'center', marginTop: 4, textAlign: 'center', fontSize: 12 }}>Send</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SearchReceive", { activity: "receive" })}
          >
            <View style={styles.labelContainer}>
              <Image source={downloadImage} style={{ width: 14 }} />
            </View>
            <Text style={{ alignSelf: 'center', marginTop: 4, textAlign: 'center', fontSize: 12 }}>Receive</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.labelContainer}>
              <Image source={labelImage} style={{ width: 20 }} />
            </View>
            <Text style={{ alignSelf: 'center', marginTop: 4, textAlign: 'center', fontSize: 12 }}>Buy</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.labelContainer}>
              <Image source={exchangeImage} style={{ width: 20 }} />
            </View>
            <Text style={{ alignSelf: 'center', marginTop: 4, textAlign: 'center', fontSize: 12 }}>Trade</Text>
          </TouchableOpacity>

        </View>
        }

        <View style={styles.walletPad} >
          <View style={styles.coinPad} >
            <Text style={{ fontSize: 16, color: 'white' }} >Tokens</Text>
            <Text style={{ fontSize: 16, color: 'white' }}>NFTs</Text>
          </View>

          <View style={{ width: wp('100%'), height: hp('60%'), paddingBottom: hp('10%') }}>
            <ScrollView
              style={styles.scrollView}
              onScroll={({ nativeEvent }) => {
                if (isCloseToBottom(nativeEvent)) {
                  setActivityShow(false)
                }
                else setActivityShow(true)
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={BUSDImage} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>BUSD</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >1000</Text>
                      <Text style={{ fontSize: 12, color: 'green', marginLeft: 4, fontWeight: '700' }}>+ 2.89%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>BUSD</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$1,001</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={BitcoinImage} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>Bitcoin</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >0.192412</Text>
                      <Text style={{ fontSize: 12, color: 'green', marginLeft: 4, fontWeight: '700' }}>+ 0.47%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>BTC</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$4,000</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={EthereumImage} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>Ethereum</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >1</Text>
                      <Text style={{ fontSize: 12, color: 'green', marginLeft: 4, fontWeight: '700' }}>+ 1.37%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>ETH</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$1,530</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={XrpImage} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>XRP</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >1,000</Text>
                      <Text style={{ fontSize: 12, color: 'red', marginLeft: 4, fontWeight: '700' }}>- 1.69%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>XRP</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$393.20</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={BnbImage} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>BNB</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >10</Text>
                      <Text style={{ fontSize: 12, color: 'red', marginLeft: 4, fontWeight: '700' }}>- 0.77%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>BNB</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$3034</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={BnbImage} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>BNB</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >10</Text>
                      <Text style={{ fontSize: 12, color: 'red', marginLeft: 4, fontWeight: '700' }}>- 0.77%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>BNB</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$3034</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={BnbImage} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>BNB</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >10</Text>
                      <Text style={{ fontSize: 12, color: 'red', marginLeft: 4, fontWeight: '700' }}>- 0.77%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>BNB</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$3034</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Transaction")}
                style={styles.tokenItem}>
                <Image source={BnbImage} style={{ flex: 1, width: wp('11%'), height: wp('11%') }} resizeMode='contain' />
                <View style={styles.mainBox}>
                  <View style={{ marginLeft: 12, flex: 1 }} >
                    <Text style={{ color: 'white', fontSize: 13 }}>BNB</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={{ color: 'white', fontSize: 12 }} >10</Text>
                      <Text style={{ fontSize: 12, color: 'red', marginLeft: 4, fontWeight: '700' }}>- 0.77%</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>BNB</Text>
                    <Text style={{ color: 'gray', marginTop: 4, fontSize: 12, fontWeight: '900' }}>$3034</Text>
                  </View>
                </View>
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => navigation.navigate("TokenList")}
              >
                <LinearGradient
                  style={styles.settingPad2}
                  colors={["#D98F26", "#BF8122", "#AB761F", "#A4721E", "#A9761F", "#B98221", "#D39525", "#D79826", "#FDF576", "#F4CC69"]}
                  start={[0, 0]}
                  end={[1, 0]}
                  locations={[0, 0.048, 0.085, 0.1201, 0.19, 0.27, 0.37, 0.38, 0.78, 1]}
                >
                  <View style={styles.innerGradient}>
                    <Text style={{ alignSelf: 'center', color: '#888', fontSize: 18 }}>Add Custom Token</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          </View>
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
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffF',
    alignItems: 'center'
  },
  settingPad: {
    width: wp('100%'),
    height: hp('100%'),
    flex: 1,
    backgroundColor: '#fff',
  },

  walletPad: {
    width: wp('100%'),
    backgroundColor: 'black',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginTop: hp('10%')
  },

  coinPad: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: hp('8%'),
    borderBottomColor: 'yellow',
    borderBottomWidth: 2
  },

  labelContainer: {
    width: 45,
    height: 45,
    borderRadius: 40,
    backgroundColor: '#ddd',
    alignItems: 'center',
    opacity: 0.8,
    justifyContent: 'center'
  },
  mainBox: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'yellow',
    borderBottomWidth: 1,
    marginLeft: 12,
    paddingBottom: 18
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%'),
    alignSelf: 'center',
    marginTop: hp('3%'),
    height: hp('3%')
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
    paddingBottom: 10,
    zIndex: 99999,
    backgroundColor: 'black'
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tokenItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    height: hp('7%')
  },
  scrollView: {
    flexDirection: 'column',
    height: hp('48%'),
    overflow: 'scroll',
    paddingBottom: 12
  },
  settingPad2: {
    width: wp('70%'),
    height: hp('6%'),
    borderRadius: 5,
    padding: 1,
    marginTop: hp('5%'),
    alignSelf: 'center'
  },
  innerGradient: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

})
