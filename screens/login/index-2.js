import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export default class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        toggle: true
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: Constants.statusBarHeight }}>
                <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: '#666' }}>
                        Login Now
                    </Text>
                    <Text style={{ fontSize: 14, textAlign: 'center', color: '#666', marginTop: 15 }}>
                        Please login to continue using our app.
                    </Text>
                </View>
                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <TextInput style={{ backgroundColor: "#fff", height: 60, width: '100%', borderRadius: 5, borderColor: '#E2E6EA', borderWidth: 1, paddingLeft: 15 }} placeholder={'Email'} >
                    </TextInput>

                    <TextInput style={{ backgroundColor: "#fff", height: 60, width: '100%', borderRadius: 5, borderColor: '#E2E6EA', borderWidth: 1, paddingLeft: 15, marginTop: 15 }} secureTextEntry placeholder={'Password'} >
                    </TextInput>
                </View>

                <View style={{ flex: 0.1, flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ toggle: !this.state.toggle })}>
                        <View style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 25, borderColor: '#3C82FF', borderWidth: 1 }}>
                            <View style={{ height: '80%', aspectRatio: 1, backgroundColor: this.state.toggle == true ? '#3C82FF' : '#fff', borderRadius: 25 }}></View>
                        </View>
                        <Text style={{paddingLeft: 8}}>Remember me</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }} onPress={() => this.props.navigation.navigate("Login4")}>
                        
                        <Text style={{paddingLeft: 8, textAlign: 'right'}}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 0.3, padding: 20 }}>
                    <View style={{ width: '100%' }}>
                        <TouchableOpacity style={{ backgroundColor: "#3A8FFF", height: 60, width: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate("Main")}>
                            <Text style={{ color: '#fff', fontSize: 14 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.props.navigation.navigate('Login')}>
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