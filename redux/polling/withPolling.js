import * as React from 'react';
import {connect} from 'react-redux';
import * as scoreConfirmationActions from "../actions/scoreConfirmationActions";
import NavigationService from '../../navigation/NavigationService';

export const withPolling = (pollingAction=null, duration = 30000, loadScoreConfirmation=true) => Component => {

    const Wrapper = () => (
        class extends React.Component {

            loadScoreConfirmations = async () => {
                if (loadScoreConfirmation) {
                    const { loggedInUser, csrfToken } = this.props;

                    try {
                        const response = await this.props.loadScoreConfirmations(loggedInUser.user.pk, loggedInUser.user.email, csrfToken);

                        if(response && response.scoreConfirmations && response.scoreConfirmations.data) {
                            const scoreConfirmations = response.scoreConfirmations.data;
                            scoreConfirmations.map((scoreConfirmation) => {
                                if (scoreConfirmation.status === 0) {
                                    NavigationService.navigate('ScoreConfirm', { scoreConfirmation, loggedInUser, csrfToken });
                                }
                            });

                        } else {
                            console.log('No pending score confirmations');
                        }
                    } catch (error) {
                        console.error(error)
                    }
                }
            };

            componentDidMount() {
                // Fire action requests to check for pending score confirmations
                this.loadScoreConfirmations();

                if (pollingAction !== null) {
                    // Fire action requests on first load
                    if (Component.displayName === 'Connect(Pending)' || Component.displayName === 'Connect(Accepted)') {
                        if (this.props.loggedInUser.user.pk) {
                            this.props.pollingAction(this.props.loggedInUser.user.pk, this.props.csrfToken);
                        }
                    } else {
                        this.props.pollingAction();
                    }
                    
                    // Start polling at interval
                    this.dataPolling = setInterval(
                        () => {
                            // Fire action to check for pending score confirmation
                            this.loadScoreConfirmations();

                            if(Component.displayName === 'Connect(Pending)' || Component.displayName === 'Connect(Accepted)') {
                                if (this.props.loggedInUser.user.pk) {
                                    this.props.pollingAction(this.props.loggedInUser.user.pk, this.props.csrfToken);
                                }
                            } else {
                                this.props.pollingAction();
                            }
                        },
                        duration);   
                }
            }
            componentWillUnmount() {
                if (pollingAction) {
                    clearInterval(this.dataPolling);   
                }
            }
            render() {
                return <Component {...this.props}/>;
            }
        });

    const mapStateToProps = (state) => ({
        csrfToken: state.auth.csrfToken,
        loggedInUser: state.auth.loggedInUser
    });

    const loadScoreConfirmations = scoreConfirmationActions.loadScoreConfirmations;

    const mapDispatchToProps = {
        pollingAction,
        loadScoreConfirmations  
    };

    return connect(mapStateToProps, mapDispatchToProps)(Wrapper())
};
