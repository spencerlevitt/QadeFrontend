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

export default function Settings() {
    return (
        <View style={styles.container}>

            <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight, marginBottom: 25 }}>

                <TouchableOpacity onPress={() => NavigationService.navigate("Profile")} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <EvilIcons name={'close-o'} size={50} color={'#888'} />
                </TouchableOpacity>

                <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#333', fontSize: 20, textAlign: 'center' }}>
                        Settings
                        </Text>
                </View>

                <View style={{ flex: 0.2 }}>

                </View>

            </View>

            <ScrollView >


                <View style={{ padding: 40 }}>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <TouchableOpacity style={{ borderBottomColor: '#eee', borderBottomWidth: 1, paddingBottom: 10 }} onPress={() => NavigationService.navigate("EditProfile")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 22 }}>
                                        Edit Profile
                                    </Text>
                                </View>
                                <EvilIcons name={'chevron-right'} size={40} color={'#888'} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <TouchableOpacity style={{ borderBottomColor: '#eee', borderBottomWidth: 1, paddingBottom: 10 }} onPress={() => NavigationService.navigate("Support")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 22 }}>
                                        Support
                                    </Text>
                                </View>
                                <EvilIcons name={'chevron-right'} size={40} color={'#888'} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <TouchableOpacity style={{ borderBottomColor: '#eee', borderBottomWidth: 1, paddingBottom: 10 }} onPress={() => NavigationService.navigate("ToS")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 22 }}>
                                        Terms of Service
                                    </Text>
                                </View>
                                <EvilIcons name={'chevron-right'} size={40} color={'#888'} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <TouchableOpacity style={{ borderBottomColor: '#eee', borderBottomWidth: 1, paddingBottom: 10 }} onPress={() => NavigationService.navigate("Privacy")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 22 }}>
                                        Privacy Policy
                                    </Text>
                                </View>
                                <EvilIcons name={'chevron-right'} size={40} color={'#888'} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <TouchableOpacity style={{ borderBottomColor: '#eee', borderBottomWidth: 1, paddingBottom: 10 }} onPress={() => this.props.navigation.navigate("Matches")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 22 }}>
                                        Invite Friends
                                    </Text>
                                </View>
                                <EvilIcons name={'chevron-right'} size={40} color={'#888'} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <TouchableOpacity style={{ borderBottomColor: '#eee', borderBottomWidth: 1, paddingBottom: 10 }} onPress={() => NavigationService.navigate("GameRules")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 22 }}>
                                        Rules
                                    </Text>
                                </View>
                                <EvilIcons name={'chevron-right'} size={40} color={'#888'} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <TouchableOpacity style={{ borderBottomColor: '#eee', borderBottomWidth: 1, paddingBottom: 10 }} onPress={() => this.props.navigation.navigate("Matches")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 22 }}>
                                        How to Play
                                    </Text>
                                </View>
                                <EvilIcons name={'chevron-right'} size={40} color={'#888'} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <TouchableOpacity style={{ borderBottomColor: '#eee', borderBottomWidth: 1, paddingBottom: 10 }} onPress={() => this.props.navigation.navigate("Matches")}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 22 }}>
                                        Sign Out
                                    </Text>
                                </View>
                                <EvilIcons name={'chevron-right'} size={40} color={'#888'} />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </View>

    );
}

Settings.navigationOptions = {
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
