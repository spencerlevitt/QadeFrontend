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

export default class CameraPre extends React.Component {


    render() {

        const { navigation } = this.props;
        const uri = navigation.getParam('photoData');

        

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{height: Dimensions.get('window').height / 2, width: Dimensions.get('window').width / 2}} source={uri}/>
                <View style={{ flex: 0.35, justifyContent: 'flex-end', alignItems: 'center', paddingLeft: 100, paddingRight: 100 }}>
                        <Text style={{ fontSize: 22, color: '#333', marginBottom: 20 }}>Looking good?</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <EvilIcons name={'close-o'} size={60} color={'#e6685f'} />
                                </TouchableOpacity>

                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                {/* Handle the photo data verification process */}
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Await")}>
                                    <EvilIcons name={'check'} size={60} color={'#5eb97e'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </View>
        );
    }
}

CameraPre.navigationOptions = {
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
