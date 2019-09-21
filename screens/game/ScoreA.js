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
import { MaterialCommunityIcons, AntDesign, EvilIcons, FontAwesome } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from 'react-native-gesture-handler';

//console.disableYellowBox = true

export default class ScoreA extends React.Component {


    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#333', fontSize: 20 }}>Score Confirmation</Text>
                    </View>
                </View>
                <View style={{ flex: 1, padding: 50, alignItems: 'center' }}>


                    <FontAwesome name={'check'} style={{ marginBottom: 30 }} size={180} color={'#3A8FFF'} />

                    <Text style={{ fontSize: 22, textAlign: 'center', color: '#333' }}>We have updated your record and balance accordingly. {'\n\n\n'}
                        Your game statistics will populate in your stat center within 24 hours.</Text>

                    <View style={{ flex: 1, width: '100%', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: "#3A8FFF", height: 60, width: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}  onPress={() => this.props.navigation.navigate("Game")}>
                            <Text style={{ color: '#fff', fontSize: 14 }}>Enter</Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </View>
        );
    }
}

ScoreA.navigationOptions = {
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
