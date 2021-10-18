import React from "react"
import { TextInput } from 'react-native';
// ...



const AddInput = ({ children, value, onChange, ...props }) => {
    return (
        <BaseInput {...props}>
        <TextInput value={value} onChangeText={onChange} />
      </BaseInput>
    )
}

export default AddInput
