import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Feather from 'react-native-vector-icons/Feather';

const index = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, }}>
        <View style={{ alignItems:'center', justifyContent:'center'}}>
          <View style={styles.initials}>
            <Text style={styles.initialsText}>AP</Text>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#0753AB'}}>
            Alausa Plaza
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom:5}}>
          <Text style={{fontSize: 14, color: 'grey'}}>
            52, Iweka Street Onitsha, Anambra
          </Text>
          <Feather name="edit" size={15} color="grey" />
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          <View
            style={{
              backgroundColor: '#e2eef2',
              alignItems: 'center',
              justifyContent: 'center',
              width:'30%'
            }}>
            <Text style={{color: '#0753AB', fontWeight: 'bold', fontSize: 25}}>
              56
            </Text>
            <Text style={{color: 'grey', fontSize: 10}}>All Occupants</Text>
          </View>
          <View
            style={{
              backgroundColor: '#e2eef2',
              alignItems: 'center',
              justifyContent: 'center',
              width:'30%'
            }}>
            <Text style={{color: '#0753AB', fontWeight: 'bold', fontSize: 25}}>
              56
            </Text>
            <Text style={{color: 'grey', fontSize: 10}}>Total Units</Text>
          </View>
          <View
            style={{
              backgroundColor: '#e2eef2',
              alignItems: 'center',
              justifyContent: 'center',
              width:'30%'
            }}>
            <Text style={{color: '#0753AB', fontWeight: 'bold', fontSize: 25}}>
              56
            </Text>
            <Text style={{color: 'grey', fontSize: 10}}>Occupied Units</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default index;
