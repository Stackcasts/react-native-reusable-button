import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './components/Button';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => console.log('button pressed!')}>
          New Text
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
