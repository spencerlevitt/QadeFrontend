import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Picker,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import Constants from 'expo-constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { EvilIcons, AntDesign, Feather, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/userActions';
import * as friendRequestActions from '../redux/actions/friendRequestActions';
import * as gameCardStatsActions from '../redux/actions/gameCardStatsActions';
import { NavigationEvents } from "react-navigation";
import { withPolling } from "../redux/polling/withPolling";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


class Profile extends React.Component {
  state = {
    game: 'nba'
  }

  _scrollToInput(reactNode) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.props.scrollToFocusedInput(reactNode)
  }

  componentWillMount() {
    const { acceptedFriends, csrfToken, actions, loggedInUser } = this.props;
    
    if (!acceptedFriends.length) {
      actions.loadAcceptedFriends(csrfToken).catch(error => {
          alert('Loading accepted friends failed' + error);
      });
    }

    actions.loadGameCardStats(loggedInUser.user.pk, this.state.game, csrfToken).catch(error => {
      alert('Loading game card stats failed' + error);
    });
  }

  render() {

    const data = [{
      value: 'NBA 2K',
    }, {
      value: 'NHL',
    }, {
      value: 'FIFA',
    }, {
      value: 'MADDEN',
    }];

    const consoles = ['None', 'Xbox One', 'Playstation 4', 'XBox One & Playstation 4'];

    return (
      <KeyboardAwareScrollView style={[styles.container, { paddingTop: Constants.statusBarHeight, }]} innerRef={ref => {
        this.scroll = ref
      }}>
        <NavigationEvents
          onWillFocus={() => {
            const updatedPhoto = this.props.navigation.getParam('photo_uri');
            if (updatedPhoto) {
              this.setState({ updatedPhoto });
            }
          }}
        />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image source={{ uri: this.state.updatedPhoto ? this.state.updatedPhoto : this.props.userDetails.profile.photo_url.length ? this.props.userDetails.profile.photo_url : '../../assets/man.png' }} style={{ height: 60, width: 60, borderRadius: 5 }} />
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end', padding: 20 }} onPress={() => this.props.navigation.navigate("Settings")}>
              <EvilIcons name={'gear'} size={35} color={'#7697E8'} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{ color: '#1E3949', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
            {!this.props.loading && this.props.loggedInUser.user ? `${this.props.loggedInUser.user.first_name} ${this.props.loggedInUser.user.last_name}` : ''}
          </Text>
          <Text style={{ color: '#1E3949', fontSize: 12, textAlign: 'center' }}>
            {!this.props.loading ? consoles[this.props.userDetails.profile.console] : ''} | 
            {!this.props.loading ? ` ${this.props.userDetails.profile.city}` : ''}
            <Image source={require('../assets/images/shield.png')} style={{ height: 12, width: 10 }} />
          </Text>
          <View style={{ padding: 15 }}>
            <Text style={{ color: '#1E3949', fontSize: 16, textAlign: 'center' }}>
              {!this.props.loading ? this.props.userDetails.profile.bio ? this.props.userDetails.profile.bio : 'You have not your entered bio details' : 'Loading bio details...'}
            </Text>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>

              <View style={{ flex: 0.5 }}>
                <TouchableOpacity style={{ height: 35, width: '100%', borderRadius: 5, backgroundColor: '#2699FB', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} onPress={() => this.props.navigation.navigate("Requests", { friends: false })}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 10 }}>
                    {!this.props.isFetchingAcceptedFriends ? this.props.acceptedFriends.length : ''} Friends
                  </Text>
                  <Text style={{ color: 'red', marginTop: -4 }}>•</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.5, paddingHorizontal: 10 }}>
                <TouchableOpacity style={{ height: 35, width: '100%', borderRadius: 5, borderColor: '#BCE0FD', borderWidth: 2, justifyContent: 'center' }} onPress={() => this.props.navigation.navigate("Transfer")}>
                  <Text style={{ color: '#2699FB', fontWeight: 'bold', textAlign: 'center', fontSize: 10 }}>Money Transfer</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* TODO: REMOVE BEFORE PROD */}

            {/* <View style={{ flex: 1, marginTop: 20, alignItems: 'center' }}>
              <TouchableOpacity style={{ height: 50, width: '90%', borderRadius: 5, borderColor: '#BCE0FD', borderWidth: 2, justifyContent: 'center' }} onPress={() => this.props.navigation.navigate("Loading")}>
                <Text style={{ color: '#2699FB', fontWeight: 'bold', textAlign: 'center' }}>Loading Example</Text>
              </TouchableOpacity>
            </View> */}

            {/* */}

          </View>

          <View style={{ paddingLeft: 50, paddingRight: 50, marginTop: 20, marginBottom: 20 }}>
            <TouchableOpacity style={{ borderBottomColor: '#eee', borderBottomWidth: 1, paddingBottom: 10 }} onPress={() => this.props.navigation.navigate("Matches")}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16 }}>
                  Match History
                  </Text>
                <EvilIcons name={'chevron-right'} size={20} color={'#888'} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ padding: 15, paddingHorizontal: 30 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Stat Center</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                <View style={{}}>
                  <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, justifyContent: 'center' }}>
                    <EvilIcons name={'chevron-down'} size={30} color={'#333'} />
                  </View>
                  <Dropdown
                    containerStyle={{ paddingLeft: 10, width: 120, height: 25, padding: 0, backgroundColor: '#3A8FFF30', borderRadius: 20 }}
                    pickerStyle={{ width: 100 }}
                    overlayStyle={{ width: 100 }}
                    dropdownOffset={{ top: 0, left: 0 }}
                    baseColor={'rgba(0,0,0,0)'}
                    data={data}
                    value={'NBA 2K'}
                  />
                </View>


                {/*
                <TouchableOpacity style={{ height: 25, backgroundColor: '#3A8FFF30', borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ paddingLeft: 10, paddingRight: 5 }}>NBA 2K</Text>
                  <EvilIcons name={'chevron-down'} size={20} color={'#333'} />
                </TouchableOpacity>
                */}
              </View>
            </View>
            <View style={{ margin: 30 }}>
              <TextInput 
                  onFocus={(event: Event) => {
                      // `bind` the function if you're using ES6 classes
                      this._scrollToInput((event.target))
                  }}
                  style={{ height: '100%', height: 30, borderRadius: 30, borderWidth: 1, borderColor: '#E5E5E5', paddingLeft: 15 }} placeholder={'Filter by opponents'}>
              </TextInput>
            </View>
            <View style={{ marginBottom: 30 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.33 }}>
                  <Text style={{ color: '#333', fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.loading ? `${this.props.userDetails.statistics.won_games}-${this.props.userDetails.statistics.lost_games}` : '0-0'}
                  </Text>
                  <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>Record</Text>
                </View>

                <View style={{ flex: 0.33 }}>
                  <Text style={{ color: '#333', fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.loading ? this.props.userDetails.statistics.win_percent : '0.0'}%
                  </Text>
                  <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>Win %</Text>
                </View>

                <View style={{ flex: 0.33 }}>
                  <Text style={{ color: '#333', fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>
                    ${!this.props.loading ? this.props.userDetails.statistics.net_gain : '0.00'}
                  </Text>
                  <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>Net Gain</Text>
                </View>


              </View>


              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 12, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>You</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 12, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>Opponent</Text>
                </View>
              </View>



              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_score : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Score
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.score : '-'}
                  </Text>
                </View>
              </View>


              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_fieldgoalper : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Field Goal %
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.fieldgoalper : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_3pointper : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg 3 Point%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent['3pointper'] : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_fastbreakpoints : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Fast Break Points%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.fastbreakpoints : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_pointsinpaint : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Points In Paint%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.pointsinpaint : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_secondchance : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Second Chance%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.secondchance : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_benchpoints : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Bench Points%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.benchpoints : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_assists : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Assists%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.assists : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_offensiveboards : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Offensive Boards%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.offensiveboards : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_defensiveboards : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Defensive Boards%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.defensiveboards : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_steals : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Steals%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.steals : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_blocks : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Blocks%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.blocks : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_turnovers : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Turn Overs%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.turnovers : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_fouls : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Fouls%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.fouls : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_biggestlead : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Biggest Lead%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.biggestlead : '-'}
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_posession : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Possession%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.posession : '-'}
                  </Text>
                </View>
              </View>
              
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.avg_timeoutsremain : '-'}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Timeouts Remain%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    {!this.props.isFetchingStats ? this.props.gameCardStats.stats.opponent.timeoutsremain : '-'}
                  </Text>
                </View>
              </View>

            </View>
          </View>
        </View>
        <View style={{height: 100}}>

        </View>
      </KeyboardAwareScrollView>
    )
  }
}

