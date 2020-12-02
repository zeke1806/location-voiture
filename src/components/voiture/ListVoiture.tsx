import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import themes from '../../theme';
import SectionTitle from '../public/SectionTitle';

const DATA = [
  {
    numVoiture: '123',
    designation: 'Dodge',
    lj: '2M',
  },
  {
    numVoiture: '456',
    designation: 'Ferrari',
    lj: '2M',
  },
  {
    numVoiture: '789',
    designation: 'Nissan',
    lj: '2M',
  },
];

const ListItem: FC<{
  item: typeof DATA[0];
}> = ({item}) => {
  const navigation = useNavigation();

  const navigateToUpdate = () => {
    navigation.navigate('update-voiture');
  };

  return (
    <TouchableOpacity
      style={tailwind('flex-row p-1 justify-between')}
      onPress={navigateToUpdate}>
      <View style={tailwind('flex-row')}>
        <Ionicons
          name="document-outline"
          size={themes.space * 2}
          style={tailwind('mr-5')}
        />
        <View>
          <Text>Numero: {item.numVoiture}</Text>
          <Text>Designation: {item.designation}</Text>
          <Text>Loyer journalier: {item.lj}</Text>
        </View>
      </View>
      <Ionicons
        name="trash-outline"
        size={themes.space * 2}
        style={tailwind('mr-5')}
        color="red"
      />
    </TouchableOpacity>
  );
};

const ListVoiture: FC = () => {
  const renderItem = ({item}: {item: typeof DATA[0]}) => {
    return <ListItem item={item} />;
  };

  return (
    <View>
      <SectionTitle iconName="list" text="Liste de voiture" />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.numVoiture}
      />
    </View>
  );
};

export default ListVoiture;
