import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
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

class Requests extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { friendRequests, loggedInUser, csrfToken, actions } = this.props;
        
        // if (!friendRequests.pendingFriends.length && loggedInUser.user.pk) {
        actions.loadFriendRequests(loggedInUser.user.pk, loggedInUser.user.email, csrfToken).catch(error => {
            alert('Loading friend requests failed' + error);
        });
        // }
    }

    onAcceptRequest = (friendRequest) => {
        this.props.actions.acceptFriendRequest(friendRequest.id, 1, this.props.csrfToken);
        alert(`You are now friends with ${friendRequest.first_name} ${friendRequest.last_name}`);
    };

    onRejectRequest = (friendRequest) => {
        this.props.actions.rejectFriendRequest(friendRequest.id, 2, this.props.csrfToken);
        alert(`You have rejected the friend request from ${friendRequest.first_name} ${friendRequest.last_name}`);
    };

    render() {
        if (!this.props.friendRequests.isFetchingFriendRequests && this.props.friendRequests.pendingFriends.length) {
            return (
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                    {
                        this.props.friendRequests.pendingFriends.map((friendRequest, idx) => 
                            <View key={idx} style={{ height: 80, justifyContent: 'center', paddingHorizontal: 40 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                                    <View style={{ flex: 0.5 }}>
                                        <Text style={[{ fontSize: 16 }]}>
                                            {`${friendRequest.first_name} ${friendRequest.last_name}`}
                                        </Text>
                                    </View>

                                    <View style={{ flex: 0.5, flexDirection: 'row' }}>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <TouchableOpacity onPress={() => this.onRejectRequest(friendRequest)}>
                                                <EvilIcons name={'close-o'} size={35} color={'#e6685f'} />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                            <TouchableOpacity onPress={() => this.onAcceptRequest(friendRequest)}>
                                                <EvilIcons name={'check'} size={35} color={'#5eb97e'} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }
            </ScrollView>
            )
        } else if (!this.props.friendRequests.isFetchingFriendRequests && !this.props.friendRequests.length) {
            return (
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View>
                        <View style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>
                                        You do not have any friend requests.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            )
        } else if (this.props.friendRequests.isFetchingFriendRequests) {
            return (
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View>
                        <View style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>
                                        Loading friend requests...
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

Requests.navigationOptions = {
    header: null,
};
  
Requests.propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    csrfToken: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    friendRequests: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
};
  
function mapStateToProps(state) {
    return {
      friendRequests: state.friendRequests,
      csrfToken: state.auth.csrfToken,
      loggedInUser: state.auth.loggedInUser,
      loading: state.apiCallsInProgress > 0
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: {
        loadFriendRequests: bindActionCreators(friendRequestActions.loadFriendRequests, dispatch),
        acceptFriendRequest: bindActionCreators(friendRequestActions.acceptFriendRequest, dispatch),
        rejectFriendRequest: bindActionCreators(friendRequestActions.rejectFriendRequest, dispatch),
      }
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Requests);
