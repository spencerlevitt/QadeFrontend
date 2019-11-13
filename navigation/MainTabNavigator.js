import React from 'react';
import { Platform, View, Vibration } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TabBarIcon2 from '../components/TabBarIcon2';
import HomeScreen from '../screens/HomeScreen';
import Recent from '../screens/Recent';
import Profile from '../screens/Profile';
import Game from '../screens/Game';

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

import Login from '../screens/login/Login';
import SignUp from '../screens/login/SignUp';
import ForgotPassword from '../screens/login/ForgotPassword';


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

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { TextInput } from 'react-native-gesture-handler';
import { withPolling } from "../redux/polling/withPolling";
import * as userActions from '../redux/actions/userActions';
import * as standingsActions from '../redux/actions/standingsActions';
import * as friendRequestActions from '../redux/actions/friendRequestActions';
import * as todaysMatchesActions from '../redux/actions/todaysMatchesActions';
import * as gameRequestsActions from '../redux/actions/gameRequestsActions';
import * as chartsActions from '../redux/actions/chartsActions';
import { getGamers, getRecentGames, getMyMatches } from '../redux/actions/gamersActions';
import OneSignal from 'react-native-onesignal';

import StatusBarAlert from 'react-native-statusbar-alert';
import SocketIOClient from 'socket.io-client';
import { getUniqueId, getManufacturer } from 'react-native-device-info';
import axios from 'axios';






const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
     headerMode:'none',
     header: null
  },
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
    Login,
    SignUp,
    ForgotPassword,
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

class Item extends React.Component {
  constructor(){
     super();
     this.state = {}
     this.onIds = this.onIds.bind(this);
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('ids', this.onIds);
}
onIds(device) {
   const { loggedInUser } = this.props;
    axios.post(socketBaseUrl+'/saveUUID', {
       UUID: device.userId,
       userID: loggedInUser.user.pk
    });
}
   componentDidMount(){
    const { csrfToken, actions, loggedInUser } = this.props;
    OneSignal.init("8e764183-7e1b-4609-8f31-b066eecc3750");
    OneSignal.inFocusDisplaying(0);
    OneSignal.addEventListener('ids', this.onIds);
    
    this.socket = SocketIOClient(socketBaseUrl);
    
    this.socket.on( loggedInUser.user.pk+'!!' , (data)=>{
           actions.loadTodaysMatches(loggedInUser.user.pk, csrfToken)
            .catch(error => {
               // alert('Loading todays matches failed' + error);
            });

         actions.loadPendingGameRequests(loggedInUser.user.pk, csrfToken)
         .catch(error => {
            // alert('Loading pending game requests failed' + error);
         });

         actions.loadAcceptedGameRequests(loggedInUser.user.pk, csrfToken)
         .catch(error => {
            // alert('Loading accepted game requests failed' + error);
         });

      actions.loadUserDetails(csrfToken)
      .then( ()=>{
         //alert('loaded');
      })
      .catch(error => {
       // alert('Loading user failed' + error);
      });
    //}
      actions.loadAcceptedFriends(csrfToken).catch(error => {
         // alert('Loading accepted friends failed' + error);
      });
    
    // Load all game standings: fifa, nba, nhl, madden 
    actions.loadStandings(csrfToken, loggedInUser.user.pk);

   actions.loadMyMatches(csrfToken, 1, null, loggedInUser.user.pk);
   actions.loadChartsData(loggedInUser.user.pk, 7, csrfToken);
   
      actions.getRecentGames(csrfToken, 1, null , loggedInUser.user.pk);


     })
    
    
    this.socket.on( loggedInUser.user.pk , (data)=>{
       this.setState({
          message: data.message,
          showAlert: true
       } , ()=>{
          setTimeout( ()=>{
             this.setState({showAlert: false}, ()=>{
           actions.loadTodaysMatches(loggedInUser.user.pk, csrfToken)
            .catch(error => {
               // alert('Loading todays matches failed' + error);
            });

         actions.loadPendingGameRequests(loggedInUser.user.pk, csrfToken)
         .catch(error => {
            // alert('Loading pending game requests failed' + error);
         });

         actions.loadAcceptedGameRequests(loggedInUser.user.pk, csrfToken)
         .catch(error => {
            // alert('Loading accepted game requests failed' + error);
         });

      actions.loadUserDetails(csrfToken)
      .then( ()=>{
         //alert('loaded');
      })
      .catch(error => {
       // alert('Loading user failed' + error);
      });
    //}
      actions.loadAcceptedFriends(csrfToken).catch(error => {
         // alert('Loading accepted friends failed' + error);
      });
    
    // Load all game standings: fifa, nba, nhl, madden 
   actions.loadStandings(csrfToken, loggedInUser.user.pk);
   actions.loadMyMatches(csrfToken, 1, null, loggedInUser.user.pk);
   actions.loadChartsData(loggedInUser.user.pk, 7, csrfToken);

             });
   
      actions.getRecentGames(csrfToken, 1, null , loggedInUser.user.pk);



          }, 3000);
       })
     })
 }
  render() {
    return (
      <View
      style={{
         flex:1
      }}
      >
      <StatusBarAlert
      visible={this.state.showAlert}
      message={this.state.message}
      backgroundColor="#3CC29E"
      color="white"
      height={68}
      style={{
         padding: 5
      }}
      >
      </StatusBarAlert>
      <AppContainer
        ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
      />
      </View>
    )
  }
}

Item.propTypes = {};

function mapStateToProps(state) {
  return {
    acceptedFriends: state.friendRequests.acceptedFriends,
    userDetails: state.userDetails,
    csrfToken: state.auth.csrfToken,
    loggedInUser: state.auth.loggedInUser,
    loggedIn: state.auth.loggedIn,
    standings: state.standings,
    loading: state.apiCallsInProgress > 0
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMyMatches: bindActionCreators(getMyMatches, dispatch),
      getRecentGames: bindActionCreators(getRecentGames, dispatch),
      loadChartsData: bindActionCreators(chartsActions.loadChartsData, dispatch),
      loadPendingGameRequests: bindActionCreators(gameRequestsActions.loadPendingGameRequests, dispatch),
      loadAcceptedGameRequests: bindActionCreators(gameRequestsActions.loadAcceptedGameRequests, dispatch),
      loadTodaysMatches: bindActionCreators(todaysMatchesActions.loadTodaysMatches, dispatch),
      loadUserDetails: bindActionCreators(userActions.loadUserDetails, dispatch),
      loadStandings: bindActionCreators(standingsActions.loadStandings, dispatch),
      loadAcceptedFriends: bindActionCreators(friendRequestActions.loadAcceptedFriends, dispatch),
    }
  };
}

export default withPolling()(connect(mapStateToProps, mapDispatchToProps)(Item));
