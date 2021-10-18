import React from 'react';
import {FlatList} from 'react-native';
import {activities} from '../dummyData';
import Card from '../Card';

const index = () => {
    console.log(activities)
  return (
    <FlatList
      data={activities}
      renderItem={({item}) => <Card data={item} />}
      keyExtractor={(item) => String(item.id)}
    />
  );
};
export default index;
