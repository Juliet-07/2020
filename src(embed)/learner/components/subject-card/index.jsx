import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const SubjectCard = ({subjectName}) => {
  return (
    <View style={styles.main}>
      <View style={styles.subject}>
        <Text style={styles.subjectName}>{subjectName || 'Hello World'}</Text>
        <View style={styles.underline}></View>
      </View>
      <View style={styles.icon}>
        <Text style={styles.iconText}>
          {subjectName.substring(0, 3).toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 160,
    height: 100,
    justifyContent: 'space-between',
    borderRadius: 4,
    borderLeftColor: 'rgba(108, 0, 108, 0.14);',
    borderLeftWidth: 2,
    padding: 10,
    margin: 5,
    // elevation: 2,
  },
  icon: {
    height: 40,
    width: 40,
    backgroundColor: '#6C006C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: '#a766a7',
    borderWidth: 2,
  },
  iconText: {
    color: '#fff',
    fontSize: 10,
  },
  subjectName: {
    fontSize: 12,
    color: '#767675',
  },
  subject: {
    flexShrink: 1,
  },
  underline: {
    height: 2,
    width: 30,
    backgroundColor: '#FF6600',
    marginTop: 5,
  },
});
