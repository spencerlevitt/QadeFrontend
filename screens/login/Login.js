import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { EvilIcons } from 'react-native-vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import Constants from '../../constants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as authActions from '../../redux/actions/authActions';
import HttpStatus from 'http-status-codes';
import * as _ from 'lodash';

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        toggle: true,
        username: '',
        password: ''
    };

    onChangeLogin = (e, type) => {
        this.setState({ [type]: e });
    };

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    onLogin = async () => {
        const { actions } = this.props;

        if (!this.state.username && !this.state.password) {
            alert('Please enter your email address and password');
        } else if (!this.state.username) {
            alert('Please enter your email address');
        } else if (this.state.username && !this.validateEmail(this.state.username)) {
            alert('Please enter a valid email address');
        } else if (!this.state.password) {
            alert('Please enter your password');
        } else {
            try {
                const response = await actions.loginUser(
                    this.state.username,
                    this.state.password,
                    this.props.csrfToken
                );
                
                if (response && !response.csrfTokenData) {
                    if (response.loggedInUser && response.loggedInUser.status === HttpStatus.OK && this.props.loggedIn) {
                        const routes = this.props.navigation.dangerouslyGetParent().state.routes;
                        if(_.some(routes, { routeName: 'Profile' })) {
                            this.props.navigation.navigate('Profile');
                        } else {
                            this.props.navigation.navigate('Main');
                        }
                    } else if (this.props.hasError) {
                        alert(`Login failed: ${this.props.errorMessage.message}`);
                    }
                }
            } catch (error) {
                console.error(error);
            }   
        }
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: statusBarHeight }}>
                <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: '#666' }}>
                        Login Now
                    </Text>
                    <Text style={{ fontSize: 14, textAlign: 'center', color: '#666', marginTop: 15 }}>
                        Please login to continue using our app.
                    </Text>
                </View>
                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <TextInput
                        onChangeText={e => this.onChangeLogin(e, 'username')}
                        style={{ backgroundColor: "#fff", height: 60, width: '100%', borderRadius: 5, borderColor: '#E2E6EA', borderWidth: 1, paddingLeft: 15 }}
                        placeholder={'Email'} 
                        textContentType={'emailAddress'}
                        keyboardType={'email-address'}>
                    </TextInput>

                    <TextInput 
                        onChangeText={e => this.onChangeLogin(e, 'password')}
                        style={{ backgroundColor: "#fff", height: 60, width: '100%', borderRadius: 5, borderColor: '#E2E6EA', borderWidth: 1, paddingLeft: 15, marginTop: 15 }}
                        secureTextEntry
                        placeholder={'Password'}>
                    </TextInput>
                </View>

                <View style={{ flex: 0.1, flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>
                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ toggle: !this.state.toggle })}>
                        <View style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 25, borderColor: '#3C82FF', borderWidth: 1 }}>
                            <View style={{ height: '80%', aspectRatio: 1, backgroundColor: this.state.toggle == true ? '#3C82FF' : '#fff', borderRadius: 25 }}></View>
                        </View>
                        <Text style={{ paddingLeft: 8 }}>Remember me</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }} onPress={() => this.props.navigation.navigate("Login4")}>
                        <Text style={{ paddingLeft: 8, textAlign: 'right' }}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 0.3, padding: 20 }}>
                    <View style={{ width: '100%' }}>
                        <TouchableOpacity onPress={() => this.onLogin()} style={{ backgroundColor: "#3A8FFF", height: 60, width: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 14 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{ marginTop: 20 }}
                        onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={{ textAlign: 'center' }}>Don't have an account? <Text style={{ color: '#3A8FFF' }}>Sign Up</Text></Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

Login.navigationOptions = {
    header: null,
};

Login.propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
    hasError: PropTypes.bool.isRequired,
    csrfToken: PropTypes.string.isRequired,
    errorMessage: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.auth.loggedInUser,
        loggedIn: state.auth.loggedIn,
        csrfToken: state.auth.csrfToken,
        hasError: state.auth.hasError,
        errorMessage: state.auth.errorMessage,
        loading: state.auth.apiCallsInProgress > 0
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: {
        loginUser: bindActionCreators(authActions.loginUser, dispatch)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
