import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const check = (status) => {
  let color;
  if (status === 'Bedsitter') {
    return (color = 'yellow');
  } else {
    return (color = 'pink');
  }
};

const index = ({data}) => {
  const {id,bold, status, date} = data;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: check(status),
        }}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>{bold}</Text>
          <Text style={{fontSize: 10, color: 'grey'}}>{status}</Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>{date}</Text>
        </View>
      </View>
    </View>
  );
};
export default index;
