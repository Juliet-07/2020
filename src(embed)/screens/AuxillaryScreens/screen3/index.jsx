import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from '../styles';
import theme from '../../../config/theme';
import {BasicButton, OutlineButton} from '../../../components/button';
import Logo from '../../../assets/images/screen3.png';

const index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={Logo} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.boldText}>Gamified Learning</Text>
        <Text style={styles.text}>
          Learning Has Never Been Better, Learn{'\n'} With Ease, From The
          Comfort Of Your {'\n'} Own, Learn Only What Matters.
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <BasicButton
          onPress={() => navigation.navigate('Signup')}
          buttonText="Get Started"
          width="100%"
          buttonStyle={{marginTop: 8}}
        />
        <OutlineButton
          onPress={() => navigation.navigate('Signin')}
          buttonText="Login"
          buttonStyle={{marginTop: 2}}
          width="100%"
        />
        <Text style={styles.privacy}>Privacy Policy. Terms and Conditions</Text>
      </View>
    </View>
  );
};

export default index;
