import React from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
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
        const gameID = navigation.getParam('game');

        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#333', fontSize: 20 }}>Score Confirmation</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 20 }}>
                        <Text style={{ fontSize: 16, color: '#333', textAlign: 'center', fontWeight: 'bold' }}>Opponent</Text>
                    </View>
                    <View style={{ flex: 0.1, paddingLeft: 100, paddingRight: 100 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 60, width: 60, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.cardText, { fontSize: RFPercentage(2.4), fontWeight: 'bold', color: '#333' }]}>Chris Wright</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: '#888' }}>NBA</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: '#888' }}>$5.00</Text>
                                    </View>
                                </View>

                            </View>


                        </View>
                    </View>
                    <View style={{ flex: 0.35, justifyContent: 'flex-end', alignItems: 'center', paddingLeft: 50, paddingRight: 50 }}>
                        <Text style={{ fontSize: 18, color: '#333', marginBottom: 20 }}>Matt's Submission: You Lost</Text>
                        <Text style={{ fontSize: 18, color: '#333', marginBottom: 20 }}>Is this correct?</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("ScoreB")}>
                                    <EvilIcons name={'close-o'} size={60} color={'#e6685f'} />
                                </TouchableOpacity>

                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("ScoreA")}>
                                    <EvilIcons name={'check'} size={60} color={'#5eb97e'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'flex-end', padding: 10}}>

                        <Text style={{ fontSize: 14, color: '#333', textAlign: 'center' }}>You may not enter the app until you confirm or deny your opponent's submission.</Text>

                    </View>
                    <View style={{ flex: 0.25, justifyContent: 'flex-end', padding: 30 }}>
                        <Text style={{ color: '#ccc', fontSize: 10 }}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        {'\n'}quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        {'\n'}Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Text>
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
