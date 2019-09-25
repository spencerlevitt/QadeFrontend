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

export default function Matches() {
    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight, marginBottom: 25 }}>

                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <EvilIcons name={'close-o'} size={50} color={'#888'} />
                    </TouchableOpacity>
                    <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 80, width: 80, borderRadius: 5, marginBottom: -15 }} />
                    </View>
                    <View style={{ flex: 0.2 }}>
                    </View>
                </View>
                <Text style={{ marginLeft: 20, color: '#333', fontSize: 20, textAlign: 'center' }}>
                    My Matches
                </Text>
                <View style={{ marginTop: 40, flexDirection: 'row', paddingHorizontal: 20 }}>
                    <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 40, width: 40, borderRadius: 5, marginRight: 15 }} />
                    <View style={{ flex: 1, paddingBottom: 15, borderBottomColor: '#eee', borderBottomWidth: 1 }}>


                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>Chris Wright</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: '#888', textAlign: 'center' }}>10-5</Text>
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
                                    <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>Chris Wright</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: '#888', textAlign: 'center' }}>10-5</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ textAlign: 'center', fontSize: 10 }}>
                                    21m | FIFA 19
                                </Text>
                            </View>

                        </View>

                        <View style={{ flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 12, textAlign: 'center' }}>Juventus</Text>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                                    3 - 4
                                </Text>

                            </View>
                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 12, textAlign: 'center' }}>Real Madrid</Text>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Transfer")} style={styles.welcomeButton}>
                                        <Feather name={'share-2'} size={20} color={'#7ed3ff'} />
                                    </TouchableOpacity>
                                    <Text style={styles.welcomeButtonText}>See Match Stats</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 40, flexDirection: 'row', paddingHorizontal: 20 }}>
                    <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 40, width: 40, borderRadius: 5, marginRight: 15 }} />
                    <View style={{ flex: 1, paddingBottom: 15, borderBottomColor: '#eee', borderBottomWidth: 1 }}>


                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>Chris Wright</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: '#888', textAlign: 'center' }}>10-5</Text>
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
                                    <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>Chris Wright</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: '#888', textAlign: 'center' }}>10-5</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ textAlign: 'center', fontSize: 10 }}>
                                    21m | FIFA 19
                                </Text>
                            </View>

                        </View>

                        <View style={{ flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 12, textAlign: 'center' }}>Juventus</Text>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                                    3 - 4
                                </Text>

                            </View>
                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 12, textAlign: 'center' }}>Real Madrid</Text>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Transfer")} style={styles.welcomeButton}>
                                        <Feather name={'share-2'} size={20} color={'#7ed3ff'} />
                                    </TouchableOpacity>
                                    <Text style={styles.welcomeButtonText}>See Match Stats</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 40, flexDirection: 'row', paddingHorizontal: 20 }}>
                    <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 40, width: 40, borderRadius: 5, marginRight: 15 }} />
                    <View style={{ flex: 1, paddingBottom: 15, borderBottomColor: '#eee', borderBottomWidth: 1 }}>


                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>Chris Wright</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: '#888', textAlign: 'center' }}>10-5</Text>
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
                                    <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>Chris Wright</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: '#888', textAlign: 'center' }}>10-5</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ textAlign: 'center', fontSize: 10 }}>
                                    21m | FIFA 19
                                </Text>
                            </View>

                        </View>

                        <View style={{ flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 12, textAlign: 'center' }}>Juventus</Text>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                                    3 - 4
                                </Text>

                            </View>
                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 12, textAlign: 'center' }}>Real Madrid</Text>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Transfer")} style={styles.welcomeButton}>
                                        <Feather name={'share-2'} size={20} color={'#7ed3ff'} />
                                    </TouchableOpacity>
                                    <Text style={styles.welcomeButtonText}>See Match Stats</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 40, flexDirection: 'row', paddingHorizontal: 20 }}>
                    <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 40, width: 40, borderRadius: 5, marginRight: 15 }} />
                    <View style={{ flex: 1, paddingBottom: 15, borderBottomColor: '#eee', borderBottomWidth: 1 }}>


                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>Chris Wright</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: '#888', textAlign: 'center' }}>10-5</Text>
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
                                    <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>Chris Wright</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: '#888', textAlign: 'center' }}>10-5</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ textAlign: 'center', fontSize: 10 }}>
                                    21m | FIFA 19
                                </Text>
                            </View>

                        </View>

                        <View style={{ flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 12, textAlign: 'center' }}>Juventus</Text>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                                    3 - 4
                                </Text>

                            </View>
                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 12, textAlign: 'center' }}>Real Madrid</Text>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Transfer")} style={styles.welcomeButton}>
                                        <Feather name={'share-2'} size={20} color={'#7ed3ff'} />
                                    </TouchableOpacity>
                                    <Text style={styles.welcomeButtonText}>See Match Stats</Text>
                                </View>
                            </View>

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

Matches.navigationOptions = {
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
