import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";
import { ScrollView } from 'react-native-gesture-handler';
import NavigationService from '../../navigation/NavigationService';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as gameRequestsActions from '../../redux/actions/gameRequestsActions';
import { withPolling } from "../../redux/polling/withPolling";
import { NavigationEvents } from "react-navigation";
// import { getLocation } from "../../components/geolocation/location";

class Pending extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            true: false
        }
    }

    getLocation = () => {
        return '41.8339042,-88.0121586';    // TODO navigation library fix
    };

    acceptGameRequest = async (idx, pendingGame) => {
        const { csrfToken } = this.props;
        const { id } = pendingGame;
        const location = this.getLocation();
        
        try {
            const response = await this.props.actions.acceptGameRequest(id, location, csrfToken);

            if (response && response.acceptedGameRequest.status === 200 && response.acceptedGameRequest.data.accepted_at) {
                // Update state of game request to show reminder
                // and reset just incase that same game request
                // is rejected by sender
                this.setState({ [idx]: 1 });
                setTimeout(() => {
                    this.setState({ [idx]: 2 });
                }, 15000);
            }
        } catch (error) {
            if (this.props.hasError) {
                alert(`Accept game request failed: ${this.props.errorMessage.message}`);
            }
            console.log(error);
        }
    };

    rejectGameRequest = async (idx, pendingGame) => {
        const { csrfToken  } = this.props;
        const { id } = pendingGame;
        
        try {
            const response = await this.props.actions.rejectGameRequest(id, csrfToken);
        } catch (error) {
            if (this.props.hasError) {
                alert(`Reject game request failed: ${this.props.errorMessage.message}`);
            }
            console.log(error);
        }
    };

    componentDidMount() {
        this.props.actions.loadPendingGameRequests(this.props.loggedInUser.user.pk, this.props.csrfToken)
            .catch(error => {
                alert('Loading pending game requests failed' + error);
            });
    }

    render() {
        if (!this.props.isFetchingPendingGameRequests && !this.props.pendingGameRequests.length) {
            return (
                <View style={{ flex: 1, alignItems: 'center', padding: 30 }}>
                    <NavigationEvents
                        onDidFocus={() => {
                            this.props.actions.loadPendingGameRequests(this.props.loggedInUser.user.pk, this.props.csrfToken)
                                .catch(error => {
                                    alert('Loading pending game requests failed' + error);
                                });

                            this.props.actions.loadAcceptedGameRequests(this.props.loggedInUser.user.pk, this.props.csrfToken)
                                .catch(error => {
                                    alert('Loading accepted game requests failed' + error);
                                });
                        }}
                    />
                    <Text style={{ fontSize: 18, color: '#888', textAlign: 'center' }}>You have no pending match requests. Challenge somebody to get started!</Text>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => NavigationService.navigate('Challenge')} style={{
                            marginTop: 20,
                            height: 60,
                            width: 60,
                            borderRadius: 80,
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
                        }}>
                            <Image style={{ height: 30, width: 30 }} tintColor="#7ed3ff" source={require('../../assets/images/gloves.png')} />
                        </TouchableOpacity>
                        <Text style={{
                            color: '#888',
                            fontSize: 14,
                            textTransform: 'uppercase',
                        }}>Challenge</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View>
                        {this.pendingGameRequests()}
                    </View>
                </ScrollView>
            )
        }
    }

    pendingGameRequests = () => {
        return this.props.pendingGameRequests.map((pendingGame, idx) => {
            if (this.state[idx] != 1 && this.state[idx] != 2) {
                return (
                    <View key={idx+'eqqw'} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.3 }}>
                                <Text style={[{ fontSize: RFPercentage(2) }]}>
                                    {`${pendingGame.first_name} ${pendingGame.last_name}`}
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: '#888' }}>
                                            {`${pendingGame.won_games}-${pendingGame.lost_games}`}
                                        </Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                        <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                                            <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>
                                                {pendingGame.time_left}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>
                                    {pendingGame.game}
                                </Text>
                            </View>

                            <View style={{ flex: 0.17 }}>
                                <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>
                                    ${pendingGame.wager}
                                </Text>
                            </View>

                            <View style={{ flex: 0.28, flexDirection: 'row' }}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => this.rejectGameRequest(idx, pendingGame)}>
                                        <EvilIcons name={'close-o'} size={35} color={'#e6685f'} />
                                    </TouchableOpacity>

                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => this.acceptGameRequest(idx, pendingGame)}>
                                        <EvilIcons name={'check'} size={35} color={'#5eb97e'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            } else if(this.state[idx] == 1){
                return (
                    <View key={idx+'erwe'} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#888', fontSize: 12, paddingLeft: 5, paddingRight: 5 }}>Game Accepted</Text>
                            </View>

                            <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
                                <EvilIcons name={'check'} size={35} color={'#5eb97e'} />
                            </View>

                            <View style={{ flex: 0.5 }}>
                                <Text style={{ color: '#888', fontSize: 12, paddingLeft: 5, paddingRight: 5 , textAlign: 'center' }}>
                                    Don't quit the match before submitting your results!
                                </Text>
                            </View>
                        </View>
                    </View>
                )
            }else{
                return (
                    <View key={idx+'3rer'}>
                    </View>
                )
            }
        })
    }
}

Pending.propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    csrfToken: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    pendingGameRequests: PropTypes.array.isRequired,
    isFetchingPendingGameRequests: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
};
  
function mapStateToProps(state) {
    return {
      pendingGameRequests: state.gameRequests.pendingGameRequests,
      isFetchingPendingGameRequests: state.gameRequests.isFetchingPendingGameRequests,
      csrfToken: state.auth.csrfToken,
      loggedInUser: state.auth.loggedInUser,
      loading: state.apiCallsInProgress > 0,
      hasError: state.gameRequests.hasError,
      errorMessage: state.gameRequests.errorMessage,
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: {
        loadPendingGameRequests: bindActionCreators(gameRequestsActions.loadPendingGameRequests, dispatch),
        loadAcceptedGameRequests: bindActionCreators(gameRequestsActions.loadAcceptedGameRequests, dispatch),
        acceptGameRequest: bindActionCreators(gameRequestsActions.acceptGameRequest, dispatch),
        rejectGameRequest: bindActionCreators(gameRequestsActions.rejectGameRequest, dispatch)
      }
    };
}

export default withPolling(gameRequestsActions.loadPendingGameRequests)(connect(mapStateToProps, mapDispatchToProps)(Pending));
