import * as React from 'react';
import {connect} from 'react-redux';
import * as scoreConfirmationActions from "../actions/scoreConfirmationActions";
import NavigationService from '../../navigation/NavigationService';

export const withPolling = (pollingAction=null, duration = 30000, loadScoreConfirmation=true) => Component => {

    const globalPollingActions = [
        // place polling actions that you want to fire globally here
    ];

    const Wrapper = () => (
        class extends React.Component {
            
            loadScoreConfirmations = async () => {
                if (loadScoreConfirmation && this.props.loggedInUser.user.pk) {
                    const { loggedInUser, csrfToken } = this.props;

                    try {
                        const response = await this.props.loadScoreConfirmations(loggedInUser.user.pk, loggedInUser.user.email, csrfToken);
                        
                        if(response && response.scoreConfirmations && response.scoreConfirmations.data) {
                            const scoreConfirmations = response.scoreConfirmations.data;
                            scoreConfirmations.results.map((scoreConfirmation) => {                                
                               
                                if (scoreConfirmation.status === 0 
                                        && scoreConfirmation.sender_id !== loggedInUser.user.pk
                                        && (scoreConfirmation.winner.email === loggedInUser.user.email
                                        || scoreConfirmation.loser.email === loggedInUser.user.email)) {
                            
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

            firePollingAction = (Component, pollingaction) => {
                if (Component.displayName === 'Connect(Pending)' || Component.displayName === 'Connect(Accepted)') {
                    if (this.props.loggedInUser.user.pk) {
                        pollingaction(this.props.loggedInUser.user.pk, this.props.csrfToken);
                    }
                } else {
                    pollingaction();
                }
            };

            componentDidMount() {
                // Fire action requests to check for pending score confirmations
                this.loadScoreConfirmations();
                // const { pollingAction } = this.props;

                if (pollingAction && pollingAction !== null) {
                    // Fire action requests on first load
                    // if its an array of actions fire them off
                    // individually
                    if(Array.isArray(pollingAction)) {
                        pollingAction.map(pAction => {
                            this.firePollingAction(Component, pAction);
                        });
                    } else {
                        this.firePollingAction(Component, pollingAction);
                    }

                    // fire global polling actions
                    if (globalPollingActions.length) {
                        globalPollingActions.map((pAction) => {
                            this.firePollingAction(Component, pAction);
                        });
                    }
                    
                    // Start polling at interval
                    this.dataPolling = setInterval(
                        () => {
                            // Fire action to check for pending score confirmation
                            this.loadScoreConfirmations();

                            if(Array.isArray(pollingAction)) {
                                pollingAction.map(pAction => {
                                    this.firePollingAction(Component, pAction);
                                });
                            } else {
                                this.firePollingAction(Component, pollingAction);
                            }
                        },
                        duration);   
                }
            }


            // stop polling once the component unmounts
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
