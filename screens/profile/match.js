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
import Constants from '../../constants';
import NavigationService from '../../navigation/NavigationService';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';


import moment from 'moment';

export default function Match( { navigation } ) {
    const stats = navigation.getParam('stats');
    var game_key = '';
    switch(stats.game_played){
       case 'NHL' :{
          game_key = 'NHL19MatchData';
          break;
       }
       case 'MAD' :{
          game_key = 'Madden19MatchData';
          break;
       }
       case 'FIF' :{
          game_key = 'FIFA19MatchData';
          break;
       }
       case 'NBA' :{
          game_key = 'NBA19MatchData';
          break;
       }
    }

    var winner = parseInt(stats[game_key].team1_score) > parseInt(stats[game_key].team2_score) ? 'team1_' : 'team2_';
    var loser = parseInt(stats[game_key].team1_score) > parseInt(stats[game_key].team2_score) ? 'team2_' : 'team1_';
    return (
        <View style={styles.container}>

            <View style={{ height: 110 + statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: statusBarHeight, marginBottom: 25 }}>

                <View style={{ flex: 0.2 }}>

                </View>
                <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#333', fontSize: 22, textAlign: 'center' }}>
                        Match Facts
                        </Text>
                    <Text style={{ color: '#333', fontSize: 14, textAlign: 'center' }}>
                        {`${moment(stats.created_at).format('MM-DD')  } | ${stats.game_played} `}
                        </Text>
                </View>
                <TouchableOpacity onPress={() => NavigationService.navigate("Matches")} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <EvilIcons name={'close-o'} size={50} color={'#888'} />
                </TouchableOpacity>
            </View>

            <ScrollView >


                <View style={{ padding: 40 }}>



                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                          <Image 
                           source={
                           stats.winner &&
                           stats.winner.profile &&
                           stats.winner.profile.photo_url &&
                           stats.winner.profile.photo_url.length ? 
                           {uri: stats.winner.profile.photo_url} : require('../../assets/man.png')} 
                           style={{ height: 40, width: 40, borderRadius: 5, marginRight: 15 }} 
                           />
                        <View style={{ flex: 1 }}>

                            <View style={{ flex: 1, flexDirection: 'row' }}>

                                <View style={{ flex: 0.4, flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>
                                        {stats.winner.first_name} {stats.winner.last_name}
                                        </Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ color: '#888', textAlign: 'center' }}>
                                                  {stats.winner.statistics.won_games}-{stats.winner.statistics.lost_games}
                                                </Text>
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
                                        <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>
                                        {stats.loser.first_name} {stats.loser.last_name}
                                        </Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ color: '#888', textAlign: 'center' }}>
                                                {stats.loser.statistics.won_games}-{stats.loser.statistics.lost_games}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                  {/*stats && 
                   stats[game_key] &&
                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>
                            {stats}
                            </Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>Score</Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>111</Text>
                        </View>
                    </View>
                  */}

                   {stats && 
                   stats[game_key]
                    ? Object.keys(stats[game_key]).map( (key, idx)=>{
                     if(key.substring(0, 6) !== winner) return null;
                     return (
                     <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>
                            {stats[game_key][key]}
                            </Text>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <Text style={{ textAlign: 'center' }}>
                            {key.replace(winner, '')}
                            </Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ textAlign: 'center' }}>
                            {stats[game_key][key.replace(winner, loser)]}
                            </Text>
                        </View>
                    </View>
                       )
                    }) : null }
                     
                  

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
