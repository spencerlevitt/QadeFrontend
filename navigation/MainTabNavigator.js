import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TabBarIcon2 from '../components/TabBarIcon2';
import HomeScreen from '../screens/HomeScreen';
import Recent from '../screens/Recent';
import Profile from '../screens/Profile';
import Game from '../screens/game';

import NavigationService from './NavigationService';

import Submit from '../screens/game/submit';
import Confirm from '../screens/game/confirm';
import Camera from '../screens/game/Camera';
import CameraPre from '../screens/game/CameraPre';
import Await from '../screens/game/Await';
import ScoreConfirm from '../screens/game/ScoreConfirm';
import ScoreA from '../screens/game/ScoreA';
import ScoreB from '../screens/game/ScoreB';

import Challenge from '../screens/challenge';
import ChallengeConfirmation from '../screens/challenge/ChallengeConfirmation';
import Transfer from '../screens/transfer';

import Requests from '../screens/profile/index';
import Matches from '../screens/profile/matches';
import Match from '../screens/profile/match';
import Settings from '../screens/profile/settings';
import EditProfile from '../screens/profile/editProfile';
import Support from '../screens/profile/support';
import ToS from '../screens/profile/tos';
import Privacy from '../screens/profile/privacy';
import GameRules from '../screens/profile/rules';
import CameraPro from '../screens/profile/CameraPro';
import CameraProPre from '../screens/profile/CameraProPre';
import Onb from '../screens/profile/onb';
//Test items
import Loading from '../screens/temp/loading';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Challenge,
    ChallengeConfirmation,
    Transfer
  },
  config
);

HomeStack.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index < 1,
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon2
      focused={focused}
      name={require('../assets/noun_arcade_-1.png')}
    />
  ),
});

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


const RecentStack = createStackNavigator(
  {
    Recent,
  },
  config
);

RecentStack.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index < 1,
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-wifi' : 'md-wifi'} />
  ),
});

RecentStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile,
    Requests,
    Matches,
    Match,
    Settings,
    EditProfile,
    Support,
    ToS,
    Privacy,
    GameRules,
    Loading,
    CameraPro,
    CameraProPre,
    Onb
  },
  config
);

ProfileStack.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index < 1,
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
});

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  GameStack,
  RecentStack,
  ProfileStack,
}, {
  initialRouteName: 'HomeStack',
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
        ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
      />
    )
  }
}
