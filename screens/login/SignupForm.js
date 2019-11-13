import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { TextInput } from 'react-native-gesture-handler';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.dobArray = ['', '', ''];

    tandc = this.props.navigation.getParam('tandc', false);
    console2 = this.props.navigation.getParam('console', 1);

    month = this.props.navigation.getParam('month', '');
    day = this.props.navigation.getParam('day', '');
    year = this.props.navigation.getParam('year', '');

    first_name = this.props.navigation.getParam('first_name', '');
    last_name = this.props.navigation.getParam('last_name', '');
    email = this.props.navigation.getParam('email', '');
    password = this.props.navigation.getParam('password', '');
    confirmPassword = this.props.navigation.getParam('confirmPassword', '');
    
    this.state = {
      first_name,
      last_name,
      console2,
      email,
      dob: (year !== '' || month !== '' || day !== '') ? `${year}-${month}-${day}` : new Date(),
      day,
      month,
      year,
      password,
      confirmPassword,
      tandc: false,
      signingUp: false,
    };
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  onSubmit = () => {
    var date = new Date()
    if (this.state.tandc === false) {
        Alert.alert("Please accept the terms and conditions")
    } else if (this.state.month == '') {
        Alert.alert("Please enter your birth month")
    } else if (this.state.day == '') {
        Alert.alert("Please enter your birth date")
    } else if (this.state.year == '') {
        Alert.alert("Please enter your birth year")
    } else if (this.state.first_name == '') {
        Alert.alert("Please enter your first name")
    } else if (this.state.last_name == '') {
        Alert.alert("Please enter your last name")
    } else if (this.state.email == '') {
        Alert.alert("Please enter your email")
    } else if (!this.validateEmail(this.state.email)) {
        Alert.alert("Please enter a valid email")
    } else if (this.state.password == '') {
        Alert.alert("Please enter your password")
    } else if (this.state.confirmPassword == '') {
        Alert.alert("Please confirm your password")
    } else if (this.state.password != this.state.confirmPassword) {
        Alert.alert("Please make sure your passwords match")
    } else if ((date.getFullYear() - parseInt(this.state.year)) < 18) {
        Alert.alert("You must be at least 18 to sign up")
    } else if ((date.getFullYear() - parseInt(this.state.year)) > 90) {
        Alert.alert("Please enter a real birth year")
    } else {
        this.setState({ signingUp: true });
        // submit form data to parent component
        this.props.onSubmit(this.state);
    }
  }

  onChangeInput = (e, type) => {
    this.setState({ [type]: e });
  };

  onChangeDate = (e, type) => {
    if (typeof e === 'object') {
      e = e.nativeEvent.text;
    }

    if (type === 'year') {
      this.dobArray[0] = e;
    } else  if (type === 'month') {
      this.dobArray[1] = e;
    } else if (type === 'day') {
      this.dobArray[2] = e;
    }
    this.setState({ [type]: e });
    this.setState({ dob: this.dobArray.join('-') });
  }

  setDate = (dob) => {
    dob = dob || this.state.dob;

    this.setState({
      dob,
    });
  };

  render() {
    var date = new Date();
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 40, paddingBottom: 0 }}>
          <View style={{ marginBottom: 15 }}>
            <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
              First Name
            </Text>
            <TextInput
              style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }}
              placeholder={'First Name'}
              placeholderTextColor={'#666'}
              value={this.state.first_name}
              onFocus={(event) => {
                // `bind` the function if you're using ES6 classes
                this.props._scrollToInput((event.target), this.props.scroll)
              }}
              onChangeText={e => this.onChangeInput(e, 'first_name')}>
            </TextInput>
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
              Last Name
            </Text>
            <TextInput
              style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }}
              placeholder={'Last Name'}
              placeholderTextColor={'#666'}
              value={this.state.last_name}
              onFocus={(event) => {
                // `bind` the function if you're using ES6 classes
                this.props._scrollToInput((event.target), this.props.scroll)
              }}
              onChangeText={e => this.onChangeInput(e, 'last_name')}>
            </TextInput>
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
              Email Address
            </Text>
            <TextInput
              style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }}
              placeholder={'Email Address'}
              placeholderTextColor={'#666'}
              value={this.state.email}
              onFocus={(event) => {
                // `bind` the function if you're using ES6 classes
                this.props._scrollToInput((event.target), this.props.scroll)
              }}
              keyboardType={'email-address'}
              onChangeText={e => this.onChangeInput(e, 'email')}>
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
                <TextInput
                  style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }}
                  placeholderTextColor={'#666'}
                  maxLength={2}
                  value={this.state.month}
                  onFocus={(event) => {
                    // `bind` the function if you're using ES6 classes
                    this.props._scrollToInput((event.target), this.props.scroll)
                  }}
                  keyboardType={'number-pad'}
                  onChangeText={(val) => {
                    // if (parseInt(val) > 12) {
                    //   this.setState({ month: ''})
                    // } else {
                      this.onChangeDate(val, 'month')
                    // }}
                  }}
                  onBlur={e => this.onChangeDate(e, 'month')}>
                </TextInput>
              </View>

              <View style={{ flex: 0.3, marginLeft: 5, marginRight: 5 }}>
                <Text style={{ color: '#888', fontSize: 10, textAlign: 'center' }}>
                  Day
                </Text>
                <TextInput
                  style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }}
                  placeholderTextColor={'#666'}
                  maxLength={2}
                  value={this.state.day}
                  onFocus={(event) => {
                    // `bind` the function if you're using ES6 classes
                    this.props._scrollToInput((event.target), this.props.scroll)
                  }}
                  keyboardType={'number-pad'}
                  onChangeText={(val) => {
                    // if (parseInt(val) > 31) {
                    //   this.setState({ day: ''})
                    // } else {
                      this.onChangeDate(val, 'day')
                    // }
                  }}
                  onBlur={e => this.onChangeDate(e, 'day')}>
                </TextInput>
              </View>

              <View style={{ flex: 0.4, marginLeft: 5 }}>
                <Text style={{ color: '#888', fontSize: 10, textAlign: 'center' }}>
                  Year
                </Text>
                <TextInput
                  style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }}
                  placeholderTextColor={'#666'}
                  maxLength={4}
                  value={this.state.year}
                  onFocus={(event) => {
                    // `bind` the function if you're using ES6 classes
                    this.props._scrollToInput((event.target), this.props.scroll)
                  }}
                  keyboardType={'number-pad'}
                  onChangeText={(val) => {
                    // if (parseInt(val) > date.getFullYear()) {
                    //   this.setState({ year: ''})
                    // } else {
                      this.onChangeDate(val, 'year')
                    // }
                  }}
                  onBlur={e => this.onChangeDate(e, 'year')}>
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
              <TouchableOpacity style={{ flex: 1 / 3, margin: 5, borderRadius: 5, borderWidth: 2, backgroundColor: this.state.console2 == 1 ? '#69C0FF' : '#fff', borderColor: this.state.console2 == 1 ? '#69C0FF' : '#eee', alignItems: 'center', justifyContent: 'center' }}
                onPress={() => this.setState({ console2: 1 })}>
                  <Text style={{ fontSize: 10, color: this.state.console2 == 1 ? '#fff' : '#69C0FF', paddingVertical: 6 }}>Xbox One</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1 / 3, margin: 5, borderRadius: 5, borderWidth: 2, backgroundColor: this.state.console2 == 2 ? '#69C0FF' : '#fff', borderColor: this.state.console2 == 2 ? '#69C0FF' : '#eee', alignItems: 'center', justifyContent: 'center' }}
                onPress={() => this.setState({ console2: 2 })}>
                  <Text style={{ fontSize: 10, color: this.state.console2 == 2 ? '#fff' : '#69C0FF', paddingVertical: 6 }}>Playstation 4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1 / 3, margin: 5, borderRadius: 5, borderWidth: 2, backgroundColor: this.state.console2 == 0 ? '#69C0FF' : '#fff', borderColor: this.state.console2 == 0 ? '#69C0FF' : '#eee', alignItems: 'center', justifyContent: 'center' }}
                onPress={() => this.setState({ console2: 0 })}>
                  <Text style={{ fontSize: 10, color: this.state.console2 == 0 ? '#fff' : '#69C0FF', paddingVertical: 6 }}>None</Text>
              </TouchableOpacity>
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
              Password
            </Text>
            <TextInput
              style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }}
              secureTextEntry
              placeholderTextColor={'#666'}
              value={this.state.password}
              onFocus={(event) => {
                // `bind` the function if you're using ES6 classes
                this.props._scrollToInput((event.target), this.props.scroll)
              }}
              onChangeText={e => this.onChangeInput(e, 'password')}>
            </TextInput>
          </View>

          <View>
            <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
              Password
            </Text>
            <TextInput
              style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }}
              secureTextEntry
              placeholderTextColor={'#666'}
              value={this.state.confirmPassword}
              onFocus={(event) => {
                // `bind` the function if you're using ES6 classes
                this.props._scrollToInput((event.target), this.props.scroll)
              }}
              onChangeText={e => this.onChangeInput(e, 'confirmPassword')}>
            </TextInput>
          </View>

        </View>

        <View style={{ height: 130, paddingLeft: 40, paddingRight: 40, marginBottom: 0 }}>

          <TouchableOpacity
            style={{ marginTop:30, marginBottom: 30, flexDirection: 'row', justifyContent: 'center' }}
            onPress={() => this.setState({ tandc: !this.state.tandc })} >
            <View style={{ borderColor: '#C7C7CC', borderWidth: 1, height: 12, width: 12, justifyContent: 'center', alignItems: 'center', overflow: 'visible' }}>
              <FontAwesome
                name={'check'} style={{ height: 10, width: 10 }}
                color={this.state.tandc == true ? '#888' : '#fff'} />
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("ToS", {
              tandc: this.state.tandc,
              console: this.state.console2,
              month: this.state.month,
              day: this.state.day,
              year: this.state.year,
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              email: this.state.email,
              password: this.state.password,
              confirmPassword: this.state.confirmPassword,
            })}>
              <Text style={{ marginLeft: 7, textAlign: 'center', fontSize: 10, color: '#888' }}>I agree to the terms and conditions</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <View style={{ width: '100%' }}>
            <TouchableOpacity
              style={{ backgroundColor: "#3A8FFF", height: 40, width: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.onSubmit()}>
              <Text style={{ color: '#fff', fontSize: 14 }}>{ this.state.signingUp ? 'Creating account...' : 'Create account' }</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
