import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.text}>
          MY NAME IS JULIET AND I AM A MOBILE DEVELOPER
        </Text>
      </View>
    </View>
  );
};
export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:20
  },
  text: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
