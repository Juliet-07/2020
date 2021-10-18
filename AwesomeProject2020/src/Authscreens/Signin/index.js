import React, {useState, useContext} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {Obutton} from '../../components/button';
import {InputWithFormik} from '../../components/input';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {AuthContext} from '../../AuthContext'

const Index = ({navigation}) => {
  const [show, setShow] = useState(true);
  const {signIn} = useContext(AuthContext);
  const initialValues = {
    Username: '',
    Password: '',
  };
const {navigate} = navigation
const loginHandle = (Username, Password) =>{
  signIn(Username, Password)
}
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.header}>Login</Text>
      </View>

      <Formik initialValues={initialValues}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <InputWithFormik
              name="Username"
              placeholder="Username"
              value={values.Username}
              
              onChangeText={handleChange('Username')}
              rightIcon={
                <EvilIcons name="person" color="#00000080" size={20} />
              }
            />
            <InputWithFormik
              name="Password"
              placeholder="Password"
              value={values.Password}
              onChangeText={handleChange('Password')}
              secureTextEntry={show}
              rightIcon={
                <TouchableOpacity onPress={() => setShow(!show)}>
                  <Entypo
                    name={show ? 'eye' : 'eye-with-line'}
                    color="#00000080"
                    size={20}
                  />
                </TouchableOpacity>
              }
            />

            <View style={styles.btnContainer}>
              <Obutton
                title="Login"
                onPress={()=>{loginHandle(initialValues.Username, initialValues.Password)}}
                buttonStyle={styles.button}
                // loading={loading}
                // disabled={loading}
              />
            </View>
          </>
        )}
      </Formik>
      <View style={{marginBottom: 25}}>
        <Text style={styles.texts}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigate('Signup')}>
          <Text style={[styles.texts, styles.signUp]}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
