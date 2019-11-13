import React from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Constants from '../../constants';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { RFPercentage } from "react-native-responsive-fontsize";
import * as scoreConfirmationActions from "../../redux/actions/scoreConfirmationActions";
import * as scoreDisputeActions from "../../redux/actions/scoreDisputeActions";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import axios from 'axios';
//console.disableYellowBox = true

class Submit extends React.Component {

    getLocation = () => {
        return '41.8339042,-88.0121586';    // TODO navigation library fix
    };

    confirmScore = async (scoreConfirmation) => {
        const loggedInUser = this.props.navigation.getParam('loggedInUser');
        const csrfToken = this.props.navigation.getParam('csrfToken');

        const rec_id = loggedInUser.user.pk === scoreConfirmation.winner_id ? 
        scoreConfirmation.loser_id : scoreConfirmation.winner_id;
        
        let payload = {
            status: 1,
            location: this.getLocation(),
            user: loggedInUser.user.pk
        };
      //  console.log(payload);
       console.log(scoreConfirmation);
      //  console.log(rec_id);
      //  console.log(loggedInUser);
        try {
            const response = await this.props.actions.acceptScoreConfirmation(scoreConfirmation.id, loggedInUser.user.email, payload, csrfToken)
                .catch(error => {
                    alert('Score confimation failed' + error);
                });;   

            console.log('score confirm response', response);
            
            if (response) {
               axios.post(socketBaseUrl+'/socket', {
                  message:`${loggedInUser.user.first_name} has confirmed the game results `,
                  event:'gameConfirm',
                  sender_id: loggedInUser.user.pk,
                  user_id: rec_id,
                     });
                this.props.navigation.navigate("ScoreA");
            }
        } catch (error) {
            console.error(error);
        }
    };

    disputeScore = async (scoreConfirmation) => {
        const loggedInUser = this.props.navigation.getParam('loggedInUser');
        const csrfToken = this.props.navigation.getParam('csrfToken');
        const rec_id = loggedInUser.user.pk === scoreConfirmation.winner_id ? 
        scoreConfirmation.loser_id : scoreConfirmation.winner_id;
        const payload = {
            user_id: loggedInUser.user.pk,
            game_id: scoreConfirmation.id,
            comment: "",
            // image: scoreConfirmation.game_image_url,
        };

        try {
            const response = await this.props.actions.disputeScoreConfirmation(payload, loggedInUser.user.email, csrfToken);
            
            if (response) {
                axios.post(socketBaseUrl+'/socket', {
                  message:`${loggedInUser.user.first_name} has confirmed the game results `,
                  event:'gameDispute',
                  sender_id: loggedInUser.user.pk,
                  user_id: rec_id,
                     });
                this.props.navigation.navigate("ScoreB");
            }
        } catch (error) {
            console.error(error);
        }
    };

    render() {

        const { navigation } = this.props;
        const loggedInUser = navigation.getParam('loggedInUser');
        let scoreConfirmation = navigation.getParam('scoreConfirmation');
        let game_image_url = ""; 
        switch (scoreConfirmation.game_played) {
            case "FIFA":
                game_image_url = scoreConfirmation.FIFA19MatchData.image_url;
                break;

            case "MAD":
                game_image_url = scoreConfirmation.Madden19MatchData.image_url;
                break;

            case "NBA":
                game_image_url = scoreConfirmation.NBA19MatchData.image_url;
                break;

            case "NHL":
                game_image_url = scoreConfirmation.NHL19MatchData.image_url;
                break;
            
            default:
                break;
            }

        const win_or_loss = scoreConfirmation.winner.email === loggedInUser.user.email ? 'Won' : 'Lost';
        scoreConfirmation = {
            id: scoreConfirmation.id,
            opp_first_name: win_or_loss === 'Won' ? scoreConfirmation.loser.first_name : scoreConfirmation.winner.first_name,
            opp_last_name: win_or_loss === 'Won' ? scoreConfirmation.loser.last_name : scoreConfirmation.winner.last_name,
            opp_photo_url: win_or_loss === 'Won' ? scoreConfirmation.loser.profile.photo_url : scoreConfirmation.winner.profile.photo_url,
            wager_amount: scoreConfirmation.wager_amount, 
            status: scoreConfirmation.status,
            game_played: scoreConfirmation.game_played,
            game_image_url,
            win_or_loss,
            winner_id: scoreConfirmation.winner.profile.id,
            loser_id: scoreConfirmation.loser.profile.id,
        };

        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 110 + statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: statusBarHeight }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#333', fontSize: 20 }}>Score Confirmation</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 20 }}>
                        <Text style={{ fontSize: 16, color: '#333', textAlign: 'center', fontWeight: 'bold' }}>Opponent</Text>
                    </View>
                    <View style={{ flex: 0.1, paddingLeft: 100, paddingRight: 100 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <Image 
                           source={scoreConfirmation &&
                              scoreConfirmation.opp_photo_url &&
                              scoreConfirmation.opp_photo_url.length ? 
                              {uri: scoreConfirmation.opp_photo_url} : 
                              require('../../assets/man.png')} 
                            style={{ height: 60, width: 60, borderRadius: 5, marginRight: 15 }} 
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.cardText, { fontSize: RFPercentage(2.4), fontWeight: 'bold', color: '#333' }]}>
                                    {scoreConfirmation.opp_first_name ? `${scoreConfirmation.opp_first_name} ${scoreConfirmation.opp_last_name}` : ''}
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: '#888' }}>{scoreConfirmation.game_played ? scoreConfirmation.game_played : ''}</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: '#888' }}>${scoreConfirmation.wager_amount ? scoreConfirmation.wager_amount : '0.00'}</Text>
                                    </View>
                                </View>

                            </View>


                        </View>
                    </View>
                    <View style={{ flex: 0.35, justifyContent: 'flex-end', alignItems: 'center', paddingLeft: 50, paddingRight: 50 }}>
                        <Text style={{ fontSize: 18, color: '#333', marginBottom: 20 }}>
                            {scoreConfirmation.opp_last_name ? `${scoreConfirmation.opp_last_name}'s` : 'Unknown User\'s'} Submission: You {win_or_loss}
                        </Text>
                        <Text style={{ fontSize: 18, color: '#333', marginBottom: 20 }}>Is this correct?</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.disputeScore(scoreConfirmation)}>
                                    <EvilIcons name={'close-o'} size={60} color={'#e6685f'} />
                                </TouchableOpacity>

                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.confirmScore(scoreConfirmation)}>
                                    <EvilIcons name={'check'} size={60} color={'#5eb97e'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'flex-end', padding: 10}}>

                        <Text style={{ fontSize: 14, color: '#333', textAlign: 'center' }}>You may not enter the app until you confirm or deny your opponent's submission.</Text>

                    </View>
                    <View style={{ flex: 0.25, justifyContent: 'flex-end', padding: 30 }}>
                        <Text style={{ color: '#ccc', fontSize: 10 }}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        {'\n'}quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        {'\n'}Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

Submit.navigationOptions = {
    header: null,
};

Submit.propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    csrfToken: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
};
  
function mapStateToProps(state) {
    return {
      csrfToken: state.auth.csrfToken,
      loggedInUser: state.auth.loggedInUser,
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: {
        acceptScoreConfirmation: bindActionCreators(scoreConfirmationActions.acceptScoreConfirmation, dispatch),
        disputeScoreConfirmation: bindActionCreators(scoreDisputeActions.disputeScoreConfirmation, dispatch)
      }
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Submit);

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
