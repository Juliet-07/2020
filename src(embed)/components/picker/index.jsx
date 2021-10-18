import React from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {styles} from './styles'

const InputPicker = ({
  PickerOptions,
  placeholder,
  pickerStyle,
  pickerContainerStyle,
  onValueChange,
  selectedValue,
  ...otherProps
}) => {
  const PickerItem = PickerOptions.map((item) => {
    return (
      <Picker.Item key={item.value} label={item.label} value={item.value} />
    );
  });
  return (
    <View style={{...styles.pickerContainerView, ...pickerContainerStyle}}>
      <Picker
        style={{...styles.pickerStyle, ...pickerStyle}}
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        {...otherProps}>
        <Picker.Item label={placeholder || 'Select'} value="" />
        {PickerItem}
      </Picker>
    </View>
  );
};
export default InputPicker;
