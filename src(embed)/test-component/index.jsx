import React from 'react';
import {withTheme} from 'react-native-elements';
import {BasicButton, OutlineButton} from '../components/button/index';
import {StyledViewWrapper, SubjectCardWrapper} from './styles';
import {Alert} from 'react-native';
import CustomInput from './CustomInput';

import {CustomCard} from '../parent/components/card';
import {SubjectCard} from '../learner/components/subject-card';
import IjeListItem from '../learner/components/ije-list-item';
// const submit = (name) => Alert.alert(name);

const cardContent = [
  {
    imageUrl: require('../assets/images/dummy-images/712496.jpg'),
    title: 'Haspirion bridge',
    bodyContent:
      'The idea with React Native Elements is more about component structure than actual design.',
    action: (
      <OutlineButton
        onPress={() => alert('Basic')}
        buttonText="View now"
        width={100}
        background="#2E384D"
      />
    ),
  },
  {
    imageUrl: require('../assets/images/dummy-images/assassins_creed_desmond_miles_hats_red_look_19649_2560x1024.jpg'),
    title: 'Yosemite',
    bodyContent:
      'The idea with React Native Elements is more about component structure than actual design.',
    action: (
      <BasicButton
        onPress={() => alert('Basic')}
        buttonText="View now"
        width={100}
      />
    ),
  },
  {
    imageUrl: require('../assets/images/dummy-images/annapurna-massif-5120x2880-himalayas-nepal-mountains-sunrise-minimal-8112.jpg'),
    title: 'The witchere',
    bodyContent: 'The idea with React Native Elements is ',
    action: (
      <BasicButton
        onPress={() => alert('Basic')}
        buttonText="View now"
        width={100}
        variant="secondary"
      />
    ),
  },
  {
    imageUrl: require('../assets/images/dummy-images/mountain-range-5120x2880-hd-12877.jpg'),
    title: 'Clitch Lion',
    bodyContent: 'The idea with React Native Elements is more ',
    action: (
      <OutlineButton
        onPress={() => alert('Clitch Lion')}
        buttonText="View now"
        width={100}
        outlineColor="#2E384D"
      />
    ),
  },
];

const Test = () => {
  return (
    <StyledViewWrapper>
      {/* <BasicButton
        width={200}
        onPress={() => submit('Basic')}
        buttonText="Basic"
        shadow
      />
      <OutlineButton
        onPress={() => submit('Outline')}
        buttonText="Outline"
        variant="secondary"
        outlineColor="#2E384D"
        width={200}
      /> */}
      {/* <CustomCard cardWith={160} cardContent={cardContent} /> */}

      {/* <CustomInput /> */}
      <IjeListItem itemColor="#2E384D" />
      <SubjectCardWrapper>
        <SubjectCard subjectName="Computer Technology." />
        <SubjectCard subjectName="Mathematics" />
      </SubjectCardWrapper>
      {/* <SubjectCard subjectName="Civic Education" />
      <SubjectCard subjectName="English Language" />
      <SubjectCard subjectName="Geography" /> */}
    </StyledViewWrapper>
  );
};
export default withTheme(Test);
