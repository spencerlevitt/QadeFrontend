import React from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Constants from 'expo-constants';
import { TabView, SceneMap } from 'react-native-tab-view';
import Swiper from 'react-native-deck-swiper';
import Animated from 'react-native-reanimated';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import NavigationService from '../../navigation/NavigationService'
import Chart from './chart'

//empty render (no matches)
const Empty = () => (
    <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flex: 1, borderBottomColor: '#51c2ff', borderBottomWidth: 1 }}>

            </View>
            <View style={{ flex: 1 }}>

            </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', maxWidth: 100 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#333', textAlign: 'center', textTransform: 'uppercase' }}>no scheduled matches</Text>
        </View>
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, borderBottomColor: '#51c2ff', borderBottomWidth: 1 }}>

            </View>
            <View style={{ flex: 1 }}>

            </View>
        </View>
    </View>
)

class Tabs extends React.Component {

    state = {
        index: 0,
        complete: false
    }
    render() {
        return (

            <View style={{ height: 200, padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name={'pulse'} size={35} color={'#05a54d'} />
                    <Text style={{ color: '#05a54d', fontWeight: 'bold', marginLeft: 10 }}>3-1 Today</Text>
                </View>

                <View style={{ position: 'absolute', width: '100%', marginLeft: 10, alignItems: 'center', bottom: -20 }}>
                    <View style={{ width: '30%', flexDirection: 'row' }}>
                        <View style={{ flex: 1, margin: 4, borderBottomWidth: 3, borderBottomColor: this.state.index == 0 ? '#6a8dff' : '#888' }} />

                        <View style={{ flex: 1, margin: 4, borderBottomWidth: 3, borderBottomColor: this.state.index == 1 ? '#6a8dff' : '#888' }} />

                        <View style={{ flex: 1, margin: 4, borderBottomWidth: 3, borderBottomColor: this.state.index == 2 ? '#6a8dff' : '#888' }} />

                        <View style={{ flex: 1, margin: 4, borderBottomWidth: 3, borderBottomColor: this.state.index == 3 ? '#6a8dff' : '#888' }} />

                        <View style={{ flex: 1, margin: 4, borderBottomWidth: 3, borderBottomColor: this.state.index == 4 ? '#6a8dff' : '#888' }} />

                    </View>
                </View>

                {
                    this.state.complete == false ? (


                        <Swiper
                        cards={['Nick Morton', 'Brandon Hue', 'Yoseph Msa', 'Elon Musk', 'Porter Proeo']}
                        renderCard={(card) => {
                            return (
                                <View style={styles.card}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 5 }}>
                                        <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                                        <Text style={styles.cardText}>{card}</Text>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <View style={{ padding: 3, borderRadius: 10, paddingLeft: 10, paddingRight: 10, backgroundColor: '#3b8fff' }}>
                                                <Text style={{ color: '#fff', fontSize: 10 }}>9 hrs left</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View>
                                            <Text style={styles.cardSubText}>FIFA $5.00</Text>
                                            <Text style={styles.cardSubText2}>Against {card.split(' ')[1]}:</Text>
                                        </View>

                                        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 10, flexDirection: 'row' }}>
                                            <View style={{ flex: 0.5, alignItems: 'center' }}>

                                                <Text style={{ color: '#333', fontSize: 17, fontWeight: 'bold' }}>4-1</Text>
                                                <Text style={{ color: '#333', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold' }}>Record</Text>

                                            </View>

                                            <View style={{ flex: 0.5, alignItems: 'center' }}>

                                                <Text style={{ color: '#333', fontSize: 17, fontWeight: 'bold' }}>0.80</Text>
                                                <Text style={{ color: '#333', fontSize: 8, textTransform: 'uppercase', fontWeight: 'bold' }}>Win's</Text>

                                            </View>
                                        </View>


                                        <View style={{ alignItems: 'flex-end' }}>
                                            <TouchableOpacity onPress={() => NavigationService.navigate('Submit')}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <AntDesign name={'download'} size={15} color={'#888'} />
                                                    <Text style={{ color: '#888', fontSize: 8 }}>Submit Score</Text>
                                                </View>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                            onSwiped={(index) => { if (this.state.index == 4) { this.setState({ index: 0 }), console.warn(this.state.index) } else { this.setState({ index: this.state.index + 1 }), console.warn(this.state.index) } }}
                            //onSwipedAll={() => { this.setState({ index: 0 }) }}
                            cardIndex={0}
                            infinite={true}
                            backgroundColor={'#ffffff00'}
                            stackSize={3}>
                        </Swiper>
                    ) : (
                            <Empty />
                        )
                }



            </View>
        )
    }
}

const SecondRoute = () => (
    <Tabs />
);
const FirstRoute = () => (
    <View>
        <Chart />
    </View>
);


export default class GameTabs extends React.Component {

    state = {
        index: 0,
        routes: [
            { key: 'second', title: "Today's Matches" },
            { key: 'first', title: 'Progress' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });


    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return (
            <View style={styles.tabBarCenter}>
                <View style={styles.tabBar}>
                    {props.navigationState.routes.map((route, i) => {
                        const color = Animated.color(
                            Animated.round(
                                Animated.interpolate(props.position, {
                                    inputRange,
                                    outputRange: inputRange.map(inputIndex =>
                                        inputIndex === i ? 0 : 150
                                    ),
                                })
                            ),
                            Animated.round(
                                Animated.interpolate(props.position, {
                                    inputRange,
                                    outputRange: inputRange.map(inputIndex =>
                                        inputIndex === i ? 0 : 150
                                    ),
                                })
                            ),
                            Animated.round(
                                Animated.interpolate(props.position, {
                                    inputRange,
                                    outputRange: inputRange.map(inputIndex =>
                                        inputIndex === i ? 0 : 150
                                    ),
                                })
                            ),
                        );
                        return (
                            <TouchableOpacity
                                style={styles.tabItem}
                                onPress={() => this.setState({ index: i })}>
                                <Animated.Text style={{ color, fontSize: 12, fontWeight: 'bold' }}>{route.title}</Animated.Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    };



    _renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });



    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
            />
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: Constants.statusBarHeight,
    },
    welcomeContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
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
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    tabBar: {
        flexDirection: 'row',
        width: '80%'
    },
    tabBarCenter: {
        alignItems: 'center'
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    card: {
        height: 100,
        padding: 15,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#333'
    },
    cardSubText: {
        fontSize: 8,
        textAlign: 'center',
        color: '#888',
        textTransform: 'uppercase'
    },
    cardSubText2: {
        marginTop: 5,
        fontSize: 8,
        textAlign: 'center',
        color: '#888',
        textTransform: 'uppercase'
    }
});
