import React, {useEffect, useState, useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import MainView from '../../../components/Layouts/MainView';
import FlexView from '../../../components/Layouts/FlexView';
import {BasicButton} from '../../../components/button';
import CodeInput from 'react-native-confirmation-code-input';
import {styles} from './styles';
import AsyncStorage from "@react-native-community/async-storage";
import {useMutation} from '@apollo/client'
import {VERIFY} from '../../../gql/mutations'
import ShowMessage, {type} from '../../../components/showMessage'
import {AuthContext} from '../../../AuthContext'
const index = ({navigation}) => {
  const [state, setState] = useState({
    value: '',
    email: '',
  });
  const [value, setValue] = useState('');
  const {navigate} = navigation;
  const [userActivateMobile, {loading, error}] = useMutation(VERIFY)
  const {verification} = useContext(AuthContext)
  useEffect(()=>{
    const getVerified = async () =>{
      const email = await AsyncStorage.getItem('verify')
      if(email){
        return setState({
          ...state,
          email
        })
      }
    }
    getVerified()
  }, [])
  const handleVerification = async ()=>{
    const data = {
      pin: value && value.toString(),email:state.email
    }
    console.log(value)
    await userActivateMobile({
      variables:{
        data
      }
    }). then(async(res)=>{
      const token = res.data.userActivateMobile.token
      verification(token)
      ShowMessage(type.DONE, 'Verification Successful')
    })
    .catch((e)=>ShowMessage(type.ERROR, e.toString()))
  }
  return (
    <MainView scrollable>
      <View style={styles.container}>
        <FlexView flexDir="column">
          <Text h4> Verify your Account Here</Text>
          <View style={{marginTop:30}}>
            <Text style={styles.text}>
            We have sent an OTP to your email.{'\n'}Please enter the 4-digit
            code sent to{'\n'}you in the field below
          </Text>
          </View>
          
        </FlexView>

        <View style={{marginTop: 35, marginBottom:35, alignItems: 'center'}}>
          <CodeInput
            space={4}
            size={50}
            codeInputStyle={{
              backgroundColor: '#E5E7E6',
              borderBottomColor: 'purple',
              borderBottomWidth: 3,
              color: 'black',
            }}
            codeLength={4}
            keyboardType="number-pad"
            activeColor="transparent"
            inactiveColor="transparent"
            inputPosition="left"
            onFulfill={(code) => {
              console.log(code, 'code');
              setValue(code);
            }}
          />
        </View>
        <View style={{marginBottom:30}}>
          <BasicButton
            buttonText="Verify"
            textSize="meduim"
            onPress={handleVerification}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.resendOtp}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
    </MainView>
  );
};
export default index;
