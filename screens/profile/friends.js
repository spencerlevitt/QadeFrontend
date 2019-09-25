import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    View,
} from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { RFPercentage } from "react-native-responsive-fontsize";
import { ScrollView } from 'react-native-gesture-handler';
import NavigationService from '../../navigation/NavigationService';

export default class Friends extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (true) {
            return (
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

                    <View style={{ marginTop: 30, marginHorizontal: 30, }}>
                        <TextInput style={{ height: '100%', height: 30, borderRadius: 30, borderWidth: 1, borderColor: '#E5E5E5', paddingLeft: 15 }} placeholder={'Filter by opponents'}>
                        </TextInput>
                    </View>

                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                    

                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>


                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View key={0} style={{ justifyContent: 'center', paddingHorizontal: 40, marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:  'center' }}>

                            <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                            <View style={{ flex: 0.5 }}>
                                <Text style={[{ fontSize: 16 }]}>Chris Wright</Text>

                            </View>

                            <View style={{ flex: 0.5 }}>
                                <View style={{ height: 15 }}>
                                    <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>Against</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>4-1</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>record</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 16, textAlign: 'center' }}>0.80</Text>
                                        <Text style={{ textTransform: 'uppercase', fontSize: 10, textAlign: 'center' }}>win %</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                </ScrollView>
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