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
 
class Landing extends React.Component {
 
     constructor(props) {
         super(props)
     }
 
    componentWillMount() {
        // TODO: could possibly get a new a token
        // this will always direct a logged-in user 
        // to the home screen until they log out and
        // clear state
        if (this.props.loggedInUser.token) {
            this.props.navigation.navigate('Main');
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: statusBarHeight }}>
                <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>
                        Welcome
                    </Text>
                    <Text style={{ fontSize: 14, textAlign: 'center' }}>
                        to the next generation of gaming.
                    </Text>
                </View>
                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ flex: 1, resizeMode: 'contain' }} source={require('../../assets/images/login.png')} />
                </View>

                <View style={{ flex: 0.5, padding: 20 }}>
                    <View style={{ width: '100%' }}>
                        <TouchableOpacity
                            style={{ backgroundColor: "#3A8FFF", height: 60, width: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => this.props.navigation.navigate("SignUp")}>
                            <Text style={{ color: '#fff', fontSize: 14 }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{textAlign: 'center'}}>Already have an account? <Text style={{color: '#3A8FFF'}}>Login</Text></Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

Landing.navigationOptions = {
    header: null,
};

Landing.propTypes = {
    csrfToken: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    loggedInUser: PropTypes.object.isRequired
};
  
function mapStateToProps(state) {
    return {
        csrfToken: state.auth.csrfToken,
        loading: state.apiCallsInProgress > 0,
        loggedInUser: state.auth.loggedInUser
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {}
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
