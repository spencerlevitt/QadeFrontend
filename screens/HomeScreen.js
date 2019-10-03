import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Easing,
  Animated,
  View,
  Modal
} from 'react-native';
import Constants from 'expo-constants';
import { EvilIcons, AntDesign, Feather, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeTabs from '../components/home/homeTabs'
import GameTabs from '../components/home/gameTabs'
import { TextInput } from 'react-native-gesture-handler';

/*
DEV

---
@B - Initial made, reference the attached screen shots, I will be working on the basic layout and charts
@B - Tabs implemented/Stat center/standings also g2g
@L - working on swiper design
@B - Seperated tabs to reduce clutter
@L - working on scroll ani done by tonight
@L - finished Scroll ani
@B - Client wants chart to be improved, changing from react-native-svg-chart to react-native-chart-kit
@C - done with new chart design
@C - done with style migration
@B - Made progress checker under Swiper


*/

export default class HomeScreen extends React.Component {

  state = {
    menuPos: new Animated.Value(0),
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={[styles.container, { paddingTop: Constants.statusBarHeight }]}>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ padding: 50, flex: 1, backgroundColor: '#00000050', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: '100%', backgroundColor: '#fff', borderRadius: 5, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', height: 40, padding: 15 }}>
                <View style={{ flex: 1 }}>

                </View>
                <TouchableOpacity
                  style={{width: 40, height: 40}}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <EvilIcons name={'close-o'} size={40} color={'#888'} />
                </TouchableOpacity>
              </View>
              <View style={{ padding: 50, paddingTop: 0 }}>


                <Text style={{ color: '#333', textAlign: 'center', fontSize: 18 }}>How are standings calculated?</Text>

                <Text style={{ marginTop: 20, color: '#333', textAlign: 'center' }}>We use a simple formula using wins and losses to rank you among your friends. We make sure to take into account the number of games each user has played.</Text>

              </View>
            </View>
          </View>
        </Modal>

        <View style={[styles.welcomeContainer]}>

          <View style={styles.welcomeContainerHeader}>
            <Text style={styles.welcomeHeader}>
              Current Balance
            </Text>
            <Text style={styles.welcomeBalance}>
              $32.55
            </Text>
          </View>


          <View style={styles.welcomeButtonContainer}>
            <View style={styles.alignCenter}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Transfer")} style={styles.welcomeButton}>
                <EvilIcons name={'credit-card'} size={35} color={'#7ed3ff'} />
              </TouchableOpacity>
              <Text style={styles.welcomeButtonText}>Transfer</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Game", {accept: true})} style={styles.welcomeButton}>
                <AntDesign name={'download'} size={25} color={'#7ed3ff'} />
              </TouchableOpacity>
              <Text style={styles.welcomeButtonText}>Submit</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Challenge")} style={styles.welcomeButton}>
                <Image style={{ height: 25, width: 25 }} tintColor="#7ed3ff" source={require('../assets/images/gloves.png')} />
              </TouchableOpacity>
              <Text style={styles.welcomeButtonText}>Challenge</Text>
            </View>
          </View>

        </View>

        <ScrollView
          style={styles.container}
          scrollEventThrottle={1}
          contentContainerStyle={styles.contentContainer}
          ref="scrollView"
        >

          {/* Tabs for Progress and Matches */}
          <HomeTabs />

          {/* Stat Center */}
          <View style={{ backgroundColor: '#f8f8f8', marginTop: 10 }}>
            <View style={{
              margin: 10, backgroundColor: '#fff', borderRadius: 15,
            }}>
              <TouchableOpacity style={{ flex: 1, padding: 20, paddingTop: 30, paddingBottom: 30 }} onPress={() => this.props.navigation.navigate("Profile")}>
                <View style={styles.getStartedContainer}>
                  <Text style={[styles.getStartedText, { color: '#333' }]}>Stat Center</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 0.3 }}>
                    <Text style={{ color: '#333', fontSize: 22, fontWeight: 'bold' }}>22-10</Text>
                    <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold' }}>Record</Text>
                  </View>

                  <View style={{ flex: 0.3 }}>
                    <Text style={{ color: '#333', fontSize: 22, fontWeight: 'bold' }}>68.8%</Text>
                    <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold' }}>Win %</Text>
                  </View>

                  <View style={{ flex: 0.3 }}>
                    <Text style={{ color: '#333', fontSize: 22, fontWeight: 'bold' }}>$24.33</Text>
                    <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold' }}>Net Gain</Text>
                  </View>

                  <View style={{ flex: 0.1 }}>
                    <Entypo name={'chevron-with-circle-right'} size={30} color={'#333'} />
                  </View>

                </View>

              </TouchableOpacity>
            </View>
          </View>

          {/* Standings */}
          <View>
            <View style={{ flexDirection: 'row', zIndex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' }}>
              <Text style={{ color: '#333', fontWeight: 'bold', fontSize: 20, marginRight: 10 }}>Standings</Text>
              <TouchableOpacity onPress={() => {
                this.setModalVisible(true);
              }}>
                <MaterialCommunityIcons name={'information'} size={20} color={'#333'} />
              </TouchableOpacity>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => { this.menuToggle() }}>
                  <Feather name={'search'} size={20} color={'#333'} />
                </TouchableOpacity>
              </View>
            </View>
            <Animated.View style={{
              height: 40, zIndex: 0, paddingLeft: 50, paddingRight: 50,
              marginTop: this.state.menuPos.interpolate({
                inputRange: [0, 1],
                outputRange: [-40, 0],
              }),
            }}>
              <TextInput style={{ borderColor: '#E5E5E5', borderWidth: 1, borderRadius: 25, paddingLeft: 15, fontSize: 18 }} placeholder={'Search Names'}>

              </TextInput>
            </Animated.View>


            <GameTabs />


          </View>

        </ScrollView>
      </View>
    );
  }

  menuToggle = () => {
    if (this.state.menuPos.__getValue() == 1) {
      Animated.timing(this.state.menuPos, {
        toValue: 0,
        duration: 300,
        easing: Easing.easing,
      }).start();
    } else {
      Animated.timing(this.state.menuPos, {
        toValue: 1,
        duration: 300,
        easing: Easing.easing,
      }).start();
    }
  };
}


HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  alignCenter: {
    flex: 1,
    alignItems: 'center',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {

  },
  welcomeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeContainerHeader: {
    flex: 0.4,
    justifyContent: 'center'
  },
  welcomeHeader: {
    color: '#888',
    fontSize: 18
  },
  welcomeBalance: {
    color: '#333',
    fontSize: 24,
  },
  welcomeButtonContainer: {
    flex: 0.6,
    alignItems: 'flex-end',
    flexDirection: "row"
  },
  welcomeButton: {
    height: 50,
    width: 50,
    borderRadius: 70,
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
  },
  welcomeButtonText: {
    color: '#888',
    fontSize: 8,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 10,
    textTransform: 'uppercase',
    color: '#333',
    fontWeight: 'bold',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  card: {
    height: 100,
    padding: 15,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333'
  },
  cardSubText: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#888',
    textTransform: 'uppercase'
  }
});
