import React from 'react';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import propTypes from 'prop-types';

export const Obutton = ({
  title,
  type,
  onPress,
  loading,
  buttonStyle,
  titleStyle,
  iconRight,
  disabled,
  props,
}) => {
  return (
    <Button
      title={title}
      color="red"
      icon={
        iconRight ? (
          <Ionicons
            name="analytics"
            size={24}
            color="#ffffff"
            style={{marginLeft: 10}}
          />
        ) : null
      }
      iconRight={iconRight ? iconRight : null}
      type={type}
      onPress={onPress}
      titleStyle={titleStyle}
      buttonStyle={{...styles.btnContainer, ...buttonStyle}}
      loading={loading}
      disabled={disabled}
      {...props}
    />
  );
};


Obutton.propTypes = {
  title: propTypes.string.isRequired,
  type: propTypes.string,
  onPress: propTypes.func,
  titleStyle: propTypes.object,
  buttonStyle: propTypes.object,
  iconRight: propTypes.bool,
};