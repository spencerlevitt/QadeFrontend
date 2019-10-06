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

//console.disableYellowBox = true

const FirstRoute = (props) => (
    gameData(props.standingsList)
);
const SecondRoute = (props) => (
    gameData(props.standingsList)
);

const ThirdRoute = (props) => (
    gameData(props.standingsList)
);

const FourthRoute = (props) => (
    gameData(props.standingsList)
);

gameData = (standingsList) => {
    return (
        <View>
            {standingsList.map((standing, idx) => 
                <View key={idx} style={{ height: 80, justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 10, color: '#888', fontWeight: 'bold' }}>
                                {idx < 9 ? `0${idx}` : idx}
                            </Text>
                        </View>
                        <Image source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE=' }} style={{ height: 35, width: 35, borderRadius: 5, marginRight: 15 }} />
                        <View>
                            <Text style={[styles.cardText, { fontSize: 16 }]}>
                                {`${standing.user_stats.user.first_name} ${standing.user_stats.user.last_name}`}
                            </Text>
                            <Text style={{ color: '#888' }}>{standing.won_games}-{standing.lost_games}</Text>
                        </View>

                        <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 20 }}>
                            <Text style={{ color: '#333', fontSize: 30, fontWeight: '100' }}>{standing.rating}</Text>
                        </View>
                    </View>
                </View>
            )}
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
                            onPress={() => this.setState({ index: i })}
                            key={i}>
                            <Animated.Text style={{ color, fontSize: 12, fontWeight: 'bold' }}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };


    _renderScene = ({ route }) => {
        switch (route.key) {
          case 'first':
            return <FirstRoute standingsList={this.props.standings.fifa} />;
          case 'second':
                return <SecondRoute standingsList={this.props.standings.madden} />;
          case 'third':
                return <ThirdRoute standingsList={this.props.standings.nba} />;
          case 'fourth':
                return <FourthRoute standingsList={this.props.standings.nhl} />;
          default:
            return null;
        }
    };

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
