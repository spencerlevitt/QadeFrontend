import * as React from 'react';
import {connect} from 'react-redux';

export const withPolling = (pollingAction, duration = 30000, ) => Component => {
    const Wrapper = () => (
        class extends React.Component {
            componentDidMount() {
                // Fire action requests on first load
                if(Component.displayName === 'Connect(Pending)' || Component.displayName === 'Connect(Accepted)') {
                    if (this.props.loggedInUser.user.pk) {
                        this.props.pollingAction(this.props.loggedInUser.user.pk, this.props.csrfToken);
                    }
                } else {
                    this.props.pollingAction();
                }
                
                // Start polling at interval
                this.dataPolling = setInterval(
                    () => {
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
            componentWillUnmount() {
                clearInterval(this.dataPolling);
            }
            render() {
                return <Component {...this.props}/>;
            }
        });

    const mapStateToProps = (state) => ({
        csrfToken: state.auth.csrfToken,
        loggedInUser: state.auth.loggedInUser,
    });
    const mapDispatchToProps = {pollingAction};

    return connect(mapStateToProps, mapDispatchToProps)(Wrapper())
};
