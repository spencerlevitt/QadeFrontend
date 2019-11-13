import React from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as userActions from '../../redux/actions/userActions'


//console.disableYellowBox = true

class CameraPre extends React.Component {

    geImageType (file, extOnly = false) {
		let extension = 'jpeg', _;

		try {
			[ _, extension ] = file.match(/\.(\w+)$/);
		}
		catch {
			extension = 'jpeg';
		}

        if (extOnly) {
            return extension;
        }
		return `image/${extension}`;
    };
    
    updateProfilePhoto = async () => {
        const { uri } = this.props.navigation.getParam('photoData');
        const data = new FormData();
        
        if (uri && uri.length ) {
            data.append('photo', {
                name: `photo.${this.geImageType(uri, true)}`,
                filename: `photo.${this.geImageType(uri, true)}`,
                type: this.geImageType(uri),
                uri:
                    Platform.OS === 'android' ? uri : uri.replace('file://', '')
            });
        }

        data.append('dob', this.props.userDetails.profile.dob);
        data.append('address', this.props.userDetails.profile.address);
        data.append('country', this.props.userDetails.profile.country);
        data.append('city', this.props.userDetails.profile.city);
        data.append('zip', this.props.userDetails.profile.zip);
        data.append('bio', this.props.userDetails.profile.bio);
        data.append('console', this.props.userDetails.profile.console);

        try {
            const response = await this.props.actions.updateProfile(this.props.loggedInUser.user.pk, data, this.props.csrfToken);


            if (response && response.updatedProfile && response.updatedProfile.status === 200) {
                this.props.navigation.navigate("Profile", { photo_uri: uri });
            }
        } catch (e) {
            console.error(e);
        };
    };

    render() {

        const { navigation } = this.props;
        const uri = navigation.getParam('photoData');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{height: Dimensions.get('window').height / 2, width: Dimensions.get('window').width / 2}} source={uri}/>
                <View style={{ flex: 0.35, justifyContent: 'flex-end', alignItems: 'center', paddingLeft: 100, paddingRight: 100 }}>
                        <Text style={{ fontSize: 22, color: '#333', marginBottom: 20 }}>Looking good?</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <EvilIcons name={'close-o'} size={60} color={'#e6685f'} />
                                </TouchableOpacity>

                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                {/* Handle the photo data verification process */}
                                <TouchableOpacity onPress={() => this.updateProfilePhoto()}>
                                    <EvilIcons name={'check'} size={60} color={'#5eb97e'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </View>
        );
    }
}

CameraPre.navigationOptions = {
    header: null,
};

CameraPre.propTypes = {
    csrfToken: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    loggedInUser: PropTypes.object.isRequired,
    userDetails: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        csrfToken: state.auth.csrfToken,
        loading: state.apiCallsInProgress > 0,
        loggedInUser: state.auth.loggedInUser,
        userDetails: state.userDetails
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        actions: {
            updateProfile: bindActionCreators(userActions.updateProfile, dispatch),
        }
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CameraPre);

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
