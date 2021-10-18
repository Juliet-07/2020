import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { InputWithFormik } from "../../components/InputCustom";
import generateValidationSchema from '../../utils/validators';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import theme from '../../config/theme';
const validationSchema=generateValidationSchema(yup, ['firstName'],['REQUIRED'] )
const index = () => {
  return (
    <Formik
    initialValues={{firstName: ''}}
    validationSchema={validationSchema}
    onSubmit={(values) => console.log(values)}
    >
      {({ values, handleBlur, handleChange, handleSubmit }) => (
        <View style={{marginTop: 20, width: '80%', alignSelf: 'center'}}>
        <InputWithFormik
          name="firstName"
          value={values.firstName}
          placeholder="Last name"
          onChangeText={handleChange('firstName')}
          label="First Name"
      
   
        />
        </View>
      )}
    </Formik>
  );
};

export default index;

const styles = StyleSheet.create({});
