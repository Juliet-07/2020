import React, {useState} from 'react';
import MathIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import theme from '../../../config/theme';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Differentiation and polynomials',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Differentiation and polynomials',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Differentiation and polynomials',
  },
];

const Item = ({
  item,
  onPress,
  style,
  titleColor,
  borderColor,
  borderWidth,
  iconBG,
  display,
  iconColor,
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={[styles.iconWrapper, borderColor, borderWidth]}>
      <View style={[styles.icon, borderColor, borderWidth, iconBG]}>
        {display ? (
          <MathIcon name="math-integral" size={20} color={iconColor} />
        ) : (
          <Icons name="ios-git-commit-outline" size={25} color={iconColor} />
        )}
      </View>
    </View>
    <View style={styles.itemTitle}>
      <Text style={[styles.title, titleColor]}>{item.title}</Text>
      <Text style={[styles.subject, titleColor]}>Math</Text>
      <View style={styles.time}>
        <Icons name="time-outline" color="orange" />

        <Text style={[styles.timeText, titleColor]}>Jun 3 - Sept 9</Text>
      </View>
    </View>
    {display && (
      <Text style={[styles.title, titleColor]}>
        <Icons name="play-outline" size={30} color="white" />
      </Text>
    )}
  </TouchableOpacity>
);

const IjeListItem = ({itemColor}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6C006C' : 'transparent';
    const backgroundColor2 =
      item.id === selectedId ? '#fff' : itemColor || '#6C006C';
    const color = item.id === selectedId ? '#fff' : '#2E384D';
    const borderColor =
      item.id === selectedId ? '#fff' : itemColor || '#6C006C';
    const borderWidth = item.id === selectedId ? 1 : 1;
    const iconColor = item.id === selectedId ? theme.secondary : '#fff';

    const display = item.id === selectedId;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{backgroundColor, borderColor, borderWidth}}
        titleColor={{color}}
        borderColor={{borderColor}}
        borderWidth={{borderWidth}}
        iconBG={{backgroundColor: backgroundColor2}}
        display={display}
        iconColor={iconColor}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 20,
    paddingBottom: 20,
  },
  item: {
    padding: 7,
    marginVertical: 8,
    marginHorizontal: 16,
    paddingLeft: 12,
    paddingRight: 20,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: 'white',
  },
  itemTitle: {
    flex: 1,
  },
  iconWrapper: {
    height: 48,
    width: 48,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    height: 43,
    width: 43,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subject: {
    fontSize: 11,
    marginTop: 2,
    marginBottom: 7,
    opacity: 0.6,
  },
  timeText: {
    fontSize: 10,
    paddingLeft: 5,
    opacity: 0.5,
  },
});

export default IjeListItem;
