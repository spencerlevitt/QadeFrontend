import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import Constants from 'expo-constants';
import { EvilIcons, AntDesign, Feather, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeTabs from '../components/home/homeTabs'
import GameTabs from '../components/home/gameTabs'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/userActions';
import * as statsActions from '../redux/actions/statsActions';
import * as standingsActions from '../redux/actions/standingsActions';

/*
DEV

---
@B - Initial made, reference the attached screen shots, I will be working on the basic layout and charts
@B - Tabs implemented/Stat center/standings also g2g
@L - working on swiper design
@B - Seperated tabs to reduce clutter
@L - working on scroll ani done by tonight
@L - finished Scroll ani
@B - Client wants chart to be improved, changing from react-native-svg-chart to react-native-chart-kit
@C - done with new chart design
@C - done with style migration
@B - Made progress checker under Swiper


*/

class HomeScreen extends React.Component {

  componentDidMount() {
    const { userDetails, loggedInUser, csrfToken, stats, standings, actions } = this.props;
    
    if (!userDetails.profile && loggedInUser.user.email) {
      actions.loadUserDetails(csrfToken).catch(error => {
        alert('Loading user failed' + error);
      });
    }

    // if (stats.length === 0) {
    //   actions.loadStats().catch(error => {
    //     alert('Loading stats failed' + error);
    //   });
    // }

    // Load all game standings: fifa, nba, nhl, madden 
    actions.loadStandings(csrfToken);
  }

  render() {
    return (
      <View style={[styles.container, { paddingTop: Constants.statusBarHeight }]}>
        <View style={[styles.welcomeContainer]}>

          <View style={styles.welcomeContainerHeader}>
            <Text style={styles.welcomeHeader}>
              Current Balance
            </Text>
            <Text style={styles.welcomeBalance}>
            ${!this.props.loading && this.props.userDetails ? this.props.userDetails.profile.balance : '0'}
            </Text>
          </View>


          <View style={styles.welcomeButtonContainer}>
            <View style={styles.alignCenter}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Transfer")} style={styles.welcomeButton}>
                <EvilIcons name={'credit-card'} size={35} color={'#7ed3ff'} />
              </TouchableOpacity>
              <Text style={styles.welcomeButtonText}>Transfer</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={this.changeLayout} style={styles.welcomeButton}>
                <AntDesign name={'download'} size={25} color={'#7ed3ff'} />
              </TouchableOpacity>
              <Text style={styles.welcomeButtonText}>Submit</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Challenge")} style={styles.welcomeButton}>
                <Image style={{height: 25, width: 25}} tintColor="#7ed3ff" source={require('../assets/images/gloves.png')} />
              </TouchableOpacity>
              <Text style={styles.welcomeButtonText}>Challenge</Text>
            </View>
          </View>

        </View>

        <ScrollView
          style={styles.container}
          scrollEventThrottle={1}
          contentContainerStyle={styles.contentContainer}
          ref="scrollView"
        >

          {/* Tabs for Progress and Matches */}
          <HomeTabs />

          {/* Stat Center */}
          <View style={{ backgroundColor: '#f8f8f8', marginTop: 10 }}>
            <View style={{
              margin: 10, backgroundColor: '#fff', borderRadius: 15,
            }}>
              <TouchableOpacity style={{ flex: 1, padding: 20 }}>
                <View style={styles.getStartedContainer}>
                  <Text style={[styles.getStartedText, { color: '#333' }]}>Stat Center</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 0.3 }}>
                    <Text style={{ color: '#333', fontSize: 26, fontWeight: 'bold' }}>
                      {!this.props.loading && this.props.userDetails ? `${this.props.userDetails.statistics.won_games}-${this.props.userDetails.statistics.lost_games}` : '0-0'}
                    </Text>
                    <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold' }}>Record</Text>
                  </View>

                  <View style={{ flex: 0.3 }}>
                    <Text style={{ color: '#333', fontSize: 26, fontWeight: 'bold' }}>
                      {!this.props.loading && this.props.userDetails ? this.props.userDetails.statistics.win_percent : '0'}%
                    </Text>
                    <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold' }}>Win %</Text>
                  </View>

                  <View style={{ flex: 0.3 }}>
                    <Text style={{ color: '#333', fontSize: 26, fontWeight: 'bold' }}>
                      ${!this.props.loading && this.props.userDetails ? this.props.userDetails.statistics.net_gain : '0.00'}
                    </Text>
                    <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold' }}>Net Gain</Text>
                  </View>

                  <View style={{ flex: 0.1 }}>
                    <Entypo name={'chevron-with-circle-right'} size={30} color={'#333'} />
                  </View>

                </View>

              </TouchableOpacity>
            </View>
          </View>

          {/* Standings */}
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
              <Text style={{ color: '#333', fontWeight: 'bold', fontSize: 20, marginRight: 10 }}>Standings</Text>
              <MaterialCommunityIcons name={'information'} size={20} color={'#333'} />
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Feather name={'search'} size={20} color={'#333'} />
              </View>
            </View>


            <GameTabs standings={this.props.standings} />


          </View>

        </ScrollView>
      </View>
    );
  }
}


HomeScreen.navigationOptions = {
  header: null,
};

HomeScreen.propTypes = {
  loggedInUser: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  csrfToken: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  userDetails: PropTypes.object.isRequired,
  // stats: PropTypes.object.isRequired,
  standings: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    userDetails: state.userDetails,
    csrfToken: state.auth.csrfToken,
    loggedInUser: state.auth.loggedInUser,
    loggedIn: state.auth.loggedIn,
    // stats: state.stats,
    standings: state.standings,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadUserDetails: bindActionCreators(userActions.loadUserDetails, dispatch),
      // loadStats: bindActionCreators(statsActions.loadStats, dispatch),
      loadStandings: bindActionCreators(standingsActions.loadStandings, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  alignCenter: {
    flex: 1,
    alignItems: 'center'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {

  },
  welcomeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeContainerHeader: {
    flex: 0.4,
    justifyContent: 'center'
  },
  welcomeHeader: {
    color: '#888',
    fontSize: 18
  },
  welcomeBalance: {
    color: '#333',
    fontSize: 24,
  },
  welcomeButtonContainer: {
    flex: 0.6,
    alignItems: 'flex-end',
    flexDirection: "row"
  },
  welcomeButton: {
    height: 50,
    width: 50,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: '#eee',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  welcomeButtonText: {
    color: '#888',
    fontSize: 8,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#333',
    fontWeight: 'bold',
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
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  card: {
    height: 100,
    padding: 15,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333'
  },
  cardSubText: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#888',
    textTransform: 'uppercase'
  }
});
