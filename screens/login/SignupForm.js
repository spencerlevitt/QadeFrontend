import React from 'react';
import ValidationComponent from 'react-native-form-validator';
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default class SignupForm extends ValidationComponent {
  constructor(props) {
    super(props);
    this.dobArray = ['', '', ''];
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      dob: new Date(),
      day: '',
      month: '',
      year: '',
      password: '',
      confirmPassword: '',
      tandc: false,
    }
  }

  onSubmit = () => {
    // validate the form
    this.validate({
      first_name: { minlength: 3, maxlength: 200, required: true },
      last_name: { minlength: 3, maxlength: 200, required: true },
      email: { email: true, required: true },
      dob: { date: 'YYYY-MM-DD', required: true },
      day: { maxlength: 2, numbers: true, required: true },
      month: { maxlength: 2, numbers: true, required: true },
      year: { minlength: 3, maxlength: 4, numbers: true, required: true },
      password: { minlength: 7, maxlength: 200, required: true },
      confirmPassword: { minlength: 7, maxlength: 200, required: true },
      tandc: { required: true },
    });
    
    const errorMessages = this.getErrorMessages();
    if (errorMessages !== '') {
      alert(errorMessages);
    } else if (this.state.password !== this.state.confirmPassword) {
      alert('Passwords do not match!');
    } else {
      // submit form data to parent component
      this.props.onSubmit(this.state);
    }
  };

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
  }

  render() {
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
                  onChangeText={e => this.onChangeDate(e, 'month')}
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
                  onChangeText={e => this.onChangeDate(e, 'day')}
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
                  onChangeText={e => this.onChangeDate(e, 'year')}
                  onBlur={e => this.onChangeDate(e, 'year')}>
                </TextInput>
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={{ marginLeft: 10, color: '#888', fontSize: 10 }}>
              Password
            </Text>
            <TextInput
              style={{ marginTop: 5, width: '100%', fontSize: 16, height: 40, borderRadius: 5, backgroundColor: '#EFEFF4', paddingLeft: 15 }}
              secureTextEntry
              placeholderTextColor={'#666'}
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
            <Text style={{ marginLeft: 7, textAlign: 'center', fontSize: 10, color: '#888' }}>I agree to the terms and conditions</Text>
          </TouchableOpacity>

          <View style={{ width: '100%' }}>
            <TouchableOpacity
              style={{ backgroundColor: "#3A8FFF", height: 40, width: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.onSubmit()}>
              <Text style={{ color: '#fff', fontSize: 14 }}>Create account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
