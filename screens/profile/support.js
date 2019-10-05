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
import NavigationService from '../../navigation/NavigationService';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { EvilIcons, AntDesign, Feather, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Support() {
    return (
        <View style={styles.container}>

            <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight, marginBottom: 25 }}>

                <View style={{ flex: 0.2 }}>

                </View>

                <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#333', fontSize: 22, textAlign: 'center' }}>
                        Support
                    </Text>
                </View>
                <TouchableOpacity onPress={() => NavigationService.navigate("Settings")} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <EvilIcons name={'close-o'} size={50} color={'#888'} />
                </TouchableOpacity>



            </View>

            <ScrollView >
                <View style={{ padding: 40 }}>
                    <Text style={{ fontSize: 22, textAlign: 'center', lineHeight: 30 }}>
                        We look forward to hearing from you. We’ll do our best to respond as soon as we can!
                    </Text>
                </View>

                <View style={{ padding: 40 }}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 8, textTransform: 'uppercase' }}>
                            Message
                        </Text>
                    </View>

                    <TextInput style={{ borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 5, }} placeholder={'Enter your message here.'}>

                    </TextInput>
                </View>

                <View style={{ padding: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{padding: 10, borderColor: '#888', borderRadius: 5, borderWidth: 2, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#69C0FF'}}>SUBMIT</Text>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

Support.navigationOptions = {
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
