import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    View,
} from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";
import { ScrollView } from 'react-native-gesture-handler';
import NavigationService from '../../navigation/NavigationService';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as friendRequestActions from '../../redux/actions/friendRequestActions';
import { withPolling } from "../../redux/polling/withPolling";

class Friends extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { acceptedFriends, csrfToken, actions } = this.props;
        
        // if (!friendRequests.pendingFriends.length && loggedInUser.user.pk) {
        actions.loadAcceptedFriends(csrfToken).catch(error => {
            alert('Loading accepted friends failed' + error);
        });
        // }
    }

    render() {
        if (!this.props.isFetchingAcceptedFriends && this.props.acceptedFriends.length) {
            return (
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ marginTop: 30, marginHorizontal: 30, }}>
                        <TextInput style={{ height: '100%', height: 30, borderRadius: 30, borderWidth: 1, borderColor: '#E5E5E5', paddingLeft: 15 }} placeholder={'Filter by opponents'}>
                        </TextInput>
                    </View>

                    {
                        this.props.acceptedFriends.map((friend, idx) => 
                            <View key={idx} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                                    <Image source={!friend.photo_url.length ? require('../../assets/images/profilePicture.png') : { uri: friend.photo_url }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                                    <View style={{ flex: 0.5 }}>
                                        <Text style={[{ fontSize: 16 }]}>
                                        {`${friend.first_name} ${friend.last_name}`}
                                        </Text>
                                    </View>

                                    <View style={{ flex: 0.5 }}>
                                        <View style={{ height: 15 }}>
                                            <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ fontSize: 16, textAlign: 'center' }}>{`${friend.won_games}-${friend.lost_games}`}</Text>
                                                <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ fontSize: 16, textAlign: 'center' }}>{friend.win_percent}</Text>
                                                <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                </ScrollView>
            )
        } else if (!this.props.isFetchingAcceptedFriends && !this.props.acceptedFriends.length) {
            return (
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View>
                        <View style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>
                                        You do not have any friends yet.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            )
        } else if (this.props.isFetchingAcceptedFriends) {
            return (
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View>
                        <View style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>
                                        Loading friends...
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            )
        }
    }
}

Friends.propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    csrfToken: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    acceptedFriends: PropTypes.array.isRequired,
    isFetchingAcceptedFriends: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
};
  
function mapStateToProps(state) {
    return {
      acceptedFriends: state.friendRequests.acceptedFriends,
      isFetchingAcceptedFriends: state.friendRequests.isFetchingAcceptedFriends,
      csrfToken: state.auth.csrfToken,
      loggedInUser: state.auth.loggedInUser,
      loading: state.apiCallsInProgress > 0
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: {
        loadAcceptedFriends: bindActionCreators(friendRequestActions.loadAcceptedFriends, dispatch)
      }
    };
}
  
export default withPolling(friendRequestActions.loadAcceptedFriends)(connect(mapStateToProps, mapDispatchToProps)(Friends));
