import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export default class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: 50, alignItems: 'center', justifyContent: 'center' }}>


                    <FontAwesome name={'check'} style={{ marginBottom: 30 }} size={180} color={'#3A8FFF'} />

                    <Text style={{ fontSize: 22, textAlign: 'center', color: '#333' }}>We've sent you an email.</Text>
                    <Text style={{ fontSize: 14, textAlign: 'center', color: '#333' }}>Remember to check your spam!</Text>


                    <View style={{ flex: 0.3, width: '100%', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ height: 60, width: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}  onPress={() => this.props.navigation.navigate("Login")}>
                            <Text style={{ color: '#888', fontSize: 10 }}>If you still didn't receive an email <Text style={{color: '#3A8FFF'}}>Contact Us</Text></Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </View>
        )
    }
}

Login.navigationOptions = {
    header: null,
};