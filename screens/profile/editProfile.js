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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { EvilIcons, AntDesign, Feather, FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export default class EditProfile extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            selected: 0
        }
    }

    _scrollToInput(reactNode: any) {
        // Add a 'scroll' ref to your ScrollView
        this.scroll.props.scrollToFocusedInput(reactNode)
    }

    render() {

        return (
            <KeyboardAwareScrollView style={styles.container} innerRef={ref => {
                this.scroll = ref
            }}>

                <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight, marginBottom: 25 }}>

                    <View style={{ flex: 0.2 }}>

                    </View>

                    <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#333', fontSize: 22, textAlign: 'center' }}>
                            Edit Profile
                    </Text>
                    </View>
                    <TouchableOpacity onPress={() => NavigationService.navigate("Settings")} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <EvilIcons name={'close-o'} size={50} color={'#888'} />
                    </TouchableOpacity>



                </View>

                <View style={{marginBottom: 250}}>


                    <View>

                        <View style={{ flexDirection: 'row', paddingHorizontal: 40 }}>
                            <View style={{ flex: 0.4, borderBottomColor: '#888', borderBottomWidth: 1 }}>
                                <Text style={{ fontSize: 8, textTransform: 'uppercase', marginBottom: 5, }}>
                                    First Name
                        </Text>
                                <TextInput onFocus={(event: Event) => {
                            // `bind` the function if you're using ES6 classes
                            this._scrollToInput((event.target))
                        }} placeholder={'Chris'} placeholderTextColor={'#888'}>

                                </TextInput>
                            </View>
                            <View style={{ flex: 0.2 }}>

                            </View>
                            <View style={{ flex: 0.4 }}>
                                <View style={{ flex: 0.4, borderBottomColor: '#888', borderBottomWidth: 1 }}>
                                    <Text style={{ fontSize: 8, textTransform: 'uppercase', marginBottom: 5, }}>
                                        Last Name
                                </Text>
                                    <TextInput onFocus={(event: Event) => {
                            // `bind` the function if you're using ES6 classes
                            this._scrollToInput((event.target))
                        }} placeholder={'Wright'} placeholderTextColor={'#888'}>

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

                            <TouchableOpacity onPress={() => this.setState({selected: 0})} style={{ flex: 1 / 3, margin: 5, padding: 5, backgroundColor: this.state.selected == 0 ? '#fff' : '#69C0FF', borderRadius: 5, borderWidth: 2, borderColor: this.state.selected == 0 ? '#888' : '#69C0FF', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: this.state.selected == 0 ? '#888' : '#fff', fontSize: 10 }}>Xbox One</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({selected: 1})} style={{ flex: 1 / 3, margin: 5, padding: 5, backgroundColor: this.state.selected == 1 ? '#fff' : '#69C0FF', borderRadius: 5, borderWidth: 2, borderColor: this.state.selected == 1 ? '#888' : '#69C0FF', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: this.state.selected == 1 ? '#888' : '#fff', fontSize: 10 }}>Playstation 4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({selected: 2})} style={{ flex: 1 / 3, margin: 5, padding: 5, backgroundColor: this.state.selected == 2 ? '#fff' : '#69C0FF', borderRadius: 5, borderWidth: 2, borderColor: this.state.selected == 2 ? '#888' : '#69C0FF', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: this.state.selected == 2 ? '#888' : '#fff', fontSize: 10 }}>None</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ backgroundColor: '#F8F8F8', padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ backgroundColor: '#fff', width: '100%', borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} onPress={() => NavigationService.navigate('CameraPro')}>
                                <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 60, width: 60, borderRadius: 5, margin: 15, marginHorizontal: 30 }} />
                                <Text style={{ color: '#333', fontSize: 22, textAlign: 'center' }}>
                                    Change Profile
                            </Text>
                                <EvilIcons name={'chevron-right'} size={40} color={'#888'} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ padding: 40 }}>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ fontSize: 8, textTransform: 'uppercase' }}>
                                    Short Bio
                            </Text>
                            </View>

                            <TextInput onFocus={(event: Event) => {
                            // `bind` the function if you're using ES6 classes
                            this._scrollToInput((event.target))
                        }} style={{ borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 5, }} placeholder={'Hi! My name is Chris, I’m a sports gamer from San Francisco, CA. Contact me at john@mail.com'}>

                            </TextInput>
                        </View>





                    </View>

                </View>
            </KeyboardAwareScrollView>

        );
    }
}

EditProfile.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 160
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
