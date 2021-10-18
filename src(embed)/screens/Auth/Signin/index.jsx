import React, {useState, useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import MainView from '../../../components/Layouts/MainView';
import FlexView from '../../../components/Layouts/FlexView';
import {Formik} from 'formik';
import * as yup from 'yup';
import generateValidationSchema from '../../../utils/validators';
import {InputWithFormik} from '../../../components/InputCustom';
import {BasicButton} from '../../../components/button';
import Loader from '../../../components/Loader';
import {styles} from './styles';
import TitleCard from '../../../parent/components/TitleCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../config/colors';
import theme from '../../../config/theme';
import {useMutation} from '@apollo/client';
import {AuthContext} from '../../../AuthContext';
import {SIGNIN} from '../../../gql/mutations';
import ShowMessage, {type} from '../../../components/showMessage';
import {useNavigation} from '@react-navigation/native';

const validationSchema = generateValidationSchema(
  yup,
  ['Email', 'Password'],
  ['EMAIL', 'PASSWORD'],
);

const index = () => {
  const navigation = useNavigation();
  const initialValues = {
    Email: '',
    Password: '',
  };
  const [show, setShow] = useState(true);
  const {signIn} = useContext(AuthContext);

  const [userLogin, {loading, error}] = useMutation(SIGNIN);

  const onSubmit = async (values) => {
    console.log('juliet');
    const data = {
      emailOrPhone: values.Email,
      password: values.Password,
    };
    await userLogin({
      variables: {
        data,
      },
    })
      .then(async (res) => {
        const token = res.data.userLogin.token;
        const accountType = res.data.userLogin.accountType;
        signIn(token, accountType);
        ShowMessage(type.DONE, 'Welcome to your Dashboard');
      })
      .catch((e) => ShowMessage(type.ERROR, e.toString()));
  };
  return (
    <MainView scrollable>
      <View style={styles.container}>
        <FlexView flexDir="column">
          <Text h4> SIGN IN TO EMBED</Text>
          <Text style={styles.details}>
            Please enter your details to proceed
          </Text>
        </FlexView>

        <FlexView justifyContent="space-around">
          <TitleCard width="40%">
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.iconsContainer}>
                <Ionicons
                  name="chatbox-ellipses-outline"
                  size={28}
                  color={colors.primary}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.default,
                  fontWeight: 'bold',
                }}>
                Learners
              </Text>
            </View>
          </TitleCard>
          <TitleCard width="40%">
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.iconsContainer}>
                <MaterialCommunityIcons
                  name="lightning-bolt-outline"
                  size={30}
                  color={colors.primary}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.default,
                  fontWeight: 'bold',
                }}>
                Guardian
              </Text>
            </View>
          </TitleCard>
        </FlexView>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <View style={{paddingHorizontal: theme.horizontalPaddingMd}}>
              <InputWithFormik
                name="Email"
                placeholder="Email"
                value={values.Email}
                onChangeText={handleChange('Email')}
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
                      name={show ? 'ios-eye-outline' : 'ios-eye-off-outline'}
                      size={theme.iconSize - 3}
                      color={colors.grey}
                    />
                  </TouchableOpacity>
                }
              />
              <View
                style={{
                  alignItems: 'flex-end',
                  marginBottom: 20,
                  marginTop: -20,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RecoverPassword')}>
                  <Text style={{color: colors.primary}}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <View>
                <BasicButton
                  buttonText={loading ? <Loader size="small" /> : 'LOGIN '}
                  textSize="medium"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>

        <FlexView>
          <Text style={styles.details1}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signup}>Sign up</Text>
          </TouchableOpacity>
        </FlexView>
      </View>
    </MainView>
  );
};

export default index;
