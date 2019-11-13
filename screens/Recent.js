import React, { Component,  useState, useEffect } from 'react';
import {
  Platform,
  ActivityIndicator,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  FlatList,
  Alert,
  SafeAreaView
} from 'react-native';
import Constants from '../constants';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { EvilIcons, AntDesign, Feather, FontAwesome, Entypo, MaterialCommunityIcons } from 'react-native-vector-icons';
import { connect } from 'react-redux';
import { getGamers, getRecentGames } from '../redux/actions/gamersActions';
import { sendAFriendRequest } from '../redux/actions/friendRequestActions';
import axios from 'axios';

function gamersComponent(userInfo, props) {
  const { userId, csrfToken, loggedInUser, sendAFriendRequest, navigation } = props;
  if(userId === userInfo.profile.id){
     return null;
  }
  return (
    <View style={{flexDirection: 'row', marginTop: 20}}>
      <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
        <Image 
      source={
      userInfo.profile &&
      userInfo.profile.photo_url &&
      userInfo.profile.photo_url.length ? 
      {uri: userInfo.profile.photo_url.replace('?a', '?alt=media')} : require('../assets/man.png')} 
           style={{ height: 40, width: 40, borderRadius: 5}} 
           />
      </View>
      <View style={styles.gameInfo}>
        <View>
          <Text style={{color: '#353637', fontSize: 14, marginBottom: 7, fontWeight: 'bold'}}>{userInfo.first_name} {userInfo.last_name && userInfo.last_name}</Text>
          <Text style={styles.boldText}>Lifetime against 0-0</Text>
        </View>
        {
          userInfo.is_friend === true ?
          (<TouchableOpacity 
          onPress={() =>{
            navigation.navigate('Challenge')
          }}
           style={{ backgroundColor: '#3A8FFF', paddingLeft: 12, paddingRight: 12, paddingTop: 5, paddingBottom: 5, marginRight: 10 }}><Text style={styles.clickableText}>{'Challenge'.toUpperCase()}</Text></TouchableOpacity>) :
          userInfo.is_friend === false ?
          (<TouchableOpacity 
          onPress={() => {
            sendAFriendRequest(userId, userInfo.profile.id, csrfToken)
              axios.post(socketBaseUrl+'/socket', {
               message:`${loggedInUser.user.first_name} sent you a friend request`,
               event:'friendReq',
               sender_id: loggedInUser.user.pk,
               user_id: userInfo.profile.id
            });
         }} 
          style={{ backgroundColor: '#000', paddingLeft: 12, paddingRight: 12, paddingTop: 5, paddingBottom: 5, marginRight: 10 }}><Text style={styles.clickableText}>{'Add Friend'.toUpperCase()}</Text></TouchableOpacity>)
          :
          (<TouchableOpacity 
          style={{ backgroundColor: '#43a24e', paddingLeft: 12, paddingRight: 12, paddingTop: 5, paddingBottom: 5, marginRight: 10 }}><Text style={styles.clickableText}>{'friend request sent'.toUpperCase()}</Text></TouchableOpacity>)
        }
      </View>
    </View>
  )
}

