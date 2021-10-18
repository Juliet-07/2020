import React from 'react';
import {Input} from 'react-native-elements';
import { Text} from 'react-native';
import propTypes from 'prop-types';
import {useField} from 'formik';
import {styles} from './styles';

export const InputWithFormik = (props) => {
  const {
    name,
    value,
    label,
    errorMsg,
    keyboardType,
    multiline,
    numberOfLines,
    containerStyles,
    inputContainerStyles,
    leftLabel,
    handleChange,
    rightIcon,
    placeholder,
    // secureTextEntry,
    secondaryInput,
    ...otherProps
  } = props;
  const [field, meta, helpers] = useField(props);
const styleToUse = secondaryInput ? styles.inputContainer : styles.underline;

  return (
    <React.Fragment>
      <Input
        name={name}
        id={[label, name].join('-')}
        value={value[name]}
        onChange={handleChange}
        // secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholderTextColor="#00000080"
        keyboardType={keyboardType}
        inputContainerStyle={{
          ...styleToUse,
          // ...inputContainerStyles,
        }}
        containerStyle={{...styles.container, ...containerStyles}}
        errorStyle={{color: 'red', marginTop: 0}}
        errorMessage={errorMsg}
        underlineColorAndroid="transparent"
        leftIcon={
          leftLabel ? (
            <Text style={{color: '#fff', marginRight: 5}}>{leftLabel}</Text>
          ) : null
        }
        rightIcon={rightIcon}
        {...field[name]}
        {...props}
        {...otherProps}
      />
      <Text style={styles.errorMessage}>{meta.touched && meta.error}</Text>
    </React.Fragment>
  );
};

InputWithFormik.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  keyboardType: propTypes.string,
  errorMsg: propTypes.string,
  containerStyles: propTypes.object,
  inputContainerStyles: propTypes.object,
  // leftLabel: propTypes.bool,
};
