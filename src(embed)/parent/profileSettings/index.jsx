import React, {useState} from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import {styles} from './styles';
import {Text} from 'react-native-elements';
import Header from '../../components/Header';
import theme from '../../config/theme/index';
import Arrow from 'react-native-vector-icons/Ionicons';
import {BasicButton} from '../../components/button/index';
import MainView from '../../components/Layouts/MainView/index';
import FlexView from '../../components/Layouts/FlexView/index';
import {View, KeyboardAvoidingView, Button} from 'react-native';
import {InputWithFormik} from '../../components/InputCustom/index';
import {useMutation, useQuery} from '@apollo/client';
import {UPDATEPROFILE} from '../../gql/mutations';
import {GETCURRENTUSER} from '../../gql/queries';
import Loader from '../../components/Loader';
import ShowMessage, {type} from '../../components/showMessage';
import InputPicker from '../../components/picker'
import Textarea from 'react-native-textarea'

const index = (props) => {
  const [updatePersonProfile, {loading, error}] = useMutation(UPDATEPROFILE,{
    awaitRefetchQueries: true,
    refetchQueries: [
      {
        query: GETCURRENTUSER,
      },
    ],
  });
  const onSubmit = async (values) => {
    const data = {
      fullName: values.Fullname,
      address: values.Address,
      phone: values.Phonenumber,
      email: values.Email,
      gender: values.Gender,
      nationality: values.Nationality,
      bio: values.Bio,
      state: values.State,
    };
    await updatePersonProfile({
      variables: {
        data,
      },
    })
      .then((res) => {
        ShowMessage(type.DONE, 'Profile Updated');
        props.navigation.goBack();
      })
      .catch((e) => ShowMessage(type.ERROR, e.message));
  };

  const {loading: load, error: error1, data} = useQuery(GETCURRENTUSER);
  if (load) return <Loader />;
  if (error1) return <Text>{error1.message}</Text>;
  const {email, phone, profileData} = data.getCurrentUser;
  const initialValues = {
    Fullname: profileData !== null ? profileData.fullName : '',
    Phonenumber: phone ? phone : '',
    Email: email ? email : '',
    Address: profileData !== null ? profileData.address : '',
    State: profileData !== null ? profileData.state : '',
    Nationality: profileData !== null ? profileData.nationality : '',
    Gender: profileData !== null ? profileData.gender : '',
    Bio: profileData !== null ? profileData.bio : '',
  };
  const PickerOptions = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
  ]
  return (
    <MainView scrollable>
      <Header backArrow headerText="Profile Settings" editProfileIcon />
      <View style={styles.mainContainer}>
        <KeyboardAvoidingView>
          <View style={styles.mainBody}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({values, handleChange, handleSubmit}) => (
                <View style={{paddingHorizontal: theme.horizontalPaddingMd}}>
                  <View>
                    <InputWithFormik
                      name="Fullname"
                      placeholder="Full Name"
                      value={values.Fullname}
                      onChangeText={handleChange('Fullname')}
                    />

                    <InputWithFormik
                      name="Email"
                      placeholder="Email"
                      value={values.Email}
                      keyboardType="email-address"
                      onChangeText={handleChange('Email')}
                    />
                    <InputWithFormik
                      name="Address"
                      placeholder="Address"
                      value={values.Address}
                      onChangeText={handleChange('Address')}
                    />
                    <InputWithFormik
                      name="State"
                      placeholder="State"
                      value={values.State}
                      onChangeText={handleChange('State')}
                    />
                    <InputWithFormik
                      name="Phonenumber"
                      placeholder="Phone Number"
                      value={values.Phonenumber}
                      keyboardType="phone-pad"
                      onChangeText={handleChange('Phonenumber')}
                    />
                    <InputWithFormik
                      name="Nationality"
                      placeholder="Nationality"
                      value={values.Nationality}
                      onChangeText={handleChange('Nationality')}
                    />
                    <InputPicker
                      name="Gender"
                      PickerOptions={PickerOptions}
                      placeholder="Gender"
                      selectedValue={values.Gender}
                      onValueChange={handleChange('Gender')}
                      pickerContainerStyle={styles.pickerContainer}
                    />
                    <Textarea
                      name="Bio"
                      placeholder="Bio"
                      value={values.Bio}
                      onChangeText={handleChange('Bio')}
                      style={styles.textArea}
                    />
                    <FlexView justifyContent="flex-start">
                      <BasicButton
                        buttonText={
                          loading ? <Loader size="small" /> : 'Update Profile '
                        }
                        textSize="medium"
                        onPress={handleSubmit}
                      />
                    </FlexView>
                  </View>
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
