import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";
import { ScrollView } from 'react-native-gesture-handler';
import NavigationService from '../../navigation/NavigationService';

export default class Accepted extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            true: true
        }
    }

    render() {
        if (true == this.state.true) {
            return (
                <View style={{ flex: 1, alignItems: 'center', padding: 30 }}>
                    <Text style={{ fontSize: 18, color: '#888', textAlign: 'center' }}>You have no accepted matches. Challenge a friend to get gaming!</Text>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => NavigationService.navigate('Challenge')} style={{
                            marginTop: 20,
                            height:60,
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


                        <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                                <View style={{ flex: 0.3 }}>
                                    <Text style={[{ fontSize: RFPercentage(2) }]}>Chris Wright</Text>
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

                                <View style={{ flex: 0.28, alignItems: 'center' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name={'download'} size={15} color={'#74c3ff'} />
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                                <View style={{ flex: 0.3 }}>
                                    <Text style={[{ fontSize: RFPercentage(2) }]}>Chris Wright</Text>
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

                                <View style={{ flex: 0.28, alignItems: 'center' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name={'download'} size={15} color={'#74c3ff'} />
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                                <View style={{ flex: 0.3 }}>
                                    <Text style={[{ fontSize: RFPercentage(2) }]}>Chris Wright</Text>
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

                                <View style={{ flex: 0.28, alignItems: 'center' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name={'download'} size={15} color={'#74c3ff'} />
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                                <View style={{ flex: 0.3 }}>
                                    <Text style={[{ fontSize: RFPercentage(2) }]}>Chris Wright</Text>
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

                                <View style={{ flex: 0.28, alignItems: 'center' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name={'download'} size={15} color={'#74c3ff'} />
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                                <View style={{ flex: 0.3 }}>
                                    <Text style={[{ fontSize: RFPercentage(2) }]}>Chris Wright</Text>
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

                                <View style={{ flex: 0.28, alignItems: 'center' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name={'download'} size={15} color={'#74c3ff'} />
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                                <View style={{ flex: 0.3 }}>
                                    <Text style={[{ fontSize: RFPercentage(2) }]}>Chris Wright</Text>
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

                                <View style={{ flex: 0.28, alignItems: 'center' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name={'download'} size={15} color={'#74c3ff'} />
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                                <View style={{ flex: 0.3 }}>
                                    <Text style={[{ fontSize: RFPercentage(2) }]}>Chris Wright</Text>
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

                                <View style={{ flex: 0.28, alignItems: 'center' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name={'download'} size={15} color={'#74c3ff'} />
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                                <View style={{ flex: 0.3 }}>
                                    <Text style={[{ fontSize: RFPercentage(2) }]}>Chris Wright</Text>
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

                                <View style={{ flex: 0.28, alignItems: 'center' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name={'download'} size={15} color={'#74c3ff'} />
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View key={0} style={{ height: 80, justifyContent: 'center', paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                                <View style={{ flex: 0.3 }}>
                                    <Text style={[{ fontSize: RFPercentage(2) }]}>Chris Wright</Text>
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

                                <View style={{ flex: 0.28, alignItems: 'center' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name={'download'} size={15} color={'#74c3ff'} />
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: '#888', fontSize: 8, textTransform: 'uppercase' }}>Submit</Text>
                                    </View>
                                </View>
                            </View>
                        </View>


                    </View>

                </ScrollView>
            )
        }
    }
}