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
import NavigationService from '../../navigation/NavigationService';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { EvilIcons, AntDesign, Feather, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Match() {
    return (
        <View style={styles.container}>

            <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight, marginBottom: 25 }}>

                <View style={{ flex: 0.2 }}>

                </View>
                <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#333', fontSize: 22, textAlign: 'center' }}>
                        Match Facts
                        </Text>
                    <Text style={{ color: '#333', fontSize: 14, textAlign: 'center' }}>
                        21m | NBA $5.00
                        </Text>
                </View>
                <TouchableOpacity onPress={() => NavigationService.navigate("Profile")} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <EvilIcons name={'close-o'} size={50} color={'#888'} />
                </TouchableOpacity>
            </View>

            <ScrollView >


                <View style={{ padding: 40 }}>



                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 40, width: 40, borderRadius: 5, marginRight: 15 }} />
                        <View style={{ flex: 1 }}>


                            <View style={{ flex: 1, flexDirection: 'row' }}>

                                <View style={{ flex: 0.4, flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>Chris Wright</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ color: '#888', textAlign: 'center' }}>10-5</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={{ flex: 0.2 }}>
                                    <Text style={{ textAlign: 'center' }}>
                                        beat
                            </Text>
                                </View>

                                <View style={{ flex: 0.4, flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>Chris Wright</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ color: '#888', textAlign: 'center' }}>10-5</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Score</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Fields Goals</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>3 Points</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Free Throws</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Fast Break Points</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Points in Paint</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Second Chance</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Bench Points</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Assists</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Offensive Rebounds</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Defensive Rebounds</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Steals</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Blocks</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Turnovers</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>120</Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Team Fouls</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>
                    </View>

                </View>

            </ScrollView>
        </View>

    );
}


/*

With Data Provider (Example)

        To get the first name and last character for longer names

        var namesplit = data.name.split(" ")

        let name = null
        if(namesplit[0].length() > 8 || namesplit[1].length() > 8){
          name = namesplit[0] + " " + namesplit[1].charAt(0)
        }else{
          name = data.name
        }


        Data Provider

        <View style={{ marginTop: 40, flexDirection: 'row' }}>
          <Image source={{ uri: '{data.profilePic}' }} style={{ height: 40, width: 40, borderRadius: 5, marginRight: 15 }} />
          <View style={{ flex: 1, paddingBottom: 15, borderBottomColor: '#eee', borderBottomWidth: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333' }]}>{data.name}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: '#888' }}>{data.wins}-{data.losses}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.15 }}>
                <Text style={{ textAlign: 'center' }}>
                  beat
                </Text>
              </View>
              <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333' }]}>{data.loser}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: '#888' }}>{data.loserWin}-{data.loserLosses}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 0.25 }}>
                <Text style={{ textAlign: 'center', fontSize: 12 }}>
                  {data.gametime} | {data.game}
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <View style={{ flex: 0.35 }}>
                <Text style={{ textAlign: 'center' }}>{data.team1}</Text>
              </View>
              <View style={{ flex: 0.3 }}>
                <Text style={{ fontSize: 24, textAlign: 'center' }}>
                  {data.score1} - {data.score2}
              </Text>
              </View>
              <View style={{ flex: 0.35 }}>
                <Text style={{ textAlign: 'center' }}>{data.team2}</Text>
              </View>
            </View>
          </View>
        </View>



*/

Match.navigationOptions = {
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
        fontSize: 6,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
});
