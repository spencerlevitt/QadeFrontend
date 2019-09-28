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

export default function EditProfile() {
    return (
        <View style={styles.container}>

            <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight, marginBottom: 25 }}>

                <View style={{ flex: 0.2 }}>

                </View>

                <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#333', fontSize: 22, textAlign: 'center' }}>
                        Edit Profile
                    </Text>
                </View>
                <TouchableOpacity onPress={() => NavigationService.navigate("Profile")} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <EvilIcons name={'close-o'} size={50} color={'#888'} />
                </TouchableOpacity>



            </View>

            <ScrollView >


                <View>

                    <View style={{ flexDirection: 'row', paddingHorizontal: 40 }}>
                        <View style={{ flex: 0.4, borderBottomColor: '#888', borderBottomWidth: 1 }}>
                            <Text style={{ fontSize: 8, textTransform: 'uppercase' }}>
                                First Name
                        </Text>
                            <TextInput placeholder={'Chris'}>

                            </TextInput>
                        </View>
                        <View style={{ flex: 0.2 }}>

                        </View>
                        <View style={{ flex: 0.4 }}>
                            <View style={{ flex: 0.4, borderBottomColor: '#888', borderBottomWidth: 1 }}>
                                <Text style={{ fontSize: 8, textTransform: 'uppercase' }}>
                                    Last Name
                                </Text>
                                <TextInput placeholder={'Wright'}>

                                </TextInput>
                            </View>
                        </View>
                    </View>


                    <View style={{ marginBottom: 10, marginTop: 30, paddingHorizontal: 40 }}>
                        <Text style={{ fontSize: 8, textTransform: 'uppercase' }}>
                            Console
                            </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginBottom: 40, paddingHorizontal: 40 }}>

                        <TouchableOpacity style={{ flex: 1 / 3, margin: 5, borderRadius: 5, borderWidth: 2, borderColor: '#eee', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#69C0FF' }}>Xbox One</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1 / 3, margin: 5, borderRadius: 5, borderWidth: 2, borderColor: '#eee', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#69C0FF' }}>Playstation 4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1 / 3, margin: 5, borderRadius: 5, borderWidth: 2, borderColor: '#eee', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#69C0FF' }}>None</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: '#F8F8F8', padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: '#fff', width: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 60, width: 60, borderRadius: 5, margin: 15, marginHorizontal: 30 }} />
                            <Text style={{ color: '#333', fontSize: 22, textAlign: 'center' }}>
                                Change Profile
                            </Text>
                            <EvilIcons name={'chevron-right'} size={40} color={'#888'} />
                        </TouchableOpacity>
                    </View>

                    <View style={{padding: 40}}>
                        <View style={{marginBottom: 10}}>
                            <Text style={{ fontSize: 8, textTransform: 'uppercase' }}>
                                Short Bio
                            </Text>
                        </View>

                        <TextInput style={{ borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 5, }} placeholder={'Hi! My name is Chris, I’m a sports gamer from San Francisco, CA. Contact me at john@mail.com'}>

                        </TextInput>
                    </View>





                </View>

            </ScrollView>
        </View>

    );
}

EditProfile.navigationOptions = {
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
