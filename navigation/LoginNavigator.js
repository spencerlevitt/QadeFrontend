import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/login/index'
import Login2 from '../screens/login/index-2'
import Login3 from '../screens/login/index-3'
import Login4 from '../screens/login/index-4'
import Login5 from '../screens/login/index-5'

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    //Onboard,
    Login,
    Login2,
    Login3,
    Login4,
    Login5
  })
);
