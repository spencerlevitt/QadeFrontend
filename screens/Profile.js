import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Picker,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import Constants from 'expo-constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { EvilIcons, AntDesign, Feather, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-material-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Profile extends React.Component {
  state = {
    game: 'nba2k'
  }

  _scrollToInput(reactNode: any) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.props.scrollToFocusedInput(reactNode)
}

  render() {
    const data = [{
      value: 'NBA 2K',
    }, {
      value: 'NHL',
    }, {
      value: 'FIFA',
    }, {
      value: 'MADDEN',
    }];
    return (
      <KeyboardAwareScrollView style={[styles.container, { paddingTop: Constants.statusBarHeight, }]} innerRef={ref => {
        this.scroll = ref
      }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 60, width: 60, borderRadius: 5 }} />
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end', padding: 20 }} onPress={() => this.props.navigation.navigate("Settings")}>
              <EvilIcons name={'gear'} size={35} color={'#7697E8'} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{ color: '#1E3949', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>Chris Wright</Text>
          <Text style={{ color: '#1E3949', fontSize: 12, textAlign: 'center' }}>Xbox One | San Francisco, CA <Image source={require('../assets/images/shield.png')} style={{ height: 12, width: 10 }} /></Text>
          <View style={{ padding: 15 }}>
            <Text style={{ color: '#1E3949', fontSize: 16, textAlign: 'center' }}>
              Hi! My name is Chris, I’m a sports gamer from San Francisco, CA. Contact me at john@mail.com
            </Text>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>

              <View style={{ flex: 0.5 }}>
                <TouchableOpacity style={{ height: 35, width: '100%', borderRadius: 5, backgroundColor: '#2699FB', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} onPress={() => this.props.navigation.navigate("Requests", { friends: false })}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 10 }}>121 Friends</Text>
                  <Text style={{ color: 'red', marginTop: -4 }}>•</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.5, paddingHorizontal: 10 }}>
                <TouchableOpacity style={{ height: 35, width: '100%', borderRadius: 5, borderColor: '#BCE0FD', borderWidth: 2, justifyContent: 'center' }} onPress={() => this.props.navigation.navigate("Transfer")}>
                  <Text style={{ color: '#2699FB', fontWeight: 'bold', textAlign: 'center', fontSize: 10 }}>Money Transfer</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Remove before prod */}

            <View style={{ flex: 1, marginTop: 20, alignItems: 'center' }}>
              <TouchableOpacity style={{ height: 50, width: '90%', borderRadius: 5, borderColor: '#BCE0FD', borderWidth: 2, justifyContent: 'center' }} onPress={() => this.props.navigation.navigate("Loading")}>
                <Text style={{ color: '#2699FB', fontWeight: 'bold', textAlign: 'center' }}>Loading Example</Text>
              </TouchableOpacity>
            </View>

            {/* */}

          </View>

          <View style={{ paddingLeft: 50, paddingRight: 50, marginTop: 20, marginBottom: 20 }}>
            <TouchableOpacity style={{ borderBottomColor: '#eee', borderBottomWidth: 1, paddingBottom: 10 }} onPress={() => this.props.navigation.navigate("Matches")}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 16 }}>
                  Match History
                  </Text>
                <EvilIcons name={'chevron-right'} size={20} color={'#888'} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ padding: 15, paddingHorizontal: 30 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Stat Center</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                <View style={{}}>
                  <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, justifyContent: 'center' }}>
                    <EvilIcons name={'chevron-down'} size={30} color={'#333'} />
                  </View>
                  <Dropdown
                    containerStyle={{ paddingLeft: 10, width: 120, height: 25, padding: 0, backgroundColor: '#3A8FFF30', borderRadius: 20 }}
                    pickerStyle={{ width: 100 }}
                    overlayStyle={{ width: 100 }}
                    dropdownOffset={{ top: 0, left: 0 }}
                    baseColor={'rgba(0,0,0,0)'}
                    data={data}
                    value={'NBA 2K'}
                  />
                </View>


                {/*
                <TouchableOpacity style={{ height: 25, backgroundColor: '#3A8FFF30', borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ paddingLeft: 10, paddingRight: 5 }}>NBA 2K</Text>
                  <EvilIcons name={'chevron-down'} size={20} color={'#333'} />
                </TouchableOpacity>
                */}
              </View>
            </View>
            <View style={{ margin: 30 }}>
              <TextInput  onFocus={(event: Event) => {
                            // `bind` the function if you're using ES6 classes
                            this._scrollToInput((event.target))
                        }}  style={{ height: '100%', height: 30, borderRadius: 30, borderWidth: 1, borderColor: '#E5E5E5', paddingLeft: 15 }} placeholder={'Filter by opponents'}>
              </TextInput>
            </View>
            <View style={{ marginBottom: 30 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.33 }}>
                  <Text style={{ color: '#333', fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>22-10</Text>
                  <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>Record</Text>
                </View>

                <View style={{ flex: 0.33 }}>
                  <Text style={{ color: '#333', fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>68.8%</Text>
                  <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>Win %</Text>
                </View>

                <View style={{ flex: 0.33 }}>
                  <Text style={{ color: '#333', fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>$24.33</Text>
                  <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>Net Gain</Text>
                </View>


              </View>


              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 12, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>You</Text>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 12, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>Opponent</Text>
                </View>
              </View>



              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>111</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Score
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>120</Text>
                </View>
              </View>


              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>47%</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Field Goal %
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>48%</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>19%</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg 3 Point%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 13, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>42%</Text>
                </View>
              </View>

            </View>
          </View>

        </View>
      </KeyboardAwareScrollView>
    )
  }
}

Profile.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 160,
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 8
  }
});
