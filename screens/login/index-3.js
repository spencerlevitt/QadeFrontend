import React from 'react';
import {
    Alert,
    Image,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { EvilIcons, AntDesign, Feather, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Constants from 'expo-constants';

export default class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        toggle: false,
        console: 0,

        month: '',
        day: '',
        year: '',

        first: '',
        last: '',
        email: '',
        pw: '',
        pw2: '',
    }

    _scrollToInput(reactNode: any) {
        // Add a 'scroll' ref to your ScrollView
        this.scroll.props.scrollToFocusedInput(reactNode)
    }

    render() {
        var date = new Date()
        return (
            <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#fff', paddingTop: Constants.statusBarHeight}}
                innerRef={ref => {
                    this.scroll = ref
                }}>
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
                        <TextInput onFocus={(event: Event) => {
                            // `bind` the function if you're using ES6 classes
                            this._scrollToInput((event.target))
                        }} onChangeText={(val) => { this.setState({ first: val }) }} style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} placeholder={'First Name'} placeholderTextColor={'#666'}>

                        </TextInput>
                    </View>

                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
                            Last Name
                        </Text>
                        <TextInput onFocus={(event: Event) => {
                            // `bind` the function if you're using ES6 classes
                            this._scrollToInput((event.target))
                        }} onChangeText={(val) => { this.setState({ last: val }) }} style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} placeholder={'Last Name'} placeholderTextColor={'#666'}>

                        </TextInput>
                    </View>

                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
                            Email Address
                        </Text>
                        <TextInput onFocus={(event: Event) => {
                            // `bind` the function if you're using ES6 classes
                            this._scrollToInput((event.target))
                        }} onChangeText={(val) => { this.setState({ email: val }) }} style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} placeholder={'Email Address'} placeholderTextColor={'#666'}>

                        </TextInput>
                    </View>

                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ marginLeft: 10, color: '#888', fontSize: 10, marginBottom: 5 }}>
                            Date of Birth
                        </Text>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 0.3, marginRight: 5 }}>
                                <Text style={{ marginLeft: 10, color: '#bbb', fontSize: 10, }}>
                                    Month
                            </Text>
                                <TextInput onFocus={(event: Event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                }} maxLength={2} onChangeText={(val) => { if (parseInt(val) > 12) { this.state.month == '' } else { this.setState({ month: val }) } }} value={this.state.month} keyboardType={'number-pad'} style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} placeholderTextColor={'#666'}>

                                </TextInput>
                            </View>

                            <View style={{ flex: 0.3, marginLeft: 5, marginRight: 5 }}>
                                <Text style={{ color: '#bbb', fontSize: 10, }}>
                                    Day
                            </Text>
                                <TextInput onFocus={(event: Event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                }} maxLength={2} onChangeText={(val) => { if (parseInt(val) > 31) { this.state.day == '' } else { this.setState({ day: val }) } }} value={this.state.day} keyboardType={'number-pad'} style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} placeholderTextColor={'#666'}>

                                </TextInput>
                            </View>

                            <View style={{ flex: 0.4, marginLeft: 5 }}>
                                <Text style={{ color: '#bbb', fontSize: 10, }}>
                                    Year
                            </Text>
                                <TextInput onFocus={(event: Event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                }} maxLength={4} onChangeText={(val) => { if (parseInt(val) > date.getFullYear()) { this.state.year == '' } else { this.setState({ year: val }) } }} value={this.state.year} keyboardType={'number-pad'} style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} placeholderTextColor={'#666'}>

                                </TextInput>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginLeft: 10, }}>
                        <Text style={{ fontSize: 8, color: '#888', fontSize: 10, }}>
                            Console
                            </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>

                        <TouchableOpacity style={{ flex: 1 / 3, margin: 5, borderRadius: 5, borderWidth: 2, backgroundColor: this.state.console == 0 ? '#69C0FF' : '#fff', borderColor: this.state.console == 0 ? '#69C0FF' : '#eee', alignItems: 'center', justifyContent: 'center' }} onPress={() => this.setState({ console: 0 })}>
                            <Text style={{ fontSize: 10, color: this.state.console == 0 ? '#fff' : '#69C0FF', paddingVertical: 6 }}>Xbox One</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1 / 3, margin: 5, borderRadius: 5, borderWidth: 2, backgroundColor: this.state.console == 1 ? '#69C0FF' : '#fff', borderColor: this.state.console == 1 ? '#69C0FF' : '#eee', alignItems: 'center', justifyContent: 'center' }} onPress={() => this.setState({ console: 1 })}>
                            <Text style={{ fontSize: 10, color: this.state.console == 1 ? '#fff' : '#69C0FF', paddingVertical: 6 }}>Playstation 4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1 / 3, margin: 5, borderRadius: 5, borderWidth: 2, backgroundColor: this.state.console == 2 ? '#69C0FF' : '#fff', borderColor: this.state.console == 2 ? '#69C0FF' : '#eee', alignItems: 'center', justifyContent: 'center' }} onPress={() => this.setState({ console: 2 })}>
                            <Text style={{ fontSize: 10, color: this.state.console == 2 ? '#fff' : '#69C0FF', paddingVertical: 6 }}>None</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
                            Password
                        </Text>
                        <TextInput onFocus={(event: Event) => {
                            // `bind` the function if you're using ES6 classes
                            this._scrollToInput((event.target))
                        }} onChangeText={(val) => { this.setState({ pw: val }) }} style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} secureTextEntry placeholderTextColor={'#666'}>

                        </TextInput>
                    </View>

                    <View>
                        <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
                            Password
                        </Text>
                        <TextInput onFocus={(event: Event) => {
                            // `bind` the function if you're using ES6 classes
                            this._scrollToInput((event.target))
                        }} onChangeText={(val) => { this.setState({ pw2: val }) }} style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }} secureTextEntry placeholderTextColor={'#666'}>

                        </TextInput>
                    </View>

                </View>

                <View style={{ height: 150, paddingLeft: 40, paddingRight: 40, marginBottom: 140 }}>

                    <TouchableOpacity style={{ marginBottom: 20, flexDirection: 'row', justifyContent: 'center' }} onPress={() => this.setState({ toggle: !this.state.toggle })} >
                        <View style={{ borderColor: '#C7C7CC', borderWidth: 1, height: 12, width: 12, justifyContent: 'center', alignItems: 'center', overflow: 'visible' }}>
                            <FontAwesome name={'check'} style={{ height: 10, width: 10 }} color={this.state.toggle == true ? '#888' : '#fff'} />
                        </View>
                        <Text style={{ marginLeft: 7, textAlign: 'center', fontSize: 10, color: '#888' }}>I agree to the terms and conditions</Text>
                    </TouchableOpacity>

                    <View style={{ width: '100%' }}>
                        <TouchableOpacity style={{ backgroundColor: "#3A8FFF", height: 40, width: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.formCheck()}>
                            <Text style={{ color: '#fff', fontSize: 14 }}>Create account</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.formCheck()}>
                        <Text style={{ textAlign: 'center' }}>Have an account? <Text style={{ color: '#3A8FFF' }}>Click here</Text></Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAwareScrollView>
        )
    }

    formCheck = () => {
        var date = new Date()
        if (this.state.toggle == false) {
            Alert.alert("Please accept the terms and conditions")
        } else if (this.state.month == '') {
            Alert.alert("Please enter your birth month")
        } else if (this.state.day == '') {
            Alert.alert("Please enter your birth date")
        } else if (this.state.year == '') {
            Alert.alert("Please enter your birth year")
        } else if (this.state.first == '') {
            Alert.alert("Please enter your first name")
        } else if (this.state.last == '') {
            Alert.alert("Please enter your last name")
        } else if (this.state.email == '') {
            Alert.alert("Please enter your email")
        } else if (this.state.pw == '') {
            Alert.alert("Please enter your password")
        } else if (this.state.pw2 == '') {
            Alert.alert("Please confirm your password")
        } else if (this.state.pw != this.state.pw2) {
            Alert.alert("Please make sure your passwords match")
        } else if ((date.getFullYear() - parseInt(this.state.year)) < 18) {
            Alert.alert("You must be at least 18 to sign up")
        } else if ((date.getFullYear() - parseInt(this.state.year)) > 90) {
            Alert.alert("Please enter a real birth year")
        } else {
            this.props.navigation.navigate('Main')
        }
    }
}

Login.navigationOptions = {
    header: null,
};