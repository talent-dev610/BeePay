
import 'react-native-gesture-handler';
import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Provider } from 'react-redux';
// import store from './src/store';


import SplashScreen from "./src/screens/SplashScreen";
import BoardScreen from './src/screens/BoardScreen';
import WalletScreen from './src/screens/WalletScreen';
import Dashboard from './src/screens/Dashboard';
import Agreement from './src/screens/Agreement';
import Backup from './src/screens/Backup';
import SecretPhrase from './src/screens/SecretPhrase';
import Verify from './src/screens/Verify';
import Passcode from './src/screens/Passcode';
import HomeScreen from './src/screens/HomeScreen';
import SendBpay from "./src/screens/SendBpay";
import Transaction from "./src/screens/Transaction";
import ImportPhase from "./src/screens/ImportPhase";
import ReceiveBpay from "./src/screens/ReceiveBpay";
import SearchReceive from "./src/screens/SearchReceive";


const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{
        headerShown: false,
        gestureEnabled: true, gestureDirection: 'horizontal'
      }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BoardScreen" component={BoardScreen} />
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='Agreement' component={Agreement} />
        <Stack.Screen name='SendBpay' component={SendBpay} />
        <Stack.Screen name='Transaction' component={Transaction} />
        <Stack.Screen name='ImportPhase' component={ImportPhase} />
        <Stack.Screen name='ReceiveBpay' component={ReceiveBpay} />
        <Stack.Screen name='SearchReceive' component={SearchReceive} />
        <Stack.Screen name="Passcode" component={Passcode}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Set Passcode',
            headerStyle: {
              backgroundColor: '#111',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 15,
            },
            headerShown: true,
          }}
        />

        <Stack.Screen name='Backup' component={Backup}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Secret Phrase backup',
            headerStyle: {
              backgroundColor: '#111',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 15,
            },
            headerShown: true,
          }}
        />

        <Stack.Screen name='SecretPhrase' component={SecretPhrase}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Secret Phrase',
            headerStyle: {
              backgroundColor: '#111',
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 15,
            },
            headerShown: true,
          }}

        />
        <Stack.Screen name='Verify' component={Verify} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />


      </Stack.Navigator>
    </NavigationContainer>

  );
}