// import { AppLoading } from 'expo';
// import { Asset } from 'expo-asset';
// import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import AppNavigator from './navigation/AppNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';
import configureStore from './redux/configureStore.dev';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Toast } from 'react-native-redux-toast';

let onboard = true;
socketBaseUrl = 'http://67.205.134.163';
statusBarHeight = 60;
const { store, persistor } = configureStore();

console.disableYellowBox = true;

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
      return (
        <ReduxProvider store={store}>
          <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
            <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <AppNavigator />
              <Toast messageStyle={{ color: 'white' }} />
            </View>
          </PersistGate>
        </ReduxProvider>
      );
}

async function checkOnboard() {
  await AsyncStorage.setItem("onboard", false)
}

function loadResourcesAsync() {
  /*await Promise.all([
    Asset.loadAsync([
      require('./assets/images/camera.png'),
      require('./assets/images/drone.png'),
      require('./assets/images/friends.png'),
      require('./assets/images/fun.png'),
      require('./assets/images/game.png'),
      require('./assets/images/gameSS.png'),
      require('./assets/images/gloves.png'),
      require('./assets/images/login.png'),
      require('./assets/images/online.png'),
      require('./assets/images/savings.png'),
      require('./assets/images/segment.png'),
      require('./assets/images/shield.png'),
      require('./assets/images/winners.png'),
      require('./assets/images/game/fifa-header.png'),
      require('./assets/images/game/fifa-ss.png'),
      require('./assets/images/game/nba-header.png'),
      require('./assets/images/game/nba-ss.png'),
      require('./assets/images/game/nfl-header.png'),
      require('./assets/images/game/nfl-ss.png'),
      require('./assets/images/game/nhl-header.jpg'),
      require('./assets/images/game/nhl-ss.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
    onboard = AsyncStorage.getItem("onboard")

  ]);*/
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
