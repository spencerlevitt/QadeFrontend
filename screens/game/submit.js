import React from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
import Constants from 'expo-constants';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import { MaterialCommunityIcons, AntDesign, EvilIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from 'react-native-gesture-handler';

//console.disableYellowBox = true   

export default class Submit extends React.Component {


    render() {

        const { navigation } = this.props;

        const game = navigation.getParam('game');
        const gameID = navigation.getParam('game').game;
        const isUserWon = navigation.getParam('isUserWon');

        let gamePic
        let gameSS

        switch(gameID){
            case 'NBA' : {
                gamePic = require('../../assets/images/game/nba-header.png')
                gameSS = require('../../assets/images/game/nba-ss.png')
            }
            break;
            case 'NFL' : {
                gamePic = require('../../assets/images/game/nfl-header.png')
                gameSS = require('../../assets/images/game/nfl-ss.png')
            }
            break;
            case 'FIF' : {
                gamePic = require('../../assets/images/game/fifa-header.png')
                gameSS = require('../../assets/images/game/fifa-ss.png')
            }
            break;
            case 'NHL' : {
                gamePic = require('../../assets/images/game/nhl-header.jpg')
                gameSS = require('../../assets/images/game/nhl-ss.png')
            }
            break;
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight }}>
                    <View style={{ flex: 0.2 }}>
                    </View>
                    <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#333', fontSize: 20 }}>Submit Score</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <EvilIcons name={'close-o'} size={50} color={'#888'} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.3 }}>
                        <Image style={{flex: 1,width: Dimensions.get("window").width, height: 200}} resizeMode='cover' source={gamePic} />
                    </View>
                    <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#888', textAlign: 'center', paddingTop: 20, paddingBottom: 20 }}>Turn your phone sideways and take picture</Text>
                        <View style={{ flex: 1 }} style={{ alignItems: 'flex-end' }}>
                            <Image source={gameSS} />
                        </View>
                    </View>
                    <View style={{ flex: 0.2, padding: 30 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Camera", { game, isUserWon })} style={{ flex: 1 }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: 22, color: '#333', textAlign: 'right' }}>
                                        Take Picture
                                </Text>
                                    <EvilIcons name={'arrow-right'} size={50} color={'#333'} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

Submit.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    tabBar: {
        flexDirection: 'row',
    },
    tabItem: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
    },
    realTabItem: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
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
});
