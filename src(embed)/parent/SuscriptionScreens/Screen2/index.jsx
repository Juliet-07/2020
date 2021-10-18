import React from 'react';
import {styles} from './styles';
import theme from '../../../config/theme';
import Header from '../../../components/Header';
import TitleCard from '../../components/TitleCard';
import {SearchBar, Text} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Image, TouchableOpacity} from 'react-native';
import BackIcons from 'react-native-vector-icons/Ionicons';
import MainView from '../../../components/Layouts/MainView';
import FlexView from '../../../components/Layouts/FlexView';
import {BasicButton, OutlineButton} from '../../../components/button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const index = ({navigation}) => {
  const Card = [
    {
      key: 1,
      image: (
        <View style={styles.iconsContainer}>
          <Ionicons
            name="chatbox-ellipses-outline"
            size={28}
            color={theme.primary}
          />
        </View>
      ),
      Title: <Text style={styles.Title}>Term</Text>,
      content1: <Text style={styles.text}>Save 30% with </Text>,
      content2: <Text style={styles.text}>this circle.</Text>,
    },
    {
      key: 2,
      image: (
        <View style={styles.iconsContainer}>
          <MaterialCommunityIcons
            name="lightning-bolt-outline"
            size={30}
            color={theme.primary}
          />
        </View>
      ),
      Title: <Text style={styles.Title}>Session</Text>,
      content1: <Text style={styles.text}>No discount</Text>,
    },
  ];
  return (
    <MainView>
      <View style={styles.container}>
        <Header backArrow headerText="Subscription" profileIcon />

        <View style={styles.subTitleContainer}>
          <FlexView width="42%">
            <Text style={styles.subTitle} h5>
              BILLING CIRCLE
            </Text>
          </FlexView>
        </View>

        <FlexView justifyContent="space-evenly">
          {Card.map(({key, Title, image, content1, content2}) => (
            <TitleCard key={key}>
              <View style={styles.cardContent}>
                {image}
                <Text>{Title}</Text>
                <Text>{content1}</Text>
                <Text>{content2}</Text>
              </View>
            </TitleCard>
          ))}
        </FlexView>
        <View></View>

        <View style={styles.button}>
          <BasicButton
            buttonText="Coutinue"
            onPress={() => alert('Basic')}
            buttonStyle={{backgroundColor: theme.secondary, width: 90}}
          />
        </View>
      </View>
    </MainView>
  );
};

export default index;
