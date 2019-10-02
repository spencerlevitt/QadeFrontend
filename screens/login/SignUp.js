import React from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import SignUpForm from './SignupForm';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as authActions from '../../redux/actions/authActions';
import HttpStatus from 'http-status-codes';

class SignUp extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {}

    signUp = async (signUpData) => {
        const { actions } = this.props;
        
        // Transform data to suitable payload for Axios API call
        this.state = {
            ...signUpData,
            profile: {
                dob: signUpData.dob,
                address: '',
                country: 'US', // TODO: Confirm if US should be default
                city: '',
                zip: '',
                // photo: '',   TODO: Create upload image for photo
                bio: '',
                console: 2  // TODO: Confirm if PS4 should be default
            }
        };

        try {
            const response = await actions.signupUser(this.state, this.props.csrfToken);

            if (response && response.signedUpUser.status === HttpStatus.CREATED) {
                this.props.navigation.navigate('SignupEmailConfirmation');
            } else if (this.props.hasError) {
                alert(`Sign Up failed: ${this.props.errorMessage.message}`);
            }
        } catch (error) {
            console.log('Error:', error);
            alert(error);
        }
    };

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingTop: Constants.statusBarHeight }}>
                <View style={{ height: 60, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: '#333' }}>
                        Sign Up
                    </Text>
                </View>
                
                <SignUpForm onSubmit={this.signUp} />

                <TouchableOpacity
                    style={{marginBottom: 40,}}
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={{ textAlign: 'center' }}>Have an account? <Text style={{ color: '#3A8FFF' }}>Click here</Text></Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}

SignUp.navigationOptions = {
    header: null,
};

SignUp.propTypes = {
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
        signupUser: bindActionCreators(authActions.signupUser, dispatch)
    }
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
  