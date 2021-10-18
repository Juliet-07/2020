import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {Text} from 'react-native-elements';
import theme from '../../config/theme/index';
import Header from '../../components/Header';
import {View, ScrollView, Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MainView from '../../components/Layouts/MainView/index';
import FlexView from '../../components/Layouts/FlexView/index';
import ProfileImage from '../../assets/images/profileImage.png';

const index = () => {
  useEffect(() => {
    return SplashScreen.hide();
  }, []);
  return (
    <MainView scrollable>
      <Header backArrow headerText="Child’s Profile" editProfileIcon />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View>
            <FlexView flexDir="column">
              <Image source={ProfileImage} style={styles.image} />
              <Text style={styles.profileName}>Tassy Omah</Text>
              <Text
                style={{
                  fontSize: 15,
                  color: theme.grey,
                }}>
                Jss2
              </Text>
            </FlexView>
          </View>

          <View style={{marginTop: 50}}>
            <View style={styles.iconContainer}>
              <AntDesign
                name="phone"
                color={theme.grey}
                size={theme.iconSize - 3}
              />
              <View style={styles.textsContainer}>
                <Text style={{fontSize: 17, color: theme.grey}}>
                  +2348101519827
                </Text>
              </View>
            </View>

            <View style={styles.iconContainer}>
              <AntDesign
                name="mail"
                color={theme.grey}
                size={theme.iconSize - 3}
              />

              <View style={styles.textsContainer}>
                <Text style={{fontSize: 17, color: theme.grey}}>
                  Qeeneomah@gmail.com
                </Text>
              </View>
            </View>

            <View style={styles.iconContainer}>
              <Ionicons
                name="location"
                color={theme.grey}
                size={theme.iconSize - 3}
              />

              <View style={styles.textsContainer}>
                <Text style={{fontSize: 17, color: theme.grey}}>
                  Ontario, Canada.
                </Text>
              </View>
            </View>

            <View style={styles.iconContainer}>
              <AntDesign
                name="calendar"
                color={theme.grey}
                size={theme.iconSize - 3}
              />

              <View style={styles.textsContainer}>
                <Text style={{fontSize: 17, color: theme.grey}}>
                  Joined Apirl 2019
                </Text>
              </View>
            </View>

            <View style={styles.iconContainer}>
              <AntDesign
                name="phone"
                color={theme.grey}
                size={theme.iconSize - 3}
              />

              <View style={styles.textsContainer}>
                <Text style={{fontSize: 17, color: theme.grey}}>
                  Neophyte Subscription
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </MainView>
  );
};
export default index;
