import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import {useDeleteVoiture} from '../../services/deleteVoiture';
import {useGetVoitures} from '../../services/getVoitures';
import {useVoitureCtx} from '../../store/voiture';
import themes from '../../theme';
import {IVoitureNbLocation} from '../../types';
import SectionTitle from '../public/SectionTitle';
import {useGetLocations} from '../../services/getLocations';
import {useLocationCtx} from '../../store/location';

const ListItem: FC<{
  item: IVoitureNbLocation;
  modeLocation: boolean;
}> = ({item, modeLocation}) => {
  const {submit} = useDeleteVoiture(item.idVoiture);
  const navigation = useNavigation();

  const navigateToUpdate = () => {
    if (!modeLocation) {
      navigation.navigate('update-voiture', item);
    } else {
      navigation.navigate('manage-location', item);
    }
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
          <Text>Numero: {item.idVoiture}</Text>
          <Text>Designation: {item.designation}</Text>
          <Text>Loyer journalier: {item.loyer}Ar</Text>
        </View>
      </View>
      {!modeLocation ? (
        <Ionicons
          name="trash-outline"
          size={themes.space * 2}
          style={tailwind('mr-5')}
          color="red"
          onPress={submit}
        />
      ) : (
        <View>
          <View
            style={[
              tailwind('p-2 rounded-full border-opacity-0'),
              {backgroundColor: themes.colors.secondary},
            ]}>
            <Text style={tailwind('text-white font-bold')}>
              Nb location: {item.nbLocation}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const ListVoiture: FC<{
  modeLocation: boolean;
}> = ({modeLocation}) => {
  useGetVoitures();
  useGetLocations();
  const {filteredVoitures} = useVoitureCtx();
  const {state} = useLocationCtx();

  const renderItem = ({item}: {item: IVoitureNbLocation}) => {
    return <ListItem item={item} modeLocation={modeLocation} />;
  };

  const voitureNbLocation: IVoitureNbLocation[] = filteredVoitures.map((v) => {
    return {
      ...v,
      nbLocation: state.locations.filter((elt) => elt.idVoiture === v.idVoiture)
        .length,
    };
  });

  return (
    <>
      <SectionTitle iconName="list" text="Liste de voiture" />
      <FlatList
        data={voitureNbLocation}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.idVoiture)}
      />
    </>
  );
};

export default ListVoiture;