Profile.navigationOptions = {
  header: null,
};

Profile.propTypes = {
  csrfToken: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  loggedInUser: PropTypes.object.isRequired,
  acceptedFriends: PropTypes.array.isRequired,
  isFetchingAcceptedFriends: PropTypes.bool.isRequired,
  gameCardStats: PropTypes.object.isRequired,
  isFetchingStats: PropTypes.bool.isRequired,
  userDetails: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
      csrfToken: state.auth.csrfToken,
      loading: state.apiCallsInProgress > 0,
      loggedInUser: state.auth.loggedInUser,
      acceptedFriends: state.friendRequests.acceptedFriends,
      isFetchingAcceptedFriends: state.friendRequests.isFetchingAcceptedFriends,
      gameCardStats: state.gameCardStats,
      isFetchingStats: state.gameCardStats.isFetchingStats,
      userDetails: state.userDetails
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: {
          loadUserDetails: bindActionCreators(userActions.loadUserDetails, dispatch),
          loadAcceptedFriends: bindActionCreators(friendRequestActions.loadAcceptedFriends, dispatch),
          loadGameCardStats: bindActionCreators(gameCardStatsActions.loadGameCardStats, dispatch),
      }
  };
}

export default withPolling()(connect(mapStateToProps, mapDispatchToProps)(Profile));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 8
  }
});
