import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  baseInput: {
    paddingVertical: 6,
  },
});

const BaseInput = ({ children, label }) => {
    return (
        <View style={[styles.baseInput, style]}>
        <Text>{label}</Text>
        {children}
      </View>
    )
}

export default BaseInput