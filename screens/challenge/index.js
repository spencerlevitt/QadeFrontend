import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export default class Challenge extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        selected: 1,
        selecte: 0
    }

    changeIndex = (num) => {
        this.setState({
            selected: num
        })
    }

    changeInde = (num) => {
        this.setState({
            selecte: num
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 110 + Constants.statusBarHeight, flexDirection: 'row', backgroundColor: '#faf7f7', paddingTop: Constants.statusBarHeight }}>
                    <View style={{ flex: 0.2 }}>
                    </View>
                    <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#333', fontSize: 20 }}>Challenge</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <EvilIcons name={'close-o'} size={50} color={'#888'} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ flex: 1, padding: 50, paddingTop: 20, paddingBottom: 0 }}>
                    <KeyboardAvoidingView style={{ flex: 1 }} >
                        <View style={{ height: 80, marginBottom: 40 }}>
                            <Text style={{ fontSize: 18, color: '#333', marginBottom: 20, fontSize: 18 }}>Opponent</Text>
                            <View style={{ flex: 1, borderRadius: 50, borderWidth: 1, borderColor: '#E5E5E5', justifyContent: 'center' }}>
                                <TextInput style={{ color: '#A0A0A0', paddingLeft: 10}} placeholder={'Search Friends'} placeholderTextColor={'#A0A0A0'}>
                                   
                        </TextInput>
                            </View>
                        </View>

                        <View style={{ height: 200, marginBottom: 40 }}>
                            <Text style={{ fontSize: 18, color: '#333', marginBottom: 10, fontSize: 18 }}>Game</Text>
                            <Text style={{ color: '#A0A0A0', marginBottom: 20 }}>Pick one</Text>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>

                                    <TouchableOpacity onPress={() => this.changeIndex(0)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 5, marginBottom: 5, borderRadius: 5, borderColor: '#EFEFEF', borderWidth: this.state.selected == 0 ? 0 : 1, backgroundColor: this.state.selected == 0 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selected == 0 ? '#fff' : '#69C0FF' }}>
                                            Madden
                                </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => this.changeIndex(1)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginBottom: 5, borderRadius: 5, borderColor: '#EFEFEF', borderWidth: this.state.selected == 1 ? 0 : 1, backgroundColor: this.state.selected == 1 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selected == 1 ? '#fff' : '#69C0FF' }}>
                                            FIFA
                                </Text>
                                    </TouchableOpacity>


                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>

                                    <TouchableOpacity onPress={() => this.changeIndex(2)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 5, marginTop: 5, borderRadius: 5, borderColor: '#EFEFEF', borderWidth: this.state.selected == 2 ? 0 : 1, backgroundColor: this.state.selected == 2 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selected == 2 ? '#fff' : '#69C0FF' }}>
                                            NBA 2K
                                </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => this.changeIndex(3)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginTop: 5, borderRadius: 5, borderColor: '#EFEFEF', borderWidth: this.state.selected == 3 ? 0 : 1, backgroundColor: this.state.selected == 3 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selected == 3 ? '#fff' : '#69C0FF' }}>
                                            NHL
                                </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ height: 160 }}>
                            <Text style={{ fontSize: 18, color: '#333', marginBottom: 10, fontSize: 18 }}>What's on the line?</Text>
                            <Text style={{ color: '#A0A0A0', marginBottom: 20 }}>Pick one</Text>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

                                    <TouchableOpacity onPress={() => this.changeInde(0)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 5, marginBottom: 5, borderRadius: 50, borderColor: '#EFEFEF', borderWidth: this.state.selecte == 0 ? 0 : 1, backgroundColor: this.state.selecte == 0 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selecte == 0 ? '#fff' : '#69C0FF' }}>
                                            Pride
                                </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => this.changeInde(1)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginBottom: 5, borderRadius: 50, borderColor: '#EFEFEF', borderWidth: this.state.selecte == 1 ? 0 : 1, backgroundColor: this.state.selecte == 1 ? '#69C0FF' : 'transparent' }}>
                                        <Text style={{ color: this.state.selecte == 1 ? '#fff' : '#69C0FF' }}>
                                            $5.00
                                </Text>
                                    </TouchableOpacity>


                                </View>
                                <View style={{ width: '70%', marginTop: 10 }}>
                                    <TextInput style={{ borderBottomColor: this.state.selecte == 2 ? '#69C0FF' : '#eee', borderBottomWidth: 1 }} placeholder={'$ Enter Custom'} onChangeText={() => this.changeInde(2)}>

                                    </TextInput>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity onPress={this.changeLayout} style={{
                                marginTop: 20,
                                height: 80,
                                width: 80,
                                borderRadius: 80,
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
                            }}>
                                <Image style={{ height: 40, width: 40 }} tintColor="#7ed3ff" source={require('../../assets/images/gloves.png')} />
                            </TouchableOpacity>
                            <Text style={{
                                color: '#888',
                                fontSize: 14,
                                textTransform: 'uppercase',
                            }}>GO</Text>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        )
    }
}

Challenge.navigationOptions = {
    header: null,
};