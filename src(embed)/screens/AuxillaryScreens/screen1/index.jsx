import React, {useState} from 'react';
import {Text, View, Image, Button} from 'react-native';
import {styles} from '../styles';
import theme from '../../../config/theme';
import {BasicButton} from '../../../components/button';
import Logo from '../../../assets/images/screen1.png';
import Onboarding from 'react-native-onboarding-swiper';
import Dot from 'react-native-onboarding-swiper/src/Dot';
import {color} from 'react-native-reanimated';

//onboarding screen 1

const Screen1Title = () => {
  return (
    <View>
      <Text style={styles.boldText}>
        Learn What Matters,{'\n'}Learn At Ease
      </Text>
    </View>
  );
};

const Screen1Subtitle = () => {
  return (
    <View>
      <Text style={styles.text}>
        Learning Has Never Been Better, Learn{'\n'} With Ease, From The Comfort
        Of Your {'\n'} Own, Learn Only What Matters.
      </Text>
    </View>
  );
};

//onboarding screen 2
const Screen2Title = () => {
  return (
    <View>
      <Text style={styles.boldText}>
        Professional and {'\n'} Qualified Teachers
      </Text>
    </View>
  );
};

const Screen2Subtitle = () => {
  return (
    <View>
      <Text style={styles.text}>
        Learning Has Never Been Better, Learn{'\n'} With Ease, From The Comfort
        Of Your {'\n'} Own, Learn Only What Matters.
      </Text>
    </View>
  );
};

const index = ({navigation}) => {
  const {navigate} = navigation;

  // removed the default skip button that comes with the package {react-native swiper}
  const Skip = () => <View style={{marginLeft: 22, width: '0%'}}></View>;

  // made changes to the custom Next button that comes with package {react-native swiper}
  const Next = ({...props}) => (
    <View style={{marginRight: 22}}>
      <BasicButton buttonText="Next" width={100} {...props} />
    </View>
  );

  // made changes to the custom done button to Next button
  const Done = () => (
    <View style={{marginRight: 22}}>
      <BasicButton
        buttonText="Next"
        width={100}
        color={theme.primary}
        onPress={() => navigate('Screen3')}
      />
    </View>
  );

  return (
    <Onboarding
      // props for flexibility
      DoneButtonComponent={Done}
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      bottomBarHeight={120}
      bottomBarColor={'white'}
      onSkip={() => navigate('Screen3')}
      onDone={() => navigate('Screen3')}
      pages={[
        {
          backgroundColor: 'white',
          image: (
            <Image
              source={require('../../../assets/images/screen1.png')}
              style={styles.image}
            />
          ),

          title: <Screen1Title />,
          subtitle: <Screen1Subtitle />,
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../../assets/images/screen2.png')}
              style={styles.image}
            />
          ),
          title: <Screen2Title />,
          subtitle: <Screen2Subtitle />,
        },
      ]}
    />
  );
};

export default index;

