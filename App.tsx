/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import ApplandingScreen from '../SuperStore/App/screens';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    if (Platform.OS === 'android'){

      setTimeout(() => {
        SplashScreen.hide();
      }, 5000);
    }
    console.log('App mounted');
  }, []);

  return (
    <SafeAreaView>
       <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
       <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
            <ApplandingScreen />
        </ScrollView>
    </SafeAreaView>
  );
}

export default App;
