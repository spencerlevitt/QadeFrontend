import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import Constants from 'expo-constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { EvilIcons, AntDesign, Feather, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Profile extends React.Component {
  render() {
    return (
      <ScrollView style={[styles.container, { paddingTop: Constants.statusBarHeight, }]}>
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
              <View style={{ flex: 0.3 }}>
                <TouchableOpacity style={{ height: 50, width: '90%', borderRadius: 5, backgroundColor: '#2699FB', justifyContent: 'center' }} onPress={() => this.props.navigation.navigate("Requests", { friends: true })}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>121 Friends</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.3 }}>
                <TouchableOpacity style={{ height: 50, width: '90%', borderRadius: 5, backgroundColor: '#2699FB', justifyContent: 'center' }} onPress={() => this.props.navigation.navigate("Requests", { friends: false })}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Friend Requests</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.4 }}>
                <TouchableOpacity style={{ height: 50, width: '90%', borderRadius: 5, borderColor: '#BCE0FD', borderWidth: 2, justifyContent: 'center' }}>
                  <Text style={{ color: '#2699FB', fontWeight: 'bold', textAlign: 'center' }}>Money Transfer</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ paddingLeft: 50, paddingRight: 50, marginTop: 20, marginBottom: 20 }}>
            <TouchableOpacity style={{ borderBottomColor: '#333', borderBottomWidth: 1, paddingBottom: 10 }} onPress={() => this.props.navigation.navigate("Matches")}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 18 }}>
                  Match History
                  </Text>
                <EvilIcons name={'chevron-right'} size={20} color={'#888'} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ padding: 15 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18 }}>Stat Center</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ height: 25, backgroundColor: '#3A8FFF30', borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ paddingLeft: 10, paddingRight: 5 }}>NBA 2K</Text>
                  <EvilIcons name={'chevron-down'} size={20} color={'#333'} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ margin: 30 }}>
              <TextInput style={{ height: '100%', height: 30, borderRadius: 30, borderWidth: 1, borderColor: '#E5E5E5', paddingLeft: 15 }} placeholder={'Filter by opponents'}>
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
                  <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>111</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Score
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>120</Text>
                </View>
              </View>


              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>47%</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg Field Goal %
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>48%</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>19%</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#000', fontSize: 10, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>
                    Avg 3 Point%
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold', textAlign: 'center' }}>42%</Text>
                </View>
              </View>

            </View>
          </View>

        </View>
      </ScrollView>
    )
  }
}

Profile.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
