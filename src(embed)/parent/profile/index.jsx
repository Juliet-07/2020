import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import theme from '../../config/theme';
import Header from '../../components/Header';
import Feather from 'react-native-vector-icons/Feather';
import MainView from '../../components/Layouts/MainView/index';
import FlexView from '../../components/Layouts/FlexView/index';
import {Text} from 'react-native-elements';
import ProfileImage from '../../assets/images/profileImage.png';
import {randomColor, capitalizeWords} from '../../lib/factory.lib.js';
import {randomColors} from '../../lib/seletiveColor';
import {BasicButton, OutlineButton} from '../../components/button';
import {useQuery} from '@apollo/client';
import Loader from '../../components/Loader';
import {GETCURRENTUSER} from '../../gql/queries';
import {formatDate} from '../../lib/factory.lib'
import { date } from 'yup';

const index = ({navigation}) => {
  const {loading, error, data} = useQuery(GETCURRENTUSER);
  if (loading) return <Loader />;
  if (error) return <Text>{error.message}</Text>;
  const {email, createdAt, profileData} = data.getCurrentUser;
  return (
    <MainView scrollable>
      <View style={styles.mainContainer}>
        <Header headerText="Profile" backArrow profileIcon />

        <FlexView flexDir="column" marginTop={1} marginBottom={10}>
          <Image source={ProfileImage} style={styles.image} />
          <Text h4>{profileData !== null ? profileData.fullName : ''}</Text>
        </FlexView>

        <FlexView flexDir="column" marginTop={1} marginBottom={10}>
          <Text h5>Joined: {formatDate(createdAt)}</Text>
          <Text h5>
            No. of Kids:{' '}
            {profileData !== null ? profileData.children.length : 0}{' '}
          </Text>
          <Text h5>{email ? email : ''}</Text>
        </FlexView>

        <FlexView>
          <View style={styles.socialMediaIconView}>
            <View style={styles.iconView}>
              <Feather
                name="facebook"
                color={theme.white}
                size={theme.iconSize}
              />
            </View>
            <View style={styles.iconView}>
              <Feather
                name="twitter"
                color={theme.white}
                size={theme.iconSize}
              />
            </View>
            <View style={styles.iconView}>
              <Feather color={theme.white} size={theme.iconSize} name="mail" />
            </View>
            <View style={styles.iconView}>
              <Feather
                name="instagram"
                color={theme.white}
                size={theme.iconSize}
              />
            </View>
          </View>
        </FlexView>

        <FlexView>
          <Text style={styles.details}>
            {profileData !== null ? profileData.bio : ''}
          </Text>
        </FlexView>

        <FlexView justifyContent="space-around">
          <BasicButton
            textSize="medium"
            buttonText="Edit Profile"
            onPress={() => navigation.navigate('ProfileSettings')}
          />
          <OutlineButton
            textSize="medium"
            buttonText="Delete Account"
            onPress={() => alert('Basic')}
          />
        </FlexView>

        <FlexView>
          <View
            style={{
              marginBottom: 10,
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              All Registered Kids
            </Text>
            <Text
              style={{
                width: 100,
                textAlign: 'center',
                borderBottomWidth: 1,
              }}></Text>
          </View>
        </FlexView>

        <View style={styles.registeredKidsHolder}>
          {profileData !== null
            ? profileData.children.map(({fullName, _id}, idx) => (
                <View
                  key={_id}
                  style={{
                    margin: 6,
                    padding: 10,
                    borderRadius: 50,
                    backgroundColor: randomColors(fullName[0]),
                  }}>
                  <Text style={styles.text}>{capitalizeWords(fullName)}</Text>
                </View>
              ))
            : 'You have no registered kids'}
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Quick tip:</Text>
          <Text style={{fontSize: 15, color: theme.grey}}>
            Click on any of your child's best tablet above to edit their profile
          </Text>
        </View>
      </View>
    </MainView>
  );
};
export default index;
