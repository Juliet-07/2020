import React, {useState} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {styles} from './styles';
import theme from '../../../config/theme';
import Header from '../../../components/Header/index';
import {BasicButton} from '../../../components/button';
import MainView from '../../../components/Layouts/MainView';
import FlexView from '../../../components/Layouts/FlexView';
import BackIcons from 'react-native-vector-icons/Ionicons';
import {SearchBar, Text} from 'react-native-elements';
import {CustomCard} from '../../components/card';
import Logo from '../../../assets/images/Logo.png';
import Logo1 from '../../../assets/images/screen1.png';
import Logo2 from '../../../assets/images/screen2.png';
import Logo3 from '../../../assets/images/screen3.png';


const index = ({navigation}) => {
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);

    console.log(search, 'state');
  };
  const studentname = [
    {
      name: 'Onoriode Blossom',
      key: 7,
      Image: Logo,
      body: 'Primary 1',
    },
    {
      name: 'Kelvin Sweetness',
      key: 6,
      Image: Logo,
      body: 'Primary 1',
    },
    {
      name: 'James Blessed',
      key: 5,
      Image: Logo,
      body: 'Primary 1',
    },
    {
      name: 'Winner Chidera',
      key: 4,
      Image: Logo3,
      body: 'Primary 1',
    },
    {
      name: 'Sam Osas',
      key: 3,
      Image: Logo2,
      body: 'Primary 1',
    },
    {
      name: 'Blessed Daniel',
      key: 2,
      Image: Logo1,
      body: 'Primary 1',
    },
    {
      name: 'Onoriode Blossom',
      key: 1,
      Image: Logo,
      body: 'Primary 1',
    },
  ];

  const filteredArray = studentname.filter(({name}) => {
    return name.toLowerCase().includes(search.toLowerCase());
  });

  
  return (
    <MainView scrollable>
      <Header backArrow headerText="Subscription" />
      <View style={styles.container}>
        <ScrollView>
          <FlexView width="60%">
            <Text style={styles.subTitle} h5>
              SELECT CHILDREN
            </Text>
          </FlexView>
          {/* <FlexView> */}

          <SearchBar
            placeholder="Search Bar"
            onChangeText={updateSearch}
            value={search}
            containerStyle={{
              backgroundColor: 'transparent',
              borderBottomColor: 'transparent',
              borderTopColor: 'transparent',
            }}
            inputContainerStyle={{
              backgroundColor: theme.search,
              borderColor: 'green',
              width: '100%',
            }}
          />
          <View style={styles.cardContainer}>
            {filteredArray.map(({name, key, Image, body}) => (
              <CustomCard
                key={key}
                cardContent={[
                  {
                    action: (
                      <View style={{width: '100%'}}>
                        <BasicButton
                          onPress={() => alert('Basic')}
                          buttonText="Add to list"
                          width={70}
                        />
                      </View>
                    ),

                    imageUrl: Image,
                    title: name,
                    bodyContent: 'Class :' + body + '123last-suscribed',
                  },
                ]}
                cardWith={124}
                alignCenter></CustomCard>
            ))}
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              width: '87%',
              justifyContent: 'center',
              height: 120,
            }}>
            <BasicButton
              buttonText="Coutinue"
              onPress={() => navigation.navigate('Screen2')}
              buttonStyle={{backgroundColor: theme.secondary, width: 90}}
            />
          </View>
        </ScrollView>
      </View>
    </MainView>
  );
};

export default index;
