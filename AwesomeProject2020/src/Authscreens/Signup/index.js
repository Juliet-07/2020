import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import generateValidationSchema from "../../utils/validators";
import {Obutton} from '../../components/button';
import {InputWithFormik} from '../../components/input';
import Email from 'react-native-vector-icons/Fontisto';
import Person from 'react-native-vector-icons/Ionicons';
import Phone from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from './styles';

const initialValues = {
  fullName: '',
  email: '',
  phoneNumber: '',
  password: '',
};

const validationSchema = generateValidationSchema(
  yup,
  ["fullName", "email", "phoneNumber", "password"],
  ["REQUIRED", "EMAIL", "PHONE", "PASSWORD"]
);

const index = ({navigation}) => {
  const [show, setShow] = useState(true);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Sign Up</Text>
      </View>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <InputWithFormik
              name="fullName"
              placeholder="Full Name"
              value={values.fullName}
              onChangeText={handleChange('fullName')}
              rightIcon={<Person name="person" color="#00000080" size={20} />}
            />
            <InputWithFormik
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChangeText={handleChange('email')}
              rightIcon={<Email name="email" color="#00000080" size={20} />}
            />
            <InputWithFormik
              name="phoneNumber"
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={values.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
              rightIcon={<Phone name="phone" color="#00000080" size={20} />}
            />
            <InputWithFormik
              name="password"
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry={show}
              rightIcon={
                <TouchableOpacity onPress={() => setShow(!show)}>
                  <Entypo
                    name={show ? 'eye-with-line' : 'eye'}
                    color="#00000080"
                    size={20}
                  />
                </TouchableOpacity>
              }
            />

            <View style={styles.button}>
              <Obutton
                //   loading={loading}
                //   disabled={loading}
                title="Create Account"
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
      <View style={styles.footer}>
        <Text style={styles.footerContent}>Already have an account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.footerContent}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default index;
