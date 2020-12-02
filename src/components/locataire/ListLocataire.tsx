import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import themes from '../../theme';
import SectionTitle from '../public/SectionTitle';

const DATA = [
  {
    numLocataire: '123',
    nom: 'Fil',
    adresse: 'tanambao',
  },
  {
    numLocataire: '456',
    nom: 'Filibert',
    adresse: 'ampasambazaha',
  },
  {
    numLocataire: '789',
    nom: 'Teo',
    adresse: 'Ampitatafika',
  },
];

const ListItem: FC<{
  item: typeof DATA[0];
}> = ({item}) => {
  const navigation = useNavigation();

  const navigateToUpdate = () => {
    navigation.navigate('update-locataire');
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
          <Text>Numero: {item.numLocataire}</Text>
          <Text>Nom: {item.nom}</Text>
          <Text>Adresse: {item.adresse}</Text>
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

const ListLocataire: FC = () => {
  const renderItem = ({item}: {item: typeof DATA[0]}) => {
    return <ListItem item={item} />;
  };

  return (
    <View>
      <SectionTitle iconName="list" text="Liste de locataire" />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.numLocataire}
      />
    </View>
  );
};

export default ListLocataire;
