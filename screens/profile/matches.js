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
import _ from 'lodash';

import moment from 'moment';

function getDataKey(game){
   var o = {};
   switch(game.game_played){
       case 'NHL' :{
          o = game['NHL19MatchData'];
          break;
       }
       case 'MAD' :{
          o = game['Madden19MatchData'];
          break;
       }
       case 'FIF' :{
          o = game['FIFA19MatchData'];
          break;
       }
       case 'NBA' :{
          o =  game['NBA19MatchData'];
          break;
       }
    }
    return o;
    //var winner = parseInt(stats[game_key].team1_score) > parseInt(stats[game_key].team2_score) ? 'team1_' : 'team2_';
   // var loser = parseInt(stats[game_key].team1_score) > parseInt(stats[game_key].team2_score) ? 'team2_' : 'team1_';
}

export default function Matches( { navigation } ) {
    const matches = navigation.getParam('matches');
    const photo_url = navigation.getParam('photo_url');
    console.log('*****');
    console.log(matches && matches.length);
    console.log('*****');



    return (
        <View style={styles.container}>
            <View style={{ height: 110 + statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: statusBarHeight, marginBottom: 25 }}>
                <TouchableOpacity onPress={() => NavigationService.navigate("Profile")} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <EvilIcons name={'close-o'} size={50} color={'#888'} />
                </TouchableOpacity>
                <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center' }}>
                     <Image 
                           source={
                           photo_url &&                            
                           photo_url.length ? 
                           {uri: photo_url.replace('?a', '?alt=media')} : require('../../assets/man.png')} 
                            style={{ height: 80, width: 80, borderRadius: 5, marginBottom: -15 }}
                           />
                </View>
                <View style={{ flex: 0.2 }}>
                </View>
            </View>

            <ScrollView >

                <Text style={{ marginLeft: 20, color: '#333', fontSize: 20, textAlign: 'center' }}>
                    My Matches
                </Text>
                {matches && matches.reverse().map( (e,index)=>{
               return (
                <View 
                key={e.id}
                style={{ marginTop: 40, flexDirection: 'row', paddingHorizontal: 20 }}>
                  <Image 
                           source={
                           e.winner &&
                           e.winner.profile &&
                           e.winner.profile.photo_url ? 
                           {uri: e.winner.profile.photo_url} : require('../../assets/man.png')} 
                           style={{ height: 40, width: 40, borderRadius: 5, marginRight: 15 }} 
                           />
                    <View style={{ flex: 1, paddingBottom: 15, borderBottomColor: '#eee', borderBottomWidth: 1 }}>

                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>
                                    {e.winner.first_name} {e.winner.last_name}
                                    </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: '#888', textAlign: 'center' }}>
                                            {e.winner.statistics.won_games}-{e.winner.statistics.lost_games}
                                            </Text>
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
                                    <Text style={[styles.cardText, { fontSize: RFPercentage(1.5), fontWeight: 'bold', color: '#333', textAlign: 'center' }]}>
                                    {e.loser.first_name} {e.loser.last_name}
                                    </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: '#888', textAlign: 'center' }}>
                                            {e.loser.statistics.won_games}-{e.loser.statistics.lost_games}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ textAlign: 'center', fontSize: 10 }}>
                                {moment(e.created_at).format('MM-DD')  } | {e.game_played}
                                </Text>
                            </View>

                        </View>

                        
                        <View style={{ flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        
                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 12, textAlign: 'center' }}>
                               {getDataKey(e).team1}
                                </Text>
                            </View>

                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                                    {`${parseInt(getDataKey(e).team1_score)}-${parseInt(getDataKey(e).team2_score)}`}
                                </Text>

                            </View>
                            <View style={{ flex: 0.25 }}>
                                <Text style={{ fontSize: 12, textAlign: 'center' }}>
                                {getDataKey(e).team2}
                                </Text>
                            </View>
                           
                            <View style={{ flex: 0.25 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity 
                                    onPress={() =>{
                                    
                                     NavigationService.navigate("Match", {stats: e});
                                    }} 
                                    style={styles.welcomeButton}>
                                        <Feather name={'share-2'} size={20} color={'#7ed3ff'} />
                                    </TouchableOpacity>
                                    <Text style={styles.welcomeButtonText}>See Match Stats</Text>
                                </View>
                            </View>

                        </View>
                        
                    </View>
                </View>
               )})}
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
