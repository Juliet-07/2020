import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const index = () => (
  <View style={styles.container}>
    <Text>PROFILE SCREEN</Text>
    <Button title="Click Here" onPress={() => alert('Button Clicked')} />
  </View>
);
export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
