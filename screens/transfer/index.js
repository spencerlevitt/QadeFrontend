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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { environment } from '../../environments/environment.dev';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as userActions from '../../redux/actions/userActions';
import * as moneyRequestAction from '../../redux/actions/moneyRequestAction';


class Transfer extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        selected: 0,
        tempView: 0,
        amount: 10,
        submitting: false
    }

    changeIndex = (num) => {
        this.setState({
            selected: num
        })
    }

    _scrollToInput(reactNode) {
        // Add a 'scroll' ref to your ScrollView
        this.scroll.props.scrollToFocusedInput(reactNode)
    }

    getLocation = () => {
        return '41.8339042,-88.0121586';    // TODO navigation library fix
    };

    submitMoneyRequest = async () => {
        this.setState({ submitting: true });

        const payload = {
            "user_id": this.props.loggedInUser.user.pk,
            "user_location": this.getLocation(),
            "amount": this.state.amount,
            "type": this.state.selected
        }

        try {
            const response = await this.props.actions.submitMoneyRequest(this.props.csrfToken, payload)
                .catch(error => {
                    alert('Transfer request failed: ' + error.message);
                    this.setState({ submitting: false });
                });

            if (response && response.moneyRequest && response.moneyRequest.status === 201) {
                alert(`Your ${response.moneyRequest.data.type === 0 ? 'deposit' : 'withdrawal' } request has been sent.`);
                this.props.navigation.navigate('Home');
            }
        } catch (e) {
        
        }
    };

    render() {
        return (
            <KeyboardAwareScrollView style={{ flex: 1 }} innerRef={ref => {
                this.scroll = ref
            }}>
                <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight }}>
                    <View style={{ flex: 0.2 }}>
                    </View>
                    <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#333', fontSize: 20 }}>Transfer</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <EvilIcons name={'close-o'} size={50} color={'#888'} />
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, padding: 50, paddingTop: 20, paddingBottom: 0 }} >

                        <View style={{ height: 80, marginBottom: 40 }}>
                            <Text style={{ fontSize: 18, color: '#333', marginBottom: 10, fontSize: 18 }}>Current Balance</Text>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ color: '#333', fontSize: 30 }}>
                                    ${!this.props.loading && this.props.userDetails ? this.props.userDetails.profile.balance : '0'}
                                </Text>
                            </View>
                        </View>

                        <View style={{ height: 100, marginBottom: 40 }}>
                            <Text style={{ fontSize: 18, color: '#333', marginBottom: 10, fontSize: 18 }}>Method</Text>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>

                                    <TouchableOpacity onPress={() => this.changeIndex(0)} style={{ flex: 1, maxHeight: 50, justifyContent: 'center', alignItems: 'center', marginRight: 5, marginBottom: 5, borderRadius: 5, borderColor: '#EFEFEF', borderWidth: this.state.selected == 0 ? 0 : 1, backgroundColor: this.state.selected == 0 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selected == 0 ? '#fff' : '#69C0FF' }}>
                                            Deposit
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => this.changeIndex(1)} style={{ flex: 1, maxHeight: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginBottom: 5, borderRadius: 5, borderColor: '#EFEFEF', borderWidth: this.state.selected == 1 ? 0 : 1, backgroundColor: this.state.selected == 1 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selected == 1 ? '#fff' : '#69C0FF' }}>
                                            Withdraw
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>

                        <View style={{ height: 200, position: 'relative', marginBottom: 20 }}>
                            <Text style={{ fontSize: 18, color: '#333', marginBottom: 10, fontSize: 18 }}>Amount</Text>
                            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: 140, aspectRatio: 1, borderRadius: 70, backgroundColor: '#BCE0FD40', alignItems: 'center', justifyContent: 'center' }}>

                                    <View style={{ height: 70, aspectRatio: 1, borderRadius: 70, backgroundColor: '#BCE0FD70', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>

                                    </View>
                                    <View style={{position: 'absolute', flexDirection: "row"}}>
                                    <Text numberOfLines={1} style={{ color: '#3A8FFF', fontSize: 26, fontWeight: 'bold' }} >$</Text>
                                    <TextInput onFocus={(event) => {
                            // `bind` the function if you're using ES6 classes
                            this._scrollToInput((event.target))
                        }} value={this.state.amount.toString()} style={{color: '#3A8FFF', fontSize: 26, fontWeight: 'bold'}} onChangeText={(val) => {if(parseInt(val) > 0){this.setState({amount: parseInt(val)})}}} keyboardType={'number-pad'}/>
                                    <Text numberOfLines={1} style={{ color: '#3A8FFF', fontSize: 26, fontWeight: 'bold' }} >.00</Text>
                                    </View>
                                    
                                </View>
                            </View>
                            <View style={{ height: 50, width: '100%', position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', width: 140, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, borderColor: '#BCE0FD70', backgroundColor: '#fff', borderWidth: 2, justifyContent: "center", alignItems: 'center' }} onPress={() => { if (this.state.amount > 0) this.setState({ amount: this.state.amount - 1 }) }}>
                                            <Text style={{ color: '#2699FB', fontSize: 20 }}>-</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, borderColor: '#BCE0FD70', backgroundColor: '#fff', borderWidth: 2, justifyContent: "center", alignItems: 'center' }} onPress={() => { this.setState({ amount: this.state.amount + 1 }) }}>
                                            <Text style={{ color: '#2699FB', fontSize: 20 }}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </View>

                        { environment.SHOW_CC_BILLING_FORM
                            ? 
                                <View style={{ height: 300, marginBottom: 350 }}>
                                    <Text style={{ fontSize: 18, color: '#333', marginBottom: 10, fontSize: 18 }}>Payment</Text>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>

                                            <View style={{ flex: 1, paddingRight: 10 }}>
                                                <Text style={{ fontSize: 8 }}>First Name</Text>
                                                <TextInput onFocus={(event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                }} style={{ fontSize: 16, borderBottomColor: '#D5D5D5', borderBottomWidth: 1 }} placeholder={'Enter First Name'}></TextInput>
                                            </View>

                                            <View style={{ flex: 1 }}>
                                                <Text style={{ fontSize: 8 }}>Last Name</Text>
                                                <TextInput onFocus={(event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                }} style={{ fontSize: 16, borderBottomColor: '#D5D5D5', borderBottomWidth: 1 }} placeholder={'Enter Last Name'}></TextInput>
                                            </View>

                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontSize: 8 }}>Address</Text>
                                            <TextInput onFocus={(event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                }} style={{ fontSize: 16, borderBottomColor: '#D5D5D5', borderBottomWidth: 1 }} placeholder={'Enter Address'}></TextInput>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>

                                            <View style={{ flex: 0.4, paddingRight: 10 }}>
                                                <Text style={{ fontSize: 8 }}>City</Text>
                                                <TextInput onFocus={(event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                }} style={{ fontSize: 16, borderBottomColor: '#D5D5D5', borderBottomWidth: 1 }} placeholder={'Enter City'}></TextInput>
                                            </View>

                                            <View style={{ flex: 0.3 }}>
                                                <Text style={{ fontSize: 8 }}>ZIP Code</Text>
                                                <TextInput onFocus={(event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                }} style={{ fontSize: 16, borderBottomColor: '#D5D5D5', borderBottomWidth: 1 }} placeholder={'Enter ZIP'}></TextInput>
                                            </View>

                                            <View style={{ flex: 0.3 }}>
                                                <Text style={{ fontSize: 8 }}>State</Text>
                                                <TextInput onFocus={(event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                }} style={{ fontSize: 16, borderBottomColor: '#D5D5D5', borderBottomWidth: 1 }} placeholder={'State'}></TextInput>
                                            </View>

                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontSize: 8 }}>Credit/Debit Card Number</Text>
                                            <TextInput onFocus={(event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                }} style={{ fontSize: 16, borderBottomColor: '#D5D5D5', borderBottomWidth: 1 }} placeholder={'Enter Credit Card Number'}></TextInput>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>

                                            <View style={{ flex: 0.2, paddingRight: 10 }}>
                                                <Text style={{ fontSize: 8 }}>Expires</Text>
                                                <TextInput onFocus={(event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                }} style={{ fontSize: 16, borderBottomColor: '#D5D5D5', borderBottomWidth: 1 }} placeholder={'MM/YY'}></TextInput>
                                            </View>

                                            <View style={{ flex: 0.2 }}>
                                                <Text style={{ fontSize: 8 }}>CVV</Text>
                                                <TextInput onFocus={(event) => {
                                    // `bind` the function if you're using ES6 classes
                                    this._scrollToInput((event.target))
                                }} style={{ fontSize: 16, borderBottomColor: '#D5D5D5', borderBottomWidth: 1 }} placeholder={'CVV'}></TextInput>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            :   null
                        }

                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            style={{ flex: 1, height:50, maxHeight: 100, justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginBottom: 5, borderRadius: 5, borderColor: '#EFEFEF', borderWidth:  1, backgroundColor: 'transparent' }}
                            onPress={() => this.submitMoneyRequest()}>
                            <Text style={{ color: '#69C0FF', fontSize: 16, paddingLeft: 25, paddingRight: 25 }}>
                                { this.state.submitting ? 'Submitting...' : 'Submit' }
                            </Text>
                        </TouchableOpacity>
                    </View>    
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

Transfer.navigationOptions = {
    header: null,
};

Transfer.propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    csrfToken: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    userDetails: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  };
  
function mapStateToProps(state) {
    return {
      userDetails: state.userDetails,
      csrfToken: state.auth.csrfToken,
      loggedInUser: state.auth.loggedInUser,
      loggedIn: state.auth.loggedIn,
      loading: state.apiCallsInProgress > 0
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: {
        loadUserDetails: bindActionCreators(userActions.loadUserDetails, dispatch),
        submitMoneyRequest: bindActionCreators(moneyRequestAction.submitMoneyRequest, dispatch),
      }
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Transfer);