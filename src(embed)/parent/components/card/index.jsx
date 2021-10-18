import React from 'react';
import {Card, Text, Icon} from 'react-native-elements';
import {View, StyleSheet, ScrollView} from 'react-native';
// import {BasicButton, OutlineButton} from '../button';

export const CustomCard = ({
  cardContent = [],
  cardWith,
  alignCenter,
  alignRight,
  // bodytext,
  // cardButton,
}) => {
  return (
    <ScrollView>
      <View style={styles.main}>
        {cardContent.map((item, idx) => (
          <Card
            key={item.title + '#' + idx}
            image={item.imageUrl}
            wrapperStyle={{padding: 0}}
            containerStyle={{
              ...styles.container,
              width: cardWith ? cardWith : 160,
            }}>
            <View
              style={{
                ...styles.cardBody,
                justifyContent: alignRight
                  ? 'flex-end'
                  : alignCenter
                  ? 'center'
                  : 'flex-start',
                alignItems: alignRight
                  ? 'flex-end'
                  : alignCenter
                  ? 'center'
                  : 'flex-start',
              }}>
              <Text h1 h1Style={styles.h1}>
                {item.title}
              </Text>
              <Text
                style={{
                  ...styles.bodyText,
                  textAlign: alignRight
                    ? 'right'
                    : alignCenter
                    ? 'center'
                    : 'left',
                }}>
                {item.bodyContent}
              </Text>
            </View>
            <View
              style={{
                ...styles.action,
                alignItems: alignRight
                  ? 'flex-end'
                  : alignCenter
                  ? 'center'
                  : 'flex-start',
              }}>
              {item.action}
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 20,
    justifyContent: 'center',
  },
  container: {
    borderRadius: 6,
    overflow: 'hidden',
    width: 160,
    margin: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  h1: {
    color: '#444',
    fontSize: 12,
    marginBottom: 7,
  },
  cardBody: {
    flexDirection: 'column',
    padding: 10,
  },
  bodyText: {
    color: '#727273',
    marginBottom: 10,
    fontSize: 9,
  },
  imageStyle: {
    height: 100,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  action: {
    borderTopWidth: 1,
    borderTopColor: '#22222234',
    padding: 10,
  },
});
