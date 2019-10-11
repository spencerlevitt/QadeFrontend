import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";
import { ScrollView } from 'react-native-gesture-handler';
import NavigationService from '../../navigation/NavigationService';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as gameRequestsActions from '../../redux/actions/gameRequestsActions';
import { withPolling } from "../../redux/polling/withPolling";

class Accepted extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            true: true
        }
    }

    render() {
        if (!this.props.isFetchingAcceptedGameRequests && !this.props.acceptedGameRequests.length) {
            return (
                <View style={{ flex: 1, alignItems: 'center', padding: 30 }}>
                    <Text style={{ fontSize: 18, color: '#888', textAlign: 'center' }}>You have no accepted matches. Challenge somebody to get started!</Text>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => NavigationService.navigate('Challenge')} style={{
                            marginTop: 20,
                            height:60,
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
                        {
                            this.props.acceptedGameRequests.map((acceptedGame, idx) =>
                                <View key={idx} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                        <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                                        <View style={{ flex: 0.3 }}>
                                            <Text style={[{ fontSize: RFPercentage(2) }]}>
                                                {`${acceptedGame.first_name} ${acceptedGame.last_name}`}
                                            </Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={{ color: '#888' }}>
                                                    {`${acceptedGame.won_games}-${acceptedGame.lost_games}`}
                                                    </Text>
                                                </View>
                                                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                                    <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                                                        <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>
                                                            {acceptedGame.time_left}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>

                                        </View>
                                        <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>
                                                {acceptedGame.game}
                                            </Text>
                                        </View>

                                        <View style={{ flex: 0.17 }}>
                                            <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>
                                                ${acceptedGame.wager}
                                            </Text>
                                        </View>

                                        <TouchableOpacity
                                            style={{ flex: 0.28, alignItems: 'center' }}
                                            onPress={() => NavigationService.navigate('Submit', {'Game': acceptedGame.game})}>
                                            <View style={{ flex: 1, alignItems: 'center' }}>
                                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                    <AntDesign name={'download'} size={18} color={'#74c3ff'} />
                                                </View>
                                                <View style={{ flex: 1, alignItems: 'center'}}>
                                                    <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                    </View>
                </ScrollView>
            )
        }
    }
}

Accepted.propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    csrfToken: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    acceptedGameRequests: PropTypes.array.isRequired,
    isFetchingAcceptedGameRequests: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
};
  
function mapStateToProps(state) {
    return {
      acceptedGameRequests: state.gameRequests.acceptedGameRequests,
      isFetchingAcceptedGameRequests: state.gameRequests.isFetchingAcceptedGameRequests,
      csrfToken: state.auth.csrfToken,
      loggedInUser: state.auth.loggedInUser,
      loading: state.apiCallsInProgress > 0
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: {
        loadAcceptedGameRequests: bindActionCreators(gameRequestsActions.loadAcceptedGameRequests, dispatch),
      }
    };
}

export default withPolling(gameRequestsActions.loadAcceptedGameRequests)(connect(mapStateToProps, mapDispatchToProps)(Accepted));
