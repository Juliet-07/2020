import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Text} from 'react-native-elements';
import MainView from '../../../components/Layouts/MainView';
import FlexView from '../../../components/Layouts/FlexView';
import {Formik} from 'formik';
import * as yup from 'yup';
import generateValidationSchema from '../../../utils/validators';
import {InputWithFormik} from '../../../components/InputCustom';
import {BasicButton} from '../../../components/button';
import {styles} from './styles';
import theme from '../../../config/theme';
import {colors} from '../../../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useMutation} from '@apollo/client';
import {SIGNUP} from '../../../gql/mutations';
import {AuthContext} from '../../../AuthContext';
import ShowMessage, {type} from '../../../components/showMessage';
import Loader from '../../../components/Loader';
const validationSchema = generateValidationSchema(
  yup,
  [ 'Phonenumber', 'Email', 'Password'],
  [ 'PHONE', 'EMAIL', 'PASSWORD'],
);

const initialValues = {
  
  Phonenumber: '',
  Email: '',
  Password: '',
};
const index = ({navigation, route}) => {
  const [show, setShow] = useState(true);
  const {signUp} = useContext(AuthContext);
  const [userCreateAccount, {loading, error}] = useMutation(SIGNUP);
  const onSubmit = (values) => {
    const data = {
      email: values.Email,
      phone: values.Phonenumber,
      password: values.Password,
    };
    userCreateAccount({
      variables: {
        data,
      },
    })
      .then(async (res) => {
        ShowMessage(type.DONE, 'Welcome to EmBED');
        signUp(res.data.userCreateAccount.email);
        navigation.navigate('Validation');
      })
      .catch((e) => {
        ShowMessaage(type.ERROR, e.toString());
      });
  };
  return (
    <MainView scrollable>
      <View style={styles.container}>
        <FlexView flexDir="column">
          <Text h4> GET STARTED FOR FREE</Text>
          <Text style={styles.details}>
            Sign up to get access to embed features
          </Text>
        </FlexView>
        
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({values, handleChange, handleSubmit}) => (
              <View style={{paddingHorizontal: theme.horizontalPaddingMd}}>
                <View>
                 
                  <InputWithFormik
                    name="Email"
                    placeholder="Email"
                    value={values.Email}
                    onChangeText={handleChange('Email')}
                    keyboardType="email-address"
                  />
                  <InputWithFormik
                    name="Phonenumber"
                    placeholder="Phonenumber"
                    value={values.Phonenumber}
                    onChangeText={handleChange('Phonenumber')}
                    keyboardType="phone-pad"
                  />
                  <InputWithFormik
                    name="Password"
                    placeholder="Password"
                    value={values.Password}
                    onChangeText={handleChange('Password')}
                    secureTextEntry={show}
                    rightIcon={
                      <TouchableOpacity onPress={() => setShow(!show)}>
                        <Ionicons
                          name={
                            show ? 'ios-eye-outline' : 'ios-eye-off-outline'
                          }
                          size={theme.iconSize - 3}
                          color={colors.grey}
                        />
                      </TouchableOpacity>
                    }
                  />
                </View>

                <BasicButton
                  buttonText={
                    loading ? <Loader size="small" /> : 'CREATE ACCOUNT'
                  }
                  textSize="medium"
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
       

        <FlexView>
          <Text style={styles.details}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.signin}>Sign in</Text>
          </TouchableOpacity>
        </FlexView>
      </View>
    </MainView>
  );
};

export default index;
