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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { EvilIcons, AntDesign, Feather, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as userActions from '../../redux/actions/userActions'
import * as authActions from '../../redux/actions/authActions'

class EditProfile extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            console2: this.props.userDetails.profile.console,
            first_name: this.props.loggedInUser.user.first_name,
            last_name: this.props.loggedInUser.user.lastname,
            photo_url: this.props.userDetails.profile.photo_url,
            bio: this.props.userDetails.profile.bio,
            photo: {
                uri: '',
            }
        }
    }

    _scrollToInput(reactNode) {
        // Add a 'scroll' ref to your ScrollView
        this.scroll.props.scrollToFocusedInput(reactNode)
    }

    onChangeInput = (e, type) => {
        this.setState({ [type]: e });
    };

    updateFirstOrLastName = async () => {
        if (this.state.first_name == '') {
            Alert.alert("Please enter your first name")
        } else if (this.state.last_name == '') {
            Alert.alert("Please enter your last name")
        } else {
            const payload = {
                first_name: this.state.first_name,
                last_name: this.state.last_name
            };

            try {
                const response = this.props.actions.updateFirstOrLastName(payload, this.props.csrfToken);

                if (response) {
                    // TODO: show toast here perhaps
                }
            } catch (e) {
                console.error(e);
            }
        }
    };

    updateProfile = async () => {
        const data = new FormData();
        
        if (this.state.photo.uri.length) {
            data.append('photo', {
                name: `photo.${this.geImageType(this.state.photo.uri, true)}`,
                filename: `photo.${this.geImageType(this.state.photo.uri, true)}`,
                type: this.geImageType(this.state.photo.uri),
                uri:
                    Platform.OS === 'android' ? this.state.photo.uri : this.state.photo.uri.replace('file://', '')
            });
        }

        data.append('dob', this.props.userDetails.profile.dob);
        data.append('address', this.props.userDetails.profile.address);
        data.append('country', this.props.userDetails.profile.country);
        data.append('city', this.props.userDetails.profile.city);
        data.append('zip', this.props.userDetails.profile.zip);
        data.append('bio', this.state.bio);
        data.append('console', this.state.console2);

        try {
            const response = await this.props.actions.updateProfile(this.props.userDetails.profile.id, data, this.props.csrfToken);

            if (response) {
                // TODO: show a toast here
            }
        } catch (e) {
            console.error(e);
        };
    };

    render() {

        return (
            <KeyboardAwareScrollView style={styles.container} innerRef={ref => {
                this.scroll = ref
            }}>

                <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight, marginBottom: 25 }}>

                    <View style={{ flex: 0.2 }}>

                    </View>

                    <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#333', fontSize: 22, textAlign: 'center' }}>
                            Edit Profile
                    </Text>
                    </View>
                    <TouchableOpacity onPress={() => NavigationService.navigate("Settings")} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <EvilIcons name={'close-o'} size={50} color={'#888'} />
                    </TouchableOpacity>



                </View>

                <View style={{marginBottom: 250}}>
                    <View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 40 }}>
                            <View style={{ flex: 0.4, borderBottomColor: '#888', borderBottomWidth: 1 }}>
                                <Text style={{ fontSize: 8, textTransform: 'uppercase', marginBottom: 5, }}>
                                    First Name
                                </Text>
                                <TextInput
                                    onFocus={(event: Event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                    }}
                                    onChangeText={e => this.onChangeInput(e, 'first_name')}
                                    onBlur={() => this.updateFirstOrLastName()}
                                    placeholder={this.props.loggedInUser.user.first_name ? this.props.loggedInUser.user.first_name : 'First Name'}
                                    placeholderTextColor={'#888'}>

                                </TextInput>
                            </View>
                            <View style={{ flex: 0.2 }}>

                            </View>
                            <View style={{ flex: 0.4 }}>
                                <View style={{ flex: 0.4, borderBottomColor: '#888', borderBottomWidth: 1 }}>
                                    <Text style={{ fontSize: 8, textTransform: 'uppercase', marginBottom: 5, }}>
                                        Last Name
                                    </Text>
                                    <TextInput
                                        onFocus={(event: Event) => {
                                            // `bind` the function if you're using ES6 classes
                                            this._scrollToInput((event.target))
                                        }}
                                        onChangeText={e => this.onChangeInput(e, 'last_name')}
                                        onBlur={() => this.updateFirstOrLastName()}
                                        placeholder={this.props.loggedInUser.user.last_name ? this.props.loggedInUser.user.last_name : 'Last Name'}
                                        placeholderTextColor={'#888'}>
                                    </TextInput>
                                </View>
                            </View>
                        </View>


                        <View style={{ marginBottom: 10, marginTop: 30, paddingHorizontal: 40 }}>
                            <Text style={{ fontSize: 8, textTransform: 'uppercase' }}>
                                Console
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginBottom: 40, paddingHorizontal: 40 }}>

                            <TouchableOpacity onPress={() => {
                                this.setState({console2: 1});
                                this.updateProfile();
                                }} style={{ flex: 1 / 3, margin: 5, padding: 5, backgroundColor: this.state.console2 == 1 ? '#fff' : '#69C0FF', borderRadius: 5, borderWidth: 2, borderColor: this.state.console2 == 1 ? '#888' : '#69C0FF', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: this.state.console2 == 1 ? '#888' : '#fff', fontSize: 10 }}>Xbox One</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.setState({console2: 2});
                                this.updateProfile();
                                }} style={{ flex: 1 / 3, margin: 5, padding: 5, backgroundColor: this.state.console2 == 2 ? '#fff' : '#69C0FF', borderRadius: 5, borderWidth: 2, borderColor: this.state.console2 == 2 ? '#888' : '#69C0FF', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: this.state.console2 == 2 ? '#888' : '#fff', fontSize: 10 }}>Playstation 4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.setState({console2: 0});
                                this.updateProfile();
                                }} style={{ flex: 1 / 3, margin: 5, padding: 5, backgroundColor: this.state.console2 == 0 ? '#fff' : '#69C0FF', borderRadius: 5, borderWidth: 2, borderColor: this.state.console2 == 0 ? '#888' : '#69C0FF', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: this.state.console2 == 0 ? '#888' : '#fff', fontSize: 10 }}>None</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ backgroundColor: '#F8F8F8', padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                style={{ backgroundColor: '#fff', width: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                                onPress={() => NavigationService.navigate('CameraPro')}>
                                <Image source={this.props.userDetails.profile.photo_url.length ? {uri: this.props.userDetails.profile.photo_url} : require('../../assets/man.png')} style={{ height: 60, width: 60, borderRadius: 5, margin: 15, marginHorizontal: 30 }} />
                                <Text style={{ color: '#333', fontSize: 22, textAlign: 'center' }}>
                                    Change Profile
                            </Text>
                                <EvilIcons name={'chevron-right'} size={40} color={'#888'} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ padding: 40 }}>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ fontSize: 8, textTransform: 'uppercase' }}>
                                    Short Bio
                                </Text>
                            </View>

                            <TextInput
                                onFocus={(event: Event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                }}
                                onChangeText={e => this.onChangeInput(e, 'bio')}
                                onBlur={() => this.updateProfile()}
                                style={{ borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 5, }}
                                placeholder={this.props.userDetails.profile.bio ? this.props.userDetails.profile.bio : 'Your short bio'}
                            >
                            </TextInput>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>

        );
    }
}

EditProfile.navigationOptions = {
    header: null,
};

EditProfile.propTypes = {
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
            loadUserDetails: bindActionCreators(userActions.loadUserDetails, dispatch),
            updateFirstOrLastName: bindActionCreators(authActions.updateFirstOrLastName, dispatch),
            updateProfile: bindActionCreators(userActions.updateProfile, dispatch),
        }
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

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
