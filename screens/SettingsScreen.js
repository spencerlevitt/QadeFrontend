import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>

      </ScrollView>
    );
  }
}

SettingsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
