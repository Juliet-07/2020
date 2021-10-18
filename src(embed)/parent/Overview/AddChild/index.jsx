import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './styles';
import theme from '../../../config/theme/index';
import {Card, Text} from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
import Header from '../../../components/Header';
import MainView from '../../../components/Layouts/MainView/index';
import {capitalizeWords} from '../../../lib/factory.lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfileImage from '../../../assets/images/Avatar.png';
import {useNavigation} from '@react-navigation/native';
import FlexView from '../../../components/Layouts/FlexView/index';
import {useQuery} from '@apollo/client';
import {GETCHILDREN} from '../../../gql/queries';
import Loader from '../../../components/Loader';

const index = () => {
  const navigation = useNavigation();
  const {loading, error, data} = useQuery(GETCHILDREN,{ fetchPolicy:'cache-and-network',});
  if (loading) return <Loader />;
  if (error) return <Text>{error.message}</Text>;
  console.log(data);
  return (
    <ScrollView>
      <MainView>
        <View>
          <Header burgerMenu headerText="Your children/child" profileIcon />
          <View style={styles.AddChildsCards}>
            {data.getParentChildren.map(({fullName, level, lastSeen}, idx) => (
              <Card key={fullName + idx} style={styles.card_child}>
                <FlexView
                  justifyContent="space-evenly"
                  marginTop={1}
                  marginBottom={1}>
                  <FlexView width={60} height={60} borderRadius={43}>
                    <Image source={ProfileImage} style={styles.image} />
                  </FlexView>
                  <View>
                    <View>
                      <Text style={styles.userName} h4>
                        {capitalizeWords(fullName)}
                      </Text>
                      <Text style={{color: theme.grey}}>
                        {capitalizeWords(level)}
                      </Text>
                    </View>
                    <FlexView>
                      <Text style={{color: theme.grey}}>
                        Last logged in: {lastSeen}
                      </Text>
                    </FlexView>
                  </View>
                </FlexView>
              </Card>
            ))}
          </View>
          <FlexView>
            <View style={styles.AddcardsContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AddNewChild')}>
                <AntDesign
                  name="adduser"
                  color={theme.grey}
                  size={theme.iconSize + 35}
                />
              </TouchableOpacity>

              <Text style={styles.AddNewChildText}>Add New Child</Text>
            </View>
          </FlexView>
        </View>
      </MainView>
    </ScrollView>
  );
};
export default index;
