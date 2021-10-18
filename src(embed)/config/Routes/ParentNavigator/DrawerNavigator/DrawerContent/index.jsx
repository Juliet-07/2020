import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import image from '../../../../../assets/images/profileImage.png';
import {styles} from './styles';
import {AuthContext} from '../../../../../AuthContext';
import {colors} from '../../../../colors';
import {GETCURRENTUSER} from '../../../../../gql/queries';
import Loader from '../../../../../components/Loader'
import {useQuery} from '@apollo/client';

const DrawerContent = (props) => {
  const {signOut} = useContext(AuthContext);
  const {loading, error,data} = useQuery(GETCURRENTUSER);
  if(loading){
    return <Loader/>
  }
  if(error){
  return <Text>{error.message}</Text>
  }
  const {email, profileData} = data.getCurrentUser;
  return (
    <View style={{flex: 1, margin: 0}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row'}}>
            <Image source={image} style={styles.image} />
            <View style={styles.titleView}>
              <Text style={styles.title}>{profileData !==null ? profileData.fullName : ''}</Text>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => (
            <Icon name="log-out-outline" size={23} color={colors.secondary} />
          )}
          label="Log Out"
          onPress={() => signOut()}
        />
      </View>
    </View>
  );
};

export default DrawerContent;
