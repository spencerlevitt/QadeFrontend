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
import Constants from '../../constants';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from 'react-native-gesture-handler';

//console.disableYellowBox = true

export default class AwaitScreen extends React.Component {


    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 110 + statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: statusBarHeight }}>
                    <View style={{ flex: 0.2 }}>
                    </View>
                    <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#333', fontSize: 20 }}>Score Confirmation</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Game')} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <EvilIcons name={'close'} size={50} color={'#888'} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, padding: 50, paddingTop: 100, alignItems: 'center' }}>


                    <FontAwesome name={'check'} style={{margin: 30}} size={180} color={'#3A8FFF'} />

                    <Text style={{fontSize: 22, textAlign: 'center', color: '#333'}}>Awaiting confirmation from opponent. {'\n'}
                        Your Scores and statistics will populate within 24 hours.</Text>

                </View>
            </View>
        );
    }
}

AwaitScreen.navigationOptions = {
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
