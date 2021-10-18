import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import MainView from '../../../components/Layouts/MainView';
import {Formik} from 'formik';
import {InputWithFormik} from '../../../components/InputCustom';
import FlexView from '../../../components/Layouts/FlexView';
import {BasicButton} from '../../../components/button';
import {styles} from './styles';
const index = () => {
  const initialValues = {
    Email: '',
  };
  return (
    <MainView>
      <View style={styles.container}>
        <FlexView flexDir="column">
          <Text h4> RECOVER PASSWORD</Text>
          <Text style={styles.headerMessage}>
            Enter email associated with your account
          </Text>
        </FlexView>

        <Formik initialValues={initialValues}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <View>
                <View
                  style={{
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {/* <Text>Juliet</Text> */}
                </View>
                <InputWithFormik
                  name="Email"
                  placeholder="Email"
                  value={values.Email}
                  keyboardType="email-address"
                  onChangeText={handleChange('Email')}
                />
              </View>

              <BasicButton
                buttonText="RECOVER PASSWORD"
                textSize="medium"
                onPress={() => console.log('Password Recovered')}
              />
            </>
          )}
        </Formik>

        <FlexView>
          <TouchableOpacity onPress={()=> alert('#EndSARS')}>
            <Text style={styles.details}>Try another way</Text>
          </TouchableOpacity>
        </FlexView>
      </View>
    </MainView>
  );
};

export default index;
