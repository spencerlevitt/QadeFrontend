import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Game from '../screens/game';

import NavigationService from './NavigationService'

import Submit from '../screens/game/submit'
import Confirm from '../screens/game/confirm'
import Camera from '../screens/game/Camera'
import CameraPre from '../screens/game/CameraPre'
import Await from '../screens/game/Await'
import ScoreConfirm from '../screens/game/ScoreConfirm'
import ScoreA from '../screens/game/ScoreA'
import ScoreB from '../screens/game/ScoreB'


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'logo-game-controller-b'}
    />
  ),
};

HomeStack.path = '';


const GameStack = createStackNavigator(
  {
    Game,
    Submit,
    Confirm,
    Camera,
    CameraPre,
    Await,
    ScoreConfirm,
    ScoreA,
    ScoreB
  },
  config
);

GameStack.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index < 1,
  tabBarLabel: 'Game',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'logo-game-controller-a'} />
  ),
});

GameStack.path = '';


const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-wifi' : 'md-wifi'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  GameStack,
  LinksStack,
  SettingsStack,
}, {
  tabBarOptions: {
    showLabel: false,
  }
});

tabNavigator.path = '';

const AppContainer = createAppContainer(tabNavigator)

export default class Item extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    )
  }
}
