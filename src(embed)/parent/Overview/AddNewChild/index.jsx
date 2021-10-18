import React, {useState} from 'react';
import {View, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import * as yup from 'yup';
import {Formik} from 'formik';
import {styles} from './styles';
import Header from '../../../components/Header';
import theme from '../../../config/theme/index';
import {colors} from '../../../config/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BasicButton} from '../../../components/button/index';
import MainView from '../../../components/Layouts/MainView/index';
import FlexView from '../../../components/Layouts/FlexView/index';
import {InputWithFormik} from '../../../components/InputCustom/index';
import {useNavigation} from '@react-navigation/native';
import {ADDNEWCHILD} from '../../../gql/mutations';
import {GETCHILDREN} from '../../../gql/queries';
import {useMutation} from '@apollo/client';
import ShowMessage, {type} from '../../../components/showMessage';
import Loader from '../../../components/Loader';
import InputPicker from '../../../components/picker';

const index = (props) => {
  const navigation = useNavigation();
  const [show, setShow] = useState(true)
  const initialValues = {
    Fullname: '',
    Username: '',
    Level: '',
    dob: '',
    Password: '',
  };
  const PickerOptions = [
    {
      label: 'Basic 1',
      value: 'Basic_1',
    },
    {
      label: 'Basic 2',
      value: 'Basic_2',
    },
    {
      label: 'Basic 3',
      value: 'Basic_3',
    },
    {
      label: 'Basic 4',
      value: 'Basic_4',
    },
    {
      label: 'Basic 5',
      value: 'Basic_5',
    },
    {
      label: 'Basic 6',
      value: 'Basic_6',
    },
  ];
  const [userAddStudent, {loading, error}] = useMutation(ADDNEWCHILD, {
    awaitRefetchQueries: true,
    refetchQueries: [
      {
        query: GETCHILDREN,
      },
    ],
  });
  const onSubmit = async (values) => {
    const data = {
      fullName: values.Fullname,
      username: values.Username,
      level: values.Level,
      password: values.Password,
      // dateOfBirth: values.dob,
    };
    await userAddStudent({
      variables: {
        data,
      },
    })
      .then((res) => {
        ShowMessage(type.DONE, 'New Child Added');
        props.navigation.goBack();
      })
      .catch((e) => ShowMessage(type.ERROR, e.message));
  };
  return (
    <MainView scrollable>
      <Header backArrow headerText="Add New Child" />
      <View style={styles.mainContainer}>
        <KeyboardAvoidingView>
          <View style={styles.mainBody}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({values, touched, errors, handleChange, handleSubmit}) => (
                <View style={{paddingHorizontal: theme.horizontalPaddingMd}}>
                  <View>
                    <InputWithFormik
                      name="Fullname"
                      placeholder="Fullname"
                      value={values.Fullname}
                      onChangeText={handleChange('Fullname')}
                    />
                    <InputWithFormik
                      name="Username"
                      placeholder="Username"
                      value={values.Username}
                      onChangeText={handleChange('Username')}
                    />
                    <InputPicker
                      name="Level"
                      placeholder="Level"
                      pickerContainerStyle={styles.pickerContainer}
                      selectedValue={values.Level}
                      PickerOptions={PickerOptions}
                      onValueChange={handleChange('Level')}
                    />
                    {touched.Level && errors.Level && (
                      <Text style={styles.errorMessage}>{errors.Level}</Text>
                    )}
                    <InputWithFormik
                      name="dob"
                      placeholder="Date Of Birth"
                      value={values.dob}
                      onChangeText={handleChange('dob')}
                    />
                    <InputWithFormik
                      name="Password"
                      placeholder="Password"
                      secureTextEntry
                      value={values.Password}
                      onChangeText={handleChange('Password')}
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
                  </View>

                  <BasicButton
                    buttonText={
                      loading ? <Loader size="small" /> : 'Add New Child  '
                    }
                    textSize="medium"
                    width="100%"
                    color="theme.green"
                    onPress={handleSubmit}
                  />
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
      </View>
    </MainView>
  );
};
export default index;
