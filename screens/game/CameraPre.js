import React from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as gameCardsActions from '../../redux/actions/gameCardsActions';

//console.disableYellowBox = true

class CameraPre extends React.Component {

    getLocation = () => {
        return '41.8339042,-88.0121586';    // TODO navigation library fix
    };

    geImageType (file, extOnly = false) {
		let extension = 'jpeg', _;

		try {
			[ _, extension ] = file.match(/\.(\w+)$/);
		}
		catch {
			extension = 'jpeg';
		}

        if (extOnly) {
            return extension;
        }
		return `image/${extension}`;
	}

    createFormData = (photo) => {
        const data = new FormData();

        data.append('image', {
            name: `image.${this.geImageType(photo.uri, true)}`,
            filename: `image.${this.geImageType(photo.uri, true)}`,
            type: this.geImageType(photo.uri),
            uri:
                Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', '')
        });

        data.append('request_id', this.props.navigation.getParam('game').id);
        data.append('user_id', this.props.loggedInUser.user.pk);
        data.append('user_location', this.getLocation());
        data.append('is_user_won', this.props.navigation.getParam('isUserWon'));
        
        return data;
    }

    onSubmitGameScore = async () => {
        const game = this.props.navigation.getParam('game').game;
        const photoData = this.props.navigation.getParam('photoData');
        const { csrfToken } = this.props;
        const payload = this.createFormData(photoData);

        try {
            const response = await this.props.actions.submitGameCard(game, csrfToken, payload);

            if (response && response.submittedGameCard) {
                if (this.props.hasError) {
                    alert(`Submitting game score failed: ${this.props.errorMessage.message}`);
                } else {
                    this.props.navigation.navigate('Await');
                }                
            }
        } catch (error) {
            console.error(error);
        }
    };


    render() {

        const { navigation } = this.props;
        const uri = navigation.getParam('photoData');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{height: Dimensions.get('window').height / 2, width: Dimensions.get('window').width / 2}} source={uri}/>
                <View style={{ flex: 0.35, justifyContent: 'flex-end', alignItems: 'center', paddingLeft: 100, paddingRight: 100 }}>
                        <Text style={{ fontSize: 22, color: '#333', marginBottom: 20 }}>Looking good?</Text>
                        {
                            !this.props.isSubmittingGameCards
                            ?   <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                            <EvilIcons name={'close-o'} size={60} color={'#e6685f'} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        {/* Handle the photo data verification process */}
                                        <TouchableOpacity onPress={() => this.onSubmitGameScore()}>
                                            <EvilIcons name={'check'} size={60} color={'#5eb97e'} />
                                        </TouchableOpacity>    
                                    </View>
                                </View>
                            :   <Text style={{ fontSize: 16, color: '#333', marginBottom: 20 }}>Submitting score...</Text>
                        }
                    </View>
            </View>
        );
    }
}

CameraPre.navigationOptions = {
    header: null,
};

CameraPre.propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    csrfToken: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    isSubmittingGameCards: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
};
  
function mapStateToProps(state) {
    return {
      isSubmittingGameCards: state.gameCards.isSubmittingGameCards,
      csrfToken: state.auth.csrfToken,
      loggedInUser: state.auth.loggedInUser,
      loading: state.apiCallsInProgress > 0
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: {
        submitGameCard: bindActionCreators(gameCardsActions.submitGameCard, dispatch),
      }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraPre);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    tabBar: {
        flexDirection: 'row',
    },
    tabItem: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
    },
    realTabItem: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
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
});
