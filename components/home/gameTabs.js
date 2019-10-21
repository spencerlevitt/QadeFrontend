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
import Animated from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import NavigationService from '../../navigation/NavigationService'
//console.disableYellowBox = true

const FirstRoute = () => (
    gameData()
);
const SecondRoute = () => (
    gameData()
);

const ThirdRoute = () => (
    gameData()
);

const FourthRoute = () => (
    gameData()
);

gameData = () => {
    return (
        <View>
            <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', backgroundColor: '#ffffffe0', zIndex: 1 }}>
            <Text style={{ fontSize: 18, color: '#888', textAlign: 'center' }}>Qade is more fun with friends!</Text>
                <TouchableOpacity style={{ flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 5, alignItems: 'center', justifyContent: 'center', borderColor: '#71ceff', borderRadius: 5, borderWidth: 1, marginTop: 10 }} onPress={() => {NavigationService.navigate('Recent')}}>
                    <Text style={{ fontSize: 12, color: '#71ceff' }}>Add Friends</Text>
                    <AntDesign
                        name={'user'}
                        size={12}
                        style={{ marginLeft: 5 }}
                        color={'#71ceff'}
                    />
                </TouchableOpacity>
            </View>
            <View key={0} style={{ height: 80, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, color: '#888', fontWeight: 'bold' }}>01</Text>
                    </View>
                    <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                    <View>
                        <Text style={[styles.cardText, { fontSize: 16 }]}>Chris Wright</Text>
                        <Text style={{ color: '#888' }}>10-5</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 20 }}>
                        <Text style={{ color: '#333', fontSize: 30, fontWeight: '100' }}>30</Text>
                    </View>
                </View>
            </View>

            <View key={1} style={{ height: 80, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, color: '#888', fontWeight: 'bold' }}>01</Text>
                    </View>
                    <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                    <View>
                        <Text style={[styles.cardText, { fontSize: 16 }]}>Chris Wright</Text>
                        <Text style={{ color: '#888' }}>10-5</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 20 }}>
                        <Text style={{ color: '#333', fontSize: 30, fontWeight: '100' }}>30</Text>
                    </View>
                </View>
            </View>

            <View key={2} style={{ height: 80, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, color: '#888', fontWeight: 'bold' }}>01</Text>
                    </View>
                    <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                    <View>
                        <Text style={[styles.cardText, { fontSize: 16 }]}>Chris Wright</Text>
                        <Text style={{ color: '#888' }}>10-5</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 20 }}>
                        <Text style={{ color: '#333', fontSize: 30, fontWeight: '100' }}>30</Text>
                    </View>
                </View>
            </View>

            <View key={3} style={{ height: 80, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, color: '#888', fontWeight: 'bold' }}>01</Text>
                    </View>
                    <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                    <View>
                        <Text style={[styles.cardText, { fontSize: 16 }]}>Chris Wright</Text>
                        <Text style={{ color: '#888' }}>10-5</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 20 }}>
                        <Text style={{ color: '#333', fontSize: 30, fontWeight: '100' }}>30</Text>
                    </View>
                </View>
            </View>

            <View key={4} style={{ height: 80, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, color: '#888', fontWeight: 'bold' }}>01</Text>
                    </View>
                    <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                    <View>
                        <Text style={[styles.cardText, { fontSize: 16 }]}>Chris Wright</Text>
                        <Text style={{ color: '#888' }}>10-5</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 20 }}>
                        <Text style={{ color: '#333', fontSize: 30, fontWeight: '100' }}>30</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


export default class GameTabs extends React.Component {

    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'FIFA' },
            { key: 'second', title: 'MADDEN' },
            { key: 'third', title: 'NBA 2K' },
            { key: 'fourth', title: 'NHL' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });


    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    const color = Animated.color(
                        Animated.round(
                            Animated.interpolate(props.position, {
                                inputRange,
                                outputRange: inputRange.map(inputIndex =>
                                    inputIndex === i ? 59 : 150
                                ),
                            })
                        ),
                        Animated.round(
                            Animated.interpolate(props.position, {
                                inputRange,
                                outputRange: inputRange.map(inputIndex =>
                                    inputIndex === i ? 143 : 150
                                ),
                            })
                        ),
                        Animated.round(
                            Animated.interpolate(props.position, {
                                inputRange,
                                outputRange: inputRange.map(inputIndex =>
                                    inputIndex === i ? 255 : 150
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
        );
    };



    _renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute,
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
        fontSize: 20,
        color: '#333'
    },
    cardSubText: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#888',
        textTransform: 'uppercase'
    }
});
