import React from 'react'
import {
    Platform,
    ScrollView,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'

export default class Chart extends React.Component {

    state = {
        index: 0
    }

    dateChange = (int) => {
        this.setState({ index: int })
    }

    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name={'pulse'} size={35} color={'#05a54d'} />
                    <Text style={{ color: '#05a54d', fontWeight: 'bold', marginLeft: 10 }}>+$5.00 Today</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'rgba(0, 255, 255, 1)', fontSize: 32 }}>•</Text>
                        <Text style={{ color: '#333', fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase' }}>Money</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
                        <Text style={{ color: 'rgba(58, 143, 255, 1)', fontSize: 32 }}>•</Text>
                        <Text style={{ color: '#333', fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase' }}>Win %</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row', height: 160,
                }}>

                    <LineChart
                        data={{
                            datasets: [{
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ],
                                color: (opacity = 1) => `rgba(58, 143, 255, 1)`,
                                strokeWidth: 1.5 // optional
                            },
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ],
                                color: (opacity = 1) => `rgba(0, 255, 255, 1)`,
                                strokeWidth: 1.5 // optional
                            }]
                        }}
                        width={Dimensions.get('window').width + 160} // from react-native
                        height={150}
                        chartConfig={{
                            backgroundColor: "transparent",
                            backgroundGradientFrom: '#ffffff00',
                            backgroundGradientTo: '#fff',
                            strokeWidth: 1,
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(0, 255, 255, 1)`
                        }}
                        withDots={false}
                        withInnerLines={false}
                        withOuterLines={false}
                        withVerticalLabels={true}
                        withHorizontalLabels={false}
                        bezier
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            marginLeft: -75,
                            backgroundColor: 'transparent'
                        }}
                    />

                </View>
                <View style={{ flex: 1,flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ borderRadius: 50, backgroundColor: this.state.index == 0 ? '#d1e7ff' : '#fff' }} onPress={() => { this.dateChange(0) }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: this.state.index == 0 ? '#042066' : '#2e7ef4', paddingLeft: 5, paddingRight: 5 }}>
                                1D
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ borderRadius: 50, backgroundColor: this.state.index == 1 ? '#d1e7ff' : '#fff' }} onPress={() => { this.dateChange(1) }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: this.state.index == 1 ? '#042066' : '#2e7ef4', paddingLeft: 5, paddingRight: 5 }}>
                                1W
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ borderRadius: 50, backgroundColor: this.state.index == 2 ? '#d1e7ff' : '#fff' }} onPress={() => { this.dateChange(2) }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: this.state.index == 2 ? '#042066' : '#2e7ef4', paddingLeft: 5, paddingRight: 5 }}>
                                1M
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ borderRadius: 50, backgroundColor: this.state.index == 3 ? '#d1e7ff' : '#fff' }} onPress={() => { this.dateChange(3) }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: this.state.index == 3 ? '#042066' : '#2e7ef4', paddingLeft: 5, paddingRight: 5 }}>
                                3M
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ borderRadius: 50, backgroundColor: this.state.index == 4 ? '#d1e7ff' : '#fff' }} onPress={() => { this.dateChange(4) }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: this.state.index == 4 ? '#042066' : '#2e7ef4', paddingLeft: 5, paddingRight: 5 }}>
                                1Y
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ borderRadius: 50, backgroundColor: this.state.index == 5 ? '#d1e7ff' : '#fff' }} onPress={() => { this.dateChange(5) }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: this.state.index == 5 ? '#042066' : '#2e7ef4', paddingLeft: 5, paddingRight: 5 }}>
                                ALL
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }

}