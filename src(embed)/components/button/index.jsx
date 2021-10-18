import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Button, withTheme} from 'react-native-elements';
import theme from '../../config/theme';

/*************************  HELPER FUNCTIONS  **********************/
const setFontSize = (textSize) => {
  const fontSize =
    textSize === 'small'
      ? theme.smallFontSize
      : textSize === 'medium'
      ? theme.standardFontSize
      : textSize === 'large'
      ? theme.largeFontSize
      : 9;
  return fontSize;
};

/*************************  BASIC BUTTON  **********************/
export const BasicButton = withTheme(
  ({
    buttonText,
    width,
    color,
    capitalize,
    variant,
    onPress,
    shadow,
    background,
    icon,
    textSize,
    buttonStyle
  }) => {
    return (
      <Button
        icon={icon}
        onPress={() => onPress()}
        title={buttonText}
        titleStyle={{
          fontSize: setFontSize(textSize),
          textTransform: capitalize ? 'capitalize' : 'uppercase',
          color: color || variant ? 'white' : 'white',
          marginLeft: icon ? 2 : null,
        }}
        buttonStyle={{
          backgroundColor: variant
            ? theme[variant]
            : background
            ? background
            : theme.primary,
          width: width ? width : null,
          justifyContent: 'center',
          alignItems: 'center',
          ...buttonStyle
        }}
        raised={shadow}
      />
    );
  },
);

/*************************  OUTLINE BUTTON  **********************/
export const OutlineButton = withTheme(
  ({
    buttonText,
    width,
    capitalize,
    variant,
    textSize,
    onPress,
    shadow,
    outlineColor,
    buttonStyle
  }) => {
    return (
      <View>
        <Button
          onPress={() => onPress()}
          title={buttonText}
          titleStyle={{
            fontSize: setFontSize(textSize),
            textTransform: capitalize ? 'capitalize' : null,
            color: outlineColor
              ? outlineColor
              : variant
              ? theme[variant]
              : theme.primary,
          }}
          buttonStyle={{
            borderColor: outlineColor
              ? outlineColor
              : variant
              ? theme[variant]
              : theme.primary,
            borderStyle: 'solid',
            backgroundColor: 'none',
            borderWidth: 1,
            width: width ? width : null,
            ...buttonStyle
          }}
          raised={shadow}
        />
      </View>
    );
  },
);

/*************************  PROP-TYPES   **********************/
BasicButton.propTypes = {
  buttonText: PropTypes.any.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.string,
  capitalize: PropTypes.string,
  textSize: PropTypes.string,
  variant: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  shadow: PropTypes.bool,
  background: PropTypes.string,
  icon: PropTypes.any,
};

OutlineButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  capitalize: PropTypes.string,
  variant: PropTypes.string,
  textSize: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  shadow: PropTypes.bool,
  outlineColor: PropTypes.string,
};
