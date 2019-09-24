import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { EvilIcons, AntDesign, Feather, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
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
            <ScrollView style={{ flex: 1, backgroundColor: '#fff', paddingTop: Constants.statusBarHeight }}>
                <View style={{ height: 60, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: '#333' }}>
                        Sign Up
                    </Text>
                </View>

                <View style={{ flex: 1, padding: 40 }}>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
                            First Name
                        </Text>
                        <TextInput style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} placeholder={'First Name'} placeholderTextColor={'#666'}>

                        </TextInput>
                    </View>

                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
                            Last Name
                        </Text>
                        <TextInput style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} placeholder={'Last Name'} placeholderTextColor={'#666'}>

                        </TextInput>
                    </View>

                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
                            Email Address
                        </Text>
                        <TextInput style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} placeholder={'Email Address'} placeholderTextColor={'#666'}>

                        </TextInput>
                    </View>

                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
                            Date of Birth
                        </Text>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.3, marginRight: 5 }}>
                                <Text style={{ color: '#888', fontSize: 10, textAlign: 'center' }}>
                                    Month
                            </Text>
                                <TextInput style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} textContentType={'creditCardNumber'} placeholderTextColor={'#666'}>

                                </TextInput>
                            </View>

                            <View style={{ flex: 0.3, marginLeft: 5, marginRight: 5 }}>
                                <Text style={{ color: '#888', fontSize: 10, textAlign: 'center' }}>
                                    Day
                            </Text>
                                <TextInput style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} textContentType={'creditCardNumber'} placeholderTextColor={'#666'}>

                                </TextInput>
                            </View>

                            <View style={{ flex: 0.4, marginLeft: 5 }}>
                                <Text style={{ color: '#888', fontSize: 10, textAlign: 'center' }}>
                                    Year
                            </Text>
                                <TextInput style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} textContentType={'creditCardNumber'} placeholderTextColor={'#666'}>

                                </TextInput>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
                            Password
                        </Text>
                        <TextInput style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} secureTextEntry placeholderTextColor={'#666'}>

                        </TextInput>
                    </View>

                    <View>
                        <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
                            Password
                        </Text>
                        <TextInput style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} secureTextEntry placeholderTextColor={'#666'}>

                        </TextInput>
                    </View>

                </View>

                <View style={{ height: 150, paddingLeft: 40, paddingRight: 40, marginBottom: 40 }}>

                    <TouchableOpacity style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'center' }} onPress={() => this.setState({ toggle: !this.state.toggle })} >
                        <View style={{borderColor: '#C7C7CC', borderWidth: 1, height: 12, width: 12, justifyContent: 'center', alignItems: 'center', overflow: 'visible'}}>
                            <FontAwesome name={'check'} style={{height: 10, width: 10}} color={this.state.toggle == true ? '#888' : '#fff'} />
                        </View>
                        <Text style={{ marginLeft: 7, textAlign: 'center', fontSize: 10, color: '#888' }}>I agree to the terms and conditions</Text>
                    </TouchableOpacity>

                    <View style={{ width: '100%' }}>
                        <TouchableOpacity style={{ backgroundColor: "#3A8FFF", height: 40, width: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate("Main")}>
                            <Text style={{ color: '#fff', fontSize: 14 }}>Create account</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{ textAlign: 'center' }}>Have an account? <Text style={{ color: '#3A8FFF' }}>Click here</Text></Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        )
    }
}

Login.navigationOptions = {
    header: null,
};