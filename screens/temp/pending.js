import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";
import { ScrollView } from 'react-native-gesture-handler';
import NavigationService from '../../navigation/NavigationService';

export default class Pending extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            true: false
        }
    }

    render() {
        if (true == this.state.true) {
            return (
                <View style={{ flex: 1, alignItems: 'center', padding: 30 }}>
                    <Text style={{ fontSize: 18, color: '#888', textAlign: 'center' }}>You have no pending match requests. Challenge somebody to get started!</Text>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => NavigationService.navigate('Challenge')} style={{
                            marginTop: 20,
                            height: 60,
                            width: 60,
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
                            <Image style={{ height: 30, width: 30 }} tintColor="#7ed3ff" source={require('../../assets/images/gloves.png')} />
                        </TouchableOpacity>
                        <Text style={{
                            color: '#888',
                            fontSize: 14,
                            textTransform: 'uppercase',
                        }}>Challenge</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

                    <View>


                        {/* On Game Accepted 
                        <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#888', fontSize: 12, paddingLeft: 5, paddingRight: 5 }}>Game Accepted</Text>
                                </View>

                                <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
                                    <EvilIcons name={'check'} size={35} color={'#5eb97e'} />
                                </View>

                                <View style={{ flex: 0.5 }}>
                                    <Text style={{ color: '#888', fontSize: 12, paddingLeft: 5, paddingRight: 5, textAlign: 'center' }}>Don't quit the match before submitting your results!</Text>
                                </View>
                            </View>
                        </View>

                        */}

                        {this.items()}




                    </View>

                </ScrollView>
            )
        }
    }

    items = () => {
        mm = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        return mm.map((m2, m3) => {

            

            if (this.state[m3] != 1 && this.state[m3] != 2) {
                return (


                    <View key={m3+'eqqw'} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.3 }}>
                                <Text style={[{ fontSize: RFPercentage(2) }]}>Chris Wright {m3}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: '#888' }}>10-5</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                        <View style={{ borderRadius: 5, backgroundColor: '#3b93fc' }}>
                                            <Text style={{ color: '#fff', fontSize: 8, paddingLeft: 5, paddingRight: 5 }}>9 hrs</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                            <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>FIFA</Text>
                            </View>

                            <View style={{ flex: 0.17 }}>
                                <Text style={{ color: '#888', fontSize: RFPercentage(2), paddingLeft: 5, paddingRight: 5 }}>$5.00</Text>
                            </View>

                            <View style={{ flex: 0.28, flexDirection: 'row' }}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => this.setState({ [m3]: 2 })}>
                                        <EvilIcons name={'close-o'} size={35} color={'#e6685f'} />
                                    </TouchableOpacity>

                                </View>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => this.setState({ [m3]: 1 })}>
                                        <EvilIcons name={'check'} size={35} color={'#5eb97e'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            } else if(this.state[m3] == 1){
                return (
                    <View key={m3+'erwe'} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#888', fontSize: 12, paddingLeft: 5, paddingRight: 5 }}>Game Accepted</Text>
                            </View>

                            <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
                                <EvilIcons name={'check'} size={35} color={'#5eb97e'} />
                            </View>

                            <View style={{ flex: 0.5 }}>
                                <Text style={{ color: '#888', fontSize: 12, paddingLeft: 5, paddingRight: 5 , textAlign: 'center' }}>Don't quit the match before submitting your results!</Text>
                            </View>
                        </View>
                    </View>
                )
            }else{
                return (
                    <View key={m3+'3rer'}>
                    </View>
                )
            }

        })
    }

    /*<View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#888', fontSize: 12, paddingLeft: 5, paddingRight: 5 }}>Game Accepted</Text>
                                </View>

                                <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
                                    <EvilIcons name={'check'} size={35} color={'#5eb97e'} />
                                </View>

                                <View style={{ flex: 0.5 }}>
                                    <Text style={{ color: '#888', fontSize: 12, paddingLeft: 5, paddingRight: 5 }}>Don't quit the match before</Text>
                                </View>
                            </View>
                        </View>*/
}
