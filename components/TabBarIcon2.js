import React from 'react';
import {Image} from 'react-native'
import { Ionicons } from 'react-native-vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  
  return (
    <Image
      source={props.name}
      style={{ height: 20, width: 20, marginBottom: -3, tintColor: props.focused ? Colors.tabIconSelected : Colors.tabIconDefault }}
    />
  );
}
