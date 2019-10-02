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

export default class ForgotPassword extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: Constants.statusBarHeight, justifyContent: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: '#666' }}>
                        Forgot Password
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <TextInput style={{ backgroundColor: "#fff", height: 60, width: '100%', borderRadius: 5, borderColor: '#E2E6EA', borderWidth: 1, paddingLeft: 15 }} placeholder={'Email'} >
                    </TextInput>
                </View>

                <View style={{ padding: 20 }}>
                    <View style={{ width: '100%' }}>
                        <TouchableOpacity style={{ backgroundColor: "#3A8FFF", height: 60, width: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate("Login5")}>
                            <Text style={{ color: '#fff', fontSize: 14 }}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View> 
        )
    }
}

ForgotPassword.navigationOptions = {
    header: null,
};