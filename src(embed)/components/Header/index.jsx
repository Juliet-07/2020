import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import theme from '../../config/theme/index';
import FlexView from '../Layouts/FlexView/index';
import Arrow from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

const index = ({
  headerText,
  backArrow,
  editProfileIcon,
  profileIcon,
  burgerMenu,
  navigateProfile,
}) => {
  const navigation = useNavigation();
  return (
    <FlexView justifyContent="space-between" marginTop={-25} marginBottom={3}>
      <FlexView>
        {burgerMenu ? (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Arrow
              name="list-outline"
              color={theme.grey}
              size={theme.iconSize}
            />
          </TouchableOpacity>
        ) : backArrow ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="arrowleft"
              color={theme.grey}
              size={theme.iconSize - 3}
            />
          </TouchableOpacity>
        ) : null}
      </FlexView>

      <FlexView>
        <Text h4>{headerText || ''}</Text>
      </FlexView>

      <FlexView>
        <TouchableOpacity onPress={() => navigation.navigate(navigateProfile)}>
          {editProfileIcon ? (
            <Feather name="edit" color={theme.grey} size={theme.iconSize - 5} />
          ) : profileIcon ? (
            <Arrow
              name="person-circle"
              color={theme.grey}
              size={theme.iconSize}
            />
          ) : null}
        </TouchableOpacity>
      </FlexView>
    </FlexView>
  );
};
export default index;

index.propTypes = {
  headerText: PropTypes.string.isRequired,
};
