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
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';



//console.disableYellowBox = true

export default class ChallengeConfirmation extends React.Component {

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 110 + statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: statusBarHeight }}>
                    <View style={{ flex: 0.2 }}>
                    </View>
                    <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#333', fontSize: 20 }}>Challenge Sent</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <EvilIcons name={'check'} size={50} color={'#888'} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, padding: 50, paddingTop: 100, alignItems: 'center' }}>


                    <FontAwesome name={'check'} style={{margin: 30}} size={180} color={'#3A8FFF'} />

                    <Text style={{fontSize: 22, textAlign: 'center', color: '#333'}}>Your challenge request has been sent. {'\n'}
                        You will be notified once your opponent accepts or rejects within 24 hours.</Text>

                </View>
            </View>
        );
    }
}

ChallengeConfirmation.navigationOptions = {
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
