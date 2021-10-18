import React from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './mainView.styles';
// import Bubble from '../../Bubbles/index';

const MainView = ({scrollable, children, style, props}) => {
  return scrollable ? (
    <View style={{...styles.mainScroll, ...style}}>
      <ScrollView contentContainerStyle={styles.mainScrolling}>
        {children}
      </ScrollView>
    </View>
  ) : (
    <View style={{...styles.main, ...style}}>{children}</View>
  );
};

export default MainView;

// BUBBLE
{
  /* <Bubble
  up={0}
  right={0}
  btm={0}
  down={2}
  thickness={(12, 20, 10, 12)}
  color={'green'}>
  {children}
</Bubble> */
}
