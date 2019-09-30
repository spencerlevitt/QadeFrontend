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

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: Constants.statusBarHeight }}>
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

Login.navigationOptions = {
    header: null,
};