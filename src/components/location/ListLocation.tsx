import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import {useLocationCtx} from '../../store/location';
import themes from '../../theme';
import {ILocation, IVoiture} from '../../types';
import SectionTitle from '../public/SectionTitle';

const ListItem: FC<{
  item: ILocation;
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
          <Text>Locataire: {item.nom}</Text>
          <Text>Date: {item.date}</Text>
          <Text>Nb jour: {item.nbJour}</Text>
          <Text>Montant: {item.loyer}</Text>
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

const ListLocation: FC<{
  voiture: IVoiture;
}> = ({voiture}) => {
  const {state} = useLocationCtx();

  const renderItem = ({item}: {item: ILocation}) => {
    return <ListItem item={item} />;
  };

  const voitureLocations = state.locations
    .filter((loc) => loc.idVoiture === voiture.idVoiture)
    .map((loc) => ({
      ...loc,
      loyer: loc.loyer * loc.nbJour,
    }));

  return (
    <>
      <SectionTitle iconName="list" text="Liste de location" />
      <FlatList
        data={voitureLocations}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.idLouer)}
      />
    </>
  );
};

export default ListLocation;
