import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as friendsAction from '../../redux/actions/friendsAction';
import * as gameRequestsActions from '../../redux/actions/gameRequestsActions';
import Autocomplete from "react-native-autocomplete-input";

class Challenge extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        selected: 1,
        selecte: 0,
        searchedFriends: [],
        searchedFriendsNames: [],
        query: '',
        opponent: {},
        game: 'FIF',
        wager: 0,
        hideResults: false
    }

    changeIndex = (num) => {
        this.setState({
            selected: num
        })
    }

    changeInde = (num) => {
        this.setState({
            selecte: num
        })
    }

    _scrollToInput(reactNode: any) {
        // Add a 'scroll' ref to your ScrollView
        this.scroll.props.scrollToFocusedInput(reactNode)
    }

    onChangeSearch = async (query) => {
        const { csrfToken } = this.props;
        
        if (query.length > 1) {
            try {
                const response = await this.props.actions.searchFriends(csrfToken, query);
    
                if (response && response.searchedFriends && response.searchedFriends.status === 200) {
                    const nameArray = [];
                    response.searchedFriends.data.map((friend) => {
                        nameArray.push(`${friend.first_name} ${friend.last_name}`);
                    });
                    this.setState({ 
                        searchedFriends: response.searchedFriends.data,
                        searchedFriendsNames: nameArray,
                        query,
                        hideResults: false
                    });
                } else if (this.props.hasError) {
                    alert(`Searching friends failed: ${this.props.errorMessage.message}`);
                }
            } catch (e) {
                console.error(e);
            }
        } else {
            this.setState({ hideResults: true })
        }
    };

    getLocation = () => {
        return '41.8339042,-88.0121586';    // TODO navigation library fix
    };

    submitGameRequest = async () => {
        const { csrfToken, loggedInUser } = this.props;
        if (this.state.opponent.statistics) {
            const payload = {
                sender_id: loggedInUser.user.pk,
                receiver_id: this.state.opponent.statistics.id,
                sender_location: this.getLocation(),
                game: this.state.game,
                wager: this.state.wager,
            };
    
            try {
                const response = await this.props.actions.submitGameRequest(csrfToken, payload)
                    .catch(error => {
                        alert('Challenge request failed: ' + error.message);
                    });
    
                if (response && response.submittedGameRequest.status === 201) {
                    this.props.navigation.navigate('ChallengeConfirmation');
                } else if (this.props.hasError) {    
                    alert(`Challenge request failed: ${this.props.errorMessage.message}`);
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            alert('Please select an opponent!');
        }
    };

    render() {
        const { query } = this.state;

        return (
            <KeyboardAwareScrollView style={{ flex: 1 }} innerRef={ref => {
                this.scroll = ref
            }}>
                <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight }}>
                    <View style={{ flex: 0.2 }}>
                    </View>
                    <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#333', fontSize: 16 }}>Challenge</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <EvilIcons name={'close-o'} size={50} color={'#888'} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, padding: 50, paddingTop: 20, paddingBottom: 0 }}>

                        <View style={{ height: 80, marginBottom: 40 }}>
                            <Text style={{ fontSize: 18, color: '#333', marginBottom: 20, fontSize: 18 }}>Opponent</Text>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <View style={styles.autocompleteContainer}>
                                    <Autocomplete
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        data={this.state.searchedFriends}
                                        onChangeText={text => this.onChangeSearch(text)}
                                        defaultValue = { query }
                                        renderItem={({item, idx}) => (
                                            <TouchableHighlight
                                                underlayColor={'#69C0FF'}
                                                key={idx+'top'}
                                                onPress={() => this.setState({
                                                    query: `${item.first_name} ${item.last_name}`,
                                                    hideResults: true,
                                                    opponent: item
                                                })}
                                                style={{ zIndex: 1, borderBottomWidth: 1, borderBottomColor: '#000000' }}>
                                                <Text
                                                    key={idx+'txt'}
                                                    style={{ backgroundColor: '#FFF', height: 30, fontSize: 16, paddingTop: 5, paddingLeft: 5 }}>
                                                    {`${item.first_name} ${item.last_name}`}
                                                </Text>
                                            </TouchableHighlight>
                                        )}
                                        onFocus={(event: Event) => {
                                            // `bind` the function if you're using ES6 classes
                                            this._scrollToInput((event.target))
                                        }}
                                        keyExtractor={(item, i) => i+'top'}
                                        hideResults={this.state.hideResults}
                                        style={{ color: '#000', paddingLeft: 10, borderWidth: 0, height: 30}}
                                        inputContainerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 50}}
                                        placeholder={'Search Friends'}
                                        placeholderTextColor={'#A0A0A0'}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ height: 200, marginBottom: 40, zIndex: -1000 }}>
                            <Text style={{ fontSize: 18, color: '#333', marginBottom: 10, fontSize: 18 }}>Game</Text>
                            <Text style={{ color: '#A0A0A0', marginBottom: 20 }}>Pick one</Text>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.changeIndex(0);
                                            this.setState({ game: 'MAD' });
                                        }}
                                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 5, marginBottom: 5, borderRadius: 5, borderColor: '#EFEFEF', borderWidth: this.state.selected == 0 ? 0 : 1, backgroundColor: this.state.selected == 0 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selected == 0 ? '#fff' : '#69C0FF' }}>
                                            Madden
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.changeIndex(1);
                                            this.setState({ game: 'FIF' });
                                        }}
                                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginBottom: 5, borderRadius: 5, borderColor: '#EFEFEF', borderWidth: this.state.selected == 1 ? 0 : 1, backgroundColor: this.state.selected == 1 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selected == 1 ? '#fff' : '#69C0FF' }}>
                                            FIFA
                                        </Text>
                                    </TouchableOpacity>


                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.changeIndex(2);
                                            this.setState({ game: 'NBA' });
                                        }}
                                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 5, marginTop: 5, borderRadius: 5, borderColor: '#EFEFEF', borderWidth: this.state.selected == 2 ? 0 : 1, backgroundColor: this.state.selected == 2 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selected == 2 ? '#fff' : '#69C0FF' }}>
                                            NBA 2K
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.changeIndex(3);
                                            this.setState({ game: 'NHL' });
                                        }}
                                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginTop: 5, borderRadius: 5, borderColor: '#EFEFEF', borderWidth: this.state.selected == 3 ? 0 : 1, backgroundColor: this.state.selected == 3 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selected == 3 ? '#fff' : '#69C0FF' }}>
                                            NHL
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ height: 160 }}>
                            <Text style={{ fontSize: 18, color: '#333', marginBottom: 10, fontSize: 18 }}>What's on the line?</Text>
                            <Text style={{ color: '#A0A0A0', marginBottom: 20 }}>Pick one</Text>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.changeInde(0);
                                            this.setState({ wager: 0 })
                                        }}
                                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 5, marginBottom: 5, borderRadius: 50, borderColor: '#EFEFEF', borderWidth: this.state.selecte == 0 ? 0 : 1, backgroundColor: this.state.selecte == 0 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selecte == 0 ? '#fff' : '#69C0FF' }}>
                                            Pride
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.changeInde(1);
                                            this.setState({ wager: 5 })
                                        }}
                                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginBottom: 5, borderRadius: 50, borderColor: '#EFEFEF', borderWidth: this.state.selecte == 1 ? 0 : 1, backgroundColor: this.state.selecte == 1 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selecte == 1 ? '#fff' : '#69C0FF' }}>
                                            $5.00
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '70%', marginTop: 10 }}>
                                    <TextInput
                                        onChangeText={(text) => {
                                            this.changeInde(2);
                                            this.setState({ wager: text })
                                        }}
                                        onFocus={(event: Event) => {
                                            // `bind` the function if you're using ES6 classes
                                            this._scrollToInput((event.target))
                                        }}
                                        style={{ borderBottomColor: this.state.selecte == 2 ? '#69C0FF' : '#eee', borderBottomWidth: 1 }}
                                        placeholder={'$ Enter Custom'}
                                        keyboardType={'number-pad'}>
                                    </TextInput>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center', marginBottom: 250 }}>
                            <TouchableOpacity
                                onPress={() => this.submitGameRequest()}
                                style={{
                                    marginTop: 20,
                                    height: 60,
                                    width: 60,
                                    borderRadius: 80,
                                    borderWidth: 5,
                                    borderColor: '#eee',
                                    elevation: 8,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 2,
                                    backgroundColor: '#fff',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 5
                                }}
                            >
                                <Image style={{ height: 30, width: 30 }} tintColor="#7ed3ff" source={require('../../assets/images/gloves.png')} />
                            </TouchableOpacity>
                            <Text style={{
                                color: '#888',
                                fontSize: 14,
                                textTransform: 'uppercase',
                            }}>GO</Text>
                        </View>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

Challenge.navigationOptions = {
    header: null,
};

Challenge.propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    csrfToken: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    searchedFriends: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};
  
function mapStateToProps(state) {
    return {
      searchedFriends: state.friendRequests.searchedFriends,
      isFetchingSearchedFriends: state.friendRequests.isFetchingSearchedFriends,
      csrfToken: state.auth.csrfToken,
      loggedInUser: state.auth.loggedInUser,
      loading: state.apiCallsInProgress > 0
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: {
        searchFriends: bindActionCreators(friendsAction.searchFriends, dispatch),
        submitGameRequest: bindActionCreators(gameRequestsActions.submitGameRequest, dispatch),
      }
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Challenge);

const styles = StyleSheet.create({
    autocompleteContainer: {
      flex: 1,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 2,
      zIndex: 1,
      backgroundColor: 'white'
    }
  });