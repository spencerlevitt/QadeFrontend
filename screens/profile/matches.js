import React from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    View,
} from 'react-native';
import Constants from 'expo-constants';
import NavigationService from '../../navigation/NavigationService';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { EvilIcons, AntDesign, Feather, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as userActions from '../../redux/actions/userActions';
import * as finishedGamesActions from '../../redux/actions/finishedGamesActions';
import { withPolling } from "../../redux/polling/withPolling";


class Matches extends React.Component {
    componentWillMount() {
        this.props.actions.loadFinishedGames(this.props.loggedInUser.user.pk, this.props.csrfToken)
            .catch((e) => {
                console.error(e);
            });
    }

    render() {
        const games = {
            'FIF': 'FIFA 19',
            'NBA': 'NBA 2K19',
            'MAD': 'MADDEN 19',
            'NHL': 'NHL 19'
        };
        
        return (
            <View style={styles.container}>
                <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight, marginBottom: 25 }}>
                    <TouchableOpacity onPress={() => NavigationService.navigate("Profile")} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <EvilIcons name={'close-o'} size={50} color={'#888'} />
                    </TouchableOpacity>
                    <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Image source={this.props.userDetails.profile.photo_url.length ? { uri: 'this.props.userDetails.profile.photo_url' } : require('../../assets/man.png')} style={{ height: 80, width: 80, borderRadius: 5, marginBottom: -15 }} />
                    </View>
                    <View style={{ flex: 0.2 }}>
                    </View>
                </View>
    
                <ScrollView >
    
                    <Text style={{ marginLeft: 20, color: '#333', fontSize: 20, textAlign: 'center' }}>
                        My Matches
                    </Text>

                    {!this.props.finishedGames.isFetchingFinishedGames && this.props.finishedGames.length
                        ?   this.props.finishedGames.map((finishedGame, idx) => 
                                <View key={idx} style={{ marginTop: 40, flexDirection: 'row', paddingHorizontal: 20 }}>
                                    <Image source={finishedGame.winner.profile.photo_url.length ? { uri: finishedGame.winner.profile.photo_url } : require('../../assets/man.png')} style={{ height: 40, width: 40, borderRadius: 5, marginRight: 15 }} />
                                    <View style={{ flex: 1, paddingBottom: 15, borderBottomColor: '#eee', borderBottomWidth: 1 }}>
                
                
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                
                                            <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>
                                                        {`${finishedGame.winner.first_name} ${finishedGame.winner.last_name}`}
                                                    </Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={{ flex: 1 }}>
                                                            <Text style={{ color: '#888', textAlign: 'center' }}>
                                                                {`${finishedGame.winner.statistics.won_games}-${finishedGame.winner.statistics.lost_games}`}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                
                                            <View style={{ flex: 0.15 }}>
                                                <Text style={{ textAlign: 'center' }}>
                                                    beat
                                            </Text>
                                            </View>
                
                                            <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>
                                                    {`${finishedGame.loser.first_name} ${finishedGame.loser.last_name}`}
                                                    </Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={{ flex: 1 }}>
                                                            <Text style={{ color: '#888', textAlign: 'center' }}>
                                                            {`${finishedGame.loser.statistics.won_games}-${finishedGame.loser.statistics.lost_games}`}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                
                                            <View style={{ flex: 0.25 }}>
                                                <Text style={{ textAlign: 'center', fontSize: 10 }}>
                                                    21m | {games[finishedGame.game_played]}
                                                </Text>
                                            </View>
                
                                        </View>
                
                                        <View style={{ flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                
                                            <View style={{ flex: 0.25 }}>
                                                <Text style={{ fontSize: 12, textAlign: 'center' }}>
                                                    {finishedGame.winning_team}
                                                </Text>
                                            </View>
                
                                            <View style={{ flex: 0.25 }}>
                                                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                                                    {`${finishedGame.winning_score} - ${finishedGame.losing_score}`}
                                                </Text>
                
                                            </View>
                                            <View style={{ flex: 0.25 }}>
                                                <Text style={{ fontSize: 12, textAlign: 'center' }}>
                                                    {finishedGame.losing_team}
                                                </Text>
                                            </View>
                
                                            <View style={{ flex: 0.25 }}>
                                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                    <TouchableOpacity onPress={() => NavigationService.navigate("Match")} style={styles.welcomeButton}>
                                                        <Feather name={'share-2'} size={20} color={'#7ed3ff'} />
                                                    </TouchableOpacity>
                                                    <Text style={styles.welcomeButtonText}>See Match Stats</Text>
                                                </View>
                                            </View>
                
                                        </View>
                                    </View>
                                </View>
                            )
                        :   <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center', padding: 30 }}>
                                <Text style={{ color: '#333', fontWeight: 'bold', fontSize: 13 }}>Loading your matches...</Text>
                            </View>
                    }
                    
                </ScrollView>
            </View>
    
        )
    }
}


/*

With Data Provider (Example)

        To get the first name and last character for longer names

        var namesplit = data.name.split(" ")

        let name = null
        if(namesplit[0].length() > 8 || namesplit[1].length() > 8){
          name = namesplit[0] + " " + namesplit[1].charAt(0)
        }else{
          name = data.name
        }


        Data Provider

        <View style={{ marginTop: 40, flexDirection: 'row' }}>
          <Image source={{ uri: '{data.profilePic}' }} style={{ height: 40, width: 40, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 1, paddingBottom: 15, borderBottomColor: '#eee', borderBottomWidth: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333' }]}>{data.name}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: '#888' }}>{data.wins}-{data.losses}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.15 }}>
                <Text style={{ textAlign: 'center' }}>
                  beat
                </Text>
              </View>
              <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333' }]}>{data.loser}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: '#888' }}>{data.loserWin}-{data.loserLosses}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.25 }}>
                <Text style={{ textAlign: 'center', fontSize: 12 }}>
                  {data.gametime} | {data.game}
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <View style={{ flex: 0.35 }}>
                <Text style={{ textAlign: 'center' }}>{data.team1}</Text>
              </View>
              <View style={{ flex: 0.3 }}>
                <Text style={{ fontSize: 24, textAlign: 'center' }}>
                  {data.score1} - {data.score2}
              </Text>
              </View>
              <View style={{ flex: 0.35 }}>
                <Text style={{ textAlign: 'center' }}>{data.team2}</Text>
              </View>
            </View>
          </View>
        </View>



*/

Matches.navigationOptions = {
    header: null,
};

Matches.navigationOptions = {
    header: null,
  };
  
Matches.propTypes = {
    csrfToken: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    loggedInUser: PropTypes.object.isRequired,
    finishedGames: PropTypes.array.isRequired,
    isFetchingFinishedGames: PropTypes.bool.isRequired,
    userDetails: PropTypes.object.isRequired
};
  
function mapStateToProps(state) {
    return {
        csrfToken: state.auth.csrfToken,
        loading: state.apiCallsInProgress > 0,
        loggedInUser: state.auth.loggedInUser,
        finishedGames: state.finishedGames.games,
        isFetchingFinishedGames: state.finishedGames.isFetchingFinishedGames,
        userDetails: state.userDetails
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadUserDetails: bindActionCreators(userActions.loadUserDetails, dispatch),
            loadFinishedGames: bindActionCreators(finishedGamesActions.loadFinishedGames, dispatch),
        }
    };
}
  
export default withPolling()(connect(mapStateToProps, mapDispatchToProps)(Matches));

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
        fontSize: 6,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
});
