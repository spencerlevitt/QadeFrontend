import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default class Onb extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Onboarding
                    onSkip={() => this.props.navigation.navigate('Settings')}
                    onDone={() => this.props.navigation.navigate('Settings')}
                    bottomBarColor={'#fff'}
                    pages={[
                        {
                            backgroundColor: '#fff',
                            image: <Image style={{ height: 200, width: 250 }} source={require('../../assets/images/game.png')} />,
                            title: 'Welcome',
                            subtitle: "With Qade, you'll now be able to compete with friends for money and track all of your gaming statistics. Take some time to walk through the basics with us so you can get gaming!",
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image style={{ height: 180, width: 250 }} source={require('../../assets/images/drone.png')} />,
                            title: 'Game Challenges',
                            subtitle: 'Challenge any friend on the app to Madden, FIFA, NBA, or NHL, and select the amount you want to play for ($0-$100). You can play this game together in the same room or even hundreds of miles apart. \n \n Once your friend accepts the request, let the games begin!',
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image style={{ height: 180, width: 250 }} source={require('../../assets/images/camera.png')} />,
                            title: 'Submitting Scores',
                            subtitle: `Don't Quit The Game! \n \n Once the game is over, click the "Submit Score" button in the Qade app, select if you won or lost, and we'll help you snap a quick picture of the post-game statistics screen. \n \n The money will go through as your opponent confirms or denies your submission.`,
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image style={{ height: 170, width: 250 }} source={require('../../assets/images/segment.png')} />,
                            title: 'Stats',
                            subtitle: `It's about time gamers can track their lifetime statistics for every game they cann play. With Qade you can filter your stats by opponent and game with ease. \n \n Finally, some ammunition to prove you're the best!`,
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image style={{ height: 140, width: 250 }} source={require('../../assets/images/winners.png')} />,
                            title: 'Standings',
                            subtitle: `As gamers ourselves, we know gaming is more fun with friends. That's why we're taking competition to the next level, ranking you amongst your friends for every game you play.`,
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image style={{ height: 150, width: 250 }} source={require('../../assets/images/fun.png')} />,
                            title: 'Your Personalized Feed',
                            subtitle: `Ever beat your friend in Madden that you wish the would could see? With Qade, you get a scrolling feed of your friend's recent matches. Laugh at them about a defeat or congratulate them onn that big win.`,
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image style={{ height: 180, width: 250 }} source={require('../../assets/images/savings.png')} />,
                            title: 'Commission-Free',
                            subtitle: `Any other platform allowing you to compete for money takes 10-15% off every match you play. As gamers ourselves, we hated that! We're making skill-based cash competitions more accessible than ever with no fees on any head-to-head matches.`,
                        },
                    ]}
                />
            </View>
        );
    }
}

Onb.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
