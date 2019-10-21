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
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as chartsActions from '../../redux/actions/chartsActions';

class Chart extends React.Component {

    state = {
        period: 7,
        empty: true,
        hidden: true,
        randomData: [11, 20, 40, 20, 50, 10],
        randomData2: [61, 40, 10, 30, 40, 80],
    }

    dateChange = (int) => {
        this.setState({ period: int })
    }

    componentDidMount() {
        const { chartsData, loggedInUser, csrfToken, actions } = this.props;
        if (loggedInUser.user.pk) {
            actions.loadChartsData(loggedInUser.user.pk, this.state.period, csrfToken);
        } else {
            alert('Your session has ended please login!');
        }
    }

    loadingChart = () => {
        if (this.state.empty == true) {
            return (
                <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center', padding: 30 }}>
                    <Text style={{ color: '#333', fontWeight: 'bold', fontSize: 13 }}>Loading chart...</Text>
                </View>
            )
        }
    }

    buttons = () => {
        if (!this.props.isFetchingScoreConfirmations && this.props.scoresAccepted.length) {
            return (
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ borderRadius: 50, backgroundColor: this.state.period === 1 ? '#d1e7ff' : '#fff' }}
                            onPress={() => { this.dateChange(1) }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: this.state.period === 0 ? '#042066' : '#2e7ef4', paddingLeft: 5, paddingRight: 5 }}>
                                1D
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ borderRadius: 50, backgroundColor: this.state.period === 7 ? '#d1e7ff' : '#fff' }}
                            onPress={() => { this.dateChange(7) }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: this.state.period === 1 ? '#042066' : '#2e7ef4', paddingLeft: 5, paddingRight: 5 }}>
                                1W
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ borderRadius: 50, backgroundColor: this.state.period === 30 ? '#d1e7ff' : '#fff' }}
                            onPress={() => { this.dateChange(30) }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: this.state.period === 2 ? '#042066' : '#2e7ef4', paddingLeft: 5, paddingRight: 5 }}>
                                1M
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ borderRadius: 50, backgroundColor: this.state.period === 90 ? '#d1e7ff' : '#fff' }}
                            onPress={() => { this.dateChange(90) }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: this.state.period === 3 ? '#042066' : '#2e7ef4', paddingLeft: 5, paddingRight: 5 }}>
                                3M
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ borderRadius: 50, backgroundColor: this.state.period === 365 ? '#d1e7ff' : '#fff' }}
                            onPress={() => { this.dateChange(365) }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: this.state.period === 4 ? '#042066' : '#2e7ef4', paddingLeft: 5, paddingRight: 5 }}>
                                1Y
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }

    render() {
        return (
            <View key={this.props.scoresAccepted+'-view'}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name={'pulse'} size={35} color={'#05a54d'} />
                    <Text style={{ color: '#05a54d', fontWeight: 'bold', marginLeft: 10 }}>
                        +${!this.props.loading && this.props.userDetails ? this.props.userDetails.statistics.earned_today : '0.00'} Today
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 8, width: 8, borderRadius: 20, backgroundColor: 'rgba(0, 255, 255, 1)', marginRight: 3 }}>

                        </View>
                        <Text style={{ color: '#333', fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase' }}>Money</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 15 }}>
                        <View style={{ height: 8, width: 8, borderRadius: 20, backgroundColor: 'rgba(58, 143, 255, 1)', marginRight: 3 }}>

                        </View>
                        <Text style={{ color: '#333', fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase' }}>Win %</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row', height: 160,
                }}>
                    <View
                        key={this.props.scoresAccepted.length+'-empty'}
                        style={{ 
                        display: (!this.props.isFetchingScoreConfirmations && !this.props.scoresAccepted.length) ? 'flex' : 'none',
                        position: 'absolute', zIndex: 1, top: 0, bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 70}}>
                        <Text style={{color: '#333', textAlign: 'center', fontSize: 16}}>Play your first match to start tracking progress!</Text>
                    </View>

                    <LineChart
                        key={this.props.scoresAccepted.length+'-line-chart'}
                        data={{
                            datasets: [{
                                data: this.props.scoresAccepted.length ? !this.props.chartsData.isFetchingChartsData
                                    && this.props.chartsData.data[this.state.period]
                                    ? this.props.chartsData.data[this.state.period].win_percent : [] : this.state.randomData,
                                color: (opacity = 1) => `rgba(58, 143, 255, 1)`,
                                strokeWidth: 1.5 // optional
                            },
                            {
                                data: this.props.scoresAccepted.length ? !this.props.chartsData.isFetchingChartsData
                                    && this.props.chartsData.data[this.state.period]
                                    ? this.props.chartsData.data[this.state.period].money : [] : this.state.randomData2,
                                color: (opacity = 1) => `rgba(0, 255, 255, 1)`,
                                strokeWidth: 1.5 // optional
                            }]
                        }}
                        width={Dimensions.get('window').width + 160} // from react-native
                        height={150}
                        chartConfig={{
                            backgroundColor: "#ffffff00",
                            backgroundGradientFrom: '#fff',
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
                            marginLeft: -55,
                            backgroundColor: 'transparent'
                        }}
                    />
                    <LinearGradient
                        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            height: 160,
                        }}
                    />
                </View>
                {this.buttons()}

            </View>

        )
    }

}

Chart.propTypes = {
    chartsData: PropTypes.object.isRequired,
    loggedInUser: PropTypes.object.isRequired,
    scoresAccepted: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    isFetchingScoreConfirmations: PropTypes.bool.isRequired,
    userDetails: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        chartsData: state.chartsData,
        loggedInUser: state.auth.loggedInUser,
        scoresAccepted: state.scoreConfirmation.scoresAccepted,
        isFetchingScoreConfirmations: state.scoreConfirmation.isFetchingScoreConfirmations,
        loading: state.apiCallsInProgress > 0,
        userDetails: state.userDetails
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadChartsData: bindActionCreators(chartsActions.loadChartsData, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);