function renderMatches(gameInfo) {
  const { first_name, last_name } = gameInfo.winner;
  //console.log(gameInfo.winner.profile);
  return (
    <View style={{ marginTop: 40, flexDirection: 'row' }}>
      <View style={{ flex: 0.5, alignItems: 'center' }}>
         <Image 
      source={
      gameInfo && 
      gameInfo.winner &&
      gameInfo.winner.profile &&
      gameInfo.winner.profile.photo_url ?
      {uri: gameInfo.winner.profile.photo_url.replace('?a', '?alt=media')} : require('../assets/blank.png')} 
      style={{ height: 40, width: 40, borderRadius: 5}} 
      />
      </View>
      <View style={{ flex: 2, paddingBottom: 15, borderBottomColor: '#eee', borderBottomWidth: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row'}}>
            <View style={{}}>
              <Text style={[styles.cardText, { fontSize: 10, fontWeight: 'bold', color: '#333'}]}>{first_name && first_name} {last_name && last_name}</Text>
              <Text style={{ color: '#888'}}>{gameInfo.winner.statistics.won_games} {" - "} {gameInfo.winner.statistics.lost_games}</Text>
            </View>

            <Text style={{ fontSize: 12, color: '#888', paddingLeft: 10, paddingRight: 10 }}>
              beat
            </Text>

            <View style={{}}>
              <Text style={[styles.cardText, { fontSize: 10, fontWeight: 'bold', color: '#333' }]}>{gameInfo.loser.first_name} {gameInfo.loser.last_name}</Text>    
              <Text style={{ color: '#888' }}>{gameInfo.loser.statistics.won_games} {" - "} {gameInfo.loser.statistics.lost_games}</Text>
            </View>
          </View>

          <View style={{marginRight: 10}}>
            <Text style={{ fontSize: 12, color: '#888' }}>
              {gameInfo.game_played}
            </Text>
          </View>

        </View>

        <View style={{ width: '80%', marginTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: 12 }}>{gameInfo.winning_team.toUpperCase()}</Text>

            <Text style={{ fontSize: 24, marginLeft: 15, marginRight: 15 }}>
              {Math.round(gameInfo.winning_score)} { " - "} {Math.round(gameInfo.losing_score)}
          </Text>
          
            <Text style={{ fontSize: 12 }}>{gameInfo.losing_team.toUpperCase()}</Text>
          

        </View>
      </View>
    </View>
  )
}

function Recent(props) {
  const [componentView, setComponentView] = useState('recent');
  const [userInput, setUserInput] = useState('');
  const [page, setPage] = useState(2);
  const [fetching, setFetching] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const { gamers, loggedInUser, getRecentGames, csrfToken, recentGamers, recentGamersError, is_next_gamer } = props

  useEffect( async () => { 
    setFetching(true)
    console.log('============ >>>>>');
   getRecentGames(csrfToken, 1, null, loggedInUser.user.pk);
    updatePage();

    setFetching(false)
  }, []); 

  function searchText(text) {
    setComponentView('gamers');
    setUserInput(text);
    props.getGamers(text, props.csrfToken)
  }

  async function handleMore() {
    setFetching(true)
    if (is_next_gamer) {
      await getRecentGames(csrfToken, page, null, loggedInUser.user.pk).then( (resp)=>{
         console.log('calling ====>');
      })
      updatePage();
    }
    setFetching(false)
  }

  function updatePage() {
    if(recentGamersError !== null) {
      let currentPage = page +1;
      setPage(currentPage);
    }
  }

  function renderFooter() {
    if (fetching) {
      return (
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE"
          }}
        >
          <ActivityIndicator animating size="large" />
      </View>
      )
    }
    else {
      return null;
    }
  }

  function refresh() {
    setRefreshing(true)
    getRecentGames(csrfToken, 1, 'refresh', loggedInUser.user.pk).then( (resp)=>{
   
    setRefreshing(false)
    })
    setPage(2);
   
  }

  useEffect( () => {
    if(userInput === '') {
      setComponentView('recent')
    }
  })
  return (
    <View style={styles.container}>
      <View style={{ marginTop: statusBarHeight, padding: 20 }}>
        <View style={[styles.shadow, { borderRadius: 20, backgroundColor: '#fff', flexDirection: 'row' }]}>
          <View style={{ width: 60, paddingTop: 10, paddingBottom: 10 }}>
            <View style={{ width: 60, borderRightWidth: 1, borderRightColor: '#eee', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ height: 20, width: 20, margin: 10 }} source={require('../assets/images/menu.png')} />
            </View>
          </View>

      {console.log(recentGamers)}

          <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 15 }}>
            <TextInput onChangeText={text => searchText(text)} style={{ color: '#78849E', fontSize: 16 }} placeholderTextColor={'#78849E'} placeholder={'Search Gamers'}>

            </TextInput>
          </View>
        </View>
      </View>
      {
        componentView === 'recent' ? 
        (
        <>
          <Text style={{ marginLeft: 20, color: '#333', fontSize: 24 }}>
          Recent Matches
          </Text>
          {
            recentGamers ?
              (
                <View style={{ flex: 1 }}>
                  <FlatList 
                    data={recentGamers}
                    extraData={recentGamers}
                    renderItem = {({ item }) => renderMatches(item, props)}
                    keyExtractor={item => item.id + ""}
                    onEndReached={handleMore}
                    onEndReachedThreshold={0.5}
                    keyExtractor={item => item.id + Math.random()} 
                    refreshing={refreshing}
                    onRefresh={refresh}
                    ListFooterComponent={renderFooter}
                  />
                </View>
              ) :
              (<Text style={{ marginLeft: 20, color: '#333', fontSize: 18, textAlign: 'center' }}> No recent matches </Text>)
          }
        </>
        ) : 
        (
          gamers.length ?
            (
              <FlatList 
                data={gamers}
                renderItem = {({ item }) => gamersComponent(item, props)}
                keyExtractor={item => item.profile.id + ""}  
              />
            ) : (<Text style={{ marginLeft: 20, color: '#333', fontSize: 24 }}> gamer not available </Text>)
        )
      }
    </View>

  );
}

const mapStateToProps = ({ gamersReducer, auth, userDetails }) => ({
  csrfToken: auth.csrfToken,
  gamers: gamersReducer.gamers,
  loggedInUser: auth.loggedInUser,
  recentGamers: gamersReducer.recentGamers,
  userId: userDetails.statistics.id,
  recentGamersError: gamersReducer.fetchRecentGamersErr,
  is_next_gamer: gamersReducer.is_next_gamer
})

export default connect(mapStateToProps, { getGamers, sendAFriendRequest, getRecentGames })(Recent);

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
  gameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 2,
    padding: 4
  },
  boldText: {
    fontSize: 14,
    color: "#7f8283"
  },
  clickableText: {
    color: '#fff', fontSize: 10
  }
});
