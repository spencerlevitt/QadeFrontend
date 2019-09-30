import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Landing from '../screens/login/index'
import Login from '../screens/login/index-2'
import SignUp from '../screens/login/index-3'
import Login4 from '../screens/login/index-4'
import Login5 from '../screens/login/index-5'

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    //Onboard,
    Landing,
    Login,
    SignUp,
    Login4,
    Login5
  })
);
