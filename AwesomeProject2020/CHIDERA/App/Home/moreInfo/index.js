import React from 'react';
import {FlatList} from 'react-native';
import {moreInfo} from '../dummyData';
import Card from '../Card';

const index = () => {
    console.log(moreInfo)
  return (
    <FlatList
      data={moreInfo}
      renderItem={({item}) => <Card data={item} />}
      keyExtractor={(item) => String(item.id)}
    />
  );
};
export default index;
