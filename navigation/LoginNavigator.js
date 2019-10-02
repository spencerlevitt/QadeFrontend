import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Landing from '../screens/login/Landing'
import Login from '../screens/login/Login'
import SignUp from '../screens/login/SignUp'
import ForgotPassword from '../screens/login/ForgotPassword'
import SignupEmailConfirmation from '../screens/login/SignupEmailConfirmation'

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    //Onboard,
    Landing,
    Login,
    SignUp,
    ForgotPassword,
    SignupEmailConfirmation
  })
);
