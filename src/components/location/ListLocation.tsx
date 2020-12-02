import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import themes from '../../theme';
import SectionTitle from '../public/SectionTitle';

const DATA = [
  {
    locataire: 'Rabe',
    date: Date.now().toString(),
    nbJour: '25',
    montant: '2000',
  },
  {
    locataire: 'Rakoto',
    date: Date.now().toString(),
    nbJour: '12',
    montant: '7000',
  },
  {
    locataire: 'Randria',
    date: Date.now().toString(),
    nbJour: '30',
    montant: '25000',
  },
];

const ListItem: FC<{
  item: typeof DATA[0];
}> = ({item}) => {
  const navigation = useNavigation();

  const navigateToUpdate = () => {
    navigation.navigate('update-location');
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
          <Text>Locataire: {item.locataire}</Text>
          <Text>Date: {item.date}</Text>
          <Text>Nb jour: {item.nbJour}</Text>
          <Text>Montant: {item.montant}</Text>
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

const ListLocation: FC = () => {
  const renderItem = ({item}: {item: typeof DATA[0]}) => {
    return <ListItem item={item} />;
  };

  return (
    <View>
      <SectionTitle iconName="list" text="Liste de location" />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.locataire}
      />
    </View>
  );
};

export default ListLocation;
