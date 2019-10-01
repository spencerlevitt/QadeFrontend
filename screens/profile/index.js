import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Constants from 'expo-constants';
import Animated from 'react-native-reanimated';
import { TabView, SceneMap } from 'react-native-tab-view';
import { EvilIcons } from '@expo/vector-icons';
import NavigationService from '../../navigation/NavigationService'

//There are two examples of how the data should be formatted once it is pulled from the server.
import Requests from './requests'
import Friends from './friends'

export default class ProfileTabs extends React.Component {


  //This state handles the routing for the tabView
  //Index is which tab and the routes define the key and title
  constructor(props) {
    super(props)
    const friends = this.props.navigation.getParam("friends")
    this.state = {
      index: friends == true ? 1 : 0,
      routes: [
        { key: 'first', title: 'Requests' },
        { key: 'second', title: "Friends" },
      ],
    };
  }


  //Used to change Tab View
  _handleIndexChange = index => this.setState({ index });

  //Tab Bar Layout and design
  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={styles.tabBarCenter}>

        <View style={styles.tabBar}>
          {props.navigationState.routes.map((route, i) => {
            const color = Animated.color(
              Animated.round(
                Animated.interpolate(props.position, {
                  inputRange,
                  outputRange: inputRange.map(inputIndex =>
                    inputIndex === i ? 82 : 238
                  ),
                })
              ),
              Animated.round(
                Animated.interpolate(props.position, {
                  inputRange,
                  outputRange: inputRange.map(inputIndex =>
                    inputIndex === i ? 141 : 238
                  ),
                })
              ),
              Animated.round(
                Animated.interpolate(props.position, {
                  inputRange,
                  outputRange: inputRange.map(inputIndex =>
                    inputIndex === i ? 247 : 238
                  ),
                })
              ),
            );
            return (
              <TouchableOpacity
                style={styles.tabItem}
                onPress={() => this.setState({ index: i })}>
                <Animated.View style={[styles.realTabItem, { borderBottomWidth: 2, borderBottomColor: color }]}>
                  <Animated.Text style={{ color: '#333', fontSize: 20 }}>{route.title}</Animated.Text>
                </Animated.View>

              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };


  //Scene renderer for tabview
  _renderScene = SceneMap({
    first: Requests,
    second: Friends,
  });

  //Removes header from React-Navigation
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  //Render function for TabView
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight }}>
        <View style={{ backgroundColor: '#faf7f7'}}>
        <TouchableOpacity onPress={() => NavigationService.navigate("Settings")} style={{ paddingLeft: 5, paddingTop: 5, alignItems: 'flex-start'}}>
          <EvilIcons name={'arrow-left'} size={35} color={'#888'} />
        </TouchableOpacity>
        </View>
        
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },
  realTabItem: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
