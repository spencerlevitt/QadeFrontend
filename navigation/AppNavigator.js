import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Onboard from '../screens/onboard/index';
import LoginNavigator from './LoginNavigator'

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Onboard,
    LoginNavigator,
    Main: MainTabNavigator,
  })
);